// methods that modify the origina array (mutability)

// shift()

const colors=['yellow','blue','red']

const removedColors=colors.shift()
console.log(colors) // ['blue','red']
console.log(removedColors) // 'yellow'

const newColors=colors.unshift('pink','purple')
console.log(colors) // ['pink','purple','blue','red']
console.log(newColors) // 4

function managePlaylist(playlist,newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist=['Sweater Weather','What you know','Eventually']
const newSongToAdd='The Adults Are Talking'
const updatedPlaylist=managePlaylist(initialPlaylist,newSongToAdd)

console.log('Initial playlist: ',initialPlaylist) // ['Sweater Weather','What you know','Eventually']
console.log('New song to add: ',newSongToAdd) // 'The Adults Are Talking'
console.log('Updated playlist: ',updatedPlaylist) // ['The Adults Are Talking','What you know','Eventually']