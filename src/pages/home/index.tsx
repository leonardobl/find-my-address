import React, { useEffect, useRef } from "react";
import * as S from "./style";
import "leaflet/dist/leaflet.css";
import { LeftMenu } from "../../components/atoms/leftMenu";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export const Home = () => {
  return (
    <S.PageWrapper>
      <LeftMenu />

      <S.WrapperMap>
        <MapContainer
          style={{ width: "100%", height: "100vh" }}
          center={[51.505, -0.09]}
          zoom={10}
          zoomControl={false}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </S.WrapperMap>
    </S.PageWrapper>
  );
};
