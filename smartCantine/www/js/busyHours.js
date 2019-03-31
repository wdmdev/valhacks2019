$(document).ready(function () {
    var ctx = document.getElementById('busy').getContext('2d');
    new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', 
            '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'],
            datasets: [{
                label: 'Busy Hours - Amount of People',
                backgroundColor: 'rgb(29, 124, 207)',
                borderColor: 'rgb(29, 124, 207)',
                data: [20, 20, 18, 17, 17, 20, 35, 50, 100, 121, 110, 90, 70, 40, 20, 10]
            }]
        },

        // Configuration options go here
        options: {}
    });
});