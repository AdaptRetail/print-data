# Adapt Print Data
> This project is currently in development, and does not work. 

## Example class

This is what you can expect from the API when it is done

```js
export default class PrintTemplate {

    /**
     * Pass in data from AdaptData to get data from api,
     * if none data is found
     *
     * @return void
     */
    constructor() {

        super({
            account: 'fagmobl59dc76d368e09',
            project: 1,
            campaign: 3,
            production: 2,
            preview: true,
        });

    }

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
        this.template.querySelector
    }

}
```
