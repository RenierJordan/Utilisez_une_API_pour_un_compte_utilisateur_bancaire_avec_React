
  export async function getToken (logs) {
    const fetchPayload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logs)
    }
  
    const response = await fetch('http://localhost:3001/api/v1/user/login', fetchPayload)
    const jsonResponse = await response.json()
  
    return jsonResponse
  }
  export async function getProfile (token) {
    const fetchPayload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + token
      }
    }
  
    const response = await fetch('http://localhost:3001/api/v1/user/profile', fetchPayload)
    const jsonResponse = await response.json()
  
    return jsonResponse
  }
  export async function updateProfile (token, editedUserNames) {
    const fetchPayload = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + token
      },
      body: JSON.stringify(editedUserNames)
    }
  
    const response = await fetch('http://localhost:3001/api/v1/user/profile', fetchPayload)
    const jsonResponse = await response.json()
  
    return jsonResponse
  }
