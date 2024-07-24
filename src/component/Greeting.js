import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Стили для контейнера приветствия
const GreetingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8cfcf, #f8e1e1);
  color: #333;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
`;

// Стили для текста приветствия
const GreetingText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Greeting = ({ name }) => {
  const [greeting, setGreeting] = useState(`Hola ${name}!`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting('Hola Alfonsina!');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GreetingContainer>
      <GreetingText>{greeting}</GreetingText>
      {/*  */}
    </GreetingContainer>
  );
};

export default Greeting;
