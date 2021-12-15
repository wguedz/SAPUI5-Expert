//ts-nocheck
sap.ui.define([
    "../localService/mockServer",
    "sap/m/MessageBox"
],
    /** 
     * @param {types of sap.m.MessageBox} MessageBox  
     */
    function (mockServer, MessageBox) {
        'use strict';
        var aMockServers = [];

        //initialize the mock server
        aMockServers.push(mockServer.init());

        promise.all(aMockServers).catch(function (oError) {
            MessageBox.error(oError.message);
        }).finally(function () {
            sap.ui.require(["module:/sap/ui/core/ComponentSupport"]);
        });

    });