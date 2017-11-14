---
title: Best practices for rolling out SharePoint Online portals
ms.date: 11/03/2017
---
# Best practices for rolling out SharePoint Online portals

After you've spent your time and energy in building that new SharePoint based portal you do want to get it live as soon as possible...but what would be a good model for doing so? This article will explain the recommended model for deploying your portal for your end users.

>**Note**:
>Although this guidance is targeting SharePoint Online most of it also applies to portals hosted on a SharePoint on-premises environment.


_**Applies to:** SharePoint Online_

## Anti-patterns (in other words, don't do these things)
<a name="sectionSectionAntiPatterns"> </a>
Below list contains the key things **not** to do when it comes to rolling out your portal:
- Stress test your portal against your SharePoint Online tenant
- Do a big bang release, essentially releasing your new portal to **all** your users at the same moment
- Sharing your portal to a large number of security groups can cause problems – it’s dependent on how many site groups each security group is in. You may experience issues at 40,000 security groups, but they could occur at a lower security group count depending on your usage.


## How did you do this in the past
<a name="sectionSection0"> </a>
Often customers did run massive stress tests on their SharePoint on-premises based portals as they wanted to assess whether the infrastructure would handle the load while still giving decent page load times. With SharePoint Online however **doing a classical stress test is not allowed** anymore because:
- SharePoint Online will see the load test as a denial of service attack and simply will block the user or even worse the complete tenant
- If the load test is not getting blocked it will be throttled resulting in hard to interpret test results
- SharePoint Online will dynamically scale its underlying infrastructure which works great, but not if you suddenly do a massive load increase. The scaling back-end model needs time to absorb increased load
- Such a performance test is just a one-time validation whereas you portal will keep on evolving ,it's better to rely on build in portal telemetry so that you're able to continuously follow-up on your portal performance. It's also hard to build a load test that represents a real usage pattern.

The recommended approach for rolling out your new portal is by using a phased roll-out plan combined with built in portal telemetry to measure portal performance while more and more users are added. The next chapter will provide more details around this approach.

## Recommendation: use a phased portal roll-out strategy combined with portal telemetry
A commonly used model for rolling out new functionality is using a phased approach which typically consists out of:
- A **pilot** wave: this is the first time the portal is opened up to a group of selected key users. It's important to get a set of representative, critical, key users that can provide the first feedback
- One of more **end user** waves: the number of waves you have is depending on how many users you'll be having combined with the model you're following. We see companies aligning their roll-out waves with their organization structure, other companies are aligning by country/region...in the end the thing that matters most is the fact that you're gradually adding new users to the portal

Below picture shows a nice gradual roll-out plan. Note that this also takes in account that typically end-user waves have less actual users then invited users.

![phased portal roll-out model](https://support.content.office.net/en-us/media/0bc14a20-9420-4986-b9b9-fbcd2c6e0fb9.png)

The above phased approach will give you time to absorb feedback and make adjustments to your portal if needed, but how do measure and follow-up on performance during this phased roll-out? The recommended approach for doing this is embedding portal telemetry in your implementation, as explained in [telemetry section in performance article](https://msdn.microsoft.com/en-us/pnp_articles/portal-performance#telemetry). Having a continuous flow of portal performance data will help you understand if the portal performance is changing when the number of users is growing, but also when you in the future make changes to the portal.

## Additional resources
<a name="bk_addresources"> </a>

- [Capacity planning and load testing SharePoint Online](https://support.office.com/en-us/article/Capacity-planning-and-load-testing-SharePoint-Online-c932bd9b-fb9a-47ab-a330-6979d03688c0?ui=en-US&rs=en-US&ad=US)