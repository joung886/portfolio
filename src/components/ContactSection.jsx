import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer, Container } from "../styles/CommonStyles";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = "t3EkozzxWTd95gpW6";
emailjs.init(PUBLIC_KEY);

const ContactContainer = styled(SectionContainer)`
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

const Form = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const Label = styled.label`
  color: #e2e8f0;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(26, 32, 44, 0.5);
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(26, 32, 44, 0.5);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #a0aec0;
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4299e1;
    transform: translateY(-2px);
  }
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

const ContactSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        "rkdcjf3828@gmail.com",
        "template_4gtoh8t",
        form.current,
        PUBLIC_KEY
      );

      if (result.text === "OK") {
        setToastMessage("메시지가 성공적으로 전송되었습니다!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToastMessage("메시지 전송에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setToastMessage("메시지 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleEmailClick = () => {
    const email = "rkdcjf3828@gmail.com";
    navigator.clipboard.writeText(email);
    setToastMessage("이메일이 클립보드에 복사되었습니다!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <ContactContainer id="contact">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          메세지 남기기
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          
        </Description>
        <Form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FormGroup>
            <Label htmlFor="name">이름</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">이메일</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">메시지</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? "전송 중..." : "메시지 보내기"}
          </Button>
        </Form>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLink
            href="https://github.com/joung886"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="#"
            onClick={handleEmailClick}
            whileHover={{ y: -3 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </Content>
      <AnimatePresence>
        {showToast && (
          <Toast
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {toastMessage}
          </Toast>
        )}
      </AnimatePresence>
    </ContactContainer>
  );
};

export default ContactSection;
