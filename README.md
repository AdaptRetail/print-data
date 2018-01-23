# Adapt Print Data
> Create Adapt print templates locally and push directly to Adapt without thinking of anything

## Install

Install the package through npm

```bash
npm install @adapt-retail/print-data
```

## Usage
> This package is used in [Adapt print template](https://github.com/AdaptRetail/print-template). Go check it out!

### Template class

```js
// Get the base class
const AdaptPrintData from '@adapt-retail/print-data';

// Create your template
class Template extends AdaptPrintData {

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

// When ready just create your new Template class to execute logic
new Template;
```

## Development
```bash
# 1. Clone repository

# 2. Install dependencies
npm install

# 3. Run tests
npm run test

# 3.1. Run test every time you save a file
npm run tdd

# 4. Build files
npm run build

# 5. Select version
npm version major|minor|patch

# 6. Publish to npm
npm publish

# Store version in git
git push && git push --tags
```
