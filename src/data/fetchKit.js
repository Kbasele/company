const url = "https://frebi.willandskill.eu"
const auth = "/api-token-auth/"
const costumers = "/api/v1/customers/"
const user = "/api/v1/me"

const token = localStorage.getItem("USERTOKEN")
const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
}

export default class FetchKit {
    
    static loginFetch(payload){
    
        return fetch(url + auth,{
            method: "POST", 
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
              }
        })
    }

    static createCostumerFetch(formData){
        return fetch(url + costumers,{
            method: "POST", 
            body: JSON.stringify(formData),
            headers: headers
        })
    }
    
    static getAllCostumersFetch(){
        
        return fetch(url + costumers,{
            headers: headers
        })
    }

    static getCostumerItemFetch(id){
        
        return fetch(`${url}${costumers}${id}/`,{
            headers: headers
        }) 
    }

    static deleteCostumerItemFetch(id){
        
        return fetch(`${url}${costumers}${id}/`,{
            method: "DELETE", 
            headers: headers
        }) 
    }

    static updateCostumerItemFetch(id, body){
        
        return fetch(`${url}${costumers}${id}/`,{
            method: "PUT", 
            body: JSON.stringify(body),
            headers: headers
        }) 
    }

    static userDetailFetch(){
        return fetch(url + user,{
            headers: headers
        })
    }

}

