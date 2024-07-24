import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const NavButtons = () => {
  return (
    <div>
      <NavButton to="/counters">Ejercicio 1</NavButton>
      <NavButton to="/greeting">Ejercicio 2</NavButton>
      <NavButton to="/restaurant">Página del Restaurante</NavButton>
    </div>
  );
};

export default NavButtons;
