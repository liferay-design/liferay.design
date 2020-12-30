/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Button, Container, Flex, Heading, Link, Text } from 'components/atoms'
import KeyArt from 'pages/2020/components/KeyArt'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const BillboardAlt = ({
	annualReport,
	image,
	heading,
	subtitle,
	cta,
	background,
	ctaUrl,
}) => {
	return (
		<div className={styles.wrapper} style={{ background: `${background}` }}>
			<Container>
				<Flex className={styles.container}>
					{annualReport ? (
						<Flex
							className={styles.image}
							sx={{ backgroundColor: 'black', alignItems: 'center' }}
						>
							<KeyArt />
						</Flex>
					) : null}
					{image ? (
						<Flex
							className={styles.image}
							style={{
								background: `${'url(' + image + ') center/cover'}`,
							}}
						/>
					) : null}
					<Flex
						className={styles.text}
						direction="column"
						align="flex-start"
						justify="space-between"
					>
						<Heading
							color={background == 'white' ? 'black' : 'white'}
							className={styles.headline}
							level={2}
						>
							{heading}
						</Heading>
						<Text
							color={background == 'white' ? 'black' : 'white'}
							margin="xxLarge"
						>
							{subtitle}
						</Text>
						<Button
							renderAs="a"
							to={ctaUrl}
							size="medium"
							weight="heavy"
							className={styles.button}
						>
							{cta}
						</Button>
					</Flex>
				</Flex>
			</Container>
		</div>
	)
}

BillboardAlt.propTypes = {
	image: PropTypes.string,
	heading: PropTypes.string,
	subtitle: PropTypes.string,
	cta: PropTypes.string,
	ctaUrl: PropTypes.string,
	background: PropTypes.string,
}

export default BillboardAlt
