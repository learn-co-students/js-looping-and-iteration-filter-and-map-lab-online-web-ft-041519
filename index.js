// Code your solution here:
function driversWithRevenueOver(driversArray, revenue) {
    const newDrivers = [];

    for (const driver of driversArray) {
        if (driver.revenue > revenue) {
           newDrivers.push(driver);
        }
    }

    return newDrivers;
}

function driverNamesWithRevenueOver(driversArray, revenue) {
    const newDrivers = [];

    for (const driver of driversArray) {
        if (driver.revenue > revenue) {
           newDrivers.push(driver.name);
        }
    }

    return newDrivers;
}

function exactMatch(driversArray, driverObj) {
    const newDrivers = [];

    for (const driver of driversArray) {
        for (const key in driverObj) {
            if (driver[key] === driverObj[key]) {
                newDrivers.push(driver);        
            }
        }
    }

    return newDrivers;
}

function exactMatchToList(driversArray, driverObj) {
    const newDrivers = [];

    for (const driver of driversArray) {
        for (const key in driverObj) {
            if (driver[key] === driverObj[key]) {
                newDrivers.push(driver.name);        
            }
        }
    }

    return newDrivers;
}