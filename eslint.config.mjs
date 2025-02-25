import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import jest from 'eslint-plugin-jest'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Given: 'readonly',
        When: 'readonly',
        Then: 'readonly',
        inject: 'readonly',
        actor: 'readonly',
        Playwright: 'readonly',
        any: 'readonly'
      }
    }
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  // DOC: https://www.npmjs.com/package/eslint-plugin-jest
  {
    files: ['test/**', 'specs/**'],
    ...jest.configs['flat/recommended']
  }
]
