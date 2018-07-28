import React from 'react';
import './Modal.css'

class Modal extends React.Component {
  onOverlayClick() {
    this.props.onClose();
  }

  onDialogClick(event) {
    event.stopPropagation();
  }

  render() {
    const overlayStyle = this.props.overlayStyle ? this.props.overlayStyle : {};
    const contentStyle = this.props.contentStyle ? this.props.contentStyle : {};
    const dialogStyle = this.props.dialogStyle ? this.props.dialogStyle : {};
    return (
      <div>
        <div className="modal-overlay-div" style={overlayStyle} />
        <div className="modal-content-div" style={contentStyle} onClick={this.onOverlayClick.bind(this)}>
          <div className="modal-dialog-div" style={dialogStyle} onClick={this.onDialogClick}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;