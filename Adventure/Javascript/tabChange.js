function StoryTab() {
	tabAll(false)
	show("story");
}
function InventoryTab() {
	tabAll(false)
	show("inventory");
	// Updates values
	checkShow(whiskey,"whiskey","whiskeyDisplay",whiskey);
	checkShow(key,"key","keyDisplay","a");
	checkShow(gold,"coins","coinsDisplay",gold);
}
function SettingsTab() {
	tabAll(false)
	show("settings");
}
// Turns inventory checking into a one liner
function checkShow(item,id,disId,toBeDisplayed){
	if (item > 0){
		show(id)
		document.getElementById(disId).innerHTML = toBeDisplayed;
	}
	else {
		hide(id)
	}
}
// Less Words is better, condenses two lines into one
function show (id){
	document.getElementById(id).style.display = "block";
}
function hide (id){
	document.getElementById(id).style.display = "none";
}
// For Convience's Sake
function tabAll(display){
	// All Important Array, for the sake of convienance and not writing 10,000 tab.closes
	var Ids = ["story","inventory","settings"]
	if (display){ // Open
		for (i = 0; i < Ids.length; i++){
			document.getElementById(Ids[i]).style.display = "block";
		}
	}
	else{ // Close
		for (i = 0; i < Ids.length; i++){
			document.getElementById(Ids[i]).style.display = "none";
		}
	}
}
// Initialization
StoryTab();