# Release notes: SharePoint Framework Developer Preview Drop 1

Welcome to the first drop of the SharePoint Framework Developer Preview.  Expect updates every week or two for the next while.

A few other pages / posts have gone into some high level expectations around the first drop.  
For now, we'll just mention a few points.

First - while this is a developer preview, it's worth pointing out that teams inside of the SharePoint organization have been building on top of the framework for a while now, and will be releasing their experiences soon.  So while this is a developer preview, a lot of work has gone into it, and it is close to release quality.  However, the internal teams have a specific focus, and they tend to follow specific patterns and guidelines, so it's entirely possible that we have missed things.  As such, we want to release this as a preview, knowing that we will make changes over the next while that would be considered breaking.  It's easy for us to search through all of our own internal code and fix up things, but once we go to an official release, it's our intention to keep backward compatibility for all of the code that external developers write.

We're aware of a few things that will change over the next month or so.  For example, everything under the sp-client-preview module will be finalized and moved to the sp-client-base module, with the ultimate goal of sp-client-preview going away.  We'll continue to pull properties from window._spClientSidePageContext and move them to well typed properties on the Context variable.  We'll also be adding additional functionality, particularly around accessing other O365 workloads like Delve, Exchange and the Microsoft Graph APIs, as well as custom Azure AD applications.

It's also worth pointing out that for the first drop, it really is focused on developers that are used to working with IDEs, compilers, etc.  If you write C# in Visual Studio, write JavaScript using WebStorm or Java code in Eclipse (or better yet, TypeScript in Visual Studio Code) then you should feel at home once you learn one or two new skills.  If you tend more towards copying a few lines of JavaScript from a blog post and pasting them into a text box, this first drop is likely not going to be to your liking.  Don't worry though, you are in our thoughts, and we'll be making updates in the future to make things a whole lot easier for you as well.  Stay tuned.

Lastly, while much of our experience has been around specific frameworks and development environments, it is our aim to allow for you to bring your own framework and bring your own tools.  We know that there is work to do to fulfill that promise, but we're working on it.  Expect updates either in the framework, the tooling, or in documentation and best practices to make it easier for you to use the tools you are comfortable with.

Thanks, and we look forward to your feedback.
The SharePoint Framework team.