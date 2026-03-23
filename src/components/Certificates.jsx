import './Certificates.css'

function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>

      {/* HackerRank Certificate */}
      <div className="certificate-item">
        <div className="certificate-header">
          <h3>Frontend Developer (React) | HackerRank</h3>
          <a href="https://drive.google.com/file/d/1l_tV--YCqyDRvi3wdZvLqzuYfnXaMEko/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="proof-link" title="View Certificate">📄 View Proof</a>
        </div>
        <p>Jun 2025 - Jul 2025</p>
        <p>Completed certification demonstrating React development skills.</p>
      </div>

      {/* AINCAT Certificate */}
      <div className="certificate-item">
        <div className="certificate-header">
          <h3>AINCAT 2025 | Naukri Campus</h3>
          <a href="https://drive.google.com/file/d/1re0Si8P--TmdFm2JZ-WCMsBoQFF1ikqu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="proof-link" title="View Certificate">📄 View Proof</a>        </div>
        <p>May 2025</p>        <p>
          Secured Rank 30,876 in India’s largest career aptitude test,
          demonstrating analytical and problem-solving skills.
        </p>
      </div>

    </section>
  )
}

export default Certificates