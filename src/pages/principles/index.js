import { Flex } from 'components/atoms'
import { Footer } from 'components/organisms'
import { PrincipleCard, PrinciplesHeader } from 'pages/principles/components/_index'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from './styles.module.scss'

const questionsIntentional = [
	<span>
		Are my designs passing{' '}
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.nngroup.com/articles/ten-usability-heuristics/"
		>
			heuristics tests
		</a>
		?
	</span>,
	'Are my designs reducing problem complexity by addressing simple and focused tasks?',
	'Are my designs achieving the business goal?',
	'Are my designs adding value to the system?',
	'Can I articulate the value my design is adding to the user?',
]

const descriptorsIntentional = ['Simple', 'Intuitive', 'Effective']

const questionsInclusive = [
	<span>
		Are my designs passing{' '}
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.w3.org/WAI/ER/tools/"
		>
			accessibility tests
		</a>
		?
	</span>,
	'Am I designing in a non-discriminative way?',
	'Am I empowering my users to do their tasks?',
	'Are we contributing to the design community?',
	'Do I know the groups and the people that my designs are for?',
]

const descriptorsInclusive = ['Universal', 'Open', 'Consistent']

const questionsHonest = [
	<span>
		Am I using the correct{' '}
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="Am I using the correct affordances to solve the problem?"
		>
			affordances
		</a>{' '}
		to solve the problem?
	</span>,
	'Are you testing and validating your designs with people?',
	'Am I using dark patterns?',
	'Are my designs ethical?',
	'Am I working to continuously reduce the cognitive load for users?',
]

const descriptorsHonest = ['Affordant', 'Transparent', 'Human']

const questionsPleasurable = [
	'Am I spending time with users to understand their emotions?',
	'Are people better for experiencing the work we do?',
	'Do people find delight and joy when experiencing our designs?',
	'Are my designs performant, functional, and usable?',
	'Is my design authentic and based in timeless principles?',
]

const descriptorsPleasurable = ['Emotions', 'Genuine', 'Reliable']

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

			<Flex
				direction="column"
				align="center"
				justify="center"
				className={styles.cardWrap}
				id="principles"
			>
				<PrincipleCard
					symbol="/images/principles/symbol-intentional.svg"
					name="Intentional"
					description="Eliminate unnecessary complexity. Be easy to understand, regardless of the person's knowledge or concentration level."
					wordOne="Simple"
					descriptors={descriptorsIntentional}
					questions={questionsIntentional}
					plxSide={styles.plxElementLeft}
					plxElement="/images/principles/plx-triangle.svg"
				/>
				{/* <Plx className={styles.plxElementLeft} parallaxData={PlxUp3}>
					<img src="/images/principles/plx-triangle.svg" />
				</Plx> */}
				<PrincipleCard
					symbol="/images/principles/symbol-inclusive.svg"
					name="Inclusive"
					description="Design for real people, not stereotyped personas. Reflect reality; use expected, contextual patterns and natural metaphors."
					descriptors={descriptorsInclusive}
					questions={questionsInclusive}
					plxSide={styles.plxElementRight}
					plxElement="/images/principles/plx-doughnut.svg"
				/>
				{/* <Plx className={styles.plxElementRight} parallaxData={PlxUp3}>
					<img src="/images/principles/plx-doughnut.svg" />
				</Plx> */}
				<PrincipleCard
					symbol="/images/principles/symbol-honest.svg"
					name="Honest"
					description="Be clear, transparent, and straightforward. Respect people’s needs and resources, like attention and time."
					descriptors={descriptorsHonest}
					questions={questionsHonest}
					plxSide={styles.plxElementLeft}
					plxElement="/images/principles/plx-square.svg"
				/>
				{/* <Plx className={styles.plxElementLeft} parallaxData={PlxUp3}>
					<img src="/images/principles/plx-square.svg" />
				</Plx> */}
				<PrincipleCard
					symbol="/images/principles/symbol-pleasurable.svg"
					name="Pleasurable"
					description="Design products that all people enjoy using. Intentionally produce your best, down to the minutiae."
					descriptors={descriptorsPleasurable}
					questions={questionsPleasurable}
				/>
			</Flex>
			{/* <PrinciplesFooter /> */}
			<Footer light />
		</div>
	)
}

export default Principles
