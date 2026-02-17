import { useState } from "react";

function NameForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const isInvalid = name === '' || email === '' || password === '';
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <form>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Your name is: {name}</p>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <p>Your email is: {email}</p>
            <label>
                Password:
                <input
                    type={passwordVisible ? "text" : "password"}
                    value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '18px'
                }}
            >
                {passwordVisible ? '👁️' : '👁️‍🗨️'}
            </button>

            <button
                type="button"
                onClick={() => alert('Password must be at least 8 characters long and contain a mix of letters and numbers.')}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
               ⓘ
            </button>


            <br />
            <button
                type="button"
                disabled={isInvalid}
                style={{
                    backgroundColor: isInvalid ? '#ccc' : 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: isInvalid ? 'not-allowed' : 'pointer',
                }}
                onClick={(e) => {
                    e.preventDefault();
                    alert(`Logged in as: ${name}`);
                }}
            >
                Login
            </button>
        </form>
    )
}

export default NameForm;