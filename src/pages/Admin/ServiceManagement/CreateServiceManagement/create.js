import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';



const CreateServiceForm = () => (
  <div className="card">
    <div className="header">
      <h4>Add new Service</h4>
    </div>
    <div className="content">
      <form className="form-horizontal" >
      <div className="form-group">
          <label className="control-label col-md-3">Branch</label>
          <div className="col-md-9 ">
            <Field
              name="branch"
              type="textarea"
              className="form-control"
            
              component="select">
              <option value="">Please select</option>
              </Field>
          </div>
         
        </div>
        <div className="form-group">

          <label className="control-label col-md-3">Service's name</label>
          <div className="col-md-9">
            <Field
              name="serviceName"
              type="text"
              placeholder =" Service Name"
              component={renderField}
              helpText="Service Name is unique" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-3">Service Image</label>
          <div className="col-md-9  ">
          <div className="custom-file">
            <Field
              id="customFile"
              name="serviceImage"
              type="file"
              className=" form-control custom-file-input"
              component="input">
              </Field>
              <label class="custom-file-label" for="customFile">Choose file</label>
              </div>
          </div>
          </div>

        <div className="form-group">
          <label className="control-label col-md-3">Service Description</label>
          <div className="col-md-9 ">
            <Field
              name="serviceDesc"
              type="textarea"
              className="form-control"
              component="textarea" />
          </div>
         
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Status</label>
          <div className="col-md-9 checkbox-group">
            <Field
              name="status"
              type="checkbox"
              value="true"
              label="Active"
              component={renderField} />
          </div>
         
        </div>
        
        <div className="form-group">
        <label className="control-label col-md-3"></label>
        <div className="col-md-9">
                <button type="submit" className="btn btn-fill btn-info" >Save</button>
        </div>
        </div>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'createServiceForm',
  initialValues:{
    branch: [
        {
          text: "Branch 1",
          value: 55454
        },
        {
          text: "Branch 1",
          value: 55454
        }
    ]
  }
})(CreateServiceForm);