import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect,signInWithPopup, GoogleAuthProvider,FacebookAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: 'select_account',
  });
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
 
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;  
    const userDocRef = doc(db, 'users', userAuth.uid);
   
    const userSnapshot = await getDoc(userDocRef);
   
    if(!userSnapshot.exists()){
        const { displayName,email} = userAuth;
        const createdAt  = new Date();
        try{
            await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation,

                });
        }catch (error){
            console.log('error de registro de usuario',error.message);
        }
    }
    return userDocRef;
  }
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth, email, password);
  }
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}