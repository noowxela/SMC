function plotTweetLength(legend, labels, values){

    // define the chart data
    var chartData = {
        labels : labels,
        datasets : [{
            label: legend,
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(7, 200, 248, 0.904)",
            borderColor: "rgba(7, 200, 248, 0.904)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#ffe",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data : values,
            spanGaps: false
        }]
    };

    // get chart canvas
    var ctx = document.getElementById("tweetLength_chart").getContext("2d");

    // create the chart using the chart canvas
    myChart = new Chart(ctx, {
        type: 'scatter',
        data: chartData,
    });
}  