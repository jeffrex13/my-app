import React, { useContext, useState, useEffect } from 'react'
import axios from '../axios'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

interface SomeProps {
  username: string
  userData: any
  project: any
  error: any
  isLoading: boolean
  setUsername: any
  settingUsername: any
  selectedRepo: string
  setSelectedRepo: any
  backButton: any
  backButton1: any
  readme: string
  settingRepositories: (value: any) => Promise<void>
}

const AllContexts = React.createContext<SomeProps>(null!)

export function useCont() {
  return useContext(AllContexts)
}

export function AllProvider({ children }: any) {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [userData, setUserData] = useState<any>([])
  const [project, setProject] = useState<any>([])
  const [selectedRepo, setSelectedRepo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [readme, setReadme] = useState('')
  const history = useHistory()

  const settingUsername = async () => {
    try {
      const newUser = await axios(`/users/${username}`)
      setIsLoading(true)
      const newRepo = await axios(`/users/${username}/repos`)
      setUserData(newUser)
      setProject(newRepo)
      setIsLoading(false)
      history.push(`/projects/${username}`)
    } catch (error: any) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Something is wrong',
        text: 'User ' + error.response.data.message,
        showConfirmButton: true,
        confirmButtonColor: 'red',
        confirmButtonText: 'Close',
      })
    }
  }

  const settingRepositories = async (value: any) => {
    try {
      setError('')
      const resultReadme = await axios(`/repos/${username}/${value}/readme`)
      setIsLoading(true)
      const result = await axios(resultReadme.data.download_url)
      //
      setReadme(result.data)
      setIsLoading(false)
      history.push(`/projects/${username}/${value}/readme`)
    } catch (error: any) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Something is wrong',
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  const backButton = () => {
    history.push(`/`)
    setUsername('')
    setError('')
  }

  const backButton1 = () => {
    history.push(`/projects/${username}`)
  }

  const value = {
    username,
    userData,
    project,
    error,
    isLoading,
    selectedRepo,
    setSelectedRepo,
    readme,
    setReadme,
    backButton1,
    settingRepositories,
    backButton,
    settingUsername,
    setProject,
    setIsLoading,
    setError,
    setUserData,
    setUsername,
  }

  return <AllContexts.Provider value={value}>{children}</AllContexts.Provider>
}
