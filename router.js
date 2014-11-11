function route(handle, pathname) {
	console.log("Abort to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		console.log("No request handle found for " + pathname);
		return "404 Not found";
	}
}

exports.route = route;