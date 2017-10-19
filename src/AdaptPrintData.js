const { AdaptData } = require( '@adapt-retail/banner-data' );

module.exports = class AdaptPrintData {

    constructor() {

        this.adaptData = new AdaptData( this.getAdaptData() );

        this.onReady = this.init();
    }

    /**
     * Async init function
     * When this function is ready all is ready on this.
     * 
     * You can access this promise on object throug property this.onReady
     *
     * @return Promise
     */
    async init() {
        this.data = await this.adaptData.start();
        this.data = this.format( this.data.data['1'] );
        return this.data;
    }

    /**
     * Format the data retrieved
     * The object returned will be used by the template
     *
     * @return Object
     */
    format( item ) {
        return item;
    }

    /**
     * Get the data to get information from Adapt Data
     *
     * @return Object
     */
    getAdaptData() {}

    /**
     * Get data from adapt when it is local
     * If none is found returns null, and we use api instead
     *
     * @return Object
     */
    getSourceData_() {
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
