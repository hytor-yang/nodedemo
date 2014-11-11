function start() {
	console.log("Request handler 'start' was called.");

	function sleep(milliSecond) {
		var startTime = (new Date()).getTime();
		while ((new Date).getTime() < startTime + milliSecond) {};
	}

	sleep(10000);
	return "Hello Start";
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello Upload"
}

exports.start = start;
exports.upload = upload;