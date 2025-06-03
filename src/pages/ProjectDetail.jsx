import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SectionContainer, Container } from "../styles/CommonStyles";
import Footer from "../components/Footer";
import Header from "../components/Header";
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

const MainImageContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background: #0a0a0a;
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
  gap: 1rem;
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

const projects = {
  4: {
    title: "Ateiler - 아티스트 커뮤니티 플랫폼",
    description:
      "아티스트와 사용자의 커뮤니티가 가능하고, 커뮤니티 내에서 아티스트의 컨텐츠를 확인할 수 있는 플랫폼입니다. React와 Spring Boot를 활용한 풀스택 프로젝트로, 프론트엔드 파트를 담당했습니다.",
    image: "/portfolio/images/projects/atelier-thumbnail1.png",
    images: [
      "/portfolio/images/projects/atelier-thumbnail1.png",
      "/portfolio/images/projects/atelier-thumbnail2.png",
      "/portfolio/images/projects/atelier-thumbnail5.png",
      "/portfolio/images/projects/atelier-thumbnail6.png",
      "/portfolio/images/projects/atelier-thumbnail7.png",
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
      "전체 UI/UX 설계 및 마이페이지, 드로잉, 로그인 화면 개발",
      "Zustand를 활용한 전역 상태 관리 구현",
      "Styled-Components를 사용한 재사용 가능한 컴포넌트 설계",
      "React Router를 활용한 SPA 라우팅 구현",
      "Axios Interceptor를 활용한 API 요청/응답 처리",
      "Framer Motion을 활용한 부드러운 애니메이션 효과 구현",
      "반응형 디자인으로 모바일 대응",
      "사용자 인증 및 권한 관리 구현",
    ],
    challenges: [
      "컴포넌트 재사용성과 유지보수성을 고려한 구조 설계",
      "대용량 이미지 처리 및 최적화 (lazy loading, 이미지 압축)",
      "상태 관리 라이브러리 도입으로 복잡한 상태 관리 해결",
      "사용자 경험을 고려한 로딩 상태 및 에러 처리",
      "백엔드 API와의 효율적인 통신 구조 설계",
      "크로스 브라우징 이슈 해결",
      "성능 최적화 (메모이제이션, 코드 스플리팅)",
      "Git을 활용한 협업 워크플로우 구축",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id];
  const [selectedImage, setSelectedImage] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogoClick = () => {
    navigate("/");
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
              <MainImageContainer>
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
              <div>
                <SectionTitle>
                  <FaInfoCircle /> 프로젝트 개요
                </SectionTitle>
                <Description>{project.description}</Description>
              </div>

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

              <div>
                <SectionTitle>
                  <FaStar /> 주요 기능
                </SectionTitle>
                <FeatureList>
                  {project.features.map((feature) => (
                    <FeatureItem key={feature}>
                      <FaCheckCircle size={16} />
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </div>

              <div>
                <SectionTitle>
                  <FaLightbulb /> 기술적 도전
                </SectionTitle>
                <FeatureList>
                  {project.challenges.map((challenge) => (
                    <FeatureItem key={challenge}>
                      <FaExclamationCircle size={16} />
                      {challenge}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </div>

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
    </Wrapper>
  );
};

export default ProjectDetail;
