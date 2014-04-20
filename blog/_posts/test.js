function greeting(name){
	var text='Hello'+name;
	return function() {
		alert(text);
	}
}

var sayHello=greeting("Closure");
sayHello();