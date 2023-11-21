import { AxiosResponse } from "axios";
import ApiCoordenadas from "../../api/apiCoordenadas";
import { ICoordenadasPage } from "./coordenadas";

export class Coordenadas {
  static getLocalizacao({
    local,
  }: {
    local: string;
  }): Promise<AxiosResponse<ICoordenadasPage>> {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP}`;

    return ApiCoordenadas.get(url);
  }
}
