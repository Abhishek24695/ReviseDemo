describe("protractor Demo test",function()
{
    
    var aboutPageobj =  require("../PageOject/AboutPage.js");
    var baseTestObj =  require("../BaseClass/BaseTestClass.js");

     it('about test',function(){

             baseTestObj.getURL();
             aboutPageobj.btnAbout.click().then(function(){
             browser.sleep(2000);
             aboutPageobj.windowHandle(1);
             browser.close();
             aboutPageobj.windowHandle(0);
             });

     })
    
})