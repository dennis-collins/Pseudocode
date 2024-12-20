// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START

SET summa to 0
SET vänner to 0
SET dricks to 0
SET varje to 0

INPUT summa
INPUT vänner
INPUT dricks

CALCULATE varje = summa + (summa * dricks) / vänner

OUTPUT varje

END

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutOrd till "FIVE";
    SET variabel wordOne till "FOUR";
    SET variabel wordTwo till "0"; // som placeholder i början
    SET variabel plays = 0;
    SET variabel congrats till "Well done! You did it in [plays] steps.";

    PRINT prompt to user to enter a word
    
    INPUT wordTwo
    INCREASE plays ++

    IF ordbok contains wordTWO THEN
        RUN function isOneLetterApart()
    ELSE
        PRINT initial prompt to user again
    END IF

    IF function isOneLetterApart() RETURNS true THEN
        ASSIGN value of wordTwo to wordOne
    ELSE
        PRINT initial prompt to user again
    END IF

    IF wordOne == slutOrd THEN
        PRINT "congrats" to user
    ELSE
        PRINT initial prompt to user again
    END IF

end function

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    LOOP through 0 to 3 for i
        IF wordOne [i] != wordTwo [i]
            THEN diffCount ++
        END IF
    END LOOP

    IF diffCount == 1 THEN
        RETURN true
    ELSE
        RETURN false
    END IF

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/
