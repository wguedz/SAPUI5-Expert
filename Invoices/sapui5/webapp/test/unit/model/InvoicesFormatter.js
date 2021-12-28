sap.ui.define([
"logaligroup/sapui5/model/InvoicesFormatter", 
"sap/ui/model/resource/ResourceModel"
],
function(InvoicesFormatter,ResourceModel){
    QUnit.module("QInvoices Status", {

        beforeEach : function(){
            this._oResourceModel = new ResourceModel({
                bundleUrl : sap.ui.require.toUrl("logaligroup/sapui5") + "/i18n/i18n.properties"
            });
        },

        afterEach : function(){
            this._oResourceModel.destroy();  
        }

    });

    QUnit.test("Should return the Invoice status", function(){

        let oModel = this.stub();

        oModel.withArgs("i18n").returns(this._oResourceModel);

        let oViewStub = {
            getModel : oModel
        }

        let oController = {
            getView : this.stub().returns(oViewStub)
        }

        let fnIsolatedFormatter = InvoicesFormatter.invoiceStatus.bind(oController);

        //Assert
        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The invoice status for A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In progress", "The invoice status for B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "In progress", "The invoice status for C is correct");        
    });

});