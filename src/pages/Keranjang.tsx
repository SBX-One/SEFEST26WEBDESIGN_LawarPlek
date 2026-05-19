import InsideItemCart from "../view/Keranjang/InsideItemCart";
import NavbarKeranjang from "../view/Keranjang/KeranjangNavbar";
import PaymentDetails from "../view/Keranjang/PaymentDetails";

export default function Keranjang() {
    return (
        <div>
            <NavbarKeranjang />
            <InsideItemCart />
        </div>
    )
}