
//声明一个对象，
// var paddingMe={
// 	name:"Padding Me",
// 	email:"padding4me(at)gmail.com",
// 	website:"http://padding.me"
// }

// var sayHello=function(){
// 	var hello="hello,i am "+this.name
// 				+",my email is "+this.email
// 				+",my website is "+this.website;
// 	alert(hello);
// }

// paddingMe.Hello=sayHello;
// //paddingMe这个对象新增一个属性名为Hello，值为sayHello这个函数。

// paddingMe.Hello();

//javaScript的数据和成员封装很简单。没有类完全是对象操作。
//javaScirpt的对象成员函数可以在使用时临时声明，并把一个全局函数直接赋过去。

//这里funcion作为类
// var Person =function(name,email,website){
// 	this.name=name;
// 	this.website=website;
// 	this.email=email;
// 	this.sayHello=function() {
// 		var hello="hello,i am "+this.name
// 				+",my email is "+this.email
// 				+",my website is "+this.website;
// 		alert(hello);
// 	};
// };

// var paddingMe=new Person("Padding Me","padding4me(at)gmail.com","http://padding.me");

// paddingMe.sayHello();



//Js的成员函数可以在实例上进行修改，也就是说不通实例相同函数名的行为不一定一样。



// 属性配置-Object.defineProperty
/*
var paddingMe=Object.create(null);

Object.defineProperty(paddingMe,'name',{
	value:'Padding Me',
	writable:true;//这个属性是否可以改
	configurable:true;//这个属性的配置是否可以改
	enumeable:true;//这个属性是否在for...in循环中遍历出来或在Object.keys中列出来。
});


Object.defineProperty(
	paddingMe,{
		'email':{
			value:'padding4me(at)gmail.com',
			writable:true;
			configurable:true;
			enumeable:true;
		},
		'website':{
			value:"http://padding.me",
			writable:true;
			configurable:true;
			enumeable:true;
		}
	});

*/

//getter,setter
/*
var paddingMe=Object.create(null);

var age=0;
Object.defineProperty(
	paddingMe,
		"age",{
			get:function(){
				return age+1;
			},
			set:function(value){
				age=value;
			},
			enumeable:true,
			configurable:true
		}
	);

paddingMe.age=100;
alert(paddingMe.age);



Object.defineProperty(
	paddingMe,'birth_year',{
		get:function(){
			var d=new Date();
			var y=d.getFullYear();
			return (y-this.age);
		},
		set:function(year){
			var d=new Date();
			var y=d.getFullYear();
			this.age=y-year;
		}
	}
);

alert(paddingMe.birth_year);

paddingMe.birth_year=2000;
alert(paddingMe.age);

*/


var paddingMe={
	name:"Padding Me",
	email:"padding4me(at)gmail.com",
	website:"http://padding.me",
	age:100,
	get birth_year(){
		var d= new Date();
		var y=d.getFullYear();
		return (y-this.age);
	},

	set birth_year(year){
		var d= new Date();
		var y= d.getFullYear();
		this.age=y-year;
	}

};

// alert(paddingMe.birth_year);
paddingMe.birth_year=2000;
// alert(paddingMe.age);


function listProperties (obj) {
	var newLine="<br/>";
	var names=Object.getOwnPropertyNames(obj);
	for(var i=0;i<names.length;i++){
		var prop=names[i];
		document.write(prop+newLine);

		var descriptor=Object.getOwnPropertyNames(obj,prop);
		for(var attr in descriptor){
			document.write("..."+attr+":"+descriptor[attr]);
			document.write(newLine);
		}
		document.write(newLine);
	}
}

listProperties(paddingMe);

