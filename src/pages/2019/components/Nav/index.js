import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Plx from 'react-plx'
import styles from '../../styles.module.scss'

export default class Nav extends Component {
	constructor(props) {
        super(props);

        this.state = {
			navOpen: false,
			menuButtonStyles: {
				borderRadius: '50%',
				width: '64px',
				height: '64px',
				bottom: '16px',
				right: '16px',
			},
			span: {
				opacity: 0,
			},
			close: {
				opacity: 1,
			}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({navOpen: !this.state.navOpen})
    }

	render() {
		// if(this.state.navOpen) {

		// }
		// else {
		// 	this.state.menuButton = {}
		// 	this.state.span = {}
		// 	this.state.close = {}
		// }
		return (
			<Plx id="nav" className={`${styles.anchorLinks} ${this.state.navOpen ? "navOpen" : ""}`} >
				<button className={styles.menuButton} onClick={this.toggle}>
					<span>Menu</span>
				</button>
				<div className={styles.linkWrapper} >
					<AnchorLink href="#top" >
						<Plx
							className={styles.anchorBlock}
						/>
						<Plx className={styles.anchorText}>
							Top
						</Plx>
					</AnchorLink>
					<AnchorLink offset="100" href="#team">
						<Plx
							className={styles.anchorBlock}
						/>
						<Plx className={styles.anchorText}>
							Team
						</Plx>
					</AnchorLink>
					<AnchorLink href="#growth">
						<Plx
							className={styles.anchorBlock}
						/>
						<Plx className={styles.anchorText}>
							Growth
						</Plx>
					</AnchorLink>
					<AnchorLink offset="200" href="#projects">
						<Plx
							className={styles.anchorBlock}
						/>
						<Plx className={styles.anchorText}>
							Projects
						</Plx>
					</AnchorLink>
					<AnchorLink href="#ops">
						<Plx
							className={styles.anchorBlock}
						/>
						<Plx className={styles.anchorText}>
							Ops
						</Plx>
					</AnchorLink>
				</div>
			</Plx>
		)
	}
}
