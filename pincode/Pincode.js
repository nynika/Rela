import React, { useEffect, useState } from 'react';
import {  Button } from "react-bootstrap";


function MyForm() {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    gender: '',
    employmentStatus: '',
    nationality: '',
    maritalStatus: '',
    emergencyContactType: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleChange1 = (e) => {
    const { name, value } = e.target;
  
    if (name === 'dob') {
      
      setFormData({ ...formData, dob: value });
                      // here Calculate age based on the provided date of birth
      if (value) {
        const dobDate = new Date(value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dobDate.getFullYear();
        setFormData({ ...formData, age });
      } else {
        setFormData({ ...formData, age: '' }); // Update the age field
      }
    } else {
  
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };


  
  return (

    <form onSubmit={handleSubmit}>
       <table className='table table-striped'>
          <tbody>
            <tr>
            <td style={{ width: '30%', border: "none" }} >
      <label htmlFor="salutation">Salutation <span>*</span></label>
      
      <select id="salutation" name="salutation" onChange={handleChange}  value={formData.salutation}>
        <option value="MR">MR</option>
        <option value="MRS">MRS</option>
        <option value="MS">MS</option>
      </select>
</td>


<td style={{ width: '30%', border: "none" }} >
      <label htmlFor="firstName">First Name<span>*</span></label>
      <input type="text" id="firstName" name="firstName"
        placeholder="Enter first name" required onChange={handleChange} value={formData.firstName} />
</td>


<td style={{ width: '30%', border: "none" }} >
      <label htmlFor="lastName">Last Name<span>*</span></label>
      <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required onChange={handleChange} value={formData.lastName} />

</td>

      </tr>


      <tr>

   {/*    <td style={{ width: '30%', border: "none" }} >
      <label htmlFor="dob">DOB<span>*</span></label>
      <input
        type="date"
        id="dob"
        name="dob"
        required
        onChange={handleChange1}
        value={formData.dob}
      /></td>
 */}

<td>
<label htmlFor="age">Age<span>*</span></label>
      <input
        type="text"
        id="age"
        name="age"
        value={formData.age}
        readOnly  
      />
</td>

<td>
      <label htmlFor="gender">Gender<span>*</span></label>
      <select id="gender" name="gender" onChange={handleChange} value={formData.gender}>
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
        <option value="OTHER">OTHER</option>
      </select>
</td>
      </tr>


<tr>
      <td style={{ width: '30%', border: "none" }} >
      <label htmlFor="employmentStatus">Employment Status<span>*</span></label>
      <select id="employmentStatus" name="employmentStatus" onChange={handleChange} value={formData.employmentStatus}>
        <option value="EMPLOYED">Employed</option>
        <option value="UNEMPLOYED">Unemployed</option>
        <option value="SELF_EMPLOYED">Self-Employed</option>
      </select>

      </td>


<td style={{ width: '30%', border: "none" }} >
      <label htmlFor="nationality">Nationality<span>*</span></label>
      <select id="nationality" name="nationality" onChange={handleChange} value={formData.nationality}>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      </td>


      <td style={{ width: '30%', border: "none" }} >
      <label htmlFor="maritalStatus">Marital Status<span>*</span></label>
      <select id="maritalStatus" name="maritalStatus" onChange={handleChange} value={formData.maritalStatus}>
        <option value="SINGLE">Single</option>
        <option value="MARRIED">Married</option>
        <option value="DIVORCED">Divorced</option>
      </select>
      </td>
      </tr>


<tr>
      <td style={{ width: '30%', border: "none" }} >
      <label htmlFor="emergencyContactType">Emergency Contact Type<span>*</span></label>
      <select id="emergencyContactType" name="emergencyContactType" onChange={handleChange} value={formData.emergencyContactType}>
        <option value="FAMILY">Family</option>
        <option value="FRIEND">Friend</option>
        <option value="OTHER">Other</option>
      </select>
      </td>


      <td style={{ width: '30%', border: "none" }} >
      <label htmlFor="emergencyContactName">Emergency Contact Name<span>*</span></label>
      <input type="text" id="emergencyContactName" name="emergencyContactName" placeholder="Emergency Contact Name" required onChange={handleChange} value={formData.emergencyContactName} />
</td>

      
<td style={{ width: '30%', border: "none" }} >
      <label htmlFor="emergencyContactNumber">Emergency Contact Number<span>*</span></label>
      <input type="text" id="emergencyContactNumber" name="emergencyContactNumber" placeholder="+91" required onChange={handleChange} value={formData.emergencyContactNumber} />
      </td>
      </tr>
      </tbody>
        </table>
      <Button type="submit">Next</Button>

     
    </form>
  );
}

export default MyForm;
