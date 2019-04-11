---
title: "Get Started"
description: "User experience design language."
layout: "guide"
icon: "lexicon-site-about"
order: 1
---


### Design language

Lexicon is a design language that provides a common framework for building interfaces within the Liferay product ecosystem. It is a guide to  foundations, components, patterns, and use cases that provide consistency and coherence to these products, and, ultimately, provides a satisfactory and unified experience to its users.

Lexicon is a living project, evolving and adapting over time to new and rising technologies to meet the needs of the people.

### Modular approach

Lexicon takes a modular approach to interface design. It is a cohesive system that's able to respond to the various needs of Liferay's products through a base set of components. It seeks to simplify processes, reduce production times, and above all, to provide a consistent user experience across the board.

To achieve this goal, Lexicon uses Brad Frost's Atomic Design approach to interface design: A work methodology, based on modularity, that seeks to give a more hierarchical and organized structure to the creation of interface design systems. It's a nonlinear process, organized across five stages: Atoms, Molecules, Organisms, Templates, and Pages.

### Lexicon site

This site explains the design specs and proper usage of Lexicon's system of components for designers, developers, and overall digital creators. While it is primarily for the Liferay community, it is open to anyone who wants to use its components or make contributions or suggestions to improving it. 

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/foundation.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Foundations</h4>
        <p>These are the principles that the design system is built on. Modifications to these principles affect the component's behavior. These include foundational elements such as colors, grid, and typography.</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/component.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Core Components</h4>
        <p>This section contains the common components that are essential to build interfaces. Each component defines its rules and behaviors. Each component's look and feel is based on the combination of the foundations mentioned above. Therefore, changes to the foundation principles propagate to the entire system. In our case, these components are implemented by [Clay](https://clayui.com/).</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img  class="getstarted-img" src="../../../images/getstarted/satellite.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Satellite Components</h4>
        <p>These components are for the needs of specific products or applications. They are built using Lexicon's foundations and core components. They belong to the product or application that created them, rather than the design system itself.</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/template.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Templates</h4>
        <p>Templates offer prebuilt solutions to tackle repetitive interface challenges. They speed up the design process, as they only require minor modifications to fit your use case and display your content.</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/example.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Examples</h4>
        <p>This section showcases practical designs by UX Designers that demonstrate how core components and satellite components are applied to create Lexicon interfaces that tackle specific scenarios.</p>
    </span>
</span>


The components in this site include the labels shown below, which indicate if the component links to its implementation or the product where you can find them. This lets you view the components in a real-world application and context.

| Label | Usage |
| ---- | ----- |
| <a class="label-link label label-warning" href="https://clayui.com/" target="_blank">VIEW IN CLAY</a> | Links to the pattern implementation |
| <span class="label label-info">PRODUCT NAME</span> | The pattern is used in a concrete product or application |
| <span class="label label-secondary">PENDING</span> | The pattern has been designed and will be implemented either in Clay or a Product/Application. |

### Implement Lexicon

Lexicon is not an implementation. It is a set of patterns, rules, and behaviors that any library can implement. Liferay's Lexicon Experience Language web implementation is [Clay](https://clayui.com/).