import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.8;
`;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 초기 크기 설정
    resizeCanvas();

    // 파티클 초기화
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.05), 100); // 반응형 파티클 수

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1 + 1,
        });
      }

      particlesRef.current = particles;
    };

    // 파티클 그리기
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(66, 153, 225, 0.5)";
      ctx.strokeStyle = "rgba(66, 153, 225, 0.15)";

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // 파티클 업데이트 및 그리기
      particles.forEach((particle, i) => {
        // 파티클 이동
        particle.x += particle.vx;
        particle.y += particle.vy;

        // 화면 경계 처리
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // 파티클 그리기
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // 마우스와의 연결선 그리기
        const mouseDistance = Math.hypot(
          mouse.x - particle.x,
          mouse.y - particle.y
        );
        if (mouseDistance < 120) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // 다른 파티클과의 연결선 그리기
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.hypot(p2.x - particle.x, p2.y - particle.y);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
    };

    // 애니메이션 프레임
    let animationId: number;
    const animate = () => {
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    // 마우스 이벤트
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    // 초기화 및 시작
    initParticles();
    animate();

    // 클린업
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default Background3D;
