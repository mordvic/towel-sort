// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (typeof matrix === 'undefined') {
        return [];
    }

    return matrix.reduce((init, item, index) => init.concat(!(index % 2) ? item : item.reverse()), []);

}
