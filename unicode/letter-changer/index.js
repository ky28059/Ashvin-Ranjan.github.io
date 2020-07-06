
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
	var fulltext = document.getElementById("inp").value;
	for(var i = 0; i < fulltext.length; i ++){
		try{
			txt += chars[fulltext.charAt(i)];
		}
		catch{
			txt += fulltext.charAt(i);
		}
	}
	document.getElementById("textout").innerHTML = txt;
}
