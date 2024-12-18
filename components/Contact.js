export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/mqakvvqy" method="POST" className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="input" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="input" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className="textarea"></textarea>
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  )
}
