import React, {Component} from 'react';
import {headerCols} from '../../util/tableConst';
import {getUserListAPI} from '../../actions/Action';

class ListUser extends Component {

    constructor (props) {
        super(props);

        this.state = {
            userList : []
        };
    }

    // render table header 
    renderTableHeader() { 
        return ( 
            <thead>
                <tr> 
                    {
                        headerCols.map((colData) => {
                            return <th>{colData.label}</th>
                        })
                    }
                </tr>
            </thead>
        )
    }

    // render table body
    renderTableData() { 
        let userList = this.state.userList;

        return ( 
            <tbody> 
                {
                    userList.map((rowData) => {
                        return (
                            <tr>
                                {
                                    headerCols.map((colData) => { 
                                        return (
                                            <td>
                                                {rowData[colData.key]}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }

    //set the data returned from get User List API call
    setUserList(results) {
        this.setState({
            userList : results.data
        })
    }

    //display if any error from API calls.
    showError(err) {
    }

    componentDidMount() {
       getUserListAPI(this);
    }

    render() {

        return(
            <div>
                <table >
                    {this.renderTableHeader()}
                    {this.renderTableData()}
                </table>
            </div>
        );
    };

}

export default ListUser;