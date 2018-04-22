import styled, {css} from 'styled-components';


export const Image = styled.img `
    width : 100%;   
`;

export const Holla = styled.div `
    height: 100vh;
    background-image: url('${require('../../Media/me.jpg')}');
    background-repeat: no-repeat;
    background-position: center;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    text-align:center;
    color:dodgerblue;

    h1{
        margin-bottom:0;
    }
`
  
export const Peff = styled.p `
    position:relative;
    &:after {
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:black;

        transform-origin:left;
        transform:rotateY('90deg');

        transition:transform 3s;
    }
    

    ${({ hide }) => hide && css`
        &:after {
            transform: rotateY(0deg);
        }
    `}
`
