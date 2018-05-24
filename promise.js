let i = 1;

//定义两个promise函数
function add (num) {
	return new Promise ((resolve, reject) => {
		console.log('waiting...')
		setTimeout(() => {
			resolve(num+2) ;
		}, 2000)
	})
}

function reduce (num) {
	return new Promise ((resolve, reject) => {
		console.log('waiting for delete ...')
		setTimeout(() => {
			reject(404) ;
		}, 1000)
	})
}
/*=============== 使用then回调写法 start ===================*/
let res = add(i)
			.then(result => {
				console.log('result: %s',result)
			})
			.then(reduce)
			.catch(err => {
				console.log('err: %s',err)
			})
/*=============== 使用then回调写法 end ===================*/

/*=============== 使用async await写法 start ===================*/
// let getResponse =async function () => { //函数表达式
// let getResponse =async () => { //函数表达式 箭头函数写法
async function getResponse () { //函数声明
	let res = await add(i);
	console.log(res)
	let err1 = '';
	//考虑到可能会返回拒绝值，用try..catch..处理返回值
	try{
		err1 = await reduce();
	}catch (err){
		err1 = err;
	}

	console.log(err1)
}

getResponse();

/*=============== 使用async await写法 end ===================*/