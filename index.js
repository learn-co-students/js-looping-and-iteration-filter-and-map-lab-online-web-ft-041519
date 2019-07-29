// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {   //filter ever instance of driver
    return driver.revenue > revenue           //that has a revenue higher than the passed in revenue
  }).map(function (driver) {                  //then map each of these remaining drivers names in an array
    return driver.name
  })
}

function exactMatch (drivers, object) {  //pass in drivers array and the attribute you want to find a matched value for
  return drivers.filter(function (driver) {  //filter the drivers array by each driver object inside the drivers array
    return driver[Object.keys(object)[0]] === object[Object.keys(object)[0]]  //this finds each driver thats first attribute value matches the passed in value
  })
}
function exactMatchToList (drivers, object) { //pass in drivers array and the attribute you want to find a matched value for
  return drivers.filter(function (driver) { //filter the drivers array by each driver object inside the drivers array
    return driver[Object.keys(object)[0]] === object[Object.keys(object)[0]] //return each driver thats first attribute value matches the passed in value
  }).map(function (driver) {                  //then map each of these remaining drivers names in an array
    return driver.name
  })
}
