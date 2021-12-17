import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';

class Pie extends Component {
    
    state = {
        data: [
            {
                "id": "Pune",
                "value": 2942
                
            },
            {
                "id": "Mumbai",
                "value": 3670
                
            },
            {
                "id": "Delhi",
                "value": 3640
                
            },
            {
                "id": "Bangalore",
                "value": 6020
                
            },
            {
                "id": "Hyderabad",
                "value": 4080
            }
        ],
    }

    render() {
        const { data} = this.state
        return (
            <div className="container" style={{height:500}}>
                
                <hr />
                <h1><center>Pie Chart</center></h1>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.4}
                    padAngle={0}
                    cornerRadius={4}
                    borderWidth={1.5}
                />
            </div>
        );
    }
}

export default Pie;
