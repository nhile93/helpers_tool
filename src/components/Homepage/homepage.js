import React, { Component } from 'react'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="homepage">
        <div className="d-flex w-100 flex-row d-inline-flex justify-content-between align-items-center align-self-center pb-4">
          <h3 class="mb-0">Lich ap tai thang 8/2020</h3>
          <img src="./images/logo.png" alt="MSB bank" />
        </div>

        <table className="table-job w-100" border="1" cellpadding="2" cellspacing="2">

          <tr>
            <td rowspan="2">STT</td>
            <td rowspan="2">Họ tên</td>
            <td rowspan="2">Ghi chú</td>
            <td>Thứ 7</td>
            <td>CN</td>
            <td>Thứ 2</td>
            <td>Thứ 3</td>
            <td>Thứ 4</td>
            <td>Thứ 5</td>
            <td>Thứ 6</td>
          </tr>
          <tr>
            <td>01/08</td>
            <td>02/08</td>
            <td>03/08</td>
            <td>04/08</td>
            <td>05/08</td>
            <td>06/08</td>
            <td>07/08</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Ngakw</td>
            <td>TN</td>
            <td>C1</td>
            <td> </td>
            <td>C1</td>
            <td>C3</td>
            <td>C2</td>
            <td>C2</td>
            <td>C1</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Nhan so 2</td>
            <td>TN</td>
            <td>C3</td>
            <td> </td>
            <td>C2</td>
            <td>C1</td>
            <td>C2</td>
            <td>C2</td>
            <td>C3</td>
          </tr>

        </table>
      </div>
    );
  }
}
 
export default Homepage;