import React from 'react';
import Modal from  'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../styles/modalSuccessStyle.css';

const ModalAvertissement = ({modalAvertissementAPP,setModalAvertissementAPP}) =>{
    const handleClose = () => {setModalAvertissementAPP(false)}

    return(
        

  <Modal
        show={modalAvertissementAPP}
        backdrop="static"
        keyboard={false}
        
    >
            <Modal.Body className="show-grid">
                <Container>
                <Row>
                    <Col xs={12} className="d-flex align-items-center text-justify" id="textmodalAvertissement">
                    Cette application n'a aucun but commercial. Tous les produits sont fictifs. <br></br><br></br>
                    Certains problêmes d'affichage peuvent apparaître sur les tablettes ou smartphones (en cours de résolution).<br></br>
                    Merci de bien vouloir nous remonter tout autre disfonctionnement à l'adresse située en bas de page. <br></br><br></br>
                    Bonne Navigation
                    </Col>
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer className="pt-0">
            <Container> 
                <Row>
                <Col s={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center">
                    <Button variant="secondary" onClick={handleClose} className="w-75 text-uppercase" id="buttoncloseAvertissement">
                        Ok
                    </Button>
                    </Col>
                </Row>
            </Container>
            </Modal.Footer>
    </Modal>
    )
}
export default ModalAvertissement;