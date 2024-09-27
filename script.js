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
    // console.log(iframe);
    if (iframe) {
      if (id === iframeId) {
        iframe.classList.add('show');
        iframe.src = $(iframe).data('src');
      } else {
        iframe.classList.remove('show');
        iframe.src = "";
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

let currentThumbnail = 0;
let thumbnailFromIndex = {}
let thumbnailCount = 0;

// Function to set up thumbnail click events
function setupThumbnailClickEvents() {
  $('.thumbnail-btn').each((index, thumbnail) => {
    thumbnailCount += 1;
    thumbnailFromIndex[index] = thumbnail;
    $(thumbnail).click(function() {
      const buttonId = $(thumbnail).attr('id');
      if (buttonId === undefined) return;
      const iframeId = buttonId.replace('-thumb', '');

      currentThumbnail = index;
      $('.thumbnail-btn').css('opacity', '');
      $(thumbnail).css('opacity', '1.0');
      showIframe(iframeId);
      showVideo(iframeId + '_video');

      // Make sure the new thumbnail is visible.
      const slider_window = document.getElementById('results-objs-scroll');
      slider_window.scrollLeft = thumbnail.offsetLeft - slider_window.offsetWidth / 2;
    });
  });

  $(thumbnailFromIndex[0]).click();
}

// For main results object carousel -- left/right arrow clicks to navigate
function results_slide_left() {
  const newIndex = ((currentThumbnail - 1 + thumbnailCount) % thumbnailCount);
  const newThumbnail = thumbnailFromIndex[newIndex];
  $(newThumbnail).click();
}
function results_slide_right() {
  const newIndex = (currentThumbnail + 1) % thumbnailCount;
  const newThumbnail = thumbnailFromIndex[newIndex];
  $(newThumbnail).click();
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

// // Get event listener for when window resized
// window.addEventListener('resize', () => {
//   // Resize the video arrows to be in the right place.
//   const prev_arr = document.getElementById('vid-slide-arrow-prev');
//   const next_arr = document.getElementById('vid-slide-arrow-next');
//   console.log("foo", prev_arr.style);
// });
