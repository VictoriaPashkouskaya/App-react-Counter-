import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

// Styled component for the header
const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif; // You can replace this with any other font family
`;

// Styled component for the container of the counters
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center items horizontally
  justify-content: center; // Center items vertically
  min-height: 100vh; // Full viewport height
  background-color: #f0f2f5; // Light background color for better contrast
`;

const CountersPage = () => {
  return (
    <Container>
      <Header>Multiple Counters</Header>
      <Counter initialCount={10} step={2} />
      <Counter initialCount={5} step={3} />
      <Counter initialCount={0} step={1} />
    </Container>
  );
};

export default CountersPage;
