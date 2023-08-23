import { HeaderStyled, LinkStyled, NavStyled } from "./Header.styled";


function Header() {

  const pages = [
   
    {
      route:"/new-pharmacy",
      description:"Nova farmácia"
    },
    {
      route:"/register-medicine",
      description:"Novo medicamento"
    },
    {
      route:"/",
      description:"Sair"
    }
  ]

  return(
    <HeaderStyled>  
      <img src="src/assets/imgs/logo-white2.png" alt="logo pharma pdv" />   
      
        <NavStyled>
          {
            pages.map(({route, description}) => {
              return(
                <LinkStyled key={route} to={route} >
                  {description}
                </LinkStyled> 
              )         
            })
          }
        </NavStyled>    
       

    </HeaderStyled>
  )
}
export { Header }