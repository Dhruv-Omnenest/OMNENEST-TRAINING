import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Auth() {
    const [isLogin, setIsLogin] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return;
        }

        if (isLogin) {
            console.log("Logging in with:", { email, password });
            navigate("/dash", {
                state: { email, password }
            });
        }
        else {
            console.log("Registering with:", { name, email, password });
        }
    }
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            navigate("/dash", {
                state: {
                    email: user.email,
                    name: user.displayName
                }
            });

        } catch (err) {
            console.log(err);
        }
    };

    const toggleMode = () => {
        setEmail("");
        setPassword("");
        setName("");
        setIsLogin(!isLogin);
    }


    return (
        <div>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <button onClick={toggleMode}>
                {isLogin ? "Switch to Sign Up" : "Switch to Login"}
            </button>
            <form onSubmit={handleSubmit} noValidate>
                {!isLogin && (
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            </form>


            <hr />

            <button onClick={handleGoogleLogin}>
                Continue with Google
            </button>


        </div>
    )
}

export default Auth;