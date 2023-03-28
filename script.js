const { createApp } = Vue
createApp({
    data(){
        return {
            listItem: [],
            message: 'Welcome to Vue Shopping Chart-App'
        }
    },
    methods: {
        addNewItem(){
            this.listItem.push({
                name: '',
                quantity: 1,
                price: 0,
                total: 0
            })
        },
        handleSubmit: function(e, index){
            e.preventDefault()
            let item = this.listItem[index]
            this.listItem = this.listItem.filter(it => it != item)
        },
        handleChange: function(item){
            if(item.quantity < 0 ){
                alert('Jumlah Quantity tidak boleh kurang dari 0')
                item.quantity = 0
            } else {
                item.total = item.price * item.quantity
            }
        }
    },
    computed: {
        totalPrice : function(){
            let total = this.listItem.reduce((a,b) => a + b.total, 0)
            return this.listItem.length ? total : 0
        }
    }
}).mount('#app')