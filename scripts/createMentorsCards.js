const mentorsContainer = document.getElementById('mentors')

async function fetchMentors() {
  const response = await axios.get('https://squad23-api.herokuapp.com/mentors')

  const mentors = response.data

  mentors.map(mentor => {
    createMentorCard(mentor)
  })
}

function createSkillText(skill) {
  const element = document.createElement('h4')
  element.textContent = skill

  return element
}

function createMentorCard(mentor) {
  const cardWrapper = document.createElement('div')
  const mentorImage = document.createElement('div')
  const mentorName = document.createElement('h3')
  const mentorRole = document.createElement('h4')
  const mentorDescription = document.createElement('div')
  const mentorSkills = document.createElement('div')
  const redirectToProfile = document.createElement('button')
  const link = document.createElement('a')

  cardWrapper.className = 'mentors-card'
  mentorImage.className = 'mentors-card-img'
  mentorName.className = 'mentors-card-name'
  mentorDescription.className = 'mentors-card-description'
  mentorSkills.className = 'mentors-card-description-specialty'
  redirectToProfile.className = 'mentors-card-btn'
  link.href = `mentor-profile.html?u=${mentor.id}`
  link.textContent = 'Ver perfil'
  redirectToProfile.appendChild(link)

  mentorName.textContent = mentor.name
  mentorRole.textContent = mentor.role
  mentorDescription.appendChild(mentorSkills)
  mentor.skills.map(skill => {
    mentorSkills.appendChild(createSkillText(skill))
  })

  cardWrapper.appendChild(mentorImage)
  cardWrapper.appendChild(mentorName)
  cardWrapper.appendChild(mentorRole)
  cardWrapper.appendChild(mentorDescription)
  cardWrapper.appendChild(redirectToProfile)

  mentorsContainer.appendChild(cardWrapper)
}

fetchMentors()
