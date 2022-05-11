/*import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';*/
import { auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';
import LoginForm from '../../componentes/login-form/login-form.component';


 const Loguearse = () => {
 /*  useEffect(() => {
        async function check(){
        const response = await getRedirectResult(auth);
        if(response) {
            const userDocRef =  await createUserDocumentFromAuth(response.user);
        }
    }
    check()
    },[]);
    */
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
       const userDocRef = await  createUserDocumentFromAuth(user);
    }
    
    return(
        <div>
            <h1> Pagina de Login</h1>
            <button onClick={ logGoogleUser }>Logearse popup</button> 
            <LoginForm></LoginForm>
        </div>
    )

}
export default Loguearse;