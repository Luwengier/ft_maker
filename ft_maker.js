

function ftMaker(options) {
  // define things user might want
  const careers = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!options.career) {
    return '!!!身為一位使用者按個按鈕應該很容易吧!!!'
  }

  // create a nonsense to store things user picked up
  let nonsense = ''

  const careerOne = careers[options.career]
  const index = Math.floor(Math.random() * task[options.career].length)
  const taskOne = task[options.career][index]
  const phraseOne = phrase[Math.floor(Math.random() * phrase.length)]

  // return the generated nonsense
  nonsense = '身為一位' + nonsense + careerOne + taskOne + phraseOne + '吧!'

  return nonsense
}

// export ftMaker function for other files to use
module.exports = ftMaker
