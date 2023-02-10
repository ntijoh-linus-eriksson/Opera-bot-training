import prisma from "@/lib/prisma"
import { fetcher } from "@/utils/fetcher"
import { Prisma } from "@prisma/client"
import { use } from "react"
import styles from "./accounts.module.css"
import DeleteButton from "./deleteButton"

export async function getProps() {
    const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany()
    return users 
  }

export default  function Accounts() {

    const props = use(getProps())

    return (
        <>
        <table className={styles.table}>
            <tr className={styles.tableRow}>
                <th>User</th>
                <th>Email</th>
                <th>CreatedAt</th>
                <th>action</th>
            </tr>
            {props.map((u, index) => (
                <tr key={index} className={styles.tableRow}>
                    <th className={styles.tableHead}>
                        id :{u.id} <br />
                        username : {u.alias} <br />
                        aka : {u.username} <br />
                        admin: {u.isAdmin}
                    </th>
                    <th className={styles.tableHead}>
                        {u.email}
                    </th>
                    <th className={styles.tableHead}>
                        {u.createdAt?.toString()}
                    </th>
                    <th className={styles.tableHead}>
                        <DeleteButton key={index} id={u.id} />
                    </th>
                </tr>
            ))}
        </table>
        </>
    )
}