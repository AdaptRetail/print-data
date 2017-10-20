import test from 'ava';
import AdaptDataGetDataFromAPI from './fixtures/AdaptDataGetDataFromAPI';

test( 'It can access adapt_data through API and format its response', async t => {

    let adaptData = new AdaptDataGetDataFromAPI;
    await adaptData.onReady;

    t.is( adaptData.data.name, 'Tortilla Chips' );
    t.is( adaptData.data.formatedName, adaptData.data.name.split('').reverse().join('') );

} );

// It can set the adaptData through constructor method
