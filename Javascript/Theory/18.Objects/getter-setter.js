let p={
    x:10,
    y:15,

    //getter 
    get r(){
        return Math.sqrt(this.x*this.y )
    },

    //setter
    set r(newVal){
        let oldVal=Math.sqrt(this.x*this.y)
        let ratio=newVal/oldVal
        this.x*=ratio
        this.y*=ratio
    }
}
console.log(p.r)  //getter call
p.r=20          //setter call
console.log(p.x)  //getter call