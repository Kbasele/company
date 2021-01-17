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

    static createCostumerFetch(formData, TOKEN){
        return fetch(url + costumers,{
            method: "POST", 
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            }
        })
    }
    static getAllCostumersFetch(token){

        return fetch(url + costumers,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
    }

    static getCostumerItemFetch(id){

        return fetch(`${url}${costumers}${id}/`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }) 
    }

    static deleteCostumerItemFetch(id, TOKEN){

        return fetch(`${url}${costumers}${id}/`,{
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            }         
        }) 
    }

    static updateCostumerItemFetch(id, body, TOKEN){

        return fetch(`${url}${costumers}${id}/`,{
            method: "PUT", 
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            }       
        }) 
    }

    static userDetailFetch(token){

        return fetch(url + user,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
    }

}

