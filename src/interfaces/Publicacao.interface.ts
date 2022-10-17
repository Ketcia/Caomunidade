export interface IPublicacao {
    titulo?: string,
    descricao?: string,
    categoria?: number[],
    imagem?: {
        uri?: string
        base64?: string | any
    }
    file?: string
}

export interface IPublicacaoResponse {
    status: string,
    message: string,
    data: {
        id: number
        titulo: string
        descricao: string
        imagem: string
        created_at: Date
        categorias: {
            id: number
            categoria: string
        }[]
        user: {
            id: number
            name: string
        }
    }[]
}
export interface IPublicacaoState {
    data: {
        id: number
        titulo: string
        descricao: string
        imagem: string
        created_at: Date
        categorias: {
            id: number
            categoria: string
        }[]
        user: {
            id: number
            name: string
        }
    }
}