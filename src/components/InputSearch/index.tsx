import React, { FormEventHandler, FormEvent, useRef } from 'react';
import { InputContainerStyled } from './styles';

export const InputSearch = () => {
  const [address, setAddress] = React.useState<string[]>([])
  const [inputValue, setInputValue] = React.useState("")
  const inputSearchRef = React.useRef<HTMLInputElement>(null)


  function handleAddress(e : FormEvent){
    e.preventDefault()
    console.log(inputSearchRef.current?.value)
  }

function handleInputValue(e : FormEvent<HTMLInputElement>){
  setInputValue(e.currentTarget.value)
}


  return (
    <InputContainerStyled onSubmit={handleAddress}>
      <input ref={inputSearchRef} type="text" value={inputValue} placeholder='Procurar ...' onChange={handleInputValue}/>
    </InputContainerStyled>
  )
};
