import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Auth() {
    const [isLogin, setIsLogin] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(isLogin){
            console.log("Logging in with:", { email, password });
                navigate("/dash",{
                        state: {
                            email,
                            password
                        }

                });
        }
        else{
            console.log("Registering with:", { name, email, password });
        }   
    }

    const toggleMode = () => {
        setEmail("");
        setPassword("");
        setName("");
        setIsLogin(!isLogin);
    }


    return (
        <div>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <button  onClick={toggleMode}>
                {isLogin ? "Switch to Sign Up" : "Switch to Login"}
            </button>
            <form  onSubmit={handleSubmit}>
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

        </div>
    )
}

export default Auth;