import React from 'react'
import { Flex, Heading, Image } from 'components/atoms'
import { Footer } from 'components/organisms'
import styles from './styles.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Plx from 'react-plx';

const anchorLinks = [
    {
      start: '100',
      duration: 200,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
  ];
  const anchorLinksText = [
    {
      start: '#rebrand',
      startOffset: '90vh',
      duration: 1,
      properties: [
        {
          startValue: '#ffffff',
          endValue: '#272A2C',
          property: 'color',
        },
      ],
    },
    {
        start: '#redefined',
        startOffset: '90vh',
        duration: 1,
        properties: [
          {
            startValue: '#272A2C',
            endValue: '#ffffff',
            property: 'color',
          },
        ],
      },
  ];
  const anchorLinksBlocks = [
    {
      start: '#redefined',
      duration: 1,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
  ];
  const PlxUp1 = [
    {
      start: 'self',
      duration: '100vh',
      properties: [
        {
          startValue: 100,
          endValue: -100,
          property: 'translateY',
        },
      ],
    },
  ];
  const PlxDown1 = [
    {
      start: 'self',
      duration: '100vh',
      properties: [
        {
          startValue: -100,
          endValue: 100,
          property: 'translateY',
        },
      ],
    },
  ];
  const PlxDown2 = [
    {
      start: 'self',
      duration: '100vh',
      properties: [
        {
          startValue: -200,
          endValue: 200,
          property: 'translateY',
        },
      ],
    },
  ];
  const PlxRotateUp1 = [
    {
      start: 'self',
      duration: '140vh',
      properties: [
        {
          startValue: 0,
          endValue: -45,
          property: 'rotate',
        },
      ],
    },
    {
        start: 'self',
        duration: '140vh',
        properties: [
          {
            startValue: 100,
            endValue: -100,
            property: 'translateY',
          },
        ],
      },
  ];

const TwentyEighteen = () => {
    return (
    <div className={styles.pagestyles}>
        {/* anchor links */}
        <Plx
            className={styles.anchorLinks}
            parallaxData={ anchorLinks }>

                <AnchorLink href='#top'>
                    <Plx className={styles.anchorBlock} parallaxData={anchorLinksBlocks}></Plx>
                    <Plx className={styles.anchorText} parallaxData={anchorLinksText} >Top</Plx>
                </AnchorLink>
                <AnchorLink offset='100' href='#team'>
                    <Plx className={styles.anchorBlock} parallaxData={anchorLinksBlocks}></Plx>
                    <Plx className={styles.anchorText} parallaxData={anchorLinksText} >Team</Plx>
                </AnchorLink>
                <AnchorLink href='#products-launched'>
                    <Plx className={styles.anchorBlock} parallaxData={anchorLinksBlocks}></Plx>
                    <Plx className={styles.anchorText} parallaxData={anchorLinksText} >Products Launched</Plx>
                </AnchorLink>
                <AnchorLink offset='200' href='#rebrand'>
                    <Plx className={styles.anchorBlock} parallaxData={anchorLinksBlocks}></Plx>
                    <Plx className={styles.anchorText} parallaxData={anchorLinksText} >Brand</Plx>
                </AnchorLink>
                <AnchorLink href='#projects-completed'>
                    <Plx className={styles.anchorBlock} parallaxData={anchorLinksBlocks}></Plx>
                    <Plx className={styles.anchorText} parallaxData={anchorLinksText} >Projects Completed</Plx>
                </AnchorLink>
        </Plx>
        

        {/* header */}
        <Plx className={styles.headerPlx} parallaxData={ PlxDown2 }>
            <Flex id="header" className={styles.header} align="center" justify="center">
                <div>20</div>
                <div>UX</div>
                <div>18</div>
            </Flex>
        </Plx>

        {/* banner */}
        <section id="top" className={styles.banner}>
        <Plx className={styles.title} parallaxData={ PlxUp1 }>
            <h1 className={styles.f1}>Annual Report</h1>
        </Plx>
            <div className={styles.circle}>
                <svg width="100%" height="100%" viewBox="0 0 850 850" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="50%" fill="#006DE7"></circle>
                </svg>
            </div>
            <div className={styles.biggestcircle}>
                <svg width="100%" height="100%" viewBox="0 0 850 850" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="50%" stroke="#fff" stroke-width="1" stroke-dasharray="1, 10"></circle>
                </svg>
            </div>
            <div className={styles.square}></div>
            <div className={styles.dashedcircle}>
                <svg width="100%" height="100%" viewBox="0 0 461 461" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M230.5 459C356.697 459 459 356.697 459 230.5S356.697 2 230.5 2 2 104.303 2 230.5 104.303 459 230.5 459z" stroke="#006DE7" stroke-width="4" stroke-linejoin="round" stroke-dasharray="1 10"/></svg>
            </div>
            <div className={styles.circle}>
                <svg width="100%" height="100%" viewBox="0 0 850 850" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="49.4%" stroke="#006DE7" stroke-width="12"></circle>
                </svg>
            </div>
            <div className={styles.pie}>
                <svg width="100%" height="100%" viewBox="0 0 438 457" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 438.5C0 196.49 196.053.27 438 0v457H.383A446.101 446.101 0 0 1 0 438.5z" fill="#000"/></svg>
            </div>
        </section>

        {/* team overview */}
        <section id="team" className={styles.team}>
            <Plx parallaxData={ PlxRotateUp1 } className={styles.circle}><svg width="100%" height="100%" viewBox="0 0 461 461" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="48%"  stroke="#006DE7" stroke-width="4" stroke-linejoin="round" stroke-dasharray="1 10"></circle></svg></Plx>
            <Flex className={styles.designers}>
                <Flex align="center" className={styles.designersHired}>
                    <h2 className={styles.textHuge}>
                        09
                        <div className={styles.f3}>Designers</div>
                        <div className={styles.f3}>Hired</div>
                    </h2>
                </Flex>
                <Flex className={styles.designerRatios} direction="column">
                    <Flex justify="center" align="center" direction="column" className={styles.designersToDev}>
                        <Flex direction="column" className={styles.devBlocks}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Flex>
                        <div className={styles.psmall}>Designers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Devs</div>
                    </Flex>
                    <svg viewBox="0 0 516 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.5" y1="0.5" x2="516" y2="0.5" stroke="white" stroke-linejoin="round" stroke-dasharray="1 8"/>
                    </svg>
                    <Flex justify="center" align="center" direction="column" className={styles.designersToProjects}>
                        <Flex flexWrap="wrap" className={styles.projectBlocks}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Flex>
                        <div className={styles.psmall}>Designers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects</div>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justify="space-around" className={styles.stats}>
                <Flex direction="column" justify="center" align="center">
                    <div className={styles.f3Large}>371</div>
                    <div className={styles.pLarge}>Projects</div>
                </Flex>
                <Flex direction="column" justify="center" align="center">
                    <div className={styles.f3Large}>371</div>
                    <div className={styles.pLarge}>Projects</div>
                </Flex>
                <Flex direction="column" justify="center" align="center">
                    <div className={styles.f3Large}>371</div>
                    <div className={styles.pLarge}>Projects</div>
                </Flex>
            </Flex>
            <Flex className={styles.sketchToFigma}>
                <Flex justify="center" direction="column" align="center" className={styles.sketch}>
                    <img src="images/2018/sketch.png" />
                    <div className={styles.p}>Bye, <span>Sketch</span></div>
                </Flex>
                <Flex justify="center" direction="column" align="center" className={styles.figma}>
                    <img src="images/2018/figma.png" />
                    <div className={styles.p}>Hello, <span>Figma</span></div>
                </Flex>
                <div className={styles.arrow}><svg viewBox="0 0 195 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.74846e-07" y1="6" x2="162" y2="6.00001" stroke="#006DE7" stroke-width="4" stroke-linejoin="round" stroke-dasharray="1 10"/>
                <path d="M194.5 6L188.5 10.7631V1.23686L194.5 6Z" fill="#006DE7"/>
                </svg></div>
            </Flex>
        </section>
        {/* products launched */}
        <section id="products-launched" className={styles.productsLaunched}>
            <div className={styles.textMega}>04</div>
            <Plx parallaxData={ PlxUp1 } className={styles.f2}>Products Launched</Plx>
            <Flex justify="space-between" align="center" position="relative" className={styles.products}>
                <div className={styles.pSmall}>Analytics Cloud</div>
                <div className={styles.dotSmall}></div>
                <div className={styles.pSmall}>Commerce</div>
                <div className={styles.dotSmall}></div>
                <div className={styles.pSmall}>Digital Experience Platform</div>
                <div className={styles.dotSmall}></div>
                <div className={styles.pSmall}>DXP Cloud</div>
            </Flex>
            <div className={styles.circle}>
                <svg width="100%" height="100%" viewBox="0 0 850 850" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="50%" fill="#006DE7"></circle>
                </svg>
            </div>
            <div className={styles.biggestcircle}>
                <svg width="100%" height="100%" viewBox="0 0 850 850" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="50%" stroke="#fff" stroke-width="0.5" stroke-dasharray="0.5, 5"></circle>
                </svg>
            </div>
        </section>

        {/* brand */}
        <section id="rebrand" className={styles.brand}>
            <div className={styles.navDark}></div>
            <h2 className={styles.textHuge}>Brand</h2>
            <Flex justify="space-between" align="center">
                <div className={styles.liferayLogo}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 94"><path d="M66 16H20c-2.2 0-4 1.8-4 4v46c0 2.2 1.8 4 4 4h46c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zM32 51c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm10 30c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-20c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm10 30c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-20c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm10 30c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6z" fill="#0b63ce"/><path d="M114.4 65.3H90.7v-49c0-.3-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5v52.6c0 .3.2.5.5.5h27.9c.3 0 .5-.2.5-.5v-3.2c0-.2-.2-.4-.5-.4zm35.1-35.2h-8.4v-7.8c0-5.5 1.8-8.2 5.5-8.2 1.5 0 3 .4 4.4 1 .1.1.3.1.4 0l.3-.3 1-2.9c.1-.2 0-.5-.3-.6-1.9-.8-4-1.3-5.8-1.3-6.4 0-10 4.3-10 12v8.1l-4.8.3c-.3 0-.5.2-.5.5v2.7c0 .3.2.5.5.5h4.8v34.8c0 .3.2.5.5.5h3.5c.3 0 .5-.2.5-.5V34.1h8.4c.3 0 .5-.2.5-.5v-3.1c0-.2-.2-.4-.5-.4zm18.2-1c-8.3 0-17.2 7.3-17.2 20.7 0 12.1 7.5 20.6 18.2 20.6 5.7 0 9.2-1.9 12.4-3.8.2-.1.3-.4.2-.7l-1.5-2.7c-.1-.1-.2-.2-.3-.2s-.3 0-.4.1c-3.2 2.3-6.4 3.3-10 3.3-8.1 0-13.6-6.3-13.9-15.6h27.1c.2 0 .4-.2.5-.4.2-1 .2-2.1.2-3-.2-11.5-5.8-18.3-15.3-18.3zm-12.6 17.7c.9-8.1 6-13.7 12.6-13.7 6.9 0 10.7 4.9 10.8 13.7h-23.4zM208.4 30c-1.2-.6-2.4-.8-4-.8-4 0-7.8 2.5-10.7 7.2l-.3-5.8c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5V69c0 .3.2.5.5.5h3.5c.3 0 .5-.2.5-.5V43c2.4-6 6.1-9.5 10-9.5 1.4 0 2 .2 3.3.6h.4c.1-.1.2-.2.2-.3l.8-3.2c.1-.3 0-.5-.2-.6zm31.6.1h-3.1c-.3 0-.5.2-.5.5l-.2 2.9c-3.3-2.6-6.5-4.3-11.1-4.3-10.2 0-17.5 8.7-17.5 20.7 0 12.9 6.1 20.6 16.4 20.6 4.2 0 8.4-1.9 12.3-5.5l.3 4.1c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5V30.6c-.1-.3-.3-.5-.6-.5zm-4 7.8v22.3c-4.1 4.2-7.7 6-11.5 6-7.6 0-12.2-6.2-12.2-16.5 0-9.3 5.7-16.6 13-16.6 3.8.1 7 1.5 10.7 4.8zm42.2-7.6c-.1-.1-.2-.2-.4-.2h-3.6c-.2 0-.4.1-.5.3l-8.2 24.1c-.4 1.3-.9 2.7-1.3 4.1-.6 2-1.3 4-1.9 5.8-.8-2-1.6-4.2-2.4-6.3-.5-1.3-1-2.5-1.4-3.7l-9.2-24.1c-.1-.2-.3-.3-.5-.3H245c-.2 0-.3.1-.4.2-.1.1-.1.3 0 .5l15.7 38.9-1 3.2c-1.5 4.5-4.3 9.8-9.4 9.8-1 0-2.2-.3-3-.6h-.4l-.3.3-.8 3.1c-.1.2.1.5.3.6 1.1.5 2.7.8 4.1.8 5.9 0 10.5-4.5 13.4-13l15.1-43.2c.1 0 0-.2-.1-.3zm-153.8-8.9c.6 0 1.1-.5 1.1-1.1v-3.6c0-.6-.5-1.1-1.1-1.1h-3.6c-.6 0-1.1.5-1.1 1.1v3.6c0 .6.5 1.1 1.1 1.1h3.6zm-3.6 8.7h3.5c.3 0 .5.2.5.5V69c0 .3-.2.5-.5.5h-3.5c-.3 0-.5-.2-.5-.5V30.6c0-.3.2-.5.5-.5z" fill="#101820"/></svg>
                </div>
                <p className={styles.p}>Nunc in velit venenatis, tempor enim id, sodales eros. Integer rutrum ipsum ac dolor tempus, in lobortis lorem imperdiet. Ut malesuada lectus ac aliquet suscipit. Nullam rhoncus, diam vitae maximus finibus, orci leo dictu.</p>
            </Flex>
            <Flex className={styles.waffles} justify="space-between" align="center">
                <Flex justify="center" align="center" className={styles.blackWaffle}>
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 27a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4v46a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4V27zm8 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm-19 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm21-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zM31 52a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm21-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm-19 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6z" fill="#fff"/></svg>
                </Flex>
                <Flex justify="center" align="center" className={styles.blueWaffle}>
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 27a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4v46a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4V27zm8 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm-19 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm21-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zM31 52a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm21-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm-19 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6z" fill="#0B63CE"/></svg>
                </Flex>
            </Flex>
        </section>

        {/* redefined */}
        <section id="redefined" className={styles.redefined}>
            <h2 className={styles.textLarge}>Redefined</h2>
            <p className={styles.p}>Nunc in velit venenatis, tempor enim id, sodales eros. Integer rutrum ipsum ac dolor tempus, in lobortis lorem imperdiet. Ut malesuada lectus ac aliquet.</p>
        </section>

        {/* projects completed */}
        <section id="projects-completed" className={styles.projectsCompleted}>
            <div className={styles.textMega}>87</div>
            <Plx parallaxData={ PlxUp1 } className={styles.f2}>Projects Completed</Plx>
        </section>
        <Footer />
    </div>
    )
}

export default TwentyEighteen
