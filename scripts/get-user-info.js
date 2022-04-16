const testerUUID = 'df6dafd4-42fe-4d55-bd72-934c6a602c89'

let user

function userInfo() {
  const container = document.getElementById('user-info')
  const wrapper = document.createElement('div')
  const userName = document.createElement('h2')
  const userRole = document.createElement('h4')

  userName.textContent = user.name
  userRole.textContent = user.role

  wrapper.appendChild(userName)
  wrapper.appendChild(userRole)

  container.appendChild(wrapper)
}

function userMentorings(schedule, id) {
  const mentoringId = id
  const mentoringsInfo = document.getElementById('mentorings')
  const date = document.createElement('div')
  const hour = document.createElement('div')

  date.textContent = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(schedule))

  hour.textContent = new Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(schedule))

  mentoringsInfo.appendChild(date)
  mentoringsInfo.appendChild(hour)
}

async function fetchUser() {
  const response = await axios.get(
    `https://squad23-api.herokuapp.com/users/${testerUUID}`
  )

  user = response.data

  console.log(user)

  userInfo()
  user.mentorings.map(mentoring => userMentorings(mentoring.schedule_to))
}

fetchUser()
