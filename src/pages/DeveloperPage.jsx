import { useEffect } from 'react'

const whatsappUrl = 'https://wa.me/918052344204?text=Hello%20Mukesh%20Yadav%2C%20I%20want%20to%20discuss%20a%20website%2C%20mobile%20app%2C%20or%20custom%20software%20development%20project.'

const services = [
  ['⌘', 'Website Development', 'Business websites, company websites, portfolio websites, landing pages, and custom websites.'],
  ['◈', 'Web Application Development', 'Dynamic web applications, admin dashboards, management systems, and custom business applications.'],
  ['▣', 'Mobile App Development', 'Customized mobile application development according to project requirements.'],
  ['＋', 'Hospital Management Software', 'Hospital panels, patient registration, billing systems, staff management, and healthcare modules.'],
  ['⌂', 'School & Coaching Websites', 'Professional educational websites with admission enquiries, course details, and contact forms.'],
  ['⚙', 'Custom Software Development', 'Tailor-made software based on the client’s business workflow and requirements.'],
  ['↻', 'Website Redesign & Maintenance', 'Website improvements, bug fixes, performance optimization, and ongoing maintenance.'],
  ['⇄', 'API & Database Integration', 'Secure backend development, API integration, database connectivity, and third-party service integration.'],
]

const benefits = [
  'Fast and timely project delivery.',
  'Fully customized solutions according to client requirements.',
  'Modern, responsive, mobile-friendly designs.',
  'User-friendly interfaces and smooth navigation.',
  'Scalable frontend and backend architecture.',
  'Database integration and reliable data management.',
  'Performance optimization and bug fixing.',
  'Clear communication and project requirement discussions.',
  'Post-delivery support and maintenance options.',
  'Solutions designed around the client’s budget and business goals.',
]

const DeveloperPage = () => {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')
    const pageDescription = 'Mr. Mukesh Yadav creates modern websites, mobile apps, web applications, and custom software for growing businesses.'

    document.title = 'Developed By Mr. Mukesh Yadav | Software, App & Website Developer'
    description?.setAttribute('content', pageDescription)

    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.setAttribute('content', previousDescription)
    }
  }, [])

  return (
    <div className="developer-page">
      <section className="developer-hero section-pad">
        <p className="eyebrow"><span className="eyebrow-dot" /> DEVELOPER PROFILE</p>
        <h1>Developed by <em>Mr. Mukesh Yadav.</em></h1>
        <p className="developer-title">Software Developer <span>|</span> App Developer <span>|</span> Website Developer</p>
        <p className="developer-intro">
          I am a Software Developer, App Developer, and Website Developer focused on creating modern,
          professional, responsive, and user-friendly digital solutions for businesses, startups,
          hospitals, schools, coaching institutes, and other organizations.
        </p>
        <div className="developer-hero-actions">
          <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Contact on WhatsApp <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="mailto:my8052344204@gmail.com?subject=Project%20Development%20Enquiry">Send an Email <span aria-hidden="true">↗</span></a>
        </div>
        <div className="developer-contact-strip">
          <a href="mailto:my8052344204@gmail.com">my8052344204@gmail.com</a>
          <a href="tel:+918052344204">+91 8052344204</a>
        </div>
      </section>

      <section className="developer-about section-pad">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> ABOUT ME</p>
          <h2>Digital solutions built around <em>your goals.</em></h2>
        </div>
        <p>
          I develop customized software and websites according to each client’s business requirements,
          helping businesses improve their online presence, streamline their workflows, and manage their
          operations efficiently.
        </p>
      </section>

      <section className="developer-services section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> SERVICES OFFERED</p>
            <h2>What I can <em>build.</em></h2>
          </div>
          <p className="section-intro">Practical, flexible technology services for organizations at every stage.</p>
        </div>
        <div className="developer-service-grid">
          {services.map(([icon, title, description], index) => (
            <article className="developer-service-card" key={title}>
              <span className="developer-service-number">0{index + 1}</span>
              <span className="developer-service-icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="developer-benefits section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> WHY CHOOSE ME?</p>
            <h2>Technology with a <em>human touch.</em></h2>
          </div>
        </div>
        <ul className="developer-benefit-list">
          {benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}
        </ul>
      </section>

      <section className="developer-project section-pad">
        <p className="eyebrow"><span className="eyebrow-dot" /> LET’S WORK TOGETHER</p>
        <h2>Have a Project <em>in Mind?</em></h2>
        <p>Looking for a professional website, mobile application, or customized software for your business? Let’s discuss your requirements and build a solution that fits your needs.</p>
        <div className="developer-project-actions">
          <a className="button button-lime" href="mailto:my8052344204@gmail.com?subject=Project%20Development%20Enquiry">Discuss Your Project <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Contact on WhatsApp <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="mailto:my8052344204@gmail.com?subject=Project%20Development%20Enquiry">Send an Email <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  )
}

export default DeveloperPage
