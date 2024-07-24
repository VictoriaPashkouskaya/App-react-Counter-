import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Dish = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DishName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const DishDescription = styled.p`
  font-size: 16px;
  margin: 0 0 10px;
`;

const DishPrice = styled.p`
  font-size: 18px;
  color: #4CAF50;
`;

const Home = ({ dishes }) => {
  return (
    <HomeContainer>
      {dishes.map(dish => (
        <Dish key={dish.id}>
          <DishName>{dish.name}</DishName>
          <DishDescription>{dish.description}</DishDescription>
          <DishPrice>Price: ${dish.price}</DishPrice>
        </Dish>
      ))}
    </HomeContainer>
  );
};

export default Home;
