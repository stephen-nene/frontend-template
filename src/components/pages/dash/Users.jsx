import { useEffect,useState } from "react"
// import {Table,} from "@/components/shadcn/table"

import {apiClient} from "@/services/apiClient"

export default function Users() {
const [users, setUsers] = useState([])


  const fetchUsers = async () => {
    try {
      const response = await apiClient.get('/profile/users/')
      console.log("response",response)
      setUsers(response.data?.results)
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
        
        <h1 className="text-2xl font-bold">Users</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <button onClick={fetchUsers} className="px-4 py-2 bg-blue-500 text-white rounded">Refresh</button>    
        </div>

    </div>
  )
}
