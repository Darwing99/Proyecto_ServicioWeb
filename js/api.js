const urlUser = 'https://fierce-fortress-79578.herokuapp.com/api/userAccount';
const urlLocation="https://fierce-fortress-79578.herokuapp.com/api/location";
const urlBillin="https://fierce-fortress-79578.herokuapp.com/api/billing";
var x = new XMLHttpRequest(); 
if(x) x.onreadystatechange=function(){ 
    if (x.readyState === 4 && x.status===200){
        console.log(x.responseText); //Success
    }else{ 
        console.log(x); //Failed
    }
};



//Mostrar datos billing en la tabla
$(document).ready(function () {

    $.support.cors = true;
   $.ajax({
        type: "GET",
        url:urlBillin,
        datatype:'json',
        credentials: 'include',

        success: function (data) {
        $('#tabla > tbody').empty();
            $.each(data, function (i, item) {
           
            var rows ="<tr>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.description+"</td>"+
            "<td>"+ item.idUser+"</td>"+
            "<td>"+ item.debt+"</td>"+
            "<td>"+ item.credit +"</td>"+
            "<td>" +
            "<td>   <a  class='btn btn-success btn-rounded btn-md ml-md-0'>Edit</a>"+
            " <a  class='btn btn-primary btn-rounded btn-md ml-md-0'><i class='fas fa-trash'></i></a></td>"+
            "</tr>";
        $('#tabla> tbody').append(rows);
        });
            console.log(data);
        },
            failure: function (data) {
            console.log(data.responseText);
        },
            error: function (data) {
            console.log(data.responseText);
        }
     });
});

//Mostrar datos de direcciones en tabla
$(document).ready(function () {

    $.support.cors = true;
   $.ajax({
        type: "GET",
        url: urlLocation,
        datatype:'json',
        credentials: 'include',
        success: function (data) {
      
            $.each(data, function (i, item) {
           
            var rows ="<tr>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.location+"</td>"+
            "<td> <a class='btn btn-success btn-rounded btn-md ml-md-0'>Edit</a>"+
            " <a  class='btn btn-primary btn-rounded btn-md ml-md-0'>Delete</a></td>"+
            "</tr>";
        $('#tablalocation> tbody').append(rows);
        });
            console.log(data);
        },
            failure: function (data) {
            console.log(data.responseText);
        },
            error: function (data) {
            console.log(data.responseText);
        }
     });
});




//select de formulario users

$(document).ready(function () {
    $.support.cors = true;
   $.ajax({
        type: "GET",
        url: urlLocation,
        datatype:'json',
        credentials: 'include',

        success: function (data) {
            $.each(data, function (i, item) {
           
        $('#location'). append('<option value="' + item.id + '">' + item.location + '</option>');
        });
            console.log(data);
        },
            failure: function (data) {
            console.log(data.responseText);
        },
            error: function (data) {
            console.log(data.responseText);
        }
     });

     //select de formulario billing
     $.ajax({
        type: "GET",
        url: urlUser,
        datatype:'json',
        headers:{'Content-Type':'application/json'},
        credentials: 'include',

        success: function (data) {
            $.each(data, function (i, item) {
           
        $('#selectusuario'). append('<option value="' + item.id + '">' + item.name + '</option>');
        });
            console.log(data);
        },
            failure: function (data) {
            console.log(data.responseText);
        },
            error: function (data) {
            console.log(data.responseText);
        }
     });


});

//mandar datos a la tabla de users
$(document).ready(function () {

    $.support.cors = true;
   $.ajax({
        type: "GET",
        url:urlUser,
        datatype:'json',
        credentials: 'include',

        success: function (data) {
        $('#tablauser > tbody').empty();
            $.each(data, function (i, item) {
           
            var rows ="<tr>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.name+"</td>"+
            "<td>"+ item.location+"</td>"+
            "<td>   <a  class='btn btn-success btn-rounded btn-md ml-md-0'>Edit</a>"+
            " <a  class='btn btn-primary btn-rounded btn-md ml-md-0'>Delete</a></td>"+
            "</tr>";
        $('#tablauser> tbody').append(rows);
        });
            console.log(data);
        },
            failure: function (data) {
            console.log(data.responseText);
        },
            error: function (data) {
            console.log(data.responseText);
        }
     });
});


///Guardar usuarios

$("#guardarUser").click('submit', function(e){
  
    e.preventDefault();
    var codigo=null;
    var name = document.getElementById('Form-name').value;	
	var location=document.getElementById('location').value;

    $.ajax({
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type': 'POST',
        'url':  urlUser,
        'data': JSON.stringify({
            'id':codigo,
            'name':name,
            'location':location
          }),
        'dataType':'json',
        'success': function(data) {
         alert('Has enviado los datos');
        },
        'error': function(jqXHR, textStatus, errorThrown) {
            alert(' Error in processing!');
        }
    });

});


//Guardar Usuarios
// $("#guardarBilling").click('submit', function(e){
  
//     e.preventDefault();
//     var codigo=null;
//     var name = document.getElementById('Form-name').value;	
// 	var location=document.getElementById('location').value;

//     $.ajax({
//         headers: { 'Accept': 'application/json',
//             'Content-Type': 'application/json' 
//         },
//         'type': 'POST',
//         'url':  urlBillin,
//         'data': JSON.stringify({
//             'id':codigo,
//             'name':name,
//             'location':location
//           }),
//         'dataType':'json',
//         'success': function(data) {
//          alert('Has enviado los datos');
//         },
//         'error': function(jqXHR, textStatus, errorThrown) {
//             alert(' Error in processing!');
//         }
//     });

// });

//Guardar location
$("#guardarLocation").click('submit', function(e){
  
    e.preventDefault();
    var codigo=null;
	var location=document.getElementById('location').value;

    $.ajax({
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type': 'POST',
        'url':  urlLocation,
        'data': JSON.stringify({
            'id':codigo,
            'location':location
          }),
        'dataType':'json',
        'success': function(data) {
         alert('Has enviado los datos');
        },
        'error': function(jqXHR, textStatus, errorThrown) {
            alert(' Error in processing!');
        }
    });

});

//Guardar location
$("#guardarBilling").click('submit', function(e){
  
    e.preventDefault();
    var codigo=null;
	var location=document.getElementById('location').value;

    $.ajax({
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type': 'POST',
        'url':  urlLocation,
        'data': JSON.stringify({
            'id':codigo,
            'location':location
          }),
        'dataType':'json',
        'success': function(data) {
         alert('Has enviado los datos');
        },
        'error': function(jqXHR, textStatus, errorThrown) {
            alert(' Error in processing!');
        }
    });

});

