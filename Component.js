// define a new UIComponent
jQuery.sap.declare("zui5_conf_try.Component");

//jQuery.sap.require("sap.ui.core.Core");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.table.Table");

//new Component
sap.ui.core.UIComponent.extend('zui5_conf_try.Component',{	
	metadata : {
		version : "1.0",
		dependencies : {
			//version : "1.8",
			//includes : [ "/models",'/views' ], 
		//	libs : [ "sap.ui.core" ]
		}
	},	
	init: function() {
		alert('init222');		
	},	
	createContent: function() {
		//jQuery.sap.registerModulePath('views','/views');
		sap.ui.localResources('views');
		var view = sap.ui.jsview("idHome", "views.Home");
		return view;
	}
});