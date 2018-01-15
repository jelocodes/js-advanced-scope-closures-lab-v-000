const produceDrivingRange = function(allotedRange) {
	return function(blockRangeA, blockRangeB) {
		let blockRange = Number.parseInt(blockRangeB, 10) - Number.parseInt(blockRangeA, 10);
		if (blockRange <= allotedRange) {
			return `within range by ${allotedRange - blockRange}`;
		} else {
			return `${blockRange - allotedRange} blocks out of range`;
		}
	}
}

const produceTipCalculator = function(tipPercentage) {
	return function(price) {
		return price * tipPercentage;
	}
}


//createDriver returns a function that returns a class that produces a Driver class. The class has reference to a driverId that is //incremented each time a new driver is created. The rest of the code base does not have access to driverId.

const Driver = function createDriver() {
	let driverId = 0;

	return class {
		constructor(name, car) {
			this.name = name;
			this.car = car;
			this.id = ++driverId;
		}
	}
}
