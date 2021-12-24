import React from 'react'

export const AboutUs = () => {
    return (
    <>
      <div id="aboutus">
        <div class="left">
          <div class="aboutush2">
            <h2>About Us</h2>
          </div>
          <div class="aboutusp">
            <p>
              GOOGLE DEVELOPER STUDENT CLUBS ARE UNIVERSITY BASED COMMUNITY GROUPS FOR STUDENTS INTERSTED IN GOOGLE DEVELOPER TECHNOLOGIES.STUDENTS FROM ALL UNDERGRADUATE OR GRADUATE PROGRAMS WITH AN INTEREST IN GROWING AS DEVELOPER ARE WELCOME BY JOINING A GDSC, STUDENTS GROW THEIR KNOWLEDGE IN A PEER-TO-PEER LEARNING ENVIRONMENT AND BUILD SOLUTIONS FOR LOCAL BUSINESSES AND THEIR COMMUNITY.
            </p>
          </div>
          <button type="button" class="btn btn-danger btnjoin" name="button">Join Us</button>
          <div class="aboutussocial">
            <h2>Socials</h2>
            <span>
              <div class="social">
                <a href="mailto:" target="_blank"><i class="fas fa-at fa-2x" aria-hidden="true"></i></a>
                <a href="tel:"><i class="fas fa-mobile-alt fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/" target="_blank"><i class="fab fa-linkedin fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube fa-2x" aria-hidden="true"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></a>
              </div>
            </span>
          </div>
        </div>
        <div class="right">
          <div class="aboutusimg">
            <img class="abtusimg" src="\images\compimg.png" alt="computerimageimg"></img>
          </div>
          <div class="aboutusimages">
            <i class="fab fa-java fa-5x"></i>
            <i class="fab fa-js-square fa-5x"></i>
            <i class="fab fa-html5 fa-5x"></i>
            <i class="fab fa-css3-alt fa-5x"></i>
            <i class="fab fa-android fa-5x"></i>
            <i class="fab fa-python fa-5x"></i>
            <i class="fab fa-react fa-5x"></i>
            <i class="fab fa-git fa-5x"></i>
            <i class="fab fa-node-js fa-5x"></i>
          </div>
        </div>
      </div>
    </>
		)
}
