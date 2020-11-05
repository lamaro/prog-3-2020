import { useEffect, useState, useContext, createContext } from "react";
import { useRouter } from "next/router";
import { auth, db } from "./firebase";
import {
    removeUserCookie,
    setUserCookie,
    getUserFromCookie,
} from "./userCookies";
import { mapUserData } from "./mapUserData";

//Context Provider
const authContext = createContext({ user: {} });
const { Provider } = authContext;

export function AuthProvider(props) {
    const auth = useUser();
    return <Provider value={auth}>{props.children}</Provider>;
}
export const useAuth = () => {
    return useContext(authContext);
};

const useUser = () => {
    const [user, setUser] = useState();
    const router = useRouter();

    //WIP--------
    // const handleAuthStateChanged = (user) => {
    //     setUser(user);
    //     if (user) {
    //         getUserAdditionalData(user);
    //     }
    // };

    // const getUserAdditionalData = (user) => {
    //     return db
    //         .collection('users')
    //         .doc(user.uid)
    //         .get()
    //         .then((userData) => {
    //             if (userData.data()) {
    //                 setUser(userData.data());
    //             }
    //         });
    // };

    // useEffect(() => {
    //     const unsub = auth.onAuthStateChanged(handleAuthStateChanged);
    //     return () => unsub();
    // }, []);

    useEffect(() => {
        const cancelAuthListener = auth.onIdTokenChanged((user) => {
            if (user) {
                const userData = mapUserData(user);
                setUserCookie(userData);
                setUser(userData);
            } else {
                removeUserCookie();
                setUser();
            }
        });
        const userFromCookie = getUserFromCookie();
        if (!userFromCookie) {
            router.push("/login");
            return;
        }
        setUser(userFromCookie);
        return () => {
            cancelAuthListener();
        };
    }, []);

    const login = async ({ email, password }) => {
        return auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response)
                router.push("/dashboard");
            })
            .catch((error) => console.log(error));
    };

    const logout = async () => {
        return auth
            .signOut()
            .then(() => {
                // Sign-out successful.
                router.push("/login");
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return { user, login, logout };
};

export { useUser };