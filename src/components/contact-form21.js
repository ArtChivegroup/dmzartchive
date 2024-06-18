import React from 'react'

import PropTypes from 'prop-types'

import './contact-form21.css'

const ContactForm21 = (props) => {
  return (
    <div
      className={`contact-form21-contact5 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-row contact-form21-max-width">
        <div className="thq-flex-column contact-form21-content">
          <div className="contact-form21-section-title">
            <span className="thq-body-small">{props.content2}</span>
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="thq-body-large">{props.content1}</span>
          </div>
          <div className="contact-form21-contact-info thq-flex-column">
            <div className="contact-form21-row thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                  className=""
                ></path>
              </svg>
              <span className="thq-body-small">{props.email}</span>
            </div>
            <div className="contact-form21-row1 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                  className=""
                ></path>
              </svg>
              <span className="thq-body-small">{props.phone}</span>
            </div>
            <div className="contact-form21-row2 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                  className=""
                ></path>
              </svg>
              <span className="thq-body-small">{props.adress}</span>
            </div>
          </div>
        </div>
        <form className="contact-form21-form">
          <div className="contact-form21-input">
            <label htmlFor="contact-form-2-name" className="thq-body-small">
              Name
            </label>
            <input
              type="text"
              id="contact-form-2-name"
              placeholder="Name"
              className="contact-form21-text-input thq-input"
            />
          </div>
          <div className="contact-form21-input1">
            <label htmlFor="contact-form-2-email" className="thq-body-small">
              Email
            </label>
            <input
              type="email"
              id="contact-form-2-email"
              required="true"
              placeholder="Email"
              className="contact-form21-text-input1 thq-input"
            />
          </div>
          <div className="contact-form21-input2">
            <label htmlFor="contact-form-2-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-2-message"
              rows="3"
              placeholder="Enter your message"
              className="contact-form21-textarea thq-input"
            ></textarea>
          </div>
          <div className="contact-form21-checkbox">
            <input
              type="checkbox"
              id="contact-form-2-check"
              checked="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-2-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button type="submit" className="thq-button-filled">
            <span className="thq-body-small">{props.action}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm21.defaultProps = {
  phone: '+62 89652251871',
  adress: 'Bogor, Indonesia',
  content2: "I'll get back to you as soon as possible.",
  heading1: 'Contact Me',
  email: 'dimasalmactar12@gmail.com',
  rootClassName: '',
  content1:
    'Feel free to reach out for collaborations, inquiries, or just to say hi!',
  action: 'Submit',
}

ContactForm21.propTypes = {
  phone: PropTypes.string,
  adress: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  email: PropTypes.string,
  rootClassName: PropTypes.string,
  content1: PropTypes.string,
  action: PropTypes.string,
}

export default ContactForm21
