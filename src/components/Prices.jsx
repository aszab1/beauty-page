import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { products } from "./Products"

export default function Prices(){

  return(
    <>
{/* <div>Price List</div> */}

  <TableContainer className='container'>
<Table className='table' variant='striped'>
  <Thead>
    <Tr>
      {/* <Th>Price List</Th> */}
      {/* <Th>Price</Th> */}
    </Tr>
  </Thead>
  <Tbody>
    {products.map((item, index) => {
      const isFirstInCategory = index === 0 || products[index - 1].name !== item.name;
      return (
        <React.Fragment key={index}>
          {isFirstInCategory && (
            <Tr>
              <Th className='item-name' colSpan={2}><strong>{item.name}</strong></Th>
            </Tr>
          )}
          <Tr>
            <Td className='product'>{item.product}</Td>
            <Td className='price'>{item.price}</Td>
          </Tr>
        </React.Fragment>
      );
    })}
  </Tbody>
</Table>
</TableContainer>
</>
  )
}