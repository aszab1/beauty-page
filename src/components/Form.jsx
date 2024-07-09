import emailjs from '@emailjs/browser'
import { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    message: ''
  })
  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const userId = import.meta.env.VITE_USER_ID

    const templateParams = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message
    }

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response)
        setResponse({ success: true, data: { message: "Message successfully sent!" } })
        // Reset form data
        setFormData({ first_name: '', last_name: '', email: '', mobile: '', message: ''})
      })
      .catch((error) => {
        console.log('Failed to send email', error)
        setResponse({ success: false, data: { message: 'Failed to send message. Please try again.' }})
      })
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input 
          className='first_name'
          type='text'
          name='first_name'
          placeholder='First Name'
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input 
          className='last_name'
          type='text'
          name='last_name'
          placeholder='Last Name'
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <input 
          className='email'
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          className='mobile'
          type='tel'
          name='mobile'
          placeholder='Mobile Number'
          value={formData.mobile}
          onChange={handleChange}
          pattern='^07\d{9}$'
          required
        />
        <textarea 
          name='message'
          className='textarea'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className='btn' type="submit">SUBMIT</button>
        {response && (
          <p className='danger bold mt-4'>{response.data.message}</p> 
        )}
      </form>
    </div>
  )
}

export default Form