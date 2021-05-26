import React from 'react';
import styled from 'styled-components';
import SavageSvg from './SavageSvg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 9rem;
  padding-bottom: 5rem;
  /* margin-bottom: 9rem; */
  @media screen and (max-width: 500px) {
    margin-top: 6rem;
    padding-bottom: 3rem;
  }
  @media screen and (max-width: 300px) {
    margin-top: 3rem;
    padding-bottom: 0rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 7.5rem;
  margin-top: 1.5rem;
  font-size: 1.6rem;
  @media screen and (max-width: 620px) {
    padding-left: 1rem;
  }
`;

const MoreAnimation = styled.div`
  padding-left: 7.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 620px) {
    padding-left: 1rem;
  }
`;

export const EffectElement = styled.div`
  border-left: 4px solid #e8e9ed;
  padding: 9px 4px;
  width: 190px;

  color: ${(props) => props.color};
  font-size: ${(props) => props.size};

  background-image: ${(props) =>
    `linear-gradient(90deg, ${props.overlay} 0%, ${props.overlay} 50%, ${props.background} 50%)`};
  transition: all 0.5 ease-in;
  cursor: pointer;
  background-size: 200%;
  transition: all 0.4s;
  &:hover {
    transform: translate3d(2%, 0px, 0px);
    background-position: 100%;
  }
`;

function Savage() {
  return (
    <Container>
      <SavageSvg />
      <Content>Lesser bullshit leads to larger impact.</Content>
      <MoreAnimation>
        <EffectElement background="#e8e9ed" overlay="#fff">
          Know More About Us
        </EffectElement>
      </MoreAnimation>
    </Container>
  );
}

export default Savage;
