
sap.ui.define([
    "logaligroup/sapui5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
], function(mockserver, opaQunit){
    
    QUnit.module("Navigation");

    opaQunit("Should open the Hello Dialog", function(Given, When, Then){

        //Initialize the mock server 
        mockserver.init();

        //Arragements
        Given.iStartMyUIComponent({
            componentConfig : {
                name : "logaligroup.sapui5"
            }
        }); 
        
        //Actions
        When.onTheAppPage.iSayHelloDialogButton();
        
        //Assertions 
        Then.onTheAppPage.iSeeTheHelloDialog();
/*
        //Cleanup 
        Then.iTearDownMyApp();
*/
    });

});