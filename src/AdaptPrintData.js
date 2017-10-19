const { AdaptData } = require( '@adapt-retail/banner-data' );

module.exports = class AdaptPrintData {

    constructor( options = {} ) {

        this.element = options.element || document;

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

        // Get data based on develpment or production environment
        this.data = this.isInAdaptProductionEnvironment()
            ? this._getLocalDataFromDOM()
            : await this._getDataFromAdaptAPI();


        // Format data
        this.data = this.format( this.data );
        return this.data;
    }

    /**
     * Format the each object in the data retrieved
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
     * Check if we are in adapt production invironment
     *
     * @return Boolean
     */
    isInAdaptProductionEnvironment() {
        let bodyHasAdaptId = document.body.getAttribute( 'id' ) === 'adapt';
        return bodyHasAdaptId;
    }

    /**
     * Get data from adapt data DOM.
     * This is how we feed data to snippets
     * when the snippet it published to the Adapt platform
     *
     * @return Object
     */
    _getLocalDataFromDOM() {
        var dataHolders = this.element.querySelectorAll( 'div[data-attribute_type]' );

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

    /**
     * Get data from Adapt API
     *
     * @return async Object
     */
    async _getDataFromAdaptAPI() {
        this.adaptData = new AdaptData( this.getAdaptData() );
        let data = await this.adaptData.start();
        return data.data[1];
    }


}
