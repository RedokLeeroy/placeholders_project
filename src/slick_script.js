$(".reviews-group").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: ".revievs-nav",
});
$(".revievs-nav").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".reviews-group",
	// dots: true,
	// centerMode: true,
	focusOnSelect: true,
	mobileFirst: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 7,
				infinite: false,
			},
		},
	],
});
