import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { HeaderStyled, LinkStyled } from "./Header.styled";
import logoImg from "../../assets/imgs/logoImg.png"


function Header() {
  const { logout , user} = useAuthentication()

  const pages = [
   
    {
      id:0,
      route:"/map-pharms",
      description:"Farmácias",
      click: () => null
    },
    {
      id:2,
      route:"/medicines",
      description:"Medicamentos",
      click: () => null
    },
    {
      id:3,
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
             pages.map(({route, description, click}, index) => {
               return(
                <>
                  
                    <LinkStyled key={index} to={route} onClick={click}>
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