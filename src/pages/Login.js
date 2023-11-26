import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({ setIsAuth }) {
    let navigate = useNavigate();
    // localStorage.setItem("isAuth", false);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate("/");
            })
            console.log('Logging in...');
    }

    return (<div className="loginPage">
        <p>Sign in with Google to Continue!</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>);
}

export default Login;