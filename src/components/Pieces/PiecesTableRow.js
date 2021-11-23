/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { CTableRow, CTableDataCell, CButton } from '@coreui/react'

const PieceTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { id, code, description } = el
  return (
    <CTableRow>
      <CTableDataCell>{code}</CTableDataCell>
      <CTableDataCell>{description}</CTableDataCell>
      <CTableDataCell>
        <CButton color="secondary" shape="rounded-pill" onClick={() => setDataToEdit(el)}>
          Edit
        </CButton>
        <CButton color="warning" shape="rounded-pill" onClick={() => deleteData(id)}>
          Delete
        </CButton>
      </CTableDataCell>
    </CTableRow>
  )
}

export default PieceTableRow
