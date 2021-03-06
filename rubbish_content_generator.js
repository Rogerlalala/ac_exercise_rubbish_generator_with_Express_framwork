function random(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function rubbishGenerator(option) {

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const output = {
    rubbish: '',
    engineer: '',
    designer: '',
    entrepreneur: ''
  }

  if (!option.job) {
    output.rubbish += `You must choose a job.`
    console.log(output)
  } else {
    switch (option.job) {
      case 'engineer':
        output.engineer += 'checked'
        output.rubbish += `身為一個工程師，${random(task.engineer)}，${random(phrase)}吧！`
        break
      case 'designer':
        output.designer += 'checked'
        output.rubbish += `身為一個設計師，${random(task.designer)}，${random(phrase)}吧！`
        break
      case 'entrepreneur':
        output.entrepreneur += 'checked'
        output.rubbish += `身為一個創業家，${random(task.entrepreneur)}，${random(phrase)}吧！`
        break
    }
    console.log(output)
  }
  return output
}

module.exports = rubbishGenerator
