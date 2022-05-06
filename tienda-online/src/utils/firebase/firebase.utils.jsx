import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore ,doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbV5SSzOv-W6fb-j521cTlp9E-6GvXF9U",
    authDomain: "terancito-react.firebaseapp.com",
    projectId: "terancito-react",
    storageBucket: "terancito-react.appspot.com",
    messagingSenderId: "891693082021",
    appId: "1:891693082021:web:f4d12c03afa7682753744c"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: 'select_account',
  });
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName,email} = userAuth;
        const createdAt  = new Date();
        try{
            await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt,

                });
        }catch (error){
            console.log('error de registro de usuario',error.message);
        }
    }
  }