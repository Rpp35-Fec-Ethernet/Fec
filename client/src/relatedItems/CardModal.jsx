import React from 'react';
// import './styles/Questions.css'

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  closePopup () {
    this.props.toggleModal();
  }

  render() {
    return(
      <div className="modal-card" data-testid="test-modal">
        <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
        <table>
          <tr>
            <th>Category</th>
            <th></th>
            <th>Category</th>
          </tr>
          <tr>
            <td>
              value
            </td>
            <td>
              name
            </td>
            <td>
              value
            </td>
          </tr>
        </table>
      </div>

    )
  }
}

export default CardModal;