var fiboacci = [0,1]
var sum_fiboacci = 1

function cut_fiboacci(number){
    let sequence = fiboacci.slice(0,number)
    let sum_sequence = 0
    for (let i=0;i <= sequence.length-1;i++){
        sum_sequence += sequence[i]
    }
    return {
        sequence: sequence,
        total: sum_sequence
    }
}
function add_fiboacci(number){
    number = number -1
    let latest_position = fiboacci.length - 1
    let row =number - fiboacci.length
    for(let i = 0;i <= row;i++){
        let p = fiboacci[latest_position-1] + fiboacci[latest_position]
        fiboacci.push(p)
        sum_fiboacci += p
        latest_position += 1
    }

    return {
        sequence: fiboacci,
        total: sum_fiboacci
    }
}
module.exports = {
    calculatFibonacci : function (number){
        if (number == fiboacci.length){
            return {
                sequence: fiboacci,
                total: sum_fiboacci
            }
        }
        else if (number < fiboacci.length){
            return cut_fiboacci(number)
        }
        else {
            return add_fiboacci(number)
        }
    }
}