    $(document).ready(function(){
        $("#obtenerusuarios").on("click", function(e) {
          var $boton = $(this);
          $('.lista').toggle(1000,
            function(){
              $boton.html($(this).is(':visible') ? '<i class="fas fa-eye-slash"></i> ' : '<i class="far fa-eye"></i>');
          });
          e.preventDefault();
        });
        
          $("#obtenerdireccion").on("click", function(e) {
            var $boton = $(this);
            $('.listadireccion').toggle(1000,
              function(){
                $boton.html($(this).is(':visible')? '<i class="fas fa-eye-slash"></i> ' : '<i class="far fa-eye"></i>');
            });
            e.preventDefault();
        });
            
            $("#obtenerlista").on("click", function(e) {
              var $boton = $(this);
              $('.listabilling').toggle(1000,
                function(){
                  $boton.html($(this).is(':visible') ? '<i class="fas fa-eye-slash"></i> ' : '<i class="far fa-eye"></i>');
              });
              e.preventDefault();
      });
  

});
   
    
    