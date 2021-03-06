import test from 'ava';
import AdaptDataGetDataFromAPI from './fixtures/AdaptDataGetDataFromAPI';

test.beforeEach( t => {
    document.body.innerHTML = '';
} )

test.serial( 'It can access adapt_data through API and format its response', async t => {

    let adaptData = new AdaptDataGetDataFromAPI;
    await adaptData.onReady;

    t.is( adaptData.data.name, 'Tortilla Chips' );
    t.is( adaptData.data.formatedName, adaptData.data.name.split('').reverse().join('') );

} );

test.serial( 'It adds template to DOM', async t => {

    let adaptData = new AdaptDataGetDataFromAPI;
    await adaptData.onReady;

    t.is( document.body.innerHTML, `
            <h1>Tortilla Chips</h1>
            <h2>spihC allitroT</h2>
            <img src="https://cdn.adaptretail.com/priceco58c12436f20b4/project/1/campaign/1/production/12/preview/59117a5906578.png">
        `);

} );

test.serial( 'it sets template as property after template render', async t => {
    let adaptData = new AdaptDataGetDataFromAPI;
    await adaptData.onReady;

    t.true( adaptData.template instanceof HTMLElement );

} );

// It can set the adaptData through constructor method
