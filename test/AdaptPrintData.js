import test from 'ava';
import AdaptDataGetDataFromAPI from './fixtures/AdaptDataGetDataFromAPI';

const createTestingEnvironment = () => {
    console.log(window);
};

test( 'It can access adapt_data through API and format its response', async t => {

    let adaptData = new AdaptDataGetDataFromAPI;
    await adaptData.onReady;

    t.is( adaptData.data.name, 'Tortilla Chips' );
    t.is( adaptData.data.formatedName, adaptData.data.name.split('').reverse().join('') );

} );

// It can set the adaptData through constructor method
// It cleans up DOM after template has run
// it takes the template element and adds it to element, then makes it available to class through this.template
// It runs script after template is rendered
