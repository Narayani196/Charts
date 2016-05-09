sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("AccidentMgmt.controller.App", {
			
				getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			}
			/*	getModel : function (sName) {
				return this.getView().getModel(sName);
			},
				setModel : function (oModel, sName) {
				return this.getView().setModel(oModel, sName);
			},
				getResourceBundle : function () {
				return this.getOwnerComponent().getModel("i18n").getResourceBundle();
			},
*/
			/*onInit : function () {
				var oViewModel,
					fnSetAppNotBusy,
					iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

				oViewModel = new JSONModel({
					busy : true,
					delay : 0
				});
				this.setModel(oViewModel, "appView");

				fnSetAppNotBusy = function() {
					oViewModel.setProperty("/busy", false);
					oViewModel.setProperty("/delay", iOriginalBusyDelay);
				};

				///this.getOwnerComponent().getModel().metadataLoaded().
				//	then(fnSetAppNotBusy);

				// apply content density mode to root view
				//this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			}*/
		});

	}
);