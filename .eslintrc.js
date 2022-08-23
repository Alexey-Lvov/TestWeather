module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-param-reassign': 0,
    'no-continue': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/control-has-associated-label': 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
    "no-useless-escape": 0,

  },
  env: {
    browser: true,
    node: true,
  },
}
