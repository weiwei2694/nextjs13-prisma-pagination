import React from 'react'
import { TableCell, TableRow } from '../ui/table'

interface Props {
  name: string;
  email: string;
}

const Users = ({
  name,
  email
}: Props) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell className="text-right">N/A</TableCell>
    </TableRow>
  )
}

export default Users