// ES5
function CircleES5(id, x, y, radius) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.radius = radius;
}
CircleES5.prototype.getXYArray = function() {
    var x = this.x;
    var y = this.y;
    return [x, y];
}
CircleES5.prototype.getName = function() {
    var id = this.id;
    return id;
}

console.log(new CircleES5('a', 0, 0, 10));
const circleES5 = new CircleES5('CircleES5', 10, 10, 10);
console.log(circleES5.getXYArray());
console.log(circleES5.getName());

//ES6
class CircleES6 {
    constructor(id, x, y, radius) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getXYArray = () =>{
        return [this.x, this.y];
    }
    getName = () =>{
        return this.id;
    }
}
console.log(new CircleES6('a', 0, 0, 10));
const circleES6 = new CircleES6('CircleES6', 10, 10, 10);
console.log(circleES6.getXYArray());
console.log(circleES6.getName());
