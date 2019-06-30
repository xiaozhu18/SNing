//放大镜JQ代码
$(document).ready(function(){
			
				$(".jqzoom").imagezoom();
				
				$("#thumblist li a").click(function(){
					$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
					$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
					$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
				});
			
		});	
		$(function(){
//商品的数目加减
			var num_jia = document.getElementById("num-jia");
			var num_jian = document.getElementById("num-jian");
			var input_num = document.getElementById("input-num");
			
			num_jia.onclick = function() {
			
				input_num.value = parseInt(input_num.value) + 1;
			}
			
			num_jian.onclick = function() {
			
				if(input_num.value <= 0) {
					input_num.value = 0;
				} else {
			
					input_num.value = parseInt(input_num.value) - 1;
				}
			
			};
			   //吸顶效果     
			var obj = document.getElementById("bottomNav");
		    var ot = obj.offsetTop;
		    document.onscroll = function () {
	        var st = document.body.scrollTop || document.documentElement.scrollTop;
	        obj.setAttribute("data-fixed",st >= ot?"fixed":"")};
		})