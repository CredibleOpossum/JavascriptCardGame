var first = ["Mystical", "Complicated", "Abstract", "Complex", "Premium", "Scared", "Joyous", "Festive", "Selective", "Werid"];

var second = ["Vase", "Cat", "Quiver", "Idea", "Lamp", "Haircut", "Partner", "Cover", "Rain", "Lace"];

function getName() {
	name = `${first[randomInt(0, first.length - 1)]} ${second[randomInt(0, second.length - 1)]}`;
	return name;
}
