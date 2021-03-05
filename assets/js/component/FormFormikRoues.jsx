import React from 'react';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';


const FormFormik = (
    {panier,prix,submitForm,setSubmitForm,prevPanier,basse,moyenne,haute,treshaute,dataHauteur,dataBike}) => {

    const newPrix = prix;
       
        
    return (
        <Formik
                    initialValues={{ modele:'', freins:'',prix:prix }}
                    validationSchema={Yup.object({
                       
                        modele: Yup.string().matches(/(30mm|38mm|50mm|80mm)/,{message:'Veuillez choisir un modèle !'})
                        .required('Veuillez choisir un modèle !'),
                        freins: Yup.string().matches(/(disques|patins)/,{message:'Veuillez choisir un type de freins !'})
                        .required('Veuillez choisir un type de freins !'),
                    })}
                    onSubmit={(values,{resetForm}) => {
                        
                        const modele = values.modele
                       if(values.modele =="30mm")
                            {values.modele = basse}
                       else if(values.modele =="38mm")
                            {values.modele = moyenne}
                        else if(values.modele == "50mm")
                            {values.modele = haute}
                        else if (values.modele == "80mm" )
                            {values.modele = treshaute}
                      
                        const newData = {
                            
                            
                            modele : modele,
                            couleur : dataBike.couleur,
                            freins : values.freins,
                            type : dataBike.type,
                            prix : values.prix,
                            kitURL : dataBike.url,
                            modeleURL : values.modele,
                        }
                        console.log(newData);
                        panier([...prevPanier, newData]) 
                        resetForm();
                       
                        
                    }}     
                    >    
              
        {({errors,handleSubmit, touched, values})=>

            ( 
                <>
                    <Form className="form-group pl-5 pt-5 pb-4 col-12" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="col-12">
                                    <h5 className="pt-2 pb-4 text-dark"> CONFIGURER VOS ROUES </h5>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                    <div className="is-invalid">
                                            <label className="pt-2 pb-2">Modele </label> <sup>&#128949;</sup>
                                            <Field as="select" name = "modele" className={touched.modele && errors.modele? "custom-select is-invalid" : "custom-select"}
                                                value={values.modele} >
                                                    <option defaultValue> Choisis ta hauteur de jante</option>
                                                    {dataHauteur.map((data) => 
                                                        <option key={data.id} value={data.Hauteur}>{data.Hauteur}</option>
                                                        )
                                                    }
                                            </Field>
                                        </div>
                                        {touched.modele && errors.modele ?(<div className="invalid-feedback">{errors.modele}</div> ) :
                                        null}
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="col-6">
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
                                </div>
                            </div>
                            <div className="col-6 text-center">                            
                                <div className="mt-5 pt-5">
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