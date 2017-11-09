import test from 'ava';
import AdaptDataGetDataFromAPI from './fixtures/AdaptDataGetDataFromAPI';
import AdaptData_script from './fixtures/AdaptData_run_script_after_template';

test.beforeEach( t => {
    // Set id of body element
    document.body.setAttribute( 'id', 'project' );
    document.body.innerHTML = '';

    document.body.insertAdjacentHTML( 'beforeEnd', `
        
        <div id="canvas" class="view_data" style="width: 210mm; height: 297mm">
            <div id="element_box_4" data-element_id="4" data-element_taborder="4" data-element_width="510" data-element_height="510" class="element_box element_box_dropped ui-droppable" style="width: 510px; height: 510px; left: 30px; top: 40px;">
                <div class="element_box_border"></div>
                <span class="element_delete">X</span> 
                <div class="element_box_data">
                    <input type="text" name="element_id|4" value="4"><input class="tabOrderInput" type="text" name="element_tabOrder|4" value="4"><input type="text" name="element_x|4" value="30"><input type="text" name="element_y|4" value="40"><input type="text" name="element_width|4" value="510"><input type="text" name="element_height|4" value="510"> 
                    <div class="position_data">Position: 30 x 40<br></div>
                    <div class="size_data">Size: 510 x 510<br></div>
                </div>
                <div class="data_content">
                    <div class="data_box template_id_6" data-productionpagedata_id="41" data-template_id="6">
                        <div class="attributes">
                            <div class="attribute a_id" data-attribute_type="textSingle" data-attribute_value="">TR3920</div>
                            <div class="attribute a_name" data-attribute_type="textSingle" data-attribute_value="">Molly stol m/striper Stoff Genova</div>
                            <div class="attribute a_image" data-attribute_type="imageMulti" data-attribute_value="">
                                <div class="image_wrapper"><img src="https://fagmobler.no/bilder/mobel/large/TR_666_a_TR3920.jpg"></div>
                            </div>
                            <div class="attribute a_image_primary" data-attribute_type="image" data-attribute_value=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="element_box_5" data-element_id="5" data-element_taborder="5" data-element_width="480" data-element_height="410" class="element_box element_box_dropped ui-droppable" style="width: 480px; height: 410px; left: 260px; top: 620px;">
                <div class="element_box_border"></div>
                <span class="element_delete">X</span>
                <div class="element_box_data">
                    <input type="text" name="element_id|5" value="5"><input class="tabOrderInput" type="text" name="element_tabOrder|5" value="5"><input type="text" name="element_x|5" value="260"><input type="text" name="element_y|5" value="620"><input type="text" name="element_width|5" value="480"><input type="text" name="element_height|5" value="410">
                    <div class="position_data">Position: 260 x 620<br></div>
                    <div class="size_data">Size: 480 x 410<br></div>
                </div>
                <div class="data_content">
                    <div class="data_box template_id_6" data-productionpagedata_id="48" data-template_id="6">
                        <div class="attributes">
                            <div class="attribute a_id" data-attribute_type="textSingle" data-attribute_value="">HGG302</div>
                            <div class="attribute a_name" data-attribute_type="textSingle" data-attribute_value="">Odel Tind regulerbar blå</div>
                            <div class="attribute a_image" data-attribute_type="imageMulti" data-attribute_value="">
                                <div class="image_wrapper"><img src="https://fagmobler.no/bilder/mobel/large/HG_128_a_HGG302.jpg"></div>
                            </div>
                            <div class="attribute a_image_primary" data-attribute_type="image" data-attribute_value=""></div>
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


    t.is( adaptData.data.name, 'Odel Tind regulerbar blå' );
    t.is( adaptData.data.formatedName, adaptData.data.name.split('').reverse().join('') );
} );

test( 'It can get image attribute from DOM element', async t => {
    let adaptData = new AdaptDataGetDataFromAPI({
        elementSelector: '.data_box',
    });
    await adaptData.onReady;

    t.is( adaptData.data.image, 'https://fagmobler.no/bilder/mobel/large/HG_128_a_HGG302.jpg' );
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
                        
                    
            <h1>Odel Tind regulerbar blå</h1>
            <h2>ålb rabreluger dniT ledO</h2>
            <img src="https://fagmobler.no/bilder/mobel/large/HG_128_a_HGG302.jpg">
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
                        
                    
            <h1>Molly stol m/striper Stoff Genova</h1>
            <h2>avoneG ffotS repirts/m lots ylloM</h2>
            <img src="https://fagmobler.no/bilder/mobel/large/TR_666_a_TR3920.jpg">
        ` );

    t.is( boxes[1].innerHTML, `
                        
                    
            <h1>Odel Tind regulerbar blå</h1>
            <h2>ålb rabreluger dniT ledO</h2>
            <img src="https://fagmobler.no/bilder/mobel/large/HG_128_a_HGG302.jpg">
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
