var arr = [
    {
        "type": 'A',
        "percentage" : 2
    },
    {
        "type": 'B',
        "percentage": 8
    },
    {
        "type": 'C',
        "percentage": 12
    },
    {
        "type": 'D',
        "percentage": 18
    },
    {
        "type": 'E',
        "percentage": 10
    },
    {
        "type": 'F',
        "percentage": 14
    },
]
function tax(type, amount) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type == type) {
            var percentage;
            if (type == 'A' || type == 'B' || type == 'C' || type == 'D' || type == 'E' || type == 'F' ) {
                var amount_deduction = (arr[i].percentage * amount) / 100;
                var deduction_after_tax = amount - amount_deduction;
                console.log('type:' + arr[i].type + '\n' + 'amount:' + amount + '\n' + 'percentage:' + arr[i].percentage + '\n' + 'amount_deduction:' + amount_deduction + '\n' + 'deduction_after_tax:' + deduction_after_tax);
            }
            else {
                percentage = 0;
                amount_deduction = 0;
                deduction_after_tax = amount;
                console.log('type:' + arr[i].type + '\n' + 'amount:' + amount + '\n' + 'percentage:' + arr[i].percentage + '\n' + 'amount_deduction:' + amount_deduction + '\n' + 'deduction_after_tax:' + deduction_after_tax);
            }
        }
    }
}
console.log(tax("E", 30000));