>The SharePoint Framework is currently in Preview, and is subject to change based on customer feedback. While we’re in preview, SharePoint Framework web parts are not supported for use in production environments.

There is a lot of code written to work with the classic SharePoint pages that can be leveraged in SPFx, but sometimes certain components or variables aren't there.  One example is the __REQUESTDIGEST form field.  In an ideal world, you wouldn't use a global variable to access the digest, you'd just use the updated HttpRequest object to make your SharePoint call, and it will handle all the digest / auth logic for you (including things like expired tokens).  Tutorial two shows how to do this.

However, if your existing code uses some older constructs, through the power of client side code and DOM manipulation, it's fairly easy to add these back to a page.  The key is to hook into the onInit method in the base webpart class, and pull the create the DOM element that you expect to be there.  Here's an example that creates the __REQESTDIGEST form element.


    public onInit<T>(): Promise<T>
    {
    // does the digest exist?
    if ( !document.getElementById('__REQUESTDIGEST') )
    {
      // OK, the request digest does not exist.  Let's create it.
      // first, grab the digest value out of the contextWebInfo object (if it exists).
      var digestValue: string;
      try{
        digestValue = (window as any)._spClientSidePageContext.contextWebInfo.FormDigestValue;
      }
      catch (exception){
        // there is no digest on this page, so just return.  This can easily happen on the local workbench
        return Promise.resolve();
      }

      if (digestValue){
        // OK, now lets create the digest input form.  It looks like this -
        // <input type="hidden" name="__REQUESTDIGEST" id="__REQUESTDIGEST" value="blahblahblahblahblahblah, July23 -0000 or something like that">
        const requestDigestInput: Element = document.createElement('input');
        requestDigestInput.setAttribute('type', 'hidden');
        requestDigestInput.setAttribute('name', '__REQUESTDIGEST');
        requestDigestInput.setAttribute('id', '__REQUESTDIGEST');
        requestDigestInput.setAttribute('value', digestValue);

        // lastly, add the digest to the page
        document.body.appendChild(requestDigestInput);
      }
    }

    // no promise to return
    return Promise.resolve();
    }

Note that there is a better way to get the current digest value that will handle all of the caching / expiring / refetching / etc.  Give this a try.  You'll need to import digestCacheServiceKey and IDigestCache from sp-client-base

    var digestCache:IDigestCache = this.context.serviceScope.consume(digestCacheServiceKey);
    digestCache.fetchDigest(this.context.pageContext.web.serverRelativeUrl).then((digest: string) => {
      // Do Something with the digest
      console.log(digest);
    });
