app.directive('chartDirective', function($parse, $timeout) {
  return {
    restrict: 'E',
    template: '<div id="container"></div>',
    replace: true,
    scope: {
      data: '=',
      config: '='
    },
    link: function(scope, element, attribute) {
        var chart = Highcharts.chart('container', {
        chart: {
          zoomType: 'x'
        },
        title: {
          text: 'Fund transfer'
        },
        subtitle: {
          text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Amount'
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                  1,
                  Highcharts.Color(Highcharts.getOptions().colors[0])
                    .setOpacity(0)
                    .get('rgba')
                ]
              ]
            },
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          }
        },

        series: [
          {
            type: 'area',
            name: 'Amount',
            data: scope.data
          }
        ]
      });

      scope.seriesData = [];
      scope.categories = [];

      scope.$watch("data", function (newValue) {
        chart.series[0].setData(newValue, true);
      }, true);
    },
    controller: function($scope) {}
  };
});
