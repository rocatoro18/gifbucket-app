import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// UN HOOK NO ES MAS QUE UNA FUNCION
export const useFetchGifs = (category) => {

    const [images,setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    

    // USE EFFECT ES UN HOOK DE REACT QUE SIRVE PARA 
    // DISPARAR EFECTOS SECUNDARIOS

    
    useEffect(()=>{
        getImages();
    }, [])
    

  return {
    images: images,
    isLoading: isLoading
  }
}
