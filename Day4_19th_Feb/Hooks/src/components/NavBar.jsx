import { useContext } from "react";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
    const {user,login,logout}=useUser();
    const {theme,toggleTheme}= useTheme();

    const bg = theme === "light" ? "#222" : "#f5f5f5";
    const color = theme === "dark" ? "#222" : "#fff";

    return (
        <nav
        style={{
            background:color,
            color:bg,
            padding:"12px 24px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}
        >

            <h2
            style={{
                margin:0
            }}    
            >My App</h2>


            {
                user ? (
                    <div style={{
                        display:"flex",
                        gap:"16px",
                        alignItems:"center",
                    }}>
                    <span>
                        Welcome , {user.name}  Role:{user.role}
                    </span>

                    <button
                    onClick={
                        logout
                    }
                    style={{
                        padding:"6px 14px",
                        cursor:"pointer",
                        borderRadius:"4px"
                    }}  
                    >
                      Logout  
                    </button>
                    </div>

                ):(
                      <button
                    onClick={
                        login
                    }
                    style={{
                        padding:"6px 14px",
                        cursor:"pointer",
                        borderRadius:"4px"
                    }}  
                    >
                      LogIn  
                    </button>

                )
            }



        </nav>
    )

}


export default NavBar;