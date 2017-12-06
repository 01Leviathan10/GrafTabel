import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import ReactTable from 'react-table'
class GrafPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.binders();
    }
    initialState() {
        return {
            data: [50, 25, 45, 45, 45, 45, 45, 100],
            limit: 10,
            width: 100,
            height: 35,
            margin: 5
        }
    }
    binders() {

    }
    render() {
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }];
        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
        }]

        return (
            <React.Fragment>
                <Sparklines {...this.state}  >
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="mean" />

                </Sparklines>
                <ReactTable
                    data={data}
                    columns={columns}
                />
            </React.Fragment>
        );
    }
}
export default GrafPage;