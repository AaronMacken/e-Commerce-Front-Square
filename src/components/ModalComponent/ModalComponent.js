import React, { Component } from 'react';
import ModalMUI from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default class ModalComponent extends Component {
    render() {
        return (
            <ModalMUI
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={this.props.isOpenModal}
                onClose={this.props.closeModal}
                className="modal"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={this.props.isOpenModal}>
                    <div className="paper">
                        <h2 className="transition-modal-title">Products are currently available for in-store purchase only</h2>
                        <p className="transition-modal-description">We are currently in the process of integrating to our new credit card payment provider.</p>
                        <p className="transition-modal-description">We will be up and running as soon as this process is completed. We thank you for your patience.</p>
                        <p className="transition-modal-description">If you have any questions, please call (336) 661-8043</p>
                    </div>
                </Fade>
            </ModalMUI>

        )
    }
}
