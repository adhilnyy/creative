import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../redux/authSlice"


const useLogin = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        password:""
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {value, name} = e.target
        setCredentials((prev) =>({...prev, [name]:value}))
        setError({})
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        setError({})
        const err = {}
        if (!credentials.username.trim()) {
            err.username = "Username is required!"
        }
        if (!credentials.password.trim()) {
            err.password = "Password is required!"
        }

        if (Object.keys(err).length > 0) {
            setError(err)
            return
        }
 
        setIsLoading(true)
        
        setTimeout(() => {
            dispatch(login(credentials.username))
            navigate('/list')
        }, 600);
    }

    return ({credentials, isLoading, error, handleChange, handleLoginSubmit})
  }


  export default useLogin
  