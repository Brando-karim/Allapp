import React, { useContext } from "react"
import "./Lang.css"
import { Langue } from "./Acceuil"

export function ChangeLang(){

    const {setLangue} = useContext(Langue)
    return (
        
        <div className="LngB">
        <img src="/Wota.jpg" alt="" onClick={()=>setLangue("En")  }/>
      
        <img src="/Span2.png" alt="" onClick={()=>setLangue("Es")}/>
      
        <img src="/Croissant.jpg" alt="" onClick={()=>setLangue("Fr")}/>
      
        </div>
        
    )
}