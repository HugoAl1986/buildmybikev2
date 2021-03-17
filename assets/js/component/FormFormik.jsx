import React from 'react';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import '../../styles/formFormikstyle.css'


const FormFormik = (
    {panier,prix,prevPanier,
    bikeBleu,bikeNoirJaune,bikeRougeNoir,bikeOrange,bikeVert,bikeNoir,bikeRouge,bikeJaune,bikeRougeJaune,bikeBlanc,bikeGris,bikeBleuNoir,dataCouleur,dataBike}) => {

    const newPrix = prix;
        
    return (
        <Formik
                    initialValues={{ taille: '', couleur: '', finition: '', blocage:'', freins:'',prix:prix }}
                    validationSchema={Yup.object({
                        taille: Yup.string().matches(/(S|M|L|XL)/, {message : "Veuillez choisir une taille !" })
                        .required("Veuillez choisir une taille !"),
                        couleur: Yup.string().max(15,"Veuillez choisir une couleur !")
                        .required("Veuillez choisir une couleur !"),
                        finition: Yup.string().matches(/(brillant|mat)/, {message : "Veuillez choisir une finition !"})
                        .required('Veuillez choisir une finition !'),
                        blocage: Yup.string().matches(/(rapide|traversant)/, {message : "Veuillez choisir un type de blocage !"})
                        .required("Veuillez choisir un type de blocage !"),
                        freins:  Yup.string().matches(/(disques|patins)/, {message : "Veuillez choisir un type de freins !"})
                        .required("Veuillez choisir un type de freins !"),
                    })}
                    onSubmit= {(values,{ resetForm }) => {
                        
                        const couleur = values.couleur
                       if(values.couleur =="bleu")
                            {values.couleur = bikeBleu}
                       else if(values.couleur =="orange")
                            {values.couleur = bikeOrange}
                        else if(values.couleur == "rougejaune")
                            {values.couleur = bikeRougeJaune}
                        else if (values.couleur == "blanc" )
                            {values.couleur = bikeBlanc}
                        else if (values.couleur == "gris")
                            {values.couleur = bikeGris}
                        else if (values.couleur == "jaune") 
                            {values.couleur = bikeJaune} 
                        else if (values.couleur == "noir")
                            {values.couleur = bikeNoir}
                        else if (values.couleur == "noirjaune")
                            {values.couleur = bikeNoirJaune}
                        else if(values.couleur == "rougenoir")
                            {values.couleur = bikeRougeNoir}
                        else if (values.couleur == "rouge")
                            {values.couleur = bikeRouge}
                        else if (values.couleur == "bleunoir")
                            {values.couleur = bikeBleuNoir}
                        else if (values.couleur == "vert")
                            {values.couleur = bikeVert}
                            resetForm();
                        
                      
                      
                        const newData = {
                            
                            cadre : dataBike.cadre,
                            modele : dataBike.modele,
                            couleur : couleur,
                            taille : values.taille,
                            freins : values.freins,
                            boitier :"pressfit",
                            blocage : values.blocage,
                            finition : values.finition,
                            type : dataBike.type,
                            prix : values.prix,
                            couleurURL : values.couleur,
                            kitURL : dataBike.url
                        }
                        panier([...prevPanier, newData]) 
                  
                    }}     
                    >    
              
        {({errors,handleSubmit, touched, values})=>

            ( 
                <>
                    <Form className="form-group col-12 container-form-formik" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="col-12">
                                    <h5 className="text-dark text-uppercase titre-configuration"> CONFIGURER VOTRE CADRE {dataBike.type} </h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="is-invalid">
                                            <label className="pt-2 pb-2">TAILLE </label> <sup>&#128949;</sup>
                                            <Field as="select" name = "taille" 
                                                    className={ touched.taille && errors.taille ? "custom-select is-invalid" : "custom-select"}
                                                    value={values.taille} >
                                                    <option defaultValue> Choisis ta taille</option>
                                                    <option value="S">S</option>
                                                    <option value="M">M</option>
                                                    <option value="L">L</option>
                                                    <option value="XL">XL</option>
                                            </Field>
                                        </div>
                                        {touched.taille && errors.taille ? (<div className="invalid-feedback">{errors.taille}</div> ) : null}
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                    <div className="is-invalid">
                                            <label className="pt-2 pb-2">Couleur </label> <sup>&#128949;</sup>
                                            <Field as="select" name = "couleur" className={touched.couleur && errors.couleur? "custom-select is-invalid" : "custom-select"}
                                                value={values.couleur} >
                                                    <option defaultValue> Choisis ta couleur</option>
                                                    {dataCouleur.map((data) => 
                                                        <option key={data.id} value={data.couleur}>{data.couleur}</option>
                                                        )
                                                    }
                                            </Field>
                                        </div>
                                        {touched.couleur && errors.couleur ?(<div className="invalid-feedback">{errors.couleur}</div> ) :
                                        null}
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="is-invalid">
                                            <label className="pt-4 pb-2">FREINS </label> <sup>&#128949;</sup>
                                            <Field as="select" name = "freins" className={touched.freins && errors.freins ? "custom-select is-invalid" : "custom-select"} 
                                            value={values.freins}>
                                                    <option defaultValue> Choisis ton type de freins</option>
                                                    <option value="disques">disques (+300 &euro;)</option>
                                                    <option value="patins">patins</option>
                                            </Field>
                                        </div>
                                        {touched.freins && errors.freins ? (<div className="invalid-feedback">{errors.freins}</div> ) : null}  
                                    </div>
                                    
                                    <div className="col-md-6 col-sm-12">
                                        <div className="is-invalid">
                                            <label className="pt-4 pb-2">Type de blocage </label> <sup>&#128949;</sup>
                                            <Field as="select" name = "blocage" className={touched.blocage && errors.blocage ? "custom-select is-invalid" : "custom-select"}
                                                    value={values.blocage} >
                                                    <option defaultValue> Choisis ton blocage</option>
                                                    <option value="rapide">rapide</option>
                                                    <option value="traversant">traversant</option>
                                            </Field>
                                        </div>
                                        {touched.blocage && errors.blocage ? (<div className="invalid-feedback">{errors.blocage}</div> ) : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="is-invalid">
                                            <label className="pt-4 pb-2">Finition</label> <sup>&#128949;</sup>
                                            <Field as="select" 
                                                    name = "finition" 
                                                    className={ touched.finition && errors.finition ? "custom-select is-invalid" : "custom-select"}
                                                    value={values.finition}
                                                   >
                                                    <option defaultValue> Choisis ta finition</option>
                                                    <option value="brillant">brillant</option>
                                                    <option value="mat">mat</option>
                                            </Field>
                                        </div>
                                        {touched.finition && errors.finition ? (<div className="invalid-feedback">{errors.finition}</div> ) : null}
                                    </div> 
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 text-center">                            
                                <div className="container-prix-panier">
                                    <h5 className="mt-4"> Prix total TTC : <span className="prix" >{values.freins == "disques" ? values.prix = prix+300 : values.prix = newPrix} &euro;  </span>  </h5>
                                    <button type="submit" id="ajoutPanier" className="btn btn-primary mt-4">AJOUTER PANIER</button> 
                                </div>
                            </div> 
                        </div>                       
                    </Form>
                </>
            )
        }                 
    </Formik>
);
}
 
export default FormFormik;