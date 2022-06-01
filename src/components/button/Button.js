import React from 'react';
import { ButtonWrap } from './Button.styled';

const Button = ({ text, bgColor, color }) => {
  return (
    <ButtonWrap bgColor={bgColor} color={color}>
      {text}
    </ButtonWrap>
  );
};

export default Button;
