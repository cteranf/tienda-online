import { useState } from "react";

import { auth, createAuthUserWithEmailAndPassword,createUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Boton from "../boton/boton.component";
import './login-form.style.scss';
const defaultFormFields = {
    email:'',
    password:'',
    
}

const LoginForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
       await createUserDocumentFromAuth(user);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch(error){
           switch(error.code){
               case 'auth/wrong-password':
                   alert("Contraseña Incorrecta");
                   break;
                case 'auth/user-not-found':
                    alert("Usuario no registrado");
                    break;
                default:
                    console.log(error);
           }    
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value});
    };
    return(
        <div className="sing-up-container">
            <h2>Si tienes una cuenta ?</h2>
            <h1>Ingresar tu contraseña y password</h1>
            <form onSubmit={handleSubmit}>
                
              
                <FormInput label="Email" name="email" type="email" required onChange={handleChange} value={email}></FormInput>

                <FormInput label="Password" name="password" type="password" required value={password} onChange={handleChange}></FormInput>

                <div className="buttons-container">
                    <Boton type="submit" >Ingresar</Boton>
                    <Boton type="button" buttonType='google' onClick={logGoogleUser}>Google</Boton>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;