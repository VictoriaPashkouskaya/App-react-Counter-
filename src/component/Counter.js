import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Animation for the symbols to explode out of the container
const explodeAnimation = keyframes`
  0% { opacity: 1; transform: scale(1) translate(0, 0); }
  100% { opacity: 0; transform: scale(0) translate(calc(var(--direction-x) * 300px), calc(var(--direction-y) * 300px)); }
`;

// Styles for the counter container
const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 350px; 
  margin: 5px auto; 
  position: relative;

  @media (max-width: 600px) {
    width: 100%; 
    padding: 10px;
  }
`;

// Styles for the count display
const CountDisplay = styled.p`
  font-size: 5rem;
  margin: 0;
  color: #333;
  position: relative;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

// Styles for buttons
const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

// Styles for the symbols
const Symbol = styled.span`
  position: absolute;
  font-size: 5rem;
  font-weight: 1000;
  color: #ff5722;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  filter: brightness(1.5);
  animation: ${props => props.active ? css`${explodeAnimation} 0.6s ease-out forwards` : 'none'};
  top: 45%;
  left: 85%;
  transform: translate(-50%, -50%);
  display: inline-block;
  white-space: nowrap;
  --direction-x: ${props => props.directionX || 0};
  --direction-y: ${props => props.directionY || 0};
  animation-delay: ${props => props.delay || '0s'};
`;

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);
  const [symbols, setSymbols] = useState([]);
  
  const directions = [
    { x: -1, y: -1 },
    { x: -1, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 }
  ];

  const addSymbols = (symbol) => {
    const newSymbols = directions.map((dir, index) => ({
      symbol: `${symbol}${step}`,  // Добавляем значение шага к символу
      directionX: dir.x,
      directionY: dir.y,
      delay: `${index * 0.1}s`
    }));
    setSymbols(newSymbols);
    setTimeout(() => setSymbols([]), 600); // Clear symbols after animation
  };

  const increment = () => {
    setCount(count + step);
    addSymbols('+');
  };

  const decrement = () => {
    setCount(count - step);
    addSymbols('-');
  };

  return (
    <CounterContainer>
      <CountDisplay>{count}</CountDisplay>
      {symbols.map((symbol, index) => (
        <Symbol 
          key={index} 
          active={true} 
          directionX={symbol.directionX} 
          directionY={symbol.directionY} 
          delay={symbol.delay}
        >
          {symbol.symbol}
        </Symbol>
      ))}
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </CounterContainer>
  );
};

export default Counter;

