# Adapt Print Data
> 🚧🚧 This project is currently in development, breaking changes may occur. 🚧🚧

## Template class

```js
const AdaptPrintData from '@adapt-retail/adapt-print-data';

export default class PrintTemplate extends AdaptPrintData {

    /**
     * This is the template of your production
     * We will inject your data at the production
     * and return this elements 'container' as this.template
     *
     * We uses mustache to add variables to template
     * https://github.com/janl/mustache.js
     *
     * @return string
     */
    template() {
        return `
            <h1>{{ name }}</h1>
            <img src="{{ image }}">
            <p class="price">{{ price }}</p>
        `;
    }

    /**
     * Get the data to get information from Adapt Data
     * We will build the AdaptData for you.
     *
     * @return Object
     */
    getAdaptData() {
        return {
            account: 'priceco58c12436f20b4',
            project: 1,
            campaign: 1,
            production: 12,
        }
    }

    /**
     * You can use this function to format the data from Adapt.
     * This data will be accessable in the template with mustache syntax
     *
     * @return Object
     */
    format( item ) {
        return {
            name: item.strangeName,
            image: this.asset( ítem.image ),
            price: parseFloat( item.price ).toFixed( 2 ),
        }
    }

    /**
     * If you need to run some javascript logic you can run it here.
     * It will be executed after template is rendered to screen.
     *
     * You can use this.template to access the template in the template function
     *
     * @return void
     */
    script() {
        // Add your logic
        // this.template represents each element container;
    }

}
```
