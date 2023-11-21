import React, { useState } from "react";
import * as S from "./styled";
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

export const LeftMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      </S.LeftMenu>
    </S.PageWrapper>
  );
};
