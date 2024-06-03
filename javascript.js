function getComputerChoice() {

    let tmp;
    let res;
    // Call random method. Assign resulting value.
    tmp = Math.random();
    // If statements to divide result into three possibilities.
    // If greater than or equal to 0 and less than .33 then paper.
    if ( 0 <= tmp && tmp <.33) {
        res = 'paper';
    }
    // If greater than or equal to .33 and less than .66 then rock.
    else if ( .33 <= tmp && tmp <.66) {
        res = 'rock';
    }

    // If greater than or equal to .66 and less than 1 then scissors.
    if ( .66 <= tmp && tmp < 1) {
        res = 'scissors';
    }

    // Return result
    return res;

}

console.log(getComputerChoice())
