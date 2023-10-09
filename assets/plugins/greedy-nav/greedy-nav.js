var $nav = $('.greedy-nav');
var $btn = $('.greedy-nav button');
var $vlinks = $('.greedy-nav .visible-links');
var $hlinks = $('.greedy-nav .hidden-links');

var breaks = [];

function updateNav() {
	if($hlinks.length == 0 || $vlinks.length == 0) return;
	if($( window ).width() < 767){
		$hlinks.children().appendTo($vlinks);
		$btn.addClass('hidden');
		$hlinks.addClass('hidden');
		breaks = [];
		return;
	}
	var availableSpace = $btn.hasClass('hidden') ? $nav.width() - 100 : $nav.width() - $btn.width() - 120;
	// The visible list is overflowing the nav
	if ($vlinks.width() > availableSpace) {

		// Record the width of the list
		breaks.push($vlinks.width());

		// Move item to the hidden list
		$vlinks.children().last().prependTo($hlinks);

		// Show the dropdown btn
		if ($btn.hasClass('hidden')) {
			$btn.removeClass('hidden');
		}
		$(".greedy-nav li.animated-state").remove();

		// The visible list is not overflowing
	} else {

		// There is space for another item in the nav
		if (availableSpace > breaks[breaks.length - 1]) {

			// Move the item to the visible list
			$hlinks.children().first().appendTo($vlinks);
			breaks.pop();
		}

		// Hide the dropdown btn if hidden list is empty
		if (breaks.length < 1) {
			$btn.addClass('hidden');
			$hlinks.addClass('hidden');
		}
	}

	// Keep counter updated
	$btn.find('.count').attr("count", breaks.length);

	// Recur if the visible list is still overflowing the nav
	if ($vlinks.width() > availableSpace) {
		updateNav();
	}
}

// Window listeners

$(window).resize(function() {
	updateNav();
});

$btn.on('click', function() {
	$hlinks.toggleClass('hidden');
});
$(document).ready(function() {
	setTimeout(updateNav, 100);
});

