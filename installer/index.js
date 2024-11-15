#!/usr/bin/env node

import Spinner from './spinner.js'
import got from 'got'
import { x } from 'tar'
import path from 'path'
import { makeDirectorySync } from 'make-dir'
import { promisify } from 'util'
import { exec as defaultExec } from 'child_process'
import chalk from 'chalk'

const cwd = process.cwd()

async function pm() {
  let pm = 'yarn'
  const exec = promisify(defaultExec)
  try {
    await exec(`${pm} -v`, { cwd })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    pm = 'npm'
    try {
      await exec(`${pm} -v`, { cwd })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      pm = undefined
    }
  }

  if (pm === undefined) {
    console.log(
      chalk.red('No available package manager! (`npm` or `yarn` is required)')
    )
    process.exit(1)
  }

  return pm
}

async function downloadProject() {
  Spinner.create('Creating directory...')
  const dirname = path.join(cwd, 'nextron-shadcn-app')

  makeDirectorySync(dirname)

  Spinner.create('Downloading project and extracting...')
  const mainUrl =
    'https://codeload.github.com/MaximePremont/boilerplate-nextron-shadcn/tar.gz/main'
  await got
    .stream(mainUrl)
    .pipe(
      x({ cwd: dirname, filter: path => !path.includes('installer'), strip: 1 })
    )

  const cmd =
    (await pm()) === 'yarn' ? 'yarn && yarn dev' : 'npm install && npm run dev'
  Spinner.clear(`Run \`${cmd}\` inside of "${dirname}" to start the app`)
}

downloadProject()
