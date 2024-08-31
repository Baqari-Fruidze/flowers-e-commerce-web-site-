import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollToFix(){

    const  { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo({ top: 100, left: 0,  behavior: 'smooth' })
    },[pathname]);
    
    return null;
}
      
