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
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Hero>
      <Container>
        <div>
          <div className="first" data-aos="fade-up">
            Great Ideas
          </div>
          <div className="second bottom" data-aos="fade-up">
            Deserve Great
          </div>
          <div className="third bottom" data-aos="fade-up">
            Products
          </div>
        </div>
      </Container>
    </Hero>
  );
}

export default HeroBlock;
