import { formatCurrency } from "../utils/formatCurrency"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    image: string
}

const StoreItem = ({ id, name, price, image }: StoreItemProps) => {
    return (
        <>
            <div>
                <img className="object-cover h-50" src={image} alt="imagename" />
                <div className="flex flex-row items-center items justify-between">
                    <p className="text-lg my-3">{name}</p>
                    <p className="text-base my-3">{formatCurrency(price)}</p>
                </div>
            </div>
        </>
    )
}

export default StoreItem