'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();


// Toggle All Checkboxes
// ----------------------------
// $('.toggle-all-checkboxes').click (function () {
//      var checkedStatus = this.checked;
//      $('.bulk-checkboxes-controls span[data-dropdown]').toggleClass('.show');
//     $('.toggle-all-checkboxes-wrap').find(':checkbox').each(function () {
//         $(this).prop('checked', checkedStatus);
//      });
// });


// Sort Menu Items
// ----------------------------
// Sortable.create(sortableList, {  });
// Sortable.create(listWithHandle, {
//   handle: '.drag-handle',
//   draggable: "tr",
//   animation: 150
// });

// Select2
// ----------------------------
$(document).ready(function() {
  $('select').select2({
    theme: "classic"
  });

});

