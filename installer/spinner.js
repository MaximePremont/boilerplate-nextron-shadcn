#!/usr/bin/env node

import chalk from 'chalk'
import ora from 'ora'

const cache = {}
const isTTY = process.env.CI ? false : process.stdout.isTTY

function create(text) {
  if (!isTTY) {
    console.log(chalk`{cyan [create-nextron-app]} ${text}`)
    return
  }

  const { spinner } = cache
  if (spinner) {
    spinner.succeed()
    delete cache.spinner
  }

  cache.spinner = ora({
    text,
    color: 'magenta'
  }).start()
}

function clear(message, isError) {
  if (!isTTY) {
    console.log(chalk`{cyan [create-nextron-app]} ${message}`)
    return
  }

  const { spinner } = cache
  if (spinner) {
    if (isError) spinner.fail()
    else spinner.succeed()
    delete cache.spinner
    console.log('')
  }

  const prefix = isError ? chalk.red('Error!') : chalk.green('Done!')
  console.log(`${prefix} ${message}`)
}

function fail(message) {
  clear(message, true)
  process.exit(1)
}

const Spinner = {
  create,
  clear,
  fail
}

export default Spinner
