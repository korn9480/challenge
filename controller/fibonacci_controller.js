var fiboacci = [0,1]
var sum_fiboacci = 1
module.exports = {
    calculatFibonacci : function (number){
        if (number == fiboacci.length){
            console.log("0")
            return {
                sequence: fiboacci,
                total: sum_fiboacci
            }
        }
        else if (number < fiboacci.length){
            let sequence = fiboacci.slice(0,number)
            let sum_sequence = 0
            console.log("1")
            for (let i=0;i <= sequence.length-1;i++){
                console.log("i : "+sequence[i])
                sum_sequence += sequence[i]
            }
            console.log("sum : "+sum_sequence)
            return {
                sequence: sequence,
                total: sum_sequence
            }
        }
        else {
            number = number -1
            let latest_position = fiboacci.length - 1
            console.log("2")
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
    }
}