export interface Lesson {
  id: string
  title: string
  content: string
  formula: string
  example: string
  syntax: string
  commonMistakes: string[]
}

export interface Module {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  lessons: Lesson[]
}

export const courseData: Module[] = [
  {
    id: 'basic-functions',
    title: 'Basic Functions',
    description: 'Master the fundamental Excel functions you\'ll use every day',
    difficulty: 'beginner',
    lessons: [
      {
        id: 'sum',
        title: 'SUM',
        content: 'The SUM function adds up all the numbers in a range of cells. It\'s the most commonly used function in Excel!',
        formula: 'SUM',
        syntax: '=SUM(number1, [number2], ...)',
        example: '=SUM(A1:A10) adds all values from A1 to A10',
        commonMistakes: [
          'Forgetting the equals sign (=) at the start',
          'Using SUM on text cells (they\'re ignored)',
          'Not closing parentheses properly'
        ]
      },
      {
        id: 'average',
        title: 'AVERAGE',
        content: 'The AVERAGE function calculates the arithmetic mean of numbers. Perfect for finding averages like test scores or temperatures.',
        formula: 'AVERAGE',
        syntax: '=AVERAGE(number1, [number2], ...)',
        example: '=AVERAGE(B1:B5) finds the average of 5 test scores',
        commonMistakes: [
          'Including empty cells in the range',
          'Mixing text with numbers in the range',
          'Confusing AVERAGE with MEDIAN'
        ]
      },
      {
        id: 'count',
        title: 'COUNT',
        content: 'The COUNT function counts how many cells contain numbers. Use COUNTA to count any non-empty cells.',
        formula: 'COUNT',
        syntax: '=COUNT(value1, [value2], ...)',
        example: '=COUNT(A1:A100) counts numeric cells in the range',
        commonMistakes: [
          'Using COUNT for text (use COUNTA instead)',
          'Forgetting COUNT ignores empty cells',
          'Confusing COUNT with COUNTIF'
        ]
      },
      {
        id: 'min-max',
        title: 'MIN and MAX',
        content: 'MIN finds the smallest value, MAX finds the largest. Great for finding highest scores, lowest prices, etc.',
        formula: 'MIN / MAX',
        syntax: '=MIN(number1, [number2], ...) / =MAX(number1, [number2], ...)',
        example: '=MIN(C1:C10) finds lowest value | =MAX(C1:C10) finds highest',
        commonMistakes: [
          'Assuming MIN/MAX work with text',
          'Forgetting they only return values, not positions',
          'Confusing with MINA/MAXA for special cases'
        ]
      }
    ]
  },
  {
    id: 'text-functions',
    title: 'Text Functions',
    description: 'Learn to manipulate and analyze text data like a pro',
    difficulty: 'beginner',
    lessons: [
      {
        id: 'concatenate',
        title: 'CONCATENATE & CONCAT',
        content: 'Combine text from multiple cells into one. CONCAT is the modern version, CONCATENATE is the classic.',
        formula: 'CONCATENATE / CONCAT',
        syntax: '=CONCATENATE(text1, [text2], ...) or =CONCAT(text1, [text2], ...)',
        example: '=CONCATENATE(A1, " ", B1) combines first and last names with a space',
        commonMistakes: [
          'Forgetting spaces between concatenated text',
          'Using & operator inconsistently',
          'Not converting numbers to text when needed'
        ]
      },
      {
        id: 'len',
        title: 'LEN',
        content: 'Count the number of characters in a text string. Useful for validation and text analysis.',
        formula: 'LEN',
        syntax: '=LEN(text)',
        example: '=LEN(A1) counts characters in cell A1',
        commonMistakes: [
          'Including spaces in character count (LEN counts them!)',
          'Using on empty cells',
          'Confusing with word count'
        ]
      },
      {
        id: 'upper-lower-proper',
        title: 'UPPER, LOWER, PROPER',
        content: 'Change text case: UPPER makes uppercase, LOWER makes lowercase, PROPER capitalizes first letter of each word.',
        formula: 'UPPER / LOWER / PROPER',
        syntax: '=UPPER(text) / =LOWER(text) / =PROPER(text)',
        example: '=UPPER(A1) converts "hello" to "HELLO"',
        commonMistakes: [
          'Thinking PROPER capitalizes every letter',
          'Using these on numbers',
          'Not realizing they create new values, don\'t modify original'
        ]
      },
      {
        id: 'trim',
        title: 'TRIM',
        content: 'Remove extra spaces from text. Great for cleaning up data!',
        formula: 'TRIM',
        syntax: '=TRIM(text)',
        example: '=TRIM(A1) removes leading/trailing spaces',
        commonMistakes: [
          'Expecting TRIM to remove all spaces',
          'Using on numbers',
          'Not realizing TRIM doesn\'t affect internal spaces'
        ]
      }
    ]
  },
  {
    id: 'conditional-logic',
    title: 'Conditional Logic',
    description: 'Master IF statements and conditional functions to make smart formulas',
    difficulty: 'intermediate',
    lessons: [
      {
        id: 'if-statement',
        title: 'IF Function',
        content: 'IF tests a condition and returns one value if true, another if false. The foundation of conditional logic!',
        formula: 'IF',
        syntax: '=IF(logical_test, [value_if_true], [value_if_false])',
        example: '=IF(A1>90, "A", "Not an A") grades based on score',
        commonMistakes: [
          'Forgetting the logical test (condition)',
          'Using = instead of == for comparison',
          'Not handling all possible conditions'
        ]
      },
      {
        id: 'nested-if',
        title: 'Nested IF (Multiple Conditions)',
        content: 'Combine multiple IF statements to test several conditions. Power move! But keep it readable.',
        formula: 'Nested IF',
        syntax: '=IF(test1, value1, IF(test2, value2, IF(test3, value3, default)))',
        example: '=IF(A1>=90,"A",IF(A1>=80,"B",IF(A1>=70,"C","F"))) creates grade scale',
        commonMistakes: [
          'Nesting too many levels (use IFS instead)',
          'Incorrect logical order',
          'Forgetting closing parentheses',
          'Not handling all cases'
        ]
      },
      {
        id: 'ifs',
        title: 'IFS Function (Multiple Conditions - Modern)',
        content: 'IFS is cleaner than nested IFs. Test multiple conditions and return the corresponding value.',
        formula: 'IFS',
        syntax: '=IFS(condition1, value1, condition2, value2, ...)',
        example: '=IFS(A1>=90,"A",A1>=80,"B",A1>=70,"C",TRUE,"F") grades more cleanly',
        commonMistakes: [
          'Forgetting IFS requires pairs of conditions and values',
          'Not providing a default condition',
          'Mixing IFS with other IF statements'
        ]
      },
      {
        id: 'and-or',
        title: 'AND / OR Functions',
        content: 'AND tests if ALL conditions are true. OR tests if ANY condition is true. Combine with IF for power!',
        formula: 'AND / OR',
        syntax: '=AND(logical1, [logical2], ...) / =OR(logical1, [logical2], ...)',
        example: '=IF(AND(A1>0, A1<100), "Valid", "Invalid") checks range',
        commonMistakes: [
          'Confusing AND with OR logic',
          'Using with too many conditions (becomes unreadable)',
          'Not combining with IF for useful results'
        ]
      }
    ]
  },
  {
    id: 'lookup-functions',
    title: 'Lookup Functions',
    description: 'Find and retrieve data like a database expert',
    difficulty: 'intermediate',
    lessons: [
      {
        id: 'vlookup',
        title: 'VLOOKUP',
        content: 'Look up a value in the first column of a range, return a value in the same row from another column.',
        formula: 'VLOOKUP',
        syntax: '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
        example: '=VLOOKUP("John", A1:C10, 3, FALSE) finds John and returns data from column 3',
        commonMistakes: [
          'Lookup column must be the first column in range',
          'Column index is relative to range, not absolute column',
          'Using TRUE when you need exact matches (FALSE)',
          'Range must be sorted for TRUE range_lookup'
        ]
      },
      {
        id: 'hlookup',
        title: 'HLOOKUP',
        content: 'Like VLOOKUP but searches horizontally (left to right) instead of vertically.',
        formula: 'HLOOKUP',
        syntax: '=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])',
        example: '=HLOOKUP("2024", A1:D5, 2, FALSE) finds 2024 column, returns row 2 value',
        commonMistakes: [
          'Confusing row_index with column_index',
          'Using when data is arranged vertically (use VLOOKUP)',
          'Forgetting lookup row must be first row in range'
        ]
      },
      {
        id: 'index-match',
        title: 'INDEX / MATCH (Advanced Lookup)',
        content: 'More flexible than VLOOKUP. INDEX returns value at position, MATCH finds the position.',
        formula: 'INDEX / MATCH',
        syntax: '=INDEX(array, MATCH(lookup_value, lookup_array, 0))',
        example: '=INDEX(C1:C10, MATCH("John", A1:A10, 0)) finds John in column A, returns from column C',
        commonMistakes: [
          'Using 1 instead of 0 in MATCH (0=exact match)',
          'Mismatched array sizes',
          'Not understanding INDEX returns position, MATCH finds it'
        ]
      },
      {
        id: 'filter',
        title: 'FILTER (Modern Excel 365)',
        content: 'Return data that meets criteria. Super powerful for filtering tables!',
        formula: 'FILTER',
        syntax: '=FILTER(array, include)',
        example: '=FILTER(A1:C100, (A1:A100>1000)) returns rows where column A > 1000',
        commonMistakes: [
          'Thinking FILTER returns single values (it returns arrays)',
          'Using on older Excel versions (365+ only)',
          'Complex criteria need careful parentheses'
        ]
      }
    ]
  },
  {
    id: 'advanced-functions',
    title: 'Advanced Functions',
    description: 'Level up with powerful formulas for complex tasks',
    difficulty: 'advanced',
    lessons: [
      {
        id: 'sumif',
        title: 'SUMIF / SUMIFS',
        content: 'Sum values that meet criteria. SUMIF for one criteria, SUMIFS for multiple.',
        formula: 'SUMIF / SUMIFS',
        syntax: '=SUMIF(range, criteria, [sum_range]) / =SUMIFS(sum_range, criteria_range1, criteria1, ...)',
        example: '=SUMIF(A1:A10, ">100", B1:B10) sums B column where A > 100',
        commonMistakes: [
          'Forgetting sum_range parameter',
          'Criteria syntax (use quotes for text/operators)',
          'Mixing SUMIF with SUMIFS logic'
        ]
      },
      {
        id: 'countif',
        title: 'COUNTIF / COUNTIFS',
        content: 'Count cells that meet criteria. COUNTIF for one criteria, COUNTIFS for multiple.',
        formula: 'COUNTIF / COUNTIFS',
        syntax: '=COUNTIF(range, criteria) / =COUNTIFS(criteria_range1, criteria1, ...)',
        example: '=COUNTIF(A1:A100, "Pass") counts "Pass" entries',
        commonMistakes: [
          'Criteria is case-insensitive',
          'Wildcards: use * for any characters, ? for single',
          'Empty cells count as 0'
        ]
      },
      {
        id: 'array-formulas',
        title: 'Array Formulas',
        content: 'Process multiple values and return multiple results. Game changer for complex calculations!',
        formula: 'Array Formulas',
        syntax: 'Various, but often =FORMULA(...) entered with Ctrl+Shift+Enter',
        example: '=SUM(IF(A1:A10>100, B1:B10, 0)) processes each row conditionally',
        commonMistakes: [
          'Forgetting to enter with Ctrl+Shift+Enter in older Excel',
          'Too complex logic (hard to debug)',
          'Performance issues with large arrays'
        ]
      },
      {
        id: 'sort-unique',
        title: 'SORT / UNIQUE (Excel 365)',
        content: 'SORT arranges data in order. UNIQUE removes duplicates. Modern Excel 365 features!',
        formula: 'SORT / UNIQUE',
        syntax: '=SORT(array, [sort_index], [sort_order]) / =UNIQUE(array)',
        example: '=UNIQUE(A1:A100) lists each unique value once | =SORT(A1:A10, 1, 1) sorts ascending',
        commonMistakes: [
          'Available only in Excel 365',
          'SORT returns new array, doesn\'t modify original',
          'Complex sorting needs multiple functions'
        ]
      }
    ]
  }
]
