// For main results object carousel -- left/right arrow clicks to navigate
function results_slide_left() {
  slider_window = document.getElementById('results-objs-scroll');
  slider_window.scrollLeft -= 150;
}
function results_slide_right() {
  slider_window = document.getElementById('results-objs-scroll');
  slider_window.scrollLeft += 150;
}


function vid_slide_left() {
  slider_window = document.getElementById('result-video-scroll');
  // get the width of the window
  width = slider_window.offsetWidth + 4;
  slider_window.scrollLeft -= width;
}
function vid_slide_right() {
  slider_window = document.getElementById('result-video-scroll');
  // slider_window.scrollLeft += 300;
  // get the width of the window
  width = slider_window.offsetWidth + 4;
  slider_window.scrollLeft += width;
}
