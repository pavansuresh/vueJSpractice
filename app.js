new Vue({
    el: '#vue-app',
    data: {
        name: 'pavan',
        website: "https://www.google.com",
        WebsiteTag: '<a href="https://www.google.com">Search Engine</a>',
        age: 29,
        x: 30,
        y: 50,
        address: '',
        xa:'0',
        xb: '0'
    },
    methods: {
        add: function(ageValue) {
            this.age += ageValue;
        },
        substract: function(ageValue) {
            this.age -= ageValue;
        },
        updateXY: function(event){
          this.x = event.offsetX;
          this.y = event.offsetY;	
        },
        click: function(){
        	this.name =  this.name.split('').reverse().join('')
        },
    },
    computed: {

        addToA: function(){
           console.log('addToA');
           return this.xa + this.age;
        },
        subToB: function(){
            console.log('addToB');
            return this.xb + this.age;
        },
    }

});

//https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5
//add json in vue file and imort to template file or html file