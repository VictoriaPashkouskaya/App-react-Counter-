import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for the symbols to explode out of the container
const explodeAnimation = keyframes`
  0% { opacity: 1; transform: scale(1) translate(0, 0); }
  100% { opacity: 0; transform: scale(0) translate(150px, -150px); }
`;

// Styles for the counter container
const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px; 
  margin: 20px auto; 
  position: relative;
  overflow: hidden;
`;

// Styles for the count display
const CountDisplay = styled.p`
  font-size: 3rem;
  margin: 10px;
  color: #333;
  position: relative;
  font-weight: bold;
`;

// Styles for buttons
const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

// Styles for the symbols
const Symbol = styled.span`
  position: absolute;
  font-size: 1.5rem;
  color: #ff5722; // Bright contrasting color
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3); // Add shadow for better contrast
  animation: ${explodeAnimation} 0.6s ease-out forwards;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  white-space: nowrap;

  /* Positioning symbols to explode in different directions */
  &:nth-child(1) { animation-delay: 0s; transform: translate(-150px, -150px); }
  &:nth-child(2) { animation-delay: 0.1s; transform: translate(-150px, 150px); }
  &:nth-child(3) { animation-delay: 0.2s; transform: translate(150px, -150px); }
  &:nth-child(4) { animation-delay: 0.3s; transform: translate(150px, 150px); }
  &:nth-child(5) { animation-delay: 0.4s; transform: translate(-175px, 0px); }
  &:nth-child(6) { animation-delay: 0.5s; transform: translate(175px, 0px); }
  &:nth-child(7) { animation-delay: 0.6s; transform: translate(0px, -175px); }
  &:nth-child(8) { animation-delay: 0.7s; transform: translate(0px, 175px); }
  &:nth-child(9) { animation-delay: 0.8s; transform: translate(-100px, -200px); }
  &:nth-child(10) { animation-delay: 0.9s; transform: translate(100px, 200px); }
  &:nth-child(11) { animation-delay: 1s; transform: translate(-200px, 100px); }
  &:nth-child(12) { animation-delay: 1.1s; transform: translate(200px, -100px); }
  &:nth-child(13) { animation-delay: 1.2s; transform: translate(-150px, -250px); }
  &:nth-child(14) { animation-delay: 1.3s; transform: translate(150px, 250px); }
  &:nth-child(15) { animation-delay: 1.4s; transform: translate(-250px, 150px); }
  &:nth-child(16) { animation-delay: 1.5s; transform: translate(250px, -150px); }
`;

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);
  const [symbols, setSymbols] = useState([]);

  // Function to add symbols to the display
  const addSymbols = (symbol) => {
    // Create an array of symbols to display
    const newSymbols = Array.from({ length: 16 }, () => symbol);
    setSymbols(newSymbols);
    // Clear the symbols after the animation completes
    setTimeout(() => setSymbols([]), 600);
  };

  // Function to increment the count
  const increment = () => {
    setCount(count + step);
    addSymbols('+');
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - step);
    addSymbols('-');
  };

  return (
    <CounterContainer>
      <CountDisplay>{count}</CountDisplay>
      {/* Render symbols */}
      {symbols.map((symbol, index) => (
        <Symbol key={index}>{symbol}</Symbol>
      ))}
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </CounterContainer>
  );
};

export default Counter;
