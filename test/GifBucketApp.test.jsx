import { render, screen } from "@testing-library/react";
import { GifBucketApp } from "../src/GifBucketApp";

describe('Pruebas en <GifBucketApp />',()=>{
    test('should',()=>{
        render(<GifBucketApp/>);
        screen.debug();

        // CREAR NUESTRAS PROPIAS PRUEBAS, COMO TOMAR SNAPSHOT, ESCRIBIR EN INPUT, POSTEAR FORMULARIO, ETC.

    });
});