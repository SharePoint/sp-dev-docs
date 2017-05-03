# Create a cloud business add-in with a social newsfeed
By using the  **Cloud Business Add-in** template in Visual Studio, you can create SharePoint Add-ins in which users can view, add, and update SharePoint data. The **Cloud Business Add-in** project type uses Visual Studio LightSwitch technologies, which greatly simplify the process of creating business add-in hosted on SharePoint. In this walkthrough, you'll create an add-in to track job candidates, taking advantage of the SharePoint for Office 365 social integration feature to provide a newsfeed for the add-in.
 
You can download the complete sample application from the MSDN Code Gallery:  [Creating a Cloud Business Add-in with a Social Newsfeed](http://code.msdn.microsoft.com/Creating-a-Cloud-Business-8540c0c9)
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## Prerequisites

This walkthrough requires Visual Studio 2013.
 

 
To host the add-in, you'll also need a SharePoint site or a SharePoint Developer site on Office 365, which you can get from the  [Sign up for an Office 365 Developer Site](http://go.microsoft.com/fwlink/?LinkId=263490).
 

 

## Create a Cloud Business Add-in Project
<a name="bk_create"> </a>

 To create a Cloud Business Add-in, you start with the **Cloud Business Add-in** project template in Visual Studio.
 

 

### To create the project


1. On the menu bar, choose  **File**,  **New**,  **Project**.
    
    The  **New Project** dialog box opens.
    
 
2. In the list of templates, expand the  **Visual Basic** or **Visual C#** node, expand the **Office/SharePoint** node, choose the **Add-ins** node, and then choose **Cloud Business Add-in**, as shown in Figure 1.
    
    **Figure 1. Add the project**

 

  ![Cloud Business App project template](../../images/CBAtemplate.PNG)
 

 

 
3. In the  **Name** text box, enterCandidateTracker, and then choose the  **OK** button.
    
    The  **New Cloud Business Add-in** wizard opens.
    
 
4. In the  **New Cloud Business Add-in** wizard, enter the URL for your Office 365 Developer site, and then choose the **Finish** button.
    
    The URL should take the form https://  _MySite_.sharepoint.com/sites/Developer/.
    
    A  **CandidateTracker** solution is added to Solution Explorer with four projects: a top-level **CandidateTracker** project, a **CandidateTracker.HTMLClient** project, a **CandidateTracker.Server** project, and a **CandidateTracker.SharePoint** project.
    
 

## Add Data and Screens
<a name="bk_add"> </a>

The candidate tracker add-in needs a database table, which you'll create in the  **Server** project, and screens to view, add, and update data, which you'll create in the **HTMLClient** project.
 

 

### To add the database table


1. In  **Solution Explorer**, open the shortcut menu for the  **CandidateTracker.Server** node and choose **Add Table**.
    
    The entity designer opens.
    
 
2. In the  **Properties** window, in the text box for the **Name** property, enterCandidate.
    
 
3. In the entity designer, choose the  **<Add Property>** link and enterName.
    
 
4. Choose the Enter key, accepting the default **Type**,  **String**, and leaving the  **Required** checkbox checked.
    
 
5. Choose the  **<Add Property>** link and enterPhone, and then choose the  **Tab** key.
    
 
6. In the  **Type** column, choose **Phone Number**, and then choose the Tab key twice.
    
     **Phone Number** is acustom business type that automatically formats and provides validation for telephone numbers.
    
 
7. In the next row, enter Email for the **Name**, and then choose  **Email Address** as the **Type**.
    
     **Email Address** is another custom business type that provides validation for email addresses.
    
 
8. In the next row, enter ReferredBy for the **Name**, and then choose  **Person** as the **Type**.
    
    The  **Person** business type provides a connection to the SharePoint User Profile Service, which pulls user information from Active Directory.
    
 
9. In the next row, enter InterviewDate for the **Name**, and then choose  **Date Time Offset** as the **Type**.
    
    The  **Date Time Offset** business type stores the date and time in UTC format, allowing users in different time zones to see the correct time.
    
    Figure 2 shows the completed entity.
    

    **Figure 2. The Candidates entity**

 

  ![Candidates table](../../images/CBAentity.PNG)
 

 

 

### To create the browse screen


1. In the entity designer, on the  **Perspective** bar, choose the **HTML Client** tab, and then on the toolbar choose **Screen**.
    
    The  **Add New Screen** dialog box opens.
    
 
2. In the  **Add New Screen** dialog box, in the **Select a screen template** list, choose **Browse Data Screen**.
    
 
3. In the  **Screen Data** list, choose **Candidates**, and then choose the  **OK** button.
    
    The screen designer opens, with a representation of the data entity in the left pane, and a representation of the screen layout in the right pane.
    
 
4. In the right pane of the screen designer, choose the  **List | Candidates** node, then expand the **List** list and choose **Table**, as shown in figure 3.
    
    **Figure 3. The Table control**

 

  ![The BrowseCandidates screen designer](../../images/CBAscreen.PNG)
 

    This will display the  **Candidate** information in a tabular format instead of the default list format.
    
    Notice that in addition to the fields that you defined for the table there are four more fields: Created By, Created, Modified by, and Modified. These fields create an audit trail to show when an item was added or last updated and by whom. 
    
 

### To create the add screen


1. In the screen designer, open the shortcut menu for the  **Command Bar** node and choose **Add Button**.
    
 
2. In the  **Add Button** dialog box, expand the **showTab** list and choose **addAndEditNew** as shown in Figure 4, and then choose the **OK** button.
    
    **Figure 4. The Add Button dialog box**

 

  ![Add Button dialog box](../../images/CBAadd.PNG)
 

    The  **Add New Screen** dialog box opens.
    
 
3. In the  **Add New Screen** dialog box, accept the default values and choose the **OK** button.
    
 
A new screen designer window opens.
 

 

### To create the edit screen


1. Choose the  **BrowseCandidates.lsml** designer tab, and in the screen designer, choose the **Table | Candidates** node.
    
 
2. In the  **Properties** window, choose the **Item Tap** link, as shown in Figure 5.
    
    **Figure 5. The Item Tap link**

 

  ![Item Tap property](../../images/CBAproperty.PNG)
 

    The  **Edit Item Tap Action** dialog box opens.
    
 
3. In the  **Edit Item Tap Action** dialog box, expand the **showTab** list and choose **editSelected** as shown in Figure 6, and then choose the **OK** button.
    
    **Figure 6. The Edit Item Tap Action dialog box**

 

  ![Edit ItemTap Action dialog box](../../images/CBAaction.PNG)
 

 

 

### To test the add-in


1. On the menu bar, choose  **Debug**,  **Start Debugging**.
    
    The first time that you run a SharePoint add-in on your computer, you're prompted to install a Localhost certificate because cloud business add-ins always use SSL (Secure Sockets Layer). If you accept this certificate, a security warning won't appear each time that you launch the add-in. Because the certificate applies only to Localhost, your system faces no threat.
    
 
2. In the  **Security Alert** dialog box, choose the **Yes** button.
    
 
3. If a  **Security Warning** dialog box appears, choose the **Yes** button.
    
    Your web browser appears.
    
 
4. On the  **sign in** page, choose the **Sign In** button.
    
 
5. Enter your password, and then choose the  **Sign In** button.
    
 
6. If prompted, choose the  **Trust It** button.
    
 
7. On the  **Browse Candidates** screen, choose the **Add Candidate** button.
    
    The  **Add Candidate** screen opens.
    
 
8. On the  **Add Candidate** screen, enter a name, phone number, and email address.
    
 
9. Choose the  **Referred By** field and enter the first three characters of your own name.
    
    Your full name should appear in the list. If your site is connected to Active Directory, you should see a list of all users whose name begins with the same three characters.
    
 
10. Optionally change the  **Interview Date** date and time, and then choose the **Save** button to return to the **Browse Candidates** screen.
    
    The candidate that you just added is displayed; if you choose the row the  **Add Edit Candidates** screen opens. Notice that some of the fields inherit special behaviors from their custom business types. Choose the **Phone** field to dial the number, choose the **Email** field to send an email, or hover over the **Created By** field to see your contact information.
    
 
11. Close the browser window to stop the add-in from running.
    
 

## Add a Newsfeed
<a name="bk_feed"> </a>

One of the features of SharePoint for Office 365 is the ability to add newsfeeds, allowing users to track activity on a list and add their comments. Cloud business add-ins make it easy to create a newsfeed for your add-in.
 

 

### To enable social integration


1. Choose the  **Candidates.lsml** designer tab, and then on the **Perspective** bar choose the **Server** tab.
    
 
2. In the  **Properties** window, select the **Post when Created** and **Post when Updated** check boxes as shown in Figure 7.
    
    **Figure 7. Social properties**

 

  ![Social properties](../../mages/CBAsocial.PNG)
 

 

 
3. Choose the  **Choose post triggers** link.
    
    The  **Choose post triggers** dialog box appears.
    
 
4. In the  **Choose post triggers** dialog box, clear the **All Fields** check box, select the **Interview Date** check box, and then choose the **OK** button.
    
 

### To test the add-in


1. On the menu bar, choose  **Debug**,  **Start Debugging**.
    
 
2. On the  **Browse Candidates** screen, choose the candidate that you created earlier.
    
 
3. On the  **Add Edit Candidate** screen, change the **Interview Date**, and then choose the  **Save** button.
    
 
4. Choose the  **Add Candidate** button and add another candidate.
    
 
5. On the  **Browse Candidates** screen, on the SharePoint chrome bar, choose the **Newsfeed** link.
    
    The  **Candidate Tracker Newsfeed** opens in a new browser window with two entries for the added and updated candidates. You can choose the **Like** link for a post, or you can choose the **Reply** link to add a comment.
    
 
6. Close both browser windows to stop the add-in from running.
    
 

## Add Validation
<a name="bk_validate"> </a>

In many business add-ins you'll want to restrict access to certain functionality, for example, only allowing a manager to change the interview date. Cloud business add-ins let you do this by writing validation logic; in this case you will write code to determine if the current user is a member of a specific Active Directory Security Group.
 

 

### To add validation


1. Choose the  **Candidates.lsml** designer tab, and then on the **Perspective** bar choose the **Server** tab.
    
 
2. On the toolbar, expand the  **Write Code** list and choose the **Candidates_Validate** method.
    
    The Code Editor opens.
    
 
3. In the Code Editor, add the following code to the  **Candidates_Validate** method:
    
```VB.net
  If Not Application.User.Department = "Hiring Managers" Then
                results.AddEntityError("Permission denied")
            End If
```


```C#
  if (!(Application.User.Department == "Hiring Managers")) {
results.AddEntityError("Permission denied");
}
```


    The  **Validate** method is run when a user tries to save a record. If the user is a member of the Hiring Managers security group, the record is saved, otherwise a "Permission denied" error message is displayed and the record is discarded.
    
 
At this point if you run the add-in and add a new candidate, you will likely see the error message unless you are a member of an actual security group name Hiring Managers. Replace "Hiring Managers" with the name of a security group to which you belong and try again. You should now have permission to add a candidate.
 

 

## Next steps
<a name="bk_validate"> </a>

Congratulations! You've created your first cloud business add-in. If this was an add-in that you want to share with users, your next step would be to publish the add-in. See  [How to: Publish a Cloud Business Add-in to Office 365](http://msdn.microsoft.com/en-us/library/vstudio/dn454601.aspx) or [Publish SharePoint Add-ins](http://msdn.microsoft.com/en-us/library/office/apps/jj164070.aspx).
 

 
Of course, this is just a simple example; there's much more that you can do to create full-featured add-ins. Since the Cloud Business Add-in template is based on LightSwitch technologies, you may want to explore the LightSwitch documentation to get some ideas. See  [LightSwitch SharePoint Add-ins](http://msdn.microsoft.com/en-us/library/vstudio/jj969620.aspx).
 

 

## Additional resources
<a name="bk_addresources"> </a>


-  [Create cloud business add-ins](create-cloud-business-add-ins.md)
    
 

