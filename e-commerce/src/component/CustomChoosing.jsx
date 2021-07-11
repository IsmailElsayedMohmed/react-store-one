import styled from "styled-components";
import React from "react";

export default function CustomChoosing() {
  return (
    <Wrapper>
      <Container className="container">
        <Header>
          <h3>
            custom furniture <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </Header>
        <BodyServices>
          <article>
            <img src="/images/compass.svg" alt="" />
            <h5>Mission</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </article>
          <article>
            <img src="/images/diamon.svg" alt="" />
            <h5>Vision</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </article>
          <article>
            <img src="/images/history.svg" alt="" />
            <h5>History</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </article>
        </BodyServices>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: linear-gradient(to top, white 20%, var(--km7y-10) 20% 80%);
  @media (max-width: 961px) {
    background: var(--km7y-10);
  }
`;
const Container = styled.div``;
const Header = styled.section`
  display: grid;
  padding: 4rem 0;
  flex-direction: column;
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
    grid-template-columns: 8fr 8fr;
  }
  h3 {
    font-size: 2.2rem;
    text-transform: capitalize;
    color: var(--km7y-1);
  }
  p {
    color: var(--km7y-3);
    font-size: 16px;
    text-align: center;
    padding-top: 1.5rem;
  }
`;
const BodyServices = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 40px;
  text-align: center;

  article {
    background-color: var(--km7y-7);
    padding: 20px;
    border-radius: 5px;
    margin: 30px 0;

    img {
      width: 30px;
      height: 30px;
      background-color: var(--km7y-10);
      border-radius: 50%;
      padding: 0.7rem;
    }
    h5 {
      padding: 0.5rem 0;
      color: var(--km7y-1);
      font-size: 25px;
      letter-spacing: var(--spacing);
    }
    p {
      font-size: 15px;
      line-height: 1.8;
      padding: 0.5rem 0;
      color: var(--km7y-2);
    }
  }
`;
