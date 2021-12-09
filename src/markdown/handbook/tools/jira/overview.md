---
title: 'Overview'
description: 'Structure, issue types and best practices to use Jira'
order: 11
publish: true
---

## Issues

*[Issues are the building blocks of any Jira project](https://support.atlassian.com/jira-software-cloud/docs/what-is-an-issue/)* — issue types exist to help to identify, categorize, and report on each team’s work across Jira. This helps organize and build more structure into the working process of each design team.

Issue types also help you search and sort the work your team takes on, track the progress of specific types of work, or even estimate how well your team responds to problems or how fast they complete larger work initiatives.


<Image
	src="/images/handbook/tools/jira/issue-type-scheme.png"
	align="right"
	size="small"
	caption="Our issue types"
	margin="0rem -2rem 0 4rem"
	rounded
	dropShadow
/>

<!-- TODO — Update this image 👆 @leolohmann -->

Jira offers default issue types to suit the needs of different projects and teams. It is also possible to customize the issue types to match any method, process, or project management style, as for example Kanban or Scrum.

## Global Issues: Epic, Story, Task

1. **Epics** are usually used for grouping Stories.
2. **Stories** can group a list of tasks.
3. **Tasks** can be grouped or used independently.
### Epic

An epic is a high-level request, a large effort of work that can be broken down into a number of smaller stories or issues. An [epic](/handbook/tools/jira/issues/epic/) can encompass multiple teams, on multiple projects, and can even be tracked on multiple boards.

### Story

A story is a more detailed request, also called user stories, more related to a product or service. For example, a story can be short requirements or requests written from the perspective of a client, a stakeholder, a persona, or an end-user. A [story](/handbook/tools/jira/issues/story/), or feature, can be the smallest unit of work in an agile framework. It's an end goal expressed from the user's perspective and related to a set of defined tasks. The main purpose of a user story is to articulate how a piece of work will deliver a particular value back to the customer.

### Task

A task, as a generic issue, can represent the type of work that needs to be done. This piece of work usually is represented as a normal, standalone issue type in Jira. As a single [task](/handbook/tools/jira/issues/task/) should be assigned to one designer and can be part of a bigger project or initiative.

_If a task is too big and complex then the issue (or task) can be broken down into sub-tasks._

### Examples

1. A product release is an Epic, one feature in the product release is a Story. That feature is broken down into individual Tasks required to deliver it.
2. A vacation is an Epic, buying the flight tickets and booking a hotel are Stories, researching different flight options is a task.

## Team Specific Issues

### Communication Design Request

Request related to the [creation of an asset](/handbook/tools/jira/issues/communication-design-request/) handled by the Communication Team.

### Lexicon Request

[Request of Liferay's Design System](/handbook/tools/jira/issues/lexicon/) and any demand related to components or technical improvements.

### User Testing Request

Request related to [testing](/handbook/tools/jira/issues/user-testing/) a product feature, project, or marketing asset by the Research Team.

### Webinar Request

Request related to the creation of a [specific webinar](/handbook/tools/jira/issues/webinar/) by the Communication Team.

### Parent, standard, and child issues

Depending on the complexity of the projects tracked in Jira, you may want to group or nest different work items hierarchically. This can help your teams focus on individual tasks while Scrum masters, project managers, or other team leaders track your team's bigger picture.

**_By default, Jira supports three levels of hierarchy:_**

-   **_Parent issues_** ((or epic issues) represent high-level initiatives or bigger pieces of work in Jira. For product teams, a parent issue, or an epic, may represent a new feature in development. For service teams, parent issues may represent a major service request. For some teams, parent issues may represent major deliverables or phases of a project or initiative.

-   **_Standard issues_** represent regular business tasks. In Jira, standard issues are where daily work is discussed and carried out by team members. For product teams, standard issues (like bugs or stories) estimate and track the effort required to build an interaction or other end goal in any project. For service teams, standard issues represent different requests made by customers or stakeholders, like requesting service or support, or reporting problems or blockers with your infrastructure.

-   **_Child issues_** (or subtasks) can help a team break a standard-issue into smaller chunks. This can be helpful if a team underestimates the scope or complexity of their work. Child issues (or subtask issues) can be described and estimated separately to their related standard issue and can help a team better understand and estimate similar work in the future.

## Workflows

_A workflow can be understood as a set of statuses and transitions related to an issue. A workflow shows how an issue moves through its lifecycle and represents processes within our Jira Design Project._

All Jira projects contain issues that a team can view, work on, and transition through stages of work — from creation to completion. The path that issues take is called a workflow. So each workflow is composed of a set of statuses and transitions that an issue moves through during its lifecycle, and typically represents work processes within the Design Department context.

Also, there are **_workflow schemes_** to define the relationship between issue types and workflows. Workflow schemes are associated with a project and make it possible to use a different workflow for different combinations of project and issue types. It is possible to edit or create a more advanced workflow to match how each team works.

***Example for a very basic workflow***
1. If an issue is created for a new task, then it will have a TO DO status (indicates the start of the workflow).
2. Changing the task status to IN PROGRESS indicates that work has begun.
3. When the task is finished, it is marked as DONE (marking the end of the workflow).


### Why are there different workflows

Jira enables teams to seamlessly log tasks and useful information, so there is no need to send an email to let someone know that a task has become available or has started: this is all tracked and logged automatically through different workflows.

This is the best way to map how tasks are processed and dealt with while wiping out work redundancy.

Creating workflows to match the way a team works comes with the benefit of making Jira more useful for our department. 
### How do I suggest a change?

Changing to match needs will allow each team to ensure that everything is correctly logged, hence offering insights into how different processes function.

Please initiate a conversation with the Ops team by creating a task with the `Operations` component — and share your request. If you have a compelling case, we'd love to work with you. 

Here's a sample to get you started:

- Problem: *briefly outline what you're experiencing*
- Scope: *who else is experiencing this problem*
- Impact: *how this problem is affecting the bottom line (time or money wasted)*
- Risk: *any additional costs of inaction*
### Trust the process?

Workflows are linked to each team's design process. One of the biggest challenges is ensuring that users work in a structured manner and make proper use of Jira.

When a user starts working on an issue, it needs to be marked as IN PROGRESS. If the issue doesn’t change status as the work goes, then Jira won’t correctly indicate the team’s actual flow in an issue and there won’t be a record that the Jira user is working on the item at the time and how long it took.

Each team needs to ensure that every designer on the team creates the habit of updating issue statuses whenever required, so this way workflows can be used at their best.

### What if I think I need a new workflow?

Creating a new workflow allows the system to adapt to exactly how a team works.

While using the standard workflow to simply move an issue from OPEN to IN PROGRESS to COMPLETE is acceptable, things are often more complicated depending on the team and its work process.

If there is a piece of work that needs to be APPROVED then it may need additional statuses to reflect the actual dynamics like AWAITING APPROVAL, REVIEW IN PROGRESS, and REVIEW COMPLETE.

The diversity of design teams is another reason to create a new or customized workflow. A team could benefit from having their own work process stages and requirements customized in Jira.
<!-- Not sure this section is necessary yet

### How to Create a New Workflow?

Creating a new workflow requires administrator permissions. A new workflow can either be copied with default flows or started from scratch.

From the menu:
1. Go to “Settings" and select “issues”
2. Then select “Workflows”
3. Select “add Workflow”
4. Name the new workflow
5. Start mapping it!

_The workflow designer tool allows you to edit the layout of workflow, the progress path of statuses, and transitions._ -->

### Entities related to a workflow:

-   ***Status*** – where the issue is (for example, “In Progress” or “Under Review”)
-   ***Resolution*** – why the issue is no longer in progress (for example, because it’s completed)
-   ***Conditions*** – control who can make an issue transition
-   ***Validators*** – only allow transitions to occur when specific information is provided
-   ***Post Functions*** – make additional changes to issues, alongside transitions (for example, removing a resolution when an issue is reopened)
-   ***Triggers*** – automatically activating transitions when specific events take place. For example, moving an Issue from “In Progress” to “Under Review” when code is submitted for review
-   ***Workflow properties*** – setting certain properties for transitions. For example, only displaying resolutions that are relevant to the specific issue type
-   ***Workflow schemes*** – determining the associations between a workflow and issue type

## TODO

-   Requesting New Issues and Workflows
