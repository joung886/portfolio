import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styled from "@emotion/styled";
import {
  fadeInUp,
  staggerContainer,
  BackgroundGradient,
  GradientSectionTitle,
} from "../styles/CommonStyles.tsx";
import { FaReact, FaJava, FaGitAlt, FaGithub, FaJenkins } from "react-icons/fa";
import {
  SiSpring,
  SiMysql,
  SiJavascript,
  SiSpringboot,
  SiAmazonec2,
  SiSwagger,
  SiIntellijidea,
  SiDbeaver,
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { useState } from "react";

const SectionContainer = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 100px 0;
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #e2e8f0;
  text-align: center;
  margin-bottom: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const CategoryTitle = styled.h3`
  color: #00a8ff;
  font-size: 1.4rem;
  margin: 2rem 0 1.5rem;
  font-weight: 600;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(26, 32, 44, 0.8);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #00a8ff;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillName = styled.span`
  color: #e2e8f0;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
`;

const SkillLevel = styled(motion.span)`
  position: absolute;
  top: -25px;
  right: 0;
  color: #63b3ed;
  font-size: 0.9rem;
  font-weight: 600;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled(motion.div)<{ width: number }>`
  height: 100%;
  background: linear-gradient(90deg, #3182ce, #63b3ed);
  border-radius: 3px;
  position: relative;
`;

interface Skill {
  name: string;
  icon: any;
}

type SkillCategories = {
  [key: string]: Skill[];
};

type CategoryEntry = [string, Skill[]];

const FilterButton = styled.button<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  background: ${(props) =>
    props.isActive ? "rgba(49, 130, 206, 0.8)" : "rgba(26, 32, 44, 0.8)"};
  color: ${(props) => (props.isActive ? "#ffffff" : "#a0aec0")};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: rgba(49, 130, 206, 0.6);
    color: #ffffff;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const skillCategories: SkillCategories = {
    "FRONT-END": [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
    ],
    "BACK-END": [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: SiSpring },
      { name: "MySQL", icon: SiMysql },
    ],
    "VERSION CONTROL": [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
    "DEVOPS & CLOUD": [
      { name: "Jenkins", icon: FaJenkins },
      { name: "AWS EC2", icon: SiAmazonec2 },
    ],
    "IDE & TOOLS": [
      { name: "IntelliJ", icon: SiIntellijidea },
      { name: "VS Code", icon: TbBrandVscode },
      { name: "DBeaver", icon: SiDbeaver },
    ],
  };

  const allCategories = ["ALL", ...Object.keys(skillCategories)];

  const filteredCategories: CategoryEntry[] =
    activeCategory === "ALL"
      ? Object.entries(skillCategories)
      : skillCategories[activeCategory]
      ? [[activeCategory, skillCategories[activeCategory]]]
      : [];

  return (
    <SectionContainer id="skills">
      <BackgroundGradient />
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <GradientSectionTitle>기술</GradientSectionTitle>

          <FilterContainer>
            {allCategories.map((category) => (
              <FilterButton
                key={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterContainer>

          <SkillsContainer>
            {filteredCategories.map(([category, skills]) => (
              <div key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <CategoryGrid>
                  {skills.map((skill: Skill, index: number) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeInUp}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <SkillCard>
                        <IconWrapper>
                          <skill.icon />
                        </IconWrapper>
                        <SkillName>{skill.name}</SkillName>
                      </SkillCard>
                    </motion.div>
                  ))}
                </CategoryGrid>
              </div>
            ))}
          </SkillsContainer>
        </motion.div>
      </Container>
    </SectionContainer>
  );
};

export default SkillsSection;
