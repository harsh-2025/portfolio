import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
// import CodeIcon from "@material-ui/icons/Code"
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Harsh Rawat</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Web Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/harsh-2025"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          
          <a
            href="mailto:harshofficialrawat@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919413918825"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
      href="https://wa.me/+919413918825"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="link link--icon"
    >
            <WhatsappIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-rawat-6970b822a/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/rawat_harsh3/"
            aria-label="instagram"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
          <InstagramIcon />
          </a>
          <a
            href="https://twitter.com/HarshRa45441971"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
        <div className="Codingplatform">
        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://auth.geeksforgeeks.org/user/harsh_rawat"
            );
          }}
        >
GFG
        </button>
        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://leetcode.com/harshofficialrawat/"
            );
          }}
        >
          LeetCode
        </button>
        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://codeforces.com/profile/harsh_2025"
            );
          }}
        >
          CodeForces
        </button>
        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://www.codechef.com/users/hr_76codechef"
            );
          }}
        >
          CodeChef
          </button>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
