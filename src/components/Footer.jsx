import { Icon } from '@iconify/react'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="info-footer">
        <div className="salon-info">
          <h5 className="salon-info-header">SALON INFORMATION</h5>
          <p>The Beauty Loft <br /> BodyWise Gym<br />16 Church Street <br />Horsham <br />RH12 3QW</p>
          <section>
            <Icon className='email-icon' icon="ic:outline-email"></Icon>
            <a className="email" href='mailto:info@email.com'>info@email.com</a>
          </section>
          <section>
            <Icon className="phone-icon" icon="line-md:phone"></Icon>
            <a className="mobile" href="tel:+447772519590">07772519590</a>
          </section>
        </div>
        <div className="social-links">
          <Icon
            className='insta'
            icon='mdi:instagram'
            onClick={() => window.open('https://www.instagram.com/enhance_my_naturalbeauty?igsh=MXc0cjB4d3AyazVtZg==')}
          />
        </div>
      </div>
      <div className="footer-div">
        <p className="footer-p">&copy; Enhance My Natural Beauty •</p>
        <p className="footer-p2">Website by <a className="adrienn" href="https://www.adriennszabo.com/" target="_blank" rel="noopener noreferrer">Adrienn Szabo</a></p>
      </div>
    </footer>
  )
}

