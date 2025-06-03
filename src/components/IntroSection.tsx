import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  BackgroundGradient,
  CommonSection,
  CommonContainer,
  SectionContainer,
  Container,
} from "../styles/CommonStyles.tsx";
import { BsChevronDown } from "react-icons/bs";
import Background3D from "./Background3D.tsx";
import { useState } from "react";

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #e2e8f0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #a0aec0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 400px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(45, 55, 72, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(66, 153, 225, 0.1) 60deg,
      transparent 120deg
    );
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10px;
  left: 10px;
  border-radius: 20px;
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  opacity: 0.1;
  z-index: 0;
`;

const ScrollIndicator = styled(motion.button)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #4299e1;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const ScrollText = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #4299e1;
  opacity: 0.8;
`;

const ScrollLine = styled(motion.div)`
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, #4299e1 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: 0 0;
  animation: scrollAnimation 2s infinite;

  @keyframes scrollAnimation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 -200%;
    }
  }
`;

const ChevronContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Description = styled(motion.div)`
  text-align: left;

  h3 {
    font-size: 2rem;
    color: #90cdf4;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.3rem;
    color: #e2e8f0;
    line-height: 1.8;
  }

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const SmallText = styled(motion.div)`
  position: relative;
  color: #3182ce;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  padding-left: 3rem;
  font-weight: 600;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 2rem;
    height: 2px;
    background-color: #3182ce;
    transform: translateY(-50%);
    transition: width 0.3s ease;
  }

  &:hover:before {
    width: 2.5rem;
  }
`;

const GradientText = styled(motion.span)`
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const StyledButton = styled.button`
  padding: 0.875rem 1.5rem;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: none;
  background: none;

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  &.primary {
    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
    color: white;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
    }
    &:active {
      transform: translateY(0);
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #3182ce 0%, #4299e1 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &:hover:before {
      opacity: 1;
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
      border-color: rgba(255, 255, 255, 0.2);
    }
    &:active {
      transform: translateY(0);
    }
  }

  &.dark {
    background: #1a202c;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    &:hover {
      transform: translateY(-2px);
      background: #2d3748;
      border-color: rgba(255, 255, 255, 0.2);
    }
    &:active {
      transform: translateY(0);
    }
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const StyledLink = StyledButton.withComponent("a");

const Button = motion.create(StyledButton);
const LinkButton = motion.create(StyledLink);

const Toast = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(45, 55, 72, 0.9);
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IntroSection = () => {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const email = "rkdcjf3828@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  const handleScrollClick = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scrollAnimation = {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const arrowAnimation = {
    y: [0, 5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    },
  };

  const chevronVariants = {
    animate: {
      y: [0, 5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <SectionContainer id="intro">
      <Background3D />
      <Container>
        <ContentWrapper>
          <TextContent>
            <SmallText
              className="small-text"
              variants={itemVariants}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Metaverse Edutech Developer Track
            </SmallText>
            <Title className="title" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                안녕하세요,
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                저는{" "}
                <GradientText
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  정강철
                </GradientText>
                입니다
              </motion.div>
            </Title>
            <Description
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                사용자 중심의 인터페이스를 구현하는
                <br />
                <GradientText
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  프론트엔드 개발자
                </GradientText>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                실시간 드로잉 캔버스와 채팅 시스템을 구현하며,
                <br />
                새로운 기술을 배우고 적용하는 것을 즐기는 개발자입니다.
              </motion.p>
            </Description>
            <ButtonGroup variants={itemVariants}>
              <LinkButton
                className="secondary"
                href="https://github.com/joung886"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  whileHover={{ rotate: 5 }}
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </motion.svg>
                <span>GitHub</span>
              </LinkButton>
              <Button
                className="dark"
                onClick={handleEmailClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  whileHover={{ rotate: 5 }}
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                </motion.svg>
                <span>이메일 복사</span>
              </Button>
            </ButtonGroup>
          </TextContent>
          <ImageContainer>
            <BackgroundShape
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <ImageWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src="/images/profile.jpg" alt="Profile" />
            </ImageWrapper>
          </ImageContainer>
        </ContentWrapper>
      </Container>
      <ScrollIndicator
        onClick={handleScrollClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ y: 5 }}
      >
        <ScrollText>Scroll</ScrollText>
        <ChevronContainer variants={chevronVariants} animate="animate">
          <BsChevronDown size={20} />
          <BsChevronDown size={20} style={{ opacity: 0.5 }} />
          <BsChevronDown size={20} style={{ opacity: 0.2 }} />
        </ChevronContainer>
      </ScrollIndicator>
      <AnimatePresence>
        {showToast && (
          <Toast
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            이메일 주소가 클립보드에 복사되었습니다!
          </Toast>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

export default IntroSection;
