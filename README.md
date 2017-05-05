# Sitecore Single Page Demo | Seamless Navigation
This is a demo build to showcase how we can implement Sitecore with seamless navigation. MVC.zip is a package which you can use to test the build, It lets you install the build with demo content as shown in the video below. Please note that its a demo build and not recommended for any production sites unless tested. I have tested personalization and experience editor nothing more.

I feel any custom JS should not be included in Experience Editor and so I have disabled any JS from EXP Editor by adding this in Layout and Invoking JS if only class is present **notexpeditor**
```
class="@(Sitecore.Context.PageMode.IsPageEditor ? "inexpeditor" : "notexpeditor""
```
Incase you are not able to see items in Expreience Editor, Try to open it in Content Editor and then go to Publish Tab and click on Experience Editor. Then it will open the page in Exprience Editor.

* Video Link : https://www.youtube.com/watch?v=RarzwrqK9QA

## Version Info :
Sitecore 8.0 Update 4 (150621)

_I think should be ok to run with any higher versions, but haven't tested._

## Installation Steps :

1. Install Sitecore using <a href="https://marketplace.sitecore.net/en/Modules/Sitecore_Instance_Manager.aspx">SIM</a> 
2. Custom Packages Option > Add Package -- Select MVC3.zip
3. Continue with Install - After Installation completes do a full publish using sitecore backend.

If you see layout not found (happened with me when I tried using XP 8.1) means you need to edit ```<sites><site name="website" enableTracking="true" virtualFolder="/" physicalFolder="/" rootPath="/sitecore/content/Website" startItem="/home" database="web" domain="extranet"/></sites>```

**rootPath is changed to rootPath="/sitecore/content/Website"**







