import React from "react";
import "../css/main.css";
import "../css/animate.css";
import "../css/bootstrap.min.css";
// import '../css/font-awesome.min.css'
// import '../css/prettyPhoto.css'
import "../css/price-range.css";
import "../css/responsive.css";
// import "../fonts/glyphicons-halflings-regular.eot";
// import "../fonts/glyphicons-halflings-regular.ttf";

function HeaderTop() {
  return (
    <header id="header">
      <div class="header_top">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 ">
              <div class="contactinfo">
                <ul class="nav nav-pills">
                  <li>
                    <a href="phone">
                      <i class="fa fa-phone"></i> +55 38 9 9970-8560
                    </a>
                  </li>
                  <li>
                    <a href="envelope">
                      <i class="fa fa-envelope"></i> vitor.diamantino8@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="social-icons pull-right">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="faceboo">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="dribbble">
                      <i class="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="google">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderTop;
