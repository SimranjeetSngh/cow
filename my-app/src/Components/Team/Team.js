import React from 'react';
import './Team.css';
import ceo from '../../Images/team/ceo.png'


const Team=()=> {
    return (
        <div id="rs-team" class="rs-team style2 modify1 pt-100 pb-100 md-pt-70 md-pb-70">
            <div class="" style={{width: '90%', margin: 'auto'}}>
                <div class="sec-title5 text-center mb-50 md-mb-35">
                    <span class="sub-title new-title pb-7">Expert People</span>
                    <h2 class="title title2 pb-5">Our Founder</h2>
                </div>
                <div className=" row d-flex" >
                    <div class="col-md-4 team-item-wrap p-5">
                        <div class="team-wrap">
                            <div class="image-inner">
                                <a href="team-single.html"><img src={ceo} alt="" /></a>
                            </div>
                        </div>
                        <div class="team-content text-center">
                            <h4 class="person-name"><a href="team-single.html">SATYEN PARAB</a></h4>
                            <span class="designation">President & CEO</span>
                            <span class="team-social">
                                <a href="https://www.behance.net/SatyenParab"><i class="fa fa-behance">:-Behance</i></a>
                               
                            </span>
                        </div>
                    </div>
                    
                    <div class="col-md-8 p-5">
                <div class="founder-description">
                    <h3 class="founder-title">About Satyen Parab</h3>
                    <p class="founder-bio">
                        Satyen Parab is the visionary founder and CEO of our company. With over 15 years of experience in the industry, he has led the organization to unprecedented heights through his innovative thinking and leadership. His passion for excellence and commitment to delivering value to clients have been the driving force behind our success.
                    </p>

                    <div class="experience-section mt-4">
                        <h4 class="section-title">EXPERIENCE</h4>
                        <ul class="experience-list">
                            <li>CREATIVE GROUP HEAD - BATES ENTERPRISE</li>
                            <li>ASSOCIATE CREATIVE DIRECTOR - PUBLICIS INDIA</li>
                            <li>CREATIVE DIRECTOR - EVEREST BRAND SOLUTIONS</li>
                            <li>CREATIVE DIRECTOR AND HEAD OF ART - SCARECROW COMMUNICATIONS</li>
                            <li>EXECUTIVE CREATIVE DIRECTOR - SALT BRAND SOLUTIONS</li>
                            <li>ASSISTANT DIRECTOR - MOVIES</li>
                            <li>PLAYWRITER, ART DIRECTOR, DIRECTOR, ACTOR - PERFORMING ART OF THEATER</li>
                        </ul>
                    </div>

                    <div class="highlights-section mt-4">
                        <h4 class="section-title">HIGHLIGHTS</h4>
                        <ul class="highlights-list">
                            <li>GOLD, SILVER, BRONZE - BIG BANG AWARDS (BANGALORE AD CLUB)</li>
                            <li>SILVER, BRONZE - MADDYS AWARDS (MADRAS AD CLUB)</li>
                            <li>8 FINALIST - GOAFEST ABBYS (THE ADVERTISING CLUB)</li>
                            <li>WORK SHOWCASED AS THE BEST IN ASIA WITHIN BATES ASIA NETWORK</li>
                            <li>THE FINK TANK LOGO - SHORTLISTED IN THE WORLDWIDE CONTEST</li>
                            <li>BEST WRITER, BEST ART DIRECTOR AND BEST ACTOR - PERFORMING ART OF THEATER</li>
                            <li>STATE ART AWARDS - MAHARASHTRA GOVERNMENT</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Team
