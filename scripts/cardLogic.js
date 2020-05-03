function getCard() {
	document.getElementById("getCard").disabled = true;
	setTimeout(enableGetCard, 1000);
	id = randomInt(0, 10000000);
	luckBoost = 1;
	for (card in game.equippedCards) {
		luckBoost += game.equippedCards[card].luckBoost;
	}
	powerMin = 0;
	powerMax = 3 * (luckBoost + game.luck);
	multiplyerMin = 1;
	multiplyerMax = 3 * (luckBoost + game.luck);
	power = randomInt(powerMin, powerMax);
	multiplyer = randomInt(multiplyerMin, multiplyerMax);
	luckMin = 0;
	luckMax = 0.2 * (luckBoost + game.luck);
	luckBoost = randomUniform(luckMin, luckMax);
	finalPower = power * multiplyer;
	maxPower = powerMax * multiplyerMax;
	game.cards[id] = {
		name: getName(),
		luck: finalPower / maxPower,
		power: power,
		multiplyer: multiplyer,
		luckBoost: luckBoost,
	};
	addCard("cardList", id);
}

function enableGetCard() {
	document.getElementById("getCard").disabled = false;
}

function selectColor(id, target) {
	if (target == "cardsList") {
		if (game.cards[id].luck > 0.5) {
			document.getElementsByClassName(id)[0].style.color = "rgb(0," + 255 * game.cards[id].luck + ",0)";
		} else {
			document.getElementsByClassName(id)[0].style.color = "rgb(" + 255 * (1 - game.cards[id].luck) + ",0,0)";
		}
	} else if (target == "equippedCards") {
		if (game.equippedCards[id].luck > 0.5) {
			document.getElementsByClassName(id)[0].style.color = "rgb(0," + 255 * game.equippedCards[id].luck + ",0)";
		} else {
			document.getElementsByClassName(id)[0].style.color = "rgb(" + 255 * (1 - game.equippedCards[id].luck) + ",0,0)";
		}
	}
}

function addCard(target, id) {
	if (target == "cardList") {
		document.getElementById("cardList").innerHTML += `<div id="${id}">
                                                      <div class='${id}'>${game.cards[id].name}</div>
                                                      <div>Power: ${game.cards[id].power}</div>
                                                      <div>Multiplyer: ${game.cards[id].multiplyer}</div>
                                                      <div>Luck: ${game.cards[id].luckBoost}</div>
                                                      <button type="button" onclick="equiptCard('${id}')">Equipt card</button>
                                                      <button type="button" onclick="deleteCard('${id}', 'cards')">Delete card</button>
                                                      <div><br></div>
                                                      </div>`;
		selectColor(id, "cardsList");
	} else if (target == "equippedCards") {
		document.getElementById("equippedCards").innerHTML += `<div id="${id}">
                                                           <div class='${id}'>${game.equippedCards[id].name}</div>
                                                           <div>Power: ${game.equippedCards[id].power}</div>
                                                           <div>Multiplyer: ${game.equippedCards[id].multiplyer}</div>
                                                           <div>Luck: ${game.equippedCards[id].luckBoost}</div>
                                                           <button type="button" onclick="unequiptCard('${id}')">Unequipt card</button>
                                                           <button type="button" onclick="deleteCard('${id}', 'equippedCards')">Delete card</button>
                                                           <div><br></div>
                                                           </div>`;
		selectColor(id, "equippedCards");
	}
}

function equiptCard(id) {
	if (Object.keys(game.equippedCards).length < game.maxEquippedCards) {
		document.getElementById(id).remove();
		game.equippedCards[id] = game.cards[id];
		delete game.cards[id];
		addCard("equippedCards", id);
	}
}

function unequiptCard(id) {
	document.getElementById(id).remove();
	game.cards[id] = game.equippedCards[id];
	delete game.equippedCards[id];
	addCard("cardList", id);
}

function deleteCard(id, location) {
	delete game[location][id];
	document.getElementById(id).remove();
}
