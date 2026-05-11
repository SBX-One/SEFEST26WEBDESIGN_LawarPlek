import Data from "../../data/dummyData.json"

export default function BalanceViewer() {
    const balance = Data[0].balanceNominal

    console.log(balance)
    return (
        <div className="w-full border-2 border-border-default bg-red-500"> 
            <p className="xs-default">Balance</p>
            <h1>Rp. {balance.toLocaleString('id-ID')}</h1>
        </div>
    )
}