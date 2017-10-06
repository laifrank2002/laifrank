setInterval(setSky,60000);

function setSky() {
	// Sets time, 20 is night, 16 is afternoon, 10 is day, 8 is day
	var d = new Date();
	var h = d.getHours();
	var sky = "morningsky";
		
	switch(h){
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:{
			sky = "nightsky";
			break;
		}
		case 8:
		case 9:{
			sky = "morningsky";
			break;
		}
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:{
			sky = "daysky";
			break;
		}
		case 16:
		case 17:
		case 18:
		case 19:{
			sky = "afternoonsky";
		}
	}
	
	
	document.body.style.backgroundImage = "url(Images/Skies/" + sky + ".jpg)";
}
setSky();