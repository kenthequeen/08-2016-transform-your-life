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
	//console.log(bestSentenceToUpperCase("This is the best course."));
	//transform(bestSentence, function(word){
	//return bestSentence.toUpperCase();
//});


// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};
var collectedContents = [];
var collectedCharacteristics = transform(person, function(quality){
	return collectedContents.push(person);
});
//console.log(collectedContents);
//^^should this print more than once?

// 5. multByThree
var multByThree = function(collection){
  return transform(numbers, function(number){
  	return number * 3
  });

};
//console.log(multByThree(numbers));
// 6. upperCase


var upperCase = function(string){
		newString = string.split(" ");
	newSentence2 = transform(newString, function(word){
		return word.toUpperCase();

	});
	return newSentence2.join(" ");
};
var bestSentence = "This is the best six week course ever!";
console.log(upperCase(bestSentence));


// 7. contentsCollection
 var contentsCollection = function(collection){
	var newArray =[];
	return transform(collection, function(quality){
		return person.push(newArray);
	});
	console.log(newArray);
};
	
var person = {name: 'Jon', greatestFear: 'fearItself'};

//console.log(collectedContents); // ['name', 'Jon', 'greatestFear', 'fear itself'];

//^^ this console log returning undefined. Fix this. 

// 8. multByWhatever
var multByWhatever = function(collection, inputNum) {
	return transform(collection, function(number){
		return number * inputNum;
	});
};

numbers = [1,2,3,4,5];
//console.log(multByWhatever(numbers, 2));

// 9. divideByWhatever

var divideByWhatever = function(collection, inputNum){
	return transform(collection, function(number){
		return number/ inputNum;
	});
};
numbers = [35, 76, 89, 23, 10];
//console.log(divideByWhatever(numbers, 5));

// 10. switchCase
var switchCase = function(sentence, case){
	
}

// 11. contentsCollector

// 13. makeArray

// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 
