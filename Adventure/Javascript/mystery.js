// TDL
// Undo Button
// Transferable String of Save File


var stage = 0;
var lastCode = "S";
var nextCode = "";
// Misc Stats
var clicks = 0;
var whiskey = 0;
var key = false;
var chestUnlocked = false;
var gold = 0;
// Undo Stats
var historyCode = [];
// Undo Button


function undoLastStep () {
	closeAll();
	if(historyCode.length > 0){
		document.getElementById(historyCode.pop()).style.display = "block";
		stageNum -= 1;
	}
}

function trackClick() {
	clicks ++;
	document.getElementById("timesClicked").innerHTML = clicks + " times clicked!";
}
// Convience's sake, closes all infoBoxes! 
function closeAll () {
	var Ids = ["S","SA","SB","SC","SD","SBA","SBB","SBBA","SBBB","SBBC","SBBD","SBBDB","SDA","SDAA","SDAB","SDB","SDBA","SDC","SDCB","SDCBB","SDCBBA","SDCBBB","SDCBBC","SDCBBD","K","KA","KB","KAB","KAC","KC","KD","KDA","SBAA","SBAB","SBABA","SBABAA","SBABAB","SBABAC","SBABABA","SBABABAA","SBABABAC","L","LB","LC","J","JA","JB","JC","JCA","JCAB","JCB","SBAAC","SBAAD","SBABB","SBC","SBABAC","KTB","KTC"]; // Array of things that will be hidden, just add Ids from the HTML
	for (i = 0; i < Ids.length; i++){
		document.getElementById(Ids[i]).style.display = "none";
	}
}
// Instead of writing everything, you only need to write one thing, calcShow, plus the stage of the event and the Id of the event.
function calcShow (stageNum,Id){
	if (typeof Id === 'string' || Id instanceof String){ // Check if it's a string
		closeAll();
		document.getElementById(Id).style.display = "block";
		// Increases Stage Number to ensure good progression
		stage = stageNum + 1;
		lastCode=nextCode;
		nextCode = Id;
		
		console.log(lastCode);
		console.log(nextCode);
		// So undo button would work, push onto history another item
		historyCode.push(Id);
	}
	else{
		// do nothing
		alert("Function /'calcShow/' has been passed a bad string");
	}
}
// All the Show Functions
// Stage Codes 
// 000s = S
// 100s = J
// 200s = L
// 300s = K
// calcShow # is equal to number of letters in HTML IDs - 1
function showS () {
	closeAll();
	stage = 0;
	document.getElementById("S").style.display = "block";
	calcShow(0,"S");
}
function showJ () {
	stage = 100;
	document.getElementById("J").style.display = "block";
	calcShow(100,"J");
}
function showL () {
	stage = 200;
	document.getElementById("L").style.display = "block";
	calcShow(200,"L");
}
function showK () {
	stage = 300;
	document.getElementById("K").style.display = "block";
	calcShow(300,"K");
}
// The S Series
function showSA () {
	calcShow(1,"SA");
}
function showSB () {
	calcShow(1,"SB");
	whiskey++;
}
function showSC () {
	calcShow(1,"SC");
}
function showSD () {
	calcShow(1,"SD");
}
function showSBA () {
	calcShow(2,"SBA");
}
function showSBB () {
	calcShow(2,"SBB");
}
function showSBC () {
	showS();
}
function showSBD () {
	stage = 4;
	calcShow(4,"SDCBB");
}
function showSBAA () {
	stage = 3;
	calcShow(3,"SBAA");
}
function showSBAAA () {
	showJ();
}
function showSBAAB () {
	showL();
}
function showSBAAC () {
	calcShow(4,"SBAAC");
}
function showSBAAD () {
	calcShow(4,"SBAAD");
}

function showSBAB () {
	calcShow(3,"SBAB");
}
function showSBABA () {
	stage = 4;
	calcShow(4,"SBABA");
}
function showSBABAA () {
	calcShow(5,"SBABAA");
}
function showSBABAB () {
	calcShow(5,"SBABAB");
}
function showSBABABA () {
	calcShow(6,"SBABABA");
}
function showSBABABAA () {
	calcShow(7,"SBABABAA");
}
function showSBABABAC () {
	calcShow(7, "SBABABAC");
}

function showSBABB () {
	calcShow(4,"SBABB");
}
function showSBABC () {
	calcShow(4,"SBABC");
}

function showSBBA () {
	calcShow(3,"SBBA");
}
function showSBBB () {
	calcShow(3,"SBBB");
}
function showSBBC () {
	calcShow(3,"SBBC");
}
function showSBBD () {
	calcShow(3,"SBBD");
}
function showSBBDA () {
	calcShow(4,"SBBDA");
}
function showSBBDB () {
	calcShow(4,"SBBDB");
}
function showSDA () {
	calcShow(2,"SDA");
}
function showSDAA () {
	calcShow(3,"SDAA");
}
function showSDAB () {
	calcShow(3,"SDAB");
}
function showSDB () {
	calcShow(2,"SDB");
}
function showSDBA () {
	calcShow(3,"SDBA");
}
function showSDC () {
	calcShow(2,"SDC");
}
function showSDCB () {
	calcShow(3,"SDCB");
}
function showSDCBB () {
	calcShow(4,"SDCBB");
}
function showSDCBBA () {
	calcShow(5,"SDCBBA");
}
function showSDCBBB () {
	calcShow(5,"SDCBBB");
}
function showSDCBBC () {
	calcShow(5,"SDCBBC");
}
function showSDCBBD () {
	calcShow(5,"SDCBBD");
}
// The J Series
function showJA () {
	calcShow(101,"JA");
}
function showJB () {
	calcShow(101,"JB");
}
function showJC () {
	stage = 101;
	calcShow(101,"JC");
}
function showJCA () {
	calcShow(102,"JCA");
}
function showJCB () {
	stage = 102;
	calcShow(102,"JCB");
	if (key) {
		document.getElementById("keyBox").innerHTML = "You've already gotten the key though.";
	}
	key = true;
}
// Special Chest Function 
function showJCAB () {
	stage = 103;
	calcShow(103,"JCAB");
	console.log(key)
	if (key) {
		if (chestUnlocked){
			document.getElementById("treasureBox").innerHTML = "You go down the tunnel, there, you see a chest with a lock. You try the key, and it works! Oh wait, you already unlocked it! Oh well."
		}
		else {
			document.getElementById("treasureBox").innerHTML = "You go down the tunnel, there, you see a chest with a lock. You try the key, and it works! Inside is a bunch of stuff. Gold, jewels, stuff! You are rewarded with 100 gold coins from, presumbly, the guard's pension. You stuff it in somewhere they'll never look. Hey, anything for money!"
			chestUnlocked = true;
			gold += 100;
		}
	}
}

// The L Series
function showLB () {
	calcShow(201,"LB");
}
function showLC () {
	calcShow(202,"LC");
}
// The K Series
function showKA () {
	calcShow(301,"KA");
}
function showKB () {
	calcShow(301,"KB");
}

function showKC () {
	calcShow(301,"KC");
}

function showKD () {
	calcShow(301,"KD");
}
function showKAB () {
	calcShow(302,"KAB");
}
function showKAC() {
	calcShow(302,"KAC");
}
function showKDAB () {
	calcShow(303,"KDAB");
}
function showKDAC () {
	calcShow(303,"KDAC");
}

// Other returns.

/*
 //Copypaste Template for the various functions.
function show () {
	calcShow(,"");
}
*/
// Init
showS ();
