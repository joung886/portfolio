import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionContainer, Container } from "../styles/CommonStyles";
import { FaCode, FaGlobe, FaRobot } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const ProjectsContainer = styled(SectionContainer)`
  background: linear-gradient(180deg, #1a202c 0%, #0a0a0a 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

const Content = styled(Container)`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 2rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.75rem;
`;

const Subtitle = styled.p`
  color: #a0aec0;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(25, 32, 44, 0.5);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectIcon = styled.div`
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #4299e1;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #a0aec0;
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const ProjectLink = styled(Link)`
  color: #4299e1;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-top: auto;

  &:hover {
    color: #63b3ed;
  }

  &::after {
    content: "→";
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: translateX(5px);
  }
`;

const ProjectsSection = () => {
  const projects = [
    {
      icon: <FaRobot />,
      title: "Ateiler - 아티스트 커뮤니티 플랫폼",
      description:
        "아티스트와 사용자의 커뮤니티가 가능하고, 커뮤니티 내에서 아티스트의 컨텐츠를 확인할 수 있는 플랫폼",
      link: "/project/4",
      status: "자세히 보기",
    },
    {
      icon: <FaGlobe />,
      title: "Project 개발 진행 중",
      description: "블로그 자동화 AI 서비스",
      link: "#",
      status: "개발 진행 중 ",
    },
    {
      icon: <FaCode />,
      title: "Project 개발 기획중",
      description: "",
      link: "#",
      status: "개발 기획 중 ",
    },
    {
      icon: <BsGraphUp />,
      title: "Project 개발 기획중",
      description: "",
      link: "#",
      status: "개발 기획 중 ",
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <Content>
        <Title>경험 & 프로젝트</Title>
        <Subtitle>저의 진행 경험과 주요 프로젝트들을 소개합니다</Subtitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectIcon>{project.icon}</ProjectIcon>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink to={project.link}>{project.status}</ProjectLink>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Content>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
