class BaseObject{
    constructor(public width:number,public length:number){

    }
}
class Rectangle extends BaseObject{
    constructor(width:number,length:number){
        super(width,length);
    }
    calcSize (){
        return this.width * this.length;
    }
}

const rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());