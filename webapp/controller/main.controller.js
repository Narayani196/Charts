sap.ui.controller("AccidentMgmt.controller.main", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf webapp.view.AddLocation
	 */
	 getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},
		onInit: function() {
			var sPath = jQuery.sap.getModulePath("AccidentMgmt", "/caseData.json");
			var oModel = new sap.ui.model.json.JSONModel(sPath);
			this.getView().setModel(oModel);
			 this.getView().byId("map_canvas").addStyleClass("myMap"); 
			 
			
       
    },  
   selectTab: function(oEvent){
   	var selItem = oEvent.getParameters().selectedItem;
		if (selItem.sId === "__filter9") {
			this.initialize_map();
		}
   	
   },
   initialize_map:function(){
   	 /*if (!this.initialized) {  
            this.initialized = true;  */
            this.geocoder = new google.maps.Geocoder();  
            var mapOptions = {  
                center: new google.maps.LatLng(-34.397, 150.644),  
                zoom: 8,  
                mapTypeId: google.maps.MapTypeId.ROADMAP  
            };  
            this.map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),  
                mapOptions); 
           
          
        //}  
   	
   	
   },
    actSearch: function () {  
    	var mapJson={};
        var map = this.map;  
        var address = this.getView().byId("inpSearch").getValue();  
        this.geocoder.geocode({ 'address': address }, function (results, status) {  
            if (status === google.maps.GeocoderStatus.OK) {  
                map.setCenter(results[0].geometry.location);  
                var marker = new google.maps.Marker({  
                    map: map,  
                    position: results[0].geometry.location  
                }); 
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                     mapJson.LocationID = results[0].place_id;
                     mapJson.Name= address;
                     mapJson.Address= address;
                     mapJson.Latitude = latitude;
                     mapJson.Longitude = longitude;
            } else {  
                alert('Geocode was not successful for the following reason: ' + status);  
            }  
        });  
    }  ,
		
		onNavBack: function(){
			
			/*	var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();

				if (sPreviousHash !== undefined) {
					// The history contains a previous entry
					history.go(-1);*/
			//	} else {
					// Otherwise we go backwards with a forward history
					var bReplace = true;
					this.getRouter().navTo("launchpad", {}, bReplace);
			//	}
			
		},
			onPressNavToDetail: function(){
			
			this.getSplitAppObj().to(this.createId("createDetail"));
			
		},
		onPressDetailBack:function(){
			
			this.getSplitAppObj().backDetail();
		},
		getSplitAppObj : function() {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				jQuery.sap.log.info("SplitApp object can't be found");
			}
			return result;
		},
		onListItemPress:function(oEvent){
			var oItemSelect = oEvent.getParameter("listItem");
			var oContext = oItemSelect.getBindingContext();
			//var caseId = oContext.getProperty("ID");
			var oSelectedObject = oContext.getObject();
				var oDetailModel = new sap.ui.model.json.JSONModel(oSelectedObject);
			this.byId("detail1").setModel(oDetailModel);
			this.byId("caseDescription").setText(oDetailModel.getData().Description);
			this.byId("caseType").setText(oDetailModel.getData().Type);
			this.byId("dateCreated").setText(oDetailModel.getData().DateCreated);
			this.byId("dateModified").setText(oDetailModel.getData().DateModified);
			this.byId("note").setText(oDetailModel.getData().note);
			
			
			
			
			
		}

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf webapp.view.AddLocation
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf webapp.view.AddLocation
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf webapp.view.AddLocation
	 */
	//	onExit: function() {
	//
	//	}

});