import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Flex, Heading, Image } from 'components/atoms'
import styles from './styles.module.scss'
import { Footer } from 'components/organisms'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Plx from 'react-plx'
import { PrincipleCard, PrinciplesHeader } from 'pages/principles/components/_index'

// const ChildLink = React.createClass({
// 	render: function() {
// 	  return (
// 		<a href={this.props.linkHref}>{this.props.linkText}</a>
// 	  )
// 	}
//   });


const Principles = () => {
	return (
		<div className={styles.pagestyles}>
			<PrinciplesHeader />
			<AnchorLink href="#principles" className={styles.scrollDown}>
				<svg
					className={styles.downArrow}
					width="39"
					height="48"
					viewBox="0 0 39 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21.5587 1.03906C21.5587 0.470534 21.0978 0.00965071 20.5293 0.00965071C19.9608 0.00965071 19.4999 0.470534 19.4999 1.03906H21.5587ZM20.5293 44.9606H19.4999V47.4459L21.2572 45.6885L20.5293 44.9606ZM37.7278 29.2179C38.1298 28.8159 38.1298 28.1642 37.7278 27.7621C37.3258 27.3601 36.674 27.3601 36.272 27.7621L37.7278 29.2179ZM19.4999 1.03906V44.9606H21.5587V1.03906H19.4999ZM21.2572 45.6885L37.7278 29.2179L36.272 27.7621L19.8014 44.2327L21.2572 45.6885Z"
						fill="#0B63CE"
					/>
					<path
						d="M14.7576 40.8219C15.1483 41.2349 15.1302 41.8865 14.7172 42.2772C14.3042 42.6679 13.6526 42.6498 13.2619 42.2367L14.7576 40.8219ZM1.25213 29.5407C0.861434 29.1276 0.879532 28.4761 1.29255 28.0854C1.70557 27.6947 2.3571 27.7128 2.7478 28.1258L1.25213 29.5407ZM13.2619 42.2367L1.25213 29.5407L2.7478 28.1258L14.7576 40.8219L13.2619 42.2367Z"
						fill="#3B3945"
					/>
				</svg>
			</AnchorLink>

			<Flex direction="column" align="center" justify="center" className={styles.cardWrap} id="principles">
				<PrincipleCard 
					symbol="/images/principles/symbol-intentional.svg"
					name="Intentional" 
					description="Eliminate unnecessary complexity. Be easy to understand, regardless of the user's experience, knowledge, language skills, or current concentration level." wordOne="Simple"
					wordTwo="Intuitive"
					wordThree="Effective" 
					questionOne="Are my designs passing <a href='https://www.nngroup.com/articles/ten-usability-heuristics/'>heuristics tests</a>?"
					questionTwo="Are my designs reducing problem complexity by addressing simple and focused tasks?"
					questionThree="Are my designs achieving the business goal?"
					questionFour="Are my designs adding value to the system?"
					questionFour="Can I articulate the value my design is adding to the user?"
				/>
				<PrincipleCard 
					symbol="/images/principles/symbol-inclusive.svg"
					name="Inclusive" 
					description="Design for real people, not stereotyped personas. Reflect reality, use expected, consistent patterns and natural metaphors."
					wordOne="Universal"
					wordTwo="Open Source Design"
					wordThree="Consistent"
					questionOne="Are my designs passing <a href='https://www.w3.org/WAI/ER/tools/'>accessibility tests</a>?"
					questionTwo="Am I designing in a non-discriminative way?"
					questionThree="Am I empowering my users to do their tasks?"
					questionFour="Are we contributing to the design community?"
					questionFive="Do I know the groups and the people that my designs are for?"
				/>
				<PrincipleCard 
					symbol="/images/principles/symbol-honest.svg"
					name="Honest" 
					description="Be clear, transparent, and straightforward. Respect people’s needs and resources, like attention and time."
					wordOne="Affordances"
					wordTwo="Transparent"
					wordThree="People Centered"
					questionOne="Am I using the correct <a href='Am I using the correct affordances to solve the problem?'>affordances</a> to solve the problem?"
					questionTwo="Are you testing and validating your designs with people?"
					questionThree="Am I using dark patterns?"
					questionFour="Are my designs ethical?"
					questionFive="Am I working to continuously reduce the cognitive load for users?"
				/>
				<PrincipleCard 
					symbol="/images/principles/symbol-pleasurable.svg"
					name="Pleasurable" 
					description="Design products that all people enjoy using. Intentionally produce your best, down to the minutiae."
					wordOne="Emotions"
					wordTwo="Genuine"
					wordThree="Reliable"
					questionOne="Am I spending time with users to understand their emotions?"
					questionTwo="Are people better for experiencing the work we do?"
					questionThree="Do people find delight and joy when experiencing our designs?"
					questionFour="Are my designs performant, functional, and usable?"
					questionFive="Is my design authentic and based in timeless principles?"
				/>
			</Flex>
		</div>
	)
}

export default Principles
