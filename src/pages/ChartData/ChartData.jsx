import React from 'react'
import './Chart.css'
const ChartData = () => {
    return (
        <div>
            <div className="all-table">
                <div className="table_text">
                    <h2 className='table-name'>Size Chart</h2>
                    <h4 className='table-data'>Pants Size Chart</h4>
                    <div className="table_side">
                        <table>
                            <tr>
                                <th>SIZE</th>
                                <th>LENGTH</th>
                                <th>HIP</th>
                                <th>WEIGHT</th>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>113cm</td>
                                <td>89cm</td>
                                <td>50cm</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>114cm</td>
                                <td>100cm</td>
                                <td>55cm</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>115cm</td>
                                <td>122cm</td>
                                <td>60cm</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>116cm</td>
                                <td>135cm</td>
                                <td>65cm</td>
                            </tr>
                            <tr>
                                <td>3XL</td>
                                <td>118cm</td>
                                <td>157cm</td>
                                <td>75cm</td>
                            </tr>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ChartData