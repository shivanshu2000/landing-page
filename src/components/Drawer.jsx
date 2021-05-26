import React from 'react';
import styled from 'styled-components';

const Items = styled.div`
  width: 100%;
  /* padding: 25px 10px; */
  height: 20%;
  color: #60637b;
  font-size: 1.8rem;
  font-style: bold;
  overflow: hidden;

  opacity: 0;
  transition: all 0.3s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  overflow: hidden;

  background-color: black;
  border-bottom-left-radius: 55px;
  border-bottom-right-radius: 55px;
  transition: all 0.35s ease-in;
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
  overflow: hidden;
`;

function Drawer({ show }) {
  return (
    <>
      <Container className={show ? 'show' : ''}>
        <Items className="drawer_items" style={{ marginTop: '55px' }}>
          <Item>00 About</Item>
        </Items>
        <Items className="drawer_items">
          <Item>01 Work</Item>
        </Items>
        <Items className="drawer_items">
          <Item>02 Blog</Item>
        </Items>
        <Items className="drawer_items">
          <Item>03 Contact</Item>
        </Items>
      </Container>
    </>
  );
}

export default Drawer;
