import React from "react";
import FooterTop from "./FooterTop";
import { makeStyles } from "@material-ui/core/styles";
import FooterBottom from "./FooterBottom";

const useStyles = makeStyles((theme) => ({
  
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <>
      <FooterTop />
      <FooterBottom />
    </>
  );
};

export default Footer;