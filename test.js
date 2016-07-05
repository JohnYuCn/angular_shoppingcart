var items=[
			{name:"javascript good parts",price:46.10,count:0},
			{name:"javascript definitive guid",price:99.50,count:0},
			{name:"AngularJS up&running",price:73.50,count:0},
			];

var item={name:"javascript good parts",price:46.10,count:0};

function clone(o){
	var F=function(){};
	F.prototype=o;
	var f=new F();

	var ps=Object.getOwnPropertyNames(o);
	for(var i=0;i<ps.length;i++){
		var t=ps[i];
		f[t]=o[t];
	}
	return f;
}


