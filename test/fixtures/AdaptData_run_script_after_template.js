const AdaptPrintData = require( '../../src/AdaptPrintData' );

module.exports = class AdaptData_run_script_after_template extends AdaptPrintData {

    /**
     * Template to be rendered to DOM
     *
     * @return String
     */
    template() {
        return `
            <h1>{{ name }}</h1>
        `;
    }

    /**
     * Run script after
     *
     * @return void
     */
    script() {

        let headerElement = this.template.querySelector( 'h1' );
        headerElement.innerHTML = 'Taken over';

    }

}
