

sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models", 
    "sap/ui/model/resource/ResourceModel"    
],
/**
 * @param {typeof sap.ui.core.UIComponent}  UIComponent
 */
function(UIComponent, Models, ResourceModel){
    return UIComponent.extend("logaligroup.SAPUI5.UIComponent", {
          
        metadata : {
            manifest: "json"
                // "rootView" : {
                //     "viewName" : "logaligroup.SAPUI5.view.App",
                //     "type" : "XML", 
                //     "async" : true, 
                //     "id" : "app"

                // }
            },

        init : function(){

            //call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            //set data model on the view 
            this.setModel(Models.createRecipient());

            //set i18n model on the view
            var i18nModel = new ResourceModel({bundleName:"logaligroup.SAPUI5.i18n.i18n"});
            this.setModel(i18nModel, "i18n");
            
        }


    }); 
});