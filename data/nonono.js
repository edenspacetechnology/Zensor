var bruce = /bruce\sjenner/i 
var cait = /caitlyn\sjenner/i

self.port.on("contentReady",function(){
	var searchElements = document.getElementsByClassName("search-result")
	var entryElements = document.getElementsByClassName("entry");
	function fE(array){
		forEach(array,function(current,index,array){
			if (current.textContent.match(bruce) || current.textContent.match(cait) ){
				//elem.style.display = 'none';
				current.textContent = "Blockedddddddddddddddd by /u/livebeta "
				//searchCount++;
				//console.log(searchCount + " triggered words were blocked")	
			}
			var done = this.async()
			setTimeout(function(){
				done();
			},40);
			

		},function(notAborted,arr){
			if(!notAborted){
				alert("Async operation went oops!")	;
			}
			
		});
	}

	fE(searchElements);
	fE(entryElements);
})

