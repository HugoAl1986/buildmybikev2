
import Modal from  'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../styles/modalSuccessStyle.css';
import React, {useEffect, useState} from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import AxiosCenter from "../../services/AxiosCenter";
import Loader from 'react-loader-spinner';
import ModalSuccess from './ModalSuccess';

const ModalModifInfo = ({ModalModifInfoAPP, setModalModifInfoAPP, loader, newData, setNewData, userData}) => {

   // Permet message pr dire que la commande a été passée
   const [ModalSuccessAPP,setModalSuccessAPP]=useState(false);
   // Ajout message du Modal de modification réussie
   const [ajoutMessage,setAjoutMessage] = useState(null);
   const [SubmitForm, setSubmitForm] = useState(false);

    const handleClose = () => {setModalModifInfoAPP(false)};

    const SignupSchema = Yup.object().shape({
     
      password: Yup.string()
      .min(5, 'Votre password doit contenir au moins 5 caractères!')
      .required('Veuillez compléter ce champ !!'),
      confpassword: Yup.string()
      .required("Veuillez compléter ce champs")
      .oneOf([Yup.ref('password'), null], 'Les mots de passes sont différents !'),
     
    });

    return ( 
       <>

<Formik
       initialValues={{ password: '',confPassword:'' }}
       validationSchema={SignupSchema}
       onSubmit={async values => {

                    const EnvoieDataRequete = values.password;
                    setNewData(...newData,EnvoieDataRequete);
        
                     // Si l'email est modifié redirection vers la page d'accueuil pour une nouvelle conenction.
                    // l'email étant utilisé par Symfony pour la gestion d'un Utilisateur
                    if(userData.email !== newData.email)
                    {     
                        try{ 
                            console.log(newData);                         
                            await AxiosCenter.putClient(id,newData)
                            .then(response => { if(response){  
                                
                                setAjoutMessage("Votre email a été modifié, vous allez être redirigé vers la page d'accueil où vous pourrez vous connecter !!!");
                                setModalSuccessAPP(true);
                                AxiosCenter.Deconnection();
                                setTimeout(()=>{
                                    props.history.replace("/connexion");
                                    },6000)

                            }})    
                        }
                        catch (error){console.log(error)}
                        }
                    else{
                    // Pas de redirection car email non modifié
                        try {
                            console.log(newData);
                            await AxiosCenter.putClient(id,newData) 
                            .then(response => { if(response) {
                                setModalSuccessAPP(true)
                                setSubmitForm(true)
                                setDisableInput(true)
                                setLoader(false);
                                console.log(response)
                            }})
                          
                            }
                        catch (error)
                        {
                        console.log(error)
                        setSubmitForm(true)
                        setLoader(true);
                        setErrorServ(" Une erreur est survenue lors de la modification")
                        };
                        }
             
       }}
     >
       {({
         values,
         errors,
         touched,
         handleBlur,
         handleChange,
         handleSubmit
         /* and other goodies */
       }) => (
       <>
                <ModalSuccess 
                    ModalSuccessAPP = {ModalSuccessAPP} 
                    setModalSuccessAPP={setModalSuccessAPP} 
                    message="Votre modification a été effectuée."  
                    message2 = {ajoutMessage}
                />

            {ModalModifInfoAPP ? 

                <Modal
                show={ModalModifInfoAPP}
                backdrop="static"
                keyboard={false}
              >
                  <Modal.Body className="show-grid">
                      <Container>
                        <Row>
                          <Col xs={12} className="d-flex justify-content-center align-items-center">
                          <Form className = "container-fluid p-5" onSubmit={handleSubmit}>
                              <div className="row">
                                <div className="col-6">
                                    <label className="form-label">Password</label>
                                        <Field
                                            className={touched.password == null ? "form-control" : touched.password && errors.password != null ? "form-control is-invalid" : "form-control is-valid"}
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder="Veuillez entrer votre password" 
                                            autoComplete="password"
                                        />
                                        {errors.password && touched.password ? (
                                            <div className="invalid-feedback" >{errors.password}</div>
                                          ) : null}
                                    
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Confirmation Password</label>
                                        <Field
                                            className={touched.confPassword == null ? "form-control" : touched.confPassword && errors.confPassword != null ? "form-control is-invalid" : "form-control is-valid"}
                                            type="password"
                                            name="confPassword"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confPassword}
                                            placeholder="Veuillez entrer votre confPassword" 
                                            autoComplete="confPassword"
                                        />
                                        {errors.confPassword && touched.confPassword ? (
                                          <div className="invalid-feedback" >{errors.confPassword}</div>
                                        ) : null}
                                    
                                  </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-12">
                                            <button type="submit" className="btnInscription mt-4">Inscription
                                                  {loader && <Loader className="ml-2 d-inline-block" type="ThreeDots" color="black" height={20} width={20}/>}
                                            </button>
                                      </div>
                                  </div>
                          </Form>
                          </Col>
                        </Row>
                      </Container>
                  </Modal.Body>
                  <Modal.Footer className="pt-0">
                    <Container> 
                      <Row>
                        <Col s={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center">
                            <Button type="submit" variant="secondary" onClick={handleClose} className="w-75 text-uppercase" id="buttonclosesuccess">
                              Ok
                            </Button>
                          </Col>
                      </Row>
                    </Container>
                  </Modal.Footer>
              </Modal>
                  : null }
                 
                  </>
                   
                  )}
                  </Formik>
                  </>
            );
}
 
export default ModalModifInfo;