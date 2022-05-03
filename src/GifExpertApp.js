import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    /*
    const handleAdd = () => {
        setCategories(['HunterXHunter', ...categories])
    }*/

    return(
        <>
           <h2>GifExpert App</h2>
           <AddCategory setCategories={setCategories}/>
           <hr />
           <ul>
               {
                   categories.map(category => {
                       return <GifGrid 
                            key={category}
                            category={category}
                        />
                   })
               }
           </ul>
        </>
    )
}

export default GifExpertApp;