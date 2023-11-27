---
title: High Level Overview
description: TODO
ms.date: 11/14/2023
ms.localizationpriority: high
---

# Getting started with SharePoint repository services

1. Learn
2. Build



## Anatomy of a SharePoint repository services application
SharePoint repository services is a headless content storage layer for your custom application. SharePoint repository services applications manage files and documents in `Containers`. Containers are a new construct provided by the SharePoint repository services platform. They behave a lot like document libraries in SharePoint -- but they're they're different in some ways and only accessible only to your application. Your app owns the Containers it creates and controls the experiences of the content within them.

Here's a high-level overview of a SharePoint repository services app:

![Architecture](./images/architecture-overview.png)

Containers are created within an M365 tenant. You can create many Containers in the same tenant, and you can install your application on many tenants. Here's the high-level flow of SharePoint repository services application development:

1. Create your application -- you'll need your own M365 tenant for this (we call this your *Partner* or *Developer* tenant)
1. Install your application on one or many M365 tenants -- can be the same developer tenant or on a different one (we call this the *Consuming* tenant)
1. Create Containers within the *Consuming* tenant and manage files and documents within them through your app experiences

### SharePoint repository services App Structure
There are three fundamental parts to a SharePoint repository services application.

1. Azure AD app registration on your *Developer* tenant
1. SharePoint repository services `ContainerType` associated with your above app registration
1. Your application code

#### Container Types
A `ContainerType` is a SharePoint repository services concept that creates a relationship between an Azure AD application and the `Containers` it owns within the SharePoint repository services application. You have to create a `ContainerType` before you can create a `Container`, and every `Container` created by your application across all M365 tenants its installed on has the same, immutable `ContainerTypeId` associated with it. An Azure AD app can have at most one `ContainerType`.

### Installing a SharePoint repository services App on a *Consuming* M365 Tenant
Once the basic app structure is in place, your app must be installed on an M365 tenant before you can start creating `Containers` in that tenant. Two things need to happen here. 

1. Consuming tenant administrator must grant permission to your app
1. Your app must **register** its `ContainerType` on that Consuming tenant

#### Container Type *Registration*
Registering your app's `ContainerType` on a Consuming tenant creates a record within the Consuming tenant that grants your application permissions to manage `Containers` within it. Even if you're developing an enterprise line-of-business application where your Developer tenant and Consuming tenant are actually the same thing -- you still must complete this step. 
