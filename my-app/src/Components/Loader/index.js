import React, { useState, useEffect, useRef } from "react";
import "./styles.css"; // Import CSS for animation
import gsap from "gsap";

import {useGSAP} from "@gsap/react";
    const Loader = ({ setLoading }) => {
      const svgRef = useRef(null); // Create a ref to the SVG element
      useEffect(() => {
        // Ensure the SVG has been rendered and svgRef is not null
        if (svgRef.current) {
          const timeline = gsap.timeline();
    
          const paths = svgRef.current.querySelectorAll('path');
          
          if (paths.length > 0) {
            paths.forEach((path, index) => {
              // GSAP animation: drawing effect
              timeline.fromTo(
                path,
                {
                  strokeDasharray: path.getTotalLength(),
                  strokeDashoffset: path.getTotalLength(),
                  stroke: 'black',
                  fill: 'transparent',
                  opacity: 1
                },
                {
                  strokeDashoffset: 1, // animate to stroke-dashoffset 0 (drawn path)
                  duration: 4,          // adjust duration for speed of drawing
                  delay: index * 0.2   // stagger the drawing effect slightly
                }
              );
            });
          }
        }
    
        // Clean up GSAP animations when component unmounts
        return () => {
          if (svgRef.current) {
            const paths = svgRef.current.querySelectorAll('path');
            paths.forEach((path) => {
              gsap.killTweensOf(path); // Stop all ongoing animations
            });
          }
        };
      }, []);
      useGSAP(() => {
        
        gsap.fromTo(
          ".logo-name",
          {
            opacity: 0, // start from invisible
            y: 20,      // start from slightly below
          },
          {
            opacity: 1, // fade in
            y: 0,       // slide to normal position
            duration: 0.8, // animation duration for each letter
            stagger: 0.1,  // stagger each letter's animation by 0.1 seconds
            delay: 0* 0.2       // delay the text animation a bit after the SVG finishes drawing
          }
        );
    },);
        useEffect(() => {
          // Wait for 5 seconds, then hide the loader
          const timer = setTimeout(() => {
            setLoading(false);
          }, 1500);
      
          return () => clearTimeout(timer); // Cleanup timer
        }, [setLoading]);
      
        return (
          <div className="loader-container">
         <svg
        ref={svgRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="40%"
        height="40%"
        viewBox="0 0 80 80"
      >
<path d="M0 0 C0.99 0 1.98 0 3 0 C3.7425 0.804375 4.485 1.60875 5.25 2.4375 C8.54404449 5.50695055 10.5871762 5.74042213 15 6 C15.66 4.68 16.32 3.36 17 2 C19.64 2 22.28 2 25 2 C25.66 3.32 26.32 4.64 27 6 C33.09090419 5.25190011 33.09090419 5.25190011 37.875 1.875 C38.24625 1.25625 38.6175 0.6375 39 0 C39.99 0 40.98 0 42 0 C42.29739545 5.05572261 41.93209648 7.84619666 39 12 C39 12.33 39 12.66 39 13 C40.05960938 12.98839844 41.11921875 12.97679687 42.2109375 12.96484375 C43.59895658 12.95546524 44.98697755 12.94636511 46.375 12.9375 C47.07367188 12.92912109 47.77234375 12.92074219 48.4921875 12.91210938 C53.7734375 12.88671875 53.7734375 12.88671875 56 14 C55.52264808 20.32491289 55.52264808 20.32491289 53.5 22.9375 C49.71687979 24.54532609 46.05279715 24.23381522 42 24 C42.04640625 24.68964844 42.0928125 25.37929688 42.140625 26.08984375 C42.44918093 34.12331778 40.91913622 39.75715046 36.36328125 46.37890625 C34.71113237 49.55538733 34.78479497 51.5161005 35 55.0625 C35.32474465 60.42755223 35.32474465 60.42755223 33.69921875 63.29296875 C30.24653001 66.76153192 25.74799673 66.94063518 21.0625 67.3125 C16.55959954 67.18961383 13.07365283 65.89635563 9 64 C6.6508591 60.47628864 6.90897769 59.41676276 7.1875 55.3125 C7.3170746 48.99383268 5.60791968 45.96513085 2 41 C-0.5766435 35.47862108 -0.19118612 29.96925544 0 24 C-0.59167969 24.05800781 -1.18335938 24.11601562 -1.79296875 24.17578125 C-6.23937663 24.42965446 -8.33168949 24.47736465 -12.0625 21.8125 C-14.13037986 18.81073891 -14.50709429 17.54966001 -14 14 C-10.81175432 12.40587716 -7.37103338 12.89825265 -3.875 12.9375 C-3.12089844 12.94201172 -2.36679687 12.94652344 -1.58984375 12.95117188 C0.27347127 12.96296501 2.13674555 12.98090058 4 13 C3.525625 12.566875 3.05125 12.13375 2.5625 11.6875 C-0.63952169 8.22931657 -0.08417775 4.46142071 0 0 Z M17.2890625 6.609375 C16.73992188 7.31578125 16.19078125 8.0221875 15.625 8.75 C13.36454409 11.51978611 11.82159716 13.11321718 8.75 15.0625 C5.26575296 17.51731041 3.95455631 19.95671677 3 24 C1.52966579 32.56952362 4.77618632 38.68375131 9 46 C9.99 46 10.98 46 12 46 C14.05925681 42.91111478 14.2390374 42.29064073 14.125 38.8125 C14.063125 36.9253125 14.063125 36.9253125 14 35 C12.02 34.34 10.04 33.68 8 33 C7.91878076 31.39667209 7.86070866 29.79215974 7.8125 28.1875 C7.77769531 27.29417969 7.74289063 26.40085937 7.70703125 25.48046875 C8 23 8 23 9.32421875 21.23828125 C11 20 11 20 14 19 C13.51917969 19.39832031 13.03835937 19.79664063 12.54296875 20.20703125 C10.62608175 22.43450247 10.52258357 23.78834669 10.3125 26.6875 C10.24675781 27.49574219 10.18101563 28.30398437 10.11328125 29.13671875 C10.07589844 29.75160156 10.03851562 30.36648437 10 31 C11.98 31.66 13.96 32.32 16 33 C16.39130435 45.2173913 16.39130435 45.2173913 14 50 C12.515 50.495 12.515 50.495 11 51 C10.67 52.98 10.34 54.96 10 57 C11.65 57.33 13.3 57.66 15 58 C15.66 59.98 16.32 61.96 17 64 C19.64 64 22.28 64 25 64 C25.66 62.02 26.32 60.04 27 58 C29.475 57.505 29.475 57.505 32 57 C31.67 55.02 31.34 53.04 31 51 C30.01 51 29.02 51 28 51 C27.855625 50.21625 27.71125 49.4325 27.5625 48.625 C27.12201075 46.03578982 27.12201075 46.03578982 26 44 C25.92966231 42.12620395 25.9156978 40.24998898 25.9375 38.375 C25.94652344 37.37210938 25.95554687 36.36921875 25.96484375 35.3359375 C25.97644531 34.56507812 25.98804687 33.79421875 26 33 C27.98 32.34 29.96 31.68 32 31 C31.505 26.05 31.505 26.05 31 21 C31.66 21 32.32 21 33 21 C34.26237731 23.52475462 34.09856404 25.31200466 34.0625 28.125 C34.05347656 29.03507812 34.04445313 29.94515625 34.03515625 30.8828125 C34.02355469 31.58148438 34.01195313 32.28015625 34 33 C32.02 33.66 30.04 34.32 28 35 C27.40763416 40.71337373 27.40763416 40.71337373 30 45.5 C30.66 45.995 31.32 46.49 32 47 C37.10836721 39.14247334 39.90168945 33.5729363 39 24 C37.41119282 17.75069176 34.17837465 15.25013344 29.1484375 11.64453125 C27 10 27 10 24.6875 7.0625 C24.130625 6.381875 23.57375 5.70125 23 5 C19.09411124 4.54322855 19.09411124 4.54322855 17.2890625 6.609375 Z M5 8 C5 8.66 5 9.32 5 10 C7.39719432 10.67958603 7.39719432 10.67958603 10 11 C10.66 10.34 11.32 9.68 12 9 C9.69 8.67 7.38 8.34 5 8 Z M36 8 C34.02 8.33 32.04 8.66 30 9 C30.66 9.66 31.32 10.32 32 11 C34.60280568 10.67958603 34.60280568 10.67958603 37 10 C36.67 9.34 36.34 8.68 36 8 Z M-11 16 C-9.77992056 18.6905528 -9.77992056 18.6905528 -8 21 C-2.67326964 21.33856828 -2.67326964 21.33856828 2 19 C2 18.01 2 17.02 2 16 C-2.62921525 14.9838308 -6.34462607 15.16203269 -11 16 Z M40 16 C40.34786708 17.97536745 40.34786708 17.97536745 41 20 C44.04983996 21.52491998 46.6423369 21.23562548 50 21 C51.9846938 19.76913958 51.9846938 19.76913958 53 18 C53 17.34 53 16.68 53 16 C46.474566 14.99607024 46.474566 14.99607024 40 16 Z M11 60 C11.33 60.66 11.66 61.32 12 62 C12.66 61.67 13.32 61.34 14 61 C13.01 60.67 12.02 60.34 11 60 Z M29 60 C28.67 60.66 28.34 61.32 28 62 C28.99 61.67 29.98 61.34 31 61 C30.34 60.67 29.68 60.34 29 60 Z " fill="#000000" transform="translate(19,7)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C4 1.32 4 2.64 4 4 C2.68 4 1.36 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(49,43)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C4 1.32 4 2.64 4 4 C2.68 4 1.36 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(27,43)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 1.66 3 2.32 3 3 C2.01 3 1.02 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#000000" transform="translate(46,25)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.66 2 2.32 2 3 C1.01 3 0.02 3 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#000000" transform="translate(39,24)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C2.67 0.99 2.34 1.98 2 3 C1.34 2.67 0.68 2.34 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(34,25)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.99 2 1.98 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#000000" transform="translate(43,54)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.99 2 1.98 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#000000" transform="translate(39,54)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.99 2 1.98 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#000000" transform="translate(35,54)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.66 3 1.32 3 2 C2.01 2 1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(42,25)"/>
</svg>



<div class="name-container">
<div class="logo-name">COW INNOVATIONS</div>
</div>
    </div>
        );
      };

export default Loader;

