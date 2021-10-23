import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0;
`;

const Label = styled.p`
  font-size: 18px;
  margin: 10px 0;
  font-family: Arial, sans-serif;
`;

const Options = styled.div`
  display: flex;
`;

const Option = styled.button`
  font-family: Arial, sans-serif;
  display: flex;
  background: transparent;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px 0 0;
  transition: 0.5s all linear;

  :hover {
    background: rgba(255, 255, 255, 0.3);
  }

  ${(props) => props.selected && `background: rgba(255, 255, 255, 0.5);`}
`;

export default function OptionsToggle(props) {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Options>
        {props.options.map((option, index) => (
          <Option selected={option.value === props.value} onClick={() => props.onChange(option.value)} key={index}>
            {option.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
}
