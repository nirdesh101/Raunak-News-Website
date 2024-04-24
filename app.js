document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "aab0c42d214c4cf8800790deb68974c0"; // Your API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const newsSection = document.getElementById("newsSection");
        
        data.articles.forEach(article => {
            const newsCard = `
                <div class="news-card">
                    <img src="${article.urlToImage}" alt="${article.title}">
                    <div class="card-content">
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read More</a>
                    </div>
                </div>
            `;

            newsSection.innerHTML += newsCard;
        });
    })
    .catch(error => {
        console.error("Error fetching news:", error);
    });
});
