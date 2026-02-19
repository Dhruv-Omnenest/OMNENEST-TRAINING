import { useState } from "react";


function useLocalStorage(key,initialValue){
    const getSaved=()=>{
        const saved= localStorage.getItem(key);
        if (saved) return JSON.parse(saved);
        return initialValue;
    }

    const [value,setValue] = useState(getSaved);

    const saveValue = (newValue) =>{
        setValue(newValue);
        localStorage.setItem(key,JSON.stringify(newValue));
    }

    return[
        value,
        saveValue
    ];
}

export default useLocalStorage;