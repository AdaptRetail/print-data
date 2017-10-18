const AdaptPrintData = require( '../../src/AdaptPrintData' );

module.exports = class AdaptDataGetDataFromAPI extends AdaptPrintData {

    getAdaptData() {
        return {
            account: 'priceco58c12436f20b4',
            project: 1,
            campaign: 1,
            production: 12,
            preview: true,
        }
    }

    format( item ) {
        return {
            name: item.name,
            formatedName: item.name.split('').reverse().join(''),
        }
    }

}
