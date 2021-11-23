/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { CRow, CCol } from '@coreui/react'
import PieceForm from 'src/components/Pieces/PieceForm'
import PiecesTable from 'src/components/Pieces/PiecesTable'
const initialDb = [
  {
    id: 1,
    code: 'sd67a5d7sad8',
    description: 'Piece 1',
  },
  {
    id: 2,
    code: '54ytg454',
    description: 'Piece 2',
  },
  {
    id: 3,
    code: 'r435fret',
    description: 'Piece 3',
  },
  {
    id: 4,
    code: 'fdt435t54',
    description: 'Piece 4',
  },
]

const Pieces = () => {
  const [db, setDb] = useState(initialDb)
  const [dataToEdit, setDataToEdit] = useState(null)

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
        <hr/>
        <PiecesTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
      </CCol>
    </CRow>
  )
}

export default Pieces
