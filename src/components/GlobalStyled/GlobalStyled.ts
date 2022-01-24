import { createGlobalStyle } from "styled-components";


import React from 'react';

export const GlobalStyled = createGlobalStyle`

:root{
  --text: #a5a9ab;
  --white: #f1f1f1;
  --dark: #1f2024;
  --blue-light: #7c9eda;
  --green-light: #9fc1df;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Dongle', sans-serif;
}

input[type="button"], input[type="submit"], button {
  cursor: pointer;
  border: none;
}


`;
