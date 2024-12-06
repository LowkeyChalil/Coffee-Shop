
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);



  //lil pop up
var learnMoreBtn = document.getElementById('learnMoreBtn');
var popup = document.getElementById('popuplil');

//cecille pop up
var learmorebtncecille = document.getElementById('learmorebtncecille')
var popupcec = document.getElementById('popupcec')

//margie popup
var learmorebtnmargie = document.getElementById('learmorebtnmargie')
var popupmargie = document.getElementById('popupmargie')


var closeBtn = document.getElementById('closeBtn');

// Open the popup when "Learn More" button is clicked
learnMoreBtn.onclick = function() {
popup.style.display = 'block'; // Show the popup
};

learmorebtncecille.onclick = function() {
	popupcec.style.display = 'block'; // Show the popup
	};

learmorebtnmargie.onclick = function() {
	popupmargie.style.display = 'block'; // Show the popup
	};


// Close the popup when the close button is clicked
closeBtn.onclick = function() {
popup.style.display = 'none'; // Hide the popup
};

closeBtncec.onclick = function() {
	popupcec.style.display = 'none'; // Hide the popup
	};

closeBtnmargie.onclick = function() {
	popupmargie.style.display = 'none'; // Hide the popup
	};
// Close the popup when the background is clicked
popup.onclick = function(event) {
if (event.target === popup) {
	popup.style.display = 'none'; // Hide the popup if the background is clicked
}
};

popupcec.onclick = function(event) {
	if (event.target === popupcec) {
		popupcec.style.display = 'none'; // Hide the popup if the background is clicked
	}
	};

	popupmargie.onclick = function(event) {
		if (event.target === popupmargie) {
			popupmargie.style.display = 'none'; // Hide the popup if the background is clicked
		}
		};