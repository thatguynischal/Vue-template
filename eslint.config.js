import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import vue from 'eslint-plugin-vue'
import globals from 'globals'
import * as vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['dist/*', 'node_modules/*']
  },
  js.configs.recommended,
  {
    files: ['**/*.vue'],
    plugins: {
      vue: vue,
      '@typescript-eslint': typescript,
      prettier: prettier
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    rules: {
      ...vue.configs['vue3-recommended'].rules,
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx,d.ts}'],
    plugins: {
      '@typescript-eslint': typescript,
      prettier: prettier
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    rules: {
      ...typescript.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]
