import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  // SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import crypto from "../../assets/crypto-site.png";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  
                  <img
                    src="https://i.ibb.co/vsPdNt3/Screenshot-2024-01-14-at-4-02-24-PM.png"
                    alt="Stock_portfolio"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Stock Portfolio</h2>
                <p>
                  An online website to see your stocks portfolio data and analysis.
                </p>
                <div>
                  <SiHtml5 />
                  <SiReact/>
                  <SiNodedotjs/>
                  <SiMongodb/>
                  <SiReactrouter/>
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://portfoliofrontend-nine.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/portfoliofrontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/Rh0sDL0/Healthbooker.png"
                    alt="HealthBooker"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>HealthBooker</h2>
                <p>
                  Our website offers a seamless experience for users and doctors alike. Sign up or log in to unlock a range of features. Easily browse through a list of available doctors, manage your profile, and submit queries effortlessly. Stay updated with notifications and enjoy secure access to your information. Aspiring doctors can apply through our user-friendly system.
                </p>
                <div>
                  <SiJavascript />
                  <SiHtml5 /><DiCss3 />
                  <FaReact />
                  <SiReactrouter />
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://healthbooker-frontend-oi3y8n51g-harsh2025s-projects.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/healthbooker_frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/X5Kdw66/CodeSync.png"
                    alt="CodeSync"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>CodeSync</h2>
                <p>
                  Engineered a real-time collaborative code editor, boosting productivity by 30%. Designed features like customizable themes and group chatting, increasing user satisfaction by 40%. Implemented innovative functionalities for enhanced collaboration and user experience.
                </p>
                <div>
                  <SiJavascript />
                  <SiHtml5 /><DiCss3 />
                  <FaReact />
                  <SiReactrouter />
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://codesync-frontend-zvgf.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/codesync-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/VtsPvzC/Opening-window.png"
                    alt="CodeIt"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>CodeIt</h2>
                <p>
                  Built a responsive code editor that supports languages like C++, Javascript, Python, and Java.
                  The frontend is built with React.js and requests are parsed via the backend API set up with Express.js.
                  Front end editor is employed using Ace Editor and the Backend processes the code via third-party API-judge0.
                </p>
                <div>
                  <SiJavascript />
                  <SiHtml5 /><DiCss3 />
                  <FaReact />
                  <SiExpress/>
                  <SiReactrouter />
                  <SiNodedotjs/>
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://code-it-web-ide.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/CodeIt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/YQZsxf6/Crypto-site.png"
                    alt="Crypto-site"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Crypto-web-app</h2>
                <p>
                  Crypto-web-app is a web based application tells us about many crypto currency rates with graphs of past time.
                  It have the which takes you tot he webpage of that crypto spot exchanges.
                  It is made with Chakra-ui of react-js having the dual mode appreance.
                </p>
                <div>
                  <SiJavascript />
                  <SiHtml5 /><DiCss3 />
                  <FaReact />
                  <SiReactrouter />
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://mycryptosite.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/Cryptosite.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/VD7bxKX/To-do-list-app.png"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>To-do Web App</h2>
                <p>
                  A web-app where we can keep what works we have to do and after completing we can delete the works.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <SiReact/>
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://to-do-list-weld-eta.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/to-do-list"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/ctM2H0p/Chat-Fusion.png"
                    alt="ChatFusion"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>ChatFusion</h2>
                <p>
                  A website to do realtime chat in personal messaging with firebase and react  .
                </p>
                <div>
                  <SiTailwindcss />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiReactrouter/>
                </div>
                <div>
                  <a
                    href="https://chat-and-notification-feature-codepth-20a0f1j0m-harsh-2025.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/chat_and_notification_feature_codepth"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/9NjrhsD/Execution.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather-App</h2>
                <p>
                  A Web-app using Weather API which tells us about the weather of a place .
                </p>
                <div>
                <DiCss3 />
                  <SiHtml5 />

                </div>
                <div>
                  {/* <a
                    href="https://www.npmjs.com/package/apijs-mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View NPM Package
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/harsh-2025/Weather-Site"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/0QkP396/Screenshot-2023-10-07-at-11-09-50-PM.pn"
                    alt="Quiz"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Online Quiz</h2>
                <p>
                  A website to play quiz with time limit and analysis .
                </p>
                <div>
                  <SiTailwindcss />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://causalfunnel-quiz.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/Causalfunnel_quiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  
                </div>
              </div>
              <div className="project_information">
                <h2>More to be added in future</h2>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
