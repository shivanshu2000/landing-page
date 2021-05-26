import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 7.5rem;
  @media screen and (max-width: 620px) {
    padding-left: 1rem;
  }
`;

function SavageSvg() {
  return (
    <Container>
      <svg height="61" viewBox="0 0 72 61" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" d="M-147-5271h1440v6532H-147z"></path>
          <path
            d="M17.429 34.776C7.803 34.776 0 26.99 0 17.388 0 7.785 7.803 0 17.429 0c9.625 0 17.428 7.785 17.428 17.388 0 9.603-7.803 17.388-17.428 17.388zm50.364-6.418l.034.034-32.584 32.583-10.792-10.792L44.524 30.11c-.319-.274-.63-.562-.933-.865-6.457-6.457-6.476-16.906-.043-23.34 6.434-6.433 16.883-6.414 23.34.043 6.155 6.154 6.46 15.936.905 22.41z"
            fill="#33343E"
          ></path>
        </g>
      </svg>
    </Container>
  );
}

export default SavageSvg;
