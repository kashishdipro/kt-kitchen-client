import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - KT Kitchen`;
    },[title])
}

export default useTitle;