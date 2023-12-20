import React from "react";
import clasess from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={clasess.footerContainer}>
      <div className={clasess.detailsContainer}>
        <div className={clasess.details}>
          <div className={clasess.detailsColumn}>
            <div className={clasess.header}>Company</div>
            <div className={clasess.content}>About</div>
            <div className={clasess.content}>Jobs</div>
            <div className={clasess.content}>For The Record</div>
          </div>
          <div className={clasess.detailsColumn}>
            <div className={clasess.header}>Communities</div>
            <div className={clasess.content}>For Artists</div>
            <div className={clasess.content}>Developers</div>
            <div className={clasess.content}>Advertising</div>
            <div className={clasess.content}>Investors</div>
            <div className={clasess.content}>Vendors</div>
          </div>
          <div className={clasess.detailsColumn}>
            <div className={clasess.header}>Useful Links</div>
            <div className={clasess.content}>Support</div>
            <div className={clasess.content}>Free Mobile App</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={clasess.breakLine}></div>
      <div className={clasess.extraDetailsContainer}>
        <div className={clasess.content}>Legal</div>
        <div className={clasess.content}>Privacy Center</div>
        <div className={clasess.content}>Privacy Policy</div>
        <div className={clasess.content}>Cookies</div>
        <div className={clasess.content}>About Ads</div>
        <div className={clasess.content}>Accessibility</div>
      </div>
    </div>
  );
};

export default Footer;
