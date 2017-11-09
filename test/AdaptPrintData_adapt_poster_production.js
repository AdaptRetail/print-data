import test from 'ava';
import AdaptDataGetDataFromAPI from './fixtures/AdaptDataGetDataFromAPI';
import AdaptData_script from './fixtures/AdaptData_run_script_after_template';

test.beforeEach( t => {

    // Reset the body tag
    document.body.innerHTML = '';

    document.body.insertAdjacentHTML( 'beforeEnd', `
        
        <div id="canvas" class="view_data" style="width: 210mm; height: 297mm;">
            <div id="element_box_56" data-element_id="56" data-element_taborder="1" data-element_width="310" data-element_height="450" class="element_box element_box_dropped" style="width: 310px; height: 450px; left: 50px; top: 80px;">
                <div class="data_content">
                    <div class="data_box template_id_15" data-productionpagedata_id="189" data-template_id="15">
                        <div class="attributes">
                            <div class="attribute a_id" data-attribute_type="textSingle" data-attribute_value="">1</div>
                            <div class="attribute a_ean" data-attribute_type="textSingle" data-attribute_value="">7150309191330</div>
                            <div class="attribute a_name" data-attribute_type="textSingle" data-attribute_value="">Pizza Grandiosa Helmax</div>
                            <div class="attribute a_descriptionshort" data-attribute_type="textMulti" data-attribute_value="">Grandiosa Original har fyll av tomatsaus, pizzakjøtt og paprika. Den er toppet med Jarlsberg®.</div>
                            <div class="attribute a_descriptionlong" data-attribute_type="textMulti" data-attribute_value="">Grandiosa Original har fyll av tomatsaus, pizzakjøtt og paprika. Den er toppet med Jarlsberg®, som gir pizzaen en helt egen smak.<br><br>Den originale Grandiosa ble lansert i 1980 og har siden dette vært Norges desidert mest spiste pizza. Den uforlignelige smaken av mild tomatsaus, pizzakjøtt, paprika og Jarlsberg® er alles smaksfavoritt. Selv om det har kommet mange nye smaksvarianter er den originale Grandiosa fortsatt den mestselgende pizzaen i det norske markedet og hvert år spises det over 9 millioner av den populære varianten.</div>
                            <div class="attribute a_vendorlogo" data-attribute_type="image" data-attribute_value="">
                                <div class="image_wrapper"><img src="https://s3-eu-west-1.amazonaws.com/adaptstorage/priceco58c12436f20b4/dataset/1/item/1/6.png"></div>
                            </div>
                            <div class="attribute a_vendorname" data-attribute_type="textSingle" data-attribute_value="">Orkla</div>
                            <div class="attribute a_image" data-attribute_type="image" data-attribute_value="">
                                <div class="image_wrapper"><img src="https://s3-eu-west-1.amazonaws.com/adaptstorage/priceco58c12436f20b4/dataset/1/item/1/8.png"></div>
                            </div>
                            <div class="attribute a_pricenow" data-attribute_type="textSingle" data-attribute_value="">37.90</div>
                            <div class="attribute a_pricebefore" data-attribute_type="textSingle" data-attribute_value="">45.00</div>
                            <div class="attribute a_unit" data-attribute_type="textSingle" data-attribute_value="">pr. stk</div>
                            <div class="attribute a_url" data-attribute_type="textSingle" data-attribute_value="">http://www.google.com</div>
                            <div class="attribute a_threefortwo" data-attribute_type="boolean" data-attribute_value="1">3 for 2: Yes</div>
                            <div class="attribute a_pricematch" data-attribute_type="boolean" data-attribute_value="0">Price Match: No</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="element_box_57" data-element_id="57" data-element_taborder="2" data-element_width="330" data-element_height="470" class="element_box element_box_dropped" style="width: 330px; height: 470px; left: 370px; top: 590px;">
                <div class="data_content">
                    <div class="data_box template_id_15" data-productionpagedata_id="190" data-template_id="15">
                        <div class="attributes">
                            <div class="attribute a_id" data-attribute_type="textSingle" data-attribute_value="">2</div>
                            <div class="attribute a_ean" data-attribute_type="textSingle" data-attribute_value="">5123461232</div>
                            <div class="attribute a_name" data-attribute_type="textSingle" data-attribute_value="">Mars Bites Chocolate Pouch 136G</div>
                            <div class="attribute a_descriptionshort" data-attribute_type="textMulti" data-attribute_value="">Milk chocolate with soft nougat (32%) and caramel centre (27%)</div>
                            <div class="attribute a_descriptionlong" data-attribute_type="textMulti" data-attribute_value="">3 Portions per pack: 3; Portion size: 45.3g. Sugar, Glucose Syrup, Cocoa Butter, Full Cream Milk Powder, Cocoa Mass, Sunflower Oil, Skimmed Milk Powder, Lactose, Whey Powder (from Milk), Fat Reduced Cocoa, Milk Fat, Barley Malt Extract, Emulsifier (Soya Lecithin) , Salt, Egg White Powder, Palm Fat, Milk Protein, Natural Vanilla Extract, Milk Chocolate contains Milk Solids 14% minimum</div>
                            <div class="attribute a_vendorlogo" data-attribute_type="image" data-attribute_value="">
                                <div class="image_wrapper"><img src="https://s3-eu-west-1.amazonaws.com/adaptstorage/priceco58c12436f20b4/dataset/1/item/2/6.png"></div>
                            </div>
                            <div class="attribute a_vendorname" data-attribute_type="textSingle" data-attribute_value="">Mars</div>
                            <div class="attribute a_image" data-attribute_type="image" data-attribute_value="">
                                <div class="image_wrapper"><img src="https://s3-eu-west-1.amazonaws.com/adaptstorage/priceco58c12436f20b4/dataset/1/item/2/8.png"></div>
                            </div>
                            <div class="attribute a_pricenow" data-attribute_type="textSingle" data-attribute_value="">11.79</div>
                            <div class="attribute a_pricebefore" data-attribute_type="textSingle" data-attribute_value="">15.50</div>
                            <div class="attribute a_unit" data-attribute_type="textSingle" data-attribute_value="">3-pack</div>
                            <div class="attribute a_url" data-attribute_type="textSingle" data-attribute_value="">http://www.google.com</div>
                            <div class="attribute a_threefortwo" data-attribute_type="boolean" data-attribute_value="0">3 for 2: No</div>
                            <div class="attribute a_pricematch" data-attribute_type="boolean" data-attribute_value="1">Price Match: Yes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ` );

});

// It can set the adaptData through constructor method

test( 'It can get local data and prefer the local data over API connection', async t => {
    let adaptData = new AdaptDataGetDataFromAPI({
        elementSelector: '.data_box',
    });
    await adaptData.onReady;


    t.is( adaptData.data.name, 'Mars Bites Chocolate Pouch 136G' );
    t.is( adaptData.data.formatedName, adaptData.data.name.split('').reverse().join('') );
} );

test( 'It can get image attribute from DOM element', async t => {
    let adaptData = new AdaptDataGetDataFromAPI({
        elementSelector: '.data_box',
    });
    await adaptData.onReady;

    t.is( adaptData.data.image, 'https://s3-eu-west-1.amazonaws.com/adaptstorage/priceco58c12436f20b4/dataset/1/item/2/8.png' );
} );

test( 'It takes the template function and adds it to element, then makes it available to class through this.template', t => {
    let adaptData = new AdaptDataGetDataFromAPI({
        elementSelector: '.data_box',
    });

    t.is( adaptData.template.outerHTML, document.querySelectorAll( '.data_box' )[1].outerHTML );
} );

test( 'It puts template content to element removes attributes element on DOM after template has run', async t => {
    let adaptData = new AdaptDataGetDataFromAPI({
        elementSelector: '.data_box',
    });
    await adaptData.onReady;

    t.is( adaptData.template.innerHTML, `
                        
                    
            <h1>Mars Bites Chocolate Pouch 136G</h1>
            <h2>G631 hcuoP etalocohC setiB sraM</h2>
            <img src="https://s3-eu-west-1.amazonaws.com/adaptstorage/priceco58c12436f20b4/dataset/1/item/2/8.png">
        ` );


} );

test( 'It runs script function after template is rendered', t => {

    let adaptData = new AdaptData_script({
        elementSelector: '.data_box',
    });

    var heading = document.querySelector( 'h1' );
    t.is( 'Taken over', heading.innerHTML );

} );

test( 'It changes all DOME elements with this class logic', t => {
    let adaptData = new AdaptDataGetDataFromAPI({
        elementSelector: '.data_box',
    });

    var boxes = document.querySelectorAll( '.data_box' );

    t.is( boxes[0].innerHTML, `
                        
                    
            <h1>Pizza Grandiosa Helmax</h1>
            <h2>xamleH asoidnarG azziP</h2>
            <img src="https://s3-eu-west-1.amazonaws.com/adaptstorage/priceco58c12436f20b4/dataset/1/item/1/8.png">
        ` );

    t.is( boxes[1].innerHTML, `
                        
                    
            <h1>Mars Bites Chocolate Pouch 136G</h1>
            <h2>G631 hcuoP etalocohC setiB sraM</h2>
            <img src="https://s3-eu-west-1.amazonaws.com/adaptstorage/priceco58c12436f20b4/dataset/1/item/2/8.png">
        ` );

} );

test( 'the asset function does nothing in production', t => {
    let adaptData = new AdaptDataGetDataFromAPI({
        elementSelector: '.data_box',
    });

    t.is( adaptData.asset( 'dont_do_it' ), 'dont_do_it' );
} );

test( 'it can prevent autorun of init function', t => {

    let adaptData = new AdaptDataGetDataFromAPI({
        autoRun: false,
    });

    t.true( typeof adaptData.onReady === 'undefined' );

} );

test( 'it can set what element we should check for default is "$id"', t => {

    let adaptData;

    adaptData = new AdaptDataGetDataFromAPI({
        autoRun: false,
    });
    t.is( adaptData.elementSelector, '$id' );

    adaptData = new AdaptDataGetDataFromAPI({
        elementSelector: 'helloworld',
        autoRun: false,
    });
    t.is( adaptData.elementSelector, 'helloworld' );

} );
