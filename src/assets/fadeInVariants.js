
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: 'easeInOut' } }
}

export const fadeInVariantsTwo = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } }
}

export const fadeInVariantsDelay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1.5, ease: 'easeInOut' } }
}

export default fadeInVariants
