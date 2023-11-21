import { AxiosResponse } from "axios";

import { ICep } from "./cep";
import ApiCep from "../../api/apiCep";

export class Cep {
  static get({ cep }: { cep: string }): Promise<AxiosResponse<ICep>> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    return ApiCep.get(url);
  }
}
