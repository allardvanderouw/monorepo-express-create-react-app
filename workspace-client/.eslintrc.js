const pkg = require('./package.json')

const reactVersion = () => {
	if (pkg.dependencies && pkg.dependencies.react) {
		return { version: pkg.dependencies.react.replace(/[^0-9.]/g, '') }
	}
	if (pkg.devDependencies && pkg.devDependencies.react) {
		return { version: pkg.devDependencies.react.replace(/[^0-9.]/g, '') }
	}
}

module.exports = {
  settings: {
    react: {
      ...reactVersion()
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-loop-func': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'object-curly-newline': 'off',
    semi: ['error', 'never']
  }
}
