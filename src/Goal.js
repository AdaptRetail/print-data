export default class PrintTemplate {

    constructor() {

        super({
            account: 'fagmobl59dc76d368e09',
            project: 1,
            campaign: 3,
            production: 2,
            preview: true,
        });

    }

    template() {
        return `
            <h1>{{ name }}</h1>
            <img src="{{ image }}">
            <p class="price">{{ price }}</p>
        `;
    }

    format( item ) {
        return {
            name: item.strangeName,
            image: this.asset( ítem.image ),
            price: parseFloat( item.price ).toFixed( 2 ),
        }
    }

    script() {
        this.template.querySelector
    }

}
