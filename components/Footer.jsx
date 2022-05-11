import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 BASS-HUB All rights reserved</p>
      <p className="icons">
        <AiFillInstagram /> <AiOutlineTwitter />
      </p>
      <h4 className="footer-h4">
        Created By{" "}
        <a className="footer-a" target={"_blank"} href="https://portfolio-ayushtyagi14.vercel.app">
          Ayush Tyagi
        </a>
      </h4>
    </div>
  );
};

export default Footer;
