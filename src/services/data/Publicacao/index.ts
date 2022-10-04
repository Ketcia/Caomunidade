import api from "../../api";
import {IPublicacao, IPublicacaoResponse} from "../../../interfaces/Publicacao.interface"
import {IResponse} from "../../../interfaces/Response.interface";

class PublicacaoData {
    index() {
        return api.get<IPublicacaoResponse>('/publicacao')
    }
    store(data: IPublicacao) {
        return api.post<IResponse>('/publicacao', data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export default new PublicacaoData();