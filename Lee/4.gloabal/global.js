function(module,exports,require,_dirname,_filename,){
	var name = "asdf";
	exports.name = name;
	console.log(this);
}

console.log("a:吃饭");
process.nexttick(function(){
	console.log("a:扫地");
})
console.log("c:吃饭");
console.log("d:吃饭");

setImmediate(function(){
	console.log("aaa");
})