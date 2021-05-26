import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Drawer from './Drawer';
import Logo from './Logo';

const Menu = styled.div`
  display: flex;
  margin-right: 7rem;
  align-items: center;
  justify-content: space-around;
  width: 7rem;
  z-index: 30;
  @media screen and (max-width: 650px) {
    margin-right: 10px;
  }
`;

const RightItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
`;

const Nav = styled.nav`
  /* margin-top: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  transition: all 0.3s ease-in;
  & > ${RightItems} ${Menu} > p.menu__text {
    color: rgb(96, 99, 123);
    font-size: 1.2rem;
    font-style: bold;
  }
  &.shift {
    margin-top: 0;
  }

  @media screen and (max-width: 320px) {
    justify-content: space-around;
  }
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 30;
  margin-bottom: 95px;
  @media screen and (max-width: 320) {
    width: 300px;
  }
`;

const HiddenBlock = styled.div`
  background-color: white;
  width: 100%;
  height: 60px;
  z-index: 3;
  position: fixed;
  transform: translateY(-60px);
  transition: all 0.3s ease-in;
  &.white {
    transform: translateY(0);
  }
  /* transform: translate(100px, 200px); */
`;

const HelloBox = styled.div`
  padding: 3px 13px;
  display: flex;
  position: relative;
  background-color: #e4e5e9;
  color: rgb(96, 99, 123);
  border-radius: 5px;
  z-index: 10;
  margin-right: 15px;
  width: 90px;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  transition: all 0.3s ease-in;
  &:hover > div.red {
    transform: scale(1);
    transform: translate3d(10%, 15%, 0px);
    opacity: 0.5;
  }
  &:hover > div.blue {
    transform: scale(1);
    transform: translate3d(-25%, -25%, 0px);
    opacity: 0.4;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export default function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', headerColorChange);
    window.addEventListener('scroll', shiftNavUp);

    return function cleanup() {
      window.addEventListener('scroll', shiftNavUp);
      window.removeEventListener('scroll', headerColorChange);
    };
  });

  const shiftNavUp = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 2) {
      document.body.getElementsByTagName('nav')[0].classList.add('shift');
    } else {
      document.body.getElementsByTagName('nav')[0].classList.remove('shift');
    }
  };

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 2) {
      document.body
        .querySelectorAll('.hidden__block')[0]
        .classList.remove('white');
      document.body
        .querySelectorAll('.hidden__block')[0]
        .classList.add('white');
    } else {
      document.body
        .querySelectorAll('.hidden__block')[0]
        .classList.add('white');
      document.body
        .querySelectorAll('.hidden__block')[0]
        .classList.remove('white');
    }
  };

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <HiddenBlock className="hidden__block"></HiddenBlock>
      <Nav className="nav">
        <Logo />
        <RightItems>
          <HelloBox>
            <div className="red"></div>
            <div>Say Hello</div>
            <div className="blue"></div>
          </HelloBox>
          <Menu>
            <p className="menu__text">Menu</p>
            <div
              onClick={toggleMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              {toggle ? (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#D8DBF3"
                    strokeWidth="3.2"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path d="M10.256 1.6c-3.01 0-4.19.228-5.409.88A5.67 5.67 0 0 0 2.48 4.846C1.828 6.065 1.6 7.246 1.6 10.256v5.488c0 3.01.228 4.19.88 5.409a5.67 5.67 0 0 0 2.367 2.368c1.218.651 2.399.879 5.409.879h5.488c3.01 0 4.19-.228 5.409-.88a5.67 5.67 0 0 0 2.368-2.367c.651-1.218.879-2.399.879-5.409v-5.488c0-3.01-.228-4.19-.88-5.409a5.67 5.67 0 0 0-2.367-2.368c-1.218-.651-2.399-.879-5.409-.879h-5.488z"></path>
                    <path d="M17.894 7.994l-9.767 9.767"></path>
                    <path d="M7.68 8.18l9.767 9.767"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#D8DBF3"
                    strokeWidth="3.2"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path d="M10.256 1.6c-3.01 0-4.19.228-5.409.88A5.67 5.67 0 0 0 2.48 4.846C1.828 6.065 1.6 7.246 1.6 10.256v5.488c0 3.01.228 4.19.88 5.409a5.67 5.67 0 0 0 2.367 2.368c1.218.651 2.399.879 5.409.879h5.488c3.01 0 4.19-.228 5.409-.88a5.67 5.67 0 0 0 2.368-2.367c.651-1.218.879-2.399.879-5.409v-5.488c0-3.01-.228-4.19-.88-5.409a5.67 5.67 0 0 0-2.367-2.368c-1.218-.651-2.399-.879-5.409-.879h-5.488z"></path>
                    <path d="M6.5 9.75h7.313"></path>
                    <path d="M6.5 15.438h13.813"></path>
                  </g>
                </svg>
              )}
            </div>
          </Menu>
        </RightItems>
        <Drawer show={toggle ? true : false} />
      </Nav>
    </Container>
  );
}
