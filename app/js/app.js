$(document).foundation();

// +/- Form Field Blocks
// ---------------------------
var max_fields      = 10; //maximum input boxes allowed
var wrapper         = $(".add-remove-form-fields"); //Fields wrapper
var add_button      = $(".add_field_button"); //Add button ID

var x = 1; //initlal text box count
$(add_button).click(function(e){ console.log('true');//on add input button click
  e.preventDefault();
  if(x < max_fields){ //max input box allowed
      x++; //text box increment
      $(wrapper).append('<div class="toggle-fields"><div class="row"><div class="large-12 columns"><br/><hr/><select class="special-select"><option value="">Blue Kale Studio Salad</option><option value="Miso Tahini Soup ">Miso Tahini Soup</option><option value="">Coconut Quinoa Bowl</option><option value="">Simple Carrot Soup</option><option value="Sopa Verde de Elote">Sopa Verde de Elote</option></select></div></div><div class="row"><div class="large-12 columns"><div class="remove_field button tiny right add_field_button">Remove Dish</div></div></div>');

  }
});

$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
  e.preventDefault(); $(this).parents('div.toggle-fields').remove(); x--;
})


$(document).ready(function() {

    // // Sort Menu Items
    // // ----------------------------
    // Sortable.create(sortableList, {  });
    // Sortable.create(listWithHandle, {
    //   handle: '.drag-handle',
    //   draggable: "tr",
    //   animation: 150
    // });

    // Select2
    // ----------------------------
    $('.special-select').select2();


});

