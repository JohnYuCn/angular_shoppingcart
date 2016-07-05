var util=angular.module("util",[]);
		util.service("utilService",[function(){

			<!-- clone一个对象 -->
			this.clone=function(o){
				var F=function(){};
				F.prototype=o;
				var f=new F();

				var ps=Object.getOwnPropertyNames(o);
				for(var i=0;i<ps.length;i++){
					var t=ps[i];
					f[t]=o[t];
				}
				return f;
			};
			<!-- 按照prop比较两个对象是否“相等” -->
			this.compare=function compare(o1,o2,prop){
				if(!o1[prop] || !o2[prop]) return false;
				return o1[prop]===o2[prop];
			}




		}]);