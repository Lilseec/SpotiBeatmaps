const authorizeBtn = document.getElementById('authorization')

async function authorization() {
        let idx = window.location.href.lastIndexOf('?code=')
        if (window.location.href.includes('?code')) {
            let url = ' https://osu.ppy.sh/oauth/token'

            let idx = window.location.href.lastIndexOf('?code=') + 6
            let code = window.location.href.slice(idx)

            let data = {
                'client_id': '14338',
                'client_secret': 'lnB9AtwwoREgoAatHBnpDbFr93KabxwyQ2CPac0h',
                'code': code,
                'grant_type': 'authorization_code',
                'redirect_uri': 'https://lilseec.github.io/SpotiBeatmaps'
            }
            
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Access-Control-Allow-Origin': 'https://osu.ppy.sh'
                }
            })
            const json = await response.json()
            console.log('Успех:', json);
        } else {
            window.location.replace('https://osu.ppy.sh/oauth/authorize?response_type=code&client_id=14338&redirect_uri=https://lilseec.github.io/SpotiBeatmaps')
    }
}

window.addEventListener('load', authorization)