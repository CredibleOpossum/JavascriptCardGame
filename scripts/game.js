function randomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomUniform(min, max) {
	return Math.random() * (max - min) + min;
}

function shrink(num) {
	if (num >= 1000000) {
		return num.toExponential(2);
	} else {
		return num.toFixed(2);
	}
}

function upgrade(upgrade) {
	if (game.money >= game.upgrades[upgrade].cost) {
		game.money -= game.upgrades[upgrade].cost;
		game.upgrades[upgrade].cost *= game.upgrades[upgrade].scale;
		if (upgrade === "cardAmount") {
			game.maxEquippedCards++;
		} else if (upgrade === "luck") {
			game.luck++;
		}
	}
}

function main() {
	income = 0;
	for (var item in game.equippedCards) {
		income += game.equippedCards[item].power;
	}
	for (var item in game.equippedCards) {
		income *= game.equippedCards[item].multiplyer;
	}
	game.money += income / 10;
	document.getElementById("money").innerText = "Money: " + shrink(game.money) + ` (${shrink(income)}/s)`;
	document.getElementById("cardAmount").innerText = "Upgrade card amount" + ` (${shrink(game.upgrades["cardAmount"].cost)}$)`;
	document.getElementById("luck").innerText = "Upgrade luck" + ` (${shrink(game.upgrades["luck"].cost)}$)`;
}

setInterval(main, 100);
