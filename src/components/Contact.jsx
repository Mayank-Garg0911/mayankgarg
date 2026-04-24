import '../styles/About.css'
import '../styles/Contact.css'
// import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // Add mailto or form submission logic
  //   // window.location.href = `mailto:mayankgarg0911@gmail.com`
  // }

  return (
    <section id="contact" className="section-container">
      <div className="section-label">05 / Contact</div>
      <div className="grid-2">
        <div>
          <div className="section-title">
            Let's build<br />something great.
          </div>
          <div className="content-text">
            <p style={{marginBottom: '40px'}}>
              Available for freelance collaborations and full-time opportunities. Drop a message or contact me on socials.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/mayank-garg-307403315/" target="_blank" className="social-btn">LinkedIn</a>
              <a href="https://github.com/Mayank-Garg0911" target="_blank" className="social-btn">GitHub</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mayankgarg0911@gmail.com" target="_blank" className="social-btn">Mail me</a>
              {/* <a href="https://twitter.com" target="_blank" className="social-btn">X.com</a> */}
            </div>
          </div>
        </div>
        
<form 
  action="https://formspree.io/f/mjgjlgol"
  method="POST"
  className="contact-form"
>
  <div className="form-group">
    <label className="form-label" htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      type="text"
      className="form-input"
      placeholder="What's your name?"
      required
    />
  </div>

  <div className="form-group">
    <label className="form-label" htmlFor="email">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      className="form-input"
      placeholder="Your email address"
      required
    />
  </div>

  <div className="form-group">
    <label className="form-label" htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      className="form-input"
      placeholder="Tell me about your project"
      rows="3"
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="submit-btn"
    style={{ marginTop: '30px', cursor: 'pointer' }}
  >
    SEND MESSAGE
  </button>
</form>
      </div>
    </section>
  )
}
