import React from 'react';
import {Field} from "formik";

const FieldCouleurForm = (dataCouleur,values,touched,couleur,errors) => {
    return ( 
    <div className="col-6">
            <div className="is-invalid">
                <label className="pt-2 pb-2">Couleur </label> <sup>&#128949;</sup>
                <Field as="select" name = "couleur" className={touched.couleur && errors.couleur? "custom-select is-invalid" : "custom-select"}
                    value={submitForm == true ? values.couleur = "" : values.couleur} >
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
    );
}
 
export default FieldCouleurForm;