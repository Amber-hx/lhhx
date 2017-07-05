
$(function(){
	$('#ul1 li').mouseover(function(){
			if($(this).index()==3)
			{
				$('#ul1 .two p').css('display','block');
			}else if($(this).index()==6)
			{
				$('#ul1 .three p').css('display','block');
			}else if($(this).index()==1)
			{
				$('#ul1 .one p').css('display','block');
			}
	})
	$('#ul1 li').mouseout(function(){
			if($(this).index()==3)
			{
				$('#ul1 .two p').css('display','none');
			}else if($(this).index()==6)
			{
				$('#ul1 .three p').css('display','none');
			}else if($(this).index()==1)
			{
				$('#ul1 .one p').css('display','none');
			}
	})
	
	
	function fnTab(a,b,c,d){
		$(a).hover(function(){
			$(a).removeClass(c);
			$(this).addClass(c);
			$(b).removeClass(d);
			$(b).eq($(this).index()).addClass(d);
		})
	}
	$(fnTab('#num li','#imgs a','active','bloc'));
	$(fnTab('#u li','.rb-b','l2','zi'));
	$(fnTab('#nuzi li','#im a','act','bloc'));
	$(fnTab('#bu li','.box-zi','bj','zs'));
	$(fnTab('#bu1 li','.box-zi1','bj','zs'));	
	$(fnTab('.fd li','.ship','cbj','sps'));
	
	
	$('#mib li').hover(function(){
		$('#mib li .czl').removeClass('hide');
		$('#mib li .czl').eq($(this).index()).addClass('hide');
		$('#mib li .mibao').removeClass('sho');
		$('#mib li .mibao').eq($(this).index()).addClass('sho');
	})
	$('.sh').hover(function(){
		$('#us').css('display','block');
	},function(){
		$('#us').css('display','none');
	})
	$('.b-t').hover(function(){
		$('.b-t a img').stop().animate({marginLeft:-215+'px'},500);
	},function(){
		$('.b-t a img').stop().animate({marginLeft:0},500);
	})	
	/*$('#num li').hover(function(){
		$('#num li').removeClass('active');
		$(this).addClass('active');
		$('#imgs a').removeClass('bloc');
		$('#imgs a').eq($(this).index()).addClass('bloc');
	})
	$('#u li').hover(function(){
		$('#u li').removeClass('l2');
		$(this).addClass('l2');
		$('.rb-b').removeClass('zi');
		$('.rb-b').eq($(this).index()).addClass('zi');
	})
	$('#nuzi li').hover(function(){
		$('#nuzi li').removeClass('act');
		$(this).addClass('act');
		$('#im a').removeClass('bloc');
		$('#im a').eq($(this).index()).addClass('bloc');
	})
	$('#bu li').hover(function(){
		$('#bu li').removeClass('bj');
		$(this).addClass('bj');
		$('.box-zi').removeClass('zs');
		$('.box-zi').eq($(this).index()).addClass('zs');
	})
	$('#bu1 li').hover(function(){
		$('#bu1 li').removeClass('bj');
		$(this).addClass('bj');
		$('.box-zi1').removeClass('zs');
		$('.box-zi1').eq($(this).index()).addClass('zs');
	})
	$('.fd li').hover(function(){
		$('.fd li').removeClass('cbj');
		$(this).addClass('cbj');
		$('.ship').removeClass('sps');
		$('.ship').eq($(this).index()).addClass('sps');
	})*/
})

window.onload=function(){
	var oCt=document.getElementById('ct');
	var aLi=oCt.getElementsByTagName('li');
	var oA1=document.getElementById('a1');
	var oA2=document.getElementById('a2');
			function fnTab(aaa){
				for(var i=0;i<aLi.length;i++){
						aLi[i].className='';
					};
					aLi[aaa].className='ls';
			}
			var n=0;
			function next(){
				n++;
				if(n>=4){
					n=0; 
				}
				fnTab(n);
			};
			oA2.onclick=next;
			oA1.onclick=function(){
				n--;
				if(n<0){
					n=aLi.length-1; 
				}
				fnTab(n);
			};
};



























