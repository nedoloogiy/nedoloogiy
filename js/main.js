
	var heading = $('.about h1');
	if(heading.length === 1){
		$('.page-title').text(heading.text());
		heading.hide();
	}

	$('.fa-bars').on('click',function(){
		$('.top-menu').slideToggle(300,function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}
		});
	});

	function renderSlide(collection,rmC=false){
		var slideData,titleSlideData,descSlideData,imgSlideData,bigSlide,titleSlide,descSlide;
		if(!rmC){
			$('#list-thumbnails li').removeClass('slideActive');
			collection.addClass('slideActive');
		}
		slideData = collection.children();
		titleSlideData = slideData.data('slidetitle');
		descSlideData = slideData.data('slidedesc');
		imgSlideData = slideData.data('slideimg');
		bigSlide = $('#slider .item-slide img');
		titleSlide = $('#slider .item-slide h3 a');
		descSlide = $('#slider .item-slide p');
		if(imgSlideData == bigSlide.attr('src')){ return;}//console.log('HEX!');
		descSlide.text(descSlideData);
		titleSlide.text(titleSlideData);
		bigSlide.attr('src', imgSlideData);
	}

	function slideNext(){
		var nextSlide, cntSlide,numThisSlide;
		cntSlide = $('#list-thumbnails .item-thumbnail').length; // общее количество слайдов
		numThisSlide = $('#list-thumbnails .slideActive').children().data('slidenum'); // номер текущего слайда
		if(numThisSlide == cntSlide){
			nextSlide = $('[data-slidenum = 1]').parent();
		}else{
			nextSlide = $('[data-slidenum = '+ numThisSlide +']').parent().next();
		}
		renderSlide(nextSlide);
	}

	function slidePrev(){
		var prevSlide, cntSlide,numThisSlide;
		cntSlide = $('#list-thumbnails .item-thumbnail').length; // общее количество слайдов
		numThisSlide = $('#list-thumbnails .slideActive').children().data('slidenum'); // номер текущего слайда
		if(numThisSlide == 1){
			prevSlide = $('[data-slidenum = '+ cntSlide +']').parent();
		}else{
			prevSlide = nextSlide = $('[data-slidenum = '+ numThisSlide +']').parent().prev();
		}
		renderSlide(prevSlide);
	}

	$('#slider').on('click', '.item-thumbnail > a', function(e){
		e.preventDefault();
		$('.item-thumbnail').removeClass('slideActive')
		$(this).parent().addClass('slideActive');
		var activeSlide = $(this); // данные кликнутого слайда
		renderSlide(activeSlide.parent(), true);
	});

	$('.slideBtn span').on('click',function(){
		var useFunc = $(this).data('btn');
		switch(useFunc){
			case 'left': slidePrev(); break;
			case 'right': slideNext(); break;
		}

	});

$('#formSend').on('click',function(e){
	e.preventDefault();
	console.log($('.wrap-input').parent(':input'));
});
	
