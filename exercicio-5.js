

const result = invertString({string : "teste"})
console.log(result)

function invertString({string}) {
    let result = ''
    for (let i = string.length; i > 0; i--){
      result = result + string[i - 1]
    }
    return result;
}
