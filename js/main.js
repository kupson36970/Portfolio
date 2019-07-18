const accordion = function () {
	$('.skills-accordion-heading').on('click', function (event) {

		const $this = $(this);

		$this.closest('.skills-accordion').find('.skills-accordion-content').slideToggle(400, 'easeInOutExpo');
		if ($this.closest('.skills-accordion').hasClass('active')) {
			$this.closest('.skills-accordion').removeClass('active');
		} else {
			$this.closest('.skills-accordion').addClass('active');
		}
		event.preventDefault();
	});
};



$(function () {
	accordion();
});