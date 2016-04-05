# lambda-update-alias-cli [![Build Status](https://travis-ci.org/SamVerschueren/lambda-update-alias-cli.svg?branch=master)](https://travis-ci.org/SamVerschueren/lambda-update-alias-cli)

> Update or create a AWS lambda alias


## Install

```
$ npm install -g lambda-update-alias-cli
```


## Usage

```
$ lambda-alias --help

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
```


## Related

- [lambda-update-alias](https://github.com/SamVerschueren/lambda-update-alias) - API for this module


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
