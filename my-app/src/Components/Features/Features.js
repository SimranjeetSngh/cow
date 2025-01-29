import React from 'react';
import Feature from './Feature';
import './Features.css';
import icon2 from '../../Images/whychooseus/icon/ecommerce.png'
import icon1 from '../../Images/whychooseus/icon/flexible-cms.png'
import icon3 from '../../Images/whychooseus/icon/page-speed.png'
import icon4 from '../../Images/whychooseus/icon/responsive-design.png'

const featureData = [
    {
        id:1,
        title: 'STRATEGIC ADVERTISING',
        description: ['STRATEGY', 'BRAND POSITIONING', 'MAINLINE COMMUNICATION' ,'MEDIA PLANNING']
    },
    {
        id:2,
        icon: icon3,
        title: 'NEW ERA COMMUNICATION',
        description: ['SOCIAL MEDIA MARKETING','DIGITAL MARKETING','SOCIAL MEDIA CONTENT','INFLUENCER MARKETING']
    },
    {
        id:3,
        icon: icon2,
        title: 'EYE -CATCHING DESIGN',
        description: [
            "BRAND IDENTITY","LOGO & PACKAGING","EXPERIENCE DESIGN","RETAIL SPACE"
        ]
    },
    {
        id:4,
        icon: icon1,
        title: 'INNOVATIVE PRODUCTION',
        description: [
            "DIGITAL FILM","TELEVISION FILM","CORPORATE FILM","FILM PRODUCTION"
        ]
    },
    {
        id:5,
        icon: icon1,
        title: 'PASSIONATELY PROACTIVE',
        description: [
            "WE ARE CONTINUALLY AWAKE AND AWARE, TO RECOGNISE OPPORTUNITIES, AND FIRE IDEAS ON THE CLIENT’S BEHALF"
        ]
    }
]



const  Features = () =>{
    return (
        <div className="features-container   m-auto">
            <div className="text-center pt-5">
                <h4 style={{fontWeight:'300', marginBottom:'10px'}}>WHY CHOOSE US</h4>
                <h2 style={{fontSize:'45px'}}>FEATURES</h2>
            </div>
            <div className="row  m-auto">
                {
                    featureData.map(data =><Feature data={data} key={featureData.id}></Feature>)
                }
            </div>

            <div className="text-center mt-5">
                <p style={{fontWeight:'600'}}>Increase your business success with technology. <a href="">Let’s get started</a></p>
            </div>
        </div>
    )
}

export default Features
