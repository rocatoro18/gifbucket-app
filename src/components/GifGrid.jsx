import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // USE EFFECT ES UN HOOK DE REACT QUE SIRVE PARA 
    // DISPARAR EFECTOS SECUNDARIOS

    useEffect(()=>{
        getGifs(category);
    }, [])
    

    return (
        <>
        <h3>{category}</h3>
        <p>Hola Mundo</p>
        </>
    )
}