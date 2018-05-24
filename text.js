
'use strict';

function get_primes(arr) {
	let str = [];

    arr.filter(item => {
		if(item>1){//素数定义 大于1的正整数，只能整除1和自己
			let count=0;//计算可以整除的个数
			for(let i=2;i<item;i++){//从2开始
				if(item%i==0){
					count++
				}
			}
			
			if(count==0){
				str.push(item)
			}
		}
	});

    console.log(str)
	return str

}
// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}