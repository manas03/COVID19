import React, { Component } from "react";
import guide from "./pdf/Guidelines.pdf";
import masks from "./pdf/masks.pdf";
import Distancing from "./pdf/SocialDistancing.pdf";
import Comic from "./pdf/kidscomicCovid19.pdf";
import PosterE from "./pdf/Poster_Corona_Eng.pdf";
import PosterH from "./pdf/Poster_Corona_Hin.pdf";

class FAQ extends Component {
  render() {
    return (
        <div className='bg' >
      <div className=" bg my-5 py-5">
        <h4 className="px-3">FAQs</h4>
        <ul style={{ listStyleType: "square" }} className="py-3">
          <li className="py-1">
            <a href={guide} download style={{ color: "black" }}>
              How to self quarantine
            </a>
          </li>
          <li className="py-1">
            <a href={masks} download style={{ color: "black" }}>
              Guidelines on Use of masks
            </a>
          </li>

          <li className="py-1">
            <a href={Distancing} download style={{ color: "black" }}>
              Advisory on Social Distancing
            </a>
          </li>
          <li className="py-1">
            <a href={Comic} download style={{ color: "black" }}>
              Understanding COVID-19(for kids)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PL1a9DHjZmejE-Ep2PAu2OR8HBfLP0BLIk"
              style={{ color: "black" }}
            >
              Management Videos{" "}
            </a>
          </li>
        </ul>
        <h4 className="px-3">Do's and Don'ts</h4>
        <ul className='py-2' style={{ listStyleType: "square" }}>
          <li>
            <a href={PosterE} download style={{ color: "black" }}>
              English
            </a>
          </li>
          <li>
            <a href={PosterH} download style={{ color: "black" }}>
              Hindi
            </a>
          </li>
        </ul>
        <h1  className="text-center py-5" >-----</h1>
      </div>
      </div>
    );
  }
}
export default FAQ;
