import React from "react";
import { SocialIcon } from "react-social-icons";
import "./ContactDetails.css";
const ContactDetails = () => {
  const anchorLink = [
    {
      href: "#",
      cName: (
        <SocialIcon network="facebook" style={{ height: 30, width: 30 }} />
      ),
    },
    {
      href: "#",
      cName: <SocialIcon network="twitter" style={{ height: 30, width: 30 }} />,
    },
    {
      href: "#",
      cName: (
        <SocialIcon network="instagram" style={{ height: 30, width: 30 }} />
      ),
    },
    {
      href: "#",
      cName: <SocialIcon network="github" style={{ height: 30, width: 30 }} />,
    },
    {
      href: "#",
      cName: (
        <SocialIcon network="linkedin" style={{ height: 30, width: 30 }} />
      ),
    },
  ];

  return (
    <div className="contact-details">
      <div className="contact__details__container">
        <div className="details__title">
          <h1>Contact Information</h1>
        </div>
        <div className="contact__details__subtittle">
          <p>
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
        </div>
        <div className="contact__details__list">
          <li>+8801751552297</li>
          <li>coderrabbi@gmail.com</li>
          <li>8280,Barishal,Bangladesh</li>
        </div>
        <div className="contact__details__social">
          {anchorLink.map((anchorLink) => (
            <div className="socialIcon">
              <a href={anchorLink.href} className="socialLink">
                {anchorLink.cName}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
