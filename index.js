function getRandomActivity() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById(
                'activity-message'
            ).textContent = `${data.activity}`
        })
}

const randomActivityBtn = document.getElementById('randomActivityBtn')
randomActivityBtn.addEventListener('click', getRandomActivity)
