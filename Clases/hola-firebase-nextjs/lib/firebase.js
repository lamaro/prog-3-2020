import firebase from 'firebase';


// Crear archivo .env.local con los siguientes keys. Luego borrar estos comentario
// NEXT_PUBLIC_FIREBASE_API_KEY=
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
// NEXT_PUBLIC_FIREBASE_DATABASE_URL=
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
// NEXT_PUBLIC_FIREBASE_APP_ID=
// NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=




export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
//const storage = firebase.storage();
export { auth, db, now };
console.log(app.name ? 'Firebase 1 - Firebase Activated!' : 'Firebase not working :(');