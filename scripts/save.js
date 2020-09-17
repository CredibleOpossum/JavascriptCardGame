if (localStorage.save) {
	game = JSON.parse(atob(localStorage.save));
	for (card in game.equippedCards) {
		addCard("equippedCards", card);
	}
	for (card in game.cards) {
		addCard("cardList", card);
	}
	document.getElementById("maxCards").innerText = `Equipped cards (${game.maxEquippedCards} max):`;
} else {
	game = {
		money: 0,
		maxEquippedCards: 1,
		luck: 0,
		cards: {},
		equippedCards: {},
		upgradeCosts: {
			maxEquippedCards: 100,
		},
		upgrades: {
			cardAmount: {
				count: 0,
				cost: 100,
				scale: 10,
			},
			luck: {
				count: 0,
				cost: 1000,
				scale: 2,
			},
		},
	};
}

function save() {
	localStorage.save = btoa(JSON.stringify(game));
}

setInterval(save, 2000);
