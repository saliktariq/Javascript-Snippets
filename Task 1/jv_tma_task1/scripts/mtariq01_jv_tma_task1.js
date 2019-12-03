/**
**  A small application that gets an ISBN number and manipulates that ISBN using string methods
**  @author Salik Tariq
**/

/**
** @param constant ISBN to contain the string variable ISBN 
**/
const ISBN = "978-0-545-01022-1";

/**
** Function to iterate through a string and gets rid of any dashes, 
** takes as an argument a variable stringVar containing string variable/constant
** @return a string containing only integer digits of type string.
**/ 

function cleanString(stringVar){
	let cleanStr = '';
	for (let i = 0; i < stringVar.length; i++){
		if (Number.isInteger(parseInt(stringVar.charAt(i)))) { 
			cleanStr += stringVar.charAt(i);
		}
	}
	return cleanStr;
	
}

/**
** Function to get the length of the ISBN without hyphens.
** takes as an argument a variable isbn that contains the ISBN number
** @return an digit containing the last character of ISBN.
**/

function isbnLength(isbn) {
	return cleanString(isbn).length;
}

/**
** Function to get the ISBN check digit (The last character in the ISBN) 
** takes as an argument a variable isbn that contains the ISBN number
** @return an digit containing the last character of ISBN.
**/

function isbnCheck(isbn) {
	return cleanString(isbn).charAt([isbn.length-1]);
}

/**
** Function to get the registration group prefix of the ISBN (The first three characters) 
** takes as an argument a variable isbn that contains the ISBN number
** @return an digit containing the last character of ISBN.
**/