const { AdaptData } = require( '@adapt-retail/banner-data' );
const mustache = require( 'mustache' );

module.exports = class AdaptPrintData {

    constructor( options = {} ) {

        this.elementSelector = options.elementSelector || '$id';

        let autoRun = typeof options.autoRun !== 'undefined' ? options.autoRun : true;
        if (autoRun) {
            this.onReady = this.init();
        }
    }

    /**
     * Async init function
     * When this function is ready all is ready on this.
     * 
     * You can access this promise on object throug property this.onReady
     *
     * @return Promise
     */
    init() {
        let htmlTemplate = this.template();

        if ( this.isInAdaptProductionEnvironment() ) {


            let elements = document.querySelectorAll( this.elementSelector );
            for (var i = 0, len = elements.length; i < len; i++) {

                // Create the template as the container of the elements
                this.template = elements[i];

                // Get and format the data
                this.data = this.format(
                    this._getLocalDataFromDOM( this.template )
                );

                this._renderTemplateToDOM( this.template, htmlTemplate, this.data );

                // Run script each .data_box
                this.script();

            }

        }
        else {
            return this._getDataFromAdaptAPI().then( ( data ) => {
                this.data = data;

                this.data = this.format( this.data );
                this._renderTemplateToDOM( document.body, htmlTemplate, this.data );

                // Run script
                this.script();

                return this.data;
            } );
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
     * Script to run. Will represent the logic of the template
     * This is run each .data_box
     *
     * @return void
     */
    script() {}

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
        return document.body.getAttribute( 'id' ) === 'project';
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
    _getLocalDataFromDOM( element, removeAttributeElement = true ) {
        var dataHolders = element.querySelectorAll( 'div[data-attribute_type]' );

        var object = {};
        for (var i = 0, len = dataHolders.length; i < len; i++) {
            var tmp = dataHolders[i];
            var attributeType = tmp.getAttribute( 'data-attribute_type' );
            var key = tmp.classList[1].replace( 'a_', '' );
            var value = tmp.innerHTML;
            if ( attributeType == 'image' || attributeType == 'imageMulti' ) {
                var imageTag = tmp.querySelector( 'img' );
                value = imageTag ? imageTag.getAttribute( 'src' ) : null;
            }
            object[ key ] = value;
        }

        // Remove attribute Element
        if ( removeAttributeElement ) {
            element.querySelector( '.attributes' ).remove();
        }

        return object;
    }

    /**
     * Get data from Adapt API
     *
     * @return async Object
     */
    _getDataFromAdaptAPI() {
        this.adaptData = new AdaptData( this.getAdaptData() );
        return this.adaptData.start().then( ( response ) => {
            return response.data[1];
        } );
    }

    /**
     * Adds full url to asset if not already set
     *
     * @return String
     */
    asset( item = '' ) {
        return this.adaptData
            ? this.adaptData.asset( item )
            : item;
    }

}
