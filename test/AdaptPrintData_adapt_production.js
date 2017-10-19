import test from 'ava';
import AdaptDataGetDataFromAPI from './fixtures/AdaptDataGetDataFromAPI';

test.afterEach.always( t => {
    document.body.removeAttribute( 'id' );
    document.body.innerHTML = '';
});
test.before( t => {
    // Set id of body element
    document.body.setAttribute( 'id', 'adapt' );

    document.body.insertAdjacentHTML( 'beforeEnd', `
        <div class="data_box template_id_3" data-productionpagedata_id="24" data-template_id="3">
            <div class="attributes">
                <div class="attribute a_id" data-attribute_type="textSingle" data-attribute_value="">XD-1428</div>
                <div class="attribute a_name" data-attribute_type="textSingle" data-attribute_value="">Sykkelveske</div>
                <div class="attribute a_link" data-attribute_type="textSingle" data-attribute_value="">http://www.gosh.no/no_no/product/sykkelveske-1</div>
                <div class="attribute a_description" data-attribute_type="textMulti" data-attribute_value="">Sykkelveske til å feste på rammen.&nbsp; 600D polyester.&nbsp; Str. 27 x 16 x 5 cm.&nbsp; 1 stort rom med glidelås.&nbsp; 4 farger.</div>
                <div class="attribute a_image" data-attribute_type="image" data-attribute_value="">
                    <div class="image_wrapper">
                        <img src="http://image.promoworld.ca/migration-api-hidden-new/web/images/1066/xd-1428-blue.jpg">
                    </div>
                </div>
            </div>
        </div>
    ` );

});

// It can set the adaptData through constructor method

test( 'It can get local data and prefer the local data over API connection', async t => {
    let adaptData = new AdaptDataGetDataFromAPI;
    await adaptData.onReady;


    t.is( adaptData.data.name, 'Sykkelveske' );
    t.is( adaptData.data.formatedName, adaptData.data.name.split('').reverse().join('') );
} );

test( 'It can get image attribute from DOM element', async t => {
    let adaptData = new AdaptDataGetDataFromAPI;
    await adaptData.onReady;

    t.is( adaptData.data.image, 'http://image.promoworld.ca/migration-api-hidden-new/web/images/1066/xd-1428-blue.jpg' );
} );

// It removes attributes element on DOM after template has run
// it takes the template element and adds it to element, then makes it available to class through this.template
// It runs script after template is rendered
// It changes all DOME elements with this class logic
