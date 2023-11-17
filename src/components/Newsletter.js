// import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  // const [email, setEmail] = useState('');

  // useEffect(() => {
  //   if (status === 'success') clearFields();
  // }, [status])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   email &&
  //   email.indexOf("@") > -1 &&
  //   onValidated({
  //     EMAIL: email
  //   })
  // }

  // const clearFields = () => {
  //   setEmail('');
  // }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to my Newsletter,<br></br> I post every Saturday.</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger"></Alert>}
              {status === 'success' && <Alert variant="success"></Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit>
                <div className="new-email-bx">
                  <input type="email" placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}