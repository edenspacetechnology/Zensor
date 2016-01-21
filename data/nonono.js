var bruce = /bruce\sjenner/i 
var cait = /caitlyn\sjenner/i

self.port.on("contentReady",function(){
	var searchElements = document.getElementsByClassName("search-result")
	var entryElements = document.getElementsByClassName("entry");
	//var searchCount = 0
	async.each(searchElements,function(elem){
		if (elem.textContent.match(bruce) || elem.textContent.match(cait) ){
			//elem.style.display = 'none';
			elem.textContent = "Blockedddddddddddddddd by /u/livebeta "
			//searchCount++;
			//console.log(searchCount + " triggered words were blocked")	
		}
		

	},function(err){
		if(err){
			alert("Async operation went oops!")	;
		}
		
	});
	async.each(entryElements,function(elem){
		if (elem.textContent.match(bruce) || elem.textContent.match(cait) ){
			//elem.style.display = 'none';
			elem.textContent = "Blockedddddddddddddddd by /u/livebeta "
			//searchCount++;
			//console.log(searchCount + " triggered words were blocked")	
		}
		

	},function(err){
		if(err){
			alert("Async operation went oops!")	;
		}
		
	});

})

