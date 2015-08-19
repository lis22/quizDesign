$(document).ready(function(){

  //so not selected when started
  $("select").prop("selectedIndex", -1);

  $("select").imagepicker({
            hide_select : true,
            show_label  : true
    })

  $("form").submit(function(e) {

  e.preventDefault();

  });


});
