const authorizeBtn = document.getElementById('authorization')

async function authorization() {
        let url = ' https://osu.ppy.sh/oauth/token'

        let data = {
            "client_id": 14338,
            "client_secret": "lnB9AtwwoREgoAatHBnpDbFr93KabxwyQ2CPac0h",
            "grant_type": "client_credentials",
            "scope": "public"
        }
            
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            })
        const json = await response.json()
        console.log('Успех:', json);
        
}

window.addEventListener('load', authorization)