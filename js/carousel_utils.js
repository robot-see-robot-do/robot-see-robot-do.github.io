function vid_slide_left() {
  slider_window = document.getElementById('result-video-scroll');
  // get the width of the window
  width = slider_window.offsetWidth + 4;
  if (slider_window.scrollLeft <= 0) {
    // If at the beginning, jump to the end
    slider_window.scrollLeft = slider_window.scrollWidth - width;
  } else {
    // Make sure we move to multiples of the width. This is especially important because of smoothScroll.
    slider_window.scrollLeft = Math.round((slider_window.scrollLeft - width) / width) * width;
  }
}

function vid_slide_right() {
  slider_window = document.getElementById('result-video-scroll');
  // get the width of the window
  width = slider_window.offsetWidth + 4;
  if (slider_window.scrollLeft + width >= slider_window.scrollWidth) {
    // If at the end, jump to the beginning
    slider_window.scrollLeft = 0;
  } else {
    // Make sure we move to multiples of the width. This is especially important because of smoothScroll.
    slider_window.scrollLeft = Math.round((slider_window.scrollLeft + width) / width) * width;
  }
}
