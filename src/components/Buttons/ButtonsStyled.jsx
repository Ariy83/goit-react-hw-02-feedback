import React from 'react'
import { StyledButton, StyledFlexBox } from './Buttons.styled'

export const ButtonsStyled = ({keysArr, handleClickBtn}) => {
  return (
      <StyledFlexBox>
          {keysArr.map(item => <StyledButton type="button" key={item} onClick={() => handleClickBtn(item)} >{item[0].toUpperCase()+item.slice([1]).toLowerCase()}</StyledButton>)}
    </StyledFlexBox>
  )
}
