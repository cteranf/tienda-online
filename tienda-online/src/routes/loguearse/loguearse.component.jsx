import RegistrarLoginForm from '../../componentes/registrar-login-form/registrar-login-form.component';
import LoginForm from '../../componentes/login-form/login-form.component';
import './loguearse.style.scss';

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
    
    
    return(
        <div className='authentication-container'>
            <LoginForm></LoginForm>
            <RegistrarLoginForm></RegistrarLoginForm>
        </div>
    )

}
export default Loguearse;