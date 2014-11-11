function route(handle, pathname) {
	console.log("Abort to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log("No request handle found for " + pathname);
	}
}

exports.route = route;