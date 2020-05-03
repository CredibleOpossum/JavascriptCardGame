var first = [
  "Mystical",
  "Complicated",
  "Abstract",
  "Complex",
  "Premium",
  "Scared",
  "Joyous",
  "Festive",
  "Selective"
]

var secound = [
  "Vase",
  "Cat",
  "Quiver",
  "Idea",
  "Lamp",
  "Haircut",
  "Partner",
  "Cover",
  "Rain"
]

function getName() {
  name = ""
  name += first[randomInt(0,first.length-1)]
  name += " " + secound[randomInt(0,secound.length-1)]
  return name;
}
