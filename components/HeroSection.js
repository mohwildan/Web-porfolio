import styled from "styled-components";
function HeroSection() {
  return (
    <Section>
      <Container>
        <HeroText>
          My Name <br />
          <span>Mohammad Wildan</span>
        </HeroText>
        <HeroListContainer>
          <HeroList>Frontend</HeroList>
          <HeroList strip>-</HeroList>
          <HeroList>Web</HeroList>
          <HeroList strip>-</HeroList>
          <HeroList>Developer</HeroList>
        </HeroListContainer>
        <HeroButton>Download CV</HeroButton>
      </Container>
    </Section>
  );
}

export default HeroSection;

const Section = styled.div``;
const Container = styled.div`
  width: min(100%, 75rem);
  height: calc(100vh - 80px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeroText = styled.h1`
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-size: clamp(2.1875rem, 0.1786rem + 6.4286vw, 5rem);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -8rem;
    top: -3rem;
    background-image: url("/Rectangle 1.svg");
    transform: rotate(-34.49deg);
    width: 18rem;
    height: 2rem;
    background: #181B36;
     border-radius: 0px 100% 0 100%;
  }


  &::after {
    content: "";
    position: absolute;
    bottom: -12rem;
    right: 0rem;
    transform: rotate(-34.49deg);
    width: 18rem;
    height: 2rem;
    background:#838446;
    border-radius: 100% 0% 100% 0%;
  }

  span {
    font-weight: 300;
  }
`;
const HeroListContainer = styled.div`
  display: flex;
  position: relative;


`;
const HeroList = styled.h2`
  margin: 1rem 0.3rem;
  color: ${({ theme }) => theme.title};
  font-weight: 400;
  font-size: clamp(1rem, 0.6429rem + 1.1429vw, 1.5rem);
  opacity: ${(props) => props.strip && ".8"};
  font-weight: 300;
`;
const HeroButton = styled.button`
  padding: 0.8rem 2.8rem;
  font-size: clamp(0.75rem, 0.5714rem + 0.5714vw, 1rem);
  background-color: transparent;
  outline: none;
  border: 2px solid ${({ theme }) => theme.title};
  color: ${({ theme }) => theme.title};
  cursor: pointer;
  transition: 0.3s;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.title};
    color: ${({ theme }) => theme.wow};
    
  }
`;
