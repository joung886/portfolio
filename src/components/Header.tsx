import type { FC } from "react";
import styled from "@emotion/styled";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  cursor: pointer;

  span {
    color: #3182ce;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: #888;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #3182ce;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: white;
    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

const MenuBar = styled(motion.span)`
  width: 24px;
  height: 2px;
  background: white;
  display: block;
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(motion.a)`
  display: block;
  color: #888;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 0;
  text-align: center;

  &:hover {
    color: white;
  }
`;

const TopButton = styled(motion.button)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(0, 225, 255, 0.2) 0%,
    rgba(0, 225, 255, 0.1) 100%
  );
  border: 2px solid rgba(0, 225, 255, 0.3);
  color: #00e1ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 225, 255, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;

  svg {
    filter: drop-shadow(0 0 5px rgba(0, 225, 255, 0.5));
    transform: translateY(-1px);
  }

  &:hover {
    border-color: rgba(0, 225, 255, 0.5);
    background: linear-gradient(
      135deg,
      rgba(0, 225, 255, 0.3) 0%,
      rgba(0, 225, 255, 0.2) 100%
    );
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 225, 255, 0.2);

    svg {
      filter: drop-shadow(0 0 8px rgba(0, 225, 255, 0.7));
    }
  }
`;

const Header: FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTopButton, setShowTopButton] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.95)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 2px 10px rgba(0, 0, 0, 0.3)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "about", "skills", "projects", "contact"];
      let currentSection = sections[0];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 섹션이 화면의 상단 1/4 지점에 도달했을 때 활성화
          if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= 0) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 로드 시 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#intro", text: "홈" },
    { href: "#about", text: "소개" },
    { href: "#skills", text: "기술" },
    { href: "#projects", text: "프로젝트&경험" },
    { href: "#contact", text: "메세지 남기기기" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeaderContainer
        style={{ background: headerBackground, boxShadow: headerShadow }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <Logo
          onClick={() => (window.location.href = "/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Port<span>folio</span>
        </Logo>
        <Nav>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                const targetId = item.href.slice(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  e.preventDefault();
                  const headerOffset = 70; // 헤더 높이
                  const elementPosition =
                    targetElement.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                  setActiveSection(targetId);
                }
              }}
            >
              {item.text}
            </NavLink>
          ))}
        </Nav>
        <MobileMenuButton
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <MenuBar
            animate={{
              rotate: isOpen ? 45 : 0,
              translateY: isOpen ? 8 : 0,
            }}
          />
          <MenuBar
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
          />
          <MenuBar
            animate={{
              rotate: isOpen ? -45 : 0,
              translateY: isOpen ? -8 : 0,
            }}
          />
        </MobileMenuButton>
      </HeaderContainer>

      <AnimatePresence>
        {showTopButton && (
          <TopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            transition={{ duration: 0.3, ease: "backOut" }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={24} />
          </TopButton>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  const targetId = item.href.slice(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    e.preventDefault();
                    const headerOffset = 70;
                    const elementPosition =
                      targetElement.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                    setActiveSection(targetId);
                    setIsOpen(false);
                  }
                }}
              >
                {item.text}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
