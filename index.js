function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue);
};

function driverNamesWithRevenueOver(drivers, revenue) {
    const driversOver = drivers.filter(driver => driver.revenue > revenue);
    return driversOver.map(driver => driver.name);
};

function exactMatch(drivers, attr) {
    for(const key in attr) {
        return drivers.filter(driver => driver[key] === attr[key]);
    };
};

function exactMatchToList(drivers, str) {
    const matches = exactMatch(drivers, str);
    return matches.map(driver => driver.name);
};