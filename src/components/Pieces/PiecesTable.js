/* eslint-disable prettier/prettier */
import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody } from '@coreui/react'
import PieceTableRow from './PiecesTableRow'

const PiecesTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <CTable hover>
        <CTableHead>
          <CTableRow>
          <CTableHeaderCell scope="col">Code</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.length === null || data.length ===0 ? (
            <tr>
              <td colSpan="3">No data to display</td>
            </tr>
          ) : (
            data.map((el) => (
              <PieceTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </CTableBody>
      </CTable>
    </div>
  )
}
export default PiecesTable
