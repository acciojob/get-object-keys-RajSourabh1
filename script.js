//your JS code here. If required.
let student = {
	name:'a'
}
student.prototype.getKeys=function(){
	let ans = [];
	for(let e in student){
		ans.push(e);
	}
 return ans;
}