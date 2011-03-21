/// function get
/// Desc Sends a synchronized GET request for file
function get (file, binary) {
	var request = new XMLHttpRequest();
	var source;
	
	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status === 200) {
				source = request.responseText;
				console.log("sync loaded " + file + " (" + source.length  + " bytes)");
			} else {
				console.log("sync failed to load " + file);
			}
		}
	};
	
	request.open("GET", file, false);
	
	if (binary === true) {
		request.overrideMimeType("text/plain; charset=x-user-defined");
	}
	
	request.send("");
	
	return source;
}

/// function getA
/// Desc Sends an asynchronous GET request for file
function getA (file, binary) {
	var request = new XMLHttpRequest();
	var source;
	
	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status === 200) {
				source = request.responseText;
				console.log("async loaded " + file + " (" + source.length  + " bytes)");
			} else {
				console.log("async failed to load " + file);
			}
		}
	};
	
	request.open("GET", file, true);
	
	if (binary === true) {
		request.overrideMimeType("text/plain; charset=x-user-defined");
	}
	
	request.send("");
	
	return source;
}