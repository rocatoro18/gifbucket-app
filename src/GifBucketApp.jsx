import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifBucketApp = ()=> {

    // ESPACIO EN MEMORIA PARA MANEJAR CATEGORIAS
    const [categories, setCategories] = useState(['Starfield']);

    const onAddCategory = (newCategory) => {
        // Verificar que no se inserte una categoria existente
        if(categories.includes(newCategory)) return;
        //
        //console.log(newCategory);
        // EVITAR USAR EL PUSH PARA NO MUTAR EL ESTADO
        // EVITAR ESTO setCategories((c)=> c.push('Microsoft Flight 2020'));
        // ...
        // ... operador spread
        setCategories([newCategory,...categories]);
        // setCategories(cat => [...cat, 'Cities Skylines 2' ]);
    }

    return (
        <>
        {/* Titulo */}
        <h1>GifBucketApp</h1>
        {/* Input */}
        <AddCategory 
        //setCategories={setCategories}
        onNewCategory = {event => onAddCategory(event)}
        />
        {/* Listado de Gif */}
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        
        {categories.map(category => 
                (
                <GifGrid key={category} category={category}/>
            )
        )}
            
        
            {/* Gif Item */}
        </>
    )
}