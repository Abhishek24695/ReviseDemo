
//import {homePage} from './HomePage.js';
//<script nomodule src="HomePage.js"></script>

describe("protractor Demo test",function()
{
    
    var homePageobj =  require("../PageOject/HomePage.js");
    var baseTestObj =  require("../BaseClass/BaseTestClass.js");

    it('search test',function(){
            baseTestObj.getURL();
            homePageobj.searchTextBox.sendKeys('751024');
            homePageobj.btnSearch.click().then(function(){
                browser.sleep(2000);
            });

    })
    
})