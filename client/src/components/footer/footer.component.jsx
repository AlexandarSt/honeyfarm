import React from 'react';
import Icon from '../svg/svg.component';

import './footer.styles.scss';

const Footer = () => (
    <div>
        <footer className='md-foot'>
            <section className='md-foot__upper-wrap'>
                <div className='md-foot__col'>
                    <h2 className='md-section-title'>Pratite nas</h2>
                    <div className='icon-row'>
                        <span className='icon-container'>
                            <a href='/' target="_blank">
                                <Icon 
                                    name="facebook" 
                                    width="58px" 
                                    height="66px" 
                                    title="facebook" 
                                    fill="#C9C9C9"
                                    polygon={<polygon id="polygon" fill="#4C4C4C" opacity="0.630440848" points="33 0 61.5788383 16.5 61.5788383 49.5 33 66 4.42116168 49.5 4.42116168 16.5" className="md-social-icon"></polygon>} 
                                />
                            </a>
                        </span>
                        <span className='icon-container'>
                            <a href='/' target="_blank">
                                <Icon 
                                    name="instagram" 
                                    width="58px" 
                                    height="66px" 
                                    title="instagram"
                                    fill="#C9C9C9"
                                    polygon={<polygon id="polygon" fill="#4C4C4C" opacity="0.630440848" points="33 0 61.5788383 16.5 61.5788383 49.5 33 66 4.42116168 49.5 4.42116168 16.5" className="md-social-icon"></polygon>} 
                                />
                            </a>
                        </span>
                        <span className='icon-container'>
                            <a href='mailto:alexstweb@gmail.com' target="_blank">
                                <Icon 
                                    name="email" 
                                    width="58px" 
                                    height="66px" 
                                    title="email"
                                    fill="#C9C9C9"
                                    polygon={<polygon id="polygon" fill="#4C4C4C" opacity="0.630440848" points="33 0 61.5788383 16.5 61.5788383 49.5 33 66 4.42116168 49.5 4.42116168 16.5" className="md-social-icon"></polygon>}  
                                />
                            </a>
                        </span>
                    </div>
                    <h4 className='md-section-title-2'>Ostanimo u kontaktu i pratite nas putem socijalnih mreža</h4>
                </div>
                <div className='md-foot__col'>
                    <h4 className='md-section-title-3'>Kontaktirajte nas i putem telefona</h4>
                    <h4 className='md-section-title-3'>
                        <Icon 
                            name="phone" 
                            fill="#C9C9C9" 
                            title="phone" 
                            width="42.062px" 
                            height="42.062px"
                        />
                        <span>+381 64 1234567</span></h4>
                    <h4 className='md-section-title-3'>
                        <Icon 
                            name="location" 
                            fill="#C9C9C9" 
                            title="location" 
                            width="28px" 
                            height="28px"
                        />
                        <span><i>Despotovac, Srbija</i></span></h4>
                </div>
            </section>
            <section className="md-foot__lower-wrap">
                <div className="md-foot__lower-nav">
                    <div className="md-foot__col">
                        <span className="copyright"><p>Napravljeno i razvijeno u Srbiji.</p>
                        <p>© 2020 Honey Farm. Sva prava zadržana.</p></span>
                    </div>
                    <div className="md-foot__col">
                        <ul className="md-foot__nav">
                            <li className="md-foot__nav-item"><a href="/">Privatnost</a></li>
                            <li className="md-foot__nav-item"><a href="/">Uslovi korišćenja</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    </div>
)

export default Footer;