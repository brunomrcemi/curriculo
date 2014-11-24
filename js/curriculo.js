 $('document').ready(function(){
        $.getJSON('http://rarolabs.com.br:88/alunos.json', function(data){
		 var i;
		 for(i=0;i <data.length;i++)
		 {
             if(data[i].id != 9)
             {
		       $('.list-group').append("<a href='" + data[i].link_html +"' class='list-group-item'>" +
		                            "<h4 class='list-group-item-heading'>"+ data[i].nome +"</h4>" +
		                            "<p class='list-group-item-text'>" + data[i].mini_curriculo +"</p>" +
								    "</a>");
		     } 
		 } 
		});
	})