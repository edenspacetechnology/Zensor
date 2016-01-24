var tabs = require('sdk/tabs')
var self = require("sdk/self");

tabs.on('activate',function(tab){
	tab.on('ready',function(tab){
		var hiworker = tab.attach({
			contentScriptFile: [require.resolve("./node_modules/async-foreach/dist/ba-foreach.js"),self.data.url("nonono.js")]
		})
			
		hiworker.port.emit("contentReady");	
		
		
		
	})
})