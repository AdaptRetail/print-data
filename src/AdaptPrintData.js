const { AdaptData } = require( '@adapt-retail/banner-data' );
const mustache = require( 'mustache' );

module.exports = class AdaptPrintData {

    constructor( options = {} ) {
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
        let htmlTemplate = this.template();

        if ( this.isInAdaptProductionEnvironment() ) {


            let elements = document.querySelectorAll( '.data_box' );
            for (var i = 0, len = elements.length; i < len; i++) {

                // Create the template as the container of the elements
                this.template = elements[i];

                // Get and format the data
                this.data = this.format(
                    this._getLocalDataFromDOM( this.template )
                );

                this._renderTemplateToDOM( this.template, htmlTemplate, this.data );

            }

        }
        else {
            await this._getDataFromAdaptAPI();
            this.data = this.format( this.data );
            this._renderTemplateToDOM();
        }

        return this.data;

    }

    /**
     * Template to be rendered to the DOM
     *
     * @return String
     */
    template() {}

    /**
     * Render template to DOM
     *
     * @return void
     */
    _renderTemplateToDOM( element, template = '', data = {} ) {
        element.insertAdjacentHTML( 'beforeEnd', mustache.render(
            template, data
        ) );
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
     * @param <DOMElement> element
     *
     * @return Object
     */
    _getLocalDataFromDOM( element ) {
        var dataHolders = element.querySelectorAll( 'div[data-attribute_type]' );

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
