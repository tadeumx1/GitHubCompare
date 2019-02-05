import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css'

const GlobalStyle = createGlobalStyle` 

* {

    margin: 0;
    padding: 0;

    /* O box Sizing serve para quando colocarmos um padding
    em um elemento ele não fique maior mas só ocupe o espaço dentro dele */
    box-sizing: border-box;
    outline: 0;

}

body {

    /* background-color: #9B65E5; */
    background-image: url('https://source.unsplash.com/1600x900/?building');
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
}

`;

export default GlobalStyle;