import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto">
              <p className="font-weight-normal lead">
                Covider is your one stop for everything related to Corona Virus.
              </p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead">
                View the latest ups and downs of stock market, browse the news,
                have alook at the official twitter feeds of WHO and other
                important accounts and don't forget to visit the information tab
                to learn about basic knowledge related to this pandemic.
              </p>
            </div>
          </div>
          <div className="text-center  mt-5">
            <h4>Meet the Developers</h4>
            <div className="border rounded border-info text-left my-4">
              <div className="p-3">
                <h5>Rachit Singhal</h5>
                <p>Btech (CS) student</p>
                <a
                  href="https://github.com/rachitsmrh"
                  style={{ color: "cyan" }}
                >
                  Github Account
                </a>
              </div>
            </div>

            <div className="border rounded border-info text-left my-4">
              <div className="p-3">
                <h5>Manas Sahai</h5>
                <p>Btech (CS) student</p>
                <a href="https://github.com/manas03" style={{ color: "cyan" }}>
                  Github Account
                </a>
              </div>
            </div>

            <div className="border rounded border-info text-left my-4">
              <div className="p-3">
                <h5>Vipul Baghel</h5>
                <p>Btech (Electronics) student</p>
                <a href="https://github.com/V-gpu" style={{ color: "cyan" }}>
                  Github Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//  <div class="text-center mt-4">
//         <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
//           <i class="fas fa-download mr-2"></i>
//           Free Download!
//         </a>
//       </div>
