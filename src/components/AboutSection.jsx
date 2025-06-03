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
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  z-index: 1;
`;

const Content = styled(Container)`
  max-width: 1200px;
  display: flex;
  gap: 8rem;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6rem 2rem 0;
  width: 100%;

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 6rem 1rem 0;
    gap: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightSection = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.25rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  width: 100%;
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
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        소개
      </SectionTitle>
      <Content>
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
              사용자 중심의 인터페이스를 구현하는{" "}
              <strong>프론트엔드 개발자</strong>입니다.
            </p>
            <p>
              <strong>React</strong>를 주력으로 프론트엔드 개발을 해왔으며,{" "}
              <strong>Spring Boot</strong> 기반의 백엔드 팀과 협업한 경험이
              있습니다.
            </p>
            <p>
              현재는 프론트엔드 역량을 강화하는 동시에{" "}
              <strong>백엔드 개발</strong>도 함께 학습하며, 더 나은 웹 서비스
              구현을 위해 노력하고 있습니다.
            </p>
            <p>
              <strong>CI/CD 파이프라인</strong>과{" "}
              <strong>클라우드 인프라</strong>에도 관심을 가지고 있어 개발 환경
              전반에 대한 이해를 넓혀가고 있습니다.
            </p>
          </Description>
        </RightSection>
      </Content>
    </AboutContainer>
  );
};

export default AboutSection;
