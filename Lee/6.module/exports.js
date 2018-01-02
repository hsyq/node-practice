/*module.exports.name = 'guanyu';
exports.age = 25;*/
// 只是使用.来添加属性和方法，module.exports和exports混用是完全可以的，
// 这种情况下，感觉exports就是给懒人用的…毕竟能少写几个7个字符呢！
let person = {
    name:'关羽',
    age:27,
    wuqi:'青龙偃月刀'
}
 module.exports.guanyu = person;
