sap.ui.controller("zproduct.Product", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zproduct.Product
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zproduct.Product
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zproduct.Product
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zproduct.Product
*/
//	onExit: function() {
//
//	}
	onPressBtn : function(oEvent){
		
         var oModel = new sap.ui.model.odata.v2.ODataModel("proxy/https/services.odata.org/V2/(S(ctwwmjsklljimvlf5fo5je2g))/OData/OData.svc/");
         
         var data = {     		 
        		 ID : parseInt(this.getView().byId("idID").getValue()),
        		 Name : this.getView().byId("idName").getValue(),
        		 Description : this.getView().byId("idDescription").getValue(),
        		 ReleaseDate : this.getView().byId("idRDate").getValue(),
        		 DiscontinuedDate : this.getView().byId("idDdate").getValue(),
        		 Rating : this.getView().byId("idRating").getValue(),
        		 Price : this.getView().byId("idPrice").getValue()
         }
         
         oModel.create("/Products", data,{ 
        	 success : function(){
        		 //
        		 sap.m.MessageToast.show("Data Created");
        	 },
        	 error : function(){
        		 //
        		 sap.m.MessageToast.show("Data Not Created");
        	 }
         })
         
		
	}

});













