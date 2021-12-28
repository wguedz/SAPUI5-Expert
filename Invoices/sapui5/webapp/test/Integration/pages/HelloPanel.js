sap.ui.define([

    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"

],
/**
 * @param{ typeof sap.ui.test.Opa5 } Opa5
 * @param{ typeof sap.ui.test.actions.Press } Press
 */    
    function(Opa5, Press ){

        Opa5.createPageObjects({

            onTheAppPage: {

                actions : {
                    iSayHelloDialogButton : function(){
                        return this.waitFor({
                            id : "helloDialogButton", 
                            viewName : "logaligroup.sapui5.view.HelloPanel", 
                            actions : new Press(), 
                            errorMessage: "Did not find the 'Say Hello Dialog Button' on the Hello Panel view"
                        });
                    }
                }, 

                assertions: {
                    iSeeTheHelloDialog : function(){
                        return this.waitFor({
                            controlType: "sap.m.Dialog",
                            success: function(){
                                Opa5.assert.ok(true,"The dialog was opened")
                            }, 
                            errorMessage : "Did not find the dialog control"

                            });
                    }
                }

            }
            
        }); 

});