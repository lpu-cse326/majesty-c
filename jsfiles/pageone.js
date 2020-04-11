
var i = 0; 			
var images = [];	
var time = 4000;
images[0] = "../images/1_roshan-india-UDAY-ujala.jpg";
images[1] = "../images/2_saubhagya.jpg";
images[2] = "../images/3_achievements.jpg";
images[3] = "../images/4_Ujala.jpg";
images[4] = "../images/5_Digital_Transactions.jpg";
images[5] = "../images/6_Trans_Grid.jpg";
images[6] = "../images/7_North_Focus_Hydel_II.jpg";
images[7] = "../images/8_IPDS (1).jpg";
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;