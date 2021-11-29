/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
// import { Credentials, loginAccount, logoutAccount } from '../api/account'
// import { User } from './modelTypes'
import { createTokenProvider } from './tokenProvider'
import { createUserProvider } from './userProvider'

const createAuthProvider = () => {
  const tokenProvider = createTokenProvider()
  const userProvider = createUserProvider()
  const credential = {
    email: '',
    password: '',
  }
  const login = async (credential) => {}
}

export const { useAuth, login, logout, getToken, useUser, setUser } = createAuthProvider()
