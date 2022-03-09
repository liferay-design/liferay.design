---
author: 'Victor Valle'
date: '2019-07-08T14:00:00.000Z'
title: 'Lessons Learned Working in a Design System'
featuredImage: '/images/articles/library.jpg'
tags: ['Design Systems']
publish: true
---

For the last 2.5 years I've been working in [Lexicon](https://liferay.design/lexicon). It is Liferay's design system, not only for our applications but for everyone to use and extend. I have learned and will continue learning a lot in this project. I hope by sharing my experience can help you too.

A bit more context; Lexicon was created and is primarily maintained by a team based in our Madrid office. It is used in multiple products by designers in Madrid, but also all over the world; in Los Angeles, Recife, Milan, Budapest and more.

# Why you need a Design System

Not everyone needs a design system. First, you need to understand the goals of the company and product and think if this systematization has to take place.

Design systems are here to set certain rules, not all of them, to offer guidance, save time, and create consistency. It won't give you all the answers as it won't cover all concrete needs but it will help set a baseline and build from it.

There are different ways a Design System brings value to your company:

-   **Consistency**: as it is important all your interfaces speak the same language. But consistency has a high cost and it is difficult to reach. A way to achieve is through coherence, not everything has to be perfect but follow an end-to-end experience where the user doesn't feel out of the path.
-   **Faster time to market**: designers can spend more time solving more complex problems, they don't need to worry too much about problems that can be solved one time, and stay solved.

# How to make it successful

The following are the top five areas I've learned are critical to the success of any design system.

## Communication

![Child shouting at a microfone](/images/articles/communication.jpg)
_Photo by Jason Rosewell on [Unsplash](https://unsplash.com/photos/ASKeuOZqhYU)_

One of the most critical yet underrated components of a design system is a communication channel. Next to a conventional design tool (Figma, Sketch, Adobe XD, etc) a **documentation** site (or **internal documents**) is the most foundational aspect of a design system. At Liferay we do both, public documentation and internal documentation where we reflect our research, provide extended documentation, and track updates with a changelog. These internal documents are also useful to maintain conversations with engineers for alignment.

## Collaboration

![People playing basketball](/images/articles/team-basketball.jpg)
_Photo by Max Winkler on [Unsplash](https://unsplash.com/photos/UFIZodJgScQ)_

A design system is not a task only for the design system team, if you're lucky enough to have one, it can only be successful when everyone contributes to it. In the end, designers on product teams are the ones using the system, finding where components don't adapt to certain cases. This is one of the points where we need their input to improve. So be always open to modify and evolve your components.

## Flexibility

When I started at Liferay, Lexicon already was in version 1. We found out Lexicon had few rules and everything was open to free interpretation. This version was lacking documentation and it was difficult to know about decisions taken. So we decided to document it.

As a second step, we decided to evolve Lexicon to version 2. A version documented from the very beginning and way more restrictive because we didn't want everyone to do whatever they wanted.

Our components were stronger but less flexible. Up to a point where designers where complaining because they could not do everything they wanted, even if it was in the line that Lexicon was marking. Then, we decided to be more flexible removing some restrictions at definition moment.

![Soft mass pressed inside a hand](/images/articles/flexibility.jpg)
_Photo by Kyle Brinker on [Unsplash](https://unsplash.com/photos/IeoN8bdylQc)_

But this was not enough, our components needed to be more flexible. It was not enough with components and its variations. We had to bring more flexibility, that is why we opted for **extension points**. This is the way we allow you to embed new functionality or elements into components and make them more adaptable to your business use case.

As stated before, one of the main goals for a DS is to bring consistency. But a DS can be a slow process depending on the size of your company. Products have to evolve as your company needs to be in a good market position and features are a better selling point than a DS, let's be honest. My advice, let designers work in their own features and components to solve their specific business cases following the foundations that your system states. Bring consistency in a second step when the system is ready to help them. It is better to **execute quickly and learn fast**.

## Growing

As the business grows there are more and more teams using the design system and there are more needs that probably the team can't support.

![Cactus](/images/articles/cactus.jpg)
_Photo by Ugur Akdemir on [Unsplash](https://unsplash.com/photos/xhMTF15IeBw)_

At Liferay, we decided to have satellite libraries around Lexicon. This gives teams the flexibility to create their own components. Our agreement with the teams is to review these libraries from time to time to find commonalities and bring them into Lexicon. We are still improving and refining this process - but we have found other design systems doing the same.

When facing a problem, it is tempting to create new components to solve certain challenges. First try to frame the problem, analyze it well, consider if the problem can be solved with the components that are ready (this saves time). If you find they don't, feel free to extend existing ones or create new ones.

## Breaking the Design System

While using a Design System you will find at situations where you would prefer creating a solution that goes against the system. That is totally ok, share your idea. Create a small discussion around the need, the benefits it could bring and the reason towards the decision.

# Keep learning

If you want to learn more about design systems some brave people are running [Design at Scale Madrid](https://www.meetup.com/es-ES/Design-at-Scale-Madrid/) meetup where we talk about this topic and others.

[Liferay Design](https://liferay.design/events/) team also organize events related to design that can help you grow at different locations.
