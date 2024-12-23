const removeFromArray = function(arr, ...value) {
const newArray = []

    arr.forEach((item) => {
        if(!value.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
