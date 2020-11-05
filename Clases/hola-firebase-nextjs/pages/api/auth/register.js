// Importo base de datos de firabase
import { db, auth } from "lib/firebase";
import cookie from "cookie";
export default async (req, res) => {
    const {
        name,
        //  lastname,
        //  username,
        // dni,
        email,
        password,
    } = req.body;
    await auth
        .createUserWithEmailAndPassword(email, password)
        .then(async (response) => {
            console.log('Firebase 2 - Usuario creado en base de auth')

            // Mail de verificacion de correo
            auth.currentUser.sendEmailVerification();

            // Crear una nueva entrar en la coleccion usuarios con el mismo ID que el de la autenticacion
            return await db
                .collection("users")
                .doc(response.user.uid)
                .set(
                    {
                        nombre: name,
                        //  apellido: lastname,
                        //   username,
                        //   dni,
                        favoritos: [],
                        email: email,
                        posts: []
                    }
                )
                .then(() => {
                    console.log("Firebase 3 - Usuario creado en Base Firestore");

                    // Manda la usuario dentro del browser
                    // res.writeHead(302, { Location: "/login" }); //NOT WORKING

                    res.status(200).json({ message: 'Usuario Creado', name, email })
                    res.end();
                })
                .catch((error) =>
                    console.log("Hubo un error creando el usuario", error)
                );
        })
        .catch((error) => {
            console.error('Error de firebase', error);
            res.status(error.status || 500).json({
                code: error.code,
                error: error.message,
            });
        });
};