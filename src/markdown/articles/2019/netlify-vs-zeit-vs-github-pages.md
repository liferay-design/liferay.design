---
author: 'Paul Hanaoka'
date: '2019-04-07T17:12:33.962Z'
title: 'Netlify vs. Zeit vs. Github Pages'
featuredImage: '/images/articles/netlify-vs-zeit-vs-github-pages.png'
publish: true
---

The Liferay Design team made regular use of Liferay’s developer-centric deployment platform, WeDeploy. Static sites like [our primary domain](/)(this site) and [Lexicon](https://lexicondesign.io), as well as standalone apps like our [NA team dashboard](https://dashboard.liferay.design) and our [Career Path tool](https://path.liferay.design) (a work in progress), and small pages like our [web assets repo](https://assets-liferaydotdesign.wedeploy.io/) page (very much a #wip).

When the WeDeploy team announced that [they were shuttering the service](https://wedeploy.com/blog/discontinuing-wedeploy/), we were at a loss for where to move everything. We did a little research, compared a few services, and thought that it might help other teams who were using WeDeploy (and even people who are just trying to decide between existing services) choose from one of the many options available.

### Disclaimer

_By “research” we mean “talking with a few [resident](https://rhino.codes) [experts](https://zenorocha.com/), listening to some [good](https://syntax.fm/show/034/why-static-site-generators-are-awesome) [podcasts](https://spec.fm/podcasts/design-details/113490), and doing a [fair bit of Googling](#further-reading)” — by no means is this a comprehensive survey of all the available services, we are not sponsored by any of these services, nor are we receiving any kickbacks (...yet, @netlify we love socks... or anything!)._

## Results

### For a Gatsby Powered Static Site

One of the first results when searching for ‘static site hosting’ is Sebastiaan Deckers’ list of ‘[Static site CDNs](https://gitlab.com/commonshost/core/issues/1)’ — this, and the other lists linked to it, formed a pretty comprehensive, albeit slightly dated (last edited 10 months ago), overview of all the options.

Talking with the aforementioned experts, Ryan and Zeno, it seemed like the two standouts were Netlify and Zeit. After testing out the setup and deployment for each, Netlify was the clear winner for Liferay.Design — it took literally less than one minute to go from setup to deployment, and we were able to see a branch deployed in less than 3 minutes. Previously, we had deploys running through Travis CI, and they could take anywhere from 5 to 15 minutes.

Netlify also handles DNS management — previously we had to use Cloudflare (which was great — but yet another service to log into and manage), moving that to Netlify was pretty painless.

All-told, it took less than an hour for us to set up everything, and 45 minutes of that was waiting for the https certificate. If we had to describe Netlify in one word, it would be “fast and easy” — _just say that really fast and it sounds like one word_. Our Google Lighthouse score went from hovering around 70-80, no matter how much we tuned performance with our old host, to straight up 100.

![Google Lighthouse results for Liferay.Design](/images/articles/netlify-is-pure-speed.png)
_The only thing we changed between these two is the host — Netlify is just flat-out fast. <br />P.S. We're fixing [the accessibility issue](https://github.com/liferay-design/liferay.design/milestone/1)_

😬

### Thank U, Next (js)

_Yes, the whole reason for this post is so that I could make that incredible pun._

Our [career path evaluator tool](https://path.liferay.design) (forked from [Medium Engineering’s Snowflake App](https://github.com/Medium/snowflake)) is a small Next.js app. It seemed logical to check out Zeit, as they are the ones [who open-sourced Next.js](https://zeit.co/blog/next), we figured that Now would play pretty nice with it.

It hasn’t been as smooth as Netlify — a lot of that is probably attributable to ID-10-T errors on the user-side, but deploying with `Now` is very reminiscent of `deploy -p`.

### Github Pages

Old-reliable — gh-pages is not as flashy or fun to use as Netlify or Zeit, but it’ll get the job done. It doesn’t support continuous deployment, and using custom domains with it can be a bit of a pain — but if you only have one or two pages, then it can be nice to stay completely in the GitHub ecosystem.

_Special thanks to [@abelfhancock](/team/hancock-abel) for doing a bunch of preliminary research and testing on [his personal site](https://www.hancockaudio.com) — check it out, it's pretty cool._

## <a id="further-reading"></a>Further Reading

-   [Where should I host my static website?](https://yrezgui.com/blog/2018/04/where-should-i-host-my-static-website.html) by Yacine Rezgui
-   [Github Pages vs. Netlify](https://www.netlify.com/github-pages-vs-netlify/) by Netlify
-   [Netlify.. Any competition in the market?](https://dev.to/imthedeveloper/netlify-any-competition-in-the-market-aij) discussion on Dev.to
-   [Static site CDNs](https://gitlab.com/commonshost/core/issues/1) list by Sebastiaan Deckers
