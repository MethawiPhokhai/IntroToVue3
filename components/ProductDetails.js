app.component('product-details', {
    props: {
        detail: {
            type: Array,
            required: true
        }
    },
    template: 
     /*html*/
    `<div class="product-details">
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    </div>`,
    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester'],
        }
    },
})