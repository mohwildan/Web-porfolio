import styled from "styled-components";
import SkillTeknologis from "./SkillTeknologis";
import TimeLines from "./TimeLines";

function ResumeSectios() {
  return (
    <Sections>
      <Container>
        <ResumeTextMainContainer>
          <ResumeTextMain>Resume</ResumeTextMain>
        </ResumeTextMainContainer>
        <Sessions>
          <TimeLines />
          <SkillTeknologis />
        </Sessions>
      </Container>
    </Sections>
  );
}

export default ResumeSectios;

const Sections = styled.div`
  padding-top: 6rem;

`;
const Container = styled.div`
  width: min(100%, 75rem);
  margin-inline: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
`;
const Sessions = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ResumeTextMainContainer = styled.div`
  position: relative;
  text-align: center;
`;
const ResumeTextMain = styled.h2`
  color: ${({ theme }) => theme.title};
  padding: 0 2rem;
  font-size: clamp(2.1875rem, 1.4286rem + 2.4286vw, 3.25rem);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.title};
    left: 0;
    bottom: -5px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 3px;
    background-color: #dbde3d;
    left: 0;
    transform: translateX(50%);
    bottom: -18px;
  }
`;
