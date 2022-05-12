import { useState } from "react";

import { auth, createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Boton from "../boton/boton.component";
import './registrar-login-form.style.scss';
const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const RegistrarLoginForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if( password != confirmPassword ){
            alert("Las contraseñas no coinciden");
            return ;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        } catch(error){
            if(error.code == 'auth/email-already-in-use')
            alert("Usuario ya registrado en la base de datos")
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value});
    };
    return(
        <div className="sing-up-container">
            <h2>Si no tienes una cuenta ?</h2>
            <h1>Ingresar tu contraseña y password</h1>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}></FormInput>

                <FormInput label="Email" name="email" type="email" required onChange={handleChange} value={email}></FormInput>

                <FormInput label="Password" name="password" type="password" required value={password} onChange={handleChange}></FormInput>

                <FormInput label="Confirm Password" name="confirmPassword" type="password" required  onChange={handleChange} value={confirmPassword}></FormInput>

                <Boton type="submit" >Enviar Datos</Boton>
                
            </form>
        </div>
    );
};
export default RegistrarLoginForm;