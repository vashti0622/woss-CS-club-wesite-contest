//Java Script File
$(document).ready(function(){
	$(document).keypress(function(event){
		alert(event.which)
		if (event.which == '13'){
			alert('You pressed a "enter" key in somewhere');
		}
	});
});