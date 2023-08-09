function getSearchVolume() {
    const keyword = document.getElementById("keywordInput").value;
    const API_KEY="AIzaSyDfWlAF-2WmVwOgGK3L_Y8WIC84CE9h1Rk";

    // Make a GET request to your own backend endpoint
    fetch(`https://www.googleapis.com/youtube/v3/search=${encodeURIComponent(keyword)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displaySearchVolume(data);
        })
        .catch(error => {
            console.error("API error:", error);
        });
}

// Rest of the code remains the same
