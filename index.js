// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => driver.revenue > revenue)
    return result
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const array = driversWithRevenueOver(drivers, revenue)
    let newArray = array.map(driver => driver.name)
    return newArray
}

function exactMatch(driversArr, attribute) {
    let matches = []
    driversArr.filter(function(driver){
        for (const key in attribute){
            if (driver[key] === attribute[key]) {
                matches.push(driver)
            }
        }
    })
    return matches
}

function exactMatchToList(drivers, attribute) {
    const array = exactMatch(drivers, attribute)
    let newArray = array.map(driver => driver.name)
    return newArray
}