---
title: 'Previous Portal Versions'
description: 'Running Previous Liferay DXP versions'
order: 2
publish: true
---

_If you are a product designer working in a Liferay DXP related project you might be interested in knowing how an application looked like in previous versions. This guide will help you with that._


## Install Docker

Liferay DXP previous versions can be found as Docker images. To run them you need to [get Docker](https://www.docker.com/products/docker-desktop) first.

## Running a Docker image

[This guide](https://hub.docker.com/r/liferay/portal) will help you with the specific command. But if you just need the basic, [select a tag](https://hub.docker.com/r/liferay/portal/tags?page=1&ordering=last_updated) to replace in the following command and run it.

```bash
docker run -it -p 8080:8080 liferay/portal:{tag}
```

Example

```bash
docker run -it -p 8080:8080 liferay/portal:6.2.5-ga6
```

Once it has been downloaded and it is running, you will be able to see it in your web browser
```bash
http://localhost:8080/
```

## Cleaning up

Remember to clean up your Docker images library. Each image weight is around 1.2Gb. You can do this manually from the Docker desktop application.

