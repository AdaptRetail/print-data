import test from 'ava';

test( 'it', t => {
    t.true( true )
} );

// identifier for object is .data_box on local, but $id when you run production script
// it takes the template element and adds it to element, then makes it available to class through this.template
// It runs script after template is rendered
