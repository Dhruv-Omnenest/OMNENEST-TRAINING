// import {  useNavigate } from 'react-router-dom';
// function Button() {
//     const navigate = useNavigate();
//     const handleClick = () => {
//         alert("Button Clicked!");
//     }; 

//     const showMessage = () => {
//         alert("Hello from showMessage!");
//     };

//     const showTime = () => {
//         const currentTime = new Date().toLocaleTimeString();
//         alert("Current Time: " + currentTime);
//     };


//     const showTerms = () => {
//        navigate('/Toc');

//     };

//     const buttonStyle = { 
//         color: 'black', 
//         backgroundColor: 'lightgray', 
//         padding: '10px 20px', 
//         border: 'none', 
//         borderRadius: '5px',
//         margin: '5px'
//     };

//     const user ={
//         name: 'John Doe',
//         age: 30,
//     }

//     const fullUser ={
//         ...user,
//         city: 'Mumbai',
//         country: 'India',
//     }

//     const newFullUser = {
//         ...fullUser,
//         profile : 'Software Engineer',
//         bio: 'Passionate about coding and technology.',
//     }

//     return (
//         <>
//         <button style={buttonStyle} onClick={handleClick}>
//             Click me!
//         </button>
//         <h1>Event Handling Demo</h1>
//             <button style={buttonStyle} onClick={handleClick}>
//                 Click Me
//             </button>
            
//             <button style={buttonStyle} onClick={showMessage}>
//                 Show Message
//             </button>
            
//             <button style={buttonStyle} onClick={showTime}>
//                 Show Time
//             </button>
//             <button style={buttonStyle} onClick={showTerms}>
//                 Terms and Conditions
//             </button>

//             <div>
//                 <p>User Information:</p>
//                 <p>Name: {newFullUser.name}</p>
//                 <p>Age: {newFullUser.age}</p>
//                 <p>City: {newFullUser.city}</p>
//                 <p>Country: {newFullUser.country}</p>
//                 <p>Profile: {newFullUser.profile}</p>
//                 <p>Bio: {newFullUser.bio}</p>
//             </div>
//         </>
//     );
// }

// export default Button;



function Button({ text, onClick, style,disabled,children }) {
    const defaultStyle = {
        color: 'black',
        backgroundColor: 'lightgray',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer',
    };
    const combinedStyle = { ...defaultStyle, ...style };
    return (
        <button style={combinedStyle} onClick={onClick} disabled={disabled}>
            {text}
            {children}
        </button>
    );
}

export default Button;