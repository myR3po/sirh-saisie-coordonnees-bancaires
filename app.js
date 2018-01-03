jQuery.noConflict();

jQuery.ajax({
	  url: "http://localhost:8080/api/collaborateurs",
	  type: "GET",
	  dataType: "json",
	  success:function(data)
	  {
		data.forEach(function(collab) {
			jQuery('#myTable > tbody:last-child').append("<tr><td>" +collab.matricule+"</td><td>" + collab.nom+ "</td><td>" + collab.prenom + "</td></tr>");
		});
	  }
	  
	});
