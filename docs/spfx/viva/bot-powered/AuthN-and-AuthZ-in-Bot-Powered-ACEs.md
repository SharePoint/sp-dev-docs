---
title: Authentication and Authorization in Bot Powered Adaptive Card Extensions
description: Learn how to secure Bot Powered ACEs for Microsoft Viva Connections.
ms.date: 11/04/2024
ms.localizationpriority: high
---
# Authentication and Authorization in Bot Powered Adaptive Card Extensions

Bot Powered Adaptive Card Extensions (ACEs) often require a security context. In fact, whenever you need to identify the consumer tenant and/or the user you need to rely on Authentication. Whenever you need to enable functionalities based on the current user's profile, you need to rely on Authorization.
Being the Bot Powered ACEs based on the Azure Bot technology, also Authentication and Authorization use the same security architecture of regular Azure Bots.
To secure a Bot Powered ACE, there are some configuration steps that you need to accomplish. You also need to write some code in your implementation to handle the sign-in and sign out flows. In this article, you learn how to secure a Bot Powered ACE in order to authenticate and authorize a user.

## Understanding the sample scenario

Let's assume that you want to create a Bot Powered ACE to write a welcome message for users, writing their name and the user principal name in a Card View. You want to authenticate users via OAuth with Microsoft Entra ID. Following picture, you can see how the Adaptive Card Extension looks like in the Viva Connections desktop experience.

![The UI of the sample Bot Powered ACE in the Viva Connections desktop experience. There is a Card View showing a sign-in interface with a "Sign-in" button. There is also another Card View showing a welcome message for an authenticated users.](./images/Bot-Powered-ACE-Welcome-User-UI-Desktop.png)

Following picture you can see how the Adaptive Card Extension looks like in the Viva Connections mobile experience.

![The UI of the sample Bot Powered ACE in the Viva Connections mobile experience. There is a Card View showing a sign-in interface with a "Sign-in" button. There is also another Card View showing a welcome message for an authenticated users.](./images/Bot-Powered-ACE-Welcome-User-UI-Mobile.png)

From a developer point of view, you build the ACE once and you benefit of it in both desktop and mobile experiences.
The whole source code of the .NET sample is available in the following GitHub repository: [Welcome User Bot Powered ACE](https://github.com/pnp/viva-dev-bot-powered-aces/tree/main/samples/dotnet/WelcomeUserBotPoweredAce).

## Developing a Secured Bot Powered ACE with Microsoft .NET

First of all, you should create a Bot Powered ACE following the guidance provided in article ["Building your first Bot Powered Adaptive Card Extension,"](./Building-Your-First-Bot-Powered-ACE.md) stopping before the section ["Implement the actual Bot Powered ACE."](./Building-Your-First-Bot-Powered-ACE.md#implement-the-actual-bot-powered-ace)
For the sake of simplicity, assume that the Bot Powered ACE project name is "WelcomeUserBotPoweredAce" and register the Azure Bot accordingly to the guidance. 

### Configuring security for a Bot Powered ACE

Before starting to develop the actual Bot Powered ACE, you need to enrich the configuration of the Azure Bot and of the Microsoft App behind the scenes of the Azure Bot.
To access the Microsoft App backing the Azure Bot, open the "Configuration" panel of the Azure Bot and select the "Manage Password" link. In the Microsoft Entra ID application, select the Authentication panel and add the following URL as another "Redirect URI" for the application.

```http
https://token.botframework.com/.auth/web/redirect
```

Select the "Save" button of the Authentication page when you're done configuring the extra URL. Then you need to configure an OAuth connection for the Azure Bot. To configure the OAuth connection, go back to the "Configuration" panel of the Azure Bot and select the "Add OAuth Connection Settings" button.

![The configuration panel for an Azure Bot. It includes settings about Messaging Endpoint URL, the Microsoft App ID, the Application Insights keys, the Schema Transformation Version, and the OAuth Connection settings. The "Add OAuth Connection Settings" button is highlighted.](./images/Azure-Portal-Configure-OAuth-Connection-Azure-Bot-01.png)

You're prompted with a panel to configure the name of the new OAuth connection and the service provider that you want to use. The name can be whatever text you like, but you need to save it in a safe place because you need it later. Let's name the connection "WelcomeUserBot-EntraID." The service provider defines the Identity Provider to use for the actual OAuth connection. There are plenty of options. In order to rely on Microsoft Entra ID, choose "Azure Active Directory v2."
After selecting the service provider, you have to configure it. For "Azure Active Directory v2" you have to provide:

* Client ID: the client ID of the Microsoft App behind the scenes of your Azure Bot. It's the value that you get while registering the Azure Bot.
* Client secret: the client secret of the Microsoft App behind the scenes of your Azure Bot. It's the value that you get while registering the Azure Bot.
* Token exchange URL: the URL to retrieve an OAuth token for your Microsoft App. For a multitenant application, it should be like: *https://login.microsoftonline.com/common/oauth2/v2.0/token*. Notice the *common* part, which for a single-tenant application should be replaced with the actual tenant ID of the target tenant.
* Tenant ID: the tenant ID of the Microsoft App behind the scenes of your Azure Bot. For a multitenant application, it should be *common*. For a single-tenant application, it's the tenant ID of the target tenant.
* Scopes: space separated list of delegated permission scopes that you want to have in the OAuth Access Token when the user signs-in to your ACE. They must be configured and granted in the "API permissions" panel of the Microsoft App behind the scenes of your Azure Bot.

Once configured the new OAuth connection, select the "Save" button, and eventually select also the "Test Connection" button to test the connection. Following picture shows the OAuth connection panel properly configured.

![The configuration panel for a new OAuth connection of an Azure Bot. It includes settings about Name, Service Provider, Client id, Client secret, Token Exchange URL, Tenant ID, Scopes. There are also a "Save" and a "Cancel" button, as well as a "Delete" or a "Test Connection" button.](./images/Azure-Portal-Configure-OAuth-Connection-Azure-Bot-02.png)

If you select the "Test Connection" button, you can get a preview of an OAuth Access Token for your Azure Bot for the current user. Following picture shows how the "Test Connection" functionality gives you access to the Access Token.

![The page to "Test Connection". There is a textbox with an hidden access token value. You can select the "Show Token" button to see the actual text of the token. You can select the "Copy Token" button to copy the token value in the clipboard.](./images/Azure-Portal-Configure-OAuth-Connection-Azure-Bot-03.png)

If you select the "Copy Token" button, you can then open the [https://jwt.ms](https://jwt.ms) web site in a web browser, paste the token value, and have a look at its content for learning and debugging purposes only.

> [!NOTE]
> If you inspect the claims of the token, you can see the `aud` (Audience, which is the Client ID of the Microsoft Graph) `app_displayname` (App display name), `iss` (Token issuer), `appid` (Client ID), `tid` (Tenant ID), `scp` (Permission scopes). You can also double-check that they refer to the application that you just configured.

### Supporting single sign-on with Microsoft Entra ID

You can configure single sign-on, so that users can automatically be authenticated and they don't need to do anything to get personalized content or tailored functionalities. If you want to do so in your custom Bot Powered ACEs, you need to follow few more steps.

First of all, you need to apply some custom settings to the application registered in Microsoft Entra ID for your Bot. Go back to the Bot "Configuration" panel, to open the application settings in Microsoft Entra ID, select the "Manage Password" link. Move to the "Expose an API" panel and configure one more item in the list of "Authorized client applications." The authorized client application that you need to configure is the "SharePoint Online Web Client Extensibility" with the unique Application ID value of "08e18876-6177-487e-b8b5-cf950c1e598c." Assign to that application the permission scope exposed by the app and that you already assigned to the Microsoft Teams applications. 

At the end of this stage, the "Expose an API" panel should look like in the following picture.

![The "Expose an API" panel configured with a custom Application ID URI, a custom scope with name "access_as_user", and three authorized client applications.](./images/Azure-Portal-Create-Azure-Bot-09b.png)

Now, browse to the Microsoft Entra ID management portal at the URL [https://entra.microsoft.com/](https://entra.microsoft.com/). Expand the "Applications" menu group and select the "App registrations" panel. In the page, select "All applications" and write "SharePoint Online Web Client" in the search box. Select the application with name "SharePoint Online Client Extensibility Web Application Principal," which is the application used by SharePoint Framework to consume first party and third party APIs.

![The management page of Microsoft Entra ID to search for an application, when searching for "SharePoint Online Client Extensibility Web Application Principal".](./images/Azure-Portal-Configure-SPO-Web-App-Principal-01.png)

Select the "API permissions" panel, choose the tab "APIs my organization uses" and search for the application backing your Bot, for example "WelcomeUserBotPoweredAce." Select your Bot application, like illustrated in the following picture.

![The panel to add permissions to an application searching for "APIs my organization uses" and filtered by the name of the application.](./images/Azure-Portal-Configure-SPO-Web-App-Principal-02.png)

Once you selected the Bot application, choose and assign to the "SharePoint Online Client Extensibility Web Application Principal" application the Delegated permission "access_as_user" that you configured for your Bot application. 

![The panel to configure a new delegated permission for the "SharePoint Online Client Extensibility Web Application Principal" application.](./images/Azure-Portal-Configure-SPO-Web-App-Principal-03.png)

Now, select the "Grant admin consent for ..." button, in order to grant the permissions at tenant level.

## Understanding the Bot Powered ACE authentication flow

Before digging into the actual development of the authentication logic in the Bot Powered ACE, it's important to understand how the authentication flow works.
If you configured the Bot application to support single sign-on, the user's authentication is automatic and transparent to the user. However, if you didn't configure single sign-on, the authentication flow is a bit more complex and worth explaining.

By default, when you configure any OAuth connection for your Bot, when the user signs in there's a popup dialog (both on desktop and on mobile) taking care of the actual authentication. The dialog allows the user to authenticate against the target Identity Provider. Then, it returns a magic code (a sequence of numbers), which you can then use in your own Bot code to acquire a token through the OAuth connection.

When the configured Identity Provider is Microsoft Entra ID (previously known as Azure Active Directory v2) and there's single sign-on in place, the authentication is automatic and you don't need to manually handle the magic code. If your code has single sign-on logic but the application isn't set up correctly, the Bot Powered ACE doesn't show up. If that is the case, users see an error when adding the Bot Powered ACE to the dashboard.

Finally, if Microsoft Entra ID is the Identity Provider and single sign-on isn't supported, there's still a magic code. Its handling is automatic, and you just need to use it in your code to get a token. 

In the scenarios where there isn't automatic authentication, the user needs to copy the value of the magic code and provide it manually to your ACE. It's up to you to provide a custom button to do so. When the user selects the button, you can show a custom UI and collect the magic code in the logic. Once you have the magic code, you can acquire an actual access token. At the time of this writing, you need to manually define the UI to collect the magic code value. In fact, there isn't any native component or Card View template to do that.
Even when you use Microsoft Entra ID without single sign-on, in case the user's browser blocks cookies, the end user needs to manually copy the magic code value in the clipboard. Then, the user needs to provide the magic code to the Bot Powered ACE via a custom "Complete sign in" button and a custom developed user experience.
The following diagram explains how the authentication flow works.

![The flow diagram explaining how the authentication process works in Bot Powered ACEs depending on the different types of OAuth connections configured.](./images/Bot-Powered-ACEs-SignIn-Flow-Diagram.png)

To implement the flow, let's move to the actual implementation of the Bot Powered ACE.

### Implementing security in your Bot

Go back to the Visual Studio project that you created before. Open the **appsettings.json** file and add a new setting called "ConnectionName" and set its value to the name of the OAuth connection that you created. Here you can see how the settings file should look like.

```JSON
{
  "MicrosoftAppType": "MultiTenant",
  "MicrosoftAppId": "<App-Client-ID>",
  "MicrosoftAppPassword": "<Client-Secret>",
  "MicrosoftAppTenantId": "<Tenant-ID>",
  "ConnectionName": "<Connection-Name>"
}
```

Rename the **EmptyBot.cs** file into **WelcomeUserBot.cs**, change the base class from `ActivityHandler` to `SharePointActivityHandler`, and import the namespace `Microsoft.Bot.Builder.SharePoint`.
Follow the instructions provided in the ["Implement the actual Bot Powered ACE"](./Building-Your-First-Bot-Powered-ACE.md#implement-the-actual-bot-powered-ace) section of the reference article ["Building your first Bot Powered Adaptive Card Extension"](./Building-Your-First-Bot-Powered-ACE.md) to implement the basic code of the Bot Powered ACE. Specifically, implement four Card Views:

* Welcome: it's the Card View that shows the welcome message with user display name and user principal name of the currently authenticated user.
* Sign-In: it's the Card View to allow an end user to sign-in via Microsoft Entra ID.
* Signed-Out: it's the Card View to confirm when an authenticated user signed out.
* Error: it's the Card View to show an error message, in case an error occurs.

#### Implementing the welcome card view

In the following code excerpt, you can see how the welcome Card View is defined in the constructor of the Bot.

```CSharp
// Prepare ACE data for all Card Views
var aceData = new AceData()
{
    Title = "Welcome!",
    CardSize = AceData.AceCardSize.Large,
    DataVersion = "1.0",
    Id = adaptiveCardExtensionId
};

// Home Card View (Primary Text Card View)
CardViewResponse homeCardViewResponse = new CardViewResponse();
homeCardViewResponse.AceData = aceData;
homeCardViewResponse.CardViewParameters = CardViewParameters.PrimaryTextCardViewParameters(
    new CardBarComponent()
    {
        Id = "HomeCardView",
    },
    new CardTextComponent()
    {
        Text = "Welcome <displayName>!"
    },
    new CardTextComponent()
    {
        Text = "Your UPN is: <upn>"
    },
    new List<BaseCardComponent>()
    {
        new CardButtonComponent()
        {
            Id = "SignOut",
            Title = "Sign out",
            Action = new SubmitAction()
        }

    });
homeCardViewResponse.ViewId = HomeCardView_ID;

cardViews.TryAdd(homeCardViewResponse.ViewId, homeCardViewResponse);
```

As you can see, it's a Primary Text Card View, which simply renders a text with the current user display name in the header. There's also another text with the user principal name in the body. Additionally there's a "Sign out" button that allows the user to sign out, when there's a current authenticated session.

When it comes to the implementation of the Sign-In card view, you have two options:

- [Implementing sign-in card view with automatic magic code handling](#implementing-sign-in-card-view-with-automatic-magic-code-handling)
- [Implementing sign-in card view with single sign-in (suggested scenario)](#implementing-sign-in-card-view-with-single-sign-on)

Here you can find instruction about both of the options.

#### Implementing sign-in card view with automatic magic code handling

In case you want to support Microsoft Entra ID (Azure Active Directory v2) authentication with magic code automatic handling, you need to implement the Sign-In card as follows:

```CSharp
// SignIn Card View (Sign-In Card View)
CardViewResponse signInCardViewResponse = new CardViewResponse();
signInCardViewResponse.AceData = aceData;
signInCardViewResponse.CardViewParameters = CardViewParameters.SignInCardViewParameters(
    new CardBarComponent()
    {
        Id = "SignInCardView",
    },
    new CardTextComponent()
    {
        Text = "User's Sign in!"
    },
    new CardTextComponent()
    {
        Text = "Please, sign in ..."
    },
    new CardButtonComponent()
    {
        Id = "CompleteSignInButton",
        Title = "Complete sign in",
        Action = new QuickViewAction()
        {
            Parameters = new QuickViewActionParameters()
            {
                View = SignInQuickView_ID
            }
        }
    }
);
signInCardViewResponse.CardViewParameters.CardViewType = "signIn";
signInCardViewResponse.ViewId = SignInCardView_ID;

cardViews.TryAdd(signInCardViewResponse.ViewId, signInCardViewResponse);
```

You need to use the `SignInCardViewParameters` factory method to create a Sign In Card View, which is designed to implement the sign in logic. The Sign In Card View looks like a Primary Text Card View, in fact there are text components both in the header and in the body. However, the footer requires you to provide a button to implement extra logic to handle the completion of the sign in flow. By default, every Sign In Card View has a Sign in button that is provided out of the box in the Card View template. The extra button in the Card View is for the "Complete sign in" logic, as explained in the flow diagram in the section ["Understanding the Bot Powered ACE authentication flow."](#understanding-the-bot-powered-ace-authentication-flow)
In the sample implementation, when the user selects the "Complete sign in" button a custom Quick View is rendered in order to collect the magic code and process it to acquire the access token.
One last important thing to notice is the setting of the `CardViewType` property for the Card View object to value "signIn," which is the one required to configure the automatic magic code handling without single sign-on. 

#### Implementing sign-in card view with single sign-on

In case you want to support the single sign-on experience, which is the suggested scenario, you need to implement the Sign-In card as follows:

```CSharp
// SignIn Card View (Sign-In Card View)
CardViewResponse signInCardViewResponse = new CardViewResponse();
signInCardViewResponse.AceData = aceData;
signInCardViewResponse.CardViewParameters = CardViewParameters.SignInCardViewParameters(
    new CardBarComponent()
    {
        Id = "SignInCardView",
    },
    new CardTextComponent()
    {
        Text = "User's Sign in!"
    },
    new CardTextComponent()
    {
        Text = "Please, sign in ..."
    },
    new CardButtonComponent()
);
signInCardViewResponse.CardViewParameters.CardViewType = "signInSso";
signInCardViewResponse.ViewId = SignInCardView_ID;

cardViews.TryAdd(signInCardViewResponse.ViewId, signInCardViewResponse);
```

Notice that the "Complete sign in" button isn't needed anymore, being the authentication experience fully automated and based on single sign-on. You can provide an empty and unconfigured instance of `CardButtonComponent` as the last argument for the `SignInCardViewParameters` factory method. Moreover, you configure the `CardViewType` property for the Card View object to value "signInSso."

#### Implementing other card views

In the following code excerpt you can see the SignedOut card implementation, which defines a card that confirms to the user that the sign out was completed:

```CSharp
// Signed out Card View (Basic Card View)
CardViewResponse signedOutCardViewResponse = new CardViewResponse();
signedOutCardViewResponse.AceData = aceData;
signedOutCardViewResponse.CardViewParameters = CardViewParameters.BasicCardViewParameters(
    new CardBarComponent()
    {
        Id = "SignedOutCardView",
    },
    new CardTextComponent()
    {
        Text = "You are now signed out!"
    },
    new List<BaseCardComponent>()
    {
        new CardButtonComponent()
        {
            Id = "OkSignedOut",
            Title = "Ok",
            Action = new SubmitAction()
            {
                Parameters = new Dictionary<string, object>()
                {
                    { "viewToNavigateTo", HomeCardView_ID }
                }
            }
        }
    });
signedOutCardViewResponse.ViewId = SignedOutCardView_ID;

cardViews.TryAdd(signedOutCardViewResponse.ViewId, signedOutCardViewResponse);
```

The Signed out Card View is a basic card with a simple text message in the body and a button to go back to the home Card View.

> [!NOTE]
> When you have single sign-on in place, you can still trigger the sign out logic. However, as soon as the user goes back to the home card view, the single sign-on logic is triggered and the user is authenticated again.

In the sample solution, there's also an Error Card View, which for the sake of simplicity isn't illustrated in this article but is available in the [reference solution](https://github.com/pnp/viva-dev-bot-powered-aces/tree/main/samples/dotnet/WelcomeUserBotPoweredAce).

#### Implementing magic code handling quick view

Here follows the definition of the Quick View used to implement the "Complete sign in" logic.

> [!NOTE]
> If you plan to rely on single sign-on, you can skip reading this section. On the contrary, if you plan to rely on an Identity Provider other than Microsoft Entra ID or if you want to use the sign-in logic with magic code instead of the single sign-on experience, then you should read and follow this section, too.

```CSharp
// Complete Sign In Quick View
QuickViewResponse signInQuickViewResponse = new QuickViewResponse();
signInQuickViewResponse.Title = "Sign In";
signInQuickViewResponse.Template = new AdaptiveCard("1.5");

AdaptiveContainer signInContainer = new AdaptiveContainer();
signInContainer.Separator = true;

AdaptiveTextBlock signInTitleText = new AdaptiveTextBlock
{
    Text = "Complete Sign In",
    Color = AdaptiveTextColor.Dark,
    Weight = AdaptiveTextWeight.Bolder,
    Size = AdaptiveTextSize.Medium,
    Wrap = true,
    MaxLines = 1,
    Spacing = AdaptiveSpacing.None
};
signInContainer.Items.Add(signInTitleText);

AdaptiveTextBlock signInDescriptionText = new AdaptiveTextBlock
{
    Text = "Input the magic code from Microsoft Entra ID to complete sign in.",
    Color = AdaptiveTextColor.Dark,
    Size = AdaptiveTextSize.Default,
    Wrap = true,
    MaxLines = 6,
    Spacing = AdaptiveSpacing.None
};
signInContainer.Items.Add(signInDescriptionText);

AdaptiveNumberInput signInMagicCodeInputField = new AdaptiveNumberInput
{
    Placeholder = "Enter Magic Code",
    Id = "magicCode"
};
signInContainer.Items.Add(signInMagicCodeInputField);

AdaptiveSubmitAction signInSubmitAction = new AdaptiveSubmitAction
{
    Title = "Submit",
    Id = "SubmitMagicCode"
};
signInQuickViewResponse.Template.Actions.Add(signInSubmitAction);

signInQuickViewResponse.Template.Body.Add(signInContainer);
signInQuickViewResponse.ViewId = SignInQuickView_ID;

quickViews.TryAdd(signInQuickViewResponse.ViewId, signInQuickViewResponse);
```

It's a Quick View with a number input field with ID **magicCode** and a submit button with ID **SubmitMagicCode**. The following picture shows the Quick View in action.

![The UI of the sample Bot Powered ACE in the Viva Connections desktop experience when the user selects the "Complete sign in" button. There is a text field to provide the magic code value and there is a button to submit the magic code.](./images/Bot-Powered-ACE-Welcome-Complete-Sign-In.png)

> [!IMPORTANT]
> Being the "Complete sign in" user experience developed by you, it is completely customizable. So the layout, text messages, buttons, etc. are up to you and you can freely design them.

### Handling the magic code

Here you can see how to implement the scenarios where you want to authenticate users using a magic code. Once you have the magic code, either automatically with Microsoft Entra ID or manually with any other Identity Provider, you need to process its value to acquire an actual access token. Depending on the sign in flow, you can handle the magic code while rendering a Card View in the `OnSharePointTaskGetCardViewAsync` method, or in the `OnSharePointTaskHandleActionAsync` method when the user submits the magic code via the "Complete sign in" manual experience.

#### Automatically handling the magic code

In the following code excerpt, you can see how to process the magic code automatically submitted by the Microsoft Entra ID experience, when rendering a card view.

```CSharp
protected async override Task<CardViewResponse> OnSharePointTaskGetCardViewAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
{
    JObject aceData = aceRequest.Data as JObject;
    string magicCode = null;
    if (aceData["magicCode"] != null)
    {
        magicCode = aceData["magicCode"].ToString();
    }
    // Check to see if the user has already signed in
    var (displayName, upn) = await GetAuthenticatedUser(magicCode, turnContext, cancellationToken);
    if (displayName != null && upn != null)
    {
        var homeCardView = cardViews[HomeCardView_ID];
        if (homeCardView != null)
        {
            ((homeCardView.CardViewParameters.Header.ToList())[0] as CardTextComponent).Text = $"Welcome {displayName}!";
            ((homeCardView.CardViewParameters.Body.ToList())[0] as CardTextComponent).Text = $"Your UPN is: {upn}";
            return homeCardView;
        }
    }
    else
    {
        var signInCardView = cardViews[SignInCardView_ID];
        if (signInCardView != null)
        {
            var signInResource = await GetSignInResource(turnContext, cancellationToken);
            var signInLink = signInResource != null ? new Uri(signInResource.SignInLink) : new Uri(string.Empty);

            signInCardView.AceData.Properties = Newtonsoft.Json.Linq.JObject.FromObject(new Dictionary<string, object>() {
                { "uri", signInLink },
                { "connectionName", this._connectionName }
            });
            return signInCardView;
        }
    }

    return cardViews[ErrorCardView_ID];
}
```

You can retrieve the value of the magic code from the object of type `AceRequest` provided to the `OnSharePointTaskGetCardViewAsync` method. The magic code value is a dictionary value of the property of type `JObject` with name `Data`. Once you have the magic code value, you need to provide it to an infrastructural service of type `UserTokenClient`, which is available via dependency injection in the Bot logic.
To properly handle the user token, which is a JWT (JSON Web Token) object, you can use the `System.IdentityModel.Tokens.Jwt` NuGet package. As such, add the package to your project and implement the following infrastructural methods.

> [!NOTE]
> If you have configured the single sign-on scenario, the magic code will always be empty. However, all the logic to retrieve an access token and to get the user's identity stay the same and the `OnSharePointTaskGetCardViewAsync` method can be the same.

Here follows the internal logic that you should rely on to manage the access token and the current user's identity retrieval.

```CSharp
private async Task<(string displayName, string upn)> GetAuthenticatedUser(string magicCode, ITurnContext<IInvokeActivity> turnContext, CancellationToken cancellationToken)
{
    string displayName = null;
    string upn = null;

    try
    {
        var response = await GetUserToken(magicCode, turnContext, cancellationToken).ConfigureAwait(false);
        if (response != null && !string.IsNullOrEmpty(response.Token))
        {
            var token = new System.IdentityModel.Tokens.Jwt.JwtSecurityToken(response.Token);
            displayName = token.Claims.FirstOrDefault(c => c.Type == System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Name)?.Value;
            upn = token.Claims.FirstOrDefault(c => c.Type == "upn")?.Value;
        }
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Error while trying to retrieve current user's displayName and UPN!");
    }

    return (displayName, upn);
}

private async Task<TokenResponse> GetUserToken(string magicCode, ITurnContext<IInvokeActivity> turnContext, CancellationToken cancellationToken)
{
    // Get the UserTokenClient service instance
    var userTokenClient = turnContext.TurnState.Get<UserTokenClient>();

    // Assuming the bot is already configured for SSO and the user has been authenticated
    return await userTokenClient.GetUserTokenAsync(
        turnContext.Activity.From.Id,
        _connectionName, // The name of your Azure AD connection
        turnContext.Activity.ChannelId,
        magicCode,
        cancellationToken).ConfigureAwait(false);
}
```

The `GetAuthenticatedUser` method accepts the magic code value and the Bot `TurnContext` instance. Internally it uses the `GetUserToken` method to retrieve the actual access token value and then uses the `JwtSecurityToken` class of `System.IdentityModel.Tokens.Jwt` to decode the token and get access to the user's display name and user principal name.

> [!NOTE]
> Using the same technique and reading the **scp** claim (Scope) or any other claim of your interest, you can eventually implement custom authorization logic for your Bot Powered ACE.

The `GetUserToken` method retrieves an instance of the `UserTokenClient` service and makes the actual request for the token using the `GetUserTokenAsync`, which accepts the following input arguments:

* the ID of the sender (From) for the current Activity of the Bot instance
* the name of the OAuth connection defined in the configuration of the Azure Bot
* the ID of the Channel for the Bot instance
* the magic code value, which can be null if there's single sign-on or a cached user's token
* the cancellation token for the asynchronous request

The result of the `GetUserTokenAsync` method is an instance of the `TokenResponse` type that includes a `Token` property with the actual value of the access token.
Once you have the access token and you extracted the display name and the user principal name, you can render them in the welcome Card View.

In case there's no magic code value in the request object there could be three different scenarios:

* there's single sign-on in place: the backend infrastructure of the Azure Bot automatically provides a token for the current user, without the need to provide the magic code
* the user is already signed in: the backend infrastructure of the Azure Bot automatically provides a token for the current user, without the need to provide the magic code
* the user isn't yet signed in: the Bot Powered ACE needs to render the Sign In Card View to invite the user to sign in

In the latter scenario, the Sign In Card View needs to be configured with a couple of properties to instruct the Bot infrastructure about how to handle the sign in flow. Specifically, you need to provide two custom properties through the `AceData.Properties` of the card.

```CSharp
var signInResource = await GetSignInResource(turnContext, cancellationToken);
var signInLink = signInResource != null ? new Uri(signInResource.SignInLink) : new Uri(string.Empty);

signInCardView.AceData.Properties = Newtonsoft.Json.Linq.JObject.FromObject(new Dictionary<string, object>() {
    { "uri", signInLink },
    { "connectionName", this._connectionName }
});
return signInCardView;
```

The **uri** property represents the URL to trigger the sign in flow and needs to be retrieved using the `UserTokenClient` service. Here you can see how to do that with the custom method `GetSignInResource`.

```CSharp
private async Task<SignInResource> GetSignInResource(ITurnContext<IInvokeActivity> turnContext, CancellationToken cancellationToken)
{
    // Get the UserTokenClient service instance
    var userTokenClient = turnContext.TurnState.Get<UserTokenClient>();

    // Retrieve the Sign In Resource from the UserTokenClient service instance
    var signInResource = await userTokenClient.GetSignInResourceAsync(_connectionName, (Microsoft.Bot.Schema.Activity)turnContext.Activity, null, cancellationToken).ConfigureAwait(false);
    return signInResource;
}
```

While the **connectionName** property contains the name of the OAuth connection configured for the Azure Bot.

#### Manually handling the magic code with the "Complete sign in" custom logic

In case you need to manually handle the magic code, you need to implement some custom logic in the `OnSharePointTaskHandleActionAsync` method. Here follows a code excerpt of the method.

```CSharp
protected async override Task<BaseHandleActionResponse> OnSharePointTaskHandleActionAsync(ITurnContext<IInvokeActivity> turnContext, AceRequest aceRequest, CancellationToken cancellationToken)
{
    if (turnContext != null)
    {
        if (cancellationToken.IsCancellationRequested)
        {
            cancellationToken.ThrowIfCancellationRequested();
        }
    }
    JObject actionParameters = aceRequest.Data as JObject;

    if (actionParameters != null)
    {
        var actionId = actionParameters["id"].ToString();
        if (actionId == "SubmitMagicCode")
        {
            var magicCode = actionParameters["data"]["magicCode"].ToString();
            var (displayName, upn) = await GetAuthenticatedUser(magicCode, turnContext, cancellationToken);

            var homeCardView = cardViews[HomeCardView_ID];
            if (homeCardView != null && displayName != null && upn != null)
            {
                ((homeCardView.CardViewParameters.Header.ToList())[0] as CardTextComponent).Text = $"Welcome {displayName}!";
                ((homeCardView.CardViewParameters.Body.ToList())[0] as CardTextComponent).Text = $"Your UPN is: {upn}";

                return new CardViewHandleActionResponse
                {
                    RenderArguments = homeCardView
                };
            }
        }
        else if (actionId == "SignOut")
        {
            await SignOutUser(turnContext, cancellationToken);

            return new CardViewHandleActionResponse
            {
                RenderArguments = cardViews[SignedOutCardView_ID]
            };
        }
        else if (actionId == "OkSignedOut")
        {
            return new CardViewHandleActionResponse
            {
                RenderArguments = cardViews[SignInCardView_ID]
            };
        }
        else if (actionId == "OkError")
        {
            return new CardViewHandleActionResponse
            {
                RenderArguments = cardViews[HomeCardView_ID]
            };
        }
    }

    return new CardViewHandleActionResponse
    {
        RenderArguments = cardViews[ErrorCardView_ID]
    };
}
```

> [!NOTE]
> The logic to handle the magic code when the `actionId` value is "SubmitMagicCode" and the magic code value is provided manually via a dedicated quick view is not needed when using the single sign-on scenario. You can skip it.

The key part of the method is still the processing of the object of type `AceRequest`. If the user selects the "Submit" button in the "Complete sign in" Quick View, you can extract the magic code value from the `Data` property of the request and then you can go through the same process as before, invoking the `GetAuthenticatedUser` method.

In the code excerpt, you can also see how the sign out is handled, invoking the custom `SignOutUser` method, which is illustrated in the following code excerpt.

```CSharp
private async Task SignOutUser(ITurnContext<IInvokeActivity> turnContext, CancellationToken cancellationToken)
{
    // Get the UserTokenClient service instance
    var userTokenClient = turnContext.TurnState.Get<UserTokenClient>();

    // Sign out the current user
    await userTokenClient.SignOutUserAsync(
        turnContext.Activity.From.Id,
        _connectionName, // The name of your Azure AD connection
        turnContext.Activity.ChannelId,
        cancellationToken).ConfigureAwait(false);
}
```

The method uses the `UserTokenClient` service to invoke the `SignOutUserAsync` method.

### Handling single sign-on dedicated logic

Here you can see how to implement the scenarios where you want to authenticate users with single sign-on. In fact, you don't necessarily need to implement the custom logic to handle the magic code, as already stated, but you need to override the `OnSignInInvokeAsync` method to handle the single sign-on request.

```CSharp
protected override Task OnSignInInvokeAsync(ITurnContext<IInvokeActivity> turnContext, CancellationToken cancellationToken)
{
    SharePointSSOTokenExchangeMiddleware sso = new SharePointSSOTokenExchangeMiddleware(_storage, _connectionName);
    return sso.OnTurnAsync(turnContext, cancellationToken);
}
```

The `SharePointSSOTokenExchangeMiddleware` type is defined in the **botbuilder** package and takes care of handling the single sign-on request and storing the user's token in a temporary storage. It also accepts the name of the OAuth connection configured for the Azure Bot. The storage can be any cache manager of your choice, as long as it implements the `IStorage` interface. Here you can see an example of an in-memory cache storage.

```CSharp
public class InMemoryStorage : IStorage
{
    // Thread-safe dictionary for storing bot state in-memory
    private readonly ConcurrentDictionary<string, object> _memoryStorage = new ConcurrentDictionary<string, object>();
 
    /// <summary>
    /// Reads state from the in-memory store.
    /// </summary>
    /// <param name="keys">The keys of the states to read.</param>
    /// <param name="cancellationToken">Cancellation token.</param>
    /// <returns>A dictionary of bot state objects.</returns>
    public Task<IDictionary<string, object>> ReadAsync(string[] keys, CancellationToken cancellationToken = default)
    {
        var storeItems = new Dictionary<string, object>();
 
        foreach (var key in keys)
        {
            // Try to get the object from the dictionary
            if (_memoryStorage.TryGetValue(key, out var value))
            {
                storeItems.Add(key, value);
            }
        }
 
        return Task.FromResult((IDictionary<string, object>)storeItems);
    }
 
    /// <summary>
    /// Writes state to the in-memory store.
    /// </summary>
    /// <param name="changes">Dictionary containing state objects to write.</param>
    /// <param name="cancellationToken">Cancellation token.</param>
    public Task WriteAsync(IDictionary<string, object> changes, CancellationToken cancellationToken = default)
    {
        foreach (var change in changes)
        {
            // Store the object in the dictionary
            _memoryStorage.AddOrUpdate(change.Key, change.Value, (key, oldValue) => change.Value);
        }
 
        return Task.CompletedTask;
    }
 
    /// <summary>
    /// Deletes state from the in-memory store.
    /// </summary>
    /// <param name="keys">The keys of the states to delete.</param>
    /// <param name="cancellationToken">Cancellation token.</param>
    public Task DeleteAsync(string[] keys, CancellationToken cancellationToken = default)
    {
        foreach (var key in keys)
        {
            // Remove the object from the dictionary
            _memoryStorage.TryRemove(key, out _);
        }
 
        return Task.CompletedTask;
    }
}
```

If you're using dependency injection, you can configure the cache manager as a singleton service and retrieve the service instance in the constructor of the bot, like it is illustrated in the code sample associated with this article.

Once you support the single sign-on logic, you can rely on the methods defined in the previous section like `GetAuthenticatedUser`, `GetUserToken`, and `SignOutUser` to handle the user's security context and providing a `null` value for the magic code.

### Configuring the manifest

The implementation of the Bot Powered ACE is now complete and you just need to create a manifest file and deploy it into the target tenant SharePoint Online App Catalog. You can find step by step instructions about how to do that in the section ["Define the **manifest.json** file for the solution"](./Building-Your-First-Bot-Powered-ACE.md#define-the-manifestjson-file-for-the-solution) section of the reference article ["Building your first Bot Powered Adaptive Card Extension."](./Building-Your-First-Bot-Powered-ACE.md)

To properly support authentication, you need to add a `webApplicationInfo` section to the **manifest.json** file, like illustrated in the following excerpt.

```JSON
  "webApplicationInfo": {
    "id": "<App-Client-ID>",
    "resource": "api://<your-ngrok-reverse-proxy-name>.ngrok.io/<App-Client-ID>"
  },
```

The `id` property is the actual Client ID of the Microsoft App behind the scenes of your Azure Bot. The `resource` property is the unique URI that you configured for that Microsoft App.

You're now ready to package the solution, deploy it on the SharePoint Online App Catalog, and play with. You can follow the instructions provided in section ["Run and test the solution"](./Building-Your-First-Bot-Powered-ACE.md#run-and-test-the-solution) of the reference article ["Building your first Bot Powered Adaptive Card Extension."](./Building-Your-First-Bot-Powered-ACE.md)

Consider a Bot Powered ACE configured for multitenant and deployed on a target tenant. The first time users run it, they need to grant consent to your Azure Bot application to access Microsoft Graph with delegated permissions. The user's consent is collected through a custom dialog provided by Microsoft Entra ID. In the following picture, you can see the user's consent dialog in action.

![The popup dialog of Microsoft Entra ID to collect the user's consent to access specific resources based on the current Azure Bot application permissions.](./images/Bot-Powered-ACE-Secured-Consent-Multitenant.png)

## Important things to know

There are some architectural things that are worth being aware of when developing custom Bot Powered ACEs with authentication and authorization:

1. If you have multiple instances of the same card in a Viva Connections Dashboard, when a user signs in through one of those instances, the security context is shared across all of the instances. Moreover, the user is authenticated in all of the devices and all of the experiences (for example desktop and mobile). However, you need to refresh the page to let the other instances know that there's a security context. In fact, Bot Powered ACEs are a **pull** technology and currently isn't possible to notify card instances about changes of the security context.
1. For the same reason as before, also when a user signs out, all the instances of the same card loose the security context, but you need to refresh the page to make the other instances aware of the new security context.
1. If you rely on single sign-on for all of your Bot Powered ACEs, all of the ACEs automatically authenticate the user when opening the dashboard.
1. If you have multiple Bot Powered ACEs in the same dashboard with support for authentication but without single sign-on, users need to sign in and sign out individually on each of them. In fact, the security context is shared only across ACEs of the same type.
1. As already stated in the article, the "Complete sign in" experience is mandatory in the Sign In Card View template, when you rely on magic code, and is required for Microsoft Entra ID authentication, too. In fact, if user's browser blocks cookies, the end user needs to manually copy the magic code value in the clipboard and provide it to the ACE custom logic.
1. On the contrary, when you rely on single sign-on, you don't need to implement the "Complete sign in" experience.
