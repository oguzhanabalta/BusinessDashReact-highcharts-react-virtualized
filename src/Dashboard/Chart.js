import React, {useContext} from "react";
import {Card} from "./Card";
import { render } from 'react-dom'
import {darkerGray ,lightGrey} from "./GlobalStyle";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {chartData} from "./Data";
import {ThemeContext} from "./Dashboard";

function getOptions(dark) {
    return {
        chart: {
            height: '360px',
            type: 'column',
            backgroundColor: dark ? darkerGray: 'white',
            style: {
                fontFamily: `'Blinker', sans-serif`,
            }
        },


        title: {
            text: 'Revenue by Product (Ürün Gelirleri)',
            style: {
                color:dark ? lightGrey: 'black',
            }
        },

        xAxis: {
            labels: {
                style:{
                    color:dark ? lightGrey: 'black',
                }
            },
            categories: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            gridLineColor: dark ? 'grey':lightGrey,
            labels: {
                style:{
                    color:dark ? lightGrey: 'black',
                }
            },
            allowDecimals: false,
            min: 0,
            reversedStacks: false,

            title: {

                style:{
                    color:dark ? lightGrey: 'black',
                },
                text: 'Billion of Dollars'
            }
        },

        tooltip: {
            pointFormat:
                '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.0f}</b> ({point.percentage:.0f}%)<br/> ',
            shared: true,
            backgroundColor: dark ? darkerGray: 'white',
            style:{
                color:dark ? lightGrey: 'black',
            }
        },

        plotOptions: {
            series: {
                borderWidth: 0,
            },
            column: {
                stacking: 'normal'
            },
        },
        legend: {
            itemStyle: {
                color:dark ? lightGrey: 'black',
            },
        },
        series: chartData,
    };
}

export function Chart(){
    const [theme, setTheme]=useContext(ThemeContext)
    const dark=theme==='dark';
    return <Card height={400} dark={dark}>
        <HighchartsReact
            highcharts={Highcharts}
            options={getOptions(dark)}
        />

    </Card>
}