const randomActivityBtn = document.getElementById('randomActivityBtn')
randomActivityBtn.addEventListener('click', getRandomActivity)

function getRandomActivity() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById(
                'activityMessage'
            ).innerHTML = `✨<span class="activityGlam">&nbsp;${data.activity}&nbsp;</span>✨`

            displayImages()
        })
}

function displayImages() {
    const galleries = document.getElementsByClassName('gallery')
    let randomIndex = Math.floor(Math.random() * 10) + 1

    for (let gallery of galleries) {
        if (gallery.classList.contains('topGallery')) {
            gallery.classList.add('topGalleryImage')
        } else if (gallery.classList.contains('bottomGallery')) {
            gallery.classList.add('bottomGalleryImage')
        }

        gallery.style.backgroundImage = `url('./images/image-${randomIndex}.gif')`
    }
}
