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
     * @return object
     */
    format( item ) {
        return item;
    }

    /**
     * Get the data to get information from Adapt Data
     *
     * @return object
     */
    getAdaptData() {}

}
