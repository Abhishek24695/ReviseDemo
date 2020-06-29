function baseClass()
{

    this.getURL = function()
    {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get('https://findadentist.ada.org/').then(function(){
              console.log("This is my first step");
              })
    };

    
}

module.exports = new baseClass();