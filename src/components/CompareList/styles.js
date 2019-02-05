import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;

`;

export const Repository = styled.div`

    flex: 1;
    width: 250px;
    background: #FFF;
    border-radius: 3px;
    margin: 11px 10px;

    display: flex;
    flex-direction: column;

    i {

        text-align: right;
        padding: 11px;

    }

    header {

        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {

            width: 64px;

        }

        strong {

            font-size: 24px;
            margin-top: 10px;

        }

        small {

            font-size: 14px;
            color: #666;

        }
    
    }

    footer {

        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 11px;
        margin-bottom: 11px;

        h5 {

            margin-top: 1px;

        }

        i {

            padding: 0;
            margin: 0;
            margin-top: 0px;
            margin-left: 7px;

        }

    }

    ul {

        list-style: none;

        li {

            font-weight: bold;
            /* Esse é um padding de 12px vertical
             e 20px horizontal */
            padding: 12px 20px;
            display: flex;
            flex-direction: row;

            img {

               margin-right: 10px;

            }

            small {

                font-weight: normal;
                font-size: 12px;
                color: #999;
                margin-left: 7px;
                font-style: italic;

            }

            &:nth-child(2n - 1) {
            
                background: #F5F5F5;

            }

        }

    }

`;
