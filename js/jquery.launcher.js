(function($){
    $.fn.launcher = function(options) {
        return this.each(function() {
            var $this = $(this);
            /*options = $.extend({
            'maxLength': 100,
			'align': 'right',
			'valign': 'bottom',
			'show': 'auto',
			'elCount': 'auto'
		}, options);*/
            //alert('ddd');
            var launcherElements = ' ' +
            '<div id="l-launcher-wrapper">' +
            '   <div id="l-launcher">' +
            '       <input style="width:100%; height:100%;" type="text" id="l-launcher-text"/>' +
            '   <div>' +
            '</div>';
        
            $('body').append(launcherElements);
            $launcherWrapper = $('#l-launcher-wrapper');
            $launcher = $('#l-launcher');
            $launcherTextField = $('#l-launcher-text');
        
            $launcherTextField.focus();
            var anchorTags;
            $anchors = $('a');
        
            $foo = new Array($anchors.length);
        
            $anchors.each(function(index, value) {
                $foo[index] = {
                    label: $(value).text(), 
                    href: $(value).attr('href')
                    };
            });
        
            
           
	$(function() {
		$launcherTextField.autocomplete({
			minLength: 0,
			source: $foo,
			select: function( event, ui ) {
				location.href=ui.item.href;
				return false;
			}
		})
		.data( "autocomplete" )._renderItem = function( ul, item ) {
			return $( "<li></li>" )
				.data( "item.autocomplete", item )
				.append( "<a>" + item.label + "</a>" )
				.appendTo( ul );
		};
	});
	
                      
        
            function blu() {
                alert('blub');  
            };
				
        });
    };

   

	
})(jQuery);
  
  
  
    