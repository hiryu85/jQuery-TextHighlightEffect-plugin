/**
 * jQuery effect: TextHighlight
 *
 * @version: 2.0
 * @author:  Mirko (http://blog.iamnothere.org)
 *
 * Run the effect:
 *   $('#h_1').textHighlight()
 *
 * Setting highlight color:
 *   1. Add data-highlight="color" attribute  
 *      with color (<span class="h" data-* highlight="red">.....)
 *    2. Add a rules to your css file:
 *       (#h_1 .hbg { background-color: red; }
 */
jQuery.fn.textHighlight = function() {
    this.each(function(i, highlight) {
        var c = null

        var $h = jQuery(highlight)
        var w = parseInt($h.outerWidth())
        var h = parseInt($h.innerHeight())
        
        $h.addClass('h')
        $h.html('<span class="ht">'+$h.text()+'</span> <div class="hbg"></div>')
        
        // Get highlight backgroundcolor
        if ($h.attr('data-highlight')) c = $h.attr('data-highlight')
        else if (jQuery('.hbg', $h).css('background-color') != "rgba(0, 0, 0, 0)") {
            // from CSS property (#my-el.hbg { background-color:red})
            c = jQuery('.hbg', $h).css('background-color')
            //console.log('CSS property: ' + c)
        }
        else c = 'yellow'

        //console.log('Highilight color is: ' + c)
        jQuery('.hbg', $h).css({
            'background-color': c,
        }).animate({
            width: w + 'px',
            height: h + 'px',
        }, 800, function() {})
    })
}
