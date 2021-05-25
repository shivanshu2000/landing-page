import React from 'react';
import styled from 'styled-components';

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-between;
  width: 300px;
  border-radius: 25px;
  background-color: white;
  padding: 25px 0;
  margin-top: -65px;
  transform: translateY(-25px);
  z-index: 11;
  transition: all 0.3s ease-in;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 430px;
  width: 300px;
  z-index: 10;

  overflow: hidden;
  border-radius: 25px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.03);
    overflow: hidden;
  }

  &:hover > ${CardBottom} {
    transform: translateY(-50px);
    width: 305px;
  }
`;

function PickOurBrainsCard({ card }) {
  return (
    <Card>
      <img
        src={card.image}
        alt={card.title}
        style={{ width: '100%', height: '300px' }}
      />
      <CardBottom>
        <p style={{ paddingLeft: '25px', paddingRight: '25px' }}>
          {card.title}
        </p>
        <p
          className="author__name"
          style={{ paddingLeft: '25px', paddingRight: '25px' }}
        >
          {card.author}
        </p>
      </CardBottom>
    </Card>
  );
}

export default PickOurBrainsCard;
