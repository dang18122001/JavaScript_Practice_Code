var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits

for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] == undefined) {
        console.log(i);
        break;
    }
}

