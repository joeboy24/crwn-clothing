import SignInForm from "../../Components/sign-up-form/sign-in-form.component";
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
// import { signInWithGooglePopup, createUserDocumentFromAuth, logGoogleUser } from "../../utils/firebase/firebase.utils";
import './authentication.styles.css';

const Authentication = () => {
    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     createUserDocumentFromAuth(user);
    //     // const userDocRef = await createUserDocumentFromAuth();
    //     console.log(user);
    // }
    return (  
        <div>
            <h1>Sign in Page</h1>
            <div className="authentication-container">
                {/* <button onClick={logGoogleUser}>Sign in with Google</button> */}
                <SignInForm />
                <SignUpForm />
            </div>
        </div>
     );
}

export default Authentication;