var first = ["Mystical", "Complicated", "Abstract", "Complex", "Premium", "Scared", "Joyous", "Festive", "Selective", "Werid"];

var secound = ["Vase", "Cat", "Quiver", "Idea", "Lamp", "Haircut", "Partner", "Cover", "Rain", "Lace"];

function getName() {
	name = "";
	name += first[randomInt(0, first.length - 1)];
	name += " " + secound[randomInt(0, secound.length - 1)];
	return name;
}
