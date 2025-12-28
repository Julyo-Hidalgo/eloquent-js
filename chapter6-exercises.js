//a vector type
class Vec{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	
	plus(Vec2){
		return (new Vec(this.x + Vec2.x, this.y + Vec2.y));
	}

	minus(Vec2){
		return (new Vec(this.x - Vec2.x, this.y - Vec2.y));
	}

	get length(){
		return (Math.sqrt(this.x*this.x + this.y*this.y));
	}
}

//groups
class Group{
	constructor(){
		this.elements = [];
	}

	add(value){
		if(this.elements.indexOf(value) == -1)
			this.elements.push(value);
	}

	delete(value){
		let index = this.elements.indexOf(value);
		if(index != -1)
			this.elements = this.elements.slice(0, index).concat(this.elements.slice(index + 1));
	}

	has(value){
		if(this.elements.indexOf(value) != -1)
			return true;

		return false;
	}

	static from(values){
		let group = new Group();

		for (let value of values)
			group.add(value);

		return group;
	}
}

//iterable groups
class GroupIterator{
	constructor(group){
		this.group = group;
		this.position = 0;
	}

	next(){
		if (this.group.elements.length == 0) return { done: true };

		if (this.position >= 0 && this.position < this.group.elements.length){
			return { done: false, value: this.group.elements[this.position++] };
		}else{
			return { done: true };
		}

	}
}

Group.prototype[Symbol.iterator] = function() {
	return new GroupIterator(this);
};
