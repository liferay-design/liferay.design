---
title: 'Security'
description: 'Security Levels'
order: 12
publish: true
---

## Security Levels

To keep topics secure, control visibility and to optimize information load among the tem, there is an option to set ecurity levels for issues. This feature let you control which user or group of users can view an issue. This way, related tasks and sub-tasks will also inherit the security level of their parent issue.

Jira allows any user to secure the issues by limiting their visibility to certain users, groups and roles. There is a possibility to set up several different security levels linked to different permissions. 

Note, if issue security levels are available but aren't set, the project permissions will then be applied.

### Types of Security Level

[Acording to Atlassian](https://confluence.atlassian.com/adminjiraserver/configuring-issue-level-security-938847117.html), a security level's may consist of:

- Individual users
- Groups
- Project roles
- Issue roles such as 'Reporter', 'Project Lead', and 'Current Assignee'
- 'Anyone' (eg. to allow anonymous access)
- A (multi-)user or (multi-)group picker custom field.

<Image
	src="/images/handbook/tools/jira/security-levels.png"
	align="center"
	size="small"
	caption="Our issue types"
	margin="0rem -2rem 0 4rem"
	rounded
	dropShadow
/>

 This security feature allows more granular access to a projects issues. You can assign Roles, Custom Field Values, Project Roles, and Groups. This level is helpful for a Security, Business, or HR related project, for example.
 
 It is also perfect for situations where many people need access to a particular project, but **privacy still matters** - by limiting which users, roles, and groups can see a particular issue.


### Security Levels Avaialble Options

When creating a ticket in the DESIGN project, there are some options:

1. **None -** Public or open. The content is available to anyone that has access to Liferay Jira project (like contractors and external stakeholders);

2. **Open -** *Default option*. Open to anyone in Liferay group (liferay-staff);

3. **Design Secure -** Visible only by people in the current Assignee group (liferay-design and liferay-design-division). Also the Reporter & Watchers;

4. **Leads Secure -** Visible only by people in the current Assignee group (liferay-design-leads & liferay-design-managers). Also Reporter & Watchers;

5. **Manager Secure -** Visible only by people in the current Assignee group (liferay-design-managers). Also Reporter & Watchers;

6. **Private -** Visible only by the Reporter, current Assignee, and Watchers.