import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import './line.less'
class Line extends Component {
    constructor() {
        super()
        this.state = {
            option:{
                title: {
                    text: '年数据统计',
                    // subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['月入住率', '月收入']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '月入住率',
                        type: 'bar',
                        data: [12.0, 14.9, 27.0, 50.2,175.3, 76.7, 135.6, 162.2, 64.6, 40.0, 88.4, 39.3],
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },
                    {
                        name: '月收入',
                        type: 'bar',
                        data: [24, 15.9, 39.0, 70.4, 200 , 70.7, 175.6, 182.2, 79, 53.8, 96.0, 47.3],
                        markPoint: {
                            data: [
                                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    }

                ]
            }


        }
    }
    render() {
        let { option } = this.state
        return (
            <div style={{height:'500px',marginTop:'80px'}}>
                {/* <h3>柱状图</h3> */}
                <ReactEcharts option={option}></ReactEcharts>
            </div>
        );
    }
}

export default Line;