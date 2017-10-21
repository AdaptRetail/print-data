import test from 'ava';
import AdaptDataGetDataFromAPI from './fixtures/AdaptDataGetDataFromAPI';
import AdaptData_script from './fixtures/AdaptData_run_script_after_template';

test.beforeEach( t => {
    // Set id of body element
    document.body.setAttribute( 'id', 'adapt' );
    document.body.innerHTML = '';

    document.body.insertAdjacentHTML( 'beforeEnd', `
        <div class="data_box template_id_3" data-productionpagedata_id="24" data-template_id="3">
            <div class="attributes">
                <div class="attribute a_id" data-attribute_type="textSingle" data-attribute_value="">XD-1429</div>
                <div class="attribute a_name" data-attribute_type="textSingle" data-attribute_value="">Sykkelbukse</div>
                <div class="attribute a_image" data-attribute_type="image" data-attribute_value="">
                    <div class="image_wrapper">
                        <img src="http://image.promoworld.ca/migration-api-hidden-new/web/images/1066/xd-1429-sykkelbukse.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div class="data_box template_id_3" data-productionpagedata_id="24" data-template_id="3">
            <div class="attributes">
                <div class="attribute a_id" data-attribute_type="textSingle" data-attribute_value="">XD-1428</div>
                <div class="attribute a_name" data-attribute_type="textSingle" data-attribute_value="">Sykkelveske</div>
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

test( 'It takes the template function and adds it to element, then makes it available to class through this.template', t => {
    let adaptData = new AdaptDataGetDataFromAPI;

    t.is( adaptData.template.outerHTML, document.querySelectorAll( '.data_box' )[1].outerHTML );
} );

test( 'It puts template content to element removes attributes element on DOM after template has run', async t => {
    let adaptData = new AdaptDataGetDataFromAPI;
    await adaptData.onReady;

    t.is( adaptData.template.innerHTML, `
            
        
            <h1>Sykkelveske</h1>
            <h2>eksevlekkyS</h2>
            <img src="http://image.promoworld.ca/migration-api-hidden-new/web/images/1066/xd-1428-blue.jpg">
        ` );
} );

test( 'It runs script function after template is rendered', t => {

    let adaptData = new AdaptData_script;

    var heading = document.querySelector( 'h1' );
    t.is( 'Taken over', heading.innerHTML );

} );

test( 'It changes all DOME elements with this class logic', t => {
    let adaptData = new AdaptDataGetDataFromAPI;

    var boxes = document.querySelectorAll( '.data_box' );

    t.is( boxes[0].innerHTML, `
            
        
            <h1>Sykkelbukse</h1>
            <h2>eskublekkyS</h2>
            <img src="http://image.promoworld.ca/migration-api-hidden-new/web/images/1066/xd-1429-sykkelbukse.jpg">
        ` );

    t.is( boxes[1].innerHTML, `
            
        
            <h1>Sykkelveske</h1>
            <h2>eksevlekkyS</h2>
            <img src="http://image.promoworld.ca/migration-api-hidden-new/web/images/1066/xd-1428-blue.jpg">
        ` );

} );
