exports = module.exports;

var Person = function (name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function(){
    console.log('我叫' + this.name);
};
Person.prototype.home = '上海';
module.exports = Person;
return module.exports;
