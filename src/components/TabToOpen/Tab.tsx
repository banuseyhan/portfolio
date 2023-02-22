import { motion } from 'framer-motion'
import * as React from 'react'

const svgVariants = {
  initial: { scale: 1 },
  visible: {
    opacity: 1,
    scale: 0.8,
    duration: 0.3,
  },
}

const divVariants = {
  hover: {
    opacity: [0, 1, 1, 1, 0],
  },
}
const SvgComponent = ({ height, width }: { width: string; height: string }) => (
  <motion.div
    variants={divVariants}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 3 }}
    whileInView="hover"
  >
    <motion.svg
      initial={'initial'}
      transition={{ duration: 0.3, delay: 1, repeat: 3, repeatType: 'reverse' }}
      variants={svgVariants}
      exit={'initial'}
      whileInView={'visible'}
      width={width}
      height={height}
      fill="rgba(95,191,80,0.9)"
      opacity={0.4}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.025 512.025"
      xmlSpace="preserve"
    >
      <path d="M54.144 66.206a8.473 8.473 0 0 0 6.033 2.5 8.475 8.475 0 0 0 6.033-2.5 8.523 8.523 0 0 0 0-12.066L42.069 30.007c-3.337-3.337-8.738-3.337-12.066 0a8.525 8.525 0 0 0 0 12.066l24.141 24.133zM144.649 68.714a8.509 8.509 0 0 0 6.033-2.5l24.132-24.141c3.336-3.337 3.336-8.738 0-12.066-3.328-3.337-8.73-3.337-12.066 0l-24.132 24.141a8.523 8.523 0 0 0 0 12.066 8.507 8.507 0 0 0 6.033 2.5zM102.409 51.213a8.536 8.536 0 0 0 8.533-8.533V8.546a8.536 8.536 0 0 0-8.533-8.533 8.536 8.536 0 0 0-8.533 8.533v34.133c-.001 4.711 3.822 8.534 8.533 8.534zM51.209 102.413a8.536 8.536 0 0 0-8.533-8.533H8.533A8.536 8.536 0 0 0 0 102.413a8.536 8.536 0 0 0 8.533 8.533h34.142c4.711 0 8.534-3.823 8.534-8.533zM54.135 138.62l-24.14 24.14c-3.337 3.337-3.337 8.738 0 12.066a8.477 8.477 0 0 0 6.033 2.5 8.475 8.475 0 0 0 6.033-2.5l24.141-24.141c3.328-3.328 3.328-8.73 0-12.066-3.337-3.336-8.738-3.336-12.067.001zM511.411 397.896c-9.301-23.168-11.392-40.09-13.423-56.448-2.739-22.059-5.564-44.877-25.805-79.94l-55.467-96.077c-8.934-15.462-31.147-21.436-46.635-12.493-5.18 2.995-9.498 7.484-12.467 12.851-5.743-8.269-14.123-14.174-23.953-16.811-11.008-2.953-22.502-1.425-32.375 4.258-9.387 5.419-15.932 13.892-19.115 23.441-13.346-11.025-32.7-13.244-48.546-4.079-9.225 5.325-16 13.713-19.243 23.782L140.945 93.103C119.339 63.654 98.091 69.645 87.33 75.865c-9.907 5.717-16.444 14.822-18.423 25.651-1.818 9.958.324 20.881 6.161 30.967l118.084 191.855c2.466 4.011 7.723 5.265 11.733 2.799 4.019-2.475 5.274-7.723 2.799-11.733L89.719 123.746c-3.678-6.383-5.111-13.184-4.019-19.174 1.075-5.897 4.591-10.709 10.163-13.926 3.84-2.219 15.514-8.977 31.249 12.45l91.341 128.469c2.637 3.703 7.723 4.693 11.571 2.236a8.54 8.54 0 0 0 2.773-11.452c-3.422-5.922-4.326-12.817-2.56-19.43 1.766-6.605 6.007-12.126 11.921-15.539 12.228-7.049 27.93-2.859 34.978 9.37l8.499 14.729a.168.168 0 0 1 .034.051c2.355 4.087 7.578 5.47 11.657 3.123 4.079-2.355 5.478-7.569 3.123-11.656-7.057-12.228-2.859-27.913 9.37-34.97a25.443 25.443 0 0 1 19.422-2.56c6.613 1.775 12.126 6.007 15.539 11.93l12.774 22.118.026.051c2.364 4.079 7.578 5.47 11.665 3.123 4.079-2.355 5.478-7.569 3.123-11.657-2.159-3.729-2.697-8.448-1.468-12.937 1.229-4.471 4.036-8.252 7.714-10.377 7.475-4.318 19.021-1.212 23.322 6.246l55.467 96.077c18.517 32.06 21.009 52.198 23.646 73.506 1.963 15.804 3.977 32.094 11.87 53.777l-165.086 95.317c-28.757-30.967-72.713-63.462-130.79-96.666a1046.983 1046.983 0 0 0-18.628-10.402c-15.684-8.55-26.761-25.549-26.957-41.327-.085-7.168 2.167-17.075 13.397-23.552 4.087-2.364 5.487-7.586 3.132-11.665-2.364-4.079-7.595-5.478-11.665-3.123-14.336 8.286-22.127 21.973-21.922 38.545.256 22.008 14.669 44.553 35.849 56.115 6.016 3.277 12.143 6.69 18.321 10.223 59.699 34.133 103.825 67.217 131.149 98.321a8.526 8.526 0 0 0 10.676 1.758l177.365-102.4a8.54 8.54 0 0 0 3.651-10.572z" />
    </motion.svg>
  </motion.div>
)

export default SvgComponent;