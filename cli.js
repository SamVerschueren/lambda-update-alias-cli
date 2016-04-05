#!/usr/bin/env node
'use strict';
const meow = require('meow');
const logSymbols = require('log-symbols');
const chalk = require('chalk');
const updateAlias = require('lambda-update-alias');

const cli = meow(`
	Usage
	  $ lambda-alias <name>

	Options
	  --alias         The alias
	  --fnversion     Version to create an alias for. [Default: ~latest version~]
	  --aws-profile   The AWS profile to load.
	  --aws-filename  The AWS filename to load the profile from. [Default: ~/.aws/credentials]
	  --aws-region    The AWS region. [Default: us-west-1]

	Examples
	  $ lambda-alias myLambdaFunction --alias=v1 --aws-profile=lambda-update
	    ✔  set alias v1 for myLambdaFunction:3
`);

if (cli.input.length === 0) {
	console.error(`  ${logSymbols.error} provide a lambda function name`);
	process.exit(1);
}

if (!cli.flags.alias) {
	console.error(`  ${logSymbols.error} provide an alias`);
	process.exit(1);
}

cli.flags.version = cli.flags.fnversion;

updateAlias(cli.input[0], cli.flags.alias, cli.flags)
	.then(data => {
		console.log(`  ${logSymbols.success}  set alias ${chalk.cyan(data.Name)} for ${chalk.cyan(cli.input[0] + ':' + data.FunctionVersion)}`);
	})
	.catch(err => {
		console.error(`  ${logSymbols.error}  ${err.message}`);
		process.exit(1);
	});
