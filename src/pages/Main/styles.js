import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;

`;

export const LoadImage = styled.img`

    justify-self: center;
    height: 100px;
    width: 100px;

`;

export const Form = styled.form`

    margin-top: 20px;
    width: 100%;
    /* max-width: 400px; */
    max-width: 590px;
    display: flex;

    input {

        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #FFF;
        font-size: 18px;
        color: #444;
        border-radius: 3px;

        border: ${props => (props.withError ? '2px solid #F00' : 0)}

    }

    button {

        width: 80px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63F5B8;
        color: #FFF;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;

        /* Usando o SASS quando estamos dentro do componente
         podemos referenciar ele usando o & como por exemplo
         para colocar o hover no botão */

        &:hover {

            background: #52D89F;

        }

    }

    /* Não precisamos sair do componente 
    e escrever button:hover para fazer isso */

`;