import "./footer.css"
import FooterCard from "./footerCard"

const Footer = () => {
    const value1 = "productsssss"
    return (
        <div className="footerCardBox">
            <FooterCard value={value1} icon="fas fa-frown-open"   />
            <FooterCard value="our Story" icon="fas fa-dollar-sign" />
            <FooterCard value="our flavour" icon="fas fa-frog" />
            <FooterCard value="our Customer " icon="fas fa-futbol" />
        </div>
    )
}

export default Footer