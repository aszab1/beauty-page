import emailjs from '@emailjs/browser'
import { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response)
        setResponse({ success: true, data: { message: "Message successfully sent!" } })
        // Reset form data
        setFormData({ name: '', email: '', message: ''})
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
          type='text'
          name='name'
          placeholder='Name *'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          className='email'
          type='email'
          name='email'
          placeholder='Email *'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea 
          name='message'
          className='textarea'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className='btn' type="submit">Submit</button>
        {response && (
          <p className='danger bold mt-4'>{response.data.message}</p> 
        )}
      </form>
    </div>
  )
}

export default Form