const findTheKiller = (whisper: string, suspects: string[]) => {
    let filteredSuspect: string[] = []
    let suspectsString = ''

    if (whisper.endsWith('$')) {
        const whisperLength = whisper.length - 1
        filteredSuspect = suspects.filter(suspect => suspect.length === whisperLength)
    } else {
        filteredSuspect = suspects
    }

    const matchingSuspects = 

    // 1.-,2.-
    if (/^[~]+\$$/.test(whisper) || /\$$/.test(whisper)) {
        suspects.forEach(suspect => {
            if ((suspect.length === (whisper.length - 1))) filteredSuspect.push(suspect)
        })
        suspects = filteredSuspect
    }

    console.log(suspects)

    // 3.-
    if (/^[~]+$/.test(whisper)) console.log(suspects.toString())

    // 4.-
    if (suspects.length > 0) {
        suspects.forEach(suspect => {
            let coincidencesCounter = 0

            for (let i = 0; i < whisper.length; i++) {
                if (whisper[i] !== '~' && whisper[i].toLowerCase() === suspect[i]?.toLowerCase()) coincidencesCounter++
            }

            if (coincidencesCounter == whisper.replaceAll('~', "").length) suspectsString.length === 0 ? suspectsString = suspectsString + `${suspect}` : suspectsString = suspectsString + `,${suspect}`


            for (let i = 0; i < whisper.length; i++) {
                if (whisper[i] !== '~' && suspect.includes(whisper[i].toLowerCase())) suspectsString.length === 0 ? suspectsString = suspectsString + `${suspect}` : suspectsString = suspectsString + `,${suspect}`
            }
        });
    }

    return suspectsString
}

const whisper4 = '~~~~~~$';
const suspects4 = ['Pennywise', 'Leatherface', 'Agatha']

console.log(findTheKiller(whisper4, suspects4)) // -> 'Dracula