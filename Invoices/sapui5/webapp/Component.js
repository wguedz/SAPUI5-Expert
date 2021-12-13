sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
    "logaligroup/sapui5/model/models", 
    "sap/ui/model/resource/ResourceModel", 
    "./controller/HelloDialog"
    
], function (UIComponent, Device, models, ResourceModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("logaligroup.sapui5.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
            this.setModel(models.createDeviceModel(), "device");
            
            this.setModel(models.createRecipient());

            var i18nModel = new ResourceModel({bundleName:"logaligroup.sapui5.i18n.i18n"}); 
            this.setModel(i18nModel,"i18n");

            this._helloDialog= new HelloDialog(this.getRootControl());

        },
        
        exit : function(){
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function(){
            this._helloDialog.open();
        }

	});
});