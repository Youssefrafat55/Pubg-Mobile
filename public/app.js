async function fetchPlayerData() {
    const playerId = document.getElementById('playerId').value;
    if (!playerId) {
        alert('Please enter a player ID');
        return;
    }

    const response = await fetch(`/player/${playerId}`);
    const data = await response.json();

    const playerDataDiv = document.getElementById('playerData');
    if (data.error) {
        playerDataDiv.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        playerDataDiv.innerHTML = `
            <h2>Player Data:</h2>
            <p>Name: ${data.name}</p>
            <p>ID: ${data.id}</p>
        `;
    }
}
