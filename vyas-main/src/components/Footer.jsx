import React from "react";
import { Link } from "react-router-dom";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Vyas.AI</h1>
        <p className="py-4">© 2024 Vyas.AI, Inc. All rights reserved.</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.linkedin.com/in/vyas-ai-76217b279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a>
            <FaTwitterSquare size={30} />
          </a>
          <a>
            <FaGithubSquare size={30} />
          </a>
          <a>
            <FaFacebookSquare size={30} />
          </a>
          <a>
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#00df9a]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link to="https://vyasai.cronitorstatus.com/" onClick={scrollToTop}>Analytics</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/modelpage" >Models</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/store" >Commerce</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/company/blog" >Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Support</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/pricing" >Pricing</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/documentation" >Documentation</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/guide" >Guides</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/company/about" >About</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/contact" >Contact Us</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/company/jobs" >Jobs</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/company/careers" >Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/claim" >Claim</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/policy" >Policy</Link>
            </li>
            <li className="py-2 text-sm">
              <Link onClick={scrollToTop} to="/terms" >Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
