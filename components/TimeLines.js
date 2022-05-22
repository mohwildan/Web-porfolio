import styled from "styled-components";
function TimeLines() {
  return (
    <TimeLiness>
      <ResumeText>My Academy</ResumeText>
      <ul>
        <li>
          <TimeLineMain>
            <TimeContainer>
              <Time>2017 - 2020</Time>
            </TimeContainer>
            <SMA2>Sma Negri 2 Berau</SMA2>
            <TextDescriptions>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ex dolorum doloribus ratione iure assumenda, ad porro pariatur
              earum doloremque, soluta in. Enim deserunt cum adipisci dicta,
              eius veritatis maxime.Eos dolore corrupti animi repellat!
            </TextDescriptions>
          </TimeLineMain>
        </li>
        <li>
          <TimeLineMain>
            <TimeContainer>
              <Time>2022 - 2026</Time>
            </TimeContainer>
            <SMA2>STIMIK El Rahma</SMA2>
            <TextDescriptions>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ex dolorum doloribus ratione iure assumenda, ad porro pariatur
              earum doloremque, soluta in. Enim deserunt cum adipisci dicta,
              eius veritatis maxime.Eos dolore corrupti animi repellat!
            </TextDescriptions>
          </TimeLineMain>
        </li>
      </ul>
    </TimeLiness>
  );
}

export default TimeLines;

const TimeLiness = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  margin-left: 1.5rem;
  flex-direction: column;
  flex: 1;

  ul {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      transform: translateX(-1.5rem);
      height: 100%;
      width: 3px;
      background-color: ${({ theme }) => theme.title};
    }
    li {
      list-style: none;
      position: relative;

      ::before {
        content: "";
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        background-color: #dbde3d;
        border-radius: 100%;
        left: 0;
        transform: translateX(-2rem);
      }
    }
  }
`;
const TimeLineMain = styled.div`
  margin-bottom: 3rem;
`;
const TimeContainer = styled.div`
  background-color: transparent;
  border: 3px solid #dbde3d;
  width: fit-content;
  border-radius: 50px;
`;
const Time = styled.h4`
  padding: 0.2rem 2rem;
  font-size: clamp(0.75rem, 0.5714rem + 0.5714vw, 1rem);
  color: ${({ theme }) => theme.title}; ;
`;
const SMA2 = styled.h3`
  margin-top: 1.3rem;
  font-size: clamp(1.125rem, 0.8571rem + 0.8571vw, 1.5rem);
  color: ${({ theme }) => theme.title};
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;
const ResumeText = styled.h2`
  color: ${({ theme }) => theme.title};
  font-weight: 400;
  font-size: clamp(1.5rem, 1.1429rem + 1.1429vw, 2rem);
  text-align: center;
  margin-bottom: 3rem;
`;
const TextDescriptions = styled.p`
  color: ${({ theme }) => theme.title};
  letter-spacing: 1px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 1.5px;
  font-size: clamp(1rem, 0.7857rem + 0.6857vw, 1.3rem);
`;
