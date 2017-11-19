/*下面是公司简介部分的导航栏JS代码*/
var Lis=document.getElementsByClassName('nav3')[0].getElementsByTagName('li');
for(var i=1;i<Lis.length;i++){
	Lis[i].index=i;
	Lis[i].onmouseover=function(){
		Lis[this.index].style.backgroundColor='#98CB52';
		Lis[this.index].style.color='#FFFFFF';
	}
	Lis[i].onmouseout=function(){
		Lis[this.index].style.backgroundColor='';
		Lis[this.index].style.color='#288B08'
	}
}

//轮播图
var imgLis=document.getElementById('img').getElementsByTagName('li');
var orderLis=document.getElementById('order').getElementsByTagName('li');
var Left=document.getElementById('Left');
var Right=document.getElementById('Right');
var timer=null;

function play(num,stoprun){
	if(stoprun==false){
		clearInterval(timer);
		timer=null;
	}
	for(i=0;i<imgLis.length;i++){
		if(i==num){
			imgLis[i].className='on';
			orderLis[i].className='on';
		}else{
			imgLis[i].className='';
			orderLis[i].className='';
		}
	}
}
function autoplay(nu){
	timer=setInterval(function(){
		play(nu,true);
		nu++;
		if(nu>=imgLis.length){
			nu=0;
		}
	},3000);
}
autoplay(0);
for(i=0;i<orderLis.length;i++){
	orderLis[i].index=i;
	imgLis[i].index=i;
	imgLis[i].onmouseover=function(){
		play(this.index,false);
	}
	imgLis[i].onmouseout=function(){
		autoplay(this.index);
	}
	orderLis[i].onmouseover=function(){
		play(this.index,false);
	}
	orderLis[i].onmouseout=function(){
		autoplay(this.index);
	}
}


//下面是滚动轮播
var ppt=document.getElementById('ppt');
var oul=ppt.getElementsByTagName('ul')[0];
var oli=ppt.getElementsByTagName('li');
var speed=161;
var xh=null;
oul.innerHTML=oul.innerHTML+oul.innerHTML;
oul.style.width=oli[0].offsetWidth*oli.length+'px';
function move(){
	oul.style.left=oul.offsetLeft+speed+'px';
	if(oul.offsetLeft<-oul.offsetWidth/2){
		oul.style.left='0px';
	}
	if(oul.offsetLeft>0){
		oul.style.left=-oul.offsetWidth/2+'px';
	}
}
xh=setInterval(move,1000);
ppt.onmouseover=function(){
	clearInterval(xh);
}
ppt.onmouseout=function(){
	xh=setInterval(move,1000);
}
var left=document.getElementById('left');
var right=document.getElementById('right');
left.onmouseover=function(){
	clearInterval(xh);
	left.onclick=function(){
		oul.style.left=oul.offsetLeft-161+'px';
		if(oul.offsetLeft<=-oul.offsetWidth/2){
			oul.style.left='0px';
		}
	}
}
left.onmouseout=function(){
	xh=setInterval(move,1000);
}
right.onmouseover=function(){
	clearInterval(xh);
	right.onclick=function(){
		oul.style.left=oul.offsetLeft+161+'px';
		if(oul.offsetLeft>0){
			oul.style.left=-oul.offsetWidth/2+'px';
		}
	}
}
right.onmouseout=function(){
	xh=setInterval(move,1000);
}


//返回顶部
window.onscroll=function(){
	var Top=document.documentElement.scrollTop||document.body.scrollTop;
	var top1=document.getElementById('top');
	console.log(top1);
	if(Top>300){
		top1.style.display='block';
	}else{
		top1.style.display='none';
	}
}
