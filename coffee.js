console.log("coffee")
// https://api.sampleapis.com/coffee/hot

const app = new Vue({
    el: "#app",
    data:{
        hotCoffees:[],
        icedCoffees:[],
        hot: false,
        cold: false
    },

    methods: {
        
    },

    mounted() {
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then((hotcoffes)=>{
            this.hotCoffees = hotcoffes.data
            console.log(this.hotCoffees)
        })
        axios.get('https://api.sampleapis.com/coffee/iced')
        .then((icedcoffes)=>{
            this.icedCoffees = icedcoffes.data
            console.log(this.icedCoffees)
        })
    },
})