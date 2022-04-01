---
title: 'Jira Groups'
description: 'Jira Groups, Email Groups and Jira Users'
order: 13
publish: true
---

## Groups & Users in Jira

When multiple users in Liferay need the same permissions or restrictions, there is an option to add the users to a group and then give each group project or permissions access.

When a new designer has its credentials created by IT, then is automatically placed in default groups (e.g. liferay-design-division). These default groups allow users to access the project with basic permissions or even can further restrict users' access within a project by using the project's permissions.

### Types of Groups

[Acording to Atlassian](https://confluence.atlassian.com/adminjiraserver/configuring-issue-level-security-938847117.html), a Jira group is a convenient way to manage a collection of users. You can use groups throughout Jira, for example, to allow application access, grant global permissions or project specific access.

The most important group is the "Org-wide" type (e.g. system-administrators), usually related to **Jira admins** (that contains users who manage Jira and the organizations tools). The following default permissions are available for site-admins:

- All permissions assigned to the 'administrators' group for the products you have.
- Access to user management (ability to create new users, assign users to groups, grant product access, etc.).
- Access to billing information.
- Access to all organization level settings.
- Access to all site level settings.
- Access to all the products in the site.

*Users with these permissions are considered organization administrators for documentation and support purposes.*

To have a clear understanding about groups, roles and permissions:

- Groups are for organizing users together who should have the same permissions.
- Project roles are for associating a project function (example: editing an issue) to a user or group of users.
- Permission are used so users only have to match these groups to their project roles once. After that, there is no need to apply again the permissions to other projects.

#### Jira Groups

This type of group is formed by Jira Users.

These groups are related to user access permissions (roles) and issue security level (visibility); Due to a granular level control of permissions, there won't need all groups to be created (and with more groups, it also would affect system performance).

You can use groups throughout Jira to:

- Allow application access.
- Grant global permissions or project specific access.
- Receive email notifications.
- Access issue filters and dashboards.
- Reference workflow conditions.
- Integrate with project roles.

#### Email Groups

This type of group is formed through the Email Groups from GSuite (Google). They can be linked to *Jira Users*. For example, it can send an email to all designers in the Division, if one should use one of these email groups.


### Jira Users

Jira Users can manage other users, configure Jira (or Confluence) and can connect to an external user management system. Users in the Jira Design project are designers or other stakeholders who work on or send requests. Jira users can be individual or group users.

- Jira Users are used just for notifications and not for permissions;
- Each user are required to have: display name, username and email;
- Can be added as Component Leads (so every user in that email group would be notified);
- Jira Users are linked to Email Groups (one for each group created);
- Jira Users can be tagged in comments.



### Actual Jira Groups

Information related to Jira Groups in Jira DESIGN project and its users. Jira Users need to have a Display Name, Username and an Email:

*E.G. Jira Users - Desciption (Jira Groups)*

1. **Design Division -** All designers in the division (liferay-design-division);

2. **Communication Design -** Designers from Communication team (liferay-design-communication);

3. **Design Systems -** Designers from Lexicon team (liferay-design-systems);

4. **Design Leads -** Designers leading the division (liferay-design-leads);

5. **Design Managers -** Just the design managers (liferay-design-managers);

6. **Design Operations -** Designers from Operations team (liferay-design-operations);

7. **Product Design -** All product designers (liferau-design-product);

8. **Design Research -** All product designers (liferau-design-product);

9. **Solutions Design -** Designers from Solutions team (liferau-design-psolutions).