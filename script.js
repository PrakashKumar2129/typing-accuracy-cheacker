let quotes_array = "Push yourself because no one else is going to do it for you. Failure is the condiment that gives success its flavor."

let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");

let current_quote = "";
let quoteNo = 0;
let characterTyped = "";
let errors = 0;

function startGame() {

    quote_text.innerText = "";
    input_area.value = "";

    let curElement = quotes_array.split('');

    for (let i = 0; i < curElement.length; i++) {
        let Span = document.createElement('span');
        Span.innerText = curElement[i];
        quote_text.appendChild(Span);
    }

    if (quoteNo <= current_quote.length)
        quoteNo++;
    else
        quoteNo = 0;
}


function processCurrentText() {

    curr_input = input_area.value;
    curr_input_array = curr_input.split('');

    characterTyped++;
    errors = 0;

    let quoteSpanArray = quote_text.querySelectorAll('span');

    quoteSpanArray.forEach((char, index) => {
        let typedChar = curr_input_array[index]

        // character not currently typed
        if (typedChar == null) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
        }
        // correct character
        else if (typedChar === char.innerText) {
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');
        }
        // incorrect character
        else {
            char.classList.add('incorrect_char');
            char.classList.remove('correct_char');

            // increment number of errors
            errors++;
        }
    });

    // update accuracy text
    let correctCharacters = (characterTyped - errors);
    let accuracyVal = ((correctCharacters / characterTyped) * 100);

    if (curr_input.length === quotes_array.length) {
        alert("Accuracy : " + Math.round(accuracyVal));
        remove();
    }
}


function remove() {
    input_area.value = "";
    current_quote = "";
    quoteNo = 0;
    characterTyped = "";
    errors = 0;
}

