import AdaptData from '@adapt-retail/adapt-api';
import mustache from 'mustache';
import Swipe from 'swipejs';

var insertHtml = function(element, html) {
    element.insertAdjacentHTML( 'beforeEnd', html );
};

var isProduction = false;
var identifier = isProduction ? '$id ' : '.data_box ';

class AdaptOutlineData {

    start( success ) {

        var boxes = document.querySelectorAll( identifier );
        for (var i = 0, len = boxes.length; i < len; i++) {
            var box = boxes[i];
            var data = this.getData( box );

            success( data, box );
        }

    }

    getData( el ) {

        el = el ? el : document;
        var dataHolders = el.querySelectorAll( 'div[data-attribute_type]' );

        var object = {};
        for (var i = 0, len = dataHolders.length; i < len; i++) {
            var tmp = dataHolders[i];
            var key = tmp.classList[1].replace( 'a_', '' );
            var value = tmp.innerHTML;
            if (tmp.getAttribute( 'data-attribute_type' ) == 'image') {
                value = tmp.querySelector( 'img' ).getAttribute( 'src' );
            }
            object[ key ] = value;
        }
        return object;
    }

}


var data = new AdaptOutlineData();

data.start( function( data, element ) {
    // Prepare views
    var productTemplate = require( './views/product.template.html' );
    var content = mustache.render( productTemplate, data );

    // var box = document.querySelector( identifier + '.attributes' );
    var attributes = element.querySelector( '.attributes' );
    attributes.innerHTML = content;
    // element.innerHTML = content;
    // console.log(element);
} )
