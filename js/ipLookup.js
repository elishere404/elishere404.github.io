document.getElementById('lookupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var ipAddress = document.getElementById('ipInput').value;
    var resultDiv = document.getElementById('result');

    fetch(`https://vpnapi.io/api/${ipAddress}?key=3e9355fd7b59494fb867544bd81252dc`)
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = `
                <p>IP: ${checkEmpty(data.ip)}</p>
                <p>City: ${checkEmpty(data.location.city)}</p>
                <p>Region: ${checkEmpty(data.location.region)}</p>
                <p>Country: ${checkEmpty(data.location.country)}</p>
                <p>Continent: ${checkEmpty(data.location.continent)}</p>
                <p>Latitude: ${checkEmpty(data.location.latitude)}</p>
                <p>Longitude: ${checkEmpty(data.location.longitude)}</p>
                <p>Time Zone: ${checkEmpty(data.location.time_zone)}</p>
                <p>ISP: ${checkEmpty(data.network.autonomous_system_organization)}</p>
                <p>Network: ${checkEmpty(data.network.network)}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = '<p>Error retrieving IP information.</p>';
            console.error('Error:', error);
        });
});

function checkEmpty(value) {
    return value === "" ? "??" : value;
}
