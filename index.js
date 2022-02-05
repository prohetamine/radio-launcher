const express     = require('express')
    , app         = express()
    , openurl     = require('openurl')
    , fs          = require('fs-extra')
    , path        = require('path')
    , CFonts      = require('cfonts')
    , splitSlice  = require('split-slice')

const port = process.env.PORT || 3000

const distFiles = fs.readdirSync(
  path.join(__dirname, 'dist')
)

app.use('/', async (req, res, next) => {
  const urlFilename = path.basename(req.url)
  const filename = urlFilename ? urlFilename : 'index.html'

  const findFilename = distFiles.find(distFile => distFile === filename)

  if (findFilename) {
    const filePath = path.join(__dirname, 'dist', findFilename)
    res.sendFile(filePath)
  } else {
    next()
  }
})

app.listen(port, () => {
  console.clear()
  console.log('')
  console.log('')
  CFonts.say('Radio|Station|Launcher', {
    font: 'simple',
    align: 'center',
    colors: ['yellow'],
    background: 'transparent',
    letterSpacing: 1,
    space: false,
    env: 'node',
  })

  const launcherHost = `http://127.0.0.1:${port}`

  CFonts.say(`Open launcher url: ${launcherHost}${' '.repeat(32-launcherHost.length)}`, {
    font: 'console',
    align: 'center',
    colors: ['yellow'],
    background: 'transparent',
    space: true,
    lineHeight: 0,
    env: 'node'
  })

  const message = splitSlice(`It will take some time to start and start playback in the browser... open the page and wait. If you have any questions, please contact telegram: @prohetamine. And don't be afraid to help the project. by Stas Prohetamie 2022.01.27`, 60, { space: true, align: 'left' }).join('|')

  CFonts.say(message, {
    font: 'console',
    align: 'center',
    colors: ['yellow'],
    background: 'transparent',
    space: false,
    lineHeight: 0,
    env: 'node'
  })

  openurl.open(launcherHost)
})
