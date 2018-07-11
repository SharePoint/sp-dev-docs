# Send an email when a new item is created or modified in a SharePoint list

Using Microsoft Flow you can easily automate day-to-day tasks or build repetetive tasks in SharePoint that help you stay productive.

In this tutorial, you will create a flow that will send an email when a new item is added or modified in a SharePoint list.

## Required setup

Before following the steps in this artucle, make sure your SharePoint site is set up with the required lists and libraries.

## Create a flow

1. Browse to the *Projects* list in your SharePoint site.

2. You can create and manage flows for a list or a library by clicking on the *Flow* button on the command bar on the list or library page.

3. Clicking on the *Flow* button exapnds to show you more options:

    * Create a flow
    * See your flows

    > **Note:** You may see other options as well such as 'Request sign-off' and other flows if they are available for the list or library here.

4. Click on *Create a flow*.

5. In the *Create a flow* panel, you can explore various templates available for your list.

6. Click on the template that reads:
    > Send a customized email when a new SharePoint list item is added.

7. This will take you to the Flow website where it will display more options:
    * Template information
        * Name and description of the template.
    * Connection information
        * Varioius services this flow connect to.
        * The credentials those services will use to connect to.
8. Verify the connection information to ensure it uses your credentials.
    > A green checkmark icon indicates a connection to the service was succesfully made using your credentials.

9. Click *Continue* to create the flow. Any connections that requires a connection will also be attempted during this step.

10. Once the flow is created successfully, you will be redirected to the flow designer where you can edit and modifify the flow if needed.

11. Click on the name of the flow that reads *Send a customized email when a new SharePoint list item is added* and enter the following name for the flow:
    * Send an email for new projects

12. The SharePoint actions are represented with the SharePoint logo in the flow designer.

13. In the *When the new item is created* action, click on *Edit* to expand the action.

14. Notice the input configured to the SharePoint site address and list name fromk where you created the flow.

15. In the *Send Email* action, click on *Edit* to expand the action.

16. Notice all the input is filled in with dynamic values from the *Get my profile* and *When the new item is created* actions.

17. Hover over the dynamic values to see what properties they refer. For example, hovering over the *Email* shows that the property is read from the *Get my profile*'s *Mail* property.

18. Click *Save* to save the flow.

Your flow is active as soon as you save the flow. In our case, this flow *Send an email for new projects* is now active and will run whenever new items are added to the *Projects* list in the specified SharePoint site.

## Test your flow

In order to test your flow, you can test it by adding a new item in SharePoint list by adding a new item or initiating the test run directly from the flow designer. Follow the steps below to test the flow from the designer. Testing the flow from the designer helps you to quickly see the flow run as the flow is executed.

1. In the flow designer, click on *Test* on the top command bar.

2. In the *Test Flow* panel, click on *I'll perform the trigger action* and then click on *Save & Test* button.

3. You should see a message that instructs to add a new list item to the SharePoint list you selected.

4. You should have the browser tab with the *Projects* list opened already. If not, open a new browser tab and browse to the *Projects* list.
    > Do not close the flow designer. Make sure you keep the flow designer browser tab open.

5. In the *Projects* list, click on the *New* button on the command bar, add the item as specified below and click *Save*:
    * Title: Project 4
    * Owner: pick a user from people picker

6. Switch to the flow designer tab.

7. You should see the flow run history. If all of the actions were executed successfully, you will a green checkmark icon besides every action.

8. You can also click on the action to see the inputs and outputs used in the flow run. This is also a good place to see the actual values translated from those dynamic content properties used in that action.

9. As a result of this flow, you should have received an email as well regarding the new project information.

## Modify your flow

1. In the flow designer, click *Edit* to edit your flow.

2. Click on the *Send Email* action.

3. In the *Body* input, append the following string after the *Name* dynamic property:
    * Owner:

4. While you are still editing the *Body* input, notice the *dynamic content* list that appears beside the action.

5. In the *dynamic content* list, you can pick values from the actions in your flow. For example: The project owner information is available in the *When the new item is created* trigger.

6. To add the owner information, search for *owner* in the search box in the *dynamic content* list.

7. In the results, click on *Owner DisplayName*. As you can see, it also displays other information such as email, job title, picture and more. Since the *Owner* is a person column in SharePoint, SharePoint passes along the person details as individual properties to the flow.

8. The modified *Body* input should now look like this with the included *Owner* information.

9. Repeat the steps to test the flow.

10. You should now get an email with the updated owner information in it.

## Next steps

Congratulations on creating your first flow!

In the next topic, we will use the same flow and add the ability to interact with Microsoft Teams.