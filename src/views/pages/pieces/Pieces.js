/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { CRow, CCol } from '@coreui/react'
import PieceForm from 'src/components/Pieces/PieceForm'
import PiecesTable from 'src/components/Pieces/PiecesTable'
// import { helpHttp } from 'src/helpers/helpHttp'
import Loader from 'src/components/Pieces/Loader'
import Message from 'src/components/Pieces/Message'
import axios from 'axios'

const Pieces = () => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://localhost:44384/api/piece/getall')
      .then((res) => {
        console.log(res)
        setDb(res.data.result)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
        setLoading(false)
      })
  }, [])

  const createData = (data) => {
    setLoading(true)
    axios
      .post('https://localhost:44384/api/piece/add',
      {
        code: data.code,
        description: data.description
      })
      .then((res) => {
        setDb([...db, res.data])
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })    
  }

  const updateData = (data) => {
    setLoading(true)
    axios
      .put(`https://localhost:44384/api/piece/${data.id}`,
      {
        code: data.code,
        description: data.description
      })
      .then((res) => {
        let newData = db.map((el) => (el.id === data.id ? data : el))
        setDb(newData)
        setDataToEdit(null)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
    
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete the record with id ${id} ?`)
    if (isDelete) {
      setLoading(true)
      axios
        .delete(`https://localhost:44384/api/piece/${id}`)
        .then((res) => {
          let newData = db.filter((el) => el.id !== id)
          setDb(newData)
          setDataToEdit(null)
          setLoading(false)
        })
        .catch((error) => {
          setError(error)
          setLoading(false)
        })
      
    } else {
      return
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <h2>Inventory of pieces</h2>
        <br />
        <PieceForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <hr />
        {loading && <Loader />}
        {error && <Message msg={`Error : ${error.message}`} bgcolor="#dc3545" />}
        {db && <PiecesTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
      </CCol>
    </CRow>
  )
}

export default Pieces
