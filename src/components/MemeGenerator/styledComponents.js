// Style your components here
import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
min-height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media screen and (min-width:768px){
min-height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}

`
export const Heading = styled.h1`
font-family:'Roboto';
font-size:30px;
color: #35469c;
text-align:center
order:-2;
@media screen and (min-width:768px){
    font-family:'Roboto';
font-size:40px;
color: #35469c;
}

`
export const ContentContainer = styled.div`
width:90%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media screen and (min-width:768px){
    width:85%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
}


`

export const MemsFormContainer = styled.form`
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
margin-bottom:20px;

@media screen and (min-width:768px){
    width:45%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-right:20px;
    order:1;

}

`

export const Label = styled.label`
font-family:'Roboto';
font-size:14px;
color:#7e858e;
margin-bottom:10px;

@media screen and (min-width:768px){
    font-family:'Roboto';
    font-size:18px;
    color:#7e858e;
    margin-bottom:10px;
}

`

export const InputElement = styled.input`
height:40px;
width:100%;
padding:15px;
background-color:#ffffff;
border:1px solid #d7dfe9;
border-radius:5px;
font-family:'Roboto';
font-size:14px;
color:#1e293b;
margin-bottom:15px;
outline:none;

@media screen and (min-width:768px){
height:55px;
width:100%;
padding:20px;
background-color:#ffffff;
border:1px solid #d7dfe9;
border-radius:5px;
font-family:'Roboto';
font-size:20px;
color:#1e293b;
margin-bottom:20px;
outline:none;
}

`

export const SelectElement = styled.select`
height:40px;
width:100%;
padding-left:15px;
background-color:#ffffff;
border:1px solid #d7dfe9;
border-radius:5px;
font-family:'Roboto';
font-size:14px;
color:#1e293b;
accent-color:#0b69ff;
outline:none;
margin-bottom:24px;

@media screen and (min-width:768px){
height:55px;
width:100%;
padding-left:20px;
background-color:#ffffff;
border:1px solid #d7dfe9;
border-radius:5px;
font-family:'Roboto';
font-size:18px;
color:#1e293b;
accent-color:#0b69ff;
outline:none;
margin-bottom:25px;
}

`

export const GenerateButton = styled.button`
height:45px;
width:150px;
background-color:#0b69ff;
border:none;
border-radius:5px;
padding:10px;
outline:none;
font-family:'Roboto';
font-size:16px;
color:#ffffff;

@media screen and (min-width:768px){
height:50px;
width:160px;
background-color:#0b69ff;
border:none;
border-radius:5px;
padding:10px;
outline:none;
font-family:'Roboto';
font-size:18px;
color:#ffffff;

}

`

/* meme image content  */
export const MemeGeneratedImageContainer = styled.div`
min-height:400px;
width:100%;
background-image:url(${props => props.backgroundImage});
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
padding:10px;
text-align:center;
order:-1;

@media screen and (min-width:768px){
min-height:400px;
width:50%;
background-image:url(${props => props.backgroundImage});
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
padding:20px;
text-align:center;
order:2;

}

`

export const MemeTopText = styled.p`
font-family:'Open Sans';
font-size:${props => props.memeActiveFontsize}px;
color:#ffffff;
`
