import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './useUser';
import { getUserFromCookie } from "./userCookies";

export const useProtected = () => {
    const auth = useAuth();
    const router = useRouter();
    useEffect(() => {
        const userFromCookie = getUserFromCookie();
        if (!userFromCookie) {
            router.push("/login");
            return;
        }
    }, [auth, router]);

    return auth;
};