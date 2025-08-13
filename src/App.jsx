import { Link, Routes, Route, useParams } from "react-router-dom";

const projects = [
  {
    title: "B2E 그룹사 통합 전자결재",
    desc: "Spring+React 초기 세팅, CRUD API, 파일시스템, 웹 에디터, SSO.",
    stack: "Java(Spring), React, Node, MSSQL",
    repo: "https://github.com/<내아이디>/<레포-있으면>",
    demo: ""
  },
  {
    title: "자체 ERP와 각종 API 연동",
    desc: "공공/Cisco/Kakao/Daum 등 API 연동.",
    stack: "Node, PowerScript, Windows, SVN",
    repo: "",
    demo: ""
  },
  {
    title: "파일 다운로드 인프라",
    desc: "Node(229)↔Java↔React 스트리밍/캐시/권한 처리, /temp-view 제공.",
    stack: "Node, Java(Spring), React, MSSQL",
    repo: "",
    demo: ""
  }
];

function Home(){
  return (
    <main className="wrap">
      <header className="hero">
        <img className="avatar" src="images/profile.jpg" alt="프로필" />
        <div>
          <h1>조수민</h1>
          <p className="subtitle">Spring/React 풀스택 · 전자결재/파일시스템/SSO</p>
          <nav className="links">
            <a href="mailto:you@example.com">Email</a>
            <a href="https://github.com/<내아이디>" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/<내링크드인>" target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
        </div>
      </header>

      <section>
        <h2>프로젝트</h2>
        <div className="grid">
          {projects.map((p, i) => (
            <article className="card" key={i}>
              <h3>{p.title}</h3>
              <div className="meta">{p.stack}</div>
              <p>{p.desc}</p>
              <div className="links">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
                <Link to={`/project/${i}`}>상세</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>스킬</h2>
        <div className="chips">
          <span>Java(Spring MVC)</span><span>React</span><span>Node.js</span>
          <span>MSSQL/MySQL</span><span>JWT/SSO</span><span>Git/GitHub Actions</span>
        </div>
      </section>
    </main>
  );
}

function ProjectDetail(){
  const { idx } = useParams();
  const p = projects[Number(idx)];
  if(!p) return <main className="wrap"><p>프로젝트를 찾을 수 없습니다.</p></main>;
  return (
    <main className="wrap">
      <Link to="/">← 목록으로</Link>
      <h1>{p.title}</h1>
      <p className="meta">{p.stack}</p>
      <p>{p.desc}</p>
      {p.repo && <p><a href={p.repo} target="_blank" rel="noreferrer">GitHub Repo</a></p>}
      {p.demo && <p><a href={p.demo} target="_blank" rel="noreferrer">Live Demo</a></p>}
    </main>
  );
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project/:idx" element={<ProjectDetail/>} />
    </Routes>
  );
}
