function fetchStatus() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', './api/v1/get-api-data');
	xhr.send(null);
	xhr.onreadystatechange = function () {
	  const DONE = 4; // readyState 4 means the request is done.
	  const OK = 200; // status 200 is a successful return.
	  if (xhr.readyState === DONE) {
	    if (xhr.status === OK) {
	      console.log(xhr.responseText); // 'This is the returned text.'
	    } else {
	      console.log('Error: ' + xhr.status); // An error occurred during the request.
	    }
	  }
	}
}
