---
title: Cross-domain images in SharePoint provider-hosted add-ins
ms.date: 11/03/2017
---
# Cross-domain images in SharePoint provider-hosted add-ins

Use images across domains in provider-hosted add-ins.

_**Applies to:** SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

You might want to display images from a SharePoint site in your provider-hosted add-ins. Because provider-hosted add-ins run on a remote web, the domains for your provider-hosted add-in and your SharePoint site are different. For example, your add-in might run on Microsoft Azure, and you're trying to show an image from Office 365. Because your provider-hosted add-in crosses domains to access the image, SharePoint requires user authorization before the provider-hosted add-in shows the image.

The [Core.CrossDomainImages](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.CrossDomainImages) code sample shows how a provider-hosted add-in can use a SharePoint access token and a REST service to retrieve images from SharePoint. The REST service returns a Base64-encoded string, which is used to show the image in the browser. Use the solution in this sample to show images stored in SharePoint in provider-hosted add-ins by using either server-side or client-side code.

> [!NOTE] 
> Because the sample uses a REST endpoint, you can use either server-side or client-side code to retrieve your image.

## Before you begin

To get started, download the [Core.CrossDomainImages](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.CrossDomainImages) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

## Using the Core.CrossDomainImages code sample

When you run this sample, Default.aspx tries to load the following:

- Image 1, by using the absolute URL. 
    
- Image 2, by using a server-side call to a REST endpoint that returns a Base64-encoded string.
    
- Image 3, by using a client-side call to a REST endpoint that returns a Base64-encoded string.
    
> [!NOTE] 
> Image 1 does not render because the add-in crosses domains to get to the image in SharePoint. Notice that the URL of the provider-hosted add-in runs on localhost. Open the shortcut menu (right-click) for Image 1, and then choose **Properties**. Notice that the **Address (URL)** is trying to retrieve the image from the add-in web, not localhost. Because the provider-hosted add-in crosses domains to reach the add-in web, authentication is required in order to access the image. Verify that accessing Image 1's URL directly, as opposed to the cross-domain call in the provider-hosted add-in, resolves without an error by copying and pasting **Address (URL)** into a new browser window. Notice that Image 1 displays without an error. Compare the source of Image 1 to the source of Image 2. Notice that the **Address (URL)** points to a Base64-encoded string.

When Default.aspx loads, **Page_Load** runs and does the following:

1. Sets Image1.ImageUrl to the absolute path of the image.
    
2. Instantiates ImgService. ImgService is a REST endpoint that runs in the same domain as the provider-hosted add-in.
    
3. Sets Image2.ImageUrl to the Base64-encoded string that **ImgService.GetImage** returns. Access token, site, folder, and file name are passed as parameters to **ImgService.GetImage**.
    
> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```C#
 protected void Page_Load(object sender, EventArgs e)
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);
            using (var clientContext = spContext.CreateUserClientContextForSPAppWeb())
            {
                // Set the access token in a hidden field for client-side code to use.
                hdnAccessToken.Value = spContext.UserAccessTokenForSPAppWeb;

                // Set the URLs to the images.
                Image1.ImageUrl = spContext.SPAppWebUrl + "AppImages/O365.png";
                Services.ImgService svc = new Services.ImgService();
                Image2.ImageUrl = svc.GetImage(spContext.UserAccessTokenForSPAppWeb, spContext.SPAppWebUrl.ToString(), "AppImages", "O365.png");
            }
        }
```

**GetImage** does the following:

1. Uses **url** to store the GetFolderByServerRelativeUrl REST endpoint URI, which will be used to retrieve the image from SharePoint. You can learn more at [Files and folders REST API reference](http://msdn.microsoft.com/library/2c3d2545-1cd7-497e-b535-12199d8edfbb%28Office.15%29.aspx).
    
2. Instantiates an [HttpWebRequest](https://msdn.microsoft.com/library/system.net.httpwebrequest.aspx) object by using **url** .
    
3. Adds an Authorization header to the HttpWebRequest object that contains the access token. 
    
After the GET call is made to the endpoint URI, the returned stream is a Base64-encoded string. The returned string is set to the **src** attribute of the image.

```C#
 public string GetImage(string accessToken, string site, string folder, string file)
        {
            // Create the HttpWebRequest to call the REST endpoint.
            string url = String.Format("{0}_api/web/GetFolderByServerRelativeUrl('{1}')/Files('{2}')/$value", site, folder, file);
            HttpWebRequest request = WebRequest.Create(url) as HttpWebRequest;
            request.Headers.Add("Authorization", "Bearer" + " " + accessToken);
            using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
            {
                using (var sourceStream = response.GetResponseStream())
                {
                    using (var newStream = new MemoryStream())
                    {
                        sourceSteam.CopyTo(newStream);
                        byte[] bytes = newStream.ToArray();
                        return "data:image/png;base64, " + Convert.ToBase64String(bytes);
                    }
                }
            }
        }
```

After **Page_Load** finishes, Default.aspx runs the client-side code in Default.aspx, which loads Image 3. The client-side code calls **GetImage** by using jQuery Ajax. When **GetImage** returns the Base64-encoded string successfully, the **src** attribute on Image3 is set to the returned string.

```
  ...

	              $.ajax({
                url: '../Services/ImgService.svc/GetImage?accessToken=' + $('#hdnAccessToken').val() + '&amp;site=' + encodeURIComponent(appWebUrl + '/') + '&amp;folder=AppImages&amp;file=O365.png',
                dataType: 'json',
                success: function (data) {
                    $('#Image3').attr('src', data.d);
                },
                error: function (err) {
                    alert('error occurred');
                }
            });

           ...

```

## See also
<a name="bk_addresources"> </a>

- [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
