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
                    src="https://i.ibb.co/nCZdyfx/Krishna-store.png"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Krishna Product</h2>
                <p>
                  An online grocery web app where we can order some food items  .
                </p>
                <div>
                  <SiTailwindcss />
                  <SiHtml5 />
                  <SiReact/>

                  <SiMongodb/>
                  <SiReactrouter/>
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://krishnastore.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/harsh-2025/Krishnastore.git"
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
