'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  borderStyle: 'round',
  margin: 1,
  padding: 1
}

// Text + chalk definitions
const data = {
  name: chalk.white('   Alfred Dagenais 👋'),
  handle: chalk.white('@alfreddagenais'),
  work: chalk.white('Web team/tech lead at ') + chalk.blueBright('telequebec.tv'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('ProgrammeurWeb'),
  github: chalk.gray('https://github.com/') + chalk.green('alfreddagenais'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('alfreddagenais'),
  web: chalk.cyan('https://alfreddagenais.com'),
  blog: chalk.yellow('https://kilukru.dev'),
  npx: chalk.red('npx') + ' ' + chalk.white('alfreddagenais'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelBlog: chalk.white.bold('    Blog:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const bloging = `${data.labelBlog}  ${data.blog}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + // data.labelWeb + data.web
               bloging + newline + newline + // data.labelBlog + data.blog
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.hex('#DA0060')(boxen(output, options)))
