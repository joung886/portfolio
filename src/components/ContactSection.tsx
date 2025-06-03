import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  BackgroundGradient,
  CommonSection,
  CommonContainer,
  GradientSectionTitle,
} from "../styles/CommonStyles.tsx";
import styled from "@emotion/styled";
import { FaEnvelope, FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: #e2e8f0;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageSection = styled.div`
  flex: 0.8;
  max-width: 350px;

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    transition: all 0.5s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const FormSection = styled.div`
  flex: 1.2;
  max-width: 600px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(26, 32, 44, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3182ce;
  }

  &::placeholder {
    color: #718096;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(26, 32, 44, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3182ce;
  }

  &::placeholder {
    color: #718096;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #3182ce, #2c5282);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #e2e8f0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(26, 32, 44, 0.8);

  &:hover {
    color: #3182ce;
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

const SuccessToast = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(34, 197, 94, 0.9); // green color
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ErrorToast = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(239, 68, 68, 0.9); // red color
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LoadingSpinner = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: 2px solid transparent;
  border-radius: 50%;
`;

const ContactSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "rkdcjf3828@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "rkdcjf3828@gmail.com",
        "template_4gtoh8t",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "정강철",
          to_email: "rkdcjf3828@gmail.com",
        },
        "t3EkozzxWTd95gpW6"
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <CommonSection id="contact">
      <BackgroundGradient />
      <CommonContainer>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <GradientSectionTitle>메세지 남기기</GradientSectionTitle>
          <ContactWrapper>
            <ImageSection>
              <motion.img
                src="/images/profile.jpg"
                alt="Profile"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </ImageSection>
            <FormSection>
              <ContactForm onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="이름"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={isLoading}
                />
                <Input
                  type="email"
                  placeholder="이메일"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={isLoading}
                />
                <TextArea
                  placeholder="메시지"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  disabled={isLoading}
                />
                <SubmitButton
                  type="submit"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoadingSpinner
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ) : (
                    "메시지 보내기"
                  )}
                </SubmitButton>
              </ContactForm>
              <SocialLinks>
                <SocialLink
                  href="#"
                  onClick={handleEmailClick}
                  whileHover={{ y: -5 }}
                >
                  <FaGoogle />
                </SocialLink>
                <SocialLink
                  href="https://github.com/joung886"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <FaGithub />
                </SocialLink>
              </SocialLinks>
            </FormSection>
          </ContactWrapper>
        </motion.div>
      </CommonContainer>
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
        {submitStatus === "success" && (
          <SuccessToast
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            메시지가 성공적으로 전송되었습니다!
          </SuccessToast>
        )}
        {submitStatus === "error" && (
          <ErrorToast
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            메시지 전송에 실패했습니다. 다시 시도해주세요.
          </ErrorToast>
        )}
      </AnimatePresence>
    </CommonSection>
  );
};

export default ContactSection;
