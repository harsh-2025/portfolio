import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);
{/* <p>Welcome to the portfolio website</p> */}
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Welcome to my portfolio website , I am {" "}
                <span className="different">Harsh Rawat </span> from{" "}
                <span className="different">
                  {" "}
                  Jaipur , Rajasthan (India)
                </span>
                . I am undergraduate student of B.Tech (Electronics and Communication Engineering)
                from{" "}
                <span className="different">
                  Indian Institute of Information Technology Nagpur , Maharashtra
                </span>
                . Then Looking to join Job in field of software{" "}.
                {/* <span className="different">Masai School</span> a military type
                coding school. */}
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveller{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Tech Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Foodie{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Passionate{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
