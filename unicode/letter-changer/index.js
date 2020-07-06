
let chars = {
	"A" : u"\u0410",
	"a" : u"\u0430",
	"B" : u"\u0412",
	"b" : u"\u042a",
	"C" : u"\u0421",
	"c" : u"\u0441",
	"D" : u"\u0430",
	"d" : u"\u0500",
	"E" : u"\u0500",
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
