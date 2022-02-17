const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sounds => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sounds

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sounds).play()
    })

    document.getElementById('buttons').
    appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sounds => {
        const song = document.getElementById(sounds)

        song.pause()
        song.currentTime = 0;
    })
}

// append means to add(something) as an attachment or supplement. In this case it is used to create a button to be associated forEach sound.