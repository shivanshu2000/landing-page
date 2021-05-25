import React from 'react';
import styled from 'styled-components';
import FeaturesTopSvg from './FeaturesTopSvg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;

  & > div > p.heading__text {
    font-size: 2.9rem;
    font-weight: bold;
  }
`;
function FeaturesTop() {
  return (
    <Container>
      <FeaturesTopSvg />

      <div>
        <p className="heading__text">Strategic UX</p>
        <p className="heading__text" style={{ marginTop: '-55px' }}>
          Design & Brand
        </p>
        <p className="heading__text" style={{ marginTop: '-55px' }}>
          Studio.
        </p>
        <p
          className="content"
          style={{ fontSize: '1.5rem', marginTop: '-35px' }}
        >
          We help entrepreneurs and businesses{' '}
          <p> achieve ambitious dreams by building design</p> centric products
          and brands.
        </p>
      </div>
    </Container>
  );
}

export default FeaturesTop;
