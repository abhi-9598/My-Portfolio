import './Projects.css'
import { useState, useEffect } from 'react'

function ImageCarousel({ images, projectName }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovered, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt={`${projectName} - Image ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-button prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        ❯
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

function Projects() {
  const project1Images = [
    '/src/assets/Project1/1.png',
    '/src/assets/Project1/2.png',
    '/src/assets/Project1/3.png',
    '/src/assets/Project1/4.png',
  ]

  const project2Images = [
    '/src/assets/Project2/1.png',
    '/src/assets/Project2/2.png',
    '/src/assets/Project2/3.png',
    '/src/assets/Project2/4.png',
    '/src/assets/Project2/5.png',
  ]

  const project3Images = [
    '/src/assets/Project3/1.png',
    '/src/assets/Project3/2.png',
    '/src/assets/Project3/3.png',
    '/src/assets/Project3/4.png',
    '/src/assets/Project3/5.png',
    '/src/assets/Project3/6.png',
    '/src/assets/Project3/7.png',
    '/src/assets/Project3/8.png',
    '/src/assets/Project3/9.png',
  ]

  const projectsData = [
    {
      title: 'Online Doctor Appointment System',
      date: 'Jan 2026 – Feb 2026',
      images: project1Images,
      description: [
        'Built a full-stack doctor appointment booking platform enabling patients to schedule consultations online.',
        'Designed responsive frontend interfaces using React for appointment selection and user interaction.',
        'Implemented backend services with Node.js and Express.js to handle appointment management and user requests.',
        'Integrated MongoDB database for storing patient details, doctor information, and booking records.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'REST API'],
      links: [
        { text: 'GitHub', url: 'https://github.com/abhi-9598/MediCare' },
        { text: 'Live', url: 'https://medicarebyabhi.netlify.app/' },
      ],
    },
    {
      title: 'Employee Performance Segmentation for HR insights',
      date: 'Mar 2025 - Apr 2025',
      images: project2Images,
      description: [
        'Conducted data preprocessing tasks such as cleaning data, formatting columns, and preparing the dataset for analysis and machine learning.',
        'Designed an interactive dashboard to get detailed insights of different departments.',
        'Built a slicer to obtain deeper insights of each department having different teams.',
      ],
      tech: ['Power BI', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      links: [
         { text: 'GitHub', url: 'https://github.com/diksha-tripathi-lpu/employee-performance-insights' },
        { text: 'LinkedIn', url: 'https://www.linkedin.com/posts/abhi--yadav_machinelearning-powerbi-clustering-activity-7350874691957350400-S1nx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcpQrYBKq5mHymi5iLIJkMjMHCj9Uq8YcE' },
      ],
    },
    {
      title: 'Covid-19 Vaccine Visualization',
      date: 'Jun 2025 - Jul 2025',
      images: project3Images,
      description: [
        'Created a complete data analysis and visualization project using Python.',
        'Performed data cleaning, preprocessing, and exploratory data analysis (EDA) to extract meaningful insights from the dataset.',
        'Generated multiple visualizations to represent patterns, distributions, and trends using Matplotlib and Seaborn.',
        'Documented the entire workflow and shared the project publicly on LinkedIn to demonstrate analytical and data-driven problem-solving skills.',
        'Made the project easy to understand with clear insights and visual representation of data.',
      ],
      tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      links: [
        { text: 'GitHub', url: 'https://github.com/abhi-9598/covid19-vaccine-visualization-python' },
      ],
    },
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className={`project-item ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
            <div className="project-image-side">
              <ImageCarousel images={project.images} projectName={project.title} />
            </div>
            <div className="project-content-side">
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <ul className="project-description-list">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects