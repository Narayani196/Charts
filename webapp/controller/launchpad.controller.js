sap.ui.define([
	'jquery.sap.global',
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(jQuery, Controller, JSONModel) {
	"use strict";

	return Controller.extend("AccidentMgmt.controller.launchpad", {
			getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},
		onInit : function (evt) {
			// set mock model
			var sPath = jQuery.sap.getModulePath("AccidentMgmt", "/data.json");
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel);
		},
		handleTilePress: function(evt){
		var tileTitle = evt.getSource().mBindingInfos.title.binding.oValue;
		switch(tileTitle){
			
			case 'Create Case':		sap.m.MessageToast.show("Create Case", {});
									this.getRouter().navTo("main", {}, true);
									break;
			case 'Search':			sap.m.MessageToast.show("Search", {});
									break;

		}
		},
 
		handleEditPress : function (evt) {
			var oTileContainer = this.getView().byId("container");
			var newValue = ! oTileContainer.getEditable();
			oTileContainer.setEditable(newValue);
			evt.getSource().setText(newValue ? "Done" : "Edit");
		},
 
		handleBusyPress : function (evt) {
			var oTileContainer = this.getView().byId("container");
			var newValue = ! oTileContainer.getBusy();
			oTileContainer.setBusy(newValue);
			evt.getSource().setText(newValue ? "Done" : "Busy state");
		},
 
		handleTileDelete : function (evt) {
			var tile = evt.getParameter("tile");
			evt.getSource().removeTile(tile);
		}

	});

});