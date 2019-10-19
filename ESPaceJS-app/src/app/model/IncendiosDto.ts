export interface IncendiosDto {
    idIncendio: number;
    poblacion: string;
    hectareas: number;
    longitud: number;
    latitud: number;
}

export class IncendiosDto {
    constructor() {
        return {
            idIncendio: null,
            poblacion: null,
            hectareas: null,
            longitud: null,
            latitud: null
        };
    }
}
