// 关于策略模式
// for example 根据工资和等级来发年终奖
var calculateBonus = function (level, salary) {
  if (level === 'S') {
    return salary * 4
  }
  if (level === 'A') {
    return salary * 3
  }
  if (level === 'B') {
    return salary * 2
  }
}

var xiaomingAward = calculateBonus('S', 2000)// 两个参数：第一个参数是等级，第二个参数是工资
var xiaofangAward = calculateBonus('A', 10000)
console.error(xiaomingAward)
console.error(xiaofangAward)

// 修改成策略模式
function Bonus () {
  this.salary = null
  this.sategory = null
}
Bonus.prototype.setSalary = function (salary) {
  this.salary = salary
}
Bonus.prototype.setSategory = function (sategory) {
  this.sategory = sategory
}
Bonus.prototype.getBonus = function () {
  return this.sategory.calcate(this.salary)
}
var PerformanceS = function () {}
PerformanceS.prototype.calcate = function (salary) {
  return salary * 4
}
var PerformanceA = function () {}
PerformanceA.prototype.calcate = function (salary) {
  return salary * 3
}
var PerformanceB = function () {}
PerformanceB.prototype.calcate = function (salary) {
  return salary * 2
}
var bonus = new Bonus()
bonus.setSalary(2000)
bonus.setSategory(new PerformanceA())
let xiaohongAward = bonus.getBonus()
console.error(xiaohongAward)
// 对上面的优化

// var registerForm = document.getElementById('')
