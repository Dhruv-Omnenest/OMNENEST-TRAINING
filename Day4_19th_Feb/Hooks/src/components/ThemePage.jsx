import { useTheme } from "../context/ThemeContext";

function ThemePage(){
    const {theme,toggleTheme}= useTheme();

    const bg = theme === "dark" ? "#222" : "#f5f5f5";
    const color = theme === "dark" ? "#fff" : "#222";
    

    return (
        <div>
            <h1>Current Theme:{theme}</h1>
            <button 
                onClick={toggleTheme}
                style={
                    {
                        padding:"10px 24px",
                        fontSize:"16px",
                        cursor:"pointer",
                        borderRadius:"8px",
                        border:"none",
                        background: bg,
                        color : color

                    }
                }
            >
                Switch to {theme === "dark" ? "Light" :"Dark"} Mode 
            </button>
            <div
  style={{
    width: "200px",
    height: "200px",
    backgroundColor: bg, 
    color: color,      
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    transition: "background-color 0.3s ease" 
  }}
>
  {theme === "dark" ? "Dark Mode" : "Light Mode"}
</div>
        </div>
        
    )

}


export default ThemePage;