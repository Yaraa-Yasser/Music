			/*Loading Screen*/
 $(window).load(function()
{
		$(".loading-overlay .spinner").fadeOut(4000,
		function()
		{
			$(this).parent().fadeOut(400,
			function()
			{
				$("body").css("overflow","auto");
				$(this).remove();
			});
		});	  
}); 

          /*Sidebar*/

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
	
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
	
  document.getElementById("mySidepanel").style.width = "0";
}// JavaScript Document

          /*background-color of the navbar*/
$(function(){
				  
			 $(window).scroll(function(){
			var scrl = $(window).scrollTop();
			if (scrl >= 50){
				$(".navbar").css({"background-color":"#222","transition-property":"all","transition-duration":"0.5s"});
			}else{
				$(".navbar").css({"background-color":"rgba(115,0,0,0)","transition-property":"all","transition-duration":"0.5s"});
			}	
		});
	
			/*the height of slider*/
	'use strict';
	var winH   = $(window).height(),
		
		navH   = $('.navbar').innerHeight();
	$('.carousel,.carousel-item').height(winH + navH);
});

		/*navbar */
$(function(event){
	'use strict';
	$('.navbar li a').click(function(event){
		event.preventDefault();  
	  
	  $('html,body').animate({
		   
		   scrollTop: $('#'+$(this).data('scroll')).offset().top-80 
		   
	  },1000);
			
	});
});

             /*hover*/
$(function(){
	$(".album-cover").hover(
	function()
		{
			$(".moving").css("top","150");
		}
	,
	function()
		{
			(".moving").css("top","-50");
		}
	
	);
	
});
