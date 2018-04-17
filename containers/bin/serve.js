console.log('serve')

const {spawn, spawnSync} = require('child_process')
const path = require('path')

dev = spawn('bash', [path.join(__dirname, '../dev.sh')])
dev.stdout.pipe(process.stdout)
dev.stderr.pipe(process.stdout)

// process.on('SIGINT', sigint => {
//   console.log('>>>', sigint)
// })

process.stdin.resume()

process.on('exit', () => {
  console.log('cleaning up')
  dev = spawnSync('bash', [path.join(__dirname, '../dev_cleanup.sh')])
  // dev.stdout.pipe(process.stdout)
  // dev.stderr.pipe(process.stderr)
  console.log('exit code:', dev.output.map( e => String(e) ))
})
exit = () => {
  console.log('exit')
  process.exit()
}
process.on('SIGINT', exit)
process.on('SIGUSR1', exit)
process.on('SIGUSR2', exit)
process.on('uncaughtException', exit)