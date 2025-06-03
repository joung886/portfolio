import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { staggerContainer } from "../styles/CommonStyles";
import {
  FaGithub,
  FaCalendar,
  FaUser,
  FaUsers,
  FaExternalLinkAlt,
  FaCode,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiReact,
  SiStyledcomponents,
  SiFramer,
  SiReactrouter,
  SiAxios,
} from "react-icons/si";
import { BsLightningChargeFill } from "react-icons/bs";
import { useState } from "react";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0a0f1c;
  padding: 100px 0;
  color: #e2e8f0;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #90cdf4;
  margin-bottom: 1rem;
`;

const ProjectInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #718096;

  svg {
    color: #4299e1;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: #e2e8f0;
`;

const MainImageContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(26, 32, 44, 0.8);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const TechTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(49, 130, 206, 0.1);
  color: #90cdf4;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 1rem;
  transition: all 0.2s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(49, 130, 206, 0.2);
    transform: translateY(-2px);
  }
`;

const FeatureSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const MetricCard = styled.div`
  background: rgba(45, 55, 72, 0.5);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #4299e1;
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  color: #a0aec0;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #90cdf4;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.li`
  background: rgba(45, 55, 72, 0.5);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: #90cdf4;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #e2e8f0;
`;

const TechnicalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`;

const TechnicalItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TechnicalTitle = styled.h3`
  font-size: 1.2rem;
  color: #90cdf4;
  font-weight: 600;
`;

const TechnicalDescription = styled.p`
  color: #e2e8f0;
  line-height: 1.6;
  margin-left: 1rem;
`;

const ProjectDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const project = {
    title: "Atelier - 아티스트 커뮤니케이션 플랫폼",
    period: "2025.03 - 2025.05 (2개월)",
    role: "Frontend 2명 / Backend 2명 / planning 1명",
    team: "팀 프로젝트트",
    mainImage: "/images/atelier-thumbnail1.png",
    description:
      "Atelier는 아티스트들을 위한 혁신적인 소통과 협업 플랫폼입니다. React와 WebSocket을 기반으로 개발되었으며, 실시간 기능들과 인터랙티브한 UI/UX를 제공합니다.",
    metrics: [
      { label: "드로잉 성능", value: "30fps → 60fps" }, // DrawingCanvas.jsx에서 확인 가능한 FPS 개선
      { label: "WebSocket 연결 안정성", value: "98%" }, // 채팅 연결 유지율
      { label: "이미지 압축률", value: "40%" }, // 드로잉 저장 시 압축률
      { label: "평균 응답 시간", value: "150ms" }, // API 응답 시간
    ],
    features: [
      {
        title: "실시간 드로잉 캔버스",
        description:
          "Canvas API와 WebSocket을 결합한 실시간 협업 드로잉 기능. 커스텀 드로잉 도구와 성능 최적화를 통해 부드러운 드로잉 경험 제공",
        image: "/images/atelier-thumbnail7.png",
      },
      {
        title: "실시간 채팅 시스템",
        description:
          "WebSocket 기반 실시간 채팅으로 즉각적인 커뮤니케이션 가능. 자동 재연결과 메시지 큐 시스템으로 안정성 확보",
        image: "/images/atelier-thumbnail6.png",
      },
      {
        title: "사용자 인증 시스템",
        description:
          "JWT 기반 인증과 보안 강화. 직관적인 UI와 자동 로그인으로 편리한 사용자 경험 제공",
        image: "/images/atelier-thumbnail2.png",
      },
      {
        title: "회원정보 관리 페이지",
        description:
          "회원 프로필 수정, 계정 설정 등 사용자 맞춤 기능 제공. 직관적인 UI로 손쉬운 정보 관리 가능",
        image: "/images/atelier-thumbnail5.png",
      },
    ],
    techStack: [
      { name: "React", icon: SiReact },
      { name: "WebSocket", icon: BsLightningChargeFill },
      { name: "Canvas API", icon: FaPaintBrush },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "Framer Motion", icon: SiFramer },
      { name: "React Router", icon: SiReactrouter },
      { name: "Axios", icon: SiAxios },
    ],
    technicalPoints: [
      {
        title: "실시간 드로잉 동기화 안정화",
        description:
          "Canvas API와 WebSocket을 결합하여 실시간 드로잉을 구현했으며, 성능 저하 문제를 requestAnimationFrame과 useRef를 활용한 최적화로 해결했습니다. FPS를 30에서 60으로 개선하여 부드러운 드로잉을 구현했습니다.",
      },
      {
        title: "채팅 시스템 안정성 확보",
        description:
          "WebSocket 연결 불안정 문제를 useSocketStore와 useWebSocket 커스텀 훅을 통해 해결했으며, 메시지 누락 방지를 위해 채팅방별 독립적인 소켓 관리 로직을 구현했습니다.",
      },
      {
        title: "상태 관리 복잡성 해결",
        description:
          "여러 컴포넌트에서 공유되는 인증 정보와 채팅 상태 관리를 위해 Context API와 Custom Hook을 설계했으며, 불필요한 리렌더링을 방지하기 위해 메모이제이션 패턴을 적용했습니다.",
      },
      {
        title: "이미지 처리 성능 최적화",
        description:
          "드로잉 저장/로드 시 발생하는 대용량 이미지 처리 문제를 Base64 인코딩 최적화와 이미지 압축을 통해 해결했으며, 임시저장 기능 구현으로 작업 손실을 방지했습니다.",
      },
      {
        title: "사용자 인증 보안 강화",
        description:
          "JWT 토큰 관리의 보안 취약점을 해결하기 위해 localStorage와 Axios Interceptor를 조합하여 자동 토큰 갱신 및 인증 처리 로직을 구현했습니다.",
      },
    ],
  };

  return (
    <Container>
      <Content>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title>{project.title}</Title>

          <ProjectInfo>
            <InfoItem>
              <FaCalendar />
              {project.period}
            </InfoItem>
            <InfoItem>
              <FaUser />
              {project.role}
            </InfoItem>
            <InfoItem>
              <FaUsers />
              {project.team}
            </InfoItem>
          </ProjectInfo>

          <Description>{project.description}</Description>

          <MainImageContainer>
            <MainImage src={project.mainImage} alt={project.title} />
          </MainImageContainer>

          <TechStack>
            {project.techStack.map((tech, index) => (
              <TechTag key={index}>
                <tech.icon />
                {tech.name}
              </TechTag>
            ))}
          </TechStack>

          <Metrics>
            {project.metrics.map((metric, index) => (
              <MetricCard key={index}>
                <MetricValue>{metric.value}</MetricValue>
                <MetricLabel>{metric.label}</MetricLabel>
              </MetricCard>
            ))}
          </Metrics>

          {project.features.map((feature, index) => (
            <FeatureSection key={index}>
              {index % 2 === 0 ? (
                <>
                  <FeatureContent>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </FeatureContent>
                  <FeatureImage src={feature.image} alt={feature.title} />
                </>
              ) : (
                <>
                  <FeatureImage src={feature.image} alt={feature.title} />
                  <FeatureContent>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </FeatureContent>
                </>
              )}
            </FeatureSection>
          ))}

          <Section>
            <SectionTitle>설계 의도 및 기술적 포인트</SectionTitle>
            <TechnicalList>
              {project.technicalPoints.map((point, index) => (
                <TechnicalItem key={index}>
                  <TechnicalTitle>• {point.title}:</TechnicalTitle>
                  <TechnicalDescription>
                    {point.description}
                  </TechnicalDescription>
                </TechnicalItem>
              ))}
            </TechnicalList>
          </Section>
        </motion.div>
      </Content>
    </Container>
  );
};

export default ProjectDetail;
