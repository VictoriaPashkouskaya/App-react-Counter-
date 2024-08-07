import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavButton = styled(Link)`
  display: inline-block;
  justify-content: center;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1px 5px;
  margin: 2px;
  text-decoration: none;
  font-size: 2rem;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
      @media (max-width: 600px) {
    display: flex;
  }
`;

const NavButtons = () => {
  return (
    <div>
      <NavButton to="/counters">Counter</NavButton>
      <NavButton to="/greeting">Greeting</NavButton>
      <NavButton to="/restaurant">Restaurante</NavButton>
    </div>
  );
};

export default NavButtons;
