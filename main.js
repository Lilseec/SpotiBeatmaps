const authorizeBtn = document.getElementById('authorization')

function authorization() {
    if (window.location.includes('?code')) {
        let idx = window.location.lastIndexOf('?code=')
        console.log(idx)
    } else {
        window.location.replace('https://osu.ppy.sh/oauth/authorize?response_type=code&client_id=14338&redirect_uri=https://lilseec.github.io/SpotiBeatmaps')
    }
}

window.addEventListener('load', authorization)