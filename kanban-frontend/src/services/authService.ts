import type { Login } from '@/models/userModel'
const apiUrl = 'http://localhost:3000'

export const submitForm = async (loginData: Login) => {
  console.log(apiUrl)

  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })

    if (!response.ok) {
      throw new Error('Błąd logowania')
    }

    return response
  } catch (error) {
    throw error
  }
}
