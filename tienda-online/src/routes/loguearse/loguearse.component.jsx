import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


const Loguearse = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
       const userDocRef = await  createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1> Pagina de Login</h1>
            <button onClick={ logGoogleUser } >Log con google</button>
        </div>
    )

}
export default Loguearse;