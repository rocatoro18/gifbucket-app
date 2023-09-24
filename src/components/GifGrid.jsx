import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    // DENTRO DEL JSX NO SE PUEDE USAR LA PALABRA
    // RESERVADA CLASS, EN ESE LUGAR SE UTILIZA
    // className
    return (
        <>
        <h3>{category}</h3>
        {
        /*
            isLoading && (<h2>Cargando...</h2>)
        */
        }
        {
            isLoading ? (<h2>Cargando...</h2>): null
        }
        <div className="card-grid">
            {images.map((image) => (
                <GifItem 
                key={image.id}
                // ESPARCIENDO PROPIEDADES QUE 
                // VENGAN DENTRO DEL IMAGE
                {...image}
                />
            ))}
        </div>
        </>
    )
}