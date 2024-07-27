import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    users: {},
    setUsers: () => {},
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser ] = useState({});
    const [users, setUsers] = useState({});
    const value = {currentUser,setCurrentUser, users, setUsers};
    const filterCriteria = "Jessica Taylor";


    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);
    useEffect(()=>{
        fetch(`https://fedskillstest.coalitiontechnologies.workers.dev`,{
            headers: {
                'Authorization':`Basic ${auth}`
            }}).then((response)=> {
                if(response.ok){
                    return response.json()
                } throw response;
            }).then((data)=>{
                const patient = data.find(item => item.name === filterCriteria);
                setUsers(data);
                setCurrentUser(patient);
            }).catch(function (error){
                console.warn(error);
            })
        },[])
    

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

   
}