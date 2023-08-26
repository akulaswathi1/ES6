class test{
    constructor(a,b){
        this.a=a;
        this.b=b;

    }
    addition(){
        console.log(this.a+this.b)
    }
}
let ref= new test(10,20);
ref.addition()
