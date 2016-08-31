var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};


// 1. Build transform.
var transform = function(collection, callback){
	var results = [];
	loop(collection, function(element) {
	results.push(callback(element));
	});
	return results;
}

// 2. allNumbersMultipliedByThree
	var numbers = [1, 2, 3, 4, 5];
	var multipliedByThree  = transform(numbers, function(number){
	return number *3;
})

//console.log(multipliedByThree);

// 3. bestSentenceToUpperCase
	var bestSentence = "This is the best six week course ever!";
	var bestSentenceToUpperCase = function(string){
		var arrayOfWords = string.split(" ");
		var newSentence = transform(arrayOfWords, function(word){
			return word.toUpperCase();
		})
		return newSentence.join(" ");
	}
	console.log(bestSentenceToUpperCase("This is the best course."));
	//transform(bestSentence, function(word){
	//return bestSentence.toUpperCase();
//});


// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};
var collectedContents = [];
var collectedCharacteristics = transform(person, function(quality){
for (key in person){
	collectedContents.push(person);
}
});
//console.log(collectedContents);
//^^should this print more than once?

// 5. multByThree

// 6. upperCase

// 7. contentsCollection

// 8. multByWhatever

// 9. divideByWhatever

// 10. switchCase

// 11. contentsCollector

// 13. makeArray

// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 
