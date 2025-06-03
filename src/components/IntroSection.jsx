import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SectionContainer, Container } from "../styles/CommonStyles";
import { FaGithub } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

const IntroContainer = styled(SectionContainer)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  gap: 2rem;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 968px) {
    text-align: center;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Track = styled(motion.div)`
  color: #4299e1;
  font-size: 1rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: #4299e1;
  margin-bottom: 2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #a0aec0;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

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

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #a0aec0;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4299e1;
    transform: translateY(-2px);
  }
`;

const ProfileImage = styled(motion.img)`
  width: 400px;
  height: 400px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 968px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const IntroSection = () => {
  return (
    <IntroContainer id="intro">
      <Content>
        <TextContent>
          <Track
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            METAVERSE EDUTECH DEVELOPER TRACK
          </Track>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            안녕하세요,
            <br />
            저는 정강철입니다
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            사용자 중심의 인터페이스를 구현하는
            <br />
            프론트엔드 개발자
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            실시간 드로잉 캔버스와 채팅 시스템을 구현했으며,
            <br />
            새로운 기술을 배우고 적용하는 것을 즐기는 개발자입니다.
          </Description>
          <ButtonContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              href="#projects"
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              프로젝트 보기
            </Button>
            <Button
              href="#contact"
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              연락하기
            </Button>
          </ButtonContainer>
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SocialLink
              href="https://github.com/joung886"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaGithub />
            </SocialLink>
          </SocialLinks>
        </TextContent>
        <ImageContent>
          <ProfileImage
            src={profileImage}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </ImageContent>
      </Content>
    </IntroContainer>
  );
};

export default IntroSection;
