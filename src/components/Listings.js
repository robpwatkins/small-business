import React from 'react';
import { checkAuth } from '../checkAuth';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'

const linkStyle = {
  color: "inherit"
}

const deleteStyle = {
  cursor: "pointer"
}

const iconCellStyle = {
  textAlign: "center"
}

const Listings = (props) => {
  return (
		<Container>
      <Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Description</TableCell>
						<TableCell>Hours</TableCell>
						<TableCell>Address</TableCell>
            {checkAuth() &&
              <TableCell>Delete</TableCell>
            }
					</TableRow>
				</TableHead>
				<TableBody>
          {props.businesses.map((business, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Link to={`/details/${business.id}`} style={linkStyle}>
                    {business.Name}
                  </Link>
                </TableCell>
                <TableCell>{business.Description}</TableCell>
                <TableCell>{business.Hours}</TableCell>
                <TableCell>{business.Address}</TableCell>
                {checkAuth() &&
                  <TableCell style={iconCellStyle}>
                    <DeleteIcon 
                      color="secondary" 
                      style={deleteStyle}
                      />
                  </TableCell>
                }
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Container>  
  )
}

export default Listings;