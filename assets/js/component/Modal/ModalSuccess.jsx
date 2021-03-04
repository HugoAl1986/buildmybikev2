import React from 'react';
import success from '../../images/success.svg';
import Modal from  'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../styles/modalSuccessStyle.css';
import AxiosCenter from "../../services/AxiosCenter";

const ModalSuccess = ({ModalSuccessAPP, setModalSuccessAPP, message, message2,redirection,onLogout}) => {

    const handleClose = () => {
      setModalSuccessAPP(false)
      console.log(redirection)
      if(redirection && onLogout){
        onLogout(false);
        AxiosCenter.Deconnection();
        redirection.history.replace("/connexion");
      }
    };

    return ( 
       <>
            {ModalSuccessAPP ? 

                <Modal
                show={ModalSuccessAPP}
                backdrop="static"
                keyboard={false}
              >
                  <Modal.Body className="show-grid">
                      <Container>
                        <Row>
                          <Col xs={2} className="d-flex justify-content-center align-items-center">
                            <img src={success} alt="iconeSuccess" id="imgsuccess" className="img-fluid"/>
                          </Col>
                          <Col xs={10} className="d-flex align-items-center text-justify" id="textmodalsuccess">
                           {message} {message2!= null ? <><br></br> {message2}</> : null}

                          </Col>
                        </Row>
                      </Container>
                  </Modal.Body>
                  <Modal.Footer className="pt-0">
                    <Container> 
                      <Row>
                        <Col s={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center">
                            <Button variant="secondary" onClick={handleClose} className="w-75 text-uppercase" id="buttonclosesuccess">
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
 
export default ModalSuccess;