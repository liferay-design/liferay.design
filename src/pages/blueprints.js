import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'

export default ({ data }) => {
	return (
		<div>
			<MainLayout section="Blueprints" >
				<section class="teasers" id="teasers">
					<div class="container-fluid container-fluid-max-lg">
						<div class="row mb-4">
							<div class="col-1 d-none d-md-block">
								<div class="vertical-title text-uppercase text-nowrap">Explore Blueprints</div>
							</div>

							<div class="col-md-5 text-center">
								<a class="card" href="/docs/about.html">
									<div class="wow fadeInUp">
										<div class="card-body">
										<img class="mx-auto" src="/images/home/why-blueprints.svg" alt="" />
											<h2 class="font-weight-bold">Why Blueprints?</h2>
											<p>A single source of truth for Liferay so that we can go far, together.</p>
											<p class="btn btn-sm text-uppercase font-weight-bold"><img class="mr-2" src="/images/home/chevron-right.svg" alt=""/>Read More</p>
									</div>
								</div>
								</a>
							</div>
							<div class="col-md-5 text-center mt-4 mt-md-0">
								<a class="card" href="/docs/resources/logo-files.html">
									<div class="wow fadeInUp" data-wow-delay="0.1s">
									<div class="card-body">
										<img class="mx-auto" src="/images/home/logos.svg" alt="" />
										<h2 class="font-weight-bold">Just the Logos, Please</h2>
											<p>We know what you’re looking for, and we respect that. So much so that we put this the top of the page.</p>
											<p class="btn btn-sm text-uppercase font-weight-bold"><img class="mr-2" src="/images/home/chevron-right.svg" alt=""/>Waffle Time</p>
									</div>
								</div>
								</a>
							</div>
						</div>

						<div class="row">
							<div class="col-md-10 mx-auto">
								<a href="/docs/resources" class="card">
									<div class="wow fadeInLeft" data-wow-offset="100">
										<div class="row">
											<div class="col-md-6 text-center">
												<div class="card-body pb-0">
													<img class="pt-4 pt-md-5 mobile-size" src="/images/home/resources.svg" alt=""/>
												</div>
											</div>
											<div class="col-md-6 text-center text-md-left">
												<div class="card-body pl-md-0 pt-4 pt-md-5 pb-4">
													<h2 class="font-weight-bold pt-1">Resources</h2>
													<p>The reason you've come to this site&mdash;logos, colors, fonts, images&mdash;get it all right here!</p>
													<p class="btn btn-sm text-uppercase font-weight-bold pl-md-0"><img class="mr-2" src="/images/home/chevron-right.svg" alt=""/>Get 'Em</p>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>

						<div class="row mt-4">
							<div class="col-md-5 text-center ml-auto">
								<a href="/docs/faqs.html" class="card">
									<div class="text-center wow fadeInUp">
										<div class="card-body text-center">
											<img class="mx-auto" src="/images/home/faqs.svg" alt=""/>
											<h2 class="font-weight-bold">FAQ</h2>
											<p>Have a question? We have frequently given answers.</p>
											<p class="btn btn-sm text-uppercase font-weight-bold"><img class="mr-2" src="/images/home/chevron-right.svg" alt=""/>Why is the Liferay Blue?</p>
										</div>
									</div>
								</a>
							</div>
							<div class="col-md-5 text-center mt-4 mt-md-0">
								<a href="https://liferay.design" class="card">
									<div class="wow fadeInUp" data-wow-delay="0.1s">
										<div class="card-body">
											<img class="mx-auto" src="/images/home/liferay.design.svg" alt=""/>
											<h2 class="font-weight-bold">Liferay.Design</h2>
											<p>Shameless plug for the people behind all of this stuff&mdash;see what else we're doing.</p>
											<p class="btn btn-sm text-uppercase font-weight-bold"><img class="mr-2" src="/images/home/chevron-right.svg" alt=""/>Experience liferay.design</p>
										</div>
									</div>
								</a>
							</div>
							<div class="col-md-1">
								<ul class="social-icons">
									<li>
										<a href="https://dribbble.com/liferay" target="_blank"><img src="/images/home/dribble.png" alt=""/></a>
									</li>
									<li>
										<a href="https://github.com/liferay/lexicon-site" target="_blank"><img src="/images/home/GitHub-Mark-64px.svg" alt=""/></a>
									</li>
									<li>
										<a href="https://twitter.com/Liferay_Lexicon" target="_blank"><img src="/images/home/twitter.svg" alt=""/></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>		
			</MainLayout>
		</div>
	)
}

export const query = graphql`
	{
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blueprints)/" } }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
