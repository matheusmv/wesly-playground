import { Monaco } from '@monaco-editor/react';
import { editor, languages, Position } from 'monaco-editor';

export const LANGUAGE = 'wesly';

export const DEMO = `\
println("Hello World");
`;

export function getWeslySnippets(
  model: editor.ITextModel,
  position: Position,
  monaco: Monaco,
) {
  const word = model.getWordUntilPosition(position);
  const range = {
    startLineNumber: position.lineNumber,
    endLineNumber: position.lineNumber,
    startColumn: word.startColumn,
    endColumn: word.endColumn,
  };
  const suggestions = [
    {
      label: 'println',
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: ['println($1);'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Print Function',
      range: range,
    },
    {
      label: 'len',
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: ['len($1);'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Len Function',
      range: range,
    },
    {
      label: 'copy',
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: ['copy($1);'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Copy Function',
      range: range,
    },
    {
      label: 'if',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['if (${1:condition}) {', '\t$0', '}'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'If Statement',
      range: range,
    },
    {
      label: 'ifelse',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['if (${1:condition}) {', '\t$0', '} else {', '\t', '}'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'If-Else Statement',
      range: range,
    },
    {
      label: 'ifelseif',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        'if ($1) {',
        '\t$2',
        '} else if($3) {',
        '\t$4',
        '} else {',
        '\t',
        '}',
      ].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'If-Else-If Statement',
      range: range,
    },
    {
      label: 'func decl',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['func ${1:name}($2) $3 {', '\t$4', '}'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Function',
      range: range,
    },
    {
      label: 'func expr',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['func ($1) $2 {', '\t$3', '}$4;'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Function',
      range: range,
    },
    {
      label: 'object',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['object ${1:name} {', '\t${2:field} ${3:type}', '}'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Object',
      range: range,
    },
    {
      label: 'loop Undef',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['loop {', '\t$0', '}'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Undef loop',
      range: range,
    },
    {
      label: 'loop While',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['loop (${1:condition}) {', '\t$0', '}'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'While loop',
      range: range,
    },
    {
      label: 'loop For',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['loop (${1:init}; ${2:condition}; ${3:post}) {', '\t$0', '}'].join(
        '\n',
      ),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'For loop',
      range: range,
    },
    {
      label: 'var',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['var ${1:name} = $0'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Var declaration',
      range: range,
    },
    {
      label: 'const',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['const ${1:name} = $0'].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Const declaration',
      range: range,
    },
  ];

  return suggestions;
}

export function getWeslyMonarchTokensProvider(): languages.IMonarchLanguage {
  return {
    defaultToken: 'invalid',
    tokenPostfix: '.w',

    keywords: [
      'var',
      'const',
      'if',
      'else',
      'func',
      'return',
      'loop',
      'break',
      'continue',
      'nil',
      'true',
      'false',
      'object',
      'void',
    ],

    typeKeywords: ['any', 'int', 'float', 'char', 'string', 'bool'],

    operators: [
      '&=',
      '|=',
      '^=',
      '<<=',
      '>>=',
      '<<',
      '>>',
      '+=',
      '-=',
      '*=',
      '/=',
      '%=',
      '++',
      '--',
      '||',
      '&&',
      '==',
      '!=',
      '<=',
      '>=',
      '...',
      '+',
      '-',
      '*',
      '/',
      '%',
      '~',
      '&',
      '|',
      '^',
      '?',
      '<',
      '>',
      '=',
      '!',
      ':',
    ],

    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,

    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc:
      /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,

    tokenizer: {
      root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }],

      common: [
        // identifiers and keywords
        [
          /[a-z_$][\w$]*/,
          {
            cases: {
              '@typeKeywords': 'keyword',
              '@keywords': 'keyword',
              '@default': 'identifier',
            },
          },
        ],
        [/[A-Z][\w$]*/, 'type.identifier'], // to show class names nicely
        // [/[A-Z][\w\$]*/, 'identifier'],

        // whitespace
        { include: '@whitespace' },

        // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
        [
          /\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|\/|,|\)|\]|\}|$))/,
          { token: 'regexp', bracket: '@open', next: '@regexp' },
        ],

        // delimiters and operators
        [/[()\[\]]/, '@brackets'],
        [/[<>](?!@symbols)/, '@brackets'],
        [
          /@symbols/,
          {
            cases: {
              '@operators': 'delimiter',
              '@default': '',
            },
          },
        ],

        // numbers
        [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
        [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
        [/0[xX](@hexdigits)/, 'number.hex'],
        [/0[oO]?(@octaldigits)/, 'number.octal'],
        [/0[bB](@binarydigits)/, 'number.binary'],
        [/(@digits)/, 'number'],

        // delimiter: after number because of .\d floats
        [/[;,.]/, 'delimiter'],

        // strings
        [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
        [/'([^'\\]|\\.)*$/, 'string.invalid'], // non-teminated string
        [/"/, 'string', '@string_double'],
        [/'/, 'string', '@string_single'],
        [/`/, 'string', '@string_backtick'],
      ],

      whitespace: [
        [/[ \t\r\n]+/, ''],
        [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
        [/\/\*/, 'comment', '@comment'],
        [/\/\/.*$/, 'comment'],
      ],

      comment: [
        [/[^\/*]+/, 'comment'],
        [/\*\//, 'comment', '@pop'],
        [/[\/*]/, 'comment'],
      ],

      jsdoc: [
        [/[^\/*]+/, 'comment.doc'],
        [/\*\//, 'comment.doc', '@pop'],
        [/[\/*]/, 'comment.doc'],
      ],

      // We match regular expression quite precisely
      regexp: [
        [
          /(\{)(\d+(?:,\d*)?)(\})/,
          ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control'],
        ],
        [
          /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
          [
            'regexp.escape.control',
            { token: 'regexp.escape.control', next: '@regexrange' },
          ],
        ],
        [/(\()(\?:|\?=|\?!)/, ['regexp.escape.control', 'regexp.escape.control']],
        [/[()]/, 'regexp.escape.control'],
        [/@regexpctl/, 'regexp.escape.control'],
        [/[^\\\/]/, 'regexp'],
        [/@regexpesc/, 'regexp.escape'],
        [/\\\./, 'regexp.invalid'],
        [
          /(\/)([gimsuy]*)/,
          [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other'],
        ],
      ],

      regexrange: [
        [/-/, 'regexp.escape.control'],
        [/\^/, 'regexp.invalid'],
        [/@regexpesc/, 'regexp.escape'],
        [/[^\]]/, 'regexp'],
        [/\]/, { token: 'regexp.escape.control', next: '@pop', bracket: '@close' }],
      ],

      string_double: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/"/, 'string', '@pop'],
      ],

      string_single: [
        [/[^\\']+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/'/, 'string', '@pop'],
      ],

      string_backtick: [
        [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
        [/[^\\`$]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/`/, 'string', '@pop'],
      ],

      bracketCounting: [
        [/\{/, 'delimiter.bracket', '@bracketCounting'],
        [/\}/, 'delimiter.bracket', '@pop'],
        { include: 'common' },
      ],
    },
  };
}
