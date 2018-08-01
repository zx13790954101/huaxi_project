var script=document.createElement("script");  
script.type="text/javascript";  
script.src="js/jquery.min.js";  
document.getElementsByTagName('head')[0].appendChild(script);  
setTimeout(function(){  
$(document).ready(function(){  
   
    var lenght_data=$(".T_PK10 L_PK10JSC span").length;
  
    for(var i=0;i<lenght_data;i++){
    	var data=$(".T_PK10 L_PK10JSC span").eq(i).find("b").html();
    	alert(data);
    }
});  
},100);  