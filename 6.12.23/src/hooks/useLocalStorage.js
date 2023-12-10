import React from 'react'
//Custom Hook
// שמירת משתנה בזיכרון המקומי של המשתמש
const useLocalStorage=(key,initialValue)=>{
    const [value, setValue] = React.useState(
        ()=> JSON.parse(window.localStorage.getItem(key)) || initialValue
    )

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
    return [value, setValue]
}

export default useLocalStorage

