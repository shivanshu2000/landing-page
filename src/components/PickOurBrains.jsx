import Aos from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PickOurBrainsCard from './PickOurBrainsCard';

const data = [
  {
    title: 'Why does the world need another design agency?',
    image:
      'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
    author: 'Praneeth Pike',
  },
  {
    title:
      'Our New Brand Identity reflects its heart — literally | Part II    ',
    image:
      'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    author: 'Praneeth Pike',
  },
  {
    title: 'Our New Brand Identity reflects our heart — literally | Part I    ',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    author: 'Praneeth Pike',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;

  background-color: #f7f8fb;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.7rem;
  margin-top: 5rem;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
  flex-wrap: wrap;
`;

function PickOurBrains() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <Head>
        <div
          className="pick__brains"
          style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
          data-aos="fade-up"
        >
          Pick Our Brains
        </div>
        <div
          data-aos="fade-up"
          className="pick__brains"
          style={{ fontSize: '2.1rem' }}
        >
          News, Blogs, Good Intentions etc.
        </div>
      </Head>

      <CardsContainer>
        {data.map((card) => (
          <PickOurBrainsCard card={card} key={card.image} />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default PickOurBrains;
