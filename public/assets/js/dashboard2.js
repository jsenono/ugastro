import ApexCharts from 'apexcharts'

  

  // =====================================
  // Revenue Updates
  // =====================================
  var options = {
    series: [
      {
        name: "Footware",
        data: [1.5, 2.7, 2.2, 3.6, 1.5],
      },
      {
        name: "Fashionware",
        data: [-2.8, -1.1, -2.5, -1.5, -1.2],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      fontFamily: "Plus Jakarta Sans,sans-serif",
      foreColor: "#adb0bb",
      height: 270,
      stacked: true,
      offsetX: -20
    },
    colors: ["cornflowerblue", "blue"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "70%",
        columnWidth: "20%",
        borderRadius: [5],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: -4,
      max: 4,
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        "Jan",
        "Fab",
        "Mar",
        "Apr",
        "May",
      ],
      show: false,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      }
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#revenue-chart"), options);
  chart.render();




  // =====================================
  // Revenue Updates
  // =====================================
  var options = {
    color: "#adb5bd",
    series: [55, 55, 55],
    labels: ["Expance", "Revenue", "Profit"],
    chart: {
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        donut: {
          size: '88%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: '#7C8FAC',
              fontSize: '20px',
              fontWeight: "600",
              label: '$500,458',
            },
          },
        },
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["cornflowerblue", "#EAEFF4", "green"],

    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#sales-overview"), options);
  chart.render();



  
  // =====================================
  // monthly-earning
  // =====================================
  var options = {
    chart: {
      id: "monthly-earning",
      type: "area",
      height: 56,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: 'monthly earnings',
        color: "cornflowerblue",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.10,
        opacityTo: 0,
        stops: [20, 180],
      },
    },


    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#monthly-earning"), options).render();


  
  
  // =====================================
  // Sales
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [25, 35, 20, 25, 40, 25],
      },
      {
        name: "",
        data: [35, 40, 20, 35, 40, 35],
      },
      {
        name: "",
        data: [40, 25, 60, 40, 20, 40],
      },
    ],
    chart: {
      type: 'bar',
      height: 85,
      width: '100%',
      stacked: true,
      stackType: '100%',
      fontFamily: "Plus Jakarta Sans', sans-serif",
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ["cornflowerblue", "green", "#272727"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: [3],
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'around',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false,
      width: 1,
      colors: ['rgba(0,0,0,0.01)']
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    axisBorder: {
      show: false
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      }
    },
  };

  var chart = new ApexCharts(document.querySelector("#sales"), options);
  chart.render();



  // =====================================
  // Sales two
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [100, 60, 35, 90, 35, 100]
      },
    ],
    chart: {
      type: 'bar',
      height: 25,
      fontFamily: "Plus Jakarta Sans', sans-serif",
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ["cornflowerblue"],
    grid: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '100%',
        borderRadius: 4,
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['rgba(0,0,0,0.01)']
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    axisBorder: {
      show: false
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      }
    },
  };

  var chart = new ApexCharts(document.querySelector("#sales-two"), options);
  chart.render();



  // =====================================
  // growth
  // =====================================
  var options = {
    chart: {
      id: "growth",
      type: "area",
      height: 25,
      sparkline: {
        enabled: true,
      },
      group: "growth",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        colors: ["cornflowerblue"],
        data: [0,10,10,10,35,45,30,30,30,50,52,30,25,45,50,80,60,65]
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  new ApexCharts(document.querySelector("#growth"), options).render();





// });
