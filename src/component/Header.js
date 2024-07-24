import React from 'react';
import styled from 'styled-components';

const backgroundColor = '#ffcc00'; // color yellow

const HeaderContainer = styled.header`
  background: ${backgroundColor};
  color: #333; 
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 150px; // size H1
  display: flex;
  align-items: center;
`;

const Heading = styled.h2`
  font-family: 'Pacifico', cursive; 
  font-size: 3rem; 
  color: #333; 
  position: relative;
`;

const DecorativeElement = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <DecorativeElement />
      <Heading>Vikky Restaurant</Heading>
    </HeaderContainer>
  );
};

export default Header;
