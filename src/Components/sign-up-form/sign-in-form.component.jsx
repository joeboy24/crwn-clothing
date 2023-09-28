import { useContext, useState } from "react";
import { logGoogleUser, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "./form-input.component";
import { UserContext } from "../../contexts/user.context";
import MyButton from "../Button/button.component";

const SignInForm = () => {

    const defaultFormFields = {
        email: '',
        password: '',
    };

    const [ formFields, setFormfields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const { setCurrentUser } = useContext(UserContext);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormfields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // await createUserDocumentFromAuth(user, {displayName});
            const { user } = await signInAuthWithEmailAndPassword(email, password);
            // setCurrentUser(user);
            setFormfields(defaultFormFields);
            const { displayName } = user;
            alert('Login successful..!');
            
        } catch (error) {
            switch (error.code) {
                case ('auth/wrong-password'):
                    alert('Oops..! Wrong Password');
                    break;

                case ('auth/user-not-found'):
                    alert('Oops..! User not found. Check email');
                    break;
            
                default:
                    alert('User Login Error: ', error);
                    console.log('User Login Error: ', error);
                    break;
            }
        }
    }

    return (

        <div>
            <h2>Already have an Account?</h2>
            <span>Sign in here</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required />
                <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required />
                <MyButton btnText="Sign In" type="submit" className="myBtn myBtn-primary"/>
                <MyButton btnText="Sign In with Google" type="button" onClick={logGoogleUser} className="myBtn myBtn-primary-inverse"/>
            </form>
        </div>
    );
}

export default SignInForm;