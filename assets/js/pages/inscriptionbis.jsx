import React, { useState} from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import AxiosCenter from '../services/AxiosCenter';
import Loader from 'react-loader-spinner';
import ModalSuccess from '../component/Modal/ModalSuccess';
import ModalError from '../component/Modal/ModalError';
import '../../styles/inscriptionstyle.css';

const SignupSchema = Yup.object().shape({
  prenom: Yup.string()
    .min(3, 'Votre prénom doit contenir au moins 3 caractères !')
    .required('Veuillez compléter ce champ !!'),
  nom: Yup.string()
    .min(3, 'Votre nom doit contenir au moins 3 caractères!')
    .required('Veuillez compléter ce champ !!'),
  email: Yup.string().email('Le format de votre email n\'est pas valide !')
  .required('Veuillez compléter ce champ !!'),
  password: Yup.string()
  .min(5, 'Votre password doit contenir au moins 5 caractères!')
  .required('Veuillez compléter ce champ !!'),
  dateDeNaissance: Yup.string()
  .required('Veuillez compléter ce champ !!'),
  numeroRue:Yup.number()
  .required('Veuillez entrer le numéro de votre rue !!'),
  nomRue:Yup.string()
  .required("Veuillez entrer le nom de votre rue !!"),
  codePostal:Yup.number()
  .required("Veuillez entrer votre code Postal !!"),
  ville:Yup.string()
  .required("Veuillez entrer votre ville !!")

});

 const InscriptionBis = (props) => {

   const [errorServ, setErrorServ] = useState("");
   // Permet message pr dire que la commande a été passée
   const [ModalSuccessAPP,setModalSuccessAPP]=useState(false);

   const [ModalErrorAPP,setModalErrorAPP]=useState(false);

   const [loader, setLoader] = useState(false);

  return(
   <> 

   
   <div>
     <Formik
       initialValues={{ email: '',prenom:'',password: '',nom:'',dateDeNaissance:'',numeroRue:'', nomRue:'', codePostal:'', ville:'' }}
       validationSchema={SignupSchema}
       onSubmit={async values => {
        
              try{
                    setLoader(true)
                    setErrorServ("");
                    setModalSuccessAPP(false)
                    await AxiosCenter.inscriptionClient(values)
                    
                    .then(response => { if(response) {
                        setLoader(false);
                        setModalSuccessAPP(true);
                        setTimeout(()=>{
                              props.history.replace("/connexion");
                            },5001); 
                    }} )
                    .catch(error => { 
                        setErrorServ(error.response.data.violations[0].message);
                        setModalErrorAPP(true);                       
                        window.scrollTo(0,0); 
                        setLoader(false);                    
                    })
                    window.scrollTo(0,0);
              }catch (error) { console.log(error)}  
             
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
        
          <ModalSuccess ModalSuccessAPP = {ModalSuccessAPP} setModalSuccessAPP={setModalSuccessAPP} message="Bravo !! Votre inscription a réussie." message2= " Vous allez être redirigé vers la page d'accueil ou vous pourrez vous connecter." />
          <ModalError ModalErrorAPP = {ModalErrorAPP} setModalErrorAPP = {setModalErrorAPP} message = {errorServ} />

         <Form className = "container-form" onSubmit={handleSubmit}>
            <h2 className="text-uppercase mb-5" style = {{color : "black"}}> Inscription</h2>
            <div className="row">
                  <div className="col-12">
                        <h5 className="mb-5 text-uppercase" style = {{color : "black"}}> Informations et adresse du contact</h5>
                  </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                  <label className="form-label">Prénom</label>
                  <Field type="text"  
                        className={touched.prenom == null ? "form-control" : touched.prenom && errors.prenom != null ? "form-control is-invalid" : "form-control is-valid" }
                        onChange={handleChange} 
                        value={values.prenom} 
                        name="prenom" 
                        placeholder="Veuillez entrer votre prénom" />
                      {errors.prenom && touched.prenom ? (
                            <div className="invalid-feedback" >{errors.prenom}</div>
                      ) : null}
              </div>
              <div className="col-sm-12 col-md-6">
                  <label className="form-label">Nom</label>
                  <Field type="text"  
                        className={touched.nom == null ? "form-control" : touched.nom && errors.nom != null ? "form-control is-invalid" : "form-control is-valid"}
                        onChange={handleChange} 
                        value={values.nom} 
                        name="nom" 
                        placeholder="Veuillez entrer votre nom" />
                     {errors.nom && touched.nom ? (
                            <div className="invalid-feedback" >{errors.nom}</div>
                      ) : null}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                    <label className="form-label">Email</label>
                    <Field
                            className={touched.email == null ? "form-control" : touched.email && errors.email != null ? "form-control is-invalid" : "form-control is-valid"}
                            type="text"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Veuillez entrer votre email" 
                            autoComplete = "email"
                    />
                      {errors.email && touched.email ? (
                            <div className="invalid-feedback" >{errors.email}</div>
                      ) : null}
              </div>
              <div className="col-sm-12 col-md-6">
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
            </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label className="form-label">Date de Naissance</label>
                  <Field
                            className={touched.dateDeNaissance == null ? "form-control" : touched.dateDeNaissance && errors.dateDeNaissance != null ? "form-control is-invalid" : "form-control is-valid"}
                            type="date"
                            name="dateDeNaissance"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dateDeNaissance}
                            placeholder="Veuillez entrer votre date de naissance au format YYYY-MM-DD" 
                      />
                       {errors.dateDeNaissance && touched.dateDeNaissance ? (
                            <div className="invalid-feedback" >{errors.dateDeNaissance}</div>
                      ) : null}
                  </div>
              </div>
              <div className="row mb-3">
                  <div className="col-sm-12 col-md-5 col-xl-3">
                      <label className="form-label">Numero Rue</label>
                      <Field
                            className={touched.numeroRue == null ? "form-control" : touched.numeroRue && errors.numeroRue != null ? "form-control is-invalid" : "form-control is-valid"}
                            type="text"
                            name="numeroRue"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.numeroRue}
                            placeholder="Veuillez entrer votre numéro d'adresse" 
                      />
                      {errors.numreroRue && touched.numeroRue ? (
                            <div className="invalid-feedback" >{errors.numeroRue}</div>
                      ) : null}
                  </div>
                  <div className="col-sm-12 col-md-7 col-xl-9">
                      <label className="form-label">Nom Rue</label>
                      <Field
                            className={touched.nomRue == null ? "form-control" : touched.nomRue && errors.nomRue != null ? "form-control is-invalid" : "form-control is-valid"}
                            type="text"
                            name="nomRue"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nomRue}
                            placeholder="Veuillez entrer votre rue" 
                      />
                       {errors.nomRue && touched.nomRue ? (
                            <div className="invalid-feedback" >{errors.nomRue}</div>
                      ) : null}
                  </div>
              </div>
              <div className="row mb-3">
                <div className="col-xl-3 col-md-5 col-sm-12 ">
                    <label className="form-label">Code Postal</label>
                    <Field
                            className={touched.codePostal == null ? "form-control" : touched.codePostal && errors.codePostal != null ? "form-control is-invalid" : "form-control is-valid"}
                            type="text"
                            name="codePostal"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.codePostal}
                            placeholder="Veuillez entrer votre code Postal" 
                      />
                       {errors.codePostal && touched.codePostal ? (
                            <div className="invalid-feedback" >{errors.codePostal}</div>
                      ) : null}
                </div>
                <div className="col-xl-9 col-md-7 col-sm-12 ">
                      <label className="form-label">Ville</label>
                      <Field
                            className={touched.ville == null ? "form-control" : touched.ville && errors.ville != null ? "form-control is-invalid" : "form-control is-valid"}
                            type="text"
                            name="ville"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ville}
                            placeholder="Veuillez entrer votre ville" 
                      />
                       {errors.ville && touched.ville ? (
                            <div className="invalid-feedback" >{errors.ville}</div>
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
         </>
       )}
     </Formik>
   </div>
   </>
 )};

 export default InscriptionBis;
