import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { HeaderStyled, LinkStyled } from "./Header.styled";
import logoImg from "../../assets/imgs/logoImg.png"


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
        <img src={logoImg} alt="logo pharma pdv" />   
      
          {
           user ? (
             pages.map(({route, description, click}) => {
               return(
                <>
                  
                    <LinkStyled key={route} to={route} onClick={click}>
                      {description}
                    </LinkStyled> 
                  
                </>  
              )         
            })
           ) : null
          }
       

    </HeaderStyled>
  )
}
export { Header }