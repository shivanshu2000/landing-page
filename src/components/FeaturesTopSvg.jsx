import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 1px;
  & > svg {
    /* margin-top: -75px; */
    /* margin-right: 95px; */
  }
`;
function FeaturesTopSvg() {
  return (
    <Container>
      <svg
        width="780"
        height="800"
        viewBox="0 0 780 800"
        xmlns="http://www.w3.org/2000/svg"
        class="Heart__StyledSvg-sc-1cpabxc-0 jEZszO"
      >
        <path
          d="M375.692 201.683c0 98.816-80.066 178.912-178.846 178.912C98.08 380.595 18 300.5 18 201.683 18 102.88 98.08 22.771 196.846 22.771c98.78 0 178.846 80.109 178.846 178.912zM762 196.84c0 54.205-24.44 102.722-62.974 135.485L384.572 643l-128.11-127.16 195.72-193.62c-32.017-32.303-51.886-76.504-51.886-125.38 0-98.789 80.951-178.84 180.84-178.84C680.944 18 762 98.051 762 196.84z"
          stroke="#3A47B7"
          strokeWidth="35"
          fill="none"
          fillRule="evenodd"
          opacity=".1"
        ></path>
      </svg>
    </Container>
  );
}

export default FeaturesTopSvg;
