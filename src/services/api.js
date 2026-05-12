const API_URL = "https://api.escuelajs.co/api/v1/products"

export const fetchProducts = async ()=> {
    try{
        const response = await fetch(API_URL)
        if(!response.ok){
            throw new Error("Failed to fetch the products")
        }
        const data = await response.json()
        return data
    }
    catch(error){
        throw error
    }
}
