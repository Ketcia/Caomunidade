export interface ICategoria {
    status: string,
    message: string,
    data: {
        id: number,
        topico: string
    }[]
}

export interface ICategoriaServer {
    id: number,
    topico: string
}

export interface ICategoriaState {
    id: number,
    name: string
}