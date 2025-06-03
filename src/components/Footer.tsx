import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";

const FooterContainer = styled.footer`
  width: 100%;
  background: rgba(26, 32, 44, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #e2e8f0;
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: #00e1ff;
  }
`;

const NavSection = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const NavTitle = styled.h3`
  color: #e2e8f0;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const NavLink = styled(motion.a)`
  color: #a0aec0;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #e2e8f0;
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const Copyright = styled.p`
  color: #718096;
  font-size: 0.9rem;
`;

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

const Footer = () => {
  const [showToast, setShowToast] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "rkdcjf3828@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <LogoSection>
            <Logo>정강철</Logo>
            <SocialLinks>
              <SocialLink
                href="#"
                onClick={handleEmailClick}
                whileHover={{ y: -3 }}
              >
                <FaGoogle />
              </SocialLink>
              <SocialLink
                href="https://github.com/joung886"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </LogoSection>
          <NavSection>
            <NavColumn>
              <NavTitle>홈</NavTitle>
              <NavLink href="#intro" whileHover={{ x: 5 }}>
                소개
              </NavLink>
              <NavLink href="#skills" whileHover={{ x: 5 }}>
                기술
              </NavLink>
              <NavLink href="#projects" whileHover={{ x: 5 }}>
                프로젝트&경험
              </NavLink>
            </NavColumn>
            <NavColumn>
              <NavTitle>연락처</NavTitle>
              <NavLink href="#contact" whileHover={{ x: 5 }}>
                메세지
              </NavLink>
              <NavLink
                href="#"
                onClick={handleEmailClick}
                whileHover={{ x: 5 }}
              >
                이메일
              </NavLink>
              <NavLink
                href="https://github.com/joung886"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
              >
                깃허브
              </NavLink>
            </NavColumn>
          </NavSection>
        </FooterTop>
        <FooterBottom>
          <Copyright>© {currentYear} 모든 권리 보유</Copyright>
        </FooterBottom>
      </FooterContent>
      {showToast && (
        <Toast
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          이메일이 복사되었습니다!
        </Toast>
      )}
    </FooterContainer>
  );
};

export default Footer;
