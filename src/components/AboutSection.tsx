import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  fadeInUp,
  staggerContainer,
  BackgroundGradient,
  CommonSection,
  CommonContainer,
  GradientSectionTitle,
} from "../styles/CommonStyles.tsx";

const Container = styled(motion.section)`
  min-height: 100vh;
  padding: 6rem 5%;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.colors.text};
`;

const Content = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.text};
    opacity: 0.9;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.colors.surface};

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ContentWrapper = styled.div`
  background: rgba(45, 55, 72, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin-top: 2rem;
`;

const ContentInner = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const IntroductionContainer = styled.div`
  flex: 1.2;
  color: #e2e8f0;
`;

const IntroText = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #e2e8f0;

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: #4299e1;
    font-weight: 600;
  }
`;

const TimelineContainer = styled.div`
  flex: 0.8;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding-right: 2rem;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 0;
    padding-bottom: 2rem;
  }
`;

const TimelineSection = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-top: 2rem;

  &:before {
    content: "";
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(66, 153, 225, 0.3);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;

  &:before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #1a202c;
    border: 2px solid #4299e1;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelinePeriod = styled.div`
  color: #4299e1;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const TimelineRole = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
  color: #e2e8f0;
  font-size: 1.1rem;
`;

const RoleMain = styled.span`
  color: #e2e8f0;
  font-weight: 500;
  min-width: 120px;
`;

const RoleDetail = styled.span`
  color: #a0aec0;
  font-size: 1rem;
  line-height: 1.5;
`;

const AboutSection = () => {
  const timeline = [
    {
      period: "2023.06 - 2024.02",
      role: "(주)코메스타",
      detail: "임베디드 시스템 기반 무선통신장비 조립 및 테스트",
    },
    {
      period: "2021.12 - 2023.01",
      role: "헬코리아 (주)",
      detail: "반도체 및 산업용 자동화 장비 조립 및 생산",
    },
    {
      period: "2021.08 - 2021.11",
      role: "에스메탈(주)",
      detail: "실버(Ag 99.99%) 소재 가공 및 기념메달 생산",
    },
    {
      period: "2019.10 - 2020.10",
      role: "(주)동원약품",
      detail: "병원 및 약국 납품용 의약품의 입고·출고 관리",
    },
  ];

  return (
    <CommonSection id="about">
      <BackgroundGradient />
      <CommonContainer>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <GradientSectionTitle>소개</GradientSectionTitle>
          <ContentWrapper>
            <ContentInner>
              <TimelineContainer>
                <h3
                  style={{
                    color: "#90cdf4",
                    marginBottom: "1.5rem",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                >
                  경력 사항
                </h3>
                <TimelineSection>
                  {timeline.map((item, index) => (
                    <TimelineItem
                      key={index}
                      variants={fadeInUp}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <TimelinePeriod>{item.period}</TimelinePeriod>
                      <TimelineRole>
                        <RoleMain>{item.role}</RoleMain>
                        <RoleDetail>{item.detail}</RoleDetail>
                      </TimelineRole>
                    </TimelineItem>
                  ))}
                </TimelineSection>
              </TimelineContainer>
              <IntroductionContainer>
                <h3
                  style={{
                    color: "#90cdf4",
                    marginBottom: "1.5rem",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                >
                  자기 소개
                </h3>
                <IntroText>
                  <p>
                    안녕하세요, <strong>사용자 중심의 인터페이스</strong>를
                    구현하는 프론트엔드 개발자입니다.
                  </p>
                  <p>
                    <strong>React</strong>를 주력으로 사용하며,{" "}
                    <strong>실시간 드로잉 캔버스</strong>와{" "}
                    <strong>채팅 시스템</strong> 등 다양한 웹 서비스 기능 구현
                    경험이 있습니다.
                  </p>
                  <p>
                    새로운 기술을 학습하고 적용하는 것에 즐거움을 느끼며, 더
                    나은 코드를 작성하기 위해 꾸준히 공부하고 있습니다.
                  </p>
                  <p>
                    현재는 <strong>Spring Boot</strong>를 학습하며 백엔드에 대한
                    이해도를 높이고 있고,
                    <br />웹 개발의 전반적인 흐름을 파악하기 위해 노력하고
                    있습니다.
                  </p>
                </IntroText>
              </IntroductionContainer>
            </ContentInner>
          </ContentWrapper>
        </motion.div>
      </CommonContainer>
    </CommonSection>
  );
};

export default AboutSection;
