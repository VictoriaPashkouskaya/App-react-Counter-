import React from 'react';
import styled from 'styled-components';

// Используйте яркий цвет или фоновое изображение
const backgroundColor = '#ffcc00'; // Яркий желтый цвет

const HeaderContainer = styled.header`
  background: ${backgroundColor};
  color: #333; // Темный цвет текста для контраста
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  height: 250px; // Размер заголовка можно настроить по вашему усмотрению
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Heading = styled.h2`
  font-family: 'Pacifico', cursive; // Веселый шрифт
  font-size: 3rem; // Увеличенный размер шрифта
  margin: 0;
  color: #333; // Темный цвет текста
  z-index: 2;
  position: relative;
`;

const DecorativeElement = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  background: url('https://example.com/food-icon.png') no-repeat center center;
  background-size: contain;
  z-index: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <DecorativeElement />
      <Heading>Yummy Restaurant</Heading>
    </HeaderContainer>
  );
};

export default Header;
