// Code your solution here:

function driversWithRevenueOver(array, revenue) {
    return array.filter(function (num) {return num.revenue > revenue; }); 
}

function driverNamesWithRevenueOver(array, revenue) {
    const store = array.filter(function (num) {return num.revenue > revenue; });
    return store.map(function(eng) { return eng.name; });
}

function exactMatch(array, attribute) {

    return array.filter(function (num) {
        if (typeof attribute.name !== 'undefined') 
            {return num.name === attribute.name ; }
        else if (typeof attribute.revenue !== 'undefined')
            {return num.revenue === attribute.revenue ; }
        }
    )

}
function exactMatchToList(array, attribute) {
    
    const store =  array.filter(function (num) {
        if (typeof attribute.name !== 'undefined') 
            {return num.name === attribute.name ; }
        else if (typeof attribute.revenue !== 'undefined')
            {return num.revenue === attribute.revenue ; }
        }
    )

    return store.map(function(eng) { return eng.name; });

}

