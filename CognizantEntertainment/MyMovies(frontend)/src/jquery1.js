<script> 
	$(document).ready(function(){
		$(".signupSlider").hide();
		$(".loginSlider").hide();
    	$(".signupButton1").click(function(){
		$(".signupSlider").show();
		$(".loginSlider").hide();
        $(".signupSlider").animate({
           left: '70px',
            height: '100%',
            width: '37%'
        });
    	});

    	$(".loginButton1").click(function(){
        alert('Login Button Clicked');
		$(".loginSlider").show();
		$(".signupSlider").hide();
        	$(".loginSlider").animate({
      	      	right: '-410px',
      	      	height: '100%',
				width: '37%'
  	      });
 	   });
	});
	</script> 