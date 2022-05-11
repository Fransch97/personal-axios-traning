console.log("hi")

const app = new Vue({
    el: "#app",

    data: {
        
        beers:[]

    },

    methods: {

        
    },

    mounted() {
        axios.get('https://api.sampleapis.com/beers/ale')
            .then((wines)=>{
                console.log(wines.data)
                this.beers = wines.data
                console.log(this.beers)
            })
            .catch((error)=>{
                console.log("errore",error)
            })
    },
})