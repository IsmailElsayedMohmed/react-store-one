import React from "react";
import styled from "styled-components";
import BackHomeBackground from "./BackHomeBackground";
import { FeaturedTitle } from "./FeaturedProducts";
export default function About() {
  return (
    <>
      <BackHomeBackground state={"About"} />
      <Wrapper className="container">
        <ImageAbout>
          <img src="/images/hero-bcg.jpeg" alt="" />
        </ImageAbout>
        <TitleCont>
          <AboutTitle>
            <h1>Our Story</h1>
            <div className="underLine"></div>
          </AboutTitle>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </TitleCont>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: grid;
  padding: 4rem 0;
  @media (min-width: 761px) {
    gap: 50px;
    grid-template-columns: 1fr 1fr;
  }
`;
const ImageAbout = styled.div`
  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const AboutTitle = styled(FeaturedTitle)`
  margin: 0rem 0 2rem;
  h1 {
    margin-top: 1rem;
    text-align: start;
    @media (max-width: 761px) {
      font-size: 30px;
    }
  }

  .underLine {
    margin: initial;
  }
  @media (max-width: 768px) {
  }
`;

const TitleCont = styled.div`
  p {
    font-size: 15px;
    letter-spacing: var(--spacing);
    color: var(--grey-5);
    line-height: 2;
    @media (max-width: 761px) {
      font-size: 12px;
    }
  }
`;
