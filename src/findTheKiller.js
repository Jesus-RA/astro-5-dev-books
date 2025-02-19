function findTheKiller(whisper, suspects) {

    // If no whisper, return empty string
    if(!whisper.length){
        return '';
    }

    const lettersRegex = new RegExp(/\w/, 'g');
    const matches = Array.from(whisper.matchAll(lettersRegex));
    let actualSuspects = suspects;


    // If $ at the end, filter out suspects not finishing with the last whisper letter
    if('$' === whisper[whisper.length - 1]){

        // If no letters in whisper, return only the names with exact length as whisper
        if(!matches.length){
            return actualSuspects
                .filter(suspect => suspect.length === whisper.length - 1)
                .join(',');
        }

        // Get suspects finishing with the last whisper letter
        const lastLetter = whisper[whisper.length - 2];
        actualSuspects = suspects.filter(suspect => suspect[suspect.length - 1] === lastLetter);
        if(!actualSuspects.length){
            return '';
        }
    }

    if(!matches.length){
        return suspects.filter(suspect => suspect.length >= whisper.length ).join(',');
    }

    return actualSuspects
        .filter(suspect => {
            // Only return suspect which each whisper letter has the same index as the suspect name
            return matches.every(match =>  {
                const letterAt = suspect[match['index']]?.toLowerCase();
                return suspect.length >= match['index'] && match[0] === letterAt
            });
        })
        .join(',');
}

const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

 // -> 'Dracula'
//console.log(findTheKiller(whisper, suspects));

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

 // -> 'Freddy,Freddier,Fredderic'
//console.log(findTheKiller(whisper2, suspects2));

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

 // -> ''
//console.log(findTheKiller(whisper3, suspects3));

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

 // -> ''
//console.log(findTheKiller(whisper4, suspects4));

// "Pennywise,Leatherface,Agatha"
//console.log(findTheKiller('~~~~~~', ['Pennywise', 'Leatherface', 'Agatha']))

//"Agatha"
console.log(findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha']))