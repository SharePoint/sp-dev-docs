---
title: Building your first Bot Powered Adaptive Card Extension with .NET
description: Learn how to build your first Bot Powered Adaptive Card Extension using the Bot Framework for Microsoft .NET.
ms.date: 11/15/2024
ms.localizationpriority: high
---
# Building your first Bot Powered Adaptive Card Extension with .NET

Bot Powered Adaptive Card Extensions (ACEs) for Microsoft Viva Connections enable extending the Microsoft Viva Connections Dashboard using the Bot development model.

From a development point of view, a Bot Powered ACE behaves like a regular client-side ACE built with SharePoint Framework (SPFx). As such, you can render Card Views, Quick Views, you can provide properties configurable via a Property Pane, and you can implement specific behaviors to handle actions in the user interface of the ACE. You can learn more about the basics of client-side Adaptive Card Extensions for Microsoft Viva Connections by reading the tutorial [Build your first SharePoint Adaptive Card Extension](../get-started/build-first-sharepoint-adaptive-card-extension.md).

You can build Bot Powered ACEs either using C# and .NET or using TypeScript and Node.js. In this tutorial, you learn how to build a basic Bot Powered ACE using C# with a step-by-step approach.

You can learn more about the architecture of the Bot Powered ACEs by reading the article [Understanding Bot Powered Adaptive Card Extensions](./Understanding-Bot-Powered-ACEs.md).

> [!TIP]
> You can also follow these steps by watching this video on the Microsoft 365 & Power Platform Community YouTube Channel.

> [!Video https://www.youtube.com/embed/JgyyJi0SWDs]

## Developing a Bot Powered ACE with Microsoft .NET

In this tutorial, you're going to build a basic Bot Powered ACE to collect user feedback via a Card View with a textbox and a submission button. In the following picture, you can see how the Adaptive Card Extension looks like in the Viva Connections desktop experience.

![The UI of the sample Bot Powered ACE in the Viva Connections desktop experience. There is a Card View to collect user feedback and a submit button. There is also the same Card View with the textbox filled in with a sample value "I like Bot Powered ACEs". Then, there is a Card View confirming the collection of the feedback. Lastly, there is a Quick View with a generic message for the user.](./images/Bot-Powered-ACE-Collect-Feedback-UI-Desktop.png)

In the following picture, you can see how the Adaptive Card Extension looks like in the Viva Connections mobile experience.

![The UI of the sample Bot Powered ACE in the Viva Connections mobile experience. There is a Card View to collect user's feedback and a submit button. There is also the same Card View with the textbox filled in with a sample value "I like Bot ...". Then, there is a Card View confirming the collection of the feedback. Lastly, there is a Quick View with a generic message for the user.](./images/Bot-Powered-ACE-Collect-Feedback-UI-Mobile.png)

From a developer point of view, you build the ACE once and you benefit from it in both desktop and mobile experiences.

### Prerequirements

First of all, to develop a Bot Powered ACE with C# and .NET, you need to have the following tools and frameworks installed on your development machine:

* Microsoft .NET 6.0 or higher versions
* Microsoft Visual Studio 2022
* Bot Builder Extensions for Microsoft Visual Studio 2022
* Optionally, the Bot Framework Emulator

You also need to have an active and valid Microsoft Azure subscription to host the Azure Bot.

Last but not least, for local testing and debugging, you also need a reverse proxy tool like ngrok, Localtunnel, Serveo, YARP, etc. In this tutorial, we're going to use ngrok.

## Creating the Bot solution in Visual Studio 2022

Once you installed the Bot Builder Extensions for Microsoft Visual Studio 2022, start Visual Studio and choose to create a new project of type **Empty Bot (Bot Framework v4 - .NET Core 3.1)** as illustrated in the following screenshot.

![The UI of Microsoft Visual Studio 2022 to create a new project of type "Empty Bot (Bot Framework v4 - .NET Core 3.1)"](./images/Visual-Studio-Bot-Builder-Extension-Project.png)

Give a name to your project (for example, "CollectFeedbackBotPoweredAce") and choose a folder to store the project files and the related solution. Despite the name of the project template, the resulting project is a .NET 6.0 one.

Then, the first thing to do is to upgrade the NuGet package with name **Microsoft.Bot.Builder.Integration.AspNet.Core** to version 4.21.2 or higher. You can do it using the user interface of Visual Studio, right-clicking on the project and choosing "Manage NuGet packages ..." as you see in the following image.

![The UI of Microsoft Visual Studio 2022 when upgrading the version of the NuGet package "Microsoft.Bot.Builder.Integration.AspNet.Core" to version 4.21.2 or higher.](./images/Visual-Studio-NuGet-Bot-Builder-SDK-Version.png)

You can also use the .NET CLI and run the following command in the Package Manager Console, to update the package to the latest release.

```console
dotnet add package Microsoft.Bot.Builder.Integration.AspNet.Core
```

In the automatically scaffolded solution, you find a bunch of autogenerated files. The files that matter to create a Bot Powered ACE are the following ones:

* **Startup.cs**: configure services via Dependency Injection.
* **EmptyBot.cs**: the actual Bot implementation, where you write the real code of your Bot Powered ACE.
* **appsettings.json**: here you can configure the settings of your Bot Powered ACE, including the parameters of the Azure Bot.

## Registering the Bot in Azure

Before proceeding with the implementation of the Bot Powered ACE, you need to register a Bot in Microsoft Azure.

Open a web browser and navigate to the [Azure Management Portal](https://portal.azure.com/). From the Azure Management Portal home page, select **Create a resource** and choose to create an **Azure Bot** service.

![The interface of the Azure Management Portal when creating a new service instance of type Azure Bot.](./images/Azure-Portal-Create-Azure-Bot-01.png)

Provide a handle for your Bot, which must be compliant with the following rules:

* String between 4 and 42 characters long
* Supported characters are: a-z, A-Z, 0-9, - and _
* Must start with a letter or digit
* It has to be unique

The Bot handle becomes the display name of the Bot. However, you can change the display name later, while the Bot Handle is immutable, once registered.

Choose a target subscription and resource group, and a data residency policy. From a pricing point of view, while you're developing and testing with Bot Powered ACEs, you can select the **F0 - Free** pricing tier. Once you're ready to release your Bot in production, you can upgrade the pricing tier to **S1 - Standard**.

A Microsoft App ID is required to register an Azure Bot. Depending on your solution, you can select a different type of application through the **Type of App** option. You can choose any of the following options:

* **User-Assigned Managed Identity**: if your Bot app doesn't need to access resources outside of its home tenant and if your Bot app is hosted on an Azure resource that supports Managed Identities.
* **Single Tenant**: if your Bot app doesn't need to access resources outside of its home tenant, but your Bot app isn't hosted on an Azure resource that supports Managed Identities.
* **Multi-Tenant**: if your Bot app needs to access resources outside of its home tenant or serves multiple tenants.

Choose **Multi-Tenant** to follow the steps of this tutorial.

You can also choose whether to create a new Microsoft Entra ID app or reuse an existing one.

In the following screenshot, you can see all the available configuration options.

![The page to register a new Azure Bot. It includes settings about the Bot handle, the target subscription and resource group, the pricing tier, and the Microsoft App ID settings.](./images/Azure-Portal-Create-Azure-Bot-02.png)

Once you're done with the settings, select the **Review + create** button, review the selected settings, and register your Azure Bot by selecting the **Create** button.

### Configure the Bot in Azure

Once the Azure Bot is registered, select the **Go to resource** button, or open the Azure Bot configuration from the Azure Management Portal.

#### Messaging endpoint URL configuration

Open the **Configuration** panel of the Azure Bot and configure the **Messaging endpoint** URL for your Bot.

In this configuration field, you should provide the base URL of your Bot. For example, if you're planning to use _ngrok_ to run the Bot locally, for testing and debugging purposes, the URL should be something like the following one:

```http
https://<your-ngrok-reverse-proxy-name>.ngrok.io/api/messages
```

For instance, if you plan to use the name *my-bot-powered-ace* with ngrok, the **Messaging endpoint** URL should be

```http
https://my-bot-powered-ace.ngrok.io/api/messages
```

... and the command to run ngrok on your local machine as a reverse proxy for the Bot should be:

```console
ngrok http --host-header=localhost --hostname=my-bot-powered-ace.ngrok.io 3978 
```

Select **Apply** when you're done configuring the **Messaging endpoint** URL.

![The configuration panel for an Azure Bot. It includes settings about Messaging Endpoint URL, the Microsoft App ID, the Application Insights keys, the Schema Transformation Version, and the OAuth Connection settings.](./images/Azure-Portal-Create-Azure-Bot-03.png)

Once you configured the URL for your Bot, you need to configure a few more settings from the **Configuration** panel. Select the **Manage Password** link, next to the **Microsoft App ID** setting.

#### Microsoft App configuration

You're brought to the **Certificates & secrets** configuration page of the Microsoft App registered in Microsoft Entra ID for your Bot. From within this page, you can configure a new client secret. Copy the value of the new client secret in a safe place, you're going to reuse it later in this tutorial.

Now, select the **Overview** panel and save in a safe place, together with the client secret, the values of the following settings:

* Application (client) ID
* Directory (tenant) ID

![The "Overview" panel of the Microsoft App. It includes information about the Display Name, the Application ID, the Directory ID, etc.](./images/Azure-Portal-Create-Azure-Bot-04.png)

#### Configuring the Microsoft 365 Channel

You can now go back to the configuration of your Azure Bot and select the panel **Channels** to configure a new channel for Microsoft 365. In the **Available Channels** section of the page, you need to select the channel named **Microsoft 365** to enable it.

![The panel to configure channels for the Azure Bot. There are two pre-selected channels: "Direct Line" and "Web Chat". There is a list of "Available Channels", including the "Microsoft 365" channel.](./images/Azure-Portal-Create-Azure-Bot-10.png)

A new page shows up, explaining the purpose of the **Microsoft 365** channel. Select the **Apply** button to enable the new channel and go back to the list of channels configured for your Azure Bot.

![The panel to configure the "Microsoft 365" channel in the list of channels supported by the Azure Bot. There is a description of the purpose of the channel and an "Apply" button to add the channel to the list of channels supported by the Azure Bot.](./images/Azure-Portal-Create-Azure-Bot-11.png)

Right after that, your Azure Bot is fully configured and ready to be used.

![The panel to configure channels for the Azure Bot. There are now three pre-selected channels: "Direct Line", "Web Chat", and "Microsoft 365.](./images/Azure-Portal-Create-Azure-Bot-12.png)

> [!IMPORTANT]
> If you are using ngrok and you have a free license, you will have to rely on a dynamic URL for your local development environment, rather than on a fixed and named URL. As such, whenever you will start ngrok you will get a new URL that you will have to configure in all the places where you have been instructed to configure the URL in this tutorial. Specifically, you will have to re-configure the URL in the "Messaging endpoint URL" of the Azure Bot. Then wait a few seconds before running the Bot, to allow the new URL to synchronize across the Microsoft Azure services.

### Configure the project according to the Azure Bot settings

Go back to Visual Studio and open the **appsettings.json** file to configure the settings for the Azure Bot. Here follows a code excerpt of the settings file, where you can see how to configure the Azure Bot parameters.

```JSON
{
  "MicrosoftAppType": "MultiTenant",
  "MicrosoftAppId": "<App-Client-ID>",
  "MicrosoftAppPassword": "<Client-Secret>",
  "MicrosoftAppTenantId": "<Tenant-ID>"
}
```

Replace the content of the above placeholders with the actual values that you stored before.

> [!NOTE]
> You can also consider using the user's secrets functionality of Visual Studio to store the secrets securely and avoid to accidentally share them with unauthorized people.

## Implement the actual Bot Powered ACE

Rename the **EmptyBot.cs** file with name **CollectFeedbackBot.cs**, open it, and replace the base class from `ActivityHandler` to `SharePointActivityHandler` and empty the content of the class itself. You also need to import the namespace `Microsoft.Bot.Builder.SharePoint`. Then, add a set of overrides for all the methods with name starting with `OnSharePointTask*`.

Here follows the resulting class implementation.

```CSharp
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.SharePoint;
using Microsoft.Bot.Schema;
using Microsoft.Bot.Schema.SharePoint;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace CollectFeedbackBotPoweredAce
{
    public class CollectFeedbackBot : SharePointActivityHandler
    {
        protected override Task<CardViewResponse> OnSharePointTaskGetCardViewAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
        {
            return base.OnSharePointTaskGetCardViewAsync(turnContext, aceRequest, cancellationToken);
        }

        protected override Task<QuickViewResponse> OnSharePointTaskGetQuickViewAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
        {
            return base.OnSharePointTaskGetQuickViewAsync(turnContext, aceRequest, cancellationToken);
        }

        protected override Task<GetPropertyPaneConfigurationResponse> OnSharePointTaskGetPropertyPaneConfigurationAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
        {
            return base.OnSharePointTaskGetPropertyPaneConfigurationAsync(turnContext, aceRequest, cancellationToken);
        }

        protected override Task<BaseHandleActionResponse> OnSharePointTaskSetPropertyPaneConfigurationAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
        {
            return base.OnSharePointTaskSetPropertyPaneConfigurationAsync(turnContext, aceRequest, cancellationToken);
        }

        protected override Task<BaseHandleActionResponse> OnSharePointTaskHandleActionAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
        {
            return base.OnSharePointTaskHandleActionAsync(turnContext, aceRequest, cancellationToken);
        }
    }
}
```

Here follows a brief explanation of the overridable methods:

* `OnSharePointTaskGetCardViewAsync`: handles the rendering of a Card View.
* `OnSharePointTaskGetQuickViewAsync`: handles the rendering of a Quick View.
* `OnSharePointTaskGetPropertyPaneConfigurationAsync`: allows rendering the Property Pane of the ACE.
* `OnSharePointTaskSetPropertyPaneConfigurationAsync`: allows saving the settings configured using the Property Pane of the ACE.
* `OnSharePointTaskHandleActionAsync`: handles a custom action in the ACE like the select on a button in a Card View or any custom action in the UI of a Quick View.

> [!NOTE]
> You can dig into the details of how Bot Powered ACEs work by reading the article [Understanding Bot Powered Adaptive Card Extensions](./Understanding-Bot-Powered-ACEs.md).

To implement the Collect Feedback ACE, you can only focus on `OnSharePointTaskGetCardViewAsync` and `OnSharePointTaskGetQuickViewAsync` to render the Card Views and the Quick View, as well as on the `OnSharePointTaskHandleActionAsync` to handle the actual submission of the feedback. So far, you can remove the two methods for handling the property pane, which is covered in another article.

Every Bot Powered ACE does have a unique ID, which is a string that identifies uniquely the ACE instance in the Viva Connections Dashboard. For that unique ID you can, for example,  use a `Guid` value converted into a string. You can define such a value as a private static string variable in the Bot class definition.

```CSharp
private static string adaptiveCardExtensionId = Guid.NewGuid().ToString();
```

The `OnSharePointTaskGetCardViewAsync` asynchronous method returns an instance of type `CardViewResponse`, while the `OnSharePointTaskGetQuickViewAsync` method returns an instance of type `QuickViewResponse`. Both `CardViewResponse` and `QuickViewResponse` are defined in the `Microsoft.Bot.Schema.SharePoint` namespace.

### Rendering Card Views

Every `CardViewResponse` instance is made of a property named `AceData` that defines some aesthetic settings like the size of the card, its icon, the title, and the description. It also defines the unique ID of the card and a JSON object to represent some custom `Properties`, if there's need. Every `CardViewResponse` instance also provides a `ViewId` string property, which declares a unique ID to identify the specific Card View instance for the ACE and which is mandatory to assign a value to. There's also an event with name `OnCardSelection`, which can be used to handle custom actions when the user selects on the Card View.

Moreover, the `CardViewResponse` instance provides a property named `CardViewParameters` that defines the actual outline of the Card View. The content of the `CardViewParameters` property defines the structure of the components model used to render the card. Using the `CardViewParameters` factory type you can define different flavors of Card Views using the following methods:

* `BasicCardViewParameters`: factory method to create a Basic Text Card View.
* `ImageCardViewParameters`: factory method to create an Image Card View.
* `PrimaryTextCardViewParameters`: factory method to create a Primary Text Card View.
* `SignInCardViewParameters`: factory method to create a Sign-in Card View.
* `SearchCardViewParameters`: factory method to create a Search Card View.
* `TextInputCardViewParameters`: factory method to create a Text Input Card View.

For instance, to create the Card View to collect user feedback you can use the `TextInputCardViewParameters` method of `CardViewParameters` and define the components that make up the Card View. Furthermore, the Card View to confirm that the feedback was collected can be created using the `ImageCardViewParameters` method. It's a common habit to define the Card Views, and the Quick Views as well, in the constructor of the Bot, storing them in a static dictionary, where the item key is the `ViewId` of the card. Then, based on the requested Card View, you can return the corresponding item of the dictionary as the result of the `OnSharePointTaskGetCardViewAsync` method.

Here follows a sample implementation of the Bot constructor, also relying on Dependency Injection to retrieve some settings from the **appsettings.json** file via the `IConfiguration` service implementation.

```CSharp
public class CollectFeedbackBot : SharePointActivityHandler
{
    private static string adaptiveCardExtensionId = Guid.NewGuid().ToString();
    private readonly IConfiguration _configuration = null;
    public readonly string _baseUrl;

    private static ConcurrentDictionary<string, CardViewResponse> cardViews = new ConcurrentDictionary<string, CardViewResponse>();

    private static string CollectFeedbackCardView_ID = "GET_FEEDBACK_CARD_VIEW";
    private static string OkFeedbackCardView_ID = "OK_FEEDBACK_CARD_VIEW";
    private static string FeedbackQuickView_ID = "FEEDBACK_QUICK_VIEW";

    public CollectFeedbackBot(IConfiguration configuration): base()
    {
        this._configuration = configuration;
        this._baseUrl = configuration["BaseUrl"];

        // ************************************
        // Add the CardViews
        // ************************************
    
        // Prepare ACE data for all Card Views
        var aceData = new AceData()
        {
            Title = "Your voice matters!",
            CardSize = AceData.AceCardSize.Large,
            DataVersion = "1.0",
            Id = adaptiveCardExtensionId
        };

        // Collect Feedback Card View (Input Text Card View)
        CardViewResponse feedbackCardViewResponse = new CardViewResponse();
        feedbackCardViewResponse.AceData = aceData;
        feedbackCardViewResponse.CardViewParameters = CardViewParameters.TextInputCardViewParameters(
            new CardBarComponent()
            {
                Id = "FeedbackCardView",
            },
            new CardTextComponent()
            {
                Text = "Please, provide feedback"
            },
            new CardTextInputComponent()
            {
                Id = "feedbackValue",
                Placeholder = "Your feedback ..."
            },
            new List<CardButtonComponent>()
            {
                new CardButtonComponent()
                {
                    Id = "SendFeedback",
                    Title = "Submit",
                    Action = new SubmitAction()
                    {
                        Parameters = new Dictionary<string, object>()
                        {
                            {"viewToNavigateTo", OkFeedbackCardView_ID}
                        }
                    }
                }
            },
            new Microsoft.Bot.Schema.SharePoint.CardImage()
            {
                Image = $"{_baseUrl}/Media/Collect-Feedback.png",
                AltText = "Collect feedback picture"
            });
        feedbackCardViewResponse.ViewId = CollectFeedbackCardView_ID;

        feedbackCardViewResponse.OnCardSelection = new QuickViewAction()
        {
            Parameters = new QuickViewActionParameters()
            {
                View = FeedbackQuickView_ID
            }
        };

        cardViews.TryAdd(feedbackCardViewResponse.ViewId, feedbackCardViewResponse);

        // OK Feedback Card View (Image Card View)
        CardViewResponse okFeedbackCardViewResponse = new CardViewResponse();
        okFeedbackCardViewResponse.AceData = aceData;
        okFeedbackCardViewResponse.CardViewParameters = CardViewParameters.ImageCardViewParameters(
            new CardBarComponent()
            {
                Id = "OkFeedbackCardView",
            },
            new CardTextComponent()
            {
                Text = "Here is your feedback '<feedback>' collected on '<dateTimeFeedback>'"
            },
            new List<BaseCardComponent>()
            {
                new CardButtonComponent()
                {
                    Id = "OkButton",
                    Title = "Ok",
                    Action = new SubmitAction()
                    {
                        Parameters = new Dictionary<string, object>()
                        {
                            {"viewToNavigateTo", CollectFeedbackCardView_ID}
                        }
                    }
                }
            },
            new Microsoft.Bot.Schema.SharePoint.CardImage()
            {
                Image = $"{_baseUrl}/Media/Ok-Feedback.png",
                AltText = "Feedback collected"
            });
        okFeedbackCardViewResponse.ViewId = OkFeedbackCardView_ID;

        okFeedbackCardViewResponse.OnCardSelection = new QuickViewAction()
        {
            Parameters = new QuickViewActionParameters()
            {
                View = FeedbackQuickView_ID
            }
        };

        cardViews.TryAdd(okFeedbackCardViewResponse.ViewId, okFeedbackCardViewResponse);
    }
}
```

Notice how the constructor relies on a `ConcurrentDictionary` to store the Card View definitions, to support multi-threaded access to the static dictionary. Notice also how the various components are used to define the outline of the `TextInputCardViewParameters` and of the `ImageCardViewParameters`.

In the following picture, you can see a diagram that explains the structure of a component-based Card View rendered in "Large" format.

![A diagram with the structure of a component based Card View in "Large" format. The shape of the Card View is divided into two main sections, the left one is made of a CardBarComponent, a CardTextComponent, a component that varies depending on the kind of Card View template selected, and a list CardButtonComponent to provide zero, one, or two buttons. On the right section there can be an instance of Microsoft.Bot.Schema.SharePoint.CardImage to render an image, if any, depending on the kind of Card View template selected.](./images/ACE-Component-Based-Structure.png)

A component-based Card View in "Large" format does have a shape divided into two main sections, the left one is made of a `CardBarComponent`, a `CardTextComponent`, a component that varies depending on the kind of Card View template selected, and a list of `BaseCardComponent` objects to provide zero, one, or two buttons. On the right section, there can be an instance of `Microsoft.Bot.Schema.SharePoint.CardImage` to render an image, if any, depending on the kind of Card View template selected

For example, the `TextInputCardViewParameters` instance is made of the following components:

* `CardBarComponent`: defines the top bar of the Card View, including the icon and the title.
* `CardTextComponent`: defines a text component with some informative text for the user.
* `CardTextInputComponent`: defines the input text field to collect feedback. Here, the `Id` property is fundamental because you need it later to retrieve the value of the textbox.
* `List<CardButtonComponent>`: defines a list of zero, one, or two action buttons. Each action button does have an `Id` property that is fundamental to identify the button pressed by the user. A button can also have a set of custom properties, which are provided to the Bot upon submission of the form.
* `Microsoft.Bot.Schema.SharePoint.CardImage`: defines an image that is rendered in the right side of the Card View.

In the code excerpt, the images used to render the Card Views are downloaded from the website hosted in the Bot project, and available under the **wwwroot** folder of the project. In that folder, you should upload the **Media** subfolder that you can find in the [samples folder of the reference GitHub repository](https://github.com/SharePoint/sp-dev-docs/tree/main/assets/bot-powered/Media).

### Serving Card Views requests

To serve the card views, you need to implement the `OnSharePointTaskGetCardViewAsync` method so that it returns the instance of the card view to collect feedback that you created in the constructor. Here follows the method implementation.

```CSharp
protected override Task<CardViewResponse> OnSharePointTaskGetCardViewAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
{
    return Task.FromResult(cardViews[CollectFeedbackCardView_ID]);
}
```

### Handling user's tasks and actions

When the user selects the submit action in a Card View, the `OnSharePointTaskHandleActionAsync` method is triggered and you can handle the submission event. In the following code excerpt, you can see how the ACE collects the feedback submission.

```CSharp
protected override Task<BaseHandleActionResponse> OnSharePointTaskHandleActionAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
{
    if (turnContext != null)
    {
        if (cancellationToken.IsCancellationRequested)
        {
            cancellationToken.ThrowIfCancellationRequested();
        }
    }
    Trace.Write("\n\n\nStarted to handle action.\n\n\n");
    JObject actionParameters = aceRequest.Data as JObject;

    if (actionParameters["type"].ToString().Equals("Submit", StringComparison.InvariantCultureIgnoreCase) &&
        actionParameters["id"].ToString().Equals("SendFeedback", StringComparison.InvariantCultureIgnoreCase))
    {
        CardViewHandleActionResponse response = new CardViewHandleActionResponse();

        string viewToNavigateTo = actionParameters["data"]["viewToNavigateTo"].ToString();
        var feedbackValue = actionParameters["data"]["feedbackValue"].ToString();
        var dateTimeFeedback = DateTime.Now;

        var nextCard = cardViews[viewToNavigateTo];

        // Configure the text content for the Card View
        var textContent = $"Here is your feedback '{feedbackValue}' collected on '{dateTimeFeedback}'";
        ((nextCard.CardViewParameters.Header.ToList())[0] as CardTextComponent).Text = textContent;

        // Set the response for the action
        response.RenderArguments = nextCard;

        Trace.Write("\n\n\nFinished handling action.\n\n\n");
        return Task.FromResult<BaseHandleActionResponse>(response);
    }
    else if (actionParameters["type"].ToString().Equals("Submit", StringComparison.InvariantCultureIgnoreCase) &&
        actionParameters["id"].ToString().Equals("OkButton", StringComparison.InvariantCultureIgnoreCase))
    {
        CardViewHandleActionResponse response = new CardViewHandleActionResponse();

        string viewToNavigateTo = actionParameters["data"]["viewToNavigateTo"].ToString();

        // Set the response for the action
        response.RenderArguments = cardViews[viewToNavigateTo];

        Trace.Write("\n\n\nFinished handling action.\n\n\n");
        return Task.FromResult<BaseHandleActionResponse>(response);
    }

    Trace.Write("\n\n\nFinished handling action.\n\n\n");
    return Task.FromResult<BaseHandleActionResponse>(new NoOpHandleActionResponse());
}
```

First of all, the method checks if there's a proper instance of the `TurnContext`, and if the user canceled the asynchronous operation. Inside the `TurnContext` instance, there's all the needed information to properly handle the user's action. For example, there's the `turnContext.Activity.Value` property that represents a `JObject` instance with a property named `data` that contains a dictionary of properties to understand the type of action and the `Id` of the source component for the action.

In the code excerpt, when the action type is **Submit** and the `Id` of the action is **SendFeedback**, it means that the user selected the submit button defined in the `TextInputCardViewParameters` instance, which is the one to collect the feedback. The actual value of the feedback is available in the data field with name equal to the `Id` of the textbox defined in the `CardTextInputComponent` component instance. The handling of the feedback is up to you. In the code excerpt, the sample configures an instance of the second Card View defined in the constructor and then instructs the ACE to render the new Card View via the `BaseHandleActionResponse` return value.

### Rendering Quick Views

While the Card Views are rendered based on a set of predefined component based templates, the Quick Views are rendered based on an Adaptive Card definition. The Adaptive Card can be defined either using a declarative and code based approach or using the `AdaptiveCards.Templating` NuGet package and reading a JSON file with an Adaptive Card definition.

> [!IMPORTANT]
> Keep into account that the `AdaptiveCards.Templating` NuGet package can parse and process JSON files with Adaptive Card definitions up to Adaptive Card schema v1.2, while using the declarative and code-based model you can leverage any version of the Adaptive Card schema.

Here follows a sample implementation of the `OnSharePointTaskGetQuickViewAsync` method, rendering a Quick View using a code-based and declarative model.

```CSharp
protected override Task<QuickViewResponse> OnSharePointTaskGetQuickViewAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
{
    // Add the Feedback QuickViews
    QuickViewResponse feedbackQuickViewResponse = new QuickViewResponse();
    feedbackQuickViewResponse.Title = "Your feedback";
    feedbackQuickViewResponse.Template = new AdaptiveCard("1.5");

    AdaptiveContainer container = new AdaptiveContainer();
    container.Separator = true;
    AdaptiveTextBlock titleText = new AdaptiveTextBlock();
    titleText.Text = "Thanks for your feedback!";
    titleText.Color = AdaptiveTextColor.Dark;
    titleText.Weight = AdaptiveTextWeight.Bolder;
    titleText.Size = AdaptiveTextSize.Large;
    titleText.Wrap = true;
    titleText.MaxLines = 1;
    titleText.Spacing = AdaptiveSpacing.None;
    container.Items.Add(titleText);

    AdaptiveTextBlock dateTimeCollectedText = new AdaptiveTextBlock();
    dateTimeCollectedText.Text = $"We truly appreciate your effort in providing valuable feedback to us. Thanks!";
    dateTimeCollectedText.Color = AdaptiveTextColor.Dark;
    dateTimeCollectedText.Size = AdaptiveTextSize.Medium;
    dateTimeCollectedText.Wrap = true;
    dateTimeCollectedText.MaxLines = 3;
    dateTimeCollectedText.Spacing = AdaptiveSpacing.None;
    container.Items.Add(dateTimeCollectedText);

    feedbackQuickViewResponse.Template.Body.Add(container);

    feedbackQuickViewResponse.ViewId = FeedbackQuickView_ID;

    return Task.FromResult(feedbackQuickViewResponse);
}
```

The code relies on the `AdaptiveCard` type defined in the `AdaptiveCards` NuGet package and builds the content of the Adaptive Card nesting various blocks of content into a hierarchy of elements. In the code excerpt, there's an `AdaptiveContainer` made of two `AdaptiveTextBlock` instances.

## Define the **manifest.json** file for the solution

Create a new folder with the name **TeamsAppManifest** in the root folder of your project and add a couple of image files for the icons of the Microsoft 365 application that you're defining and a **manifest.json** file.

The image files should be the following ones:

* **icon-color.png**: a 192x192 pixel PNG colored image with a transparent background.
* **icon-outline.png**: a 32x32 pixel PNG wireframe image with a transparent background.

The manifest file should look like the following:

```JSON
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.14/MicrosoftTeams.schema.json",
  "manifestVersion": "1.16",
  "version": "1.0.0",
  "id": "<App-Client-ID>",
  "packageName": "collectfeedback.botpoweredace",
  "developer": {
    "name": "<Your Company name>",
    "websiteUrl": "<Your Company WebSite>",
    "privacyUrl": "<Your Company Privacy Policy>",
    "termsOfUseUrl": "<Your Company Terms of Use>",
    "mpnId": "<Your MPN ID>"
  },
  "name": {
    "short": "Collect Feedaback Bot Powered ACE",
    "full": "This is a basic sample of a Bot Powered ACE for Microsoft Viva Connections Dashboard to collect user's feedback"
  },
  "description": {
    "short": "Basic sample of a Bot Powered ACE for Microsoft Viva Connections Dashboard to collect user's feedback",
    "full": "Basic sample of how to use the latest release of the Bot Framework SDK to build a Bot Powered ACE for Microsoft Viva Connections Dashboard to collect user's feedback"
  },
  "icons": {
    "outline": "icon-outline.png",
    "color": "icon-color.png"
  },
  "accentColor": "#FFFFFF",
  "bots": [
    {
      "botId": "<App-Client-ID>",
      "needsChannelSelector": false,
      "isNotificationOnly": false,
      "supportsCalling": false,
      "supportsVideo": false,
      "supportsFiles": false,
      "scopes": [
        "team",
        "personal",
        "groupchat"
      ]
    }
  ],
  "dashboardCards": [
    {
      "id": "<App-Client-ID>",
      "displayName": "Collect Feedaback",
      "description": "Bot Powered ACE to collect user's feedback",
      "icon": {
        "officeUIFabricIconName": "Feedback"
      },
      "contentSource": {
        "sourceType": "bot",
        "botConfiguration": {
          "botId": "<App-Client-ID>"
        }
      },
      "defaultSize": "medium"
    }
  ],
  "permissions": [
    "identity"
  ],
  "validDomains": [
    "<your-ngrok-reverse-proxy-name>.ngrok.io"
  ]
}
```

In the **manifest.json** file, you should replace `<App-Client-ID>` with the actual Client ID of your Microsoft App. You should also configure the actual URL of your Bot in the `validDomains` section of the manifest. Lastly, you should consider providing real values for the settings in the `developer` section. All of the URLs in the `developer` section need to target addresses under HTTPS.

Notice the `dashboardCards` section that defines the actual settings for your Bot Powered ACEs. In particular, through this section you can configure the `id` of the Microsoft App backing your Azure Bot, the `displayName` and `description` of the ACE, as well as the `icon` as a Fluent UI Icon, the Bot that handles the requests and that must be configured in the `bots` section of the **manifest.json**, and last but not least the `defaultSize` for your ACE in the Viva Connections Dashboard.

You can consider copying and reusing the images and the **manifest.json** templates from the [samples folder of the reference GitHub repository](https://github.com/SharePoint/sp-dev-docs/tree/main/assets/bot-powered/TeamsAppManifest) associated with this tutorial.

## Run and test the solution

You're now ready to package and deploy your custom solution. You simply need to package the **manifest.json** file and the two images into a .ZIP file, like you would do with any other Microsoft Teams or Microsoft 365 custom application. Name the .ZIP file with whatever name you like, open the App Catalog of your target SharePoint Online tenant, and upload the .ZIP file as a new application package.

The SharePoint Online server-side infrastructure recognizes the manifest structure and prompts you to enable and deploy the solution on the tenant.

![The UI of the new SharePoint AppCatalog prompting to enable the solution and make it tenant-wide available.](./images/App-Catalog-Package-Publishing.png)

Make the solution tenant-wide available, by selecting the option **Enable this app and add it to all sites**, and the Bot Powered ACE is available in the Viva Connections Dashboard.

> [!NOTE]
>Remember to start ngrok, or any other reverse proxy of your choice, before testing the Bot Powered ACE. 

Now, run the Visual Studio project in debug mode (by pressing F5). Open the Microsoft Viva Connections Dashboard. Edit its content and search for the new Bot Powered ACE that you installed.

![The UI of the new Viva Connections Dashboard while adding a new ACE. There is the new Collect Feedback ACE available in the list of Adaptive Card Extensions. There is also the rendering of the sample ACE in background, already inserted in the Viva Connections Dashboard.](./images/Bot-Powered-ACE-Collect-Feedback-UI-Adding-to-Dashboard.png)

In the upcoming articles of this guidance, you also learn how to publish and host the Bot Powered ACEs in a real hosting environment on Microsoft Azure, rather than running them locally on a development environment.

## Additional readings

Now that you have built your first Bot Powered ACE, you're ready to dig into additional details by reading the following articles. 
 
* [Authentication and Authorization in Bot Powered Adaptive Card Extensions](./AuthN-and-AuthZ-in-Bot-Powered-ACEs.md)
