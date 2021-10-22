const linksSocialMedia = {
  github: "ericgabrieldasilva",
  youtube: "rocketseat",
  facebook: "",
  instagram: "",
  twitter: ""
}

function chanceSocialMediaLinks(){
  
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }

}

chanceSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name
    userAvatar.src = data.avatar_url
    userLink.href = data.html_url
    userLogin.textContent = data.login
    userBio.textContent = data.bio
  })

}

getGitHubProfileInfos()


