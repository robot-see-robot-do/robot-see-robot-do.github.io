// For main results object carousel -- left/right arrow clicks to navigate
function results_slide_left() {
  slider_window = document.getElementById('results-objs-scroll');
  slider_window.scrollLeft -= 150;
}
function results_slide_right() {
  slider_window = document.getElementById('results-objs-scroll');
  slider_window.scrollLeft += 150;
}
