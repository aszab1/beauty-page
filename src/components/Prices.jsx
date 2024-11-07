import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { products } from '../assets/products'
import { fadeInVariantsDelay } from '../assets/fadeInVariants'


export default function Prices() {


  const tableRef = useRef(null)
  
  const tableInView = useInView(tableRef, { once: true })

  



  return (
    <>

      <TableContainer className='container'>
        <motion.div ref={tableRef}
        initial="hidden"
        animate={tableInView ? "visible" : "hidden"}
        variants={fadeInVariantsDelay}>
        <Table className='table' variant='striped'>
          <Thead>
            <Tr>
              {/* <Th>Price List</Th> */}
              {/* <Th>Price</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {products.map((item, index) => {
              const isFirstInCategory = index === 0 || products[index - 1].name !== item.name
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
              )
            })}
          </Tbody>
        </Table>
        </motion.div>
      </TableContainer>
      <div className='packages'>**Packages available for a course of treatments, please discuss with your therapist.**
      </div>
      
    </>
  )
}