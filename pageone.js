
var i = 0; 			
var images = [];	
var time = 4000;
images[0] = "1_roshan-india-UDAY-ujala.jpg";
images[1] = "2_saubhagya.jpg";
images[2] = "3_achievements.jpg";
images[3] = "4_Ujala.jpg";
images[4] = "5_Digital_Transactions.jpg";
images[5] = "6_Trans_Grid.jpg";
images[6] = "7_North_Focus_Hydel_II.jpg";
images[7] = "8_IPDS (1).jpg";
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