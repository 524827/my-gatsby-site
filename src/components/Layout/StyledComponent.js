import styled from 'styled-components';
import stripes from '../../assets/images/stripes.svg'


export const SiteBorderStyle = styled.div`
max-width: 1000px;
margin: 12rem auto 4rem auto;
margin-top: clamp(2rem, 10vw, 10rem);
padding: 5px;
background: url(${stripes});
/* background-size: 100% 100%; */
padding: clamp(5px,1vw,25px);
border: 5px solid #FFF;
box-shadow: 0 0 5px 3px rgba(0,0,0,0.044);
@media(max-width: 1100px){
    margin-left: 1.5rem;
    margin-right:1.5rem;
}
`;

export const ContentStyles = styled.div`
background: white;
padding: 2rem;
`