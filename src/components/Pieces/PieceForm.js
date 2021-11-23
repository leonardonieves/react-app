/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'

const initialForm = {
  id: null,
  code: '',
  description: '',
}

const PieceForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit)
    } else {
      setForm(initialForm)
    }
  }, [dataToEdit])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.code || !form.description) {
      alert('Datos incompletos')
      return
    }
    if (form.id === null) {
      createData(form)
    } else {
      updateData(form)
    }
  }

  const handleReset = (e) => {
    setForm(initialForm)
    setDataToEdit(null)
  }
  return (
    <div>
      <h3>{dataToEdit ? 'Edit' : 'Add'} piece to Inventory</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="code"
          placeholder="Code"
          onChange={handleChange}
          value={form.code}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={form.description}
        />
        <input type="submit" value="Add" />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </div>
  )
}
export default PieceForm
