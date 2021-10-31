sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller}  Controller 
     * @param {typeof sap.m.MessageToast}          MessageToast 
     */
    function (Controller, MessageToast ) {
        "use strict";

        return Controller.extend("logaligroup.sapui5.controller.HelloPanel", {

            onInit: function () {
            },

            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var msg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(msg);
            },

            openDialog: function () {
                this.getOwnerComponent().openHelloDialog( );
            },

        });

    });