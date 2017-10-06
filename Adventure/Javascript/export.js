// Init
setInterval(autoSave(),60000);
loadFile()

function loadFile(){
	var importData = Get_LocalStorage("MedievalAdventureSaveFile");
	gold = importData[0];
	clicks = importData[1];
	whiskey = importData[2];
	key = importData[3];
	chestUnlocked = importData[4];
}

function autoSave(){
	var exportData = [gold,clicks,whiskey,key,chestUnlocked];
	Set_LocalStorage("MedievalAdventureSaveFile",exportData);
}

// Local Storage Backup! Saves AND Loads!
function Set_LocalStorage (object_name,value) {
	
	var object_value = btoa(JSON.stringify(value));
	localStorage.setItem(object_name,object_value);
	console.log(object_value);
}

function Get_LocalStorage(object_name){
	var object_value = localStorage.getItem(object_name);	
	object_value = atob(object_value);
	return JSON.parse(object_value);
	
}

function resetGame(){
	if (confirm("Are you sure you want to reset the game!")) {
		gold = 0;
		clicks = 0;
		whiskey = 0;
		key = false;
		chestUnlocked = false;
	} else {
		// Do nothing!
	}
}