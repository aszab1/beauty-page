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
import { products } from "./Products"


export default function Prices() {


  const tableRef = useRef(null)
  
  const tableInView = useInView(tableRef, { once: true })

  


  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.8, duration: 1.5, ease: 'easeInOut' } }
  }



  return (
    <>


      <TableContainer className='container'>
        <motion.div ref={tableRef}
        initial="hidden"
        animate={tableInView ? "visible" : "hidden"}
        variants={fadeInVariants}>
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