import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
I'm a passionate Data Science student and Full Stack Developer with a strong interest in building intelligent and scalable solutions.
With a solid foundation in Python, Machine Learning, and Web Development, 
I enjoy transforming data into meaningful insights and real-world applications.
</p>

<p>
I have hands-on experience in data analysis, visualization, and developing predictive models using tools 
like Pandas, NumPy, and Scikit-learn. Alongside this, I work with React and Node.js to build responsive and user-friendly web applications.
</p>
   </div>
        <div className="about-highlights">
          <h3>Key Highlights</h3>
          <ul>
            <li>Full Stack Web Development</li>
            <li>Data Analysis & Visualization</li>
            <li>Machine Learning Enthusiast</li>
            <li>Problem Solving & Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
