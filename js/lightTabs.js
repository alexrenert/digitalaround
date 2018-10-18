(function($){
	jQuery.fn.lightTabs = function(options){

    var defaults = {
      tabClass: '.light-tab',
      arrowClass: '.light-arrow',
      containerClass: '.light-container'
    };

    if (options){$.extend(defaults,options);}

		var createTabs = function(){
			tabs = $(this);
      tab = tabs.children(defaults.tabClass).children();
      arrow = tabs.find(defaults.arrowClass);
      _prev = (defaults.arrowClass + '-prev').slice(1);
      _next = (defaults.arrowClass + '-next').slice(1);
      content = tabs.children(defaults.containerClass).children();
			contentCls_opened = content.attr('class') + '-opened';
			i = 0;
      current = i;

			showPage = function(i){
				content.removeClass(contentCls_opened);
				content.eq(i).addClass(contentCls_opened);
				tab.removeClass("active");
				tab.eq(i).addClass("active");
			}

			showPage(i);

			tab.each(function(index, element){
				$(element).attr("data-tab", i);
				i++;
			});

			tab.click(function(){
        current = $(this).attr("data-tab");
				showPage(parseInt(current));
			});

      arrow.click(function(){
        if ($(this).hasClass(_prev)) {
          current--;
          if (current < 0) {
            current = i-1;
          }
        } else {
          current++;
          if (current > i-1) {
            current = 0;
          }
        }
        showPage(current);
      });
		};
		return this.each(createTabs);
	};
})(jQuery);
