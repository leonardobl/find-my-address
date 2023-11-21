// Generated by https://quicktype.io

export interface ICoordenadasPage {
  type: string;
  query: string[];
  features: IFeature[];
  attribution: string;
}

export interface IFeature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: IProperties;
  text: string;
  place_name: string;
  matching_text?: string;
  matching_place_name?: string;
  center: number[];
  geometry: IGeometry;
  context: IContext[];
  bbox?: number[];
}

export interface IContext {
  id: string;
  mapbox_id?: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

export interface IGeometry {
  type: string;
  coordinates: number[];
}

export interface IProperties {
  accuracy?: string;
  mapbox_id?: string;
}
