---
author: 'Paul Hanaoka'
date: '2019-03-22T17:12:33.962Z'
title: 'Creating Atomic Components That Will Blow Your Mind'
featuredImage: '/images/articles/atomic-components.jpg'
publish: true
---

![Atomic Figma Components](/images/articles/atomic-components.jpg)
_Special thanks to [Jamie Street](https://unsplash.com/photos/-7ip4yX5P6Q), [Jimmy Musto](https://unsplash.com/photos/iOWEyl7sEgY), [Jens Johnsson](https://unsplash.com/photos/-N1_Vhyqd50), [Sergi Viladesau](https://unsplash.com/photos/dyrehVIidQk), [Princess Buttercup](https://unsplash.com/photos/OvLBv6F6DGE), and all the fine folks at [Unsplash](https://unsplash.com) for the photos._

If you’re as lazy as I am, you’ll definitely want to read this to learn how to set yourself up for hyper-efficient changes and updates to your Figma components. With all the time you save, you can do what I do and browse Unsplash’s cat photos for hours on end.

![Lexicon Buttons](/images/articles/buttons-large.png)
_What about 'Buttons Large'??_

Look at all these buttons — if you’re new to Figma, or the atomic model, you might be thinking…okay 1 button x 4 states x 4 levels x 3 configurations…carry the 3…for those of you keeping score at home, that’s 48 components per size!

If you need to change the padding, and it takes you 15 seconds to do it per element…you need to budget 12 minutes for that. Okay thats not so bad…but how many of you only have buttons in your mockups (not looking at you, landing page marketers)?

48 mockups for a single component is not exactly what we in the industry would call ‘maintainable’. In the old days of Photoshop or Sketch, this is why mockups could take days or weeks to do!

Hopefully you get the point — that’s a lot of time for something that’s probably not going to deliver a measurable return on investment. Plus, it’s a really, really, really mind-numbingly repetitive task.

Thankfully, the fine folks at Figma took Sketch’s ‘symbols’ to a whole new level.

Introducing…[the component](https://www.figma.com/blog/figma-feature-highlight-component-overrides/)!

![Figma Component Symbol](/images/articles/component.png)
_This is my component, there are many like it, but this is mine._

Something that differentiates this component from others, is that you can override properties on a child component, and then create a new master component, but the un-overridden properties will still be tied to the original master.

This is great and all, but what are some ways we can practically apply that in more complicated places than icons?

So glad you asked!

## Step 1: Evaluate

Back to the buttons —

![Lexicon Buttons](/images/articles/buttons-large.png)

The first step is to take a long look at these things, and see they are more similar than different. I find it helpful to start listing the similarities:

1.  Font size
1.  Padding
1.  Border-radius
1.  Content positioning

and the differences:

1.  Color
1.  Text-color
1.  Border-color

So really, most of the differences are quite superficial. See, just like you and me, there’s more in common than different. What a heart-warming life lesson.

## Step 2: Audit

Let’s get a little Platonic — what is the essence of a button? Well, in this case, there is a colored rectangle and some combination of text and an icon. Add a few more colors to the mix and you’ve got the magic that makes lead generation teams drool.

Let’s list out what exactly goes into a button:

1.  Background
    1. primary
    1. secondary
    1. tertiary
    1. none
1.  Content
    1. Text
    1. icon
    1. text + icon
    1. icon + text
1.  States
    1. default
    1. hover
    1. active
    1. disabled

These things will make up the quarks for our atoms.

## Step 3: Construction

Previously, you might have started drawing boxes and adding text and icons straight away — this would be wrong. Instead, once you accomplish the first two steps we outlined, and we start to make components from each of these.

![First Component](/images/articles/first-component.png)
_This is the first component_

Your next components will be the content:

![Next Component](/images/articles/next-components.png)
_Buy when? Meow!_

_Take note of the icon component naming convention — this will come in handy later._

Next, duplicate and start combining these components to make slightly more complicated components.

![More complex components](/images/articles/complex-components.png)
_[Emiliano](/team/) pointed out that I should be using text styles for this, not changing the color of the text on the component level — touché Emiliano, I'll get you next time._

Now, you can start to see why nesting can be so powerful — I only need to change the color of the text in one place for that change to cascade to the other two components (sorry for the crappy video):

<div style="width:140%;height:480px;margin-left:-20%;position:relative;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/xOG7hst4_rM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

These are now the quarks that we’ll use to begin construction of the buttons:
![Quarks](/images/articles/quarks.png)
_Disclaimer: Quarks is probably not the right term._

You will now start to see the true power of the nested component:

<div style="width:140%;height:630px;margin-left:-20%;position:relative;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/qS5xQuoUUmg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

You can see that we can now adjust a number of properties in one place, and have those changes take effect across all of the children. Lets speed it up...and here we go, most of the main buttons are built out:

![atoms](/images/articles/buttons.png)
_All the atomic button components._

Now that we’ve built all of the buttons using the quarks, you can witness the full power of this battlestation:

<div style="width:140%;height:630px;margin-left:-20%;position:relative;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/3v6rDsbJHQE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

So — what have we learned?

1.  Evaluate what you’ve built, listing all of the pieces and properties
1.  Audit what you need, and how you want everything to work together
1.  Construct things smartly, re-using as few elements as possible

[Take a look at the file](https://www.figma.com/file/DTNuqzlJfDMD1nHEf6gwwY/buttons) and leave a comment in Figma if you have any ideas for making it even less work to change some of these things. I know I already have a few ideas!

---

If this is all a bunch of crap and you hate it, please be sure to [let me have it on twitter ](https://twitter.com/plhnk)&mdash; but also check out [our careers page](https://liferay.com/careers) and help me out!
