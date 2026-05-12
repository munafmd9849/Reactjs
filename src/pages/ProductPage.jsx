import { useEffect, useState } from "react"
import { fetchProducts } from "../services/api";
import Card from "../components/Card/Card";

export default function ProductPage(){
    const [products, setProducts] = useState([]);
    const [error,setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async ()=>{
        try{
        setLoading(true)
        const data = await fetchProducts()
        setProducts(data)
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    if(error){
        return <h5>{error}</h5>
    }
    return (
        <div>
        <h1>Product Page</h1>
        <form>
                <input type="text" placeholder="Search Products..."/>
        </form>
        {loading && <h1>Loading....</h1>}
            <div className="card-container">
                {products && products.map((product)=>{
                    return (
                        <Card product={product}/>
                    )
                })}
            </div>
        </div>
    )
}

