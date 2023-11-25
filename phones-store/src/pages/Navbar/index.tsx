import { useSelector } from "react-redux"
import { phoneType } from "../../types/phoneType"
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const phones = useSelector((state: { phones: phoneType[] }) => state.phones)

    const numberOfPhones = (
        phones
            .map(phone => phone.quantity)
            .reduce((acc, curr) => acc + curr, 0)
    );

    return (
        <nav className="nav">
            <h1>Redux Toolkit</h1>
            <div className="cart">
                <span className="cart-logo"><FontAwesomeIcon icon={faCartShopping} /></span>
                {numberOfPhones > 0 && <sup className="badge">{numberOfPhones}</sup>}
            </div>
        </nav>
    )
}

export default Navbar