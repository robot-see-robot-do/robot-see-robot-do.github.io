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

// Function to set up thumbnail click events
function setupThumbnailClickEvents() {
  const thumbnails = document.querySelectorAll('.thumbnail-btn');
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const iframeId = this.id.replace('-thumb', '');
      showIframe(iframeId);
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
}
// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);