import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>',()=>{

    const category = 'Movies';

    test('debe de mostrar el loading inicialmente',()=>{

        useFetchGifs.mockReturnValue({images: [],isLoading: true});

        render(<GifGrid category={category}/>);
        //screen.debug();
        expect(screen.getByText(category));
        expect(screen.getByText('Cargando...'));
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs',()=>{

        const gifs = [{
            id: 'ABC',
            title: 'Starfield',
            url: 'https://localhost/starfield.jpg',
        },
        {
            id: 'XYZ',
            title: 'Halo',
            url: 'https://localhost/halo.jpg',
        }];

        useFetchGifs.mockReturnValue({images: gifs,isLoading: false});

        render(<GifGrid category={category}/>);
        //screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});