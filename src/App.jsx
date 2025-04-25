
import { useState } from 'react'


function App() {

  const [formData, setFormData] = useState(
    {
      name: '',
      gender: '',
      age: '',
      fathername: '',
      mothername: '',
      city: '',
      state: '',
      country: '',
      college: '',
      semester: '',
      skills: ''
    })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted', formData)
    alert("form submitted successfully!!!!")
  }
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required /><br /><br />
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} value={formData.gender} required /><br /><br />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} value={formData.age} required /><br /><br />
        <input type="text" name="fathername" placeholder="Father's Name" onChange={handleChange} value={formData.fathername} required /><br /><br />
        <input type="text" name="mothername" placeholder="Mother's Name" onChange={handleChange} value={formData.mothername} required /><br /><br />
        <input type="text" name="city" placeholder="City" onChange={handleChange} value={formData.city} required /><br /><br />
        <input type="text" name="state" placeholder="State" onChange={handleChange} value={formData.state} required /><br /><br />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} value={formData.country} required /><br /><br />
        <input type="text" name="college" placeholder="College" onChange={handleChange} value={formData.college} required /><br /><br />
        <input type="text" name="semester" placeholder="Semester" onChange={handleChange} value={formData.semester} required /><br /><br />
        <input type="text" name="skills" placeholder="Skills" onChange={handleChange} value={formData.skills} required /><br /><br />

        <button type="submit">Submit</button>
      </form>

    </div>
  );

}

export default App