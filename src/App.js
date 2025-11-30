import React, { useState } from 'react';
import './App.css';

const resumeData = {
  profile: {
    name: "정인",
    role: "Front-end Developer",
    email: "wjddls2684@gmail.com",
    phone: "010-65490-0290",
    address: "Gwangmyeong-si, Gyeonggi-do",
    github: "https://github.com/JI-1231",
    school_uni: "인하공업전문대학 컴퓨터 정보 공학과",
    school_uni_period: "2021년 3월 ~ 2026년 2월 졸업 예정",
    school_high: "운산 고등학교",
    school_high_period: "2021년 졸업",
    tagline_main: "저는 새로운 기술 트렌드를 빠르게 습득하고 적용하며, 창의적인 문제 해결 능력을 발휘합니다. IT 분야의 혁신을 이끄는 핵심 인재로 성장하겠습니다",
    tagline_sub: "기술을 넘어, 사람과 연결되는 IT의 가치를 실현하고 싶습니다.",
  },
  introduction: `저는 사용자 중심의 경험을 구현하는 프론트엔드 개발자를 지향하며, 컴퓨터공학을 전공하고 있습니다. 
꾸준한 학업과 실무 중심 프로젝트를 통해 사용자에게 직관적이고 편리한 웹 경험을 제공하는 데 집중하며 성장해왔습니다.
학부 과정 중 진행한 '항공권 예약 및 여행지 추천 웹사이트' 프로젝트는 저에게 중요한 전환점이 되었습니다. 사용자 테스트 결과, "직관적"이고 "디자인이 깔끔하다"는 긍정적인 피드백을 얻을 수 있었습니다.
저는 앞으로도 기술력과 디자인 감각을 융합하여 사용자의 삶을 더 편리하게 만드는 서비스를 개발하고 싶습니다.
`,
  skills: [
    { name: "React.js", level: "상" },
    { name: "JavaScript", level: "상" },
    { name: "JSP", level: "상" },
    { name: "Spring Boot", level: "중" },
    { name: "Java", level: "중" },
    { name: "Python", level: "중" },
    { name: "Oracle", level: "중" },
    { name: "Linux", level: "하" },
  ],
  projects: [
    {
      id: 1,
      title: "여행 웹사이트 개발 프로젝트",
      period: "2024 하반기",
      summary: "고객에게 여행지를 추천해주는 사이트 개발",
      details: "사용자의 여행 관련 질문을 분석하여 적절한 여행지를 추천하고, 항공권 예약까지 지원하는 기능을 구현했습니다. 이 프로젝트에서 프론트엔드 개발과 웹 디자인을 주도하며 반응형 UI 설계에 주력했습니다. 주요 기술 스택은 HTML, CSS, JavaScript, React, Spring boot입니다.",
      previewImg: "/project_travel_preview.jpg", 
      detailImg: "/project_travel_detail.jpg" 
    },
    {
      id: 2,
      title: "블럭 키우기 게임 프로젝트",
      period: "2025 상반기",
      summary: "Unity 기반 2D 키우기 게임 개발",
      details: "Unity 엔진을 기반으로 2D 키우기 게임을 개발 중입니다. C#을 이용한 게임 로직 구현 및 애니메이션 처리를 담당하고 있습니다.",
      previewImg: "/project_game_preview.jpg",
      detailImg: "/project_game_detail.jpg"
    }
  ]
};

function ProjectModal({ project, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2>{project.title}</h2>
                <p className="modal-period">{project.period}</p>
                
                <img src={project.detailImg} alt={project.title + " 상세 이미지"} className="modal-project-image" />
                
                <hr />
                <p className="modal-details">{project.details}</p>
            </div>
        </div>
    );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-container">
      <header className="document-header">
        <div className="header-content">
            <div className="profile-text-info">
                <h1 className="name">{resumeData.profile.name}</h1>
                <p className="role">{resumeData.profile.role}</p>
                <div className="contact-info">
                    <p><strong>E-mail</strong> {resumeData.profile.email}</p>
                    <p><strong>전화번호</strong> {resumeData.profile.phone}</p>
                    <p><strong>주소</strong> {resumeData.profile.address}</p>
                    <p><strong>github</strong> {resumeData.profile.github}</p>
                </div>
            </div>
            <img src="/IDphoto.jpg" alt="Profile" className="profile-id-photo" />
        </div>
        
      </header>

      <main className="document-content">
        
        <section className="tagline-section section">
          <p className="tagline-main">{resumeData.profile.tagline_main}</p>
          <p className="tagline-sub">{resumeData.profile.tagline_sub}</p>
        </section>

        <section className="education-section section">
          <h2>학력</h2>
          <div className="education-item">
            <p className="period-display">{resumeData.profile.school_uni_period}</p>
            <h3>{resumeData.profile.school_uni}</h3>
          </div>
          <div className="education-item">
             <p className="period-display">{resumeData.profile.school_high_period}</p>
            <h3>{resumeData.profile.school_high}</h3>
          </div>
        </section>

        <section className="skill-section section">
          <h2>기술능력 사항</h2>
          <ul className="skill-list">
            {resumeData.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="project-section section">
          <h2>포트폴리오</h2>
          <p className="click-guide">👇 프로젝트를 클릭하여 상세 내용을 확인하세요</p>
          <div className="project-grid">
            {resumeData.projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card" 
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-preview-wrap">
                    <img src={project.previewImg} alt={project.title + " 미리보기"} className="project-preview-img" />
                    <div className="project-text-info">
                        <h3>{project.title}</h3>
                        <span className="period">{project.period}</span>
                        <p>{project.summary}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="intro-section section">
          <h2>자기소개서</h2>
          <p className="intro-text">{resumeData.introduction}</p>
        </section>
        <div className="print-button-container">
          <button onClick={() => window.print()} className="print-button">PDF로 저장 및 인쇄</button>
        </div>
      </main>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

export default App;