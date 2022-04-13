const userUUID = location.search.split('=')[1]

async function fetchMentor() {
  const response = await axios.get(`https://squad23-api.herokuapp.com/users/${userUUID}`)

  const mentor = response.data

  console.log(mentor)
}

fetchMentor()
