import api from "../../api"
import {ICategoria} from "../../../interfaces/Categoria.interface"

class CategoriaData {
    index() {
        return api.get<ICategoria>('/categoria')
    }
}

export default new CategoriaData();