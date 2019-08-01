// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  const driverRev = drivers.filter(driver => (driver.revenue > revenue));
  return driverRev;
}

function driverNamesWithRevenueOver(drivers, revenue){
  const driverNames = [];
  for (const driver of drivers){
    if(driver.revenue > revenue) {
      driverNames.push(driver.name);
    }
  }
  return driverNames;
}

function exactMatch(drivers, obj){
  const driverMatch = [];
  for (const driver of drivers){
    for (const key in obj){
      if (driver[key] === obj[key]){
        driverMatch.push(driver);
      }
    }
  }
  return driverMatch;
}

function exactMatchToList(drivers, obj){
  const driverMatch = [];
  for (const driver of drivers){
    for (const key in obj){
      if (driver[key] === obj[key]){
        driverMatch.push(driver.name);
      }
    }
  }
  return driverMatch;
}
