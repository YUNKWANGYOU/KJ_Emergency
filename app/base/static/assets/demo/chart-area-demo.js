// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
$(document).ready(function () {
  $.ajax({
      url: "/admin-api/get-graph-data",
      type: "GET",
      success: function (data) {
          var heart_rate = [];
          var temperature = [];
          var humidity = [];
          for (var i in data) {
            heart_rate.push(data[i].Heart_Rate);
            temperature.push(data[i].Temperature);
            humidity.push(data[i].Humidity);
          }
          var str1 = document.getElementById("heart_rate");
          str1.innerHTML = heart_rate[0];

          var str2 = document.getElementById("temperature");
          str2.innerHTML = temperature[0];

          var str3 = document.getElementById("humidity");
          str3.innerHTML = humidity[0];

          var ctx1 = document.getElementById("myAreaChart");
          var myLineChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
              labels: ["-50 sec","-40 sec","-30 sec","-20 sec","-10 sec","Present"],
              datasets: [{
                label: "Sessions",
                lineTension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: heart_rate.reverse(),
                fill: false,
                lineTension: 0
              }],
            },
            options: {
              scales: {
                xAxes: [{
                  time: {
                    unit: 'date'
                  },
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    maxTicksLimit: 7
                  }
                }],
                yAxes: [{
                  ticks: {
                    min: 30,
                    max: 140,
                    maxTicksLimit: 5
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                  }
                }],
              },
              legend: {
                display: false
              }
            }
          });
          var ctx2 = document.getElementById("myAreaChart2");
          var myLineChart2 = new Chart(ctx2, {
            type: 'line',
            data: {
              labels: ["-50 sec","-40 sec","-30 sec","-20 sec","-10 sec","Present"],
              datasets: [{
                label: "Sessions",
                lineTension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: temperature.reverse(),
                fill: false,
                lineTension: 0
              }],
            },
            options: {
              scales: {
                xAxes: [{
                  time: {
                    unit: 'date'
                  },
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    maxTicksLimit: 7
                  }
                }],
                yAxes: [{
                  ticks: {
                    min: 10,
                    max: 40,
                    maxTicksLimit: 5
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                  }
                }],
              },
              legend: {
                display: false
              }
            }
          });
          var ctx3 = document.getElementById("myAreaChart3");
          var myLineChart3 = new Chart(ctx3, {
            type: 'line',
            data: {
              labels: ["-50 sec","-40 sec","-30 sec","-20 sec","-10 sec","Present"],
              datasets: [{
                label: "Sessions",
                lineTension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: humidity.reverse(),
                fill: false,
                lineTension: 0
              }],
            },
            options: {
              scales: {
                xAxes: [{
                  time: {
                    unit: 'date'
                  },
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    maxTicksLimit: 7
                  }
                }],
                yAxes: [{
                  ticks: {
                    min: 10,
                    max: 50,
                    maxTicksLimit: 5
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                  }
                }],
              },
              legend: {
                display: false
              }
            }
          });
        },
        error: function (data) {
        }
    });
});
