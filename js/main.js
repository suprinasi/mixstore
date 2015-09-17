	new WOW().init();

     var data_filter =  $('#sl2').slider({

     })
        .on('slide',function(){
        	console.log(data_filter.value)
        	 var isotop_filter = $('.grid').isotope({
				  // options
				  itemSelector: '.grid-item',
				  layoutMode: 'fitRows',

				  filter: function() {
				  		// console.log(data_filter.value[0])
					  	var number = $(this).data('price');
					  	var number = $(this).attr('data-price');
					  	return parseInt( number, 10 ) >= data_filter.value[0] && parseInt( number, 10 ) <= data_filter.value[1];
					} 
				});
        })
        .data('slider');

	var width = $(window).width(), height = $(window).height();
	if (width > 767) {
		$('.dropdown').hover(function(){
			$(this).addClass('open')
		},function(){
			$(this).removeClass('open')
		})
	}else if (width > 767) {
		$('.navbar').removeClass('navbar-fixed-top')
	}
		$('.logo').hover(function(){
			$(this).addClass('animated').addClass('pulse')
		},function(){
			$(this).removeClass('animated').removeClass('pulse')
		})

		$('.facebook').hover(function(){
			$(this).addClass('animated').addClass('pulse')
		},function(){
			$(this).removeClass('animated').removeClass('pulse')
		})

		$('.twitter').hover(function(){
			$(this).addClass('animated').addClass('pulse')
		},function(){
			$(this).removeClass('animated').removeClass('pulse')
		})

		$('.gplus').hover(function(){
			$(this).addClass('animated').addClass('pulse')
		},function(){
			$(this).removeClass('animated').removeClass('pulse')
		})

		$('.instagram').hover(function(){
			$(this).addClass('animated').addClass('pulse')
		},function(){
			$(this).removeClass('animated').removeClass('pulse')
		})

		$('.email').hover(function(){
			$(this).addClass('animated').addClass('pulse')
		},function(){
			$(this).removeClass('animated').removeClass('pulse')
		})