
let chars = {
	"A" : "ᚣ",
	"B" : "ᛒ",
	"C" : "ᛈ",
	"D" : "ᚦ",
	"E" : "ᛊ",
	"F" : "ᚩ",
	"G" : "G",
	"H" : "ᚺ",
	"I" : "ᛁ",
	"J" : "J",
	"K" : "ᛕ",
	"L" : "ᛁ",
	"M" : "ᛖ",
	"N" : "ᚢ",
	"O" : "ᛜ",
	"P" : "ᚹ",
	"Q" : "Q",
	"R" : "ᚱ",
	"S" : "ᛇ",
	"T" : "ᛠ",
	"U" : "U",
	"V" : "V
	"W" : "W"
	"X" : "ᚷ",
	"Y" : "ᚴ",
	"Z" : "Z,
	
};


function createText(){
	var txt = "";
	var fulltext = document.getElementById("inp").value;
	for(var i = 0; i < fulltext.length; i ++){
		if(fulltext.charAt(i).toUpperCase() in chars){
			txt += chars[fulltext.charAt(i).toUpperCase()];
		}
		else{
			txt += fulltext.charAt(i).toUpperCase();
		}
	}
	document.getElementById("textout").innerHTML = txt;
}
