function about()
{

    this.btnAbout = element(by.xpath('//a[text()="About"]'));

    this.windowHandle = function(index)
    {
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[index]);
            browser.sleep(2000);
        })
    };


}

module.exports = new about();