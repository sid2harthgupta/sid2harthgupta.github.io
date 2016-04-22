
function run(){
    text = document.getElementById("excerpt").value;
    //console.log(text);
    input           = tokenizeInput(text);  // input becomes an object with property 'words'
    // console.log(input);
    word            = '';    
    scores          = {};    
    probability     = 0;
    num_stop_words = 0;
    unspoken = 0;

    // loop though languages in documents
    for (var index in candidates){
        candidate = candidates[index];
        //console.log(candidate);
        candidateExcerptProbability = 0;

        // stores the probability of document in language
        logSum = 0;        
       
        // loop through the words in the input text
        for (var i = 0; i < input.words.length; i++) {
            word = input.words[i];
            probabilityCandidate = 0;

            probabilityCandidate = candidateZScores[candidate][word];
            if (isNaN(probabilityCandidate)) {
                num_stop_words += 1;
            }
            else{
                //console.log(probabilityCandidate);
                if (probabilityCandidate === 0) probabilityCandidate = 0.01;
                else if (probabilityCandidate === 1) probabilityCandidate = 0.99;
                candidateExcerptProbability += probabilityCandidate;
            }

        }
        //console.log(candidateExcerptProbability);

        // language probability
        scores[candidate] = candidateExcerptProbability;//1/(1+Math.exp(logSum));
    }
    //console.log(scores);
    var ranking = Object.keys(scores).sort(function (x,y) {
      return scores[x] < scores[y];
    });
    document.getElementById("first_name").innerHTML = ranking[0];
    document.getElementById("first_score").innerHTML = scores[ranking[0]].toString().substring(0,5);
    document.getElementById("second_name").innerHTML = ranking[1];
    document.getElementById("second_score").innerHTML = scores[ranking[1]].toString().substring(0,5);
    document.getElementById("resultsTable").style.display = "block";
}

var tokenize = function (text) {
    // change to lower case
    text = text.toLowerCase();
    // remove non-alphanumeric chars
    text = text.replace(/\W/g, ' ');
    // replace blank segments with single blank space
    text = text.replace(/\s+/g, ' ');
    // remove leading/trailing whitespace
    text = text.trim();
    // create array using empty space as separator
    text = text.split(' ');
    return text;
};


function tokenizeInput(text){
    // create array of words from input text
    var input    = {};
    input.words  = tokenize(text);
    return input;
}



