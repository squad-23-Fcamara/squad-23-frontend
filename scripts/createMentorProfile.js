const userUUID = location.search.split('=')[1]

async function fetchMentor() {
  const response = await axios.get(
    `https://squad23-api.herokuapp.com/users/${userUUID}`
  )
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC'
  }
  const mentor = response.data

  mentor.availableDates = mentor.availableDates.map(date =>
    new Intl.DateTimeFormat('pt-BR', options).format(new Date(date)).split(',')
  )
  console.log(mentor.availableDates)
}

fetchMentor()
