import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { HeaderStyled, LinkStyled, NavStyled } from "./Header.styled";
import logoImg from "../../assets/imgs/logoImg.png";

function Header() {
  const { logout, user } = useAuthentication();

  const pages = [
    {
      route: "/map-pharms",
      description: "Nossas Lojas",
      click: () => null,
    },
    {
      route: "/new-pharmacy",
      description: "Cadastrar Farmácia",
      click: () => null,
    },
    {
      route: "/medicines",
      description: "Medicamentos",
      click: () => null,
    },
    {
      route: "/register-medicine",
      description: "Cadastrar Medicamento",
      click: () => null,
    },
    {
      route: "/",
      description: "Sair",
      click: () => logout(),
    },
  ];

  return (
    <>
      <HeaderStyled>
        <img src={logoImg} alt="logo pharma pdv" />
      </HeaderStyled>
      <NavStyled>
        {user
          ? pages.map(({ route, description, click }, index) => {
              return (
                <LinkStyled key={index} to={route} onClick={click}>
                  {description}
                </LinkStyled>
              );
            })
          : null}
      </NavStyled>
    </>
  );
}
export { Header };
