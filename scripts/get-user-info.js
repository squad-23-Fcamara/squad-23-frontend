const testerUUID = 'df6dafd4-42fe-4d55-bd72-934c6a602c89';

let user 

async function fetchUser() {
  const response = await axios.get(
    `https://squad23-api.herokuapp.com/users/${testerUUID}`
  )

  user = response.data

  console.log(user)
}

fetchUser()