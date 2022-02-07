function getRandomActivity() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById(
                'activityMessage'
            ).innerHTML = `✨<span class="activityGlam">&nbsp;${data.activity}&nbsp;</span>✨`

            displayBirb()
        })
}

const randomActivityBtn = document.getElementById('randomActivityBtn')
randomActivityBtn.addEventListener('click', getRandomActivity)

function displayBirb() {
    let birbs = document.getElementsByClassName('birb')
    for (let birb of birbs) {
        birb.style.display = 'block'
    }
}
