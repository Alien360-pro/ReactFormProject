import { useContext } from "react"
import Value from "./Noticeboard"
function Child() {
    const newdata = useContext(Value)
    return <>
        {newdata[0]}
        <button onClick={() => newdata[1](newdata[0] -98765432112345678900987654321147098654114570)}>Increase</button>
    </>
}
export default Child