const urlUser = 'https://fierce-fortress-79578.herokuapp.com/api/userAccount';
const urlLocation="https://fierce-fortress-79578.herokuapp.com/api/location";
const urlBillin="https://fierce-fortress-79578.herokuapp.com/api/billing";


const urlInsertPyb="http://pythoncc.herokuapp.com/python/insert/billing/";
const urlInsertPya="http://pythoncc.herokuapp.com/python/insert/user/account/";
const urlInsertPyl="http://pythoncc.herokuapp.com/python/insert/location/";
const urlUpdatePyb="http://pythoncc.herokuapp.com/python/update/billing/";
const urlUpdatePya="http://pythoncc.herokuapp.com/python/update/user/account/";
const urlUpdatePyl="http://pythoncc.herokuapp.com/python/update/location";
const urlDeletePyb="http://pythoncc.herokuapp.com/python/delete/billing/";
const urlDeletePya="http://pythoncc.herokuapp.com/python/delete/user/account/";
const urlDeletePyl="http://pythoncc.herokuapp.com/python/delete/location/";

const urlReadyPHPb="https://apiweb12.herokuapp.com/api/billing/read.php";
const urlReadyPHPl="https://apiweb12.herokuapp.com/api/location/read.php";
const urlReadyPHPa="https://apiweb12.herokuapp.com/api/user/read.php";
const urlInsertPHPb="https://apiweb12.herokuapp.com/api/billing/create.php";

const urlInsertPHPl="https://apiweb12.herokuapp.com/api/location/create.php";
const urlInsertPHPa="https://apiweb12.herokuapp.com/api/user/create.php";


var x = new XMLHttpRequest(); 
if(x) x.onreadystatechange=function(){ 
    if (x.readyState === 4 && x.status===200){
        console.log(x.responseText); //Success
    }else{ 
        console.log(x); //Failed
    }
};

//Mostrar datos billing en la tabla
$('#obtenerlista').click(async(e)=>{
    $('.loader-billing').css('display','block');
    $.support.cors = true;
   $.ajax({
        type: "GET",
        url:urlBillin,
        datatype:'json',
        credentials: 'include',
        success: function (data) {
            $('.loader-billing').css('display','none');
            $('.listabilling').css('display','block');
            $('#tabla> tbody').empty();
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

     
     fetch(urlReadyPHPb,{
        type:"GET",
        cors:"false",
        datatype:'json',
        headers:{
           'Content-Type': 'application/json'
         }

         }) .then(response=>{
               var rows =`<tr>
               <td>${response.data.id}</td>
               <td>${response.data.description}</td>
               <td>${response.data.idUser}</td>
               <td>${response.data.debt}</td>
               <td>${response.data.credit}</td>
               <td>   <a  class='editar btn btn-success btn-rounded btn-md ml-md-0'><i class='fas fa-edit'></i></a>
               <button type='button' class='eliminar btn btn-danger btn-rounded btn-md ml-md-0'><i class='fas fa-trash'></i></button></td>
               </tr>`;
               $('#tablauser> tbody').append(rows);

    }).catch(err=>console.log(err));
});

//Mostrar datos de direcciones en tabla
$('#obtenerdireccion').click(async(e)=> {
    $('.loader-location').css('display','block');
    $.support.cors = true;

   $.ajax({
        type: "GET",
        url: urlLocation,
        datatype:'json',
        credentials: 'include',
        success: function (data) {
            $('.loader-location').css('display','none');
            $('.listadireccion').css('display','block');
            $('#tablalocation> tbody').empty();
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
        },failure: function (data) {
            console.log(data.responseText);
        }, error: function (data) {
            console.log(data.responseText);
        }
     });

     //direcciones de PHP
     fetch(urlReadyPHPl,{
        type:"GET",
        cors:"false",
        datatype:'json',
        headers:{
           'Content-Type': 'application/json'
         }

         }) .then(response=>{
               var rows =`<tr>
               <td>${response.data.id}</td>
               <td>${response.data.location}</td>
               <td>   <a  class='editar btn btn-success btn-rounded btn-md ml-md-0'><i class='fas fa-edit'></i></a>
               <button type='button' class='eliminar btn btn-danger btn-rounded btn-md ml-md-0'><i class='fas fa-trash'></i></button></td>
               </tr>`;
               $('#tablauser> tbody').append(rows);

    }).catch(err=>console.log(err));
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


},2000);

//mandar datos a la tabla de users
$('#obtenerusuarios').click(async(e)=> {
    $('.loader-users').css('display','block');
    $.support.cors = true;
   $.ajax({
        type: "GET",
        url:urlUser,
        datatype:'json',
        credentials: 'include',

        success: function (data) {
            
            $('.loader-users').css('display','none');
            $('.lista').css('display','block');
            $('#tablauser> tbody').empty();
            $.each(data, function (i, item) {
         
            var rows ="<tr>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.name+"</td>"+
            "<td>"+ item.location+"</td>"+
            "<td>   <a  class='editar btn btn-success btn-rounded btn-md ml-md-0'><i class='fas fa-edit'></i></a>"+
            " <button type='button' class='eliminar btn btn-danger btn-rounded btn-md ml-md-0'><i class='fas fa-trash'></i></button></td>"+
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

    //  PHP

     fetch(urlReadyPHPa,{
         type:"GET",
         cors:"false",
         datatype:'json',
         headers:{
            'Content-Type': 'application/json'
          }

          }) .then(response=>{
                var rows =`<tr>
                <td>${response.data.id}</td>
                <td>${resonse.data.name}</td>
                <td>${response.data.location}</td>
                <td>   <a  class='editar btn btn-success btn-rounded btn-md ml-md-0'><i class='fas fa-edit'></i></a>
                <button type='button' class='eliminar btn btn-danger btn-rounded btn-md ml-md-0'><i class='fas fa-trash'></i></button></td>
                </tr>`;
                $('#tablauser> tbody').append(rows);

     }).catch(err=>console.log(err));


        
});




///Guardar usuarios

$("#guardarUser").click('submit', function(e){


  
    e.preventDefault();
    var codigo=null;
    var name = document.getElementById('Form-name').value;	   
	var location=document.getElementById('location').value;

    if(name=="" || Location==""){
       
          swal("Campos Vacios", {
            icon: 'error',
            showConfirmButton: false,
            timer:1000 
          });
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
        swal("Campos Vacios", {
            icon: 'error',
            showConfirmButton: false,
            timer:1000 
          });
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
  if(description=="" || idusuario=="" || debit=="" || credit==""){
    swal("Campos Vacios", {
        icon: 'error',
        showConfirmButton: false,
        timer: 1000 
      });

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


$(document).on("click", ".eliminar", function(e){	 
    e.preventDefault();	        
    fila = $(this).closest("tr");	
    var codigo = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
    var name = (fila.find('td:eq(1)').text());
    var location = (fila.find('td:eq(2)').text());
    document.getElementById('id').value=codigo;
    document.getElementById('Form-name').value=name;
    document.getElementById('Form-name').focus();
    document.getElementById('location').selectedIndex=location;
    // $("#guardarUser").css("display","none");
    // $("#updateUser").css("display","block");


    swal({
        title: "Eliminar Registro?",
        text: "Desea eliminar a "+name+"?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((ok) => {
        if (ok) {
            $.ajax({
                url:urlUser,
                type:"DELETE",
                data:{id:codigo},
                success: function(res){
                    console.log(res);
                }
            }).then((ok)=>{
                swal("El registro ha sido eliminado", {
            icon: "success",
          });
            })
         
        }
      });

    })






