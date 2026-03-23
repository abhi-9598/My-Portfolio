import './Contact.css'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (name === 'email') setEmailError('')
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter valid email')
      return
    }
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <div className="contact-content">
        <div className="contact-info">
          <p>Email: <a href="mailto:abhishekyadav959861@gmail.com">abhishekyadav959861@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/abhi--yadav/" target="_blank">Profile</a></p>
          <p>GitHub: <a href="https://github.com/abhi-9598" target="_blank">Repo</a></p>
          <p>Mobile: +91-9598619662</p>
        </div>

        <div className="get-in-touch">
          <h3>Get in Touch</h3>

          {submitted ? (
            <div className="thank-you-message">
              <h4>Thank You!</h4>
              <p>Your message has been sent.</p>
              <button onClick={handleReset} className="reset-btn">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact