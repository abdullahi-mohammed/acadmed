import { useContext } from "react"
import { AuthContext } from "../../../customHooks/useAuth"
import GeneralHeader from "../../../components/general/header"


export default function Overview() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <GeneralHeader h2={`Welcome, ${user.displayName || user.email.split("@")[0] }`} p={"Good schedule of daily tasks can significantly decrease stress"} />
    </div>
  )
}