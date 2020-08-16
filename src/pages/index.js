import React from "react"
import { Link, graphql } from "gatsby"
import HeroHeader from "../components/hero-header";
import Image from "../components/image"
import Layout from "../components/layout"
import ContactForm from '../components/contact-form'
import SEO from "../components/seo"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWordpress, faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap, faSass, faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faDesktop, faRocket} from '@fortawesome/pro-light-svg-icons'

const IndexPage = ({data}) => {
    const {title, description, occupation, socialLinks} = data.site.siteMetadata;
    const {twitter, linkedin, github} = socialLinks;
return (    
<Layout>
    <SEO title={occupation} description={description} />   
        <HeroHeader >
            <div className="row pt-4 pt-lg-5 pb-2 text-white">
                <div className="col-md-8 order-2 order-lg-0">
                    <p className="h1 font-weight-normal text-capitalize">Hi, I'm Andreas 👋</p>
                    <h1 className="lead"><mark className="shadow-sm"><span className="font-weight-bold">Front-end web developer</span> for ReactJS, NodeJS, GatsbyJS and Bootstrap</mark></h1>
                    <p className="font-weight-normal mt-4 p-0 mb-0 mb-md-3">I'm a front end web developer in Cyprus, who specialises in building <strong>responsive website</strong>, <strong>progressive web application</strong> and <strong>web performance optimization</strong>. Lately, I focused primarily on ReactJS, GatsbyJS, GraphQL and NodeJS development.</p>
                    { /*
                    <div className="d-flex">
                        <a href="#" className="btn btn-outline-light px-4 mr-3">Contact me</a>
                        <a href="#" className="btn btn-success px-4">Hire me</a>
                    </div>
                    */ }
                </div>
                
                <div className="col-md mb-4 mb-lg-0 my-lg-auto order-1 order-lg-0">
                    <Image filename="common/andreas.jpg" alt="Andreas Eracleous" className="rounded shadow mb-1" style={{maxWidth:'160px'}} />
                    <div className="d-flex justify-content-between" style={{maxWidth:'160px'}}>
                    <a href={twitter.link} target="_blank" rel="noopener noreferrer" className="p-1 text-white"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a href={linkedin.link} target="_blank" rel="noopener noreferrer" className="p-1 text-white"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a href={github.link} target="_blank" rel="noopener noreferrer" className="p-1 text-white"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block" />
            <div className="d-none d-md-flex flex-wrap">
                <p className="my-auto font-weight-normal m-0 text-white">I'M GREAT AT:</p>
                <div className="d-flex flex-wrap text-center text-white">
                    <div className="d-flex flex-column">
                        <FontAwesomeIcon icon={faHtml5} size="3x" className="my-2 mx-4" /> 
                        <small>HTML5</small>
                    </div>
                    <div className="d-flex flex-column">
                    <FontAwesomeIcon icon={faCss3Alt} size="3x" className="my-2 mx-4" />
                    <small>CSS3</small>
                    </div>
                    <div className="d-flex flex-column">
                    <FontAwesomeIcon icon={faJs} size="3x" className="my-2 mx-4" />
                    <small>JS</small>
                    </div>
                    <div className="d-flex flex-column">
                    <FontAwesomeIcon icon={faBootstrap} size="3x" className="my-2 mx-4" />
                    <small>Bootstrap</small>
                    </div>
                    <div className="d-flex flex-column">
                    <FontAwesomeIcon icon={faReact} size="3x" className="my-2 mx-4" />
                    <small>ReactJS</small>
                    </div>
                    <div className="d-flex flex-column">
                    <FontAwesomeIcon icon={faNodeJs} size="3x" className="my-2 mx-4" />
                    <small>NodeJS</small>
                    </div>
                    <div className="d-flex flex-column">
                    <FontAwesomeIcon icon={faSass} size="3x" className="my-2 mx-4" />
                    <small>SASS</small>
                    </div>
                </div>
            </div>
            <hr/>
            <p className="text-white font-weight-normal mt-3 mb-0">Specialize in front end development with knowledge in back end development.</p>
        </HeroHeader>  
{
    /*
    <section id="about" className="container mt-5">
            <h3 className="h4 font-weight-normal text-uppercase mb-4">About</h3>
            <p className="font-weight-bold">Hi, I’m Andreas and I live in Cyprus in a small beautiful island. I am primarily a Front-end Web Developer with a background in computer science and passion for web technology. I work independently as Freelance Web Developer by helping companies and individuals collaborate remotely using an online freelancing platform called Upwork.</p>
            <p>Web for me is not simply another avenue of the computing industry but it represents the future of what we will be interacting with. I have a strong technical background and I have been fortunate to work as a developer.</p>
            <p>Front end developments are where my heart is at the moment but I see the place for Back end developments how they will evolve in the future.</p>
            <p>As a freelancer I have developed a bunch responsive websites and on a number of Android applications.</p>
            <Link to="/about" className="btn btn-sm btn-primary float-right">Read more</Link>
          
    </section>
    */
    }

    <section id="services" className="container mt-5 pb-5">

        <h2 className="h4 font-weight-normal text-uppercase ">WHAT I OFFER</h2>
        <div className="row">
            <div className="col-md-6 col-lg mt-4">
                <article className="d-flex flex-column bg-white shadow rounded p-4 h-100">
                    <header className="d-flex mb-3 text-primary">
                        <FontAwesomeIcon icon={faDesktop} size="4x" />
                        <h3 className="h5 text-capitalize font-weight-normal my-auto ml-2">PSD to Bootstrap conversion</h3>
                    </header>
                    <p>A proper website converted to a responsive web layout to run successfully in mosts popular browsers and devices helping you have more business and visitors.</p>
                    <p>A beautiful website will gain visitor’s trust with your company making them spend more money with you.</p>
                    <Link to="/services/website-conversion" className="btn btn-primary mt-auto">Click Here To Learn More</Link>
                </article>
            </div>
            <div className="col-md-6 col-lg mt-4">
                <article className="d-flex flex-column bg-white shadow rounded p-4 h-100">
                    <header className="d-flex mb-3 text-primary">
                        <FontAwesomeIcon icon={faRocket} size="4x" />
                        <h3 className="h5 text-capitalize font-weight-normal my-auto ml-2">Make web faster</h3>
                    </header>
                    <p>It’s a fact that <strong>Google now counts site speed as a SEO ranking factor</strong>. The better loading time the higher it will rank on Google and the more traffic you will earn. If your website doesn’t load in less than <strong>3 secs</strong> you will lose more or <strong>less 40%</strong> of the potential business.</p>
                    <p>Don’t make your customer wait and go to your competitor!</p>
                    <Link to="/services/website-speed" className="btn btn-primary mt-auto">Click Here To Learn More</Link>
                </article>
            </div>

            <div className="col-md-6 col-lg mt-4">
                <article className="d-flex flex-column bg-white shadow rounded p-4 h-100">
                    <header className="d-flex mb-3 text-primary">
                        <FontAwesomeIcon icon={faWordpress} size="4x" />
                        <h3 className="h5 text-capitalize font-weight-normal my-auto ml-2">Setup WordPress</h3>
                    </header>
                    <p>WordPress is one of the most popular and reliable platform in the online world, where you easily manage your website without having any web programming skills.</p>
                    <p>Have WordPress installed into your hosting account, <strong>fast</strong> without worrying about any technical skills and issues.</p>
                    <Link to="/services/setup-wordpress" className="btn btn-primary mt-auto">Click Here To Learn More</Link>
                </article>
            </div>
        </div>
        
        <article>
        <h3 className="h4 font-weight-normal text-uppercase mt-5 mb-4">Why you might want to hire me</h3>
        <p className="mb-0">I have over 10 years of web development experience that I can definitely help you with your front-end web developments.</p>
        <p className="">All these years of work experience I help several clients and companies collaborate remotely to build responsive websites and web applications.</p>
        <p className="">My mission is to perform your project successfully like it was my own project. I will work hard and make sure to get everything done for you, on time. Sometimes I even work extra time when it is needed to perfect a job from a client without more charging.</p>
        <p className="m-0">I have a strong desire to make sure you are happy and I won’t disappoint you.</p>
        <hr/>
        <p>I am currently available on UpWork for front-end development jobs. I can help you with: <strong>website performance optimization</strong>, <strong>Wordpress site</strong> and <strong>conversion design to Bootstrap</strong>, <strong>HTML, CSS, JS code</strong> in which adaptive and <strong>responsive templates</strong> for all devices by using the latest web technologies.</p>
        <p className="p-0 m-0">Top Rated Freelancer on <a href="https://www.upwork.com/fl/andreaseracleous" target="_blank" rel="noopener noreferrer">UpWork</a></p>
        </article>
    </section>
    
    <div id="work" className="bg-primary text-white py-5 border-dark border-top border-bottom">
        <section className="container">
            <h2 className="h4 font-weight-normal text-uppercase text-center">Check out a few of my project, I've worked on.</h2>
            <p className="h5 font-weight-normal m-0 text-center">I help several clients and companies collaborate remotel to build responsive websites and applications.</p>

            <article className="row mt-5">
                <figure className="col-lg-5">
                    <Image filename="projects/websites/cryptocoininvest/cryptocoininvest.png" alt="Crypto Coin Invest" className="rounded shadow" />
                </figure>
                <div className="col-lg">
                    <header>
                        <h3 className="h5">Crypto Coin Invest</h3>
                    </header>
                    <p>It is a web app for cryptocurrencies to quickly and easily filter crypto coins. Using filters, the user can handle the crypto data faster and see undervalued coins, based on their market cap.</p>
                    <p>CryptoCoinInvest is built on a VueJS framework for faster DOM (Document Object Model) manipulation and data utilization of the app. On the backend CryptoCoinInvest uses an NodeJS tech on DigitalOcean using components and services to handle REST API of data.</p>
                    <a href="https://cryptocoininvest.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light">Visit website</a>
                </div>
            </article>

            <article className="row mt-5">

                <figure className="col-lg-5">
                    <Image filename="projects/websites/energi/energi.png" alt="Energi" className="rounded shadow" />
                </figure>
                <div className="col-lg">
                    <header>
                        <h3 className="h5">Energi</h3>
                    </header>
                    <p>Energi significantly improves upon the self-funded governance concepts found in projects like Dash and Smartcash, and has the largest treasury fund out of any cryptocurrency.</p>
                    <p>Energi (NRG) is developed on Bootstrap framework to be responsive on mobile devices using HTML, CSS, and JS tech. Implemented in WordPress platform and Optimized the code for better web performance.</p>
                    <a href="https://www.energi.world/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light">Visit website</a>
                </div>
            </article>

            <article className="row mt-5">

                <figure className="col-lg-5">
                    <Image filename="projects/websites/maida/maida.png" alt="Energi" className="rounded shadow" />
                </figure>
                <div className="col-lg">
                    <header>
                        <h3 className="h5">Maida</h3>
                    </header>
                    <p>Maida is a website for Pipe Relining business on Sydney.</p>
                    <p>Worked on Maida website for fixing JavaScript, CSS, and HTML issues code and improving responsive pages, implementing new features, improving UI/UX design and SEO.</p>
                    <a href="https://www.maida.com.au/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light">Visit website</a>
                </div>

            </article>

        </section>
    </div>

    <section className="container text-center mt-5 pb-5">
        <h3 className="h4 font-weight-normal text-uppercase">Testimonials</h3>
        <p className="h5 font-weight-normal">Few people have said about Andreas</p>
        <p className="m-0">Trusted by <a href="https://www.upwork.com/fl/andreaseracleous" target="_blank" rel="noopener noreferrer" className="text-primary">UpWork</a></p>
        <div className="row">
            <div className="col-md-6 col-lg">
                <blockquote className="bg-white shadow rounded p-4 mt-4">
                    <Image filename="testimonials/ryan-goodman.jpeg" alt="Ryan Goodman" className="mx-auto rounded-circle" style={{width: '100px'}} />
                    <h4 className="h5 mt-3 font-weight-normal">Ryan Goodman</h4>
                    <p className="font-weight-light">I have worked with Andreas for over a year on various JavaScript based applications. He is everything you want in a developer. He is consistent, asks the right questions, is clever, and always seems to get the job done right. He has assisted me in many customer projects requiring HTML5 / Javascript dashboards and transactional apps. I highly recommend Andreas.</p>
                </blockquote>
            </div>
            <div className="col-md-6 col-lg">
                <blockquote className="bg-white shadow rounded p-4 mt-4">
                    <Image filename="testimonials/joel-ahern.jpeg" alt="Joel Ahern" className="mx-auto rounded-circle" style={{width: '100px'}} />
                    <h4 className="h5 mt-3 font-weight-normal">Joel Ahern</h4>
                    <p className="font-weight-light">Of the 20 something web developers &amp; digital marketers I have used for various tasks in the past year, Andreas is the first person I talk to when I have an idea. He takes ideas and makes them better than you were originally thinking and he never asks you to review something that isn't finished.</p>
                    <p className="font-weight-light">The quality of his code and creativity is worlds class. It's a joy to work with someone where things get done to such high quality without the need for lots of revisions. He has a bright future ahead of him, but for as long as he is available, he is my go to dev.</p>
                </blockquote>
            </div>
            <div className="col-md-6 col-lg">
                <blockquote className="bg-white shadow rounded p-4 mt-4">
                    <Image filename="testimonials/justin-atlan.jpeg" alt="Justin Atlan" className="mx-auto rounded-circle" style={{width: '100px'}} />
                    <h4 className="h5 mt-3 font-weight-normal">Justin Atlan</h4>
                    <p className="font-weight-light">Andreas, thanks so much for being our go to guy to get anything front-end up on the web as fast and efficiently as possible. You always go the extra mile and you always over-deliver. Thanks for being a great part of our team whenever we need you!</p>
                </blockquote>
            </div>
        </div>
    </section>

    <div id="contact" className="bg-white py-5">
        <section className="container">
            <h3 className="h4 font-weight-normal text-uppercase text-center">Contact</h3>
            <p className="h5 font-weight-normal m-0 mb-5 text-center">Estimates, questions, information? Don't hesitate to contact me.</p>
            <ContactForm />
            <p className="small mt-2 mb-3">Quick respond in 24 hours or less.</p>
        </section>
    </div>
</Layout>
)
}

export default IndexPage
export const pageQuery = graphql`
query {
    site {
        siteMetadata {
            title
            description
            occupation
          socialLinks {
            facebook {
              name
              link
            }
            github {
              name
              link
            }
            instagram {
              name
              link
            }
            linkedin {
              name
              link
            }
            twitter {
              name
              link
            }
          }
        }
    }
}
`