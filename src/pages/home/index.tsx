import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import "leaflet/dist/leaflet.css";
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import AsyncSelect from "react-select/async";

import L, { LatLngExpression } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { Coordenadas } from "../../services/coordenadas";
import { IFeature } from "../../services/coordenadas/coordenadas";
import { Cep } from "../../services/cep";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export type SelectProps<T> = {
  value: any;
  label: string;
  element: T;
};

const defaultCenterLocation: LatLngExpression = [-15.793404, -47.882317];

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectOption, setSelectOption] = useState<SelectProps<IFeature>>();
  const [center, setCenter] = useState<LatLngExpression>(defaultCenterLocation);
  const [coordenadas, setCoordenadas] = useState<SelectProps<IFeature>[]>([]);

  const getCoordenadas = async (
    txt: string
  ): Promise<SelectProps<IFeature>[]> => {
    const onlyNumbers = txt.replace(/[^a-zA-Z0-9 ]/g, "");

    if (!isNaN(Number(onlyNumbers))) {
      return Cep.get({ cep: onlyNumbers }).then(({ data }) => {
        return Coordenadas.getLocalizacao({
          local: `${data.logradouro}, ${data.localidade}, ${data.bairro}, ${data.uf}`,
        }).then(({ data }) =>
          data.features.map((item) => ({
            value: item.center,
            label: item.place_name,
            element: item,
          }))
        );
      });
    }

    return Coordenadas.getLocalizacao({ local: txt }).then(({ data }) =>
      data.features.map((item) => ({
        value: item.center,
        label: item.place_name,
        element: item,
      }))
    );
  };

  function onSelectPlace(e: SelectProps<IFeature>) {
    setSelectOption(e);

    if (!e?.value) return;

    setCenter(e.value?.reverse());

    const hasItem = coordenadas.some(
      (item) => item.element.id === e.element.id
    );

    if (hasItem) return;
    setCoordenadas((prev) => (prev.length ? [...prev, e] : [e]));
  }

  function removeMark(id: string) {
    const confirm = window.confirm("Deseja realmente remover a marcacao ?");

    if (confirm)
      setCoordenadas((prev) => prev.filter((item) => item.element.id !== id));
  }

  return (
    <S.PageWrapper>
      <S.LeftMenu $isOpen={menuOpen}>
        <S.WrapperIcons>
          {menuOpen ? (
            <IoCloseSharp onClick={() => setMenuOpen(false)} />
          ) : (
            <FiSearch onClick={() => setMenuOpen(true)} />
          )}
        </S.WrapperIcons>
        <AsyncSelect
          placeholder="pesquisa por cep ou endereco"
          loadOptions={getCoordenadas}
          value={null}
          onChange={(e) => onSelectPlace(e as SelectProps<IFeature>)}
        />

        {coordenadas.length > 0 && (
          <S.WrapperCoordenadasContent>
            <h2>Enderecos selecionados</h2>
            {coordenadas.map((item) => (
              <S.CoordenadasContent key={item.element.id}>
                <p onClick={() => setCenter(item.value)}>{item.label}</p>
                <IoCloseSharp onClick={() => removeMark(item.element.id)} />
              </S.CoordenadasContent>
            ))}
          </S.WrapperCoordenadasContent>
        )}
      </S.LeftMenu>
      <S.WrapperMap>
        <MapContainer
          key={`${center}`}
          style={{ width: "100%", height: "100vh" }}
          center={center}
          zoom={10}
          zoomControl={false}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          {coordenadas.map((item) => (
            <Marker key={item.element.id} position={item.value}>
              <Popup>
                <S.PopUpTextContent>
                  {item.element.place_name}
                </S.PopUpTextContent>
                <S.ButtonRemove onClick={() => removeMark(item.element.id)}>
                  Remover marcacao
                </S.ButtonRemove>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </S.WrapperMap>
    </S.PageWrapper>
  );
};
