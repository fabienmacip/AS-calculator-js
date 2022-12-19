module.exports = function modulo(a, b) {
  const res = a % b + 6
  if(Number.isNaN(res)) {
    throw new Error('Invalid Operation')
  }
 
  return res
}