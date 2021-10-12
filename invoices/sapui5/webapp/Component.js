sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
    "logaligroup/invoices/model/models", 
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, Device, models, ResourceModel) {
	"use strict";

	return UIComponent.extend("logaligroup.invoices.Component", {

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

            var i18nModel = new ResourceModel({bundleName:"logaligroup.invoices.i18n.i18n"}); 
            this.setModel(i18nModel,"i18n");
		}
	});
});