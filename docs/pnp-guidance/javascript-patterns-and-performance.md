# JavaScript Patterns and Performance

Years ago, ASP.NET gave us server-side UI control rendering, and it was good. That server-side rendering, however, requires full-trust code. Now that we have transitioned to SharePoint and Office 365, full-trust code is no longer an option. That means server-side UI control rendering won't work for us any more.

Yet, businesses still need custom UI functionality for their websites and apps. That means custom UI functionality must be moved from the server-side to the client-side. 

Client-side JavaScript is now the way to go for UI control rendering.

## <a name="JavaScriptPatterns"></a> JavaScript Patterns

Since client-side JavaScript is the path, what are the best ways to implement client-side JavaScript? How does one get started?

There are several options:

|Option|Description|
|:---|:---|
|JavaScript Embedding | [Site.UserCustomActions](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.site.usercustomactions.aspx) or [Web.UserCustomActions](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.web.usercustomactions.aspx) allow for the inclusion of script directly into the page markup. This is used in the [Loader Pattern](#LoaderPattern) discussed below|
|Display Templates | Applies to Views and Search. You don't have to deploy any kind of an app or provider hosted code. It's simply a JavaScript file that can be uploaded to (for example) the style library to customize views. You can create any view required by using JavaScript|
|SharePoint Hosted Add-Ins | Uses JSOM to communicate back to the host web or the add-in web. It gives access to the Web Proxy for cross domain calls|
|Provider Hosted Add-Ins | Enables the creation of complex applications across a variety of technology stacks - while maintaining secure integration with SharePoint|
|JSLink | Allows you to load one or more JavaScript files in many OOTB web parts and views|
|ScriptEditor Webpart | Include script directly or loaded through script tags with markup to create complex single page applications hosted entirely within the SharePoint site|

Don't think you are locked into these choices if you feel a different option would be better for your situation. 

## <a name="JavaScriptPerformance"></a> JavaScript Performance

At each step of the development process, it's important to keep performance in mind. Here are a few things that make a big difference in JavaScript performance:

|Option|Description|
|:---|:---|
|[Reduce the number of requests](#ReduceTheNumberOfRequests) | Fewer requests means fewer round-trips to the server, reducing latency.|
|[Retrieve only the data you need](#RetrieveOnlyTheDataYouNeed) | Reduce the amount of data sent over the wire. Also reduces server load.|
|[Provide a good page load experience](#ProvideAGoodUserExperience) | Keep your UI responsive to the user. For example, update the menus on the page *before* you start the download of 100+ records.|
|[Use asynchronous calls and patterns whenever possible](#EverythingIsAsynchronous) | Polling is a heavier burden on performance than using an asynchronous call or callback.| 
|[Caching is key](#ClientSideCaching) | Caching further reduces the burden on the server while giving immediate performance improvement.|
|[Prepare for more page views than you ever imagined](#PriceOfPopularity) | A data-heavy landing page is okay when you only have a few hits. But if you get thousands of hits, that can really impact performance.|

## <a name="WhatIsMyCodeDoing"></a> What is my code doing

For performance, it's important to know what your code is doing at any point. This lets you identify ways to improve efficiency. Below are a few good ways to do just that.

### <a name="ReduceTheNumberOfRequests"></a> Reduce the number of requests

Always make the fewest and smallest requests possible. Each request you eliminate reduces the performance burden on the server and on the client. And making smaller requests further reduces the performance burden.

There are several ways to reduce requests and reduce request size.

- Limit the number of JavaScript files in production. Separating your JavaScript files works well for development, but not so well for production. Combine your JavaScript files into a single JavaScript file, or as few JavaScript files as you can.
- Shrink file sizes. Minimize your production JavaScript files by removing line breaks, white space, and comments. There are several JavaScript minify programs and websites that you can use to greatly reduce your JavaScript file sizes.
- Use browser file caching to reduce requests. The updated [Loader Pattern](#LoaderPattern) below is a good way to expand upon this idea.

### <a name"RetrieveOnlyTheDataYouNeed"></a> Retrieve only the data you need

When requesting data, remember to focus your requests to what you actually need. Downloading an entire article to obtain the title, for example, will reduce performance quite a bit.

- Use server filtering, select, and limits to minimize traffic over the wire.
- Don't request all articles when you want only the first five, as another example.
- Don't ask for the entire property bag if you want only one property. In one example, a script needed only one property, but requested the entire property bag, which turned out to be 800 KB. Also remember that the size of an object can change over time, so what is only a few kilobytes now can become megabytes in size later in the product lifecycle. 

### <a name="DontRequestDataYouWillDiscard"></a> Don't request data that you will discard unused

If you retrieve more data than you actually use, think of it as an opportunity to better filter your initial query. 

- Request only the fields you need, like Name and Address, not the entire record.
- Make specific, deliberate filter requests. For example, if you want to list the available articles, get the Title, PublishingDate, and Author. Leave the rest of the fields out of the request.

### <a name="ProvideAGoodUserExperience"></a> Provide a good user experience

Jerky, inconsistent user interfaces impact not just performance, but also perceived performance. Write your code in such a way as to give a smooth experience.

- Use a spinner to indicate that things are loading or taking time.
- Understand the order of execution for your code, and shape it for the best user experience. For example, if you plan to retrieve a lot of data from the server, and you plan to change the user interface by hiding a menu, hide the menu first. That will prevent a staggered UI experience for the user.

## <a name="EverythingIsAsynchronous"></a> Everything is Asynchronous

Every code activity in the browser should be considered asynchronous. Your files load in some order, you must wait for the DOM to load, and your requests back to SharePoint will complete at different speeds. 

- Understand how your code operates in time.
- Use events and callbacks instead of polling.
- Use promises. In jQuery they're called **Deferred** objects. There are similar concepts in Q, WinJS, and ES6.
- Use the asynchronous call in favor of the non-asynchronous call.
- Use asynchronous any time there could be a delay:
	- During an AJAX request.
	- During any significant DOM manipulation.

Asynchronous patterns improve performance and responsiveness and allow for the effective chaining of dependent actions.

## <a name="ClientSideCaching"></a> Client Side Caching

Client side caching is one of the most often missed performance enhancements you can add to your code.

There are three different places you can cache your data:

|Option|Description|
|:---|:---|
|Session Storage|Stores data as a key/value pair on the client. This is per session storage which is always stored as strings. <br /> JSON.stringify() will convert your JavaScript objects to strings which helps to store objects.
|Local Storage|<p>Stores data as a key/value pair on the client. This is persistent across sessions which is always stored as strings.</p><p>JSON.stringify() will convert your JavaScript objects to strings which helps to store objects.</p>|
|Local Database|Stores relational data on the client. Frequently uses SQL-Lite as the database engine.<br>Local Database storage is not always available on all browsers&mdash;Check target browser support

When caching, keep in mind the storage limits available to you, and the freshness of your data. 
- If you are reaching the end of your storage limits, it might be wise to remove the older or less important cached data. 
- Different kinds of data can become stale faster than others. A list of news articles can be stale in five to ten minutes, but a user's profile name can often be safely cached for 24 hours or more. 

Local and session storage doesn't have expiration built-in, but cookies do. You can tie your stored data to a cookie to add expiration to your local and session storage. You can also create a storage wrapper that includes an expiration date and check this in your code.

## <a name="PriceOfPopularity"></a> The Price of Popularity

How often is your page viewed? In the classic scenario, the corporate home page is set as the launch page for all browsers across the organization. Then you suddenly get far more traffic than you ever imagined. Every byte of content is suddenly magnified in the server performance and bandwidth that your home page consumes.

The solution: Go light on the home page and link to the other content.

Data-heavy dashboards are also a candidate for a provider hosted app which can scale independently.

## <a name="LoaderPattern"></a> The Loader Pattern

The goal of the loader pattern is to provide a way to embed an unknown number of remote scripts into a site without having to update the site. The updates can be done on the remote CDN and will update all sites.

The Loader Pattern constructs a URL with date and time stamp at the end so that the file will not be cached. It sets up jQuery as a dependency on the loader file, then executes a function in the loader. This ensures your custom JavaScript will load after jQuery finishes loading.

PnP-dev\Samples\Core.JavaScript\Core.JavaScript.Embedder\Program.cs:

```csharp
static void Main(string[] args)
{
    ContextManager.WithContext((context) =>
        // this is the script block that will be embedded into the page
        // in practice this can be done during provisioning of the site/web
        // make sure to include ';' at end to play nice with page embedding
        // using the script on demand feature built into SharePoint we load jQuery, then our remote loader(pnp-loader.js or pnp-loader-cached.js) file using a dependency
        var script = @"(function (loaderFile, nocache) {
                                var url = loaderFile + ((nocache) ? '?' + encodeURIComponent((new Date()).getTime()) : '');
                                SP.SOD.registerSod('pnp-jquery.js', 'https://localhost:44324/js/jquery.js');
                                SP.SOD.registerSod('pnp-loader.js', url);
                                SP.SOD.registerSodDep('pnp-loader.js', 'pnp-jquery.js');
                                SP.SOD.executeFunc('pnp-loader.js', null, function() {});
                        })('https://localhost:44324/pnp-loader.js', true);";


        // this version of the script along with pnp-loaderMDS.js (or pnp-loaderMDS-cached.js) handles pages where the minimum download strategy is active
        var script2 = @"ExecuteOrDelayUntilBodyLoaded(function () {
                            var url = 'https://localhost:44324/js/pnp-loaderMDS.js?' + encodeURIComponent((new Date()).getTime());
                            SP.SOD.registerSod('pnp-jquery.js', 'https://localhost:44324/js/jquery.js');
                            SP.SOD.registerSod('pnp-loader.js', url);
                            SP.SOD.registerSodDep('pnp-loader.js', 'pnp-jquery.js');
                            SP.SOD.executeFunc('pnp-loader.js', null, function () {
                                if (typeof pnpLoadFiles === 'undefined') {
                                    RegisterModuleInit('https://localhost:44324/js/pnp-loaderMDS.js', pnpLoadFiles);
                                } else {
                                    pnpLoadFiles();
                                }
                            });    
                        });";

        // load the collection of existing links
        var links = context.Site.RootWeb.UserCustomActions;
        context.Load(links, ls => ls.Include(l => l.Title));
        context.ExecuteQueryRetry();

        // this block handles deleting previous test custom actions
        var doDelete = false;

        foreach (var link in links.ToArray().Where(l => l.Title.Equals("MyTestCustomAction", StringComparison.OrdinalIgnoreCase)))
        {
            link.DeleteObject();
            doDelete = true;
        }

        if (doDelete)
        {
            context.ExecuteQueryRetry();
        }

        // now we embed our script into the user custom action
        var newLink = context.Site.RootWeb.UserCustomActions.Add();
        newLink.Title = "MyTestCustomAction";
        newLink.Description = "Doing some testing.";
        newLink.ScriptBlock = script2;
        newLink.Location = "ScriptLink";
        newLink.Update();
        context.ExecuteQueryRetry();
    });
}
```

The `SP.SOD.registerSodDep('pnp-loader.js', 'pnp-jquery.js');` sets up the dependency, and `SP.SOD.executeFunc('pnp-loader.js', null, function() {});` forces jQuery to load completely before loading the custom JavaScript.

The `newLink.ScriptBlock = script2;` and `newLink.Location = "ScriptLink";` are the key parts of adding this into the user customer action.

The pnp-loader.js file then loads a list of JavaScript files, with a promise that can be run when each file loads.

PnP-dev\Samples\Core.JavaScript\Core.JavaScript.CDN\js\pnp-loader.js:

```javascript
(function () {

    var urlbase = 'https://localhost:44324';
    var files = [
        '/js/pnp-settings.js',
        '/js/pnp-core.js',
        '/js/pnp-clientcache.js',
        '/js/pnp-config.js',
        '/js/pnp-logging.js',
        '/js/pnp-devdashboard.js',
        '/js/pnp-uimods.js'
    ];

    // create a promise
    var promise = $.Deferred();

    // this function will be used to recursively load all the files
    var engine = function () {

        // maintain context
        var self = this;

        // get the next file to load
        var file = self.files.shift();

        var fullPath = urlbase + file;

        // load the remote script file
        $.getScript(fullPath).done(function () {
            if (self.files.length > 0) {
                engine.call(self);
            }
            else {
                self.promise.resolve();
            }
        }).fail(self.promise.reject);
    };

    // create our "this" we will apply to the engine function
    var ctx = {
        files: files,
        promise: promise
    };

    // call the engine with our context
    engine.call(ctx);

    // give back the promise
    return promise.promise();

})().done(function () {
    /* all scripts are loaded and I could take actions here */
}).fail(function () {
    /* something failed, take some action here if needed */
});
```

The pnp-loader.js file does not cache, which works well for a development environment. The pnp-loader-cached.js file replaces the `$.getScript` function with an `$.ajax` function which allows for browser caching of the files and is better suited for production.

From PnP-dev\Samples\Core.JavaScript\Core.JavaScript.CDN\js\pnp-loader.js

```javascript
    // load the remote script file
    $.ajax({
        type: 'GET',
        url: fullPath,
        cache: true,
        dataType: 'script'
    }).done(function () {
        if (self.files.length > 0) {
            engine.call(self);
        }
        else {
            self.promise.resolve();
        }
    }).fail(self.promise.reject);
```

This pattern eases deployment and updates to sites. It is especially useful when deploying or updating across thousands of site collections.

## <a name="CachingCurrentUserInfo"></a> Caching the current user

If the user info is already cached, this function gets the data from the session cache. If the user info is not stored in the cache, it gets the specific user info we need and stores it in the cache.

This also uses Deferred (jQuery version of promise). If we get the data from the cache or from the server, the Deferred is resolved. If there is an error, the Deferred is rejected.

From PnP-dev\Samples\Core.JavaScript\Core.JavaScript.CDN\js\pnp-core.js:

```javascript
    getCurrentUserInfo: function (ctx) {

        var self = this;

        if (self._currentUserInfoPromise == null) {

            self._currentUserInfoPromise = $.Deferred(function (def) {

                var cachingTest = $pnp.session !== 'undefined' && $pnp.session.enabled;

                // if we have the caching module loaded
                if (cachingTest) {
                    var userInfo = $pnp.session.get(self._currentUserInfoCacheKey);
                    if (userInfo !== null) {
                        self._currentUserInfo = userInfo;
                        def.resolveWith(ctx || self._currentUserInfo, [self._currentUserInfo]);
                        return;
                    }
                }

                // send the request and allow caching
                $.ajax({
                    method: 'GET',
                    url: '/_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=AccountName,DisplayName,Title',
                    headers: { "Accept": "application/json; odata=verbose" },
                    cache: true
                }).done(function (response) {

                    // we also parse and add some custom properties as an example
                    self._currentUserInfo = $.extend(response.d,
                        {
                            ParsedLoginName: $pnp.core.getUserIdFromLogin(response.d.AccountName)
                        });

                    if (cachingTest) {
                        $pnp.session.add(self._currentUserInfoCacheKey, self._currentUserInfo);
                    }

                    def.resolveWith(ctx || self._currentUserInfo, [self._currentUserInfo]);

                }).fail(function (jqXHR, textStatus, errorThrown) {

                    console.error('[PNP]=>[Fatal Error] Could not load current user data data from /_api/SP.UserProfiles.PeopleManager/GetMyProperties. status: ' + textStatus + ', error: ' + errorThrown);
                    def.rejectWith(ctx || null);
                });
            });
        }

        return this._currentUserInfoPromise.promise();
    }
}
```

## <a name="CachingPatternUsingAsynchronousAndDeferred"></a> Caching pattern using asynchronous and Deferred

Another caching pattern can be found in pnp-clientcache.js storageTest, which is taken from the modernizer storageTest. It contains functions for add, get, remove, and getOrAdd which will return the cached data if it's in the cache, or retrieve the data from the server and add it to the cache if it is not in the cache which saves writing repetitive code in the calling function. get uses JSON.parse to test for expiration since expiration is not a feature in local storage. _createPersistable stores the JavaScript object in the local storage cache.

From PnP-dev\Samples\Core.JavaScript\Core.JavaScript.CDN\js\pnp-clientcache.js:

```javascript
// adds the client cache capability
caching: {

    // determine if we have local storage once
    enabled: storageTest(),

    add: function (/*string*/ key, /*object*/ value, /*datetime*/ expiration) {

        if (this.enabled) {
            localStorage.setItem(key, this._createPersistable(value, expiration));
        }
    },

    // gets an item from the cache, checking the expiration and removing the object if it is expired
    get: function (/*string*/ key) {

        if (!this.enabled) {
            return null;
        }

        var o = localStorage.getItem(key);

        if (o == null) {
            return o;
        }

        var persistable = JSON.parse(o);

        if (new Date(persistable.expiration) <= new Date()) {

            this.remove(key);
            o = null;

        } else {

            o = persistable.value;
        }

        return o;
    },

    // removes an item from local storage by key
    remove: function (/*string*/ key) {

        if (this.enabled) {
            localStorage.removeItem(key);
        }
    },

    // gets an item from the cache or adds it using the supplied getter function
    getOrAdd: function (/*string*/ key, /*function*/ getter) {

        if (!this.enabled) {
            return getter();
        }

        if (!$.isFunction(getter)) {
            throw 'Function expected for parameter "getter".';
        }

        var o = this.get(key);

        if (o == null) {
            o = getter();
            this.add(key, o);
        }

        return o;
    },

    // creates the persisted object wrapper using the value and the expiration, setting the default expiration if none is applied
    _createPersistable: function (/*object*/ o, /*datetime*/ expiration) {

        if (typeof expiration === 'undefined') {
            expiration = $pnp.core.dateAdd(new Date(), 'minute', $pnp.settings.localStorageDefaultTimeoutMinutes);
        }

        return JSON.stringify({
            value: o,
            expiration: expiration
        });
    }
},
```

For a more complex usage of asynchronous and Deferred, you can refer to the developer dashboard in pnp-clientcache.js

## <a name="Resources"></a> Resources

### See Also
- [JavaScript – Patterns and Usage](http://dev.office.com/blogs/javascript-development-patterns-with-sharepoint)
- [JavaScript – Performance Considerations](http://dev.office.com/blogs/javascript-performance-considerations-with-sharepoint)
- [Complete basic operations using JavaScript library code in SharePoint 2013](https://msdn.microsoft.com/EN-US/library/office/jj163201.aspx)
- [Client-side rendering (JS Link) code samples](https://code.msdn.microsoft.com/office/Client-side-rendering-JS-2ed3538a)
- [JavaScript Embedding (Customize your SharePoint site UI by using JavaScript)](https://msdn.microsoft.com/EN-US/library/dn913116.aspx)
- [Search customizations for SharePoint](https://msdn.microsoft.com/EN-US/library/mt210901.aspx)
- [SharePoint Add-in Recipe – Custom field type (by using Client Side Rendering)](custom-field-type-sharepoint-add-in.md)

### Samples

- [Performance.Caching](https://github.com/SharePoint/PnP/tree/master/Samples/Performance.Caching)
- [Core.JavaScript](https://github.com/SharePoint/Pnp/tree/master/Samples/Core.JavaScript)
