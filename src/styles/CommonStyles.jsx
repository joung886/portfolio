import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #3182ce;
  }
`;

export const GradientSectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Card = styled(motion.div)`
  background: rgba(45, 55, 72, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &.primary {
    background: #3182ce;
    color: white;
    &:hover {
      background: #2c5282;
    }
  }

  &.secondary {
    background: #2d3748;
    color: white;
    &:hover {
      background: #4a5568;
    }
  }
`;

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top, #0f172a 0%, #020617 100%);
  z-index: 0;
`;

export const CommonSection = styled.section`
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

export const CommonContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
`;

export const CommonTitle = styled.h2`
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

export const CommonSubtitle = styled.h3`
  font-size: 1.2rem;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const CommonText = styled.p`
  color: #e2e8f0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const CommonButton = styled.button`
  background: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2c5282;
  }
`;
