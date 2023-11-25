import { useDispatch, useSelector } from "react-redux"
import { phoneType } from "../../types/phoneType";
import { removePhone, incrementAmount, decrementAmount, clearAll } from "../../features/phoneSlice";
import "./style.scss";
import { setModal } from "../../features/modalSlice";

const Main = () => {
    const dispatch = useDispatch();
    const phones = useSelector((state: { phones: phoneType[] }) => state.phones);

    const calculatedTotalSum = (
        phones
            .map(phone => phone.amount * phone.quantity)
            .reduce((acc, curr) => acc + curr, 0)
            .toFixed(2)
    )

    const handleClearButton = () => {
        dispatch(setModal({
            heading: "Warning!",
            paragraph: "Are you sure to clear all items in your cart?",
            func: () => { dispatch(clearAll()) }
        }))
    }

    return (
        <main className="main">
            <h1>Your Phone Store</h1>
            <ul className="phone-list">
                {
                    phones.map(phone => (
                        <li key={phone.id} className="card">
                            <section className="details">
                                <img src={phone.img} alt={phone.name} />
                                <section className="specific-info">
                                    <p>{phone.name}</p>
                                    <span>${phone.amount}</span>
                                    <button onClick={() => { dispatch(removePhone({ id: phone.id })) }}>remove</button>
                                </section>
                            </section>
                            <section className="btn-container">
                                <button onClick={() => { dispatch(incrementAmount({ id: phone.id })) }}>+</button>
                                <span>{phone.quantity}</span>
                                <button onClick={() => { dispatch(decrementAmount({ id: phone.id })) }} disabled={phone.quantity <= 0}>-</button>
                            </section>
                        </li>
                    ))
                }
            </ul>

            <hr />

            <section className="total">
                <span>Total</span>
                <span>${calculatedTotalSum}</span>
            </section>

            {phones.length > 0 &&
                <button
                    className="clear-btn"
                    onClick={handleClearButton}
                >Clear All</button>}

        </main>
    )
}

export default Main