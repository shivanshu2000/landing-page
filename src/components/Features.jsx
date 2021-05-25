import React from 'react';
import styled from 'styled-components';
import FeaturesTop from './FeaturesTop';
import FeaturesWork from './FeaturesWork';
import PickOurBrains from './PickOurBrains';

const Container = styled.div`
  margin-top: 30px;
  border-radius: 25px;
  background-color: white;
  /* width: 100; */
  height: auto;
`;
function Features() {
  return (
    <Container>
      <FeaturesTop />
      <FeaturesWork />
      <PickOurBrains />
    </Container>
  );
}

export default Features;
