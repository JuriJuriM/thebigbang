import React from 'react'
import './Main.scss'
import First from '../../assets/img/first.jpg'
import Second from '../../assets/img/second.jpg'
import Third from '../../assets/img/third.jpg'
import Fourth from '../../assets/img/fourth.jpg'
import Fivth from '../../assets/img/fivth.jpg'
import Last from '../../assets/img/last.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__title'>The Big Bang Theory</div>
                    <div className='main__first'>
                        <img src={First} alt='First' />
                    </div>
                    <div className='main__text'>The Big Bang Theory is an American television sitcom created by Chuck Lorre and Bill Prady, both of whom served as executive producers and head writers on the series, along with Steven Molaro. It aired on CBS from September 24, 2007, to May 16, 2019, running for 12 seasons and 279 episodes.</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Fourth} alt='Fourth' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text1'>The show originally centered on five characters living in Pasadena, California: Leonard Hofstadter (Johnny Galecki) and Sheldon Cooper (Jim Parsons), both physicists at Caltech, who share an apartment; Penny (Kaley Cuoco), a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's similarly geeky and socially awkward friends and coworkers, aerospace engineer Howard Wolowitz (Simon Helberg) and astrophysicist Raj Koothrappali (Kunal Nayyar).</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text1'>Over time, supporting characters were promoted to starring roles, including neuroscientist Amy Farrah Fowler (Mayim Bialik), microbiologist Bernadette Rostenkowski (Melissa Rauch), and comic book store owner Stuart Bloom (Kevin Sussman).</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Third} alt='Third' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Second} alt='Second' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text1'>The show was filmed in front of a live audience and produced by Chuck Lorre Productions and Warner Bros. Television. It received mixed reviews throughout its first season, but reception was more favorable in the second and third seasons.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text1'>It was nominated for the Emmy Award for Outstanding Comedy Series from 2011 to 2014 and won the Emmy Award for Outstanding Lead Actor in a Comedy Series four times for Parsons, totaling seven Emmy Awards from 46 nominations.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Fivth} alt='Fivth' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Last} alt='Last' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text1'>Parsons also won the Golden Globe for Best Actor in a Television Comedy Series in 2011. A prequel series, Young Sheldon, based on Parsons' character Sheldon Cooper, premiered in 2017, with Parsons reprising his role as the narrating adult Sheldon. Another spinoff is in development.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main