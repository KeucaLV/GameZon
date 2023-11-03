export async function routerAuth(navigate ,token) {

    let cleanData = { token };

    let response = await fetch('http://localhost/gamezon/GameZon/grupa/selects/Auth.php', {
        method: 'POST',
        body: JSON.stringify(cleanData),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    });

    response = await response.json();

    if (response.status === 403) {
        navigate('/Login');
    }
    if(response.status === 200) {
        return true;
    }
}