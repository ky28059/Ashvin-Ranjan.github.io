
let chars = {
	"A" : "\u0410",
	"a" : "\u0430",
	"B" : "\u0412",
	"b" : "\u042a",
	"C" : "\u0421",
	"c" : "\u0441",
	"D" : "\u0430",
	"d" : "\u0500",
	"E" : "\u0500",
};


function createText(){
	var txt = "";
	for(var i = 0; i < document.getElementById("inp").length; i ++){
		try{
			txt += chars[txt];
		}
		catch{
			txt += txt.charAt(i);
		}
	}
	document.getElementById("textout").innerHTML = txt;
}
