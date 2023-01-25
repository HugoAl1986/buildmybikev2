import React, {useEffect, useState} from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import AxiosCenter from "../services/AxiosCenter";
import Loader from 'react-loader-spinner';
import dateformat from 'dateformat';
import ModalSuccess from '../component/Modal/ModalSuccess';
import ModalErrorServeur from '../component/Modal/ModalErrorServeur';
import '../../styles/mesinfosstyle.css';


// Gestion des erreurs du formulaire avec la librairie Yup

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
    confpassword: Yup.string()
    .required("Veuillez compléter ce champs")
    .oneOf([Yup.ref('password'), null], 'Les mots de passes sont différents !'),
    dateDeNaissance: Yup.date()
    .required('Veuillez compléter ce champ !!'),
    numeroRue:Yup.number()
    .required('Veuillez entrer le numéro de votre rue !!'),
    nomRue:Yup.string()
    .required("Veuillez entrer le nom de votre rue !!"),
    codePostal:Yup.number()
    .required("Veuillez entrer votre code Postal !!"),
    ville:Yup.string()
    .required("Veuillez entrer votre ville !!"),
  
  });


const MesInfos = ({onLogout,props,isAuthenticated}) => {
    const [userData, setUserData] = useState({
        prenom : "",
        nom : "",
        email : "",
        password : "",
        codePostal: "",
        ville : "",
        numeroRue: "",
        nomRue: "",
        dateDeNaissance: ""

    });
    const [errorServ, setErrorServ] = useState("");
    const [disableInput, setDisableInput] = useState(true);
    const [loader, setLoader] = useState(false);
    const [loaderDate, setLoaderDate] = useState(true);
    const [click,setClick] = useState(false);
    const [SubmitForm, setSubmitForm] = useState(false);
    const [DataCommande, setDataCommande] = useState([]);
    const [loaderCommande, setLoaderCommande] = useState(false);
    // Ajout Modal pr dire que la modification a réussi
    const [ModalSuccessAPP,setModalSuccessAPP]=useState(false);
    // Ajout Modal pr dire qu'une erreur est survenue
    const [ModalErrorAPP,setModalErrorAPP]=useState(false);
    // Ajout message du Modal de modification réussie
    const [ajoutMessage,setAjoutMessage] = useState(null);

useEffect(()=>{
   const id = AxiosCenter.getID();

   AxiosCenter.getCommande(id)
   .then(response => {
       setDataCommande(response.data['hydra:member']), setLoaderCommande(true)})
   .catch(error => {console.log(error); setLoaderCommande(true)});
   
   AxiosCenter.getClient(id)
   .then(response => {
       const user = { 
                        prenom : response.data.prenom,
                        nom : response.data.nom,
                        email : response.data.email,
                        password : response.data.password,
                        codePostal: response.data.codePostal,
                        ville : response.data.ville,
                        numeroRue: response.data.numeroRue,
                        nomRue: response.data.nomRue,
                        dateDeNaissance: dateformat(response.data.dateDeNaissance,"yyyy-mm-dd")
                    }
    setUserData(user);
    
})             
   .catch(error => {setModalErrorAPP(true);console.log(error)})  
},[])


// Execution lors de la modification d'un utilisateur
const handleClick = () => {
    setSubmitForm(false)
    setClick(true)
    setLoaderDate(false)
    return setDisableInput(false)
}
    return (     
        <>  
        
            <Formik
            initialValues={{ 
                                prenom : userData.prenom,
                                nom : userData.nom,
                                email : userData.email,
                                password : "",
                                confpassword : "",
                                codePostal: userData.codePostal,
                                ville : userData.ville,
                                numeroRue: userData.numeroRue,
                                nomRue: userData.nomRue,
                                dateDeNaissance: userData.dateDeNaissance
                            }}
            validationSchema={SignupSchema}
            onSubmit={async values => {
                                const id = AxiosCenter.getID()
                                setModalSuccessAPP(false);
                                setAjoutMessage(null);
                                setLoaderDate(true);
                                setLoader(true);
                                const newDataUser = { 
                                        prenom : values.prenom,
                                        nom : values.nom,
                                        email : values.email,
                                        codePostal: parseInt(values.codePostal),
                                        password:values.password,
                                        ville : values.ville,
                                        numeroRue: parseInt(values.numeroRue),
                                        nomRue: values.nomRue,
                                        dateDeNaissance: values.dateDeNaissance
                                                    }

                    // Si l'email est modifié redirection vers la page d'accueuil pour une nouvelle conenction.
                    // l'email étant utilisé par Symfony pour la gestion d'un Utilisateur
                    if(userData.email !== newDataUser.email)
                    {     
                        try{ 
                                                     
                            await AxiosCenter.putClient(id,newDataUser)
                            .then(response => { if(response){  
                                
                                setAjoutMessage("Votre email a été modifié, vous allez être redirigé vers la page d'accueil où vous pourrez vous connecter !!!");
                                setModalSuccessAPP(true);
                                AxiosCenter.Deconnection();
                                onLogout(false)
                                setTimeout(()=>{
                                    props.history.replace("/connexion");
                                    },6000)

                            }})    
                        }
                        catch (error){
                            setModalErrorAPP(true);
                            setLoader(false);
                            console.log(error)}
                        }
                    else{
                    // Pas de redirection car email non modifié
                        try {
                            console.log(newDataUser);
                            await AxiosCenter.putClient(id,newDataUser) 
                            .then(response => { if(response) {
                                setModalSuccessAPP(true)
                                setSubmitForm(true)
                                setDisableInput(true)
                                setLoader(false);
                            }})
                          
                            }
                        catch (error)
                        {
                        console.log(error.response)
                        setSubmitForm(true)
                        setLoader(false);
                        setModalErrorAPP(true)
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
                    redirection = {ajoutMessage !== null ? props : null}
                    onLogout={ajoutMessage !== null ? onLogout : null}
                />
                <ModalErrorServeur 
                    modalServError={ModalErrorAPP}
                    isAuthenticated={isAuthenticated}
                    setModalServError={setModalErrorAPP}
                    message="Désolé une erreur est survenue lors de la modification de vos données, veuillez nous faire remonter le message !!!"
                    />
                <div className="container-global-mesinfos">
                    <div className="container-mesinfos-titre">
                        <h2>Mes commandes</h2>
                    </div>
                    <div className="container-mescommandes"> 
                        <div className="container-mescommandes-header">

                            <div className="col-2">#</div>
                            <div className="col-5">Date</div>
                            <div className="col-5">Montant</div>
                        </div>
                    
                        {!loaderCommande ? 
                            <div className="container-mescommandes-attente">
                                <div className="col-2">{"Patientez..."}</div>
                                <div className="col-5">{"Patientez..."}</div>
                                <div className="col-5">{"Patientez..."}</div>
                            </div>
                        : DataCommande.length == 0 ?
                            <div className="col-12 container-commandenulle w-100">Vous n'avez toujours pas effectué de commandes !</div>
                        : DataCommande.map(commande =>
                            <div className="container-mescommandes-data" key={commande.id}>
                                <div className="col-2">{commande.numCommande}</div>
                                <div className="col-5">{dateformat(commande.dateCommande,"yyyy-mm-dd")}</div>
                                <div className="col-5">{commande.montant} &#8364;</div>
                            </div>
                        )}
                    </div>                 
                    <Form className = "container-mesinfos-form" onSubmit={handleSubmit}>
                    <h2 className="text-uppercase mb-5" style = {{color : "black"}}> Mes informations</h2>
                    <div className="row mb-3">
                    <div className="col-12 col-sm-6 container-formMesInfos-input">
                        <label className="form-label">Prénom</label>
                        <Field type="text"  
                                className={SubmitForm == true ? "form-control" : touched.prenom == null ? "form-control" : errors.prenom && touched.prenom == null ? "form-control is-valid" : errors.prenom == null && touched.prenom!== null ? "form-control is-valid" : "form-control is-invalid"}                               
                                value={click == false && values.prenom == "" ? values.prenom = userData.prenom : click && values.prenom =="" ? "" : values.prenom} 
                                name="prenom"
                                onChange={handleChange} 
                                disabled = {disableInput} 
                                placeholder = "Veuillez patienter ..."
                                />
                            {errors.prenom && touched.prenom ? (
                                    <div className="invalid-feedback" >{errors.prenom}</div>
                            ) : null}
                    </div>
                    <div className="col-12 col-sm-6 container-formMesInfos-input">
                        <label className="form-label">Nom</label>
                        <Field type="text"  
                                className={SubmitForm == true ? "form-control" : touched.nom == null || undefined ? "form-control" : errors.nom && touched.nom == null ? "form-control is-valid" : errors.nom == null && touched.nom!== null ? "form-control is-valid" : "form-control is-invalid"}
                                onChange={handleChange} 
                                value={click == false && values.nom == "" ? values.nom= userData.nom : click && values.nom =="" ? "" : values.nom} 
                                name="nom" 
                                disabled = {disableInput}
                                placeholder = "Veuillez patienter ..."
                                />
                            {errors.nom && touched.nom ? (
                                    <div className="invalid-feedback" >{errors.nom}</div>
                            ) : null}
                    </div>
                    </div>
                        <div className="row mb-3">
                            <div className="col-12 container-formMesInfos-input">
                                <label className="form-label">Email</label>
                                <Field
                                        className={SubmitForm == true ? "form-control" : touched.email == null ? "form-control" : errors.email && touched.email == null ? "form-control is-valid" : errors.email== null && touched.email !== null ? "form-control is-valid" : "form-control is-invalid"}
                                        type="text"
                                        name="email"
                                        disabled = {disableInput} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={click == false && values.email == "" ? values.email = userData.email : click && values.email =="" ? "" : values.email}
                                        autoComplete = "email"
                                        placeholder = "Veuillez patienter ..."
                                />
                                {errors.email && touched.email ? (
                                        <div className="invalid-feedback" >{errors.email}</div>
                                ) : null}
                            </div>
                        </div>
                        
                    <div className="row mb-3">
                        <div className="col-12 container-formMesInfos-input">
                            <label className="form-label">Date de Naissance</label>
                            <Field
                                        className={SubmitForm == true ? "form-control" : touched.dateDeNaissance == null ? "form-control" : errors.dateDeNaissance && touched.dateDeNaissance == null ? "form-control is-valid" : errors.dateDeNaissance == null && touched.dateDeNaissance!== null ? "form-control is-valid" : "form-control is-invalid"}
                                        type={loaderDate && "text" || "date"}
                                        name="dateDeNaissance"
                                        disabled = {disableInput} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value= {click == false && loaderDate == true && values.dateDeNaissance == "" ? values.dateDeNaissance = userData.dateDeNaissance : click && loaderDate == false && values.dateDeNaissance =="" ? "" : values.dateDeNaissance}
                                        placeholder = "Veuillez patienter ..." 
                                    

                                />
                                {errors.dateDeNaissance && touched.dateDeNaissance ? (
                                        <div className="invalid-feedback" >{errors.dateDeNaissance}</div>
                                ) : null}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-sm-4 col-md-3 container-formMesInfos-input">
                            <label className="form-label">Numero Rue</label>
                            <Field
                                    className={SubmitForm == true ? "form-control" : touched.numeroRue == null ? "form-control" : errors.numeroRue && touched.numeroRue == null ? "form-control is-valid" : errors.numeroRue == null && touched.numeroRue!== null ? "form-control is-valid" : "form-control is-invalid"}
                                    type="number"
                                    name="numeroRue"
                                    disabled = {disableInput} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={click == false && values.numeroRue == "" ? values.numeroRue = userData.numeroRue : click && values.numeroRue == "" ? "" : values.numeroRue}
                                    placeholder = "Veuillez patienter ..."
                            />
                            {errors.numreroRue && touched.numeroRue ? (
                                    <div className="invalid-feedback" >{errors.numeroRue}</div>
                            ) : null}
                        </div>
                        <div className="col-12 col-sm-8 col-md-9 container-formMesInfos-input">
                            <label className="form-label">Nom Rue</label>
                            <Field
                                    className={SubmitForm == true ? "form-control" : touched.nomRue == null ? "form-control" : errors.nomRue && touched.nomRue == null ? "form-control is-valid" : errors.nomRue == null && touched.nomRue!== null ? "form-control is-valid" : "form-control is-invalid"}
                                    type="text"
                                    name="nomRue"
                                    disabled = {disableInput} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={click == false && values.nomRue == "" ? values.nomRue = userData.nomRue : click && values.nomRue =="" ? "" : values.nomRue}
                                    placeholder = "Veuillez patienter ..."
                            />
                            {errors.nomRue && touched.nomRue ? (
                                    <div className="invalid-feedback" >{errors.nomRue}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-sm-4 col-md-3 container-formMesInfos-input">
                            <label className="form-label">Code Postal</label>
                            <Field
                                    className={SubmitForm == true ? "form-control" : touched.codePostal == null ? "form-control" : errors.codePostal && touched.codePostal == null ? "form-control is-valid" : errors.codePostal == null && touched.codePostal!== null ? "form-control is-valid" : "form-control is-invalid"}
                                    type="text"
                                    name="codePostal"
                                    disabled = {disableInput} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={click == false && values.codePostal == "" ? values.codePostal = userData.codePostal : click && values.codePostal=="" ? "" : values.codePostal}
                                    placeholder = "Veuillez patienter ..."
                            />
                            {errors.codePostal && touched.codePostal ? (
                                    <div className="invalid-feedback" >{errors.codePostal}</div>
                            ) : null}
                        </div>
                        <div className="col-12 col-sm-8 col-md-9 container-formMesInfos-input">
                            <label className="form-label">Ville</label>
                            <Field
                                    className={SubmitForm == true ? "form-control" : touched.ville == null ? "form-control" : errors.ville && touched.ville == null ? "form-control is-valid" : errors.ville== null && touched.ville !== null ? "form-control is-valid" : "form-control is-invalid"}
                                    type="text"
                                    name="ville"
                                    disabled = {disableInput} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={click == false && values.ville == "" ? values.ville = userData.ville : click && values.ville =="" ? "" : values.ville}
                                    placeholder = "Veuillez patienter ..."
                            />
                            {errors.ville && touched.ville ? (
                                    <div className="invalid-feedback" >{errors.ville}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-3 pb-2">
                            <p style={{color:"black"}}> Afin de valider vos changements, veuillez entrer votre mot de passe : </p>
                        </div>
                    </div>
                    <div className="row mb-3">
                            <div className="col-12 col-sm-6 container-formMesInfos-input">
                                    <label className="form-label">Password</label>
                                    <Field
                                            className={SubmitForm == true ? "form-control" : touched.password == null ? "form-control" : errors.password && touched.password== null ? "form-control is-valid" : errors.password== null && touched.password !== null ? "form-control is-valid" : "form-control is-invalid"}
                                            type="password"
                                            name="password"
                                            disabled = {disableInput } 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder = "Veuillez entrer votre mot de passe"
                                            autoComplete="password"
                                    />
                                    {errors.password && touched.password ? (
                                            <div className="invalid-feedback" >{errors.password}</div>
                                    ) : null}
                            </div>
                            <div className="col-12 col-sm-6 container-formMesInfos-input">
                                    <label className="form-label">Confirmation Password</label>
                                    <Field
                                            className={SubmitForm == true ? "form-control" : touched.confpassword == null ? "form-control" : errors.confpassword && touched.confpassword== null ? "form-control is-valid" : errors.confpassword== null && touched.confpassword !== null ? "form-control is-valid" : "form-control is-invalid"}
                                            type="password"
                                            name="confpassword"
                                            disabled = {disableInput } 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confpassword}
                                            placeholder = "Veuillez entrer la confirmation de votre mot de passe"
                                            autoComplete="confpassword"
                                    />
                                    {errors.confpassword && touched.confpassword ? (
                                            <div className="invalid-feedback" >{errors.confpassword}</div>
                                    ) : null}
                            </div>
                        </div>
                    <div className="row container-mesinfos-button">
                        <div className="col-12">
                            <button type="button" className="btnModifInfos mt-4" onClick={handleClick}>Modification</button>
                            <button type="submit" className="btnInscrInfos mt-4">Confirmation
                                {loader && <Loader className="ml-2 d-inline-block" type="ThreeDots" color="black" height={20} width={20}/>}
                            </button>
                        </div>
                    </div>
                </Form>
                </div>
                </>
            )}
            </Formik>
        </>
      )
}
 
export default MesInfos;