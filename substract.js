module.exports = function sum(a, b) {
  if(b > a){
    throw new Error('Negative result not allowed')
  }
  return a - b
}