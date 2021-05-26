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

      <div style={{ paddingLeft: '5px', marginRight: '11px' }}>
        <p className="heading__text">Strategic UX</p>
        <p className="heading__text" style={{ marginTop: '-55px' }}>
          Design & Brand
        </p>
        <p className="heading__text" style={{ marginTop: '-55px' }}>
          Studio.
        </p>
        <div
          className="content"
          style={{ fontSize: '1.5rem', marginTop: '-35px' }}
        >
          We help entrepreneurs and businesses achieve{' '}
          <div> ambitious dreams by building design centric</div> products and
          brands.
        </div>
      </div>
    </Container>
  );
}

export default FeaturesTop;
