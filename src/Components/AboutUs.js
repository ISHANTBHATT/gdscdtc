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
                <a href="mailto:" target="_blank"><i class="fas fa-at" aria-hidden="true"></i></a>
                <a href="tel:"><i class="fas fa-mobile-alt" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube" aria-hidden="true"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a>
              </div>
            </span>
          </div>
        </div>
        <div class="right">
          <div class="aboutusimg">
            <img class="abtusimg" src="\images\compimg.png" alt="computerimageimg"></img>
          </div>
          <div class="aboutusimages">
            <i class="fab fa-java"></i>
            <i class="fab fa-js-square"></i>
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <i class="fab fa-android"></i>
            <i class="fab fa-python"></i>
            <i class="fab fa-react"></i>
            <i class="fab fa-git"></i>
          </div>
        </div>
      </div>
    </>
		)
}
