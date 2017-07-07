let machingWords = (str) => {
	let result = [];
	let words = str.split(" ");
	for (let i = 0; i < words.length; i++) {
		for (let x = 0; x < words.length; x++) {
			if (words[i] == words[x] && x != i) {
				if (result.includes(words[i]) === false) {
					result.push(words[i]);
				}

			}
		}
	}
	return result;
};


let riddle = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas. ";
var answer = machingWords(riddle);
console.log(answer);



module.exports = machingWords;
