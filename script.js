$(() => {
  $(".results-slide-row").each((switcher_index, switcher) => {
    const $switcher = $(switcher);

    $switcher.children().each((switcher_child_index, child) => {
      const $child = $(child);
      const $input = $("<button>", {
        class: "thumbnail-btn",
        id: $child.data("id"),
      });
      const $img = $("<img>", {
        class: "thumbnails",
        alt: "paper",
        src: $child.data("img-src"),
      });
      $input.append($img);
      const $label = $("<label>", {
        text: $child.data("label"),
        class: "thumbnail_label",
      });
      $input.append($label);
      $switcher.append($input);
    });
  });
});
// Array of iframe IDs
const iframeIds = ['bear', 'nerfgun', 'scissors','sunglasses','redbox','ledlight','stapler','wirecutters','usbplug'];
const videoIds = ['bear_video', 'nerfgun_video', 'redbox_video', 'scissors_video', 'sunglasses_video', 'ledlight_video', 'stapler_video', 'wirecutters_video', 'usbplug_video'];

// Function to show the selected iframe and hide others
function showIframe(iframeId) {
  iframeIds.forEach(id => {
    const iframe = document.getElementById(id);
    console.log(iframe);
    if (iframe) {
      if (id === iframeId) {
        iframe.classList.add('show');
      } else {
        iframe.classList.remove('show');
      }
    }
  });
}
// Function to show the selected video and hide others
function showVideo(videoId) {
  videoIds.forEach(id => {
    const video = document.getElementById(id);
    if (video) {
      if (id === videoId) {
        video.classList.add('show');
        video.querySelector('video').play(); // Play the selected video
      } else {
        video.classList.remove('show');
        video.querySelector('video').pause(); // Pause other videos
        video.querySelector('video').currentTime = 0; //Also restart all others
      }
    }
  });
}

// Function to set up thumbnail click events
function setupThumbnailClickEvents() {
  const thumbnails = document.querySelectorAll('.thumbnail-btn');
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const iframeId = this.id.replace('-thumb', '');
      showIframe(iframeId);
      showVideo(iframeId + '_video');
    });
  });
}

// Initialize the page
function initializePage() {
  setupThumbnailClickEvents();
  
  // Show the first iframe by default
  if (iframeIds.length > 0) {
    showIframe(iframeIds[0]);
  }
  if (videoIds.length > 0) {
    showVideo(videoIds[0]);
  }
}
// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);