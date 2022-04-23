const authorizeBtn = document.getElementById('authorization')

async function authorization() {
        let idx = window.location.href.lastIndexOf('?code=')
        if (window.location.href.includes('?code')) {
            let url = ' https://osu.ppy.sh/oauth/token'

            let idx = window.location.href.lastIndexOf('?code=') + 6
            let code = window.location.href.slice(idx)
            console.log('Test:', code)
            let data = {
                "code": code,
                "client_id": 14338,
                "client_secret": "lnB9AtwwoREgoAatHBnpDbFr93KabxwyQ2CPac0h",
                "redirect_uri": "https://lilseec.github.io/SpotiBeatmaps",
                'grant_type': "authorization_code"
            }
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: JSON.stringify(data)
            })
            const json = await response.json()
            console.log('Успех:', json);
        } else {
            window.location.replace('https://osu.ppy.sh/oauth/authorize?response_type=code&client_id=14338&redirect_uri=https://lilseec.github.io/SpotiBeatmaps')
    }
}

window.addEventListener('load', authorization)