module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'airbnb',
  ],
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(' +
      'json|css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga' +
      ')$',
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
        moduleDirectory: [
          'node_modules',
          'src',
        ],
      },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    strict: 'error',

    // Temporary Overrides
    // -------------------
    // Disabling or changing this set of rules from 'error' to 'warn' until we fix our code.

    'consistent-return': [ruleLevel],
    indent: [ruleLevel, 2, {SwitchCase: 1}],
    'max-len': [
      ruleLevel,
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'no-control-regex': 'off',
    'no-constant-condition': ruleLevel,
    'no-console': ruleLevel,

    'react/default-props-match-prop-types': [
      ruleLevel,
      {allowRequiredDefaults: false},
    ],
    'react/jsx-closing-tag-location': [ruleLevel],
    'react/jsx-indent': [ruleLevel, 2],
    'react/no-danger': ruleLevel,
    'react/prefer-stateless-function': [
      ruleLevel,
      {ignorePureComponents: true},
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['classes', 'style', 'theme'],
        skipUndeclared: false,
      },
    ],

    'react-hooks/exhaustive-deps': 'off',

    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/label-has-for': [ruleLevel],
    'jsx-a11y/no-noninteractive-element-interactions': [
      ruleLevel,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      ruleLevel,
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],

    // AirBnb Overrides
    // ----------------
    // This modification to the rule allows devDependencies in our test files.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          '**/*Helper.js',
          '**/redux-dev-tools.js',
        ],
        optionalDependencies: false,
      },
    ],

    // We shouldn't include any extensions in our imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': 'error',

    // Since we use Redux Thunk, we have to export both the Component and the Connected
    // Component in order to test our UI components. We're following the reccommended way to do this
    // from the redux website: http://redux.js.org/docs/recipes/WritingTests.html#connected-components
    // Unfortunately, this causes this linter rule to fail. So lets turn this off for now.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'off',

    // We actually don't find this that confusing and working around this rule actually makes the
    // code less readable.
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'off',

    // All of our files are .js, so this rule needs to be off
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['off', {extensions: ['.jsx']}],

    // We need to allow for both Unix and Windows line breaks.  Windows users must set the Git autocrlf
    // config setting to true to normalize line endings; this is usually set by the Windows git installer.
    // Note:  if we can turn this rule on only for CI server builds, we can still check for this.
    'linebreak-style': ['off'],

    // Disable because we don't need subtitles for the videos and audios.
    'jsx-a11y/media-has-caption': 'off',

    // Disable prefer default export as we start using Webpack 2 tree shaking
    // https://webpack.js.org/guides/tree-shaking/
    'import/prefer-default-export': 'off',

    // This rules should be left off until this issue is resolved:
    // https://github.com/airbnb/javascript/issues/1584
    'function-paren-newline': 'off',

    // This rule is off for now because it requires more work to fix. We probably should be using
    // HTML button element instead of the anchor element in most of these errors.
    'jsx-a11y/anchor-is-valid': 'off',

    // As of this React release (https://reactjs.org/blog/2019/02/06/react-v16.8.0.html),
    // we have eslint rules for hooks
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
  },
};
