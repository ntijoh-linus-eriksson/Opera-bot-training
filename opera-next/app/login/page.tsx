"use client"

import React, { useState } from 'react'
import { Prisma } from '@prisma/client'
import { fetcher } from "../../utils/fetcher"
import prisma from "../../lib/prisma"

export async function getProps() {
  const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany()
  return {
    props: { initialUsers : users }
  }
}

const Login = ({ initialUsers } : any ) => {

  const [users, setUsers] = useState<Prisma.UserUncheckedCreateInput[]>(initialUsers)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
    return (
      <div className="container">
        <form 
          onSubmit={async (e) => {
            e.preventDefault()
            const body: Prisma.UserUncheckedCreateInput = {email, password}
            await fetcher("/api/user/login", body )
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="input"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            className="input"
          />
          <br />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  };

  export default Login;
  