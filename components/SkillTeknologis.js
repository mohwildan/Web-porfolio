import styled from "styled-components";
import { IoLogoSass } from "react-icons/io";
import {
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
function SkillTeknologis() {
  return (
    <SkillTeknologii>
      <ResumeText>Skill & Teknologi</ResumeText>
      <BoxSkil>
        <Skill>
          <SiHtml5 />
          <SkillName>Html</SkillName>
        </Skill>
        <Skill>
          <SiCss3 />
          <SkillName>Css</SkillName>
        </Skill>
        <Skill>
          <SiJavascript />
          <SkillName>JavaScript</SkillName>
        </Skill>
        <Skill>
          <IoLogoSass />
          <SkillName>Sass</SkillName>
        </Skill>
        <Skill>
          <SiStyledcomponents />
          <SkillName>Styled Components</SkillName>
        </Skill>
        <Skill>
          <SiReact />
          <SkillName>ReactJs</SkillName>
        </Skill>
        <Skill>
          <SiNextdotjs />
          <SkillName>NextJs</SkillName>
        </Skill>
      </BoxSkil>
    </SkillTeknologii>
  );
}

export default SkillTeknologis;

const SkillTeknologii = styled.div`
  flex: 1;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ResumeText = styled.h2`
  color: ${({ theme }) => theme.title};
  font-weight: 400;
  font-size: clamp(1.5rem, 1.1429rem + 1.1429vw, 2rem);
  text-align: center;
`;

const BoxSkil = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: ${({ theme }) => theme.title};
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: center;
  }

  svg {
    margin: 2rem 2rem;
    font-size: 5rem;
  }
`;
const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SkillName = styled.h3``;
