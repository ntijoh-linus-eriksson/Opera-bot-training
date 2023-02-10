"use client"

import prisma from "@/lib/prisma"
import { fetcher } from "@/utils/fetcher"
import { Prisma } from "@prisma/client"
import { use, useState } from "react"
import styles from "./accounts.module.css"

export default function DeleteButton(props : {id : number | undefined}) {
    return (
    <button 
        onClick={async () => {
            console.log('clicked')
            console.log(props.id)
            if (typeof props.id == 'number') {
                await fetcher("/api/user/delete", {id: props.id})
            } 
        }}
        className={styles.deleteButton}
    >
    Delete
    </button>
)}