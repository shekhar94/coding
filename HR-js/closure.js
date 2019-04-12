function container() {
    var data = "shekhar"; // available for functions inside container only

    function getData() {
        return data;
    }

    return getData;
}
var getData = container();
console.log(getData());