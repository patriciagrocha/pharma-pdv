import { useAuthentication } from "../../context/Authentication/useAuthentication";
import { HeaderStyled, LinkStyled, NavStyled } from "./Header.styled";


function Header() {
  const { logout , user} = useAuthentication()

  const pages = [
   
    {
      route:"/new-pharmacy",
      description:"Nova farmácia",
      click: () => null
    },
    {
      route:"/register-medicine",
      description:"Novo medicamento",
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