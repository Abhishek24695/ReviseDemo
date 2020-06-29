function Home()
{
    this.searchTextBox = element(by.xpath('//input[@title="Address or ZIP Code"]'));
    this.btnSearch = element(by.xpath('//button[text()="Search"]'));
    this.drpDownADPResources = element(by.xpath('//a[contains(text(),"ADA Resources")]'));

    this.chooseAboutDrpDown = function()
    {
        element.all(by.xpath('//ul[@class="dropdown-menu"]/li')).each(function(item)
        {
                item.getText().then(function(options)
                {
                    console.log(options);
                })
        })
    };




};

module.exports = new Home();
