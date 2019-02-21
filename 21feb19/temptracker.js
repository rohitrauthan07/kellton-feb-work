var value = [
    {
        'temp': 23
    },
    {
        'temp': 32
    },
    {
        'temp': 40
    },
    {
        'temp': 13
    },
    {
        'temp': 44
    },
    {
        'temp': 94
    },
    {
        'temp': 67
    }
];
var max = 0;
var min = 0;
var total = 0;
function insert(newtemp) {
    value.push({ 'temp': newtemp });
    console.log('new_temperature' + value[value.length - 1].temp);
}

function get_max() {
    for (var i = 0; i < value.length; i++) {
        if (value[i].temp > max) {
            max = value[i].temp;
        }
    }
        console.log('maximum is : ' + max);
}
    function get_min() {
        min = max;
        for (var i = 0; i < value.length; i++) {
            if (value[i].temp < min) {
                min = value[i].temp;
            }
        }
    console.log('minimum is : ' + min);
}
function get_mean() {
    for (var i = 0; i < value.length; i++) {
        total += value[i].temp;
    }
       var avg = (total / value.length);
    console.log('mean is : ' + avg);
}
function get_mode() {
    var output = {};

    for (var i = 0; i < value.length; i++) {

        if (output[value[i].temp] == undefined) {
            output[value[i].temp] = 1;
        } else {
            output[value[i].temp] += 1;
        }
    }

    console.log(output);

}



insert(34)
get_max()
get_mean()
get_min()
get_mode()