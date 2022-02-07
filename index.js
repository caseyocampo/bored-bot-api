function getRandomActivity() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById(
                'activityMessage'
            ).innerHTML = `✨<span class="activityGlam"> ${data.activity} </span>✨`
        })
}

const randomActivityBtn = document.getElementById('randomActivityBtn')
randomActivityBtn.addEventListener('click', getRandomActivity)
