class exchange {
	constructor (props) {
		console.log(props)
		this.count = props.count || 1;
	}
	toUp () {
		this.count++;
		return this.count;
	}
}

let x1 = new exchange('hello');
let x2 = new exchange({id: 1});

console.log(x1 == x2) // false
console.log(x1.count == x2.count) // true
console.log(x1.toUp == x2.toUp) // true

let fn1 = new exchange([6,5,4]);
let fn2 = new exchange({count: 65});
x1 = fn1.toUp();
x2 = fn1.toUp();
let x3 = fn2.toUp();
console.log(x1, x2, x3) // 2,3,2


/*========================= 华丽的分割线 ======================*/
!(() => {
	let [x,y,z] = [1,2,3]
	console.log(x,y,z)
	let {a:d,b,c} = {a:1,b:2,c:3} //完整 {a: d, b: b,c: c} = {a:1,b:2,c:3} 实际赋值是b,c,d 
	console.log(b,c,d)
	// console.log(a) //ReferenceError: a is not defined
})()

