"use client"

import React, { useState } from 'react'
import { Prisma } from '@prisma/client'
import { fetcher } from "../../utils/fetcher"
import prisma from "../../lib/prisma"

export async function getServerSideProps() {
  const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany()
  return {
    props: { initial: users }
  }
}

const Register = ({ initialUsers }) => {

  const [users, setUsers] = useState<Prisma.UserUncheckedCreateInput[]>(initialUsers)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('')
  
    return (
      <div className="container">
        <form 
          onSubmit={async (e) => {
            const body: Prisma.UserCreateInput = {
              e, fullName, email, password, phoneNumber}

            await fetcher("/api/create", { user : body})
            await setUsers([...users, body])
            setFullName("")
            setEmail("")
            setPassword("")
            setPhoneNumber("")
            setRole("")
          }}
        >
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="FullName"
            className="input"
          />
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
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            placeholder="PhoneNumber"
            className="input"
          />
          <br />
          <select
            placeholder="Role"
            className="input"
            onChange={(e) => setRole(e.target.value)}
          >
            <option 
              placeholder="Admin" 
              value={role}
              className="option"
            />
            <option 
              placeholder="User" 
              value={role}
              className="option"
            />
            <option 
              placeholder="Developer" 
              value={role}
              className="option"
            />
          </select>
          <br />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  };

  export default Register;
  