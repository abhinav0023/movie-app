import { extendTheme } from '@chakra-ui/react'
// import { mode } from '@chakra-ui/react'
// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// const styles = {
//     global: (props) => ({
//         body : {
//             bg:mode(
//                 props.theme.semanticTokens.color['chakra-body-bg']._light,
//                 "blackAlpha900"
//             )
//         }
//     })
// }

// 3. extend the theme
const theme = extendTheme({ config})

export default theme