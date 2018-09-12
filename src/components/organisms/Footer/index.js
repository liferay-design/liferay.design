import { Flex, Heading, Icon, Text } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.container}>
			<Flex className={styles.footer} direction="column">
				<Flex
					className={styles.textContainer}
					justify="space-between"
					flexWrap="wrap"
				>
					<Heading color="white" level={3}>
						Liferay.Design
					</Heading>

					<Flex className={styles.social} justify="space-between">
						<a target="_blank" href="https://www.dribbble.com/liferay">
							<Icon fill="white" name="dribbble" />
						</a>
						<a target="_blank" href="https://github.com/liferay-design/liferay.design">
							<Icon fill="white" name="github" />
						</a>
						<a target="_blank" href="https://www.instagram.com/liferay_ux/">
							<Icon fill="white" name="instagram" />
						</a>
						<a target="_blank" href="https://www.linkedin.com/company/83609">
							<Icon fill="white" name="linkedin" />
						</a>
						<a target="_blank" href="https://www.medium.com/liferaydesign">
							<Icon fill="white" name="medium" />
						</a>
						<a target="_blank" href="https://twitter.com/liferaydesign">
							<Icon fill="white" name="twitter" />
						</a>
					</Flex>
				</Flex>

				<Flex className={styles.credits} justify="space-between" flexWrap="wrap">
					<Text color="#C0C0C0" size="0.8rem">
						Part of <a target="_blank" href="https://liferay.com">Liferay, Inc</a>
					</Text>
					<Text color="#C0C0C0" size="0.8rem">
						Powered by  <a target="_blank" href="http://gatsbyjs.org/">Gatsby</a> and <a href="https://wedeploy.com">WeDeploy™</a>
					</Text>
				</Flex>
			</Flex>
		</footer>
	)
}

export default Footer

// import { Provider, Base, Link } from 'reakit'


// const dark = {
// 	Base: {
// 		backgroundColor: "black",
// 	}
// };

// const light = {
// 	Base: {
// 		backgroundColor: "white",
// 		color: "black",
// 	},
// 	Link: {
// 		fill: "blue",
// 	}
// };

// export const Footer = () => {
// 	return (
// 		<Provider theme={light}>
// 			<Base as="footer" className={styles.container}>
// 				<Flex className={styles.footer} direction="column">
// 					<Flex
// 						className={styles.textContainer}
// 						justify="space-between"
// 						flexWrap="wrap"
// 					>
// 						<Heading color="white" level={3}>
// 							Liferay.Design
// 						</Heading>

// 						<Flex className={styles.social} justify="space-between">
// 							<Link target="_blank" href="https://www.dribbble.com/liferay">
// 								<Icon name="dribbble" />
// 							</Link>
// 							<a target="_blank" href="https://github.com/liferay-design/liferay.design">
// 								<Icon fill="white" name="github" />
// 							</a>
// 							<a target="_blank" href="https://www.instagram.com/liferay_ux/">
// 								<Icon fill="white" name="instagram" />
// 							</a>
// 							<a target="_blank" href="https://www.linkedin.com/company/83609">
// 								<Icon fill="white" name="linkedin" />
// 							</a>
// 							<a target="_blank" href="https://www.medium.com/liferaydesign">
// 								<Icon fill="white" name="medium" />
// 							</a>
// 							<a target="_blank" href="https://twitter.com/liferaydesign">
// 								<Icon fill="white" name="twitter" />
// 							</a>
// 						</Flex>
// 					</Flex>

// 					<Flex className={styles.credits} justify="space-between" flexWrap="wrap">
// 						<Text color="#C0C0C0" size="0.8rem">
// 							Part of <a target="_blank" href="https://liferay.com">Liferay, Inc</a>
// 						</Text>
// 						<Text color="#C0C0C0" size="0.8rem">
// 							Powered by  <a target="_blank" href="http://gatsbyjs.org/">Gatsby</a> and <a href="https://wedeploy.com">WeDeploy™</a>
// 						</Text>
// 					</Flex>
// 				</Flex>
// 			</Base>
// 		</Provider>
// 	)
// }

// export default Footer