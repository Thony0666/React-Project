import React from "react"
import { useState,useEffect } from "react";
import './First';


function Recherche() {
    const [datas,setDatas] = useState([]);
    const [theme,setTheme] = useState("");

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(json => setDatas(json));
    })
     const handelSearch = (e) =>{
        
        let value= e.target.value;
        setTheme(value);
     };

    console.log(theme);

    return (
        <>
        <div className="rech">
            <input type="text" name="bar" placeholder="recherche" onChange={handelSearch}/> 
        </div>
        <div className="resultatderech">
            {
                datas.filter((val) =>{
                    return (
                        val.title.toUpperCase().includes(theme) || val.title.toLowerCase().includes(theme) 
                    )
                }).map((val)=>{
                    return(
                    <div className="result" key={val.id}>
                        {val.title}
                    </div>
                );
            })}
        </div>
        </>
      );
}
export default Recherche 