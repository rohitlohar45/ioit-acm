import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'Faculty guide',
        name: 'Dr. Meenakshi Thalor',
        designation: 'Faculty Guide',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://in.linkedin.com/in/meenakshi-thalor-03937840'
            },
           
        ]
       
    },
    {
        image: 'Omkar Danave',
        name: 'Omkar Danave',
        designation: 'Chair',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/omdanave'
            },
           
        ]
       
    },
    {
        image: 'Anshika Singh',
        name: 'Anshika Singh',
        designation: 'Vice-Chair',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/anshika-singh-374612212'
            },
           
        ]
       
    },
    {
        image: 'Sharvin Shah',
        name: 'Sharvin Shah',
        designation: 'Secretary',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://in.linkedin.com/in/meenakshi-thalor-03937840'
            },
           
        ]
       
    },
    {
        image: 'yash yegare',
        name: 'Yash Yegare',
        designation: 'Treasurer',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/yashyegare'
            },
           
        ]
       
    },
    {
        image: 'AVAL SONIGARA',
        name: 'Aval Sonigara',
        designation: 'Adminstrator',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/aval-sonigara-397718220'
            },
           
        ]
       
    },
    {
        image: 'Rohit Lohar',
        name: 'Rohit Lohar',
        designation: 'Webmaster',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/loharrohit45'
            },
           
        ]
       
    },
    {
        image: 'Anurag Gargote',
        name: 'Anurag Gargote',
        designation: 'Technical head',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/anurag-gargote-205204200'
            },
           
        ]
       
    },
    {
        image: 'Akshita Ghanwat',
        name: 'Akshita Ghanwat',
        designation: 'Documentation head',
        Location: 'Pune,India',
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/akshitaghanwat'

            },
           
        ]
       
    },
    
    {
        image: 'Saadgi Pandey',
        name: 'Saadgi Pandey',
        designation: 'Media Head',
        location: 'Pune,India', 
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/saadgi-pandey-ab9818224'
            },
        ]
      
    },
    {
        image: 'Lalita Bari',
        name: 'Lalita Bari',
        designation: 'Coordinator Head',
        location: 'Pune.India', 
        
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/lalita-bari-175b9b227'
            },
            
        ]
        
    },
]

const TeamTwo = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    <span className="team-form">
                                        <img src="./images/team/location.svg" alt="Corporate React Template" />
                                        <span className="location">{data.location}</span>
                                    </span>
                                    <p className="description">{data.description}</p>

                                    <ul className="social-icon social-default icon-naked mt--20" >
                                        {data.socialNetwork.map((social, index) =>
                                            <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                        )}
                                    </ul>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TeamTwo;
