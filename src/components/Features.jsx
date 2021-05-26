import React from 'react';
import styled from 'styled-components';
import FeaturesTop from './FeaturesTop';
import FeaturesWork from './FeaturesWork';
import PickOurBrains from './PickOurBrains';
import Savage from './Savage';

const Container = styled.div`
  margin-top: 30px;
  border-radius: 25px;
  background-color: white;
  width: 100%;
  height: auto;
  @media screen and (max-width: 325px) {
    padding: 2px;
    margin-top: -65px;
  }
`;
function Features() {
  return (
    <Container>
      <FeaturesTop />
      <FeaturesWork />
      <PickOurBrains />
      <Savage />
    </Container>
  );
}

export default Features;
