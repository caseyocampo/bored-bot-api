const randomActivityBtn = document.getElementById('randomActivityBtn')
randomActivityBtn.addEventListener('click', getRandomActivity)

const removeGifBtn = document.getElementById('removeGifBtn')
removeGifBtn.addEventListener('click', handleRemoveGif)

const showGifBtn = document.getElementById('showGifBtn')
showGifBtn.addEventListener('click', handleShowGif)

function handleRemoveGif() {
    const galleries = document.getElementsByClassName('gallery')
    for (let gallery of galleries) {
        gallery.style.display = 'none'
    }
    removeGifBtn.style.display = 'none'
    showGifBtn.style.display = 'block'
}

function handleShowGif() {  
    const galleries = document.getElementsByClassName('gallery')
    for (let gallery of galleries) {
        if (gallery.style.display = 'none') {
            gallery.style.display = 'block'
            removeGifBtn.style.display = 'block'
            showGifBtn.style.display = 'none'
        }
    }
}

function getRandomActivity() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById(
                'activityMessage'
            ).innerHTML = `✨<span class="activityGlam">&nbsp;${data.activity}&nbsp;</span>✨`

            displayImages()
        })

        removeGifBtn.style.display = 'block'
}

function displayImages() {
    const galleries = document.getElementsByClassName('gallery')
    const numOfImages = 10
    let randomIndex = Math.floor(Math.random() * numOfImages) + 1

    for (let gallery of galleries) {
        if (gallery.classList.contains('topGallery')) {
            gallery.classList.add('topGalleryImage')
        } else if (gallery.classList.contains('bottomGallery')) {
            gallery.classList.add('bottomGalleryImage')
        }

        gallery.style.backgroundImage = `url('./images/image-${randomIndex}.gif')`
    }
}
