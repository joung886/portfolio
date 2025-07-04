import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SectionContainer, Container } from "../styles/CommonStyles";
import { FaGithub, FaChevronDown } from "react-icons/fa";
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
  padding: 0 2rem;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 2rem;
    margin-top: 4rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 968px) {
    text-align: center;
    width: 100%;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    margin-bottom: 2rem;
  }
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

  @media (max-width: 968px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
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

  @media (max-width: 968px) {
    font-size: 1rem;
    margin: 0 auto 2rem;
    br {
      display: none;
    }
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
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
    width: 250px;
    height: 250px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const ScrollDownButton = styled(motion.button)`
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(66, 153, 225, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  z-index: 10;

  span {
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  &:hover {
    color: rgba(66, 153, 225, 1);
  }
`;

const IntroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <ScrollDownButton
        onClick={scrollToAbout}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>스크롤 내리기</span>
        <FaChevronDown />
      </ScrollDownButton>
    </IntroContainer>
  );
};

export default IntroSection;
