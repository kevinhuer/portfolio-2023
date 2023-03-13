import React, { useState } from "react"
import axios from "axios"
import "./ContactForm.scss"

const ContactForm = () => {
  const [name, updateName] = useState("")
  const [email, updateEmail] = useState("")
  const [message, updateMessage] = useState("")
  const [testNumber, updateTestNumber] = useState(0);
  const [error, updateError] = useState("")
  const [isSubmitting, updateIsSubmitting] = useState(false)
  const [isError, updateIsError] = useState(false)
  const [isSuccess, updateIsSuccess] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    updateIsSubmitting(true)
    updateError("")
    updateIsError(false)

    if (name === "" || email === "" || message === "" || testNumber === "0") {
      updateError("Missing fields")
      updateIsSubmitting(false)
      updateIsError(true)
      return
    }
    if (testNumber !== "7"){
      updateError("Your answer to the math question is incorrect");
      updateIsSubmitting(false)
      updateIsError(true)
      return
    }   

    axios
      .post(
        "https://getform.io/f/6df6214b-5ac6-4121-8e75-6c351c2aeacd",
        {
          name: name,
          email: email,
          message: message,
        },
        { headers: { Accept: "application/json" } }
      )
      .then(response => {
        updateIsSubmitting(false)
        updateIsSuccess(true)
        updateName("")
        updateEmail("")
        updateMessage("")
        updateTestNumber(0);
      })
      .catch(error => {
        updateIsSubmitting(false)
        updateError(error.message)
        updateIsError(true)
      })
  }
  const handleNameUpdate = e => {
    updateName(e.target.value)
  }
  const handleEmailUpdate = e => {
    updateEmail(e.target.value)
  }
  const handleMessageUpdate = e => {
    updateMessage(e.target.value)
  }
  const handleTestNumberUpdate = e => {
    updateTestNumber(e.target.value);
  }
  return (
    <div id="contact" className="ContactForm">
      <div className="form-container">
        <h2>Contact me</h2>
        <form onSubmit={handleSubmit}>
          <div className="id-container">
            <label htmlFor="name" className="hidden">Name</label>
            <input
            className="left-input"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameUpdate}
            />
           
            <label htmlFor="email" className="hidden">Email</label>
            <input
              className="right-input"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailUpdate}
            />
         
          </div>
          <label htmlFor="message" className="hidden">Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            value={message}
            onChange={handleMessageUpdate}
          /> 
        
          <div className="id-container">
          <label htmlFor="test_question">What is ten minus 3?</label>
          <input
              className="test-question"
              type="number"
              name="test_question"
              placeholder=""
              value={testNumber}
              onChange={handleTestNumberUpdate}
            />    
            </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {isSubmitting && <p className="success">Submitting...</p>}
        {isError && <p className="error">{error}</p>}
        {isSuccess && (
          <p className="success">
            Thank you for your message, I will reply shortly.
          </p>
        )}
      </div>
    </div>
  )
}

export default ContactForm
