function getRandomActivity() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById(
                'activityMessage'
            ).textContent = `✨ ${data.activity} ✨`
            document
                .getElementById('activityMessage')
                .classList.add('activityGlam')
        })
}

const randomActivityBtn = document.getElementById('randomActivityBtn')
randomActivityBtn.addEventListener('click', getRandomActivity)
