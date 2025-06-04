import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SectionContainer, Container } from "../styles/CommonStyles";

const AboutContainer = styled(SectionContainer)`
  background: linear-gradient(180deg, #1a202c 0%, #0a0a0a 100%);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 4rem;
`;

const Content = styled(Container)`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;

  @media (max-width: 968px) {
    padding: 0 1rem;
  }
`;

const ContentBox = styled.div`
  background: rgba(26, 32, 44, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(66, 153, 225, 0.1);
  border-radius: 20px;
  padding: 3rem;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  gap: 4rem;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 3rem;
    padding: 0;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0;

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

const RightSection = styled.div`
  flex: 1;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2rem;
  padding-top: 0;

  @media (max-width: 968px) {
    max-width: 100%;
    margin-right: 0;
    padding-left: 0;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.25rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  width: 100%;
  text-align: left;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 1.5rem;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #4299e1;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 1.5rem;
  padding-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: -1.8rem;
    top: 0.5rem;
    width: 0.8rem;
    height: 0.8rem;
    background: #4299e1;
    border-radius: 50%;
  }
`;

const TimelineDate = styled.h3`
  color: #4299e1;
  font-size: 1.25rem;
  margin-bottom: 0.3rem;
`;

const TimelineCompany = styled.h4`
  color: #e2e8f0;
  font-size: 1.25rem;
  margin-bottom: 0.3rem;
`;

const TimelineDescription = styled.p`
  color: #a0aec0;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const Description = styled(motion.div)`
  color: #a0aec0;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: left;
  width: 100%;
  max-width: 100%;
  word-break: keep-all;
  overflow-wrap: break-word;

  p {
    margin-bottom: 1.5rem;
    letter-spacing: 0.3px;
    word-spacing: 1px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #4299e1;
    font-size: 1.15rem;
    font-weight: 600;
    position: relative;
    display: inline;

    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(66, 153, 225, 0.2);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    strong {
      font-size: 1.05rem;
    }
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6rem 2rem 0;
  width: 100%;

  @media (max-width: 968px) {
    padding: 6rem 1rem 0;
  }
`;

const AboutText = styled.p`
  color: #a0aec0;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
  width: 100%;

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: #4299e1;
    font-size: 1.2rem;
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <Content>
        <ContentBox>
          <ContentWrapper>
            <LeftSection>
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                타임라인
              </Title>
              <Timeline>
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <TimelineDate>2024.10 - 2025.05</TimelineDate>
                  <TimelineCompany>
                    메타버스 에듀테크 개발자 트랙
                  </TimelineCompany>
                  <TimelineDescription>
                    기업프로젝트 웹 개발 및 메타버스 플랫폼 개발
                  </TimelineDescription>
                </TimelineItem>
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <TimelineDate>2023.06 - 2024.02</TimelineDate>
                  <TimelineCompany>(주)코메스타</TimelineCompany>
                  <TimelineDescription>
                    임베디드 시스템 기반 무선통신장비 조립 및 테스트
                  </TimelineDescription>
                </TimelineItem>
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <TimelineDate>2021.12 - 2023.01</TimelineDate>
                  <TimelineCompany>헬코리아 (주)</TimelineCompany>
                  <TimelineDescription>
                    반도체 및 산업용 자동화 장비 조립 및 생산
                  </TimelineDescription>
                </TimelineItem>
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <TimelineDate>2021.08 - 2021.11</TimelineDate>
                  <TimelineCompany>에스메탈(주)</TimelineCompany>
                  <TimelineDescription>
                    실버(Ag 99.99%) 소재 가공 및 기념메달 생산
                  </TimelineDescription>
                </TimelineItem>
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <TimelineDate>2019.10 - 2020.10</TimelineDate>
                  <TimelineCompany>(주)동원약품</TimelineCompany>
                  <TimelineDescription>
                    병원 및 약국 납품용 의약품의 입고출고 관리
                  </TimelineDescription>
                </TimelineItem>
              </Timeline>
            </LeftSection>
            <RightSection>
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                자기소개
              </Title>
              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>
                  안녕하세요. 사용자 중심의 웹 서비스를 구현하는{" "}
                  <strong>프론트엔드 개발자</strong> 정강철입니다.
                </p>
                <p>
                  <strong>React</strong>를 주력으로 활용하여 직관적이고 반응형
                  웹 애플리케이션을 개발하고 있으며,{" "}
                  <strong>Spring Boot</strong> 기반의 백엔드와의 협업 경험을
                  보유하고 있습니다.
                </p>
                <p>
                  컴포넌트의 <strong>재사용성</strong>과{" "}
                  <strong>유지보수성</strong>을 고려한 설계를 지향하며,{" "}
                  <strong>Styled-Components</strong>와 <strong>Zustand</strong>{" "}
                  등 모던 웹 기술을 활용하여 효율적인 개발을 하고자 노력합니다.
                </p>
                <p>
                  사용자에게 더 나은 경험을 제공하기 위해{" "}
                  <strong>성능 최적화</strong>와 <strong>UI/UX 개선</strong>에
                  대해 지속적으로 고민하고 학습하고 있습니다.
                </p>
              </Description>
            </RightSection>
          </ContentWrapper>
        </ContentBox>
      </Content>
    </AboutContainer>
  );
};

export default AboutSection;
