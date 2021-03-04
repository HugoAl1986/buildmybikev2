import React from 'react';
import danger from '../../images/danger.svg';
import Modal from  'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../styles/modalErrorStyle.css'


const ModalError = ({ModalErrorAPP, isAuthenticated, setModalErrorAPP,message}) => {

  const handleClose = () => {setModalErrorAPP(false)}

    return ( 
     
        <>
        {ModalErrorAPP == true && (isAuthenticated == undefined || isAuthenticated == false) ?
         <Modal
         show={ModalErrorAPP}
         backdrop="static"
         keyboard={false}
       >
         <Modal.Body className="show-grid">
            <Container>
              <Row>
                <Col xs={2} className="d-flex justify-content-center align-items-center">
                  <img src={danger} alt="iconeDanger" id="imgdanger" className="img-fluid"/>
                </Col>
                <Col xs={10} className="d-flex justify-content-start align-items-center" id="textmodal">
                  {message}
                </Col>
              </Row>
            </Container>
         </Modal.Body>
         <Modal.Footer className="pt-0">
           <Container> 
             <Row>
               <Col s={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center">
                  <Button variant="secondary" onClick={handleClose} className="w-75 text-uppercase" id="buttoncloseerror">
                    Ok
                  </Button>
                </Col>
             </Row>
           </Container>
         </Modal.Footer>
       </Modal>
           : null }
           </>
     );
}
 
export default ModalError;