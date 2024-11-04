import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react'


export default function AccordionFunction({ items }) {
  return (
    <Box width="60%" margin="0 auto" className="accordion-box">
      <Accordion defaultIndex={[]} allowMultiple>
        {items.map((item, index) => (
          <AccordionItem key={index} borderBottom="1px solid" borderColor="black">
            <p className="accordion-title">
              <AccordionButton _expanded={{ bg: 'inherit' }}>
                <Box as="span" flex="1" textAlign="left" style={{color: '#4A4A4A'}} >
                  {item.title}
                </Box>
                <AccordionIcon style={{ color: 'black' }} />
              </AccordionButton>
            </p>
            <AccordionPanel pb={20} >
              {item.content}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}