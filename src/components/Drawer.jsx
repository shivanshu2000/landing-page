import React, { useEffect } from 'react';
import styled from 'styled-components';

import Aos from 'aos';

const Items = styled.div`
  width: 100%;
  padding: 25px 10px;
  color: #60637b;
  font-size: 1.8rem;
  font-style: bold;
  opacity: 0;
  transition: all 0.9s ease-in;
  cursor: pointer;
  &:hover {
    background-color: rgb(96, 99, 123, 0.5);
  }
`;

const Container = styled.div`
  z-index: 25;
  transform: translateY(-85vh);
  height: 90vh;
  position: fixed;
  width: 100%;
  /* will-change: transform; */
  background-color: black;
  border-bottom-left-radius: 55px;
  border-bottom-right-radius: 55px;
  transition: all 0.3s ease-in;
  &.show {
    /* height: 70vh; */
    transform: translateY(37vh);
  }

  &.show > ${Items} {
    opacity: 1;
    display: flex;
  }
`;

const Item = styled.div`
  margin-left: 35px;
`;

function Drawer({ show }) {
  return (
    <>
      <Container className={show ? 'show' : ''}>
        <Items data-aos="fade-down" style={{ marginTop: '55px' }}>
          <Item>00 About</Item>
        </Items>
        <Items data-aos="fade-down">
          <Item>01 Work</Item>
        </Items>
        <Items data-aos="fade-down">
          <Item>02 Blog</Item>
        </Items>
        <Items data-aos="fade-down">
          <Item>03 Contact</Item>
        </Items>
      </Container>
    </>
  );
}

export default Drawer;