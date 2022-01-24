import styled from "styled-components";


export const InputContainerStyled = styled.form`
position: relative;

&::after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: 14px;
  left: 55px;
  background-color: var(--blue-light);
  position: absolute;
}


input {
  width: 80%;
  border-radius: 5px;
  font-size: 1.125rem;
  border: none;
  padding: .75rem .75rem .75rem 2rem;
  color: inherit;
  position: relative;
  
  
  
  
  &::placeholder {
    color: inherit;
  }
  
  &::selection {
    background-color: var(--text);
  }
  
  
}
`;