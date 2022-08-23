export interface CardProps{
    data:{
        titulo:string,
        descricao:string,
        imagem?:{
            uri?:string
            base64?:string|any
    }
        file?:string
    }
    
}