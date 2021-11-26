/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { CRow, CCol } from '@coreui/react'
import PieceForm from 'src/components/Pieces/PieceForm'
import PiecesTable from 'src/components/Pieces/PiecesTable'
import { helpHttp } from 'src/helpers/helpHttp'
import Loader from 'src/components/Pieces/Loader'
import Message from 'src/components/Pieces/Message'
import axios from 'axios'

const Pieces = () => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  let API = helpHttp()
  let url = 'https://localhost:44384/api/piece/getall'

  useEffect(() => {
    setLoading(true)
    // API.get(url).then((res) => {
    //   if (!res.err) {
    //     setDb(res)
    //   }
    //   else {
    //     setDb(null)
    //     setError(true)
    //   }
    //   setLoading(false)
    // })
    axios.get(url).then((res) => {
      console.log(res)
      setDb(res.data.result)      
      setLoading(false)
    })
  }, [])

  const createData = (data) => {
    data.id = Date.now()
    setDb([...db, data])
  }

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el))
    setDb(newData)
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete the record with id ${id} ?`)
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id)
      setDb(newData)
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
        {error && <Message />}
        {db && <PiecesTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
      </CCol>
    </CRow>
  )
}

export default Pieces
