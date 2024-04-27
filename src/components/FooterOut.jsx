import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 mt-sm-3 mt-md-0">
            <h5 className="mb-3 footer-title">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/terms" className='footer-li'>&gt; Term & Condition</Link></li>
              <li className="mb-2"><Link to="/faq" className='footer-li'>&gt; FAQ</Link></li>
              <li className="mb-2"><Link to="/about" className='footer-li'>&gt;  About us</Link>&gt;</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 con col-xl-3 mt-sm-3 mt-md-0">
            <h5 className="row mb-3 footer-title">Contact us</h5>
            <div className="d-flex justify-content-start">
              <span><FaMapLocationDot size={25}/> </span>
              <span><p className="ms-2 f">99 Valenzuela City</p></span>
            </div>
            <div className="d-flex justify-content-start">
              <span><MdEmail size={25}/></span>
              <span><p className="ms-2 f">lake.support@gmail.com</p></span>
            </div>
            <div className="d-flex justify-content-start">
              <span><BsTelephoneFill  size={25}/></span>
              <span><p className="ms-2 f">0999-999-9999</p></span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 mt-sm-3 mt-md-0">
            <h5 className="row mb-3 footer-title">Follow us</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="http://www.facebook.com" className='me-2'><FaFacebookF  className="icons" size={28}/></a></li>
              <li><a href="http://www.twitter.com" className='me-2'><FaXTwitter className="icons" size={28}/></a></li>
              <li><a href="http://www.instagram.com" className='me-2'><FaInstagram className="icons" size={28} /></a></li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-xl-3 mt-sm-3 mt-md-0">
            <h5 className="row m-0 mb-2 footer-title">Let's keep in touch</h5>
            <p className="footer-li">Sign up for our weekly email marketing newsletter and LAKE.com updates.</p>
            <form className="d-flex">
              <input type="email" placeholder="Enter your email" className="form-control sub" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <button type="submit" className="btn btn-gray btn-subs">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="footer-hr" />
        <p className="pb-2 m-0 f text-center">© LAKE.com. All Rights Reserved 2024. Site optimized by SEO Direct</p>
      </div>
    </footer>
  );
}

export default Footer;
