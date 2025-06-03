import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);
  background: rgba(10, 10, 10, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  transform: translateY(${(props) => (props.show ? "0" : "-100%")});
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 2rem;
`;

const LogoContainer = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: absolute;
  left: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-1px);
  }
`;

const LogoImage = styled.img`
  height: 35px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 8px rgba(66, 153, 225, 0.3));

  &:hover {
    filter: drop-shadow(0 0 12px rgba(66, 153, 225, 0.5));
  }
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e2e8f0;
  background: linear-gradient(135deg, #e2e8f0 0%, #90cdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #e2e8f0;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  right: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2.5rem;
  margin-left: auto;
  margin-right: 4rem;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.95);
  padding: 2rem;
  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const NavLink = styled.a`
  color: #a0aec0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #4299e1;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
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
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      if (direction === "down" && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <HeaderContainer show={visible}>
        <Nav>
          <LogoContainer to="/" onClick={scrollToTop}>
            <LogoImage src="/images/logo.svg" alt="Portfolio Logo" />
          </LogoContainer>
          <MenuButton onClick={toggleMenu}>{isMenuOpen ? "×" : "☰"}</MenuButton>
          <NavLinks>
            <NavLink onClick={() => scrollToSection("intro")}>홈</NavLink>
            <NavLink onClick={() => scrollToSection("about")}>소개</NavLink>
            <NavLink onClick={() => scrollToSection("skills")}>
              주요 기술
            </NavLink>
            <NavLink onClick={() => scrollToSection("projects")}>
              경험 & 프로젝트
            </NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>
              메세지 남기기
            </NavLink>
          </NavLinks>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <NavLink onClick={() => scrollToSection("intro")}>홈</NavLink>
            <NavLink onClick={() => scrollToSection("about")}>소개</NavLink>
            <NavLink onClick={() => scrollToSection("skills")}>
              주요 기술
            </NavLink>
            <NavLink onClick={() => scrollToSection("projects")}>
              경험 & 프로젝트
            </NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>
              메세지 남기기
            </NavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export { Header };
export default Header;
