export interface ICategoria {
    status: string,
    message: string,
    data: {
        id: number,
        categoria: string
    }[]
}

export interface ICategoriaServer {
    id: number,
    categoria: string
}

export interface ICategoriaState {
    id: number,
    name: string
}