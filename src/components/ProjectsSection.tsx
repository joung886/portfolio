import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  BackgroundGradient,
  GradientSectionTitle,
} from "../styles/CommonStyles";
import styled from "@emotion/styled";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { FaCode, FaGlobe, FaSpinner, FaRocket } from "react-icons/fa";
import { SiJavascript, SiReact, SiSpring, SiMysql } from "react-icons/si";

const Button = styled(motion.a)`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;

  &.primary {
    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
    color: white;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
    }
  }

  &.secondary {
    background: rgba(45, 55, 72, 0.5);
    color: white;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    &:hover {
      transform: translateY(-2px);
      background: rgba(45, 55, 72, 0.7);
    }
  }
`;

const SectionContainer = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 100px 0;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: #a0aec0;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(26, 32, 44, 0.8);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(49, 130, 206, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #4299e1;
  margin-bottom: 1rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #a0aec0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  min-height: 40px;
`;

const ProjectStatus = styled.div<{ status: "progress" | "upcoming" | "alpha" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  ${({ status }) => {
    switch (status) {
      case "progress":
        return `
          background: rgba(49, 130, 206, 0.1);
          color: #4299e1;
        `;
      case "upcoming":
        return `
          background: rgba(154, 230, 180, 0.1);
          color: #48bb78;
        `;
      case "alpha":
        return `
          background: rgba(236, 201, 75, 0.1);
          color: #ecc94b;
        `;
    }
  }}
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  scroll-behavior: smooth;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`;

const ComingSoonButton = styled(motion.div)`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00e1ff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.2rem;
`;

const ComingSoonText = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00e1ff;
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

interface Project {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  status: "progress" | "upcoming" | "alpha";
  statusText: string;
}

const projects: Project[] = [
  {
    id: "secret-project-1",
    icon: <FaCode />,
    title: "Atelier - 아티스트 커뮤니티 플랫폼",
    description: "상세 페이지 준비중입니다 (Coming Soon)",
    status: "upcoming",
    statusText: "Coming Soon",
  },
  {
    id: "secret-project-2",
    icon: <FaGlobe />,
    title: "Project 개발 예정",
    description: "새로운 웹 서비스 개발 예정 (자세한 내용은 바공개)",
    status: "progress",
    statusText: "개발 진행 중",
  },
  {
    id: "secret-project-3",
    icon: <FaRocket />,
    title: "Project 개발 예정정",
    description: "혁신적인 서비스 개발 예정 (자세한 내용은 비공개)",
    status: "alpha",
    statusText: "알파 테스트 중",
  },
  {
    id: "secret-project-4",
    icon: <FaSpinner />,
    title: "Project 개발 예정정",
    description: "차세대 서비스 개발 예정 (자세한 내용은 비공개)",
    status: "upcoming",
    statusText: "2025 출시 예정",
  },
];

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects">
      <BackgroundGradient />
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Title>경험 & 프로젝트</Title>
          <Subtitle>저의 전문 경력과 주요 프로젝트들을 소개합니다</Subtitle>

          <ProjectGrid>
            {projects.map((project) =>
              project.id === "secret-project-1" ? (
                <ProjectLink
                  to={`/project/${project.id}`}
                  key={project.id}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <ProjectCard
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ProjectContent>
                      <ProjectIcon>{project.icon}</ProjectIcon>
                      <ProjectStatus status={project.status}>
                        {project.statusText}
                      </ProjectStatus>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>
                        {project.description}
                      </ProjectDescription>
                      <ComingSoonText>
                        Coming Soon <ArrowIcon>→</ArrowIcon>
                      </ComingSoonText>
                    </ProjectContent>
                  </ProjectCard>
                </ProjectLink>
              ) : (
                <ProjectCard
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ProjectContent>
                    <ProjectIcon>{project.icon}</ProjectIcon>
                    <ProjectStatus status={project.status}>
                      {project.statusText}
                    </ProjectStatus>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <ComingSoonButton>
                      Coming Soon <ArrowIcon>→</ArrowIcon>
                    </ComingSoonButton>
                  </ProjectContent>
                </ProjectCard>
              )
            )}
          </ProjectGrid>
        </motion.div>
      </Container>
    </SectionContainer>
  );
};

export default ProjectsSection;
