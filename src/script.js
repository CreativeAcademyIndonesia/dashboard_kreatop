var data = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    reach: [100, 100, 700, 300, 100, 400, 100, 600],
    revenue: [200, 700, 200, 700, 300, 300, 200, 700],
    clients: [50, 300, 300, 50, 300, 200, 50, 250]
};

var options = {
    series: [{
        name: 'Reach',
        data: data.reach,
        color: '#732ECB'
    }, {
        name: 'Revenue',
        data: data.revenue,
        color: '#2ECB89'
    }, {
        name: 'Clients',
        data: data.clients,
        color: '#2EA5CB'
    }],
    chart: {
        type: 'bar',
        height: 240,
        stacked: false,
        background: 'transparent',
        toolbar: {
            show: false
        },
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 400,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '75%',
            borderRadius: 6,
            distributed: false
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: true,
        borderColor: '#282828',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    xaxis: {
        categories: data.months,
        labels: {
            style: {
                colors: '#676767',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight : 500
            }
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            show: true,
            width: 1,
            position: 'back',
            opacity: 0.3,
            stroke: {
                color: '#ffffff',
                width: 2,
                dashArray: 0
            }
        },
        tooltip: {
            enabled: false
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#676767',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight : 500
            }
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
        x: {
            show: false
        },
        y: {
            formatter: function(value, { seriesIndex }) {
                if (seriesIndex === 1) {
                    return '$' + value.toLocaleString();
                }
                return value.toLocaleString();
            }
        },
        style: {
            fontSize: '12px',
            fontFamily: 'Poppins'
        },
        // custom: function({ series, seriesIndex, dataPointIndex, w }) {
        //     var colors = ['#007AFF', '#2ECB89', '#CB372E'];
        //     var seriesNames = ['Reach', 'Revenue', 'Clients'];
        //     var tooltipContent = '<div class="flex flex-col gap-[10px] p-[10px] rounded-[16px] border border-[#282828] bg-[#111111]">';
            
        //     for (var i = 0; i < series.length; i++) {
        //         tooltipContent += `<div style="display: flex; align-items: center; gap : 8px; height : 21px;">
        //                           <span class="w-[12px] h-[12px] rounded-full bg-['${colors[i]}'] " style="background : ${colors[i]}"></span>
        //                           <span class="text-['${colors[i]}'] ml-[4px] font-semibold text-sm"> ${ i == 0 ? '$' : ''} ${series[i][dataPointIndex]} ${seriesNames[i]}</span>
        //                           </div>`;
        //     }
            
        //     tooltipContent += '</div>';
        //     return tooltipContent;
        // }
    },
    legend: {
        show: false,
    },
    states: {
        hover: {
            filter: {
                type: 'none'
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none'
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


function toogleSidebar(evt){
    const aside = evt.closest('aside')
    aside.classList.toggle('md:-right-[440px]')
    aside.classList.toggle('-right-[320px]')
    aside.classList.toggle('-right-0')
}
