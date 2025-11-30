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
  introduction: `
  저는 사용자 경험(UX)을 최우선으로 생각하며 직관적인 인터페이스를 구현하는 프론트엔드 개발자입니다. 컴퓨터공학을 전공하며 쌓은 깊이 있는 프로그래밍 지식과 함께, 새로운 기술과 트렌드를 빠르게 흡수하고 프로젝트에 적용하는 실행력을 강점으로 가지고 있습니다.
  
  특히, 사용자의 피드백을 수용하여 서비스를 개선하는 과정을 중요하게 생각합니다. 학부 과정 중 진행했던 '항공권 예약 및 여행지 추천 웹사이트' 프로젝트에서 저는 이러한 역량을 집중적으로 발휘했습니다. 사용자 테스트를 통해 동선이 복잡한 부분을 파악하고, React.js의 컴포넌트 구조를 활용하여 해당 부분을 모듈화하고 재구성했습니다. 이 결과 "직관적이고 디자인이 깔끔해졌다"는 긍정적인 평가를 얻으며, 문제 해결 능력과 실제 사용자의 만족도 향상을 동시에 달성했습니다.
  
  저는 React.js와 JavaScript에 능숙하며, JSP를 이용한 웹 개발 경험도 풍부합니다. 또한 Spring Boot와 Java에 대한 이해를 바탕으로 백엔드 개발자와의 API 연동 및 데이터 처리 과정에서 발생하는 비효율적인 부분을 미리 파악하고 최적화할 수 있습니다. 이는 프론트엔드 개발자로서 협업 시 시너지를 극대화하는 중요한 요소라고 생각합니다.
  
  끊임없는 성장을 통해 기술 스택을 확장하고, 저의 창의적인 문제 해결 능력을 서비스에 녹여내어 사용자의 삶을 편리하게 만드는 데 기여하겠습니다. 주어진 환경에 안주하지 않고, 기술적 도전과 발전을 즐기는 개발자가 되겠습니다.
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
      previewImg: "/front-end/project_travel_preview.jpg", 
      detailImg: "/front-end/project_travel_detail.jpg" 
    },
    {
      id: 2,
      title: "블럭 키우기 게임 프로젝트",
      period: "2025 상반기",
      summary: "Unity 기반 2D 키우기 게임 개발",
      details: "Unity 엔진을 기반으로 2D 키우기 게임을 개발 중입니다. C#을 이용한 게임 로직 구현 및 애니메이션 처리를 담당하고 있습니다.",
      previewImg: "/front-end/project_game_preview.jpg",
      detailImg: "/front-end/project_game_detail.jpg"
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
            <img src="/front-end/IDphoto.jpg" alt="Profile" className="profile-id-photo" />
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
          <p className="click-guide">⬇ 프로젝트를 클릭하여 내용 확인</p>
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