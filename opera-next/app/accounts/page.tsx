import prisma from "@/lib/prisma"
import { fetcher } from "@/utils/fetcher"
import { Prisma } from "@prisma/client"
import { use } from "react"

export async function getProps() {
    const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany()
    return users 
  }

export default  function Accounts() {

    const props = use(getProps())

    return (
        <>
        <table>
            <tr>
                <th>User</th>
                <th>Email</th>
                <th>CreatedAt</th>
                <th>action</th>
            </tr>
            {props.map((u, index) => (
                <tr key={index}>
                    <th>
                        {u.id}
                        {u.username}
                        {u.alias}
                        admin: {u.isAdmin}
                    </th>
                    <th>
                        {u.email}
                    </th>
                    <th>
                        {u.createdAt?.toString()}
                    </th>
                    <th>
                        <button>Delete</button>
                    </th>
                </tr>
            ))}
        </table>
        </>
    )
}