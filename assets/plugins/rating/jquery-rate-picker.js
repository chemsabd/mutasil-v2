/**
 * by Helton MALAMBANE
 */
if (typeof jQuery === 'undefined'){
	throw new Error('jquery-rate-picker requires jQuery');
}
(function ($){
	"use strict";
	$.ratePicker = function (target, options){
		if (typeof options === 'undefined') options = {};
		options.max = typeof options.max === 'undefined' ? 5 : options.max;
		options.rgbOn = typeof options.rgbOn === 'undefined' ? "#ffd93a" : options.rgbOn;
		options.rgbOff = typeof options.rgbOff === 'undefined' ? "#ecf0f1" : options.rgbOff;
		options.rgbSelection = typeof options.rgbSelection === 'undefined' ? "#ffe67d" : options.rgbSelection;
		options.cursor = typeof options.cursor === 'undefined' ? "pointer" : options.cursor;
		options.indicator = typeof options.indicator === 'undefined' ? "fa fa-star" : "fa "+options.indicator;
		options.faceRating = true;
		options.displayValues = typeof options.displayValues === ['','','','',''] ? false : options.displayValues;
		if(options.faceRating){
			options.rgbOff = typeof options.rgbOff === 'undefined' ? "#ffffff" : "#ffffff";
		}

		var stars = typeof $(target).data('stars') == 'undefined' ? -1 : $(target).data('stars');

		$(target).css('cursor', options.cursor);
		$(target).append($("<input>", {type : "hidden", name : target.replace("#", ""), value : stars}));

		// $(target).append($("<i>", {class : options.indicator, style : "color: transparent;"}));
		for (var i = 1; i <= options.max; i++){
			if(options.faceRating){
				$(target).append($("<i>", {class : options.indicator, style : "background-color:" + (i <= stars ? options.rgbOn : options.rgbOff), 'data-shape':'face-'+i , 'data-text':options.displayValues[i-1]}));
			}else{
				$(target).append($("<i>", {class : options.indicator, style : "background-color:" + (i <= stars ? options.rgbOn : options.rgbOff)}));
			}
		}
		// $(target).append($("<i>", {class : options.indicator, style : "color: transparent;"}));

		$.each($(target + " > i"), function (index, item){
			$(item).click(function (){
				$("[name=" + target.replace("#", "") + "]").val(index);
				for (var i = 0; i <= options.max; i++){
					$($(target + "> i")[i]).removeClass('active');
					$($(target + "> i")[i]).css("background-color", options.rgbOff);
				}
				$(this).css("background-color", options.rgbSelection);
				$(this).addClass('active');
				if (!(options.rate === 'undefined')){
					options.rate(index > options.max ? options.max : index);
                    stars = index;
				}
			});
			$(item).mouseover(function (){
				$(this).css("background-color", options.rgbSelection);
			});
            $(item).mouseleave(function(){
                for (var i = 0; i < options.max; i++){
                    $($(target + "> i")[i]).css("background-color", i == stars ? options.rgbOn : options.rgbOff);
                }
            });
		});
	};
})(jQuery);
