$(document).ready(function() {
    $('.progress-bar').circularProgress({
        color: 'white',
        line_width: 18,
        height: '300px',
        width: '300px',
        percent: 0,
        starting_position: 0,
        easing: 'linear'
    }).circularProgress('animate', 100, 6000);
})