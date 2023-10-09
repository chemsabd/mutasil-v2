(function ($) {
	"use strict";

	// ______________ PAGE LOADING
	$(window).on("load", function (e) {
		$("#global-loader").fadeOut("slow");
	})


	// ______________ BACK TO TOP BUTTON
	$(window).on("scroll", function (e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$(document).on("click", "#back-to-top", function (e) {
		$("html, body").animate({
			scrollTop: 0
		}, 0);
		return false;
	});


	// ______________ COVER IMAGE
	$(".cover-image").each(function () {
		var attr = $(this).attr('data-bs-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	// ______________ CARD
	const DIV_CARD = 'div.card';

	// ___________TOOLTIP
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// __________POPOVER
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})
	// By default, Bootstrap doesn't auto close popover after appearing in the page
	$(document).on('click', function (e) {
		$('[data-toggle="popover"],[data-original-title]').each(function () {
			//the 'is' for buttons that trigger popups
			//the 'has' for icons within a button that triggers a popup
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				(($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false // fix for BS 3.3.6
			}

		});
	});

	// ______________ Toast
	var toastElList = [].slice.call(document.querySelectorAll('.toast'))
	var toastList = toastElList.map(function (toastEl) {
		return new bootstrap.Toast(toastEl)
	})
	$("#liveToastBtn").click(function () {
		$('.toast').toast('show');
	})

	// ______________ FUNCTION FOR REMOVE CARD
	$(document).on('click', '[data-bs-toggle="card-remove"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});


	// ______________ FUNCTIONS FOR COLLAPSED CARD
	$(document).on('click', '[data-bs-toggle="card-collapse"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________ CARD FULL SCREEN
	$(document).on('click', '[data-bs-toggle="card-fullscreen"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});


	//Input file-browser
	$(document).on('change', '.file-browserinput', function () {
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	}); // We can watch for our custom `fileselect` event like this

	//______File Upload
	$('.file-browserinput').on('fileselect', function (event, numFiles, label) {
		var input = $(this).parents('.input-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
		if (input.length) {
			input.val(log);
		} else {
			if (log) alert(log);
		}
	});


	// ______________Accordion Style
	$(document).on("click", '[data-bs-toggle="collapse"]', function () {
		$(this).toggleClass('active').siblings().removeClass('active');
	});

	// ______________Navbar Animated State

	initAnimatedNavbarState = function () {
		$(".inner-navbar .animated-state").each(function () {
			var targetNavBar = $(this).parent();
			var targetWidth = targetNavBar.find("a.active").parent().width();
			var targetHeight = targetNavBar.find("a.active").parent().height();
			var targetX = targetNavBar.find("a.active").parent().position().left;
			var targetY = targetNavBar.find("a.active").parent().position().top;
			targetNavBar.find(".animated-state").css('left', targetX).css('top', targetY).css('width', targetWidth).css('height', targetHeight);
		});
	}

	function updateAnimatedNavbarState(targetButton) {
		var targetWidth = targetButton.parent().width();
		var targetX = targetButton.parent().position().left;
		var targetY = targetButton.parent().position().top;
		var targetHeight = targetButton.find("a.active").parent().height();
		var stateElement = targetButton.parent().parent().find(".animated-state");
		stateElement.css('left', targetX).css('top', targetY).css('width', targetWidth).css('height', targetHeight);
	}

	$(".inner-navbar .animated-state~.nav-item a").on('click', function (e) {
		$(this).closest('.navbar-nav').find('a').removeClass('active');
		$(this).addClass('active');
		updateAnimatedNavbarState($(this));
	});
	window.addEventListener('resize', function (event) {
		setTimeout(
			function () {
				initAnimatedNavbarState();
				updateServiceCardHeight();
			}, 500
		);
	}, true);
	window.dispatchEvent(new Event('resize'));

})(jQuery);
var initAnimatedNavbarState;
/******* Isotope Filtration + Search *******/

var buttonFilters = {};
var buttonFilter; // ='.filter-pinned'; // Default Filter

// quick search regex
var qsRegex;
var gridItemHeight = 0;
var updateServiceCardHeight = function () {};
if (typeof Isotope === 'undefined') {} else {
	// Unify Items Height
	updateServiceCardHeight = function () {
		gridItemHeight = 0;
		$(".grid-item>.service_item").css('min-height', 'auto');
		$(".grid-item").each(function () {
			var thisH = $(this).height();
			if (thisH > gridItemHeight) {
				gridItemHeight = thisH;
			}
		});
		$(".grid-item>.service_item").css('min-height', gridItemHeight);
		$grid.isotope();
	};
	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: (navigator.userAgent.indexOf("Firefox") > 0) ? 'masonry' : 'fitRows',

		filter: function () {
			return qsRegex ? $(this).text().match(qsRegex) : true;
		},
		filter: function () {
			var $this = $(this);
			var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
			var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
			return searchResult && buttonResult;
		},
		//filter: '.filter-pinned',
		masonry: {
			//columnWidth: '.grid-sizer'
		},
		originLeft: !$('body').hasClass('rtl')
	});

	setTimeout(updateServiceCardHeight(), 500);


	$(document).ready(function () {
		$('.nav-link[data-bs-toggle="tab"]').on('shown.bs.tab', updateServiceCardHeight);
	});

	// use value of search field to filter
	var $servicesearch = $('.servicesearch').keyup(debounce(function () {
		try {
			qsRegex = new RegExp($servicesearch.val(), 'gi');
			$grid.isotope();
			if (!$grid.data('isotope').filteredItems.length) {
				$('.no-results').removeClass('d-none');
			} else {
				$('.no-results').addClass('d-none');
			}

		} catch (e) {};
	}, 200));

	// flatten object by concatting values
	function concatValues(obj) {
		var value = '';
		for (var prop in obj) {
			value += obj[prop];
		}
		return value;
	}

	// debounce so filtering doesn't happen every millisecond
	function debounce(fn, threshold) {
		var timeout;
		threshold = threshold || 100;
		return function debounced() {
			clearTimeout(timeout);
			var args = arguments;
			var _this = this;

			function delayed() {
				fn.apply(_this, args);
			}
			timeout = setTimeout(delayed, threshold);
		};
	}

	setTimeout(window.dispatchEvent(new Event('resize')), 1000);

	$('.service-filter-buttons').on('click', 'a', function (event) {
		event.stopPropagation();
		event.preventDefault()
		$('.servicesearch').val('');
		qsRegex = '';
		var $this = $(this);
		//console.log($(this).html());
		$('.filter-page-title').html($(this).html());
		// get group key
		var $buttonGroup = $this.parents('.button-group');
		var filterGroup = $buttonGroup.attr('data-filter-group');
		// set filter for group
		buttonFilters[filterGroup] = $this.attr('data-filter');
		// combine filters
		buttonFilter = concatValues(buttonFilters);
		// Isotope arrange
		$grid.isotope();
		if (!$grid.data('isotope').filteredItems.length) {
			$('.no-results').removeClass('d-none');
		} else {
			$('.no-results').addClass('d-none');
		}
	});



	// change is-checked class on buttons
	$('.service-filter-buttons').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'a', function (event) {
			$buttonGroup.find('.active').removeClass('active');
			var $button = $(event.currentTarget);
			$button.addClass('active');
		});
	});

}

/* Copy Text Support */

function fallbackCopyTextToClipboard(text) {
	var textArea = document.createElement("textarea");
	textArea.value = text;

	// Avoid scrolling to bottom
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		var successful = document.execCommand('copy');
	} catch (err) {
		console.error('Fallback: unable to copy', err);
	}
	document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard.writeText(text).then(function () {
		console.log('Async: Copying to clipboard was successful!');
	}, function (err) {
		console.error('Async: Could not copy text: ', err);
	});
}


/* OffCanvas Handle */
if (document.getElementById('offcanvasSideMenu')) {
	var SideMenuOffcanvas = document.getElementById('offcanvasSideMenu');
	SideMenuOffcanvas.addEventListener('show.bs.offcanvas', function () {
		if ($('#offcanvasSideMenu .offcanvas-body .list-group').length) {
			$('#offcanvasSideMenu_footer .navbar a.head-notifications').detach().appendTo('#offcanvasSideMenu .offcanvas-body .list-group');
			$('#offcanvasSideMenu_footer .navbar div:not(.country)>a:not(.userImg)').detach().attr('class', 'list-group-item').appendTo('#offcanvasSideMenu .offcanvas-body .list-group').before('<hr class="light"/>');
			$('#offcanvasSideMenu_footer .navbar a:not(.userImg)').detach().attr('class', 'list-group-item').appendTo('#offcanvasSideMenu .offcanvas-body .list-group').before('<hr class="light"/>');
		}
	});
}