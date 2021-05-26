import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 19.2rem;
  @media screen and (max-width: 900px) {
    margin-top: 15.2rem;
  }
  @media screen and (max-width: 500px) {
    margin-top: 11.2rem;
  }
  @media screen and (max-width: 400px) {
    margin-top: 5.2rem;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid black;
  height: 5px;
  flex: 1;
  margin: 11px 30px 0 30px;
`;

const ImagesContainer = styled.div`
  margin-top: 1.7rem;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-around;
`;

const LeftImage = styled.img`
  width: 100%;

  height: 500px;
  /* image-rendering: pixelated; */
  background: url('https://images.ctfassets.net/b62jgkkofmz2/5PQci8S7WrFxQODEy9v4v3/d359f252325074be63cbbb7a36014c68/zyppys_banner_2x.png?w=800&h=407&q=100');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(0.95);
  }
`;

const RightImage = styled.div`
  display: flex;

  justify-content: flex-start;
  width: 100%;
  height: 450px;
  margin-top: 25px;
  margin-right: 1rem;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(0.98);
  }
`;

const RightImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 450px;
  @media screen and (max-width: 506px) {
    width: 80%;
  }
`;

function FeaturesWork() {
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{ display: 'flex', width: '80%', justifyContent: 'center' }}
        >
          <div style={{ fontSize: '1.5rem', marginLeft: '9px' }}>
            Featured Work.
          </div>
          <Line />
        </div>
      </div>

      <ImagesContainer>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <LeftImage />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '9px',
              }}
            >
              <img
                style={{ height: '65px' }}
                alt="image__image"
                src="//images.ctfassets.net/b62jgkkofmz2/53QqxmKvGdR14P2C8z3q2X/805effeb1876ec61214663bd80684fde/logo-with-text.svg"
              />
            </div>
            <div style={{ fontSize: '20px' }}>
              Building India's first ever rental car<div> marketplace.</div>
            </div>
          </div>
        </div>

        <RightImageContainer>
          <RightImage>
            <video
              src="//videos.ctfassets.net/b62jgkkofmz2/6Jtrf2ZLxdzj4iKvU7mFcg/b69a6ff8af4f0fd176d48c37a0e69b43/Intro_Movie_for_AHL_Product_Design.mp4"
              style={{ width: '100%', height: '100% ' }}
            ></video>
          </RightImage>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '25px',
            }}
          >
            <img
              alt="video"
              src="//images.ctfassets.net/b62jgkkofmz2/4taqxDkC14IjVNKhbVkYE8/aa3814a58b3a976dd293b4b581b08a6c/black.svg"
            />
          </div>
          <p>A decade old news channel's makeover</p>
        </RightImageContainer>
      </ImagesContainer>
    </Container>
  );
}

export default FeaturesWork;
