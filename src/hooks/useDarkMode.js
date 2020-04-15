import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

function useDarkMode(){
    // calling state using my custom hook
    const[otherValue, setotherValue] = useLocalStorage("key");
    
    //function to toggle a className on the body
    useEffect(()=>{
        if(otherValue === true){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }

        // toggle when state changes
    },[otherValue])
    // return the value and the setValue Fn
    return [otherValue, setotherValue];
}


export default useDarkMode;