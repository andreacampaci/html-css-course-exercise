// ES5
console.log('ES5');
function ShapeES5(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
}
ShapeES5.prototype.getXYArray = function() {
    var x = this.x;
    var y = this.y;
    return [x, y];
}
ShapeES5.prototype.getName = function() {
    var id = this.id;
    return id;
}

function CircleES5(id, x, y, radius) {
    ShapeES5.call(this, id, x, y);
    this.radius = radius;
}
CircleES5.prototype = Object.create(ShapeES5.prototype);
CircleES5.prototype.constructor = CircleES5;

CircleES5.prototype.getRadius = function() {
    var radius = this.radius;
    return ShapeES5.prototype.getName.call(this) + ' > radius: ' + radius;
}

console.log(new CircleES5('a', 0, 0, 10));
const circleES5 = new CircleES5('CircleES5__ID', 10, 10, 400);
console.log(circleES5.getXYArray());
console.log(circleES5.getName());
console.log(circleES5.getRadius());

console.log('');
console.log('');
//ES6
console.log('ES6');
class ShapeES6 {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
    getXYArray = () =>{
        return [this.x, this.y];
    }
    getName = () =>{
        return this.id;
    }
}

class CircleES6 extends ShapeES6 {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
    getRadius = () =>{
        return this.id + ' > radius: ' + this.radius;
    }
}
console.log(new CircleES6('a', 0, 0, 10));
const circleES6 = new CircleES6('CircleES6__ID', 10, 10, 10);
console.log(circleES6.getXYArray());
console.log(circleES6.getName());
console.log(circleES6.getRadius());
