// script.js

// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
    const audioElement = document.querySelector("audio");
    const songTitle = document.getElementById("song-title");

    if (audioElement && songTitle) {
        // Update the document title with the song name
        document.title = `Playing: ${songTitle.textContent}`;

        // Log to console when song is played/paused/ended
        audioElement.addEventListener("play", () => {
            console.log(`▶️ Playing: ${songTitle.textContent}`);
        });

        audioElement.addEventListener("pause", () => {
            console.log(`⏸️ Paused: ${songTitle.textContent}`);
        });

        audioElement.addEventListener("ended", () => {
            console.log(`✅ Finished: ${songTitle.textContent}`);
        });
    }

    // Highlight song on hover
    const albums = document.querySelectorAll(".album-art");
    albums.forEach(album => {
        album.addEventListener("mouseover", () => {
            album.style.transform = "scale(1.05)";
            album.style.transition = "transform 0.3s";
        });
        album.addEventListener("mouseout", () => {
            album.style.transform = "scale(1)";
        });
    });
});
