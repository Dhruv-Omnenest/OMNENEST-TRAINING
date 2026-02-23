import useLocalStorage from "../hooks/useLocalStorage"

function NameSaver(){
    const [name,setName] = useLocalStorage("user-name","");


    return (
        <div>
            <h2>Remember me:</h2>
            <input value={name} type="text"  onChange={(e)=>{
                setName(e.target.value)
            }} placeholder="Type Your Name:"  />

            {
                name && <h3>Hello , {name}!</h3>
            }
            <p>
                Press F5 to refresh - Your name is Still here!
            </p>
        </div>
    )

}


export default NameSaver