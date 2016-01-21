var bruce = /bruce\sjenner/i 
var cait = /caitlyn\sjenner/i

self.port.on("contentReady",function(){
	var allelements = document.getElementsByTagName("*");
	var elem = allelements.getElementsByTagName("p");
	var count = 0
	async.each(elements,function(elem){
		if (elem.textContent.match(bruce) || elem.textContent.match(cait) ){
			elem.style.display = 'none';
			count++;
			console.log(count + " triggered words were blocked")	
		}
		

	},function(err){
		if(err){
			alert("Async operation went oops!")	;
		}
		
	});

})

