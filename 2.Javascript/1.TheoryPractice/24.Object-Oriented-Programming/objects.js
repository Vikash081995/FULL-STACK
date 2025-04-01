let triangle ={
    a:3,
    b:4,
    getArea:function(){
        return (this.a*this.b)/2;
    },
    getHypotenues:function(){
        return Math.sqrt(this.a*this.a+this.b*this.b);
    }
}