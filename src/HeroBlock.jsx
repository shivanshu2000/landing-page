import Aos from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Hero = styled.div`
  /* margin-top: 95px; */
  position: relative;
  top: 95px;
  transition: all 0.3s ease-in;
  height: 450px;
  z-index: -20;
  /* background-color: white; */
`;

const Container = styled.div`
  position: absolute;
  bottom: 50%;
  margin-left: 50px;
  /* transform: translate(0, -50%); */
`;
function HeroBlock() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', headerColorChange);
    console.log(document.body.querySelectorAll('.bottom'));
    return function cleanup() {
      window.removeEventListener('scroll', headerColorChange);
    };
  });

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 290) {
      document.body.querySelectorAll('.first')[0].classList.remove('top');
      document.body.querySelectorAll('.second')[0].classList.remove('bottom');
      document.body.querySelectorAll('.third')[0].classList.remove('bottom');
    } else if (windowsScrollTop < 210) {
      document.body.querySelectorAll('.first')[0].classList.add('top');
      document.body.querySelectorAll('.second')[0].classList.add('bottom');
      document.body.querySelectorAll('.third')[0].classList.add('bottom');
    }
  };

  return (
    <Hero>
      <Container>
        <div>
          <div className="first top">Great Ideas</div>
          <div className="second bottom">Deserve Great</div>
          <div className="third bottom">Products</div>
        </div>
      </Container>
    </Hero>
  );
}

export default HeroBlock;
