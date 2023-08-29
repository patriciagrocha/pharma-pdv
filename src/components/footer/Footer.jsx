import { FooterStyled, HiperlinkStyled } from "./Footer.styled";
import { FaLinkedinIn} from "react-icons/fa"
import { MdEmail} from "react-icons/md";

function Footer(){
  return(
    <FooterStyled>
        <HiperlinkStyled 
        href="https://www.linkedin.com/in/patriciagrocha/"
        rel={"noopener noreferrer"} 
        target={"_blank"}
      >
        <FaLinkedinIn size={20}  />
        <span>in/patriciagrocha</span>
      </HiperlinkStyled>

      <HiperlinkStyled
        href="mailto:patirocha.dev@gmail.com">
        <MdEmail size={20} />
        <span>patirocha.dev@gmail.com</span>
      </HiperlinkStyled>

      <p>&copy;Todos os direitos reservados.</p>   

    </FooterStyled>
  )
}
export { Footer }