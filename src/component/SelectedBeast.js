import React from 'react';
import Main from './main';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';



class SelectedBeast extends React.Component {
    render() {
        return (

            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Dialog >
                        <Modal.Header closeButton show={this.props.show} onHide={this.props.close}>
                            <Modal.Title>{this.props.details.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card.Img onClick={this.displayBeast} variant="top" src={this.props.details.url} alt={this.props.details.dataTitle} title={this.props.details.dataTitle} />
                            <Card.Text><p>{this.props.details.prag}</p></Card.Text>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.close}>Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </div>



        );
    }

}

export default SelectedBeast;