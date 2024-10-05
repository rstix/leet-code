/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 === 1) return false
    // console.log(s.split(''))

    const matching = {
      ']': '[',
      ')': '(',
      '}': '{',
    }

    const res = s.split('').reduce((acc,el,i)=>{
      if(i === 0){
        acc.push(el)
      }else if(acc.length>0 && matching[el] === acc[acc.length-1]){
        acc.pop()
      }else(
        acc.push(el)
      )
      return acc
    },[])
    if(res.length) return false
    return true
 };

const s = '(){[]]}';


console.log(isValid(s));