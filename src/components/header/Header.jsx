import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { HeaderStyled, LinkStyled, NavStyled } from "./Header.styled";


function Header() {
  const { logout , user} = useAuthentication()

  const pages = [
   
    {
      route:"/map-pharms",
      description:"Farmácias",
      click: () => null
    },
    {
      route:"/medicines",
      description:"Medicamentos",
      click: () => null
    },
    {
      route:"/",
      description:"Sair",
      click: () => logout()
    }
  ]

  return(
    <HeaderStyled>  
      <img src="src/assets/imgs/logo-white2.png" alt="logo pharma pdv" />   
      
        <NavStyled>
          {
           user ? (
            pages.map(({route, description, click}) => {
              return(
                <LinkStyled key={route} to={route} onClick={click}>
                  {description}
                </LinkStyled> 
              )         
            })
           ) : null
          }
        </NavStyled>    
       

    </HeaderStyled>
  )
}
export { Header }