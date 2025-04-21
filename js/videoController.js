document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("iframe");

  videos.forEach((video) => {
    video.style.display = "none";
  });

  const videoLinks = document.querySelectorAll(".video-link");
  videoLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      videos.forEach((video) => {
        video.style.display = "none";
      });

      const videoId = this.getAttribute("data-video");
      const selectedVideo = document.getElementById(videoId);
      if (selectedVideo) {
        selectedVideo.style.display = "block";
      }
    });
  });
});
