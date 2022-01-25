import React from 'react'
import Portfolio from './Portfolio'
import Cabin from './assets/img/portfolio/cabin.png'
import Cake from './assets/img/portfolio/cake.png'
import Circus from './assets/img/portfolio/circus.png'
import Safe from './assets/img/portfolio/safe.png'
import Game from './assets/img/portfolio/game.png'
import Submarine from './assets/img/portfolio/submarine.png'

const PortfolioSection = () =>(
<section className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                   
                    <div className="col-md-6 col-lg-4 mb-5">
                        <Portfolio img={Cabin}/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                           <Portfolio img={Cake}/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                          <Portfolio img={Circus}/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                          <Portfolio img={Game}/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                           <Portfolio img={Safe}/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                           <Portfolio img={Submarine}/>
                    </div>
                </div>
            </div>
        </section>
);

export default PortfolioSection;