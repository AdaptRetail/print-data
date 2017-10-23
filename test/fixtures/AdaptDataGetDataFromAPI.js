const AdaptPrintData = require( '../../src/AdaptPrintData' );

module.exports = class AdaptDataGetDataFromAPI extends AdaptPrintData {

    /**
     * Template to be rendered to DOM
     *
     * @return String
     */
    template() {
        return `
            <h1>{{ name }}</h1>
            <h2>{{ formatedName }}</h2>
            <img src="{{ image }}">
        `;
    }

    /**
     * Get Adapt data
     * Here we overwite the returns to use the data we set.
     * This is to prevent error in test if something changes on adapt server.
     *
     * See https://github.com/AdaptRetail/banner-data
     * for more information
     *
     * @return Object
     */
    getAdaptData() {
        return {
            account: 'priceco58c12436f20b4',
            project: 1,
            campaign: 1,
            production: 12,
            preview: true,

            // Local data, this is what we use for this test
            data: {
                details: {
                    ga_url: '?utm_campaign=April+2017&utm_source=Banners+-+Spor+1&utm_medium=display',
                    project_id: '1',
                    campaign_id: '1',
                    production_id: '12'
                },
                data: {
                    '1': {
                        productionPageData_id: 46,
                        item_id: '4',
                        id: '4',
                        ean: '1403614036',
                        name: 'Tortilla Chips',
                        descriptionshort: 'Crispy ecological lettesaltete corn chips. Perfect for a tasty taco night.',
                        vendorlogo: '59117a58c2842.png',
                        vendorname: 'Santa Maria',
                        image: '59117a5906578.png',
                        pricenow: '49.30',
                        pricebefore: '52.20',
                        unit: 'pr. pack',
                        url: 'http://www.google.com',
                        threefortwo: '1',
                        pricematch: '0',
                        adaptShortname: '1403614036 - Tortilla Chips - Santa Maria' },
                    '2': {
                        productionPageData_id: 47,
                        item_id: '6',
                        id: '6',
                        ean: '9853456234',
                        name: 'Matured Sliced 150G Cheese',
                        descriptionshort: '8 Sliced Mature Cheddar. Up and down the country, sitting splendidly in a sandwich.',
                        vendorlogo: '59117a59cfe57.png',
                        vendorname: 'Cathedral City',
                        image: '59117a5a4312f.png',
                        pricenow: '12.66',
                        pricebefore: '14.89',
                        unit: 'pr. pack',
                        url: 'http://www.google.com',
                        threefortwo: '0',
                        pricematch: '0',
                        adaptShortname: '9853456234 - Matured Sliced 150G Cheese - Cathedral City'
                    },
                    '3': {
                        productionPageData_id: 53,
                        item_id: '1',
                        id: '1',
                        ean: '7150309191330',
                        name: 'Pizza Grandiosa Helmax',
                        descriptionshort: 'Grandiosa Original har fyll av tomatsaus, pizzakjøtt og paprika. Den er toppet med Jarlsberg®.',
                        vendorlogo: '59117a5aaed4f.png',
                        vendorname: 'Orkla',
                        image: '59117a5ae0cf2.png',
                        pricenow: '37.90',
                        pricebefore: '45.00',
                        unit: 'pr. stk',
                        url: 'http://www.google.com',
                        threefortwo: '1',
                        pricematch: '0',
                        adaptShortname: '7150309191330 - Pizza Grandiosa Helmax - Orkla'
                    }
                }
            }
        }
    }

    /**
     * Formats each object 
     * In this case we are only setting an item with name
     * And with a name that is reversed
     *
     * @return Object
     */
    format( item ) {
        return {
            name: item.name,
            formatedName: item.name.split('').reverse().join(''),
            image: this.asset( item.image ),
        }
    }

}
