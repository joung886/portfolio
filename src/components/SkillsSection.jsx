import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SectionContainer, Container } from "../styles/CommonStyles";
import {
  SiReact,
  SiJavascript,
  SiSpring,
  SiMysql,
  SiGit,
  SiJenkins,
  SiNodedotjs,
} from "react-icons/si";

const SkillsContainer = styled(SectionContainer)`
  background: linear-gradient(180deg, #0a0a0a 0%, #1a202c 100%);
  display: flex;
  align-items: center;
  min-height: 80vh;
  padding: 2rem 0;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: #a0aec0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const SkillCard = styled(motion.div)`
  background: rgba(26, 32, 44, 0.5);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 3rem;
    color: #4299e1;
  }

  h3 {
    font-size: 1.2rem;
    color: #e2e8f0;
  }

  p {
    color: #a0aec0;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const skills = [
  {
    icon: <SiReact />,
    name: "React",
    description:
      "Zustand, Styled-Components, React Router, Axios를 활용한 프론트엔드 개발",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    description: "ES6+, WebSocket, Canvas API 활용한 인터랙티브 기능 구현",
  },
  {
    icon: <SiSpring />,
    name: "Spring Boot",
    description: "Spring Security, JPA(Hibernate)를 활용한 백엔드 개발",
  },
  {
    icon: <SiNodedotjs />,
    name: "Node.js",
    description: "Express 프레임워크를 활용한 서버 개발(연동)",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    description: "데이터베이스 설계 및 쿼리 최적화",
  },
  {
    icon: <SiJenkins />,
    name: "Jenkins",
    description: "GitHub Actions, AWS EC2 연동을 통한 CI/CD 파이프라인 구축",
  },
  {
    icon: <SiGit />,
    name: "Git",
    description: "GitHub, VS Code를 활용한 협업 및 프로젝트 관리",
  },
];

const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        주요 기술
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          웹 개발에 필요한 다양한 기술들을 학습하고 실무에 적용해왔습니다.
          프론트엔드와 백엔드 모두에 관심을 가지고 학습하고 있습니다.
        </Description>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {skill.icon}
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Content>
    </SkillsContainer>
  );
};

export default SkillsSection;
