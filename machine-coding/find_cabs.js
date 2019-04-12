// @ts-check
function main(input, customerName, offlineDriversArr) {
  const ip_arr = input.split("\n");
  const test_cases_count = Number(ip_arr[0]);
  let driverToCustomerMap = new Map();
  let customerToDriverMap = new Map();
  let driverRatingMap = new Map();
  let customerRatingMap = new Map();
  let driverAvgRatingMap = new Map();
  let customerAvgRatingMap = new Map();
  let flagedCustomer = new Map();
  let flagedDriver = new Map();
  let offlineDriversMap = getOfflineDriversMap(offlineDriversArr);

  for (let i = 1; i <= test_cases_count; i++) {
    const query = ip_arr[i].split(" ");
    if (!driverToCustomerMap.has(query[0])) {
      driverToCustomerMap.set(query[0], []);
    }
    driverToCustomerMap.get(query[0]).push(query[2]);
    if (!customerToDriverMap.has(query[2])) {
      customerToDriverMap.set(query[2], []);
    }
    customerToDriverMap.get(query[2]).push(query[0]);
    if (!driverRatingMap.has(query[0])) {
      driverRatingMap.set(query[0], []);
    }
    driverRatingMap.get(query[0]).push(Number(query[3])); // customer given rating
    if (!customerRatingMap.has(query[2])) {
      customerRatingMap.set(query[2], []);
    }
    customerRatingMap.get(query[2]).push(Number(query[1])); // driver given rating

    if (!flagedDriver.has(query[2])) {
      // key customer name value array of flagged drivers
      flagedDriver.set(query[2], []);
    }
    if (Number(query[3]) <= 1) {
      flagedDriver.get(query[2]).push(query[0]);
    }
    if (!flagedCustomer.has(query[0])) {
      // key customer name value array of flagged drivers
      flagedCustomer.set(query[0], []);
    }
    if (Number(query[1]) <= 1) {
      flagedCustomer.get(query[0]).push(query[2]);
    }
  }

  driverAvgRatingMap = calculateAvgRating(driverRatingMap);
  customerAvgRatingMap = calculateAvgRating(customerRatingMap);
  printAvgRating(customerName, customerAvgRatingMap);
  const found = printEligibleDriver(
    customerName,
    customerAvgRatingMap,
    driverAvgRatingMap,
    flagedCustomer,
    flagedDriver,
    offlineDriversMap
  );
  if (!found) {
    checkForPreviousRides(
      customerName,
      customerToDriverMap,
      driverAvgRatingMap,
      flagedCustomer,
      flagedDriver,
      offlineDriversMap
    );
  }
  if (!found) {
    console.log("No drivers found");
    throw new Error("No drivers found");
  }
}

// prepare offline drivers map based on input
// to check while recommending
function getOfflineDriversMap(offlineDriversArr) {
  const offlineDriversMap = new Map();
  offlineDriversArr.forEach(driverName => {
    offlineDriversMap.set(driverName, true);
  });
  return offlineDriversMap;
}

// create list of flagged drivers for customer
// create list of flagged customers for driver
function checkForFlagged(
  flagedCustomer,
  flagedDriver,
  customerName,
  driverName
) {
  let flagged = false;
  const flagedDriversArr = flagedDriver.get(customerName);
  const flagedCustomersArr = flagedCustomer.get(driverName);
  if (flagedDriversArr && flagedDriversArr.length > 0) {
    const driverFlagged = flagedDriversArr.indexOf(driverName);
    if (driverFlagged >= 0) {
      // customer has given 1 rating
      return true;
    }
  }
  if (flagedCustomersArr && flagedCustomersArr.length >= 0) {
    const customerFlagged = flagedCustomersArr.indexOf(customerName);
    if (customerFlagged >= 0) {
      // customer has given 1 rating
      return true;
    }
  }

  return flagged;
}

function checkForPreviousRides(
  customerName,
  customerToDriverMap,
  driverAvgRatingMap,
  flagedCustomer,
  flagedDriver,
  offlineDriversMap
) {
  let found = false;
  const previousDrivers = customerToDriverMap.get(customerName);
  if (previousDrivers && previousDrivers.length) {
    previousDrivers.forEach(driverName => {
      if (
        !checkForFlagged(
          flagedCustomer,
          flagedDriver,
          customerName,
          driverName
        ) &&
        !offlineDriversMap.has(driverName)
      ) {
        console.log(
          `Name: ${driverName} , Average rating: ${driverAvgRatingMap.get(
            driverName
          )}`
        );
        found = true;
      }
    });
  }
  return found;
}

function printEligibleDriver(
  customerName,
  customerAvgRatingMap,
  driverAvgRatingMap,
  flagedCustomer,
  flagedDriver,
  offlineDriversMap
) {
  let found = false;
  driverAvgRatingMap.forEach((avgRating, driverName) => {
    if (avgRating >= customerAvgRatingMap.get(customerName)) {
      if (
        !checkForFlagged(
          flagedCustomer,
          flagedDriver,
          customerName,
          driverName
        ) &&
        !offlineDriversMap.has(driverName)
      ) {
        console.log(`Name: ${driverName} , Average rating: ${avgRating}`);
        found = true;
      }
    }
  });
  return found;
}

function printAvgRating(customerName, customerRatingMap) {
  console.log(`Customer avg rating: ${customerRatingMap.get(customerName)}`);
}

function calculateAvgRating(ratingMap) {
  const avgRatingMap = new Map();
  ratingMap.forEach((ratingArr, key) => {
    const avgRating =
      ratingArr.reduce((acc, rating) => {
        return acc + rating;
      }, 0) / ratingArr.length;

    avgRatingMap.set(key, avgRating);
  });
  return avgRatingMap;
}
// main(
//   "9\nd1 4 c1 5\nd1 5 c2 4\nd1 1 c3 2\nd2 5 c1 1\nd2 5 c2 5\nd2 4 c3 5\nd3 3 c1 2\nd3 4 c2 5\nd3 3 c3 3",
//   "c2",
//   ["d1"]
// );
main(
  "14\nd1 4 c1 5\nd1 4 c1 1\nd2 5 c2 4\nd2 1 c1 5\nd3 5 c1 5\nd3 3 c2 3\nd4 2 c3 2\nd1 1 c2 1\nd5 1 c4 1\nd1 1 c5 5\nd2 1 c5 5\nd3 1 c5 5\nd4 1 c5 5\nd5 1 c5 5",
  "c3",
  ["d3"]
);
