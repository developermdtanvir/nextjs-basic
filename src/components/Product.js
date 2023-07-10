import Image from "next/image";
import Link from "next/link";

const Products = ({ product }) => {
    console.log(product);
    return (
        <div className="card   shadow-xl">
            <div className="h-60">
                <figure style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image placeholder="blur" blurDataURL="data:image/webp;base64,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" src={product.image} fill />
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description.slice(0, 50)}</p>
                <p>price : {product.price} $</p>
                <div className="card-actions justify-end">
                    <Link href={`/product/${product.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Products