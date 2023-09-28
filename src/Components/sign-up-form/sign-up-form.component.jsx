import { useContext, useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "./form-input.component";
import { UserContext } from "../../contexts/user.context";
import MyButton from "../Button/button.component";

const SignUpForm = () => {

    const defaultFormFields = {
        // ssnit: '',
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [ formFields, setFormfields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    // const { setCurrentUser } = useContext(UserContext)

    // console.log(formFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormfields({...formFields, [name]: value})
    }

    // const resetFormFields = () => {
    //     setFormfields(defaultFormFields);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Oops..! Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // setCurrentUser(user);
            await createUserDocumentFromAuth(user, { displayName });
            setFormfields(defaultFormFields);
            alert(displayName+' added to database..!');
            
        } catch (error) {
            // console.log('ErrMsg: ', error);
            if (error.code === 'auth/email-already-in-use') {
                alert('Oops..! Email already in use');
                return;
            }
            console.log('User creation encountered an error: ', error);
        }
    }

    return (

        <div>
            <h2>Don't have an Account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* <FormInput label='SSNIT No' type="number" onChange={handleChange} name="ssnit" value={ssnit} placeholder="Type Here..." required/> */}

                <FormInput label='Display Name'  type="text" onChange={handleChange} name="displayName" value={displayName} required />
                
                <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required />

                <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required />

                <FormInput label='Confirm Password' type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

                <MyButton btnText='Sign Up' type='submit' className="myBtn myBtn-primary"/>
            </form>
        </div>
    );
}

export default SignUpForm;