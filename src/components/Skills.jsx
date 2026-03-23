import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>C++</li>
            <li>JavaScript</li>
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>React.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        {/* <div className="skill-category">
          <h3>ML Libraries</h3>
          <ul>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
            <li>scikit-learn</li>
          </ul>
        </div> */}
        <div className="skill-category">
          <h3>Tools/Platforms</h3>
          <ul>
            <li>MySQL</li>
            <li>VS Code</li>
            <li>MS Excel</li>
            <li>Power BI</li>
            <li>Jupyter</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem-Solver</li>
            <li>Team Player</li>
            <li>Critical Thinking</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills