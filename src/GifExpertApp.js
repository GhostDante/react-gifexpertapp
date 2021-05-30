import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory/AddCategory';
import { GitGrid } from './components/GifGrid/GitGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['No game no life']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            
            <ol>
               {
                   categories.map(category =>{
                       return <GitGrid
                       key={category}
                       category={category} />
                   })
               }
            </ol>
        </>
    )
}
