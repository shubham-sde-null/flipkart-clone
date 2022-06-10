import React from "react";
import "./Footer.css";
import WorkIcon from "@mui/icons-material/Work";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";
import CardGiftcardSharpIcon from "@mui/icons-material/CardGiftcardSharp";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <div>
          <p className="footer__infoHeading">ABOUT</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
          <p>Posts</p>
          <p>Flipkart Wholesale</p>
          <p>Corporate Information</p>
        </div>
        <div>
          <p className="footer__infoHeading">HELP</p>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellations And Returns</p>
          <p>FAQ</p>
          <p>Report Infringment</p>
        </div>
        <div>
          <p className="footer__infoHeading">POLICY</p>
          <p>Return Policy</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Site Map</p>
          <p>EPR Compliance</p>
        </div>
        <div>
          <p className="footer__infoHeading">SOCIAL</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
        <div className="footer__mailUs">
          <p className="footer__infoHeading">Mail Us: </p>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
        </div>

        <div className="footer__address">
          <p className="footer__infoHeading">Registered Office Address: </p>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <p>CIN : U51109KA2012PTC066107</p>
          <p>Telephone: 044-45614700</p>
        </div>
      </div>
      <div className="footer__payment">
        <p>
          <span>
            <WorkIcon fontSize="small" />
          </span>
          Become a Seller
        </p>
        <p>
          <span>
            <StarsSharpIcon fontSize="small" />
          </span>
          Advertise
        </p>
        <p>
          <span>
            <CardGiftcardSharpIcon fontSize="small" />
          </span>
          Gift Cards
        </p>
        <p>
          <span>
            <HelpSharpIcon fontSize="small" />
          </span>
          Help Center
        </p>
        <p>&copy;2007-2022 Flipkart.com</p>
      </div>
    </div>
  );
}

export default Footer;
