describe("protractor Demo test",function()
{
    
    var homePageobj =  require("../PageOject/HomePage.js");
    var baseTestObj =  require("../BaseClass/BaseTestClass.js");

    it('MouthHealthy test',function(){
            baseTestObj.getURL();
            homePageobj.drpDownADPResources.click().then(function(){
                console.log('It clicked');
            });
            homePageobj.chooseAboutDrpDown().then(function()
            {
                browser.sleep(2000);
            })
            /*homePageobj.chooseAboutDrpDown().then(function(){
                browser.sleep(2000);
            });*/

    })
    
})