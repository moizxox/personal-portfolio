"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_gp7o11m", "template_88j9e1o", templateParams, "AbAnqBYLKhCnbXAn0")
      .then(() => {
        setSent(true);
        setLoading(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 pb-5 pb-lg-0">
            <div className="position-relative">
              <div className="position-relative z-2">
                <h3 className="text-primary-2 mb-3">Let’s connect</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control bg-3 border border-1 rounded-3"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-3 border border-1 rounded-3"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary-2 rounded-2 w-100" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                        <i className="ri-arrow-right-up-line ms-2" />
                      </button>
                      {sent && <p className="text-success mt-2">✅ Message sent successfully!</p>}
                      {error && <p className="text-danger mt-2">❌ Failed to send. Try again later.</p>}
                    </div>
                  </div>
                </form>
              </div>
              <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column ps-lg-8">
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="d-inline-block">
                <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                  <i className="ri-phone-fill text-primary-2 fs-26" />
                </div>
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Phone Number</span>
                <h6 className="mb-0">+92 333-4533605</h6>
              </div>
              <a href="tel:+923334533605" className="position-absolute top-0 start-0 w-100 h-100" />
            </div>
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="d-inline-block">
                <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                  <i className="ri-mail-fill text-primary-2 fs-26" />
                </div>
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Email</span>
                <h6 className="mb-0">mianmoiz899@gmail.com</h6>
              </div>
              <a href="mailto:mianmoiz899@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
