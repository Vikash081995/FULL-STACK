const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

const makeChart=(games)=>{
  const ulParent = document.createElement('ul');
  for (let game of games) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement('li');
    const { team: aTeam, points: aPoints } = awayTeam;
    const { team: hTeam, points: hPoints } = homeTeam;
    const teamNames = `${aTeam} @ ${hTeam}`
    let scoreLine;
    if (awayTeam.points > homeTeam.points) {
      scoreLine = `<b>${aPoints}</b> - ${hPoints}`
    } else {
      scoreLine = `${aPoints} - <b>${hPoints}</b>`
    }
    gameLi.innerHTML = `${awayTeam.team} @ ${homeTeam.team}`
    ulParent.appendChild(gameLi)
  }
  const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
  gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')
  gameLi.innerHTML = `${teamNames} ${scoreLine}`

  return ulParent
}

const chart1 = makeChart(warriorsGames)
document.body.prepend(ulParent)

// **************************************************
const colors=['red','orange','yellow','green','blue','purple']


const h1 = document.querySelector('h1')
function changeColor(event){
  h1.style.color = this.style.backgroundColor;
}

const container = document.querySelector('#boxes')
for(let color of colors){
  const box = document.createElement('div')
  box.style.backgroundColor = color;
  box.classList.add('box')
  container.appendChild(box);
  box.addEventListener('click',changeColor)
}
document.body.addEventListener('keypress',function(e){
  console.log(e)
  h1.innerText = e.key
  console.log(e.key)
})

// **************************************************
const input = document.querySelector('#username')

input.addEventListener('keydown',function(e){
  console.log('KEY DOWN')
})

input.addEventListener('keyup',function(e){
  console.log('KEY UP')
})

input.addEventListener('keypress',function(e){
  console.log('KEY PRESS')
})

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items')

addItemInput.addEventListener('keypress',function(e){
  console.log(e)
  if(e.key === 'Enter'){
    if(!this.value) return;
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);
    this.value = '';
  }
})