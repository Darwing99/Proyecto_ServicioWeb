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
const urlDeleteLocation='http://proyectoclasecc.herokuapp.com/principal/delete/location/';

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
         
            $('.listabilling').css('display','block');
            $('#tabla> tbody').empty();
            $.each(data, function (i, item) {
                $('.loader-billing').css('display','none');
           
            var rows ="<tr class='cyan lighten-4'>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.description+"</td>"+
            "<td>"+ item.idUser+"</td>"+
            "<td>"+ item.debt+"</td>"+
            "<td>"+ item.credit +"</td>"+
            "<td>   <a  class='editarbilling  btn-success btn-floating btn-md ml-md-0'><i class='fas fa-edit'></i></a>"+
            " <a  class='eliminarbilling btn-danger btn-floating btn-md ml-md-0'><i class='fas fa-trash'></i></a></td>"+
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

    //  async function postData(url = '', data = {}) {
    //     const response = await fetch(url, {
    //       method: 'POST', 
    //       mode: 'cors', 
    //       cache: 'no-cache',
    //       credentials: 'same-origin', 
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: 'follow', 
    //       referrerPolicy: 'no-referrer', 
    //       body: JSON.stringify(data.data) 
    //     });
    //     return response.json(); 
    //   }
    //   postData(urlReadyPHPb, { answer: 42 })
    //     .then(response => {
    //        
    //         response.data.forEach(e => {
    //             const rows =`<tr>
    //             <td>${e.id}</td>
    //             <td>${e.description}</td>
    //             <td>${e.id_user}</td>
    //             <td>${e.debt}</td>
    //             <td>${e.credit}</td>
    //             <td>   <a  class='editar  btn-success btn-floating btn-md ml-md-0'><i class='fas fa-edit'></i></a>
    //             <a type='button' class='eliminar btn-danger btn-floating btn-md ml-md-0'><i class='fas fa-trash'></i></a></td>
    //             </tr>`;
    //             $('#tabla> tbody').append(rows);
    //         });
    //     });
     
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
          
            $('.listadireccion').css('display','block');
            $('#tablalocation> tbody').empty();
            $.each(data, function (i, item) {
                $('.loader-location').css('display','none');
           
            var rows ="<tr class='cyan lighten-4'>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.location+"</td>"+
            "<td><a  class='editarlocation  btn-success btn-floating btn-md ml-md-0'><i class='fas fa-edit'></i></a>"+
            "<a class='eliminarlocationJava  btn-danger btn-floating btn-md ml-md-0'><i class='fas fa-trash'></i></a></td>"+
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

    //  //direcciones de PHP
    //  async function postData(url = '', data = {}) {
    //     const response = await fetch(url, {
    //       method: 'POST', 
    //       mode: 'cors', 
    //       cache: 'no-cache',
    //       credentials: 'same-origin', 
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: 'follow', 
    //       referrerPolicy: 'no-referrer', 
    //       body: JSON.stringify(data.data) 
    //     });
    //     return response.json(); 
    //   }
    //   postData(urlReadyPHPl, { answer: 42 })
    //     .then(response => {
    //         
    //         response.data.forEach(e => {
    //             const rows =`<tr class="teal lighten-5">
    //             <td>${e.id}</td>
    //             <td>${e.location}</td>
    //             <td>   <a class='editarlocation  btn-success btn-floating btn-md ml-md-0'><i class='fas fa-edit'></i></a>
    //              <a type='button' class='eliminarlocation btn-danger btn-floating btn-md ml-md-0'><i class='fas fa-trash'></i></a></td>
    //             </tr>`;
    //             $('#tablalocation> tbody').append(rows);
    //         });
    //     });

    //     //direcciones Python
     
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
        headers:{
            'crossDomain': true,
            'Content-Type': 'application/json'
          },
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
$('#obtenerusuarios').click(async(e)=> {
    $('.loader-users').css('display','block');
    $.support.cors = true;
   $.ajax({
        type: "GET",
        url:urlUser,
     
        datatype:'json',
        credentials: 'include',

        success: function (data) {
            
           
            $('.lista').css('display','block');
            $('#tablauser> tbody').empty();
            $.each(data, function (i, item) {
                $('.loader-users').css('display','none');
            var rows ="<tr class='cyan lighten-4'>"+
            "<td>"+item.id+"</td>"+
            "<td>"+ item.name+"</td>"+
            "<td>"+ item.location+"</td>"+
            "<td>   <a  class='editar  btn-success btn-floating btn-md ml-md-0'><i class='fas fa-edit'></i></a>"+
            " <a type='button' class='eliminar btn-danger btn-floating btn-md ml-md-0'><i class='fas fa-trash'></i></a></td>"+
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
    

     //DATOS DE USUARIOS DE PHP
    //  async function postData(url = '', data = {}) {
    //     const response = await fetch(url, {
    //       method: 'POST', 
    //       mode: 'cors', 
    //       cache: 'no-cache',
    //       credentials: 'same-origin', 
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: 'follow', 
    //       referrerPolicy: 'no-referrer', 
    //       body: JSON.stringify(data.data) 
    //     });
    //     return response.json(); 
    //   }

    //   postData(urlReadyPHPa, { answer: 42 })
    //     .then(response => {
    //        
    //         response.data.forEach(e=>{
    //             const rows =`<tr>
    //             <td>${e.id}</td>
    //             <td>${e.name}</td>
    //             <td>${e.location}</td>
    //             <td>   <a class='editarUsuarioPhp  btn-success btn-floating btn-md ml-md-0'><i class='fas fa-edit'></i></a>
    //              <a type='button' class='eliminarUsuarioPhp btn-danger btn-floating btn-md ml-md-0'><i class='fas fa-trash'></i></a></td>
    //             </tr>`;
    //             $('#tablauser> tbody').append(rows);
              
    //           })
                  
    //     });


});




//Mandar datos  a las tablas 

$(document).on("click", ".editar", function(e){	 
    e.preventDefault();	        
    $("#guardarUser").html("Actualizar");
    fila = $(this).closest("tr");	
    var codigo = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
    var name = (fila.find('td:eq(1)').text());
    var location = (fila.find('td:eq(2)').text());
    document.getElementById('id').value=codigo;
    document.getElementById('Form-name').value=name;
    document.getElementById('Form-name').focus();
    document.getElementById('location').selectedIndex=location;


});

///Guardar usuarios

$("#guardarUser").click('submit', function(e){
    if($("#guardarUser").text()=="Guardar"){
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
            $.ajax({
                headers: { 'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                'type': 'POST',
                'url':  urlInsertPya,
                'data': JSON.stringify({
                    'id':codigo,
                    'name':name,
                    'location':location
                }),
                'dataType':'json',
                'success': function(data) {
                alert('Has enviado los datos a python');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                    alert(' Error in processing! python');
                }
            });
            $.ajax({
                headers: { 'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/x-www-form-urlencoded' 
                },
                'type': 'POST',
                'url':  urlInsertPHPa,
                'data': JSON.stringify({
                    'id':codigo,
                    'name':name,
                    'location':location
                }),
                'dataType':'json',
                'success': function(data) {
                alert('Has enviado los datos a php');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                    alert(' Error in processing! php');
                }
            });

        }
        }else{
           
            if(name=="" || Location==""){
        
                swal("Campos Vacios", {
                    icon: 'error',
                    showConfirmButton: false,
                    timer:1000 
                });
                return true;
    
            }else{
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
                $.ajax({
                    headers: { 'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    },
                    'type': 'PUT',
                    'url':  urlUpdatePya,
                    'data': JSON.stringify({
                        'id':codigo,
                        'name':name,
                        'location':location
                    }),
                    'dataType':'json',
                    'success': function(data) {
                    alert('Has actualizado los datos a python');
                    },
                    'error': function(jqXHR, textStatus, errorThrown) {
                        alert(' Error in processing! python');
                    }
                });
                document.getElementById('Form-name').value="";
                 document.getElementById('location').value="";
                $("#guardarUser").html("Guardar");
            }
           
           
        }
      


});

//Eliminar Usuario
$(document).on("click", ".eliminar", function(e){	 
    e.preventDefault();	        
    fila = $(this).closest("tr");	
    var codigo = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
    var name = (fila.find('td:eq(1)').text());
    
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
                crossDomain : true,
                xhrFields: {
                      withCredentials: true
                 },
                 headers: {
                    "Access-Control-Allow-Headers" : "Content-Type",
                    "Access-Control-Allow-Origin": '*'
                },
              
                success: function(res){
                    console.log(res);
                }
            }).then((ok)=>{
                swal("El registro ha sido eliminado");
            })
         
        }
      });

    })

//mandar datos de direccion a tabla de direcciones
$(document).on("click", ".editarlocation", function(e){	 
    e.preventDefault();	        
    $("#guardarLocation").html("Actualizar");
    fila = $(this).closest("tr");	
    var codigo = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
    var location = (fila.find('td:eq(1)').text());
    
    document.getElementById('idlocation').value=codigo;
    document.getElementById('location').value=location;
    document.getElementById('location').focus();
});

//Guardar location
$("#guardarLocation").click(function(e){
    if(document.getElementById("guardarLocation").innerText=="GUARDAR"){
        e.preventDefault();
        var codigo=null;
        var location=document.getElementById('location').value;
        if(location==""){
            swal("Campos Vacios", {
                icon: 'error',
                showConfirmButton: false,
                timer:1000 
              });
           
             
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
            $.ajax({
                headers: { 'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' 
                },
                'type': 'POST',
                'url':  urlInsertPyl,
                'data': JSON.stringify({
                    'id':codigo,
                    'location':location
                  }),
                'dataType':'json',
                'success': function(data) {
                 alert('Has enviado los datos a python');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                    alert(' Error in processing python!');
                }
            });
            $.ajax({
                headers: { 'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/x-www-form-urlencoded' 
                },
                'type': 'POST',
                'url':  urlInsertPHPl,
                'data': JSON.stringify({
                    'id':codigo,
                    'location':location
                  }),
                'dataType':'json',
                'success': function(data) {
                 alert('Has enviado los datos a php');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                    alert(' Error in processing! php');
                }
            });

        }

     
    }else{
        if(location==""){
            swal("Campos Vacios", {
                icon: 'error',
                showConfirmButton: false,
                timer:1000 
              });
          
    
        }else{
            e.preventDefault();
            var codigo=document.getElementById('idlocation').value;
            var location=document.getElementById('location').value;
            datos={
               
            }
            $.ajax({
             
                'method': 'PUT',
                'url':  urlLocation, 
                'data': JSON.stringify({ 
                        'id':codigo,
                        'location':location}),
                'dataType':'json',
                headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json' 
                },
                'success': function(data) {
                alert('Has actualizado los datos de direccion');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                   
                    alert(' Error in processing!');
                    console.log(JSON.stringify(datos));
                }
            });
            $.ajax({
                headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json' 
                },
                'method': 'PUT',
                'url':  urlUpdatePyl,
                'data': JSON.stringify({
                    'id':codigo,
                    'location':location
                  }),
                'dataType':'json',
                'success': function(data) {
                 alert('Has actualizado los datos en python');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                    alert(' Error in processing python!');
                }
            });
           
            

          
            document.getElementById('location').value=="";
            $("#guardarlocation").html("Guardar"); 
        }

    }

    
   
   

});

$(document).on("click", ".eliminarlocationJava", function(e){	 
    e.preventDefault();	        
    fila = $(this).closest("tr");	
    var codigo = (fila.find('td:eq(0)').text()); //capturo el ID
    var location = (fila.find('td:eq(1)').text());
  

    swal({
        title: "Eliminar Registro?",
        text: "Desea eliminar  "+location+"? "+codigo+"",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((ok) => {
        if (ok) {
            fetch(urlLocation,{
                method:'DELETE',
                data:{
                    id:codigo
                }, 
                mode: 'no-cors', 
                cache: 'no-cache',
                credentials: 'same-origin', 
                headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json' 
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer', 
                success: function(){
                    alert('Eliminado con exito');
                },error:function(){
                    alert('Error');
                }
            })
            .then(response=>response.json())
            .then(response=>{

            
            })
         
        }
      });

    })


//mandar datos de direccion a tabla de billing
$(document).on("click", ".editarbilling", function(e){	 
    e.preventDefault();	        
    $("#guardarBilling").html("Actualizar");
    fila = $(this).closest("tr");	
    var codigo = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
    var descripcion = (fila.find('td:eq(1)').text());
    var idusuario =   (fila.find('td:eq(2)').text()); //capturo el ID
    var debit = (fila.find('td:eq(3)').text());
    var credit = (fila.find('td:eq(4)').text()); //capturo el ID

    document.getElementById('idbilling').value=codigo;
    document.getElementById('Form-descripcion').value=descripcion;
    document.getElementById('Form-descripcion').focus();
    document.getElementById('selectusuario').value=idusuario;
    document.getElementById('Form-debit').value=debit;
    document.getElementById('Form-debit').focus();
    document.getElementById('Form-credit').value=credit;
    document.getElementById('Form-credit').focus();

    
});



//Guardar billin
$("#guardarBilling").click('submit', function(e){
  if(document.getElementById("guardarBilling").innerText=="GUARDAR"){
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
            $.ajax({
                headers: { 'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },

                'type': 'POST',
                'url':  urlInsertPyb,
                'data': JSON.stringify({'id': codigo,
                                        'description': description,
                                        'idUser': idusuario,
                                        'debt':debit,
                                        'credit': credit    
                                    }),
                'dataType':'json',
                'success': function(data) {
                alert('Has enviado los datos a python');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                    alert(' Error in processing! python');
                }
            });
            $.ajax({
                headers: { 'Accept': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/x-www-form-urlencoded' 
                },
                'type': 'POST',
                'url':  urlInsertPHPb,
                'data': JSON.stringify({'id': codigo,
                                        'description': description,
                                        'idUser': idusuario,
                                        'debt':debit,
                                        'credit': credit    
                                    }),
                'dataType':'json',
                'success': function(data) {
                alert('Has enviado los datos a php');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                    alert(' Error in processing! php');
                }
            });
        }
  }else{
        e.preventDefault();

        if(description=="" || idusuario=="" || debit=="" || credit==""){
            swal("Campos Vacios", {
                icon: 'error',
                showConfirmButton: false,
                timer: 1000 
            });
        }else{
            var codigo= document.getElementById('idbilling').value;
            var description=document.getElementById('Form-descripcion').value;
            var idusuario=document.getElementById('selectusuario').value;
            var debit=parseFloat(document.getElementById('Form-debit').value);
            var credit=parseFloat(document.getElementById('Form-credit').value);
    
            $.support.cors = true;
    
            data={
                'id':codigo,
                'description':description,
                'idusuario':idusuario,
                'debt':debit,
                'credit':credit
            }
    
            $.ajax({
                headers: { 'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'crossDomain': true, 
                },
                'type': 'PUT',
                'url':  urlBillin,
                'data': JSON.stringify(data),
                'dataType':'json',
                'success': function(data) {
                alert('Has actualizado los datos de direccion');
                },
                'error': function(jqXHR, textStatus, errorThrown) {
                    alert(' Error in processing!');
                    console.log(JSON.stringify(data));
                }
            });
        }
        document.getElementById('idbilling').value="";
        document.getElementById('Form-descripcion').value="";
        document.getElementById('selectusuario').value="";
        document.getElementById('Form-debit').value="";
        document.getElementById('Form-credit').value="";
      
      $("#guardarBilling").html("Guardar");
  }

});


//Eliminar Billing 
$(document).on("click", ".eliminarbilling", function(e){	 
    e.preventDefault();	        
    fila = $(this).closest("tr");	
    var codigo = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
    var name = (fila.find('td:eq(1)').text());
 

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
                url:urlBillin,
                type:"DELETE",
                data:{id:codigo},
                headers:{ 'crossDomain': true},
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









