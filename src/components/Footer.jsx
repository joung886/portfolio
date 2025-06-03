import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #0a0a0a 0%, #1a202c 100%);
  padding: 3rem 0;
  color: #a0aec0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #a0aec0;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4299e1;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #4299e1;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <FooterContainer>
      <Content>
        <FooterNav>
          <FooterLink onClick={() => scrollToSection("intro")}>홈</FooterLink>
          <FooterLink onClick={() => scrollToSection("about")}>소개</FooterLink>
          <FooterLink onClick={() => scrollToSection("skills")}>
            주요 기술
          </FooterLink>
          <FooterLink onClick={() => scrollToSection("projects")}>
            프로젝트
          </FooterLink>
          <FooterLink onClick={() => scrollToSection("contact")}>
            메세지 남기기
          </FooterLink>
        </FooterNav>
        <SocialLinks>
          <SocialLink
            href="https://github.com/joung886"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="mailto:joung886@gmail.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        <Copyright>© {currentYear} 정강철. All rights reserved.</Copyright>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
