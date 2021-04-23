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
$(document).ready(async(e)=>{

    $.support.cors = true;
   $.ajax({
        type: "GET",
        url:urlBillin,
        datatype:'json',
        credentials: 'include',

        success: function (data) {
            $('.loader-billing').css('display','none');
            $('.listabilling').css('display','block');
            $.each(data, function (i, item) {
           
            var rows ="<tr>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.description+"</td>"+
            "<td>"+ item.idUser+"</td>"+
            "<td>"+ item.debt+"</td>"+
            "<td>"+ item.credit +"</td>"+
            "<td>   <a  class='btn btn-success btn-rounded btn-md ml-md-0'><i class='fas fa-edit'></i></a>"+
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
$(document).ready(async(e)=> {

    $.support.cors = true;
   $.ajax({
        type: "GET",
        url: urlLocation,
        datatype:'json',
        credentials: 'include',
        success: function (data) {
            $('.loader-location').css('display','none');
            $('.listadireccion').css('display','block');
            $.each(data, function (i, item) {
           
            var rows ="<tr>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.location+"</td>"+
            "<td><a  class='btn btn-success btn-rounded btn-md ml-md-0'><i class='fas fa-edit'></i></a>"+
            "<a class='btn btn-primary btn-rounded btn-md ml-md-0'><i class='fas fa-trash'></i></a></td>"+
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

$(document).ready(async(e)=> {
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
$(document).ready(async(e)=> {

    $.support.cors = true;
   $.ajax({
        type: "GET",
        url:urlUser,
        datatype:'json',
        credentials: 'include',

        success: function (data) {
            
            $('.loader-users').css('display','none');
            $('.lista').css('display','block');
     
            $.each(data, function (i, item) {
           
            var rows ="<tr>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.name+"</td>"+
            "<td>"+ item.location+"</td>"+
            "<td>   <a  class='editar btn btn-success btn-rounded btn-md ml-md-0'><i class='fas fa-edit'></i></a>"+
            " <button type='button' class='eliminar btn btn-primary btn-rounded btn-md ml-md-0'><i class='fas fa-trash'></i></button></td>"+
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

    if(name=="" || Location==""){
        alert("Campos vacios");
        return true;

    }else{
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
    }

  

});

$("#updateUser").click('submit', function(e){
  
    e.preventDefault();
    var codigo=document.getElementById('id').value;
    var name = document.getElementById('Form-name').value;	
	var location=document.getElementById('location').value;

    $.support.cors = true;

    data={
        'id':codigo,
        'name':name,
        'location':location
    }

    $.ajax({
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        'type': 'PUT',
        'url':  urlUser,
        'data': JSON.stringify(data),
        'dataType':'json',
        'success': function(data) {
         alert('Has actualizado los datos de usuario');
        },
        'error': function(jqXHR, textStatus, errorThrown) {
            alert(' Error in processing!');
            console.log(JSON.stringify(data));
        }
    });
});



//Guardar location
$("#guardarLocation").click('submit', function(e){
  
    e.preventDefault();
    var codigo=null;
	var location=document.getElementById('location').value;
    if(location==""){
        alert("Campos vacios");
        return true;

    }else{
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
    
    }

});

//Guardar billin
$("#guardarBilling").click('submit', function(e){
  
    e.preventDefault();
    var codigo=null;
	var description=document.getElementById('Form-descripcion').value;
    var idusuario=document.getElementById('selectusuario').value;
    var debit=parseFloat(document.getElementById('Form-debit').value);
    var credit=parseFloat(document.getElementById('Form-credit').value);
    var date=document.getElementById('Form-date').value;
  if(description=="" || idusuario=="" || debit=="" || credit==""){
      alert("ampos Vacios");

  }else{
      
    $.ajax({
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },

        'type': 'POST',
        'url':  urlBillin,
        'data': JSON.stringify({'id': codigo,
                                'description': description,
                                'idUser': idusuario,
                                'debt':debit,
                                'credit': credit    
                              }),
        'dataType':'json',
        'success': function(data) {
         alert('Has enviado los datos');
        },
        'error': function(jqXHR, textStatus, errorThrown) {
            alert(' Error in processing!');
        }
    });
  }


});

//Delete users
$(document).on("click", ".editar", function(e){	 
    e.preventDefault();	        
    fila = $(this).closest("tr");	
    var codigo = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
    var name = (fila.find('td:eq(1)').text());
    var location = (fila.find('td:eq(2)').text());
    document.getElementById('id').value=codigo;
    document.getElementById('Form-name').value=name;
    document.getElementById('Form-name').focus();
    document.getElementById('location').selectedIndex=location;
    $("#guardarUser").css("display","none");
    $("#updateUser").css("display","block");

    })





