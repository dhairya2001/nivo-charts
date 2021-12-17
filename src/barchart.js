import React,{Component} from "react";
import {ResponsiveBar} from '@nivo/bar';

class Bar extends Component {
    state={
        data:[
            {
                id:"Pune",
                '0 to 1 years':550,
                '1 to 3 years':800,
                '3 to 6 years':750,
                '6 to 12 years':680,
                '12 to 20 years':102,
                '20+ years':60
            },
            {
                id:"Mumbai",
                '0 to 1 years':680,
                '1 to 3 years':1000,
                '3 to 6 years':980,
                '6 to 12 years':780,
                '12 to 20 years':150,
                '20+ years':80
            },
            {
                id:"Delhi",
                '0 to 1 years':600,
                '1 to 3 years':1200,
                '3 to 6 years':1050,
                '6 to 12 years':560,
                '12 to 20 years':180,
                '20+ years':50
            },
            {
                id:"Bangalore",
                '0 to 1 years':1200,
                '1 to 3 years':1800,
                '3 to 6 years':1500,
                '6 to 12 years':1150,
                '12 to 20 years':250,
                '20+ years':120
            },
            {
                id:"Hyderabad",
                '0 to 1 years':400,
                '1 to 3 years':900,
                '3 to 6 years':1300,
                '6 to 12 years':1200,
                '12 to 20 years':190,
                '20+ years':90
            }
        ],
        
    }
    
    
    render(){
        const{data}=this.state
        return(
            <div className="container" style={{height:'600px'}}>
                <h1><center>Horizontal Stacked Bar Chart</center></h1>
                <ResponsiveBar
                    data={data}
                    keys={[ '0 to 1 years', '1 to 3 years', '3 to 6 years', '6 to 12 years', '12 to 20 years', '20+ years' ]}
                    
                    indexBy="id"
                    margin={{ top: 50, right: 200, bottom: 50, left: 90 }}
                    padding={0.2}
                    layout="horizontal"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 2,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: 45,
                            lineWidth: 3,
                            spacing: 20
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: '3 to 6 years'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: '12 to 20 years'
                            },
                            id: 'dots'
                        }
                    ]}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Year of Exp',
                        legendPosition: 'middle',
                        legendOffset: 35
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Location',
                        legendPosition: 'middle',
                        legendOffset: -70
                    }}
                    enableGridX={true}
                    enableGridY={false}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'right',
                            direction: 'column',
                            justify: false,
                            translateX: 200,
                            translateY: 40,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 15,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" : "+e.indexValue}}
                />
            </div>
            
        )
    }
}


export default Bar;
