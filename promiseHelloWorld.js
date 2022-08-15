
	function promiseHelloWorld() {
		return new Promise((resolve, reject) => {
		resolve('Hello World!');
	 });
	 }
	
	

 promiseHelloWorld().then(response => console.log(response));