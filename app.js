// Assignment of references
const $buzzerBtn = $("#buzzer");
const $messageElement = $("#message");
const $victory = $("#buttonSound");

// Function to have a random number of 1-3 be rolled
function randomCookie() {
    return Math.floor(Math.random() * 3) + 1;
}

// Function to get the message to show
function messageDisplay(message) {
    $messageElement.text(message);
}

// Function to clear message after button press
function clearMessage() {
    setTimeout(function () {
        messageDisplay("");
    }, 8000);
}

// Function to clear cookie image after button press
function clearImage() {
    setTimeout(() => {
        $("#sugarCookieImage").addClass('hiddenSugar');
        $("#chocolateCookieImage").addClass('hiddenChocolate');
        $("#oatmealCookieImage").addClass('hiddenOatmeal');
    }, 4000);
}

// Function for Button Action
function buzzerClicked() {
    messageDisplay("");
    messageDisplay("Looks like someone just got a giant cookie! Congrats!");
    $victory[0].play();
    clearMessage();

    const cookie = randomCookie();

    // Display the choices
    const cookies = ['Sugar Cookie', 'Chocolate Chip Cookie', 'Oatmeal Cookie'];

    setTimeout(() => {
        if (cookie === 1) {
            $messageElement.text(`You got a ${cookies[0]}! It's SUPER sweet!`);
            $messageElement.attr('class', 'cookie1');
            $("#sugarCookieImage").removeClass('hiddenSugar');
            clearImage();
        } else if (cookie === 2) {
            $messageElement.text(`You got a ${cookies[1]}! Nothing wrong with the classics!`);
            $messageElement.attr('class', 'cookie2');
            $("#chocolateCookieImage").removeClass('hiddenChocolate');
            clearImage();
        } else {
            $messageElement.text(`You got a ${cookies[2]}! A personal favorite.`);
            $messageElement.attr('class', 'cookie3');
            $("#oatmealCookieImage").removeClass('hiddenOatmeal');
            clearImage();
        }
    }, 4000);
}

// This makes the button activate
$buzzerBtn.on('click', buzzerClicked);
