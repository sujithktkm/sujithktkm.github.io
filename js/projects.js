/**
 * Created by sujithkatakam on 3/15/16.
 */

function pagination() {
    var monkeyList = new List('test-list', {
        valueNames: ['name'],
        page: 4,
        innerWindow: 4,
        plugins: [ ListPagination({}) ]
    });
}

window.onload = function() {
    pagination();
    getMonthsCount('experience', new Date(2014, 10, 15), new Date(2016, 03, 15));
};
