// chart js start
'use strict'

var myCanvas = document.getElementById("sales");
myCanvas.height = "350";

var myCanvasContext = myCanvas.getContext("2d");
var gradientStroke1 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
gradientStroke1.addColorStop(0, 'rgba(86, 56, 255, 0.8)');
gradientStroke1.addColorStop(1, 'rgba(86, 56, 255, 0.2)');

var gradientStroke2 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
gradientStroke2.addColorStop(0, 'rgba(1, 184, 255, 0.8)');
gradientStroke2.addColorStop(1, 'rgba(1, 184, 255, 0.2) ');
var myChart = new Chart(myCanvas, {
	type: 'line',
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
		type: 'line',
		datasets: [{
			label: 'Total Win',
			data: [47, 45, 154, 38, 156, 24, 65, 31, 137, 39, 162, 51, 35, 141, 35, 27, 93, 53],
			backgroundColor: gradientStroke1,
			borderColor: '#8760fb',
			pointBackgroundColor: '#fff',
			pointHoverBackgroundColor: gradientStroke1,
			pointBorderColor: '#8760fb',
			pointHoverBorderColor: gradientStroke1,
			pointBorderWidth: 0,
			pointRadius: 0,
			pointHoverRadius: 0,
			lineTension: 0.2,
			borderWidth: 2,
			fill: 'origin'
		}, {
			label: 'Total Loss',
			data: [61, 27, 54, 143, 119, 46, 47, 45, 54, 138, 56, 24, 165, 31, 37, 39, 62, 51, 35, 41],
			backgroundColor: gradientStroke2,
			borderColor: '#01b8ff',
			pointBackgroundColor: '#fff',
			pointHoverBackgroundColor: gradientStroke2,
			pointBorderColor: '#01b8ff',
			pointHoverBorderColor: gradientStroke2,
			pointBorderWidth: 0,
			pointRadius: 0,
			pointHoverRadius: 0,
			lineTension: 0.2,
			borderWidth: 2,
			fill: 'origin'
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		tooltips: {
			mode: 'index',
			titleFontSize: 12,
			titleFontColor: '#000',
			bodyFontColor: '#000',
			backgroundColor: '#fff',
			cornerRadius: 3,
			intersect: false,
		},
		stepsize: 200,
		min: 0,
		max: 400,
		legend: {
			display: true,
			labels: {
				usePointStyle: false,
			},
		},
		scales: {
			x: {
				display: true,
				grid: {
					display: true,
					drawBorder: false,
					zeroLineColor: 'rgba(142, 156, 173,0.1)',
					color: 'rgba(119, 119, 142, 0.08)'
				},
				ticks: {
					autoSkip: true,
					color: '#b0bac9'
				},
				scaleLabel: {
					display: false,
					labelString: 'Month',
					fontColor: 'transparent'
				}
			},
			y: {
				ticks: {
					color: "#b0bac9",
				},
				display: true,
				grid: {
					display: true,
					drawBorder: false,
					zeroLineColor: 'rgba(142, 156, 173,0.1)',
					color: "rgba(142, 156, 173,0.1)",
				},
				scaleLabel: {
					display: false,
					labelString: 'sales',
					fontColor: 'transparent'
				}
			}
		},
		title: {
			display: false,
			text: 'Normal Legend'
		},
	}
});
// chart js end

// full screen

// ______________Full screen
$(document).on("click", ".fullscreen-button", function toggleFullScreen() {
	$('html').addClass('fullscreenie');
	if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
		if (document.documentElement.requestFullScreen) {
			document.documentElement.requestFullScreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullScreen) {
			document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		}
	} else {
		$('html').removeClass('fullscreenie');
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
});
// inspect
// document.onkeydown = (e) => {
//     if (e.key == 123) {
//         e.preventDefault();
//     }
//     if (e.ctrlKey && e.shiftKey && e.key == 'I') {
//         e.preventDefault();
//     }
//     if (e.ctrlKey && e.shiftKey && e.key == 'C') {
//         e.preventDefault();
//     }
//     if (e.ctrlKey && e.shiftKey && e.key == 'J') {
//         e.preventDefault();
//     }
//     if (e.ctrlKey && e.key == 'U') {
//         e.preventDefault();
//     }
// };


// moon-sun

var icon = "moon";
$('#my-icon').click(function () {
	if (icon == "moon") {
		icon = "sun";
	} else {
		icon = "moon";
	}
	$('#icon').attr("data-feather", icon);
	feather.replace();
	
});
// $('#my-icon').click(switchdark);
// $('#my-icon').click(switchbg);

// calendar js

