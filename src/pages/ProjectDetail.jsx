import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SectionContainer, Container } from "../styles/CommonStyles";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import TopButton from "../components/TopButton";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaCode,
  FaStar,
  FaCheckCircle,
  FaLightbulb,
  FaExclamationCircle,
  FaCircle,
} from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a202c 100%);
  position: relative;
  overflow: hidden;
`;

const ProjectDetailContainer = styled.div`
  flex: 1;
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px);
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: #a0aec0;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4299e1;
  }

  &::before {
    content: "←";
    font-size: 1.2rem;
  }
`;

const ProjectGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProjectImages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ImageModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  cursor: zoom-out;
`;

const ModalImage = styled(motion.img)`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    color: #63b3ed;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  z-index: 1001;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 179, 237, 0.5);
  }

  ${(props) => (props.direction === "prev" ? "left: 2rem;" : "right: 2rem;")}
`;

const MainImageContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background: #0a0a0a;
  cursor: zoom-in;
`;

const MainImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`;

const ThumbnailWrapper = styled.div`
  width: 200px;
  height: 120px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #0a0a0a;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isSelected ? 1 : 0.6)};
  border: 2px solid ${(props) => (props.isSelected ? "#4299e1" : "transparent")};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: rgba(26, 32, 44, 0.4);
  border-radius: 15px;
  border: 1px solid rgba(66, 153, 225, 0.1);
`;

const ProjectOverview = styled.div`
  width: 100%;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureSection = styled.div`
  background: rgba(26, 32, 44, 0.4);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(66, 153, 225, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #63b3ed;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  color: #e2e8f0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  white-space: pre-line;
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(66, 153, 225, 0.1);
  border-radius: 8px;
  color: #63b3ed;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(66, 153, 225, 0.2);
    transform: translateY(-2px);
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;

const FeatureItem = styled.li`
  color: #e2e8f0;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;

  svg {
    color: #63b3ed;
    margin-top: 0.25rem;
  }

  &[data-is-category="true"] {
    color: #63b3ed;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 1rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  &[data-is-subitem="true"] {
    margin-left: 1.5rem;
    color: #cbd5e0;

    &:before {
      content: "•";
      color: #63b3ed;
      margin-right: 0.5rem;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #e2e8f0;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const projectData = {
  4: {
    title: "Ateiler - 아티스트 커뮤니티 플랫폼",
    description:
      "아티스트와 사용자의 커뮤니티가 가능하고, 커뮤니티 내에서 아티스트의 컨텐츠를 확인할 수 있는 플랫폼",
    images: [
      "/images/projects/atelier-thumbnail1.png",
      "/images/projects/atelier-thumbnail2.png",
      "/images/projects/atelier-thumbnail3.png",
      "/images/projects/atelier-thumbnail4.png",
      "/images/projects/atelier-thumbnail5.png",
      "/images/projects/atelier-thumbnail6.png",
      "/images/projects/atelier-thumbnail7.png",
      "/images/projects/atelier-thumbnail8.png",
      "/images/projects/atelier-thumbnail9.png",
      "/images/projects/atelier-thumbnail10.png",
    ],
    techStack: [
      "React",
      "Zustand",
      "Styled-Components",
      "React Router",
      "Axios",
      "Framer Motion",
    ],
    github: "https://github.com/joung886/atelier",
    features: [
      "UI/UX 설계 및 구현",
      "• Figma를 활용한 전체 디자인 시스템 설계",
      "• 직관적이고 모던한 사용자 인터페이스 구현",
      "• 반응형 레이아웃으로 모든 디바이스 대응",
      "상태 관리 시스템",
      "• Zustand를 활용한 효율적인 전역 상태 관리",
      "• 사용자 인증 정보 및 앱 설정 상태 관리",
      "• 실시간 데이터 동기화 구현",
      "컴포넌트 아키텍처",
      "• Styled-Components를 활용한 모듈화된 컴포넌트 설계",
      "• 재사용 가능한 공통 컴포넌트 라이브러리 구축",
      "• 일관된 디자인 시스템 적용",
      "라우팅 및 네비게이션",
      "• React Router를 활용한 SPA 구조 설계",
      "• 동적 라우팅 및 페이지 전환 효과 구현",
      "• 사용자 권한별 접근 제어 시스템 구축",
    ],
    challenges: [
      "성능 최적화",
      "• Code Splitting을 통한 초기 로딩 시간 단축",
      "• React.memo와 useMemo를 활용한 불필요한 리렌더링 방지",
      "• 이미지 레이지 로딩 구현으로 페이지 로드 최적화",
      "데이터 관리",
      "• Axios Interceptor를 활용한 효율적인 API 통신 구조",
      "• 요청/응답 에러 핸들링 및 재시도 로직 구현",
      "• JWT 기반 인증 시스템 구축",
      "사용자 경험",
      "• Framer Motion을 활용한 부드러운 애니메이션 효과",
      "• 스켈레톤 UI를 통한 로딩 상태 처리",
      "• 사용자 피드백을 위한 토스트 메시지 시스템",
      "협업 및 유지보수",
      "• Git Flow 전략을 통한 체계적인 버전 관리",
      "• ESLint/Prettier를 통한 일관된 코드 스타일 유지",
      "• 컴포넌트 문서화를 통한 유지보수성 향상",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  if (!project) {
    return (
      <Wrapper>
        <Header onLogoClick={handleLogoClick} />
        <ProjectDetailContainer>
          <Content>
            <Title>프로젝트를 찾을 수 없습니다</Title>
            <BackButton to="/">돌아가기</BackButton>
          </Content>
        </ProjectDetailContainer>
        <Footer />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header onLogoClick={handleLogoClick} />
      <ProjectDetailContainer>
        <Content>
          <BackButton to="/">돌아가기</BackButton>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </Title>

          <ProjectGrid>
            <ProjectImages>
              <MainImageContainer onClick={handleImageClick}>
                <MainImage
                  src={project.images[selectedImage]}
                  alt={`${project.title} main view`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </MainImageContainer>
              <ThumbnailContainer>
                {project.images.map((image, index) => (
                  <ThumbnailWrapper key={index}>
                    <Thumbnail
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      isSelected={selectedImage === index}
                      onClick={() => setSelectedImage(index)}
                    />
                  </ThumbnailWrapper>
                ))}
              </ThumbnailContainer>
            </ProjectImages>

            <ProjectInfo>
              <ProjectOverview>
                <SectionTitle>
                  <FaInfoCircle /> 프로젝트 개요
                </SectionTitle>
                <Description>{project.description}</Description>
              </ProjectOverview>

              <div>
                <SectionTitle>
                  <FaCode /> 사용 기술
                </SectionTitle>
                <TechStackGrid>
                  {project.techStack.map((tech) => (
                    <TechItem key={tech}>
                      <FaCircle size={8} /> {tech}
                    </TechItem>
                  ))}
                </TechStackGrid>
              </div>

              <FeaturesGrid>
                <FeatureSection>
                  <SectionTitle>
                    <FaStar /> 주요 기능
                  </SectionTitle>
                  <FeatureList>
                    {project.features.map((feature) => (
                      <FeatureItem
                        key={feature}
                        data-is-category={!feature.startsWith("•")}
                        data-is-subitem={feature.startsWith("•")}
                      >
                        {!feature.startsWith("•") && (
                          <FaCheckCircle size={16} />
                        )}
                        {feature.replace("• ", "")}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </FeatureSection>

                <FeatureSection>
                  <SectionTitle>
                    <FaLightbulb /> 기술적 도전
                  </SectionTitle>
                  <FeatureList>
                    {project.challenges.map((challenge) => (
                      <FeatureItem
                        key={challenge}
                        data-is-category={!challenge.startsWith("•")}
                        data-is-subitem={challenge.startsWith("•")}
                      >
                        {!challenge.startsWith("•") && (
                          <FaExclamationCircle size={16} />
                        )}
                        {challenge.replace("• ", "")}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </FeatureSection>
              </FeaturesGrid>

              <Links>
                <LinkButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </LinkButton>
              </Links>
            </ProjectInfo>
          </ProjectGrid>
        </Content>
      </ProjectDetailContainer>
      <Footer />
      <TopButton />

      <AnimatePresence>
        {isModalOpen && (
          <ImageModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            <NavigationButton direction="prev" onClick={handlePrevImage}>
              ‹
            </NavigationButton>
            <ModalImage
              src={project.images[selectedImage]}
              alt={`${project.title} enlarged view`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <NavigationButton direction="next" onClick={handleNextImage}>
              ›
            </NavigationButton>
          </ImageModal>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProjectDetail;
