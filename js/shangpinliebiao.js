$(function(){
	//------------------吸顶------------------
		 var obj = document.getElementById("header");
		 var Nav = document.getElementById("nav1");
		    var ot = obj.offsetTop;
		    document.onscroll = function () {
	        var st = document.body.scrollTop || document.documentElement.scrollTop;
	        var oTop = document.documentElement.scrollTop;    
			if(oTop >= 40){
			      Nav.style.top = 0;
			      Nav.style.position = 'fixed';
			   }else if(oTop < 40)
			      Nav.style.position = 'static';
        obj.setAttribute("data-fixed",st >= ot?"fixed":"")
      };
        
	        var srr1 = [{
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			},{
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}, {
				"src": "img/xBVY06eqW8P1BxjpkMptPA.jpg",
				"aa" :"自营香满园优选珍珠香米<br>5kg袋装粳米",
				"price":"￥38.90",
				"inf": "马上抢",
			}]
			var str1 = '';
			for(var i = 0; i < srr1.length; i++) {
				var path = srr1[i].src;
				var aa= srr1[i].aa;
				var price = srr1[i].price;
				var inf = srr1[i].inf;
				str1 += `<div class="gbox">							
							<img src="${path}" class="lazy-loading"/>
								<p class="pp">${aa}</p>	
									
								<p class="price">${price}</p>
							<a href="###" class="same" target="_blank">${inf}</a>
						</div>`;
				console.log(str1);
				document.getElementById('Box').innerHTML = str1;
			};
})
