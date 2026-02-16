import {  useNavigate } from 'react-router-dom';
function Button() {
    const navigate = useNavigate();
    const handleClick = () => {
        alert("Button Clicked!");
    }; 

    const showMessage = () => {
        alert("Hello from showMessage!");
    };

    const showTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        alert("Current Time: " + currentTime);
    };


    const showTerms = () => {
       navigate('/Toc');

    };

    const buttonStyle = { 
        color: 'black', 
        backgroundColor: 'lightgray', 
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px',
        margin: '5px'
    };

    return (
        <>
        <button style={buttonStyle} onClick={handleClick}>
            Click me!
        </button>
        <h1>Event Handling Demo</h1>
            <button style={buttonStyle} onClick={handleClick}>
                Click Me
            </button>
            
            <button style={buttonStyle} onClick={showMessage}>
                Show Message
            </button>
            
            <button style={buttonStyle} onClick={showTime}>
                Show Time
            </button>
            <button style={buttonStyle} onClick={showTerms}>
                Terms and Conditions
            </button>
        </>
    );
}

export default Button;