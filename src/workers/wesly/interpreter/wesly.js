var Zt = (function () {
    var t = function (ge, y, p, h) {
        for (p = p || {}, h = ge.length; h--; p[ge[h]] = y);
        return p;
      },
      e = [1, 12],
      r = [1, 41],
      n = [1, 13],
      l = [1, 21],
      i = [1, 42],
      u = [1, 60],
      o = [1, 43],
      f = [1, 10],
      R = [1, 11],
      G = [1, 22],
      pe = [1, 23],
      Ge = [1, 24],
      Re = [1, 25],
      He = [1, 26],
      k = [1, 68],
      x = [1, 69],
      g = [1, 70],
      w = [1, 71],
      d = [1, 44],
      S = [1, 45],
      T = [1, 46],
      E = [1, 47],
      q = [1, 48],
      A = [1, 49],
      V = [1, 50],
      O = [1, 51],
      j = [1, 52],
      B = [
        4, 20, 21, 27, 28, 29, 33, 37, 39, 53, 59, 80, 82, 83, 84, 87, 134, 135, 143, 144,
        157, 158, 159, 160, 161, 162, 163, 164, 165,
      ],
      xe = [1, 75],
      Kt = [1, 85],
      Qt = [1, 87],
      I = [1, 96],
      b = [1, 97],
      Me = [7, 23, 25, 26, 29, 38],
      Pe = [
        7, 23, 25, 26, 29, 38, 107, 109, 111, 113, 115, 117, 120, 121, 124, 125, 126, 127,
        130, 131, 134, 135, 138, 139, 140, 146, 147,
      ],
      _t = [2, 176],
      er = [1, 105],
      tr = [1, 104],
      rr = [1, 103],
      L = [
        7, 21, 23, 25, 26, 29, 37, 38, 58, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
        107, 109, 111, 113, 115, 117, 120, 121, 124, 125, 126, 127, 130, 131, 134, 135,
        138, 139, 140, 146, 147, 149,
      ],
      sr = [7, 23, 25, 26, 29, 38, 107, 109],
      nr = [1, 119],
      ir = [1, 121],
      ar = [7, 23, 25, 26, 29, 38, 107, 109, 111],
      lr = [1, 122],
      ur = [7, 23, 25, 26, 29, 38, 107, 109, 111, 113],
      cr = [1, 126],
      _ = [1, 133],
      ee = [1, 134],
      te = [1, 135],
      re = [1, 136],
      se = [1, 137],
      ne = [1, 138],
      ie = [1, 139],
      or = [7, 23, 25, 26, 29, 38, 107, 109, 111, 113, 115],
      pr = [1, 140],
      We = [14, 15, 16, 17, 18, 19, 20, 27, 33, 37],
      hr = [7, 23, 25, 26, 29, 38, 107, 109, 111, 113, 115, 117],
      fr = [1, 142],
      yr = [1, 143],
      mr = [7, 23, 25, 26, 29, 38, 107, 109, 111, 113, 115, 117, 120, 121],
      vr = [1, 147],
      br = [1, 148],
      kr = [1, 149],
      xr = [1, 150],
      gr = [
        7, 23, 25, 26, 29, 38, 107, 109, 111, 113, 115, 117, 120, 121, 124, 125, 126, 127,
      ],
      wr = [1, 152],
      dr = [1, 153],
      Sr = [
        7, 23, 25, 26, 29, 38, 107, 109, 111, 113, 115, 117, 120, 121, 124, 125, 126, 127,
        130, 131,
      ],
      Tr = [1, 155],
      Er = [1, 156],
      qr = [
        7, 23, 25, 26, 29, 38, 107, 109, 111, 113, 115, 117, 120, 121, 124, 125, 126, 127,
        130, 131, 134, 135,
      ],
      Ar = [1, 158],
      Vr = [1, 159],
      Or = [1, 160],
      Xe = [
        7, 23, 25, 26, 29, 38, 107, 109, 111, 113, 115, 117, 120, 121, 124, 125, 126, 127,
        130, 131, 134, 135, 138, 139, 140,
      ],
      $ = [
        20, 21, 27, 33, 37, 39, 134, 135, 143, 144, 157, 158, 159, 160, 161, 162, 163,
        164, 165,
      ],
      fe = [7, 25],
      jr = [7, 25, 58],
      Ir = [2, 45],
      Lr = [2, 68],
      $r = [
        4, 7, 20, 21, 23, 25, 26, 27, 28, 29, 33, 37, 38, 39, 53, 58, 59, 80, 82, 83, 84,
        86, 87, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 109, 111, 113, 115,
        117, 120, 121, 124, 125, 126, 127, 130, 131, 134, 135, 138, 139, 140, 143, 144,
        146, 147, 149, 157, 158, 159, 160, 161, 162, 163, 164, 165,
      ],
      ye = [25, 29],
      Ye = [1, 215],
      M = [7, 23, 25, 28, 29, 33, 58],
      ue = [23, 25],
      Mt = [14, 15, 16, 17, 18, 19, 20, 25, 27, 33, 37],
      Fr = [1, 236],
      Pt = [29, 33],
      Br = [2, 81],
      Ut = {
        trace: function () {},
        yy: {},
        symbols_: {
          error: 2,
          Program: 3,
          EOF: 4,
          Declarations: 5,
          Sep: 6,
          ';': 7,
          TypeDeclaration: 8,
          Identifier: 9,
          AtomicType: 10,
          FunctionType: 11,
          ObjectType: 12,
          ArrayType: 13,
          int: 14,
          float: 15,
          char: 16,
          string: 17,
          bool: 18,
          void: 19,
          func: 20,
          '(': 21,
          FunctionTypeParameterList: 22,
          ')': 23,
          FunctionReturnType: 24,
          ',': 25,
          ':': 26,
          object: 27,
          '{': 28,
          '}': 29,
          ObjectFieldDeclarationList: 30,
          NamedTypeList: 31,
          NamedType: 32,
          IDENT: 33,
          ArrayDimensionList: 34,
          ValidArrayType: 35,
          ArrayDimension: 36,
          '[': 37,
          ']': 38,
          INT: 39,
          Declaration: 40,
          VarDeclaration: 41,
          ConstDeclaration: 42,
          FunctionDeclaration: 43,
          ObjectDeclaration: 44,
          Statement: 45,
          InitDeclaratorList: 46,
          InitDeclarator: 47,
          InitTypedDeclaratorList: 48,
          InitTypedDeclarator: 49,
          Initializer: 50,
          Expression: 51,
          InitializerList: 52,
          var: 53,
          InitVarDeclaratorList: 54,
          VarSpec: 55,
          VarType: 56,
          VarValue: 57,
          '=': 58,
          const: 59,
          InitConstDeclaratorList: 60,
          ConstSpec: 61,
          ConstType: 62,
          ConstValue: 63,
          FunctionParameterDeclarationList: 64,
          FunctionReturn: 65,
          FunctionBody: 66,
          ParamList: 67,
          VariadicDeclaration: 68,
          Param: 69,
          '...': 70,
          ValidVariadicType: 71,
          BlockStatement: 72,
          ObjectField: 73,
          ReturnStatement: 74,
          BreakStatement: 75,
          ContinueStatement: 76,
          IfStatement: 77,
          LoopStatement: 78,
          ExpressionStatement: 79,
          return: 80,
          ReturnAction: 81,
          break: 82,
          continue: 83,
          if: 84,
          ElseStatement: 85,
          else: 86,
          loop: 87,
          LoopBody: 88,
          LoopInit: 89,
          LoopCond: 90,
          LoopPost: 91,
          AssignmentExpression: 92,
          ConditionalExpression: 93,
          PostfixExpression: 94,
          AssigmentOperator: 95,
          '+=': 96,
          '-=': 97,
          '*=': 98,
          '/=': 99,
          '%=': 100,
          '&=': 101,
          '|=': 102,
          '^=': 103,
          '<<=': 104,
          '>>=': 105,
          LogicalOrExpression: 106,
          '?': 107,
          LogicalAndExpression: 108,
          '||': 109,
          OrExpression: 110,
          '&&': 111,
          XorExpression: 112,
          '|': 113,
          AndExpression: 114,
          '^': 115,
          EqualityExpression: 116,
          '&': 117,
          RelationalExpression: 118,
          EqualityOperator: 119,
          '==': 120,
          '!=': 121,
          ShiftExpression: 122,
          RelationalOperator: 123,
          '<': 124,
          '>': 125,
          '<=': 126,
          '>=': 127,
          AdditiveExpression: 128,
          ShiftOperator: 129,
          '<<': 130,
          '>>': 131,
          MultiplicativeExpression: 132,
          AdditiveOperator: 133,
          '+': 134,
          '-': 135,
          UnaryExpression: 136,
          MultiplicativeOperator: 137,
          '*': 138,
          '/': 139,
          '%': 140,
          UpdateExpression: 141,
          UnaryOperator: 142,
          '~': 143,
          '!': 144,
          PostfixOperator: 145,
          '++': 146,
          '--': 147,
          PrimaryExpression: 148,
          '.': 149,
          CallExpressionArguments: 150,
          ArgumentList: 151,
          GroupExpression: 152,
          Literal: 153,
          FunctionExpression: 154,
          ObjectInitializationExpression: 155,
          ArrayInitializationExpression: 156,
          HEX: 157,
          BIN: 158,
          OCT: 159,
          FLOAT: 160,
          CHAR: 161,
          STRING: 162,
          true: 163,
          false: 164,
          nil: 165,
          ObjectInitializationListExpression: 166,
          ObjectArguments: 167,
          ObjectArgumentsExpression: 168,
          ArrayArguments: 169,
          ArrayArgumentInitializer: 170,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: 'error',
          4: 'EOF',
          7: ';',
          14: 'int',
          15: 'float',
          16: 'char',
          17: 'string',
          18: 'bool',
          19: 'void',
          20: 'func',
          21: '(',
          23: ')',
          25: ',',
          26: ':',
          27: 'object',
          28: '{',
          29: '}',
          33: 'IDENT',
          37: '[',
          38: ']',
          39: 'INT',
          53: 'var',
          58: '=',
          59: 'const',
          70: '...',
          80: 'return',
          82: 'break',
          83: 'continue',
          84: 'if',
          86: 'else',
          87: 'loop',
          96: '+=',
          97: '-=',
          98: '*=',
          99: '/=',
          100: '%=',
          101: '&=',
          102: '|=',
          103: '^=',
          104: '<<=',
          105: '>>=',
          107: '?',
          109: '||',
          111: '&&',
          113: '|',
          115: '^',
          117: '&',
          120: '==',
          121: '!=',
          124: '<',
          125: '>',
          126: '<=',
          127: '>=',
          130: '<<',
          131: '>>',
          134: '+',
          135: '-',
          138: '*',
          139: '/',
          140: '%',
          143: '~',
          144: '!',
          146: '++',
          147: '--',
          149: '.',
          157: 'HEX',
          158: 'BIN',
          159: 'OCT',
          160: 'FLOAT',
          161: 'CHAR',
          162: 'STRING',
          163: 'true',
          164: 'false',
          165: 'nil',
        },
        productions_: [
          0,
          [3, 1],
          [3, 2],
          [6, 1],
          [8, 1],
          [8, 1],
          [8, 1],
          [8, 1],
          [8, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [11, 5],
          [22, 0],
          [22, 1],
          [22, 3],
          [24, 0],
          [24, 2],
          [12, 3],
          [12, 4],
          [31, 1],
          [31, 2],
          [32, 2],
          [32, 3],
          [13, 2],
          [34, 1],
          [34, 2],
          [36, 2],
          [36, 3],
          [35, 1],
          [35, 1],
          [35, 1],
          [35, 1],
          [5, 1],
          [5, 2],
          [40, 2],
          [40, 2],
          [40, 1],
          [40, 1],
          [40, 1],
          [46, 1],
          [46, 3],
          [47, 1],
          [48, 1],
          [48, 3],
          [49, 2],
          [50, 1],
          [52, 1],
          [52, 3],
          [41, 2],
          [54, 1],
          [54, 3],
          [55, 3],
          [56, 0],
          [56, 1],
          [57, 0],
          [57, 2],
          [42, 2],
          [60, 1],
          [60, 3],
          [61, 3],
          [62, 0],
          [62, 1],
          [63, 2],
          [43, 7],
          [64, 0],
          [64, 1],
          [64, 1],
          [64, 3],
          [67, 1],
          [67, 3],
          [69, 2],
          [68, 3],
          [71, 1],
          [71, 1],
          [71, 1],
          [71, 1],
          [71, 1],
          [65, 0],
          [65, 1],
          [66, 1],
          [44, 4],
          [44, 5],
          [30, 1],
          [30, 2],
          [73, 2],
          [45, 1],
          [45, 2],
          [45, 2],
          [45, 2],
          [45, 1],
          [45, 1],
          [45, 2],
          [72, 2],
          [72, 3],
          [74, 2],
          [81, 0],
          [81, 1],
          [75, 1],
          [76, 1],
          [77, 6],
          [85, 0],
          [85, 2],
          [85, 2],
          [78, 2],
          [78, 5],
          [78, 9],
          [89, 0],
          [89, 1],
          [89, 1],
          [89, 1],
          [90, 0],
          [90, 1],
          [91, 0],
          [91, 1],
          [91, 3],
          [88, 1],
          [79, 1],
          [51, 1],
          [92, 1],
          [92, 3],
          [95, 1],
          [95, 1],
          [95, 1],
          [95, 1],
          [95, 1],
          [95, 1],
          [95, 1],
          [95, 1],
          [95, 1],
          [95, 1],
          [95, 1],
          [93, 1],
          [93, 5],
          [106, 1],
          [106, 3],
          [108, 1],
          [108, 3],
          [110, 1],
          [110, 3],
          [112, 1],
          [112, 3],
          [114, 1],
          [114, 3],
          [116, 1],
          [116, 3],
          [119, 1],
          [119, 1],
          [118, 1],
          [118, 3],
          [123, 1],
          [123, 1],
          [123, 1],
          [123, 1],
          [122, 1],
          [122, 3],
          [129, 1],
          [129, 1],
          [128, 1],
          [128, 3],
          [133, 1],
          [133, 1],
          [132, 1],
          [132, 3],
          [137, 1],
          [137, 1],
          [137, 1],
          [136, 1],
          [136, 2],
          [142, 1],
          [142, 1],
          [142, 1],
          [142, 1],
          [141, 1],
          [141, 2],
          [145, 1],
          [145, 1],
          [94, 1],
          [94, 5],
          [94, 4],
          [94, 4],
          [94, 3],
          [150, 0],
          [150, 1],
          [151, 1],
          [151, 3],
          [148, 1],
          [148, 1],
          [148, 1],
          [148, 1],
          [148, 1],
          [148, 1],
          [152, 3],
          [9, 1],
          [153, 1],
          [153, 1],
          [153, 1],
          [153, 1],
          [153, 1],
          [153, 1],
          [153, 1],
          [153, 1],
          [153, 1],
          [153, 1],
          [154, 6],
          [155, 2],
          [155, 2],
          [166, 3],
          [166, 4],
          [167, 0],
          [167, 1],
          [167, 3],
          [168, 3],
          [156, 3],
          [156, 4],
          [156, 5],
          [169, 1],
          [169, 3],
          [170, 1],
          [170, 3],
          [170, 4],
        ],
        performAction: function (y, p, h, s, F, a, Ue) {
          var c = a.length - 1;
          switch (F) {
            case 1:
              return [];
            case 2:
              return a[c - 1];
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 20:
            case 32:
            case 33:
            case 34:
            case 35:
            case 40:
            case 41:
            case 45:
            case 49:
            case 57:
            case 59:
            case 65:
            case 66:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 82:
            case 83:
            case 89:
            case 93:
            case 94:
            case 100:
            case 106:
            case 111:
            case 112:
            case 113:
            case 115:
            case 119:
            case 121:
            case 122:
            case 135:
            case 137:
            case 139:
            case 141:
            case 143:
            case 145:
            case 147:
            case 151:
            case 157:
            case 161:
            case 165:
            case 170:
            case 176:
            case 180:
            case 186:
            case 189:
            case 190:
            case 191:
            case 192:
            case 193:
            case 194:
            case 221:
              this.$ = a[c];
              break;
            case 9:
              this.$ = new s.Types.IntType();
              break;
            case 10:
              this.$ = new s.Types.FloatType();
              break;
            case 11:
              this.$ = new s.Types.CharType();
              break;
            case 12:
              this.$ = new s.Types.StringType();
              break;
            case 13:
              this.$ = new s.Types.BoolType();
              break;
            case 14:
            case 19:
            case 81:
              this.$ = new s.Types.VoidType();
              break;
            case 15:
              this.$ = new s.Types.FuncType(a[c - 2], a[c]);
              break;
            case 16:
            case 185:
            case 212:
              this.$ = [];
              break;
            case 17:
            case 23:
            case 28:
            case 36:
            case 43:
            case 46:
            case 50:
            case 53:
            case 61:
            case 72:
            case 86:
            case 117:
            case 187:
            case 213:
            case 219:
              this.$ = [a[c]];
              break;
            case 18:
            case 44:
            case 47:
            case 54:
            case 62:
            case 118:
            case 188:
            case 214:
            case 220:
              a[c - 2].push(a[c]), (this.$ = a[c - 2]);
              break;
            case 21:
              {
                let m = new s.AST.FieldList([]);
                this.$ = new s.Types.ObjType(m);
              }
              break;
            case 22:
              {
                let m = new s.AST.FieldList(a[c - 1]);
                this.$ = new s.Types.ObjType(m);
              }
              break;
            case 24:
            case 29:
            case 37:
            case 87:
              a[c - 1].push(a[c]), (this.$ = a[c - 1]);
              break;
            case 25:
              this.$ = new s.Types.TypeSpec(a[c - 1], a[c]);
              break;
            case 26:
              this.$ = new s.Types.TypeSpec(a[c - 2], a[c - 1]);
              break;
            case 27:
              {
                let m = new s.Types.ArrType(a[c], a[c - 1].pop());
                for (let ce = a[c - 1].length; ce > 0; ce--)
                  m = new s.Types.ArrType(m, a[c - 1].pop());
                this.$ = m;
              }
              break;
            case 30:
            case 56:
            case 58:
            case 64:
            case 99:
            case 104:
            case 110:
            case 114:
            case 116:
              this.$ = null;
              break;
            case 31:
              {
                let m = new s.Token(a[c - 1], 'INT', p, h, s.lexer.yylloc);
                this.$ = new s.AST.IntegerLiteral(m);
              }
              break;
            case 38:
            case 39:
            case 90:
            case 91:
            case 92:
            case 95:
            case 210:
              this.$ = a[c - 1];
              break;
            case 42:
              this.$ = new s.AST.DeclStmt(a[c]);
              break;
            case 48:
              this.$ = new s.AST.Field([a[c - 1]], a[c]);
              break;
            case 51:
              a[c - 2].push(a[c]);
              break;
            case 52:
              this.$ = new s.AST.VarDecl(a[c]);
              break;
            case 55:
              this.$ = new s.AST.ValueSpec('var', a[c - 2], a[c], a[c - 1]);
              break;
            case 60:
              this.$ = new s.AST.ConstDecl(a[c]);
              break;
            case 63:
              this.$ = new s.AST.ValueSpec('const', a[c - 2], a[c], a[c - 1]);
              break;
            case 67:
              this.$ = new s.AST.FuncDecl(a[c - 5], a[c - 3], a[c - 1], a[c]);
              break;
            case 68:
              this.$ = new s.AST.FieldList([]);
              break;
            case 69:
              this.$ = new s.AST.FieldList(a[c]);
              break;
            case 70:
              this.$ = new s.AST.FieldList([a[c]]);
              break;
            case 71:
              a[c - 2].push(a[c]), (this.$ = new s.AST.FieldList(a[c - 2]));
              break;
            case 73:
              a[c - 2].push(a[c]), (this.$ = a[c - 2]);
              break;
            case 74:
            case 88:
              this.$ = new s.AST.Field(a[c - 1], a[c]);
              break;
            case 75:
              {
                let m = new s.Types.Variadic(a[c]);
                this.$ = new s.AST.Field([a[c - 2]], m);
              }
              break;
            case 84:
              {
                let m = new s.AST.FieldList([]),
                  ce = new s.Types.ObjType(m),
                  Ee = new s.Types.TypeSpec(a[c - 2], ce);
                this.$ = new s.AST.ObjDecl(Ee);
              }
              break;
            case 85:
              {
                let m = new s.AST.FieldList(a[c - 1]),
                  ce = new s.Types.ObjType(m),
                  Ee = new s.Types.TypeSpec(a[c - 3], ce);
                this.$ = new s.AST.ObjDecl(Ee);
              }
              break;
            case 96:
              this.$ = new s.AST.Block([]);
              break;
            case 97:
              this.$ = new s.AST.Block(a[c - 1]);
              break;
            case 98:
              this.$ = new s.AST.ReturnStmt(a[c]);
              break;
            case 101:
              this.$ = new s.AST.BreakStmt();
              break;
            case 102:
              this.$ = new s.AST.ContinueStmt();
              break;
            case 103:
              this.$ = new s.AST.IfStmt(a[c - 3], a[c - 1], a[c]);
              break;
            case 105:
              this.$ = a[c];
              break;
            case 107:
              this.$ = new s.AST.LoopStmt('Undef', null, null, null, a[c]);
              break;
            case 108:
              this.$ = new s.AST.LoopStmt('While', null, a[c - 2], null, a[c]);
              break;
            case 109:
              this.$ = new s.AST.LoopStmt('For', a[c - 6], a[c - 4], a[c - 2], a[c]);
              break;
            case 120:
              this.$ = new s.AST.ExprStmt(a[c]);
              break;
            case 123:
              this.$ = new s.AST.Assign(a[c - 2], a[c - 1], a[c]);
              break;
            case 124:
              this.$ = new s.Token(a[c], '=', p, h, s.lexer.yylloc);
              break;
            case 125:
              this.$ = new s.Token(a[c], '+=', p, h, s.lexer.yylloc);
              break;
            case 126:
              this.$ = new s.Token(a[c], '-=', p, h, s.lexer.yylloc);
              break;
            case 127:
              this.$ = new s.Token(a[c], '*=', p, h, s.lexer.yylloc);
              break;
            case 128:
              this.$ = new s.Token(a[c], '/=', p, h, s.lexer.yylloc);
              break;
            case 129:
              this.$ = new s.Token(a[c], '%=', p, h, s.lexer.yylloc);
              break;
            case 130:
              this.$ = new s.Token(a[c], '&=', p, h, s.lexer.yylloc);
              break;
            case 131:
              this.$ = new s.Token(a[c], '|=', p, h, s.lexer.yylloc);
              break;
            case 132:
              this.$ = new s.Token(a[c], '^=', p, h, s.lexer.yylloc);
              break;
            case 133:
              this.$ = new s.Token(a[c], '<<=', p, h, s.lexer.yylloc);
              break;
            case 134:
              this.$ = new s.Token(a[c], '>>=', p, h, s.lexer.yylloc);
              break;
            case 136:
              this.$ = new s.AST.Conditional(a[c - 4], a[c - 2], a[c]);
              break;
            case 138:
              {
                let m = new s.Token('||', '||', p, h, s.lexer.yylloc);
                this.$ = new s.AST.Logical(a[c - 2], m, a[c]);
              }
              break;
            case 140:
              {
                let m = new s.Token('&&', '&&', p, h, s.lexer.yylloc);
                this.$ = new s.AST.Logical(a[c - 2], m, a[c]);
              }
              break;
            case 142:
              {
                let m = new s.Token('|', '|', p, h, s.lexer.yylloc);
                this.$ = new s.AST.Binary(a[c - 2], m, a[c]);
              }
              break;
            case 144:
              {
                let m = new s.Token('^', '^', p, h, s.lexer.yylloc);
                this.$ = new s.AST.Binary(a[c - 2], m, a[c]);
              }
              break;
            case 146:
              {
                let m = new s.Token('&', '&', p, h, s.lexer.yylloc);
                this.$ = new s.AST.Binary(a[c - 2], m, a[c]);
              }
              break;
            case 148:
            case 152:
            case 158:
            case 162:
            case 166:
              this.$ = new s.AST.Binary(a[c - 2], a[c - 1], a[c]);
              break;
            case 149:
              this.$ = new s.Token('==', '==', p, h, s.lexer.yylloc);
              break;
            case 150:
              this.$ = new s.Token('!=', '!=', p, h, s.lexer.yylloc);
              break;
            case 153:
              this.$ = new s.Token('<', '<', p, h, s.lexer.yylloc);
              break;
            case 154:
              this.$ = new s.Token('>', '>', p, h, s.lexer.yylloc);
              break;
            case 155:
              this.$ = new s.Token('<=', '<=', p, h, s.lexer.yylloc);
              break;
            case 156:
              this.$ = new s.Token('>=', '>=', p, h, s.lexer.yylloc);
              break;
            case 159:
              this.$ = new s.Token('<<', '<<', p, h, s.lexer.yylloc);
              break;
            case 160:
              this.$ = new s.Token('>>', '>>', p, h, s.lexer.yylloc);
              break;
            case 163:
            case 172:
              this.$ = new s.Token('+', '+', p, h, s.lexer.yylloc);
              break;
            case 164:
            case 173:
              this.$ = new s.Token('-', '-', p, h, s.lexer.yylloc);
              break;
            case 167:
              this.$ = new s.Token('*', '*', p, h, s.lexer.yylloc);
              break;
            case 168:
              this.$ = new s.Token('/', '/', p, h, s.lexer.yylloc);
              break;
            case 169:
              this.$ = new s.Token('%', '%', p, h, s.lexer.yylloc);
              break;
            case 171:
              this.$ = new s.AST.Unary(a[c - 1], a[c]);
              break;
            case 174:
              this.$ = new s.Token('~', '~', p, h, s.lexer.yylloc);
              break;
            case 175:
              this.$ = new s.Token('!', '!', p, h, s.lexer.yylloc);
              break;
            case 177:
              this.$ = new s.AST.Update(a[c - 1], a[c]);
              break;
            case 178:
              this.$ = new s.Token('++', '++', p, h, s.lexer.yylloc);
              break;
            case 179:
              this.$ = new s.Token('--', '--', p, h, s.lexer.yylloc);
              break;
            case 181:
              this.$ = new s.AST.Cast(a[c - 4], a[c - 1]);
              break;
            case 182:
              this.$ = new s.AST.ArrayMember(a[c - 1], a[c - 3]);
              break;
            case 183:
              this.$ = new s.AST.Call(a[c - 3], a[c - 1]);
              break;
            case 184:
              this.$ = new s.AST.ObjectMember(a[c], a[c - 2]);
              break;
            case 195:
              {
                let m = new s.AST.Group(a[c - 1]);
                this.$ = m;
              }
              break;
            case 196:
              {
                let m = new s.Token(a[c], 'IDENT', p, h, s.lexer.yylloc),
                  ce = new s.AST.Identifier(m);
                this.$ = ce;
              }
              break;
            case 197:
              {
                let m = new s.Token(a[c], 'INT', p, h, s.lexer.yylloc);
                this.$ = new s.AST.IntegerLiteral(m);
              }
              break;
            case 198:
              {
                let m = new s.Token(a[c], 'HEX', p, h, s.lexer.yylloc);
                this.$ = new s.AST.IntegerLiteral(m);
              }
              break;
            case 199:
              {
                let m = new s.Token(a[c], 'BIN', p, h, s.lexer.yylloc);
                this.$ = new s.AST.IntegerLiteral(m);
              }
              break;
            case 200:
              {
                let m = new s.Token(a[c], 'OCT', p, h, s.lexer.yylloc);
                this.$ = new s.AST.IntegerLiteral(m);
              }
              break;
            case 201:
              {
                let m = new s.Token(a[c], 'FLOAT', p, h, s.lexer.yylloc);
                this.$ = new s.AST.FloatLiteral(m);
              }
              break;
            case 202:
              {
                let m = new s.Token(
                  a[c].replaceAll("'", ''),
                  'CHAR',
                  p,
                  h,
                  s.lexer.yylloc,
                );
                this.$ = new s.AST.CharLiteral(m);
              }
              break;
            case 203:
              {
                let m = new s.Token(
                  a[c].replaceAll('"', ''),
                  'STRING',
                  p,
                  h,
                  s.lexer.yylloc,
                );
                this.$ = new s.AST.StringLiteral(m);
              }
              break;
            case 204:
              {
                let m = new s.Token(a[c], 'true', p, h, s.lexer.yylloc);
                this.$ = new s.AST.BooleanLiteral(m);
              }
              break;
            case 205:
              {
                let m = new s.Token(a[c], 'false', p, h, s.lexer.yylloc);
                this.$ = new s.AST.BooleanLiteral(m);
              }
              break;
            case 206:
              {
                let m = new s.Token(a[c], 'nil', p, h, s.lexer.yylloc);
                this.$ = new s.AST.NilLiteral(m);
              }
              break;
            case 207:
              this.$ = new s.AST.FuncExpr(a[c - 3], a[c - 1], a[c]);
              break;
            case 208:
              this.$ = new s.AST.ObjectInit(a[c - 1], a[c]);
              break;
            case 209:
              this.$ = new s.AST.ObjectInlineInit(a[c - 1], a[c]);
              break;
            case 211:
              this.$ = a[c - 2];
              break;
            case 215:
              this.$ = new s.AST.ObjectField(a[c - 2], a[c]);
              break;
            case 216:
              this.$ = new s.AST.ArrayInit(a[c - 2], []);
              break;
            case 217:
              this.$ = new s.AST.ArrayInit(a[c - 3], a[c - 1]);
              break;
            case 218:
              this.$ = new s.AST.ArrayInit(a[c - 4], a[c - 2]);
              break;
            case 222:
              this.$ = new s.AST.ArrayInit(null, a[c - 1]);
              break;
            case 223:
              this.$ = new s.AST.ArrayInit(null, a[c - 2]);
              break;
          }
        },
        table: [
          {
            3: 1,
            4: [1, 2],
            5: 3,
            9: 35,
            12: 53,
            13: 54,
            20: e,
            21: r,
            27: n,
            28: l,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            40: 4,
            41: 5,
            42: 6,
            43: 7,
            44: 8,
            45: 9,
            51: 27,
            53: f,
            59: R,
            72: 14,
            74: 15,
            75: 16,
            76: 17,
            77: 18,
            78: 19,
            79: 20,
            80: G,
            82: pe,
            83: Ge,
            84: Re,
            87: He,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          { 1: [3] },
          { 1: [2, 1] },
          {
            4: [1, 72],
            9: 35,
            12: 53,
            13: 54,
            20: e,
            21: r,
            27: n,
            28: l,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            40: 73,
            41: 5,
            42: 6,
            43: 7,
            44: 8,
            45: 9,
            51: 27,
            53: f,
            59: R,
            72: 14,
            74: 15,
            75: 16,
            76: 17,
            77: 18,
            78: 19,
            79: 20,
            80: G,
            82: pe,
            83: Ge,
            84: Re,
            87: He,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(B, [2, 36]),
          { 6: 74, 7: xe },
          { 6: 76, 7: xe },
          t(B, [2, 40]),
          t(B, [2, 41]),
          t(B, [2, 42]),
          { 9: 80, 33: i, 47: 79, 54: 77, 55: 78 },
          { 9: 80, 33: i, 47: 83, 60: 81, 61: 82 },
          { 9: 84, 21: Kt, 33: i },
          { 9: 86, 28: Qt, 33: i },
          t(B, [2, 89]),
          { 6: 88, 7: xe },
          { 6: 89, 7: xe },
          { 6: 90, 7: xe },
          t(B, [2, 93]),
          t(B, [2, 94]),
          { 6: 91, 7: xe },
          {
            5: 93,
            9: 35,
            12: 53,
            13: 54,
            20: e,
            21: r,
            27: n,
            28: l,
            29: [1, 92],
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            40: 4,
            41: 5,
            42: 6,
            43: 7,
            44: 8,
            45: 9,
            51: 27,
            53: f,
            59: R,
            72: 14,
            74: 15,
            75: 16,
            76: 17,
            77: 18,
            78: 19,
            79: 20,
            80: G,
            82: pe,
            83: Ge,
            84: Re,
            87: He,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          {
            7: [2, 99],
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 95,
            81: 94,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          { 7: [2, 101] },
          { 7: [2, 102] },
          { 21: [1, 98] },
          { 21: [1, 100], 28: l, 72: 101, 88: 99 },
          { 7: [2, 120] },
          t(Me, [2, 121]),
          t(Me, [2, 122]),
          t(Pe, _t, {
            95: 102,
            21: er,
            37: tr,
            58: [1, 106],
            96: [1, 107],
            97: [1, 108],
            98: [1, 109],
            99: [1, 110],
            100: [1, 111],
            101: [1, 112],
            102: [1, 113],
            103: [1, 114],
            104: [1, 115],
            105: [1, 116],
            149: rr,
          }),
          t(Me, [2, 135], { 107: [1, 117], 109: [1, 118] }),
          t(L, [2, 180]),
          t(sr, [2, 137], { 111: nr }),
          t(L, [2, 189]),
          t(L, [2, 190], { 166: 120, 28: ir }),
          t(L, [2, 191]),
          t(L, [2, 192]),
          t(L, [2, 193]),
          t(L, [2, 194]),
          t(ar, [2, 139], { 113: lr }),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 123,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(
            [
              7, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 33, 37, 38, 58,
              70, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 109, 111, 113, 115,
              117, 120, 121, 124, 125, 126, 127, 130, 131, 134, 135, 138, 139, 140, 146,
              147, 149,
            ],
            [2, 196],
          ),
          t(L, [2, 197]),
          t(L, [2, 198]),
          t(L, [2, 199]),
          t(L, [2, 200]),
          t(L, [2, 201]),
          t(L, [2, 202]),
          t(L, [2, 203]),
          t(L, [2, 204]),
          t(L, [2, 205]),
          t(L, [2, 206]),
          { 28: ir, 166: 124 },
          { 28: [1, 125] },
          t(ur, [2, 141], { 115: cr }),
          {
            9: 129,
            10: 130,
            11: 131,
            12: 132,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            33: i,
            35: 127,
            36: 128,
            37: u,
          },
          t(or, [2, 143], { 117: pr }),
          t(We, [2, 28]),
          t(hr, [2, 145], { 119: 141, 120: fr, 121: yr }),
          { 38: [1, 144], 39: [1, 145] },
          t(mr, [2, 147], { 123: 146, 124: vr, 125: br, 126: kr, 127: xr }),
          t(gr, [2, 151], { 129: 151, 130: wr, 131: dr }),
          t(Sr, [2, 157], { 133: 154, 134: Tr, 135: Er }),
          t(qr, [2, 161], { 137: 157, 138: Ar, 139: Vr, 140: Or }),
          t(Xe, [2, 165]),
          t(Xe, [2, 170], { 145: 161, 146: [1, 162], 147: [1, 163] }),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            134: k,
            135: x,
            136: 164,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t($, [2, 172]),
          t($, [2, 173]),
          t($, [2, 174]),
          t($, [2, 175]),
          { 1: [2, 2] },
          t(B, [2, 37]),
          t(B, [2, 38]),
          t(
            [
              4, 7, 20, 21, 23, 25, 27, 28, 29, 33, 37, 39, 53, 59, 80, 82, 83, 84, 87,
              134, 135, 143, 144, 157, 158, 159, 160, 161, 162, 163, 164, 165,
            ],
            [2, 3],
          ),
          t(B, [2, 39]),
          { 7: [2, 52], 25: [1, 166] },
          t(fe, [2, 53]),
          t(jr, [2, 56], {
            34: 56,
            36: 58,
            56: 167,
            8: 168,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            33: i,
            37: u,
          }),
          t([7, 14, 15, 16, 17, 18, 19, 20, 25, 27, 33, 37, 58], Ir),
          { 7: [2, 60], 25: [1, 174] },
          t(fe, [2, 61]),
          {
            8: 176,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            58: [2, 64],
            62: 175,
          },
          { 21: [1, 177] },
          { 9: 182, 23: Lr, 33: i, 46: 183, 47: 184, 64: 178, 67: 179, 68: 180, 69: 181 },
          { 28: [1, 185] },
          { 9: 80, 29: [1, 186], 30: 187, 33: i, 46: 189, 47: 184, 73: 188 },
          t(B, [2, 90]),
          t(B, [2, 91]),
          t(B, [2, 92]),
          t(B, [2, 95]),
          t($r, [2, 96]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: e,
            21: r,
            27: n,
            28: l,
            29: [1, 190],
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            40: 73,
            41: 5,
            42: 6,
            43: 7,
            44: 8,
            45: 9,
            51: 27,
            53: f,
            59: R,
            72: 14,
            74: 15,
            75: 16,
            76: 17,
            77: 18,
            78: 19,
            79: 20,
            80: G,
            82: pe,
            83: Ge,
            84: Re,
            87: He,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          { 7: [2, 98] },
          { 7: [2, 100] },
          { 21: Kt },
          { 28: Qt },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 191,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(B, [2, 107]),
          {
            7: [2, 110],
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            41: 194,
            42: 195,
            51: 192,
            53: f,
            59: R,
            89: 193,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(B, [2, 119]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            93: 196,
            94: 165,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          { 9: 198, 21: [1, 197], 33: i },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 199,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            23: [2, 185],
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 202,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            150: 200,
            151: 201,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t($, [2, 124]),
          t($, [2, 125]),
          t($, [2, 126]),
          t($, [2, 127]),
          t($, [2, 128]),
          t($, [2, 129]),
          t($, [2, 130]),
          t($, [2, 131]),
          t($, [2, 132]),
          t($, [2, 133]),
          t($, [2, 134]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 203,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            108: 204,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            110: 205,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(L, [2, 208]),
          t(ye, [2, 212], { 167: 206, 168: 207, 9: 208, 33: i }),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            112: 209,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          { 23: [1, 210] },
          t(L, [2, 209]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            28: Ye,
            29: [1, 211],
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 214,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
            169: 212,
            170: 213,
          },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            114: 216,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(M, [2, 27]),
          t(We, [2, 29]),
          t(M, [2, 32]),
          t(M, [2, 33]),
          t(M, [2, 34]),
          t(M, [2, 35]),
          t(M, [2, 9]),
          t(M, [2, 10]),
          t(M, [2, 11]),
          t(M, [2, 12]),
          t(M, [2, 13]),
          t(M, [2, 14]),
          { 21: [1, 217] },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            116: 218,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            118: 219,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t($, [2, 149]),
          t($, [2, 150]),
          t(We, [2, 30]),
          { 38: [1, 220] },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            122: 221,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t($, [2, 153]),
          t($, [2, 154]),
          t($, [2, 155]),
          t($, [2, 156]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            128: 222,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t($, [2, 159]),
          t($, [2, 160]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            132: 223,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t($, [2, 163]),
          t($, [2, 164]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            94: 165,
            134: k,
            135: x,
            136: 224,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t($, [2, 167]),
          t($, [2, 168]),
          t($, [2, 169]),
          t(Pe, [2, 177]),
          t(Pe, [2, 178]),
          t(Pe, [2, 179]),
          t(Xe, [2, 171]),
          t(Pe, _t, { 21: er, 37: tr, 149: rr }),
          { 9: 80, 33: i, 47: 79, 55: 225 },
          t(fe, [2, 58], { 57: 226, 58: [1, 227] }),
          t(jr, [2, 57]),
          t(M, [2, 4]),
          t(M, [2, 5]),
          t(M, [2, 6]),
          t(M, [2, 7]),
          t(M, [2, 8]),
          { 9: 80, 33: i, 47: 83, 61: 228 },
          { 58: [1, 230], 63: 229 },
          { 58: [2, 65] },
          { 9: 182, 23: Lr, 33: i, 46: 183, 47: 184, 64: 231, 67: 179, 68: 180, 69: 181 },
          { 23: [1, 232] },
          { 23: [2, 69], 25: [1, 233] },
          { 23: [2, 70] },
          t(ue, [2, 72]),
          t(Mt, Ir, { 70: [1, 234] }),
          {
            8: 235,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            25: Fr,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
          },
          t(Mt, [2, 43]),
          { 9: 80, 29: [1, 237], 30: 238, 33: i, 46: 189, 47: 184, 73: 188 },
          t(M, [2, 21]),
          { 9: 80, 29: [1, 239], 33: i, 46: 189, 47: 184, 73: 240 },
          t(Pt, [2, 86]),
          {
            8: 241,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            25: Fr,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
          },
          t($r, [2, 97]),
          { 23: [1, 242] },
          { 7: [2, 113], 23: [1, 243] },
          { 6: 244, 7: xe },
          { 7: [2, 111] },
          { 7: [2, 112] },
          t(Me, [2, 123]),
          {
            8: 245,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
          },
          t(L, [2, 184]),
          { 38: [1, 246] },
          { 23: [1, 247] },
          { 23: [2, 186], 25: [1, 248] },
          t(ue, [2, 187]),
          { 26: [1, 249] },
          t(sr, [2, 138], { 111: nr }),
          t(ar, [2, 140], { 113: lr }),
          { 25: [1, 251], 29: [1, 250] },
          t(ye, [2, 213]),
          { 26: [1, 252] },
          t(ur, [2, 142], { 115: cr }),
          t(L, [2, 195]),
          t(L, [2, 216]),
          { 25: [1, 254], 29: [1, 253] },
          t(ye, [2, 219]),
          t(ye, [2, 221]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            28: Ye,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 214,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
            169: 255,
            170: 213,
          },
          t(or, [2, 144], { 117: pr }),
          t(ue, [2, 16], {
            34: 56,
            36: 58,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            22: 256,
            8: 257,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            33: i,
            37: u,
          }),
          t(hr, [2, 146], { 119: 141, 120: fr, 121: yr }),
          t(mr, [2, 148], { 123: 146, 124: vr, 125: br, 126: kr, 127: xr }),
          t(We, [2, 31]),
          t(gr, [2, 152], { 129: 151, 130: wr, 131: dr }),
          t(Sr, [2, 158], { 133: 154, 134: Tr, 135: Er }),
          t(qr, [2, 162], { 137: 157, 138: Ar, 139: Vr, 140: Or }),
          t(Xe, [2, 166]),
          t(fe, [2, 54]),
          t(fe, [2, 55]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 258,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(fe, [2, 62]),
          t(fe, [2, 63]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 259,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          { 23: [1, 260] },
          {
            8: 262,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            28: Br,
            33: i,
            34: 56,
            36: 58,
            37: u,
            65: 261,
          },
          { 9: 182, 33: i, 46: 183, 47: 184, 68: 263, 69: 264 },
          {
            9: 266,
            10: 267,
            11: 268,
            12: 269,
            13: 270,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            71: 265,
          },
          t(ue, [2, 74]),
          { 9: 80, 33: i, 47: 271 },
          t(B, [2, 84]),
          { 9: 80, 29: [1, 272], 33: i, 46: 189, 47: 184, 73: 240 },
          t(M, [2, 22]),
          t(Pt, [2, 87]),
          t(Pt, [2, 88]),
          { 28: l, 72: 273 },
          { 28: l, 72: 101, 88: 274 },
          {
            7: [2, 114],
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 276,
            90: 275,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          { 23: [1, 277] },
          t(L, [2, 182]),
          t(L, [2, 183]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 278,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 279,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(L, [2, 210]),
          { 9: 208, 29: [1, 280], 33: i, 168: 281 },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 282,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(L, [2, 217]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            28: Ye,
            29: [1, 283],
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 214,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
            170: 284,
          },
          { 25: [1, 286], 29: [1, 285] },
          { 23: [1, 287], 25: [1, 288] },
          t(ue, [2, 17]),
          t(fe, [2, 59]),
          t(fe, [2, 66]),
          {
            8: 262,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            28: Br,
            33: i,
            34: 56,
            36: 58,
            37: u,
            65: 289,
          },
          { 28: l, 66: 290, 72: 291 },
          { 28: [2, 82] },
          { 23: [2, 71] },
          t(ue, [2, 73]),
          { 23: [2, 75] },
          { 23: [2, 76] },
          { 23: [2, 77] },
          { 23: [2, 78] },
          { 23: [2, 79] },
          { 23: [2, 80] },
          t(Mt, [2, 44]),
          t(B, [2, 85]),
          t(B, [2, 104], { 85: 292, 86: [1, 293] }),
          t(B, [2, 108]),
          { 6: 294, 7: xe },
          { 7: [2, 115] },
          t(L, [2, 181]),
          t(ue, [2, 188]),
          t(Me, [2, 136]),
          t(L, [2, 211]),
          t(ye, [2, 214]),
          t(ye, [2, 215]),
          t(L, [2, 218]),
          t(ye, [2, 220]),
          t(ye, [2, 222]),
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            28: Ye,
            29: [1, 295],
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 214,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
            170: 284,
          },
          t(M, [2, 19], { 24: 296, 26: [1, 297] }),
          {
            8: 298,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
          },
          { 28: l, 66: 299, 72: 291 },
          t(L, [2, 207]),
          t(
            [
              4, 7, 20, 21, 23, 25, 26, 27, 28, 29, 33, 37, 38, 39, 53, 58, 59, 80, 82,
              83, 84, 87, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 109, 111,
              113, 115, 117, 120, 121, 124, 125, 126, 127, 130, 131, 134, 135, 138, 139,
              140, 143, 144, 146, 147, 149, 157, 158, 159, 160, 161, 162, 163, 164, 165,
            ],
            [2, 83],
          ),
          t(B, [2, 103]),
          { 28: l, 72: 301, 77: 300, 84: Re },
          t(ue, [2, 116], {
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            148: 32,
            108: 33,
            152: 34,
            9: 35,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            110: 40,
            12: 53,
            13: 54,
            112: 55,
            34: 56,
            114: 57,
            36: 58,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            136: 65,
            141: 66,
            142: 67,
            91: 302,
            51: 303,
            20: I,
            21: r,
            27: b,
            33: i,
            37: u,
            39: o,
            134: k,
            135: x,
            143: g,
            144: w,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          }),
          t(ye, [2, 223]),
          t(M, [2, 15]),
          {
            8: 304,
            9: 169,
            10: 170,
            11: 171,
            12: 172,
            13: 173,
            14: _,
            15: ee,
            16: te,
            17: re,
            18: se,
            19: ne,
            20: ie,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
          },
          t(ue, [2, 18]),
          t(B, [2, 67]),
          t(B, [2, 105]),
          t(B, [2, 106]),
          { 23: [1, 305], 25: [1, 306] },
          t(ue, [2, 117]),
          t(M, [2, 20]),
          { 28: l, 72: 101, 88: 307 },
          {
            9: 35,
            12: 53,
            13: 54,
            20: I,
            21: r,
            27: b,
            33: i,
            34: 56,
            36: 58,
            37: u,
            39: o,
            51: 308,
            92: 28,
            93: 29,
            94: 30,
            106: 31,
            108: 33,
            110: 40,
            112: 55,
            114: 57,
            116: 59,
            118: 61,
            122: 62,
            128: 63,
            132: 64,
            134: k,
            135: x,
            136: 65,
            141: 66,
            142: 67,
            143: g,
            144: w,
            148: 32,
            152: 34,
            153: 36,
            154: 37,
            155: 38,
            156: 39,
            157: d,
            158: S,
            159: T,
            160: E,
            161: q,
            162: A,
            163: V,
            164: O,
            165: j,
          },
          t(B, [2, 109]),
          t(ue, [2, 118]),
        ],
        defaultActions: {
          2: [2, 1],
          23: [2, 101],
          24: [2, 102],
          27: [2, 120],
          72: [2, 2],
          94: [2, 98],
          95: [2, 100],
          176: [2, 65],
          180: [2, 70],
          194: [2, 111],
          195: [2, 112],
          262: [2, 82],
          263: [2, 71],
          265: [2, 75],
          266: [2, 76],
          267: [2, 77],
          268: [2, 78],
          269: [2, 79],
          270: [2, 80],
          276: [2, 115],
        },
        parseError: function (y, p) {
          if (p.recoverable) this.trace(y);
          else {
            var h = new Error(y);
            throw ((h.hash = p), h);
          }
        },
        parse: function (y) {
          var p = this,
            h = [0],
            s = [],
            F = [null],
            a = [],
            Ue = this.table,
            c = '',
            m = 0,
            ce = 0,
            Ee = 0,
            Xr = 2,
            Nr = 1,
            Yr = a.slice.call(arguments, 1),
            H = Object.create(this.lexer),
            we = { yy: {} };
          for (var Gt in this.yy)
            Object.prototype.hasOwnProperty.call(this.yy, Gt) &&
              (we.yy[Gt] = this.yy[Gt]);
          H.setInput(y, we.yy),
            (we.yy.lexer = H),
            (we.yy.parser = this),
            typeof H.yylloc > 'u' && (H.yylloc = {});
          var Ht = H.yylloc;
          a.push(Ht);
          var Zr = H.options && H.options.ranges;
          typeof we.yy.parseError == 'function'
            ? (this.parseError = we.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function n1(he) {
            (h.length = h.length - 2 * he),
              (F.length = F.length - he),
              (a.length = a.length - he);
          }
          for (
            var Jr = function () {
                var he;
                return (
                  (he = H.lex() || Nr),
                  typeof he != 'number' && (he = p.symbols_[he] || he),
                  he
                );
              },
              J,
              Wt,
              de,
              ae,
              i1,
              Xt,
              qe = {},
              Ze,
              me,
              Cr,
              Je;
            ;

          ) {
            if (
              ((de = h[h.length - 1]),
              this.defaultActions[de]
                ? (ae = this.defaultActions[de])
                : ((J === null || typeof J > 'u') && (J = Jr()),
                  (ae = Ue[de] && Ue[de][J])),
              typeof ae > 'u' || !ae.length || !ae[0])
            ) {
              var Yt = '';
              Je = [];
              for (Ze in Ue[de])
                this.terminals_[Ze] &&
                  Ze > Xr &&
                  Je.push("'" + this.terminals_[Ze] + "'");
              H.showPosition
                ? (Yt =
                    'Parse error on line ' +
                    (m + 1) +
                    `:
` +
                    H.showPosition() +
                    `
Expecting ` +
                    Je.join(', ') +
                    ", got '" +
                    (this.terminals_[J] || J) +
                    "'")
                : (Yt =
                    'Parse error on line ' +
                    (m + 1) +
                    ': Unexpected ' +
                    (J == Nr ? 'end of input' : "'" + (this.terminals_[J] || J) + "'")),
                this.parseError(Yt, {
                  text: H.match,
                  token: this.terminals_[J] || J,
                  line: H.yylineno,
                  loc: Ht,
                  expected: Je,
                });
            }
            if (ae[0] instanceof Array && ae.length > 1)
              throw new Error(
                'Parse Error: multiple actions possible at state: ' +
                  de +
                  ', token: ' +
                  J,
              );
            switch (ae[0]) {
              case 1:
                h.push(J),
                  F.push(H.yytext),
                  a.push(H.yylloc),
                  h.push(ae[1]),
                  (J = null),
                  Wt
                    ? ((J = Wt), (Wt = null))
                    : ((ce = H.yyleng),
                      (c = H.yytext),
                      (m = H.yylineno),
                      (Ht = H.yylloc),
                      Ee > 0 && Ee--);
                break;
              case 2:
                if (
                  ((me = this.productions_[ae[1]][1]),
                  (qe.$ = F[F.length - me]),
                  (qe._$ = {
                    first_line: a[a.length - (me || 1)].first_line,
                    last_line: a[a.length - 1].last_line,
                    first_column: a[a.length - (me || 1)].first_column,
                    last_column: a[a.length - 1].last_column,
                  }),
                  Zr &&
                    (qe._$.range = [
                      a[a.length - (me || 1)].range[0],
                      a[a.length - 1].range[1],
                    ]),
                  (Xt = this.performAction.apply(
                    qe,
                    [c, ce, m, we.yy, ae[1], F, a].concat(Yr),
                  )),
                  typeof Xt < 'u')
                )
                  return Xt;
                me &&
                  ((h = h.slice(0, -1 * me * 2)),
                  (F = F.slice(0, -1 * me)),
                  (a = a.slice(0, -1 * me))),
                  h.push(this.productions_[ae[1]][0]),
                  F.push(qe.$),
                  a.push(qe._$),
                  (Cr = Ue[h[h.length - 2]][h[h.length - 1]]),
                  h.push(Cr);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        },
      },
      Wr = (function () {
        var ge = {
          EOF: 1,
          parseError: function (p, h) {
            if (this.yy.parser) this.yy.parser.parseError(p, h);
            else throw new Error(p);
          },
          setInput: function (y, p) {
            return (
              (this.yy = p || this.yy || {}),
              (this._input = y),
              (this._more = this._backtrack = this.done = !1),
              (this.yylineno = this.yyleng = 0),
              (this.yytext = this.matched = this.match = ''),
              (this.conditionStack = ['INITIAL']),
              (this.yylloc = {
                first_line: 1,
                first_column: 0,
                last_line: 1,
                last_column: 0,
              }),
              this.options.ranges && (this.yylloc.range = [0, 0]),
              (this.offset = 0),
              this
            );
          },
          input: function () {
            var y = this._input[0];
            (this.yytext += y),
              this.yyleng++,
              this.offset++,
              (this.match += y),
              (this.matched += y);
            var p = y.match(/(?:\r\n?|\n).*/g);
            return (
              p ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++,
              this.options.ranges && this.yylloc.range[1]++,
              (this._input = this._input.slice(1)),
              y
            );
          },
          unput: function (y) {
            var p = y.length,
              h = y.split(/(?:\r\n?|\n)/g);
            (this._input = y + this._input),
              (this.yytext = this.yytext.substr(0, this.yytext.length - p)),
              (this.offset -= p);
            var s = this.match.split(/(?:\r\n?|\n)/g);
            (this.match = this.match.substr(0, this.match.length - 1)),
              (this.matched = this.matched.substr(0, this.matched.length - 1)),
              h.length - 1 && (this.yylineno -= h.length - 1);
            var F = this.yylloc.range;
            return (
              (this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: h
                  ? (h.length === s.length ? this.yylloc.first_column : 0) +
                    s[s.length - h.length].length -
                    h[0].length
                  : this.yylloc.first_column - p,
              }),
              this.options.ranges && (this.yylloc.range = [F[0], F[0] + this.yyleng - p]),
              (this.yyleng = this.yytext.length),
              this
            );
          },
          more: function () {
            return (this._more = !0), this;
          },
          reject: function () {
            if (this.options.backtrack_lexer) this._backtrack = !0;
            else
              return this.parseError(
                'Lexical error on line ' +
                  (this.yylineno + 1) +
                  `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` +
                  this.showPosition(),
                { text: '', token: null, line: this.yylineno },
              );
            return this;
          },
          less: function (y) {
            this.unput(this.match.slice(y));
          },
          pastInput: function () {
            var y = this.matched.substr(0, this.matched.length - this.match.length);
            return (y.length > 20 ? '...' : '') + y.substr(-20).replace(/\n/g, '');
          },
          upcomingInput: function () {
            var y = this.match;
            return (
              y.length < 20 && (y += this._input.substr(0, 20 - y.length)),
              (y.substr(0, 20) + (y.length > 20 ? '...' : '')).replace(/\n/g, '')
            );
          },
          showPosition: function () {
            var y = this.pastInput(),
              p = new Array(y.length + 1).join('-');
            return (
              y +
              this.upcomingInput() +
              `
` +
              p +
              '^'
            );
          },
          test_match: function (y, p) {
            var h, s, F;
            if (
              (this.options.backtrack_lexer &&
                ((F = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column,
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done,
                }),
                this.options.ranges && (F.yylloc.range = this.yylloc.range.slice(0))),
              (s = y[0].match(/(?:\r\n?|\n).*/g)),
              s && (this.yylineno += s.length),
              (this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: s
                  ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length
                  : this.yylloc.last_column + y[0].length,
              }),
              (this.yytext += y[0]),
              (this.match += y[0]),
              (this.matches = y),
              (this.yyleng = this.yytext.length),
              this.options.ranges &&
                (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
              (this._more = !1),
              (this._backtrack = !1),
              (this._input = this._input.slice(y[0].length)),
              (this.matched += y[0]),
              (h = this.performAction.call(
                this,
                this.yy,
                this,
                p,
                this.conditionStack[this.conditionStack.length - 1],
              )),
              this.done && this._input && (this.done = !1),
              h)
            )
              return h;
            if (this._backtrack) {
              for (var a in F) this[a] = F[a];
              return !1;
            }
            return !1;
          },
          next: function () {
            if (this.done) return this.EOF;
            this._input || (this.done = !0);
            var y, p, h, s;
            this._more || ((this.yytext = ''), (this.match = ''));
            for (var F = this._currentRules(), a = 0; a < F.length; a++)
              if (
                ((h = this._input.match(this.rules[F[a]])),
                h && (!p || h[0].length > p[0].length))
              ) {
                if (((p = h), (s = a), this.options.backtrack_lexer)) {
                  if (((y = this.test_match(h, F[a])), y !== !1)) return y;
                  if (this._backtrack) {
                    p = !1;
                    continue;
                  } else return !1;
                } else if (!this.options.flex) break;
              }
            return p
              ? ((y = this.test_match(p, F[s])), y !== !1 ? y : !1)
              : this._input === ''
              ? this.EOF
              : this.parseError(
                  'Lexical error on line ' +
                    (this.yylineno + 1) +
                    `. Unrecognized text.
` +
                    this.showPosition(),
                  { text: '', token: null, line: this.yylineno },
                );
          },
          lex: function () {
            var p = this.next();
            return p || this.lex();
          },
          begin: function (p) {
            this.conditionStack.push(p);
          },
          popState: function () {
            var p = this.conditionStack.length - 1;
            return p > 0 ? this.conditionStack.pop() : this.conditionStack[0];
          },
          _currentRules: function () {
            return this.conditionStack.length &&
              this.conditionStack[this.conditionStack.length - 1]
              ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
              : this.conditions.INITIAL.rules;
          },
          topState: function (p) {
            return (
              (p = this.conditionStack.length - 1 - Math.abs(p || 0)),
              p >= 0 ? this.conditionStack[p] : 'INITIAL'
            );
          },
          pushState: function (p) {
            this.begin(p);
          },
          stateStackSize: function () {
            return this.conditionStack.length;
          },
          options: {},
          performAction: function (p, h, s, F) {
            var a = F;
            switch (s) {
              case 0:
                break;
              case 1:
                break;
              case 2:
                break;
              case 3:
                return 101;
              case 4:
                return 102;
              case 5:
                return 103;
              case 6:
                return 104;
              case 7:
                return 105;
              case 8:
                return 130;
              case 9:
                return 131;
              case 10:
                return 96;
              case 11:
                return 97;
              case 12:
                return 98;
              case 13:
                return 99;
              case 14:
                return 100;
              case 15:
                return 146;
              case 16:
                return 147;
              case 17:
                return 109;
              case 18:
                return 111;
              case 19:
                return 120;
              case 20:
                return 121;
              case 21:
                return 126;
              case 22:
                return 127;
              case 23:
                return 70;
              case 24:
                return 134;
              case 25:
                return 135;
              case 26:
                return 138;
              case 27:
                return 139;
              case 28:
                return 140;
              case 29:
                return 143;
              case 30:
                return 117;
              case 31:
                return 113;
              case 32:
                return 115;
              case 33:
                return 107;
              case 34:
                return 124;
              case 35:
                return 125;
              case 36:
                return 58;
              case 37:
                return 144;
              case 38:
                return 21;
              case 39:
                return 37;
              case 40:
                return 28;
              case 41:
                return 23;
              case 42:
                return 38;
              case 43:
                return 29;
              case 44:
                return 25;
              case 45:
                return 149;
              case 46:
                return 7;
              case 47:
                return 26;
              case 48:
                return 53;
              case 49:
                return 59;
              case 50:
                return 84;
              case 51:
                return 86;
              case 52:
                return 20;
              case 53:
                return 80;
              case 54:
                return 87;
              case 55:
                return 82;
              case 56:
                return 83;
              case 57:
                return 165;
              case 58:
                return 163;
              case 59:
                return 164;
              case 60:
                return 27;
              case 61:
                return 14;
              case 62:
                return 15;
              case 63:
                return 16;
              case 64:
                return 17;
              case 65:
                return 18;
              case 66:
                return 19;
              case 67:
                return 161;
              case 68:
                return 162;
              case 69:
                return 33;
              case 70:
                return 160;
              case 71:
                return 157;
              case 72:
                return 158;
              case 73:
                return 159;
              case 74:
                return 39;
              case 75:
                return 4;
              case 76:
                return 'INVALID';
            }
          },
          rules: [
            /^(?:\s+)/,
            /^(?:\/\/(.*))/,
            /^(?:\/\*([^*]|\*+[^*/])*\*+\/)/,
            /^(?:&=)/,
            /^(?:\|=)/,
            /^(?:\^=)/,
            /^(?:<<=)/,
            /^(?:>>=)/,
            /^(?:<<)/,
            /^(?:>>)/,
            /^(?:\+=)/,
            /^(?:-=)/,
            /^(?:\*=)/,
            /^(?:\/=)/,
            /^(?:%=)/,
            /^(?:\+\+)/,
            /^(?:--)/,
            /^(?:\|\|)/,
            /^(?:&&)/,
            /^(?:==)/,
            /^(?:!=)/,
            /^(?:<=)/,
            /^(?:>=)/,
            /^(?:\.\.\.)/,
            /^(?:\+)/,
            /^(?:-)/,
            /^(?:\*)/,
            /^(?:\/)/,
            /^(?:%)/,
            /^(?:~)/,
            /^(?:&)/,
            /^(?:\|)/,
            /^(?:\^)/,
            /^(?:\?)/,
            /^(?:<)/,
            /^(?:>)/,
            /^(?:=)/,
            /^(?:!)/,
            /^(?:\()/,
            /^(?:\[)/,
            /^(?:\{)/,
            /^(?:\))/,
            /^(?:\])/,
            /^(?:\})/,
            /^(?:,)/,
            /^(?:\.)/,
            /^(?:;)/,
            /^(?::)/,
            /^(?:var\b)/,
            /^(?:const\b)/,
            /^(?:if\b)/,
            /^(?:else\b)/,
            /^(?:func\b)/,
            /^(?:return\b)/,
            /^(?:loop\b)/,
            /^(?:break\b)/,
            /^(?:continue\b)/,
            /^(?:nil\b)/,
            /^(?:true\b)/,
            /^(?:false\b)/,
            /^(?:object\b)/,
            /^(?:int\b)/,
            /^(?:float\b)/,
            /^(?:char\b)/,
            /^(?:string\b)/,
            /^(?:bool\b)/,
            /^(?:void\b)/,
            /^(?:'([^'\\]|\\.)*')/,
            /^(?:"([^"\\]|\\.)*")/,
            /^(?:_*[a-zA-Z][_a-zA-Z0-9]*)/,
            /^(?:[0-9]*\.[0-9]+)/,
            /^(?:0x[0-9A-Fa-f]+)/,
            /^(?:0b[01]+)/,
            /^(?:0o[0-7]+)/,
            /^(?:[0-9]+)/,
            /^(?:$)/,
            /^(?:.)/,
          ],
          conditions: {
            INITIAL: {
              rules: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
                57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
                75, 76,
              ],
              inclusive: !0,
            },
          },
        };
        return ge;
      })();
    Ut.lexer = Wr;
    function zt() {
      this.yy = {};
    }
    return (zt.prototype = Ut), (Ut.Parser = zt), new zt();
  })(),
  a1 = Zt.lexer;
var Jt = Zt;
var Ke = class t {
  constructor(e, r, n, l, i) {
    (this.lexeme = e),
      (this.token = r),
      (this.length = n),
      (this.line = l),
      (this.loc = i);
  }
  copy() {
    return new t(this.lexeme, this.token, this.length, this.line, {
      first_line: this.loc.first_line,
      last_line: this.loc.last_line,
      first_column: this.loc.first_column,
      last_column: this.loc.last_column,
    });
  }
  equals(e) {
    return (
      this.lexeme === e.lexeme &&
      this.token === e.token &&
      this.length === e.line &&
      this.loc.first_line === e.loc.first_line &&
      this.loc.last_line === e.loc.last_line &&
      this.loc.first_column === e.loc.first_column &&
      this.loc.last_column === e.loc.last_column
    );
  }
  toString() {
    return `Token{ lexeme: ${this.lexeme}, token: ${this.token} }`;
  }
};
var ve = class {
  constructor(e) {
    (this.enclosing = e), (this.values = new Map());
  }
  define(e, r) {
    this.values.set(e, r);
  }
  get(e) {
    let r = this.values.get(e.lexeme);
    return (
      r ||
      (this.enclosing ? this.enclosing.get(e) : new Error(`${e.lexeme} is not defined`))
    );
  }
  assign(e, r) {
    let n = this.values.get(e.lexeme);
    return n
      ? ((n.value = r.value), n)
      : this.enclosing
      ? this.enclosing.assign(e, r)
      : new Error(`${e.lexeme} is not defined`);
  }
  exists(e) {
    return this.values.has(e.lexeme);
  }
};
var D = class t {
    kind() {
      return 'IntegerType';
    }
    copy() {
      return new t();
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'int';
    }
  },
  Z = class t {
    kind() {
      return 'FloatType';
    }
    copy() {
      return new t();
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'float';
    }
  },
  Ae = class t {
    kind() {
      return 'CharType';
    }
    copy() {
      return new t();
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'char';
    }
  },
  le = class t {
    kind() {
      return 'StringType';
    }
    copy() {
      return new t();
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'string';
    }
  },
  W = class t {
    kind() {
      return 'BoolType';
    }
    copy() {
      return new t();
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'bool';
    }
  },
  N = class t {
    kind() {
      return 'VoidType';
    }
    copy() {
      return new t();
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'void';
    }
  };
var C = class t {
    constructor(e) {
      this.value = e;
    }
    kind() {
      return 'Int';
    }
    copy() {
      return new t(this.value);
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return `${this.value}`;
    }
  },
  X = class t {
    constructor(e) {
      this.value = e;
    }
    kind() {
      return 'Float';
    }
    copy() {
      return new t(this.value);
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return `${this.value}`;
    }
  },
  Ve = class t {
    constructor(e) {
      this.value = e;
    }
    kind() {
      return 'Char';
    }
    copy() {
      return new t(this.value);
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return this.value;
    }
  },
  oe = class t {
    constructor(e) {
      this.value = e;
    }
    kind() {
      return 'String';
    }
    copy() {
      return new t(this.value);
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return this.value;
    }
  },
  Q = class t {
    constructor(e) {
      this.value = e;
    }
    kind() {
      return 'Bool';
    }
    copy() {
      return new t(this.value);
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return `${this.value}`;
    }
  },
  U = class t {
    kind() {
      return 'Nil';
    }
    equals(e) {
      return e instanceof t;
    }
    copy() {
      return new t();
    }
    toString() {
      return 'nil';
    }
  },
  Se = class t extends Error {
    constructor(e) {
      super(), (this.value = e);
    }
    kind() {
      return 'Return';
    }
    copy() {
      return this.value
        ? new t({ type: this.value.type.copy(), value: this.value.value.copy() })
        : new t({ type: new N(), value: new U() });
    }
    equals(e) {
      return e instanceof t
        ? this.value && e.value
          ? this.value.type.equals(e.value.type) && this.value.value.equals(e.value.value)
          : !0
        : !1;
    }
    toString() {
      return `${this.value?.value.toString() ?? ''}`;
    }
  },
  Oe = class t {
    kind() {
      return 'Break';
    }
    copy() {
      return new t();
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'break';
    }
  },
  je = class t {
    kind() {
      return 'Continue';
    }
    copy() {
      return new t();
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'continue';
    }
  },
  Te = class t {
    constructor(e, r, n) {
      (this.params = e), (this.body = r), (this.type = n);
    }
    call(e, r) {
      let n = this.params.parseList(),
        l = new ve(e.env);
      for (let u = 0; u < n.length; u++) l.define(n[u].name, r[u]);
      let i = e.execBlock(this.body.declarations, l);
      return this.unwrapReturnValue(i);
    }
    unwrapReturnValue(e) {
      if (v(e)) return e;
      if (Le(e.value)) {
        let r = e.value;
        return r.value ? r.value : { type: new N(), value: new U() };
      }
      return e;
    }
    kind() {
      return 'Func';
    }
    copy() {
      return new t(this.params.copy(), this.body.copy(), this.type?.copy());
    }
    equals(e) {
      return Dr(e) ? this.type.equals(e.type) : !1;
    }
    toString() {
      return `<Func: ${this.type?.toString()}>`;
    }
  },
  Ie = class t {
    constructor(e, r) {
      (this.name = e), (this.spec = r), (this.anonymous = e === '');
    }
    call(e, r) {
      let n = new Qe(this, new Map());
      return { type: this.spec?.copy(), value: n };
    }
    callWithNamedArgs(e, r, n) {
      let l = this.specContainsNames(r);
      return v(l)
        ? l
        : { type: this.spec?.copy(), value: new Qe(this, this.specTable(r, n)) };
    }
    specContainsNames(e) {
      let r = this.spec.fields.parseList();
      for (let n of e)
        if (!r.find((i) => i.name === n))
          return new Error(`unknown field ${n} in object: ${this.toString()}`);
      return null;
    }
    specTable(e, r) {
      let n = new Map();
      for (let l = 0; l < e.length; l++) n.set(e[l], r[l]);
      return n;
    }
    kind() {
      return 'TypeSpec';
    }
    copy() {
      return new t(this.name, this.spec.copy());
    }
    equals(e) {
      return e instanceof t
        ? this.anonymous || e.anonymous
          ? this.spec.equals(e.spec)
          : this.name === e.name && this.spec.equals(e.spec)
        : !1;
    }
    toString() {
      return `<TypeSpec: ${this.name}${this.spec.toString()}>`;
    }
  },
  Qe = class t {
    constructor(e, r) {
      (this.spec = e), (this.fields = r);
    }
    getField(e) {
      return this.fields.get(e) ?? null;
    }
    getFieldIn(e) {
      let r = {},
        n = this.spec,
        l = this.fields;
      for (let i of e) {
        let u = l.get(i);
        if (u) (r = u), u instanceof t && ((n = u.spec), (l = u.fields));
        else return new Error(`${n.name} does not have field: ${i}`);
      }
      return r;
    }
    setField(e, r) {
      this.fields.set(e, r);
    }
    findAndSet(e, r, n) {
      let l = this.spec,
        i = this.fields;
      for (let u of e) {
        let o = i.get(u);
        if (o) u !== r && o instanceof t && ((l = o.spec), (i = o.fields));
        else return new Error(`${l.name} does not have field: ${u}`);
      }
      i.set(r, n);
    }
    kind() {
      return 'Object';
    }
    copy() {
      let e = new Map();
      for (let [r, n] of this.fields) e.set(r, n.copy());
      return new t(this.spec.copy(), e);
    }
    equals(e) {
      return !(e instanceof t) || !this.spec.equals(e.spec)
        ? !1
        : Mr(this.fields, e.fields, (r, n) => r.equals(n));
    }
    showFields() {
      return `${[...this.fields.entries()].map(([e, r]) => `${e}: ${r}`)}`;
    }
    getNameOrSpec() {
      return this.spec.name || this.spec.spec.toString();
    }
    toString() {
      return `<Object: ${this.getNameOrSpec()} {${this.showFields()}}>`;
    }
  },
  be = class t {
    constructor(e, r) {
      (this.objects = e), (this.type = r);
    }
    kind() {
      return 'Array';
    }
    copy() {
      return new t(
        P(this.objects, (e) => e.copy()),
        this.type?.copy(),
      );
    }
    equals(e) {
      return !Rr(e) || this.type.equals(e.type)
        ? !1
        : z(this.objects, e.objects, (r, n) => r.equals(n));
    }
    toString() {
      return `[${this.objects.map((e) => e.toString()).join(', ')}]`;
    }
    static dimensionSize(e) {
      let r = 0;
      for (let n of e.objects)
        if (n instanceof t) {
          let l = t.dimensionSize(n) + 1;
          l > r && (r = l);
        }
      return r;
    }
  };
function v(t) {
  return t instanceof Error;
}
function ke(t) {
  if (t === null) return !1;
  switch (t.kind()) {
    case 'Nil':
      return !1;
    case 'Bool':
      return t.value;
    case 'Int':
      return !!t.value;
    case 'Float':
      return !!t.value;
    default:
      return !0;
  }
}
function Y(t) {
  return t instanceof C;
}
function K(t) {
  return t instanceof X;
}
function ze(t) {
  return t instanceof Ve;
}
function $e(t) {
  return t instanceof oe;
}
function Le(t) {
  return t instanceof Se;
}
function _e(t) {
  return t instanceof Oe;
}
function Pr(t) {
  return t instanceof je;
}
function Dr(t) {
  return t instanceof Te;
}
function Ur(t) {
  return typeof t == 'object' && t !== null && 'call' in t;
}
function Rr(t) {
  return t instanceof be;
}
function z(t, e, r) {
  if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) {
    let l = t[n],
      i = e[n];
    if (Array.isArray(l) && Array.isArray(i)) {
      if (!z(l, i, r)) return !1;
    } else if (!r(l, i)) return !1;
  }
  return !0;
}
function P(t, e) {
  let r = [];
  for (let n of t) r.push(e(n));
  return r;
}
function Mr(t, e, r) {
  if (t.size !== e.size) return !1;
  for (let [n, l] of t) if (!e.has(n) || !r(e.get(n), l)) return !1;
  return !0;
}
var et = class t {
    constructor(e, r) {
      (this.names = e), (this.type = r);
    }
    kind() {
      return 'FieldDeclaration';
    }
    literal() {
      return '';
    }
    copy() {
      return new t(
        P(this.names, (e) => e.copy()),
        this.type.copy(),
      );
    }
    equals(e) {
      return !(e instanceof t) ||
        this.type.equals(e.type) ||
        !z(this.names, e.names, (r, n) => r.equals(n))
        ? !1
        : this.type && e.type
        ? this.type.equals(e.type)
        : this.type === e.type;
    }
    parseNames() {
      let e = [];
      for (let r of this.names) e.push({ name: r.name, type: this.type });
      return e;
    }
    toString() {
      return `${this.names.map((e) => e.toString()).join(', ')} ${this.type.toString()}`;
    }
    accept(e) {
      return e.visitFieldDecl(this);
    }
  },
  tt = class t {
    constructor(e) {
      (this.list = e), (this.type = null);
    }
    kind() {
      return 'FieldListDeclaration';
    }
    literal() {
      return '';
    }
    parseList() {
      let e = [];
      for (let r of this.list) e.push(...r.parseNames());
      return e;
    }
    copy() {
      let e = new t(P(this.list, (r) => r.copy()));
      return (e.type = this.type?.copy() ?? null), e;
    }
    equals(e) {
      return this.type && e.type ? this.type.equals(e.type) : this.type === e.type;
    }
    toString() {
      return `${this.list.map((e) => e.toString()).join(', ')}`;
    }
    accept(e) {
      return e.visitFieldListDecl(this);
    }
  };
var rt = class t {
    constructor(e) {
      (this.decl = e), (this.type = null);
    }
    kind() {
      return 'VarDeclaration';
    }
    literal() {
      return '';
    }
    copy() {
      let e = new t(P(this.decl, (r) => r.copy()));
      return (e.type = this.type?.copy() ?? null), e;
    }
    equals(e) {
      return !(e instanceof t) || !z(this.decl, e.decl, (r, n) => r.equals(n))
        ? !1
        : this.type && e.type
        ? this.type.equals(e.type)
        : this.type === e.type;
    }
    toString() {
      return `var ${this.decl.map((e) => e.toString()).join(', ')}`;
    }
    accept(e) {
      return e.visitVarDecl(this);
    }
  },
  st = class t {
    constructor(e) {
      (this.decl = e), (this.type = null);
    }
    kind() {
      return 'ConstDeclaration';
    }
    literal() {
      return '';
    }
    copy() {
      let e = new t(P(this.decl, (r) => r.copy()));
      return (e.type = this.type?.copy() ?? null), e;
    }
    equals(e) {
      return !(e instanceof t) || !z(this.decl, e.decl, (r, n) => r.equals(n))
        ? !1
        : this.type && e.type
        ? this.type.equals(e.type)
        : this.type === e.type;
    }
    toString() {
      return `const ${this.decl.map((e) => e.toString()).join(', ')}`;
    }
    accept(e) {
      return e.visitConstDecl(this);
    }
  },
  nt = class t {
    constructor(e, r, n, l) {
      (this.valueType = e), (this.name = r), (this.value = n), (this.type = l);
    }
    getTypeAsString() {
      return this.type ? ` ${this.type.toString()}` : '';
    }
    copy() {
      return new t(
        this.valueType,
        this.name.copy(),
        this.value?.copy(),
        this.type?.copy(),
      );
    }
    equals(e) {
      if (!this.name.equals(e.name)) return !1;
      if (this.value && e.value) {
        if (!this.value.equals(e.value)) return !1;
      } else return !1;
      return this.type && e.type ? this.type?.equals(e.type) : this.type === this.type;
    }
    toString() {
      return `${this.name.toString()}${this.getTypeAsString()} = ${
        this.value?.toString() || 'nil'
      }`;
    }
  };
var it = class t {
  constructor(e, r, n, l) {
    (this.name = e),
      (this.params = r),
      (this.returnType = n),
      (this.body = l),
      (this.type = null);
  }
  kind() {
    return 'FunctionDeclaration';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(
      this.name.copy(),
      this.params.copy(),
      this.returnType.copy(),
      this.body.copy(),
    );
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      !this.name.equals(e.name) ||
      !this.params.equals(e.params) ||
      !this.returnType.equals(e.returnType) ||
      !this.body.equals(this.body)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `func ${this.name.toString()}(${this.params.toString()}) ${this.returnType.toString()} ${this.body.toString()}`;
  }
  accept(e) {
    return e.visitFuncDecl(this);
  }
};
var at = class t {
  constructor(e) {
    (this.stmt = e), (this.type = null);
  }
  kind() {
    return 'DeclarationStatement';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.stmt.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) || !this.stmt.equals(e.stmt)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `${this.stmt.toString()}`;
  }
  accept(e) {
    return e.visitDeclStmt(this);
  }
};
var lt = class t {
  constructor(e) {
    (this.declarations = e), (this.type = null);
  }
  kind() {
    return 'BlockStatement';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(P(this.declarations, (r) => r.copy()));
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      !z(this.declarations, e.declarations, (r, n) => r.equals(n))
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `{
${this.declarations.map((e) => e.toString()).join(`
`)}
}`;
  }
  accept(e) {
    return e.visitBlockStmt(this);
  }
};
var ut = class t {
  constructor(e) {
    (this.result = e), (this.type = null);
  }
  kind() {
    return 'ReturnStatement';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.result?.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    if (!(e instanceof t)) return !1;
    if (this.result && e.result) {
      if (!this.result.equals(e.result)) return !1;
    } else if (this.result !== e.result) return !1;
    return this.type && e.type ? this.type.equals(e.type) : this.type === e.type;
  }
  toString() {
    return `return ${this.result?.toString()};`;
  }
  accept(e) {
    return e.visitReturnStmt(this);
  }
};
var ct = class t {
  constructor() {
    this.type = null;
  }
  kind() {
    return 'BreakStatement';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t();
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return e instanceof t;
  }
  toString() {
    return 'break';
  }
  accept(e) {
    return e.visitBreakStmt(this);
  }
};
var ot = class t {
  constructor() {
    this.type = null;
  }
  kind() {
    return 'ContinueStatement';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t();
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return e instanceof t;
  }
  toString() {
    return 'continue';
  }
  accept(e) {
    return e.visitContinueStmt(this);
  }
};
var pt = class t {
  constructor(e, r, n) {
    (this.condition = e),
      (this.thenBranch = r),
      (this.elseBranch = n),
      (this.type = null);
  }
  kind() {
    return 'IfStatement';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.condition.copy(), this.thenBranch.copy(), this.elseBranch?.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    if (
      !(e instanceof t) ||
      !this.condition.equals(e.condition) ||
      !this.thenBranch.equals(e.thenBranch)
    )
      return !1;
    if (this.elseBranch && e.elseBranch) {
      if (!this.elseBranch.equals(e.elseBranch)) return !1;
    } else if (this.elseBranch !== e.elseBranch) return !1;
    return this.type && e.type ? this.type.equals(e.type) : this.type === e.type;
  }
  getElseBranchAsString() {
    return this.elseBranch ? ` else ${this.elseBranch.toString()}` : '';
  }
  toString() {
    return `if (${this.condition.toString()}) ${this.thenBranch.toString()}${this.getElseBranchAsString()}`;
  }
  accept(e) {
    return e.visitIfStatement(this);
  }
};
var ht = class t {
  constructor(e, r, n, l, i) {
    (this.actLike = e),
      (this.init = r),
      (this.cond = n),
      (this.post = l),
      (this.body = i),
      (this.type = null);
  }
  kind() {
    return 'LoopStatement';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(
      this.actLike,
      this.init?.copy() ?? null,
      this.cond?.copy() ?? null,
      this.post === null ? null : P(this.post, (r) => r.copy()),
      this.body.copy(),
    );
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) || this.actLike !== e.actLike || !this.body.equals(e.body)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    switch (this.actLike) {
      case 'Undef':
        return `loop ${this.body.toString()}`;
      case 'While':
        return `loop (${this.cond?.toString() || ''}) ${this.body.toString()}`;
      case 'For':
        return `loop (${this.init?.toString() || ''}; ${
          this.cond?.toString() || ''
        }; ${this.post?.map((e) => e.toString()).join(', ')}) ${this.body.toString()}`;
    }
  }
  accept(e) {
    return e.visitLoopStatement(this);
  }
};
var Fe = class t {
  constructor(e) {
    (this.expr = e), (this.type = null);
  }
  kind() {
    return 'ExpressionStatement';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.expr.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) || !this.expr.equals(e.expr)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `${this.expr.toString()}`;
  }
  accept(e) {
    return e.visitExpressionStatement(this);
  }
};
var ft = class t {
  constructor(e, r, n) {
    (this.lhs = e), (this.operation = r), (this.rhs = n), (this.type = null);
  }
  kind() {
    return 'AssignExpression';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.lhs.copy(), this.operation.copy(), this.rhs.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      this.operation.equals(e.operation) ||
      !this.lhs.equals(e.lhs) ||
      !this.rhs.equals(e.rhs)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `${this.lhs.toString()} ${this.operation.lexeme} ${this.rhs.toString()}`;
  }
  accept(e) {
    return e.visitAssignExpression(this);
  }
};
var yt = class t {
  constructor(e, r, n) {
    (this.expression = e), (this.isTrue = r), (this.isFalse = n), (this.type = null);
  }
  kind() {
    return 'ConditionalExpression';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.expression.copy(), this.isTrue.copy(), this.isFalse.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      !this.expression.equals(e.expression) ||
      !this.isTrue.equals(e.isTrue) ||
      !this.isFalse.equals(e.isFalse)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `${this.expression.toString()} ? ${this.isTrue.toString()} : ${this.isFalse.toString()}`;
  }
  accept(e) {
    return e.visitConditionalExpression(this);
  }
};
var mt = class t {
  constructor(e, r, n) {
    (this.left = e), (this.operator = r), (this.right = n), (this.type = new W());
  }
  kind() {
    return 'LogicalExpression';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.left.copy(), this.operator.copy(), this.right.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      !this.operator.equals(e.operator) ||
      !this.left.equals(e.left) ||
      !this.right.equals(e.right)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `${this.left.toString()} ${this.operator.lexeme} ${this.right.toString()}`;
  }
  accept(e) {
    return e.visitLogicalExpression(this);
  }
};
var vt = class t {
  constructor(e, r, n) {
    (this.left = e), (this.token = r), (this.right = n), (this.type = null);
  }
  kind() {
    return 'BinaryExpression';
  }
  literal() {
    return 'BinaryExpression';
  }
  copy() {
    let e = new t(this.left.copy(), this.token.copy(), this.right.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      !this.token.equals(e.token) ||
      !this.left.equals(e.left) ||
      !this.right.equals(e.right)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `${this.left.toString()} ${this.token.lexeme} ${this.right.toString()}`;
  }
  accept(e) {
    return e.visitBinaryExpression(this);
  }
};
var bt = class t {
  constructor(e, r) {
    (this.operator = e), (this.expression = r), (this.type = null);
  }
  kind() {
    return 'UnaryExpression';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.operator.copy(), this.expression.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      !this.operator.equals(e.operator) ||
      !this.expression.equals(e.expression)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `${this.operator.lexeme}${this.expression.toString()}`;
  }
  accept(e) {
    return e.visitUnaryExpression(this);
  }
};
var kt = class t {
  constructor(e, r) {
    (this.callee = e), (this.args = r), (this.type = null);
  }
  kind() {
    return 'CallExpression';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(
      this.callee.copy(),
      P(this.args, (r) => r.copy()),
    );
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      this.callee.equals(e.callee) ||
      !z(this.args, e.args, (r, n) => r.equals(n))
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `${this.callee.toString()}(${this.args.map((e) => e.toString()).join(', ')})`;
  }
  accept(e) {
    return e.visitCallExpression(this);
  }
};
var xt = class t {
  constructor(e, r) {
    (this.target = e), (this.type = r);
  }
  kind() {
    return 'CastExpression';
  }
  literal() {
    return '';
  }
  copy() {
    return new t(this.target.copy(), this.type.copy());
  }
  equals(e) {
    return !(e instanceof t) || !this.target.equals(e.target)
      ? !1
      : this.type.equals(e.type);
  }
  toString() {
    return `${this.target.toString()}.(${this.type.toString()})`;
  }
  accept(e) {
    return e.visitCastExpression(this);
  }
};
var gt = class t {
  constructor(e, r) {
    (this.expression = e), (this.operator = r), (this.type = null);
  }
  kind() {
    return 'UpdateExpression';
  }
  literal() {
    return '';
  }
  copy() {
    return new t(this.expression.copy(), this.operator.copy());
  }
  equals(e) {
    return e instanceof t
      ? this.expression.equals(e.expression) && this.operator.equals(e.operator)
      : !1;
  }
  toString() {
    return `${this.expression.toString()}${this.operator.lexeme}`;
  }
  accept(e) {
    return e.visitUpdateExpression(this);
  }
};
var wt = class t {
  constructor(e) {
    (this.expression = e), (this.type = null);
  }
  kind() {
    return 'GroupExpression';
  }
  literal() {
    return this.expression.toString();
  }
  copy() {
    let e = new t(this.expression.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) || !this.expression.equals(e.expression)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `(${this.expression.toString()})`;
  }
  accept(e) {
    return e.visitGroupExpression(this);
  }
};
var dt = class t {
    constructor(e, r) {
      (this.name = e), (this.fields = r), (this.type = null);
    }
    kind() {
      return 'ObjectInitExpression';
    }
    literal() {
      return '';
    }
    copy() {
      let e = new t(
        this.name.copy(),
        P(this.fields, (r) => r.copy()),
      );
      return (e.type = this.type?.copy() ?? null), e;
    }
    equals(e) {
      return !(e instanceof t) ||
        !this.name.equals(e.name) ||
        !z(this.fields, e.fields, (r, n) => r.equals(n))
        ? !1
        : this.type && e.type
        ? this.type.equals(e.type)
        : this.type === e.type;
    }
    toString() {
      return `${this.name.toString()}{ ${this.fields
        .map((e) => e.toString())
        .join(', ')} }`;
    }
    accept(e) {
      return e.visitObjectInitExpression(this);
    }
  },
  St = class t {
    constructor(e, r) {
      (this.type = e), (this.fields = r);
    }
    kind() {
      return 'ObjectIlineInitExpression';
    }
    literal() {
      return '';
    }
    copy() {
      return new t(
        this.type.copy(),
        P(this.fields, (e) => e.copy()),
      );
    }
    equals(e) {
      return !(e instanceof t) || !this.type.equals(e.type)
        ? !1
        : z(this.fields, e.fields, (r, n) => r.equals(n));
    }
    toString() {
      return `${this.type.toString()}{ ${this.fields
        .map((e) => e.toString())
        .join(', ')} }`;
    }
    accept(e) {
      return e.visitObjectInlineInitExpression(this);
    }
  },
  Tt = class t {
    constructor(e, r) {
      (this.name = e), (this.value = r), (this.type = null);
    }
    kind() {
      return 'ObjectFieldExpression';
    }
    literal() {
      return '';
    }
    copy() {
      let e = new t(this.name.copy(), this.value.copy());
      return (e.type = this.type?.copy() ?? null), e;
    }
    equals(e) {
      return !(e instanceof t) || !this.name.equals(e.name) || !this.value.equals(e.value)
        ? !1
        : this.type && e.type
        ? this.type.equals(e.type)
        : this.type === e.type;
    }
    toString() {
      return `${this.name.toString()}: ${this.value.toString()}`;
    }
    accept(e) {
      return e.visitObjectFieldExpression(this);
    }
  },
  Be = class t {
    constructor(e, r) {
      (this.object = e), (this.next = r), (this.type = null);
    }
    kind() {
      return 'ObjectMemberExpression';
    }
    literal() {
      return '';
    }
    copy() {
      let e = new t(this.object.copy(), this.next.copy());
      return (e.type = this.type?.copy() ?? null), e;
    }
    equals(e) {
      return !(e instanceof t) ||
        !this.object.equals(e.object) ||
        !this.next.equals(e.next)
        ? !1
        : this.type && e.type
        ? this.type.equals(e.type)
        : this.type === e.type;
    }
    getMembers() {
      let e = this.next,
        r = [this.object];
      for (; e.next !== void 0; ) r.unshift(e.object), (e = e.next);
      return r.unshift(e), r;
    }
    toString() {
      return `${this.getMembers()
        .map((e) => e.toString())
        .join('.')}`;
    }
    accept(e) {
      return e.visitObjectMemberExpression(this);
    }
  };
var Et = class t {
    constructor(e, r) {
      (this.type = e), (this.elements = r);
    }
    kind() {
      return 'ArrayInitExpression';
    }
    literal() {
      return '';
    }
    copy() {
      return new t(
        this.type?.copy() ?? null,
        P(this.elements, (e) => e.copy()),
      );
    }
    equals(e) {
      return !(e instanceof t) || !z(this.elements, e.elements, (r, n) => r.equals(n))
        ? !1
        : this.type && e.type
        ? this.type.equals(e.type)
        : this.type === e.type;
    }
    getTypeAsString() {
      return this.type ? this.type.toString() : '';
    }
    toString() {
      return `${this.getTypeAsString()}{ ${this.elements
        .map((e) => e.toString())
        .join(', ')} }`;
    }
    accept(e) {
      return e.visitArrayInitExpression(this);
    }
  },
  qt = class t {
    constructor(e, r) {
      (this.object = e), (this.next = r), (this.type = null);
    }
    kind() {
      return 'ArrayMemberExpression';
    }
    literal() {
      return '';
    }
    copy() {
      let e = new t(this.object.copy(), this.next.copy());
      return (e.type = this.type?.copy() ?? null), e;
    }
    equals(e) {
      return !(e instanceof t) ||
        !this.object.equals(e.object) ||
        !this.next.equals(e.next)
        ? !1
        : this.type && e.type
        ? this.type.equals(e.type)
        : this.type === e.type;
    }
    getMembers() {
      let e = this.next,
        r = [this.object];
      for (; e.next !== void 0; ) r.unshift(e.object), (e = e.next);
      return r.unshift(e), r;
    }
    toString() {
      return `${this.getMembers()
        .map((e, r) => (r === 0 ? e.toString() : `[${e.toString()}]`))
        .join('')}`;
    }
    accept(e) {
      return e.visitArrayMemberExpression(this);
    }
  };
var At = class t {
  constructor(e, r, n) {
    (this.params = e), (this.returnType = r), (this.body = n), (this.type = null);
  }
  kind() {
    return 'FunctionExpression';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.params.copy(), this.returnType.copy(), this.body.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) ||
      !this.params.equals(e.params) ||
      !this.returnType.equals(e.returnType) ||
      !this.body.equals(e.body)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `func(${this.params.toString()}) ${this.returnType.toString()} ${this.body.toString()}`;
  }
  accept(e) {
    return e.visitFunctionExpression(this);
  }
};
var Vt = class t {
    constructor(e) {
      (this.token = e), (this.type = null), (this.name = e.lexeme);
    }
    kind() {
      return 'Identifier';
    }
    literal() {
      return this.token.lexeme;
    }
    copy() {
      let e = new t(this.token);
      return (e.type = this.type?.copy() ?? null), e;
    }
    equals(e) {
      return e instanceof t
        ? this.type && e.type
          ? this.name === e.name && this.type?.equals(e.type)
          : this.name === e.name && this.type == e.type
        : !1;
    }
    toString() {
      return this.token.lexeme;
    }
    accept(e) {
      return e.visitIdentifier(this);
    }
  },
  Ot = class t {
    constructor(e) {
      (this.token = e),
        (this.type = new D()),
        Qr(e.lexeme)
          ? (this.value = parseInt(e.lexeme, 16))
          : _r(e.lexeme)
          ? (this.value = parseInt(e.lexeme.replace('0b', ''), 2))
          : e1(e.lexeme)
          ? (this.value = parseInt(e.lexeme.replace('0o', ''), 8))
          : (this.value = Number(e.lexeme));
    }
    kind() {
      return 'IntegerLiteral';
    }
    copy() {
      return new t(this.token.copy());
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    literal() {
      return this.token.lexeme;
    }
    toString() {
      return `${this.value}`;
    }
    accept(e) {
      return e.visitIntegerLiteral(this);
    }
  };
function Qr(t) {
  return /^(0x)[0-9A-Fa-f]+$/.test(t);
}
function _r(t) {
  return /^(0b)[01]+$/.test(t);
}
function e1(t) {
  return /^(0o)[0-7]+$/.test(t);
}
var jt = class t {
    constructor(e) {
      (this.token = e), (this.type = new Z()), (this.value = Number(e.lexeme));
    }
    kind() {
      return 'FloatLiteral';
    }
    literal() {
      return this.token.lexeme;
    }
    copy() {
      return new t(this.token.copy());
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return `${this.value}`;
    }
    accept(e) {
      return e.visitFloatLiteral(this);
    }
  },
  It = class t {
    constructor(e) {
      (this.token = e), (this.type = new Ae()), (this.value = e.lexeme);
    }
    kind() {
      return 'CharLiteral';
    }
    literal() {
      return this.token.lexeme;
    }
    copy() {
      return new t(this.token.copy());
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return `'${this.value}'`;
    }
    accept(e) {
      return e.visitCharLiteral(this);
    }
  },
  Lt = class t {
    constructor(e) {
      (this.token = e), (this.type = new le()), (this.value = e.lexeme);
    }
    kind() {
      return 'StringLiteral';
    }
    literal() {
      return this.token.lexeme;
    }
    copy() {
      return new t(this.token.copy());
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return `"${this.token.lexeme}"`;
    }
    accept(e) {
      return e.visitStringLiteral(this);
    }
  },
  $t = class t {
    constructor(e) {
      (this.token = e), (this.type = new W()), (this.value = e.lexeme === 'true');
    }
    kind() {
      return 'BooleanLiteral';
    }
    literal() {
      return this.token.lexeme;
    }
    copy() {
      return new t(this.token.copy());
    }
    equals(e) {
      return e instanceof t ? this.value === e.value : !1;
    }
    toString() {
      return this.token.lexeme;
    }
    accept(e) {
      return e.visitBooleanLiteral(this);
    }
  },
  Ft = class t {
    constructor(e) {
      (this.token = e), (this.type = new N());
    }
    kind() {
      return 'NilLiteral';
    }
    literal() {
      return 'nil';
    }
    copy() {
      return new t(this.token?.copy());
    }
    equals(e) {
      return e instanceof t;
    }
    toString() {
      return 'nil';
    }
    accept(e) {
      return e.visitNilLiteral(this);
    }
  };
var Bt = class t {
  constructor(e) {
    (this.spec = e), (this.type = null);
  }
  kind() {
    return 'ObjectDeclaration';
  }
  literal() {
    return '';
  }
  copy() {
    let e = new t(this.spec.copy());
    return (e.type = this.type?.copy() ?? null), e;
  }
  equals(e) {
    return !(e instanceof t) || !this.spec.equals(e.spec)
      ? !1
      : this.type && e.type
      ? this.type.equals(e.type)
      : this.type === e.type;
  }
  toString() {
    return `object ${this.spec.toString()}`;
  }
  accept(e) {
    return e.visitObjDecl(this);
  }
};
var zr = {
  VarDecl: rt,
  ConstDecl: st,
  ValueSpec: nt,
  FuncDecl: it,
  ObjDecl: Bt,
  Field: et,
  FieldList: tt,
  DeclStmt: at,
  Block: lt,
  ReturnStmt: ut,
  BreakStmt: ct,
  ContinueStmt: ot,
  IfStmt: pt,
  LoopStmt: ht,
  Assign: ft,
  ExprStmt: Fe,
  Conditional: yt,
  Logical: mt,
  Binary: vt,
  Unary: bt,
  Call: kt,
  ObjectMember: Be,
  Cast: xt,
  Update: gt,
  Group: wt,
  ObjectInit: dt,
  ObjectInlineInit: St,
  ObjectField: Tt,
  ArrayInit: Et,
  ArrayMember: qt,
  FuncExpr: At,
  Identifier: Vt,
  IntegerLiteral: Ot,
  FloatLiteral: jt,
  CharLiteral: It,
  StringLiteral: Lt,
  BooleanLiteral: $t,
  NilLiteral: Ft,
};
var Nt = class t {
  constructor(e, r) {
    (this.name = e), (this.type = r);
  }
  kind() {
    return 'TypeSpecification';
  }
  copy() {
    return new t(this.name.copy(), this.type.copy());
  }
  equals(e) {
    return e instanceof t ? this.name.equals(e.name) && this.type.equals(e.type) : !1;
  }
  toString() {
    return `${this.name.toString()} ${this.type.toString()}`;
  }
};
var Ne = class t {
  constructor(e) {
    this.type = e;
  }
  kind() {
    return 'VariadicType';
  }
  copy() {
    return new t(this.type.copy());
  }
  equals(e) {
    return e instanceof t ? this.type.equals(e.type) : !1;
  }
  toString() {
    return `...${this.type.toString()}`;
  }
};
var Ce = class t {
  constructor(e, r) {
    (this.params = e), (this.returnType = r);
  }
  kind() {
    return 'FunctionType';
  }
  copy() {
    return new t(
      P(this.params, (e) => e.copy()),
      this.returnType.copy(),
    );
  }
  equals(e) {
    return !(e instanceof t) || !this.returnType.equals(e.returnType)
      ? !1
      : z(this.params, e.params, (r, n) => r.equals(n));
  }
  toString() {
    return `func(${this.params.toString()})${this.returnType.toString()}`;
  }
};
var Ct = class t {
  constructor(e) {
    this.fields = e;
  }
  kind() {
    return 'ObjectType';
  }
  copy() {
    return new t(this.fields.copy());
  }
  equals(e) {
    return e instanceof t ? this.fields.equals(e.fields) : !1;
  }
  toString() {
    return `{${this.fields.list.map((e) => e.toString()).join(', ')}}`;
  }
};
var Dt = class t {
  constructor(e, r) {
    (this.type = e), (this.length = r);
  }
  kind() {
    return 'ArrayType';
  }
  copy() {
    return new t(this.type.copy(), this.length);
  }
  equals(e) {
    return e instanceof t ? this.type.equals(e.type) && this.length == e.length : !1;
  }
  toString() {
    return `[${this.length || ''}]${this.type.toString()}`;
  }
};
var De = class t {
  kind() {
    return 'AnyType';
  }
  copy() {
    return new t();
  }
  equals(e) {
    return e instanceof t;
  }
  toString() {
    return 'any';
  }
};
var Gr = {
  TypeSpec: Nt,
  Variadic: Ne,
  FuncType: Ce,
  ObjType: Ct,
  ArrType: Dt,
  IntType: D,
  FloatType: Z,
  CharType: Ae,
  StringType: le,
  BoolType: W,
  VoidType: N,
  AnyT: De,
};
var Rt = class {
  constructor(e) {
    this.env = e;
  }
  visitVarDecl(e) {
    let { decl: r } = e,
      n = r.map((i) => i.name.token);
    for (let i of n)
      if (this.env.exists(i)) return new Error(`'${i.lexeme}': already defined`);
    let l = r.map((i) => ({ type: i.type, value: i.value }));
    for (let i = 0; i < n.length; i++) {
      let u = n[i],
        o = l[i];
      if (this.env.exists(u))
        return new Error(`'${u.lexeme}': redeclared in this block

	${e.toString()}`);
      if (!o.value) this.env.define(u.lexeme, { type: o.type?.copy(), value: new U() });
      else {
        let f = o.value.accept(this);
        if (v(f)) return f;
        this.env.define(u.lexeme, { type: f.type?.copy(), value: f.value.copy() });
      }
    }
    return { type: new N(), value: new U() };
  }
  visitConstDecl(e) {
    throw new Error('Method not implemented.');
  }
  visitFieldDecl(e) {
    throw new Error('Method not implemented.');
  }
  visitFieldListDecl(e) {
    throw new Error('Method not implemented.');
  }
  visitFuncDecl(e) {
    let { name: r, params: n, body: l, type: i } = e;
    return this.env.exists(r.token)
      ? new Error(`'${r.name}': already defined`)
      : (this.env.define(r.name, { type: i?.copy(), value: new Te(n, l, i) }),
        { type: new N(), value: new U() });
  }
  visitObjDecl(e) {
    let { spec: r, type: n } = e;
    return this.env.exists(r.name.token)
      ? new Error(`'${r.name.toString()}': already defined`)
      : (this.env.define(r.name.name, {
          type: n?.copy(),
          value: new Ie(r.name.name, r.type),
        }),
        { type: new N(), value: new U() });
  }
  visitDeclStmt(e) {
    return e.stmt.accept(this);
  }
  execBlock(e, r) {
    let n = this.env,
      l = {},
      i = !1;
    try {
      this.env = r;
      for (let u of e) {
        if ((i ? (i = !1) : (l = u.accept(this)), v(l))) return (this.env = n), l;
        if (Le(l.value) || _e(l.value)) return (this.env = n), l;
        i = Pr(l.value);
      }
    } finally {
      this.env = n;
    }
    return l;
  }
  visitBlockStmt(e) {
    return this.execBlock(e.declarations, new ve(this.env));
  }
  visitContinueStmt(e) {
    return { type: {}, value: new je() };
  }
  visitBreakStmt(e) {
    return { type: {}, value: new Oe() };
  }
  visitReturnStmt(e) {
    let { result: r } = e;
    if (!r) return { type: new N(), value: new Se({ type: new N(), value: new U() }) };
    let n = r.accept(this);
    return v(n)
      ? n
      : { type: n.type?.copy(), value: new Se({ type: n.type, value: n.value }) };
  }
  visitIfStatement(e) {
    let r = e.condition.accept(this);
    return v(r)
      ? r
      : ke(r.value)
      ? e.thenBranch.accept(this)
      : e.elseBranch
      ? e.elseBranch?.accept(this)
      : { type: new N(), value: new U() };
  }
  runAsUndef(e) {
    for (;;) {
      let r = e.accept(this);
      if (v(r) || Le(r.value)) return r;
      if (_e(r.value)) return { type: new N(), value: new U() };
    }
  }
  execLoop(e, r, n) {
    let l = { type: new N(), value: new U() };
    for (;;) {
      if (((l = e.accept(this)), v(l))) return l;
      if (!ke(l.value)) break;
      if (((l = r.accept(this)), v(l) || Le(l.value))) return l;
      if (_e(l.value)) return { type: new N(), value: new U() };
      n && n();
    }
    return { type: new N(), value: new U() };
  }
  visitLoopStatement(e) {
    let { actLike: r, init: n, cond: l, post: i, body: u } = e;
    switch (r) {
      case 'Undef':
        return this.runAsUndef(u);
      case 'While': {
        if (l) return this.execLoop(l, u);
        break;
      }
      case 'For': {
        if (!n && !l && !i) return this.runAsUndef(u);
        let o = this.env;
        this.env = new ve(o);
        try {
          if (n) {
            let f = n.accept(this);
            if (v(f)) return f;
          }
          if (l)
            return this.execLoop(l, u, () => {
              if (i) {
                let f = i.map((R) => R.accept(this));
                for (let R of f) if (v(R)) return R;
              }
            });
        } finally {
          this.env = o;
        }
        break;
      }
      default:
        return new Error(`invalid statement: ${e.toString()}`);
    }
    return { type: new N(), value: new U() };
  }
  execMemberAssign(e, r, n) {
    switch (e.lexeme) {
      case '=': {
        let [l, ...i] = r.getMembers(),
          u = l.accept(this);
        if (v(u)) return u;
        let o = u.value,
          f = i.map((G) => G.name),
          R = o.findAndSet(f, f[f.length - 1], n.value);
        return v(R) ? R : n;
      }
      default:
        return new Error(
          `invalid operation: ${r.toString()} ${e.lexeme} ${n.value.toString()}`,
        );
    }
  }
  execAssign(e, r, n) {
    switch (e.lexeme) {
      case '=':
        return (r.value = n.value), r;
      default:
        return new Error(
          `invalid operation: ${r.value.toString()} ${e.lexeme} ${n.value.toString()}`,
        );
    }
  }
  visitAssignExpression(e) {
    let { lhs: r, operation: n, rhs: l } = e,
      i = r instanceof Fe ? r.expr : r,
      u = l.accept(this);
    if (v(u)) return u;
    if (((u = { type: u.type?.copy(), value: u.value?.copy() }), i instanceof Be)) {
      let R = this.execMemberAssign(n, i, u);
      if (v(R)) return new Error(`invalid expression: ${e.toString()}, ${R.message}`);
    }
    let o = i.accept(this);
    if (v(o)) return o;
    let f = this.execAssign(n, o, u);
    return v(f)
      ? new Error(`invalid expression: ${e.toString()}, ${f.message}`)
      : { type: new N(), value: new U() };
  }
  visitExpressionStatement(e) {
    return e.expr.accept(this);
  }
  visitConditionalExpression(e) {
    let r = e.expression.accept(this);
    return v(r) ? r : ke(r.value) ? e.isTrue.accept(this) : e.isFalse.accept(this);
  }
  visitLogicalExpression(e) {
    let r = e.left.accept(this);
    if (v(r)) return r;
    let n = e.right.accept(this);
    if (v(n)) return n;
    switch (e.operator.lexeme) {
      case '&&':
        return { type: new W(), value: new Q(ke(r.value) && ke(n.value)) };
      case '||':
        return { type: new W(), value: new Q(ke(r.value) || ke(n.value)) };
      default:
        return new Error(`invalid expression: ${e.toString()}`);
    }
  }
  visitBinaryExpression(e) {
    let { token: r, left: n, right: l } = e,
      i = n.accept(this);
    if (v(i)) return i;
    let u = l.accept(this);
    if (v(u)) return u;
    switch (r.lexeme) {
      case '==':
        return { type: new W(), value: new Q(i.value.equals(u.value)) };
      case '!=':
        return { type: new W(), value: new Q(!i.value.equals(u.value)) };
      case '|': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = i.value.value | u.value.value;
        return { type: new D(), value: new C(f) };
      }
      case '^': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = i.value.value ^ u.value.value;
        return { type: new D(), value: new C(f) };
      }
      case '&': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = i.value.value & u.value.value;
        return { type: new D(), value: new C(f) };
      }
      case '<': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) < this.getValueOfNumber(u.value);
        return { type: new W(), value: new Q(f) };
      }
      case '>': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) > this.getValueOfNumber(u.value);
        return { type: new W(), value: new Q(f) };
      }
      case '<=': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) <= this.getValueOfNumber(u.value);
        return { type: new W(), value: new Q(f) };
      }
      case '>=': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) >= this.getValueOfNumber(u.value);
        return { type: new W(), value: new Q(f) };
      }
      case '<<': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) << this.getValueOfNumber(u.value);
        return { type: new D(), value: new C(f) };
      }
      case '>>': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) >> this.getValueOfNumber(u.value);
        return { type: new D(), value: new C(f) };
      }
      case '+': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = $e(i.value) || ze(i.value),
          R = $e(u.value) || ze(u.value);
        if (f && R) {
          let pe = this.getValurOfStr(i.value) + this.getValurOfStr(u.value);
          return { type: new le(), value: new oe(pe) };
        }
        if (f && !R) {
          let pe = this.getValurOfStr(i.value) + this.getValueOfNumber(u.value);
          return { type: new le(), value: new oe(pe) };
        }
        if (!f && R) {
          let pe = this.getValueOfNumber(i.value) + this.getValurOfStr(u.value);
          return { type: new le(), value: new oe(pe) };
        }
        let G = this.getValueOfNumber(i.value) + this.getValueOfNumber(u.value);
        return K(i.value) || K(u.value)
          ? { type: new Z(), value: new X(G) }
          : { type: new D(), value: new C(G) };
      }
      case '-': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) - this.getValueOfNumber(u.value);
        return K(i.value) || K(u.value)
          ? { type: new Z(), value: new X(f) }
          : { type: new D(), value: new C(f) };
      }
      case '*': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) * this.getValueOfNumber(u.value);
        return K(i.value) || K(u.value)
          ? { type: new Z(), value: new X(f) }
          : { type: new D(), value: new C(f) };
      }
      case '/': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) / this.getValueOfNumber(u.value);
        return K(i.value) || K(u.value)
          ? { type: new Z(), value: new X(f) }
          : { type: new D(), value: new C(f) };
      }
      case '%': {
        let o = this.checkBinaryOp(r, i.value, u.value);
        if (o) return o;
        let f = this.getValueOfNumber(i.value) % this.getValueOfNumber(u.value);
        return K(i.value) || K(u.value)
          ? { type: new Z(), value: new X(f) }
          : { type: new D(), value: new C(f) };
      }
      default:
        return new Error(`invalid expression: ${e.toString()}`);
    }
  }
  getValueOfNumber(e) {
    return Y(e), e.value;
  }
  getValurOfStr(e) {
    return $e(e), e.value;
  }
  checkBinaryOp(e, r, n) {
    switch (e.lexeme) {
      case '|':
        return !Y(r) || !Y(n)
          ? new Error(`bad operand types for binary operator '${e.lexeme}'
                            ${r.toString()} ${e.lexeme} ${n.toString()}`)
          : void 0;
      case '^':
        return !Y(r) || !Y(n)
          ? new Error(`bad operand types for binary operator '${e.lexeme}'
                            ${r.toString()} ${e.lexeme} ${n.toString()}`)
          : void 0;
      case '&':
        return !Y(r) || !Y(n)
          ? new Error(`bad operand types for binary operator '${e.lexeme}'
                            ${r.toString()} ${e.lexeme} ${n.toString()}`)
          : void 0;
      case '<':
        return this.checkNumberOperands(e, r, n);
      case '>':
        return this.checkNumberOperands(e, r, n);
      case '<=':
        return this.checkNumberOperands(e, r, n);
      case '>=':
        return this.checkNumberOperands(e, r, n);
      case '<<':
        return !Y(r) || !Y(n)
          ? new Error(`bad operand types for binary operator '${e.lexeme}'
                            ${r.toString()} ${e.lexeme} ${n.toString()}`)
          : void 0;
      case '>>':
        return !Y(r) || !Y(n)
          ? new Error(`bad operand types for binary operator '${e.lexeme}'
                            ${r.toString()} ${e.lexeme} ${n.toString()}`)
          : void 0;
      case '+': {
        let l = $e(r) || ze(r),
          i = $e(n) || ze(n);
        return l || i ? void 0 : this.checkNumberOperands(e, r, n);
      }
      case '-':
        return this.checkNumberOperands(e, r, n);
      case '*':
        return this.checkNumberOperands(e, r, n);
      case '/':
        return this.checkNumberOperands(e, r, n);
      case '%':
        return this.checkNumberOperands(e, r, n);
      default:
        return new Error(
          `invalid expression: ${r.toString()} ${e.lexeme} ${n.toString()}`,
        );
    }
  }
  checkNumberOperands(e, r, n) {
    let l = r instanceof C || r instanceof X,
      i = n instanceof C || n instanceof X;
    if (!(l && i))
      return new Error(`${e.lexeme}: operands must be numbers
                ${r.toString()} ${e.lexeme} ${n.toString()}`);
  }
  visitUnaryExpression(e) {
    let { operator: r, expression: n } = e,
      l = n.accept(this);
    if (v(l)) return l;
    if (r.lexeme === '+') {
      if (Y(l.value)) return { type: new D(), value: new C(l.value.value) };
      if (K(l.value)) return { type: new Z(), value: new X(l.value.value) };
    }
    if (r.lexeme === '-') {
      if (Y(l.value)) return { type: new D(), value: new C(-l.value.value) };
      if (K(l.value)) return { type: new Z(), value: new X(-l.value.value) };
    }
    return r.lexeme === '~' && Y(l.value)
      ? { type: new D(), value: new C(~l.value.value) }
      : r.lexeme === '!'
      ? { type: new W(), value: new Q(!ke(l.value)) }
      : new Error(`invalid expression: ${e.toString()}`);
  }
  visitUpdateExpression(e) {
    let { expression: r, operator: n } = e,
      l = r.accept(this);
    if (v(l)) return l;
    if (n.lexeme === '++') {
      if (Y(l.value)) return { type: new D(), value: new C(l.value.value++) };
      if (K(l.value)) return { type: new Z(), value: new X(l.value.value++) };
    }
    if (n.lexeme === '--') {
      if (Y(l.value)) return { type: new D(), value: new C(l.value.value--) };
      if (K(l.value)) return { type: new Z(), value: new X(l.value.value--) };
    }
    return new Error(`invalid expression: ${e.toString()}`);
  }
  visitCastExpression(e) {
    throw new Error('Method not implemented.');
  }
  visitArrayMemberExpression(e) {
    let [r, ...n] = e.getMembers(),
      l = this.getArrayObject(r);
    if (v(l)) return l;
    if (this.isArrayDimensionTooSmall(l, n.length - 1))
      return new Error(`out of bounds ${e.toString()} : ${l.toString()}`);
    let i;
    for (let u of n) {
      let o = this.getIntegerValueFromIndexExpression(u);
      if (v(o)) return o;
      if (0 > o || o > l.objects.length - 1)
        return new Error(`out of bounds ${o} : ${l.toString()}`);
      (i = l.objects[o]), i instanceof be && (l = i);
    }
    return i
      ? { type: l.type?.type.copy(), value: i }
      : new Error(`invalid expression: ${e.toString()}`);
  }
  getArrayObject(e) {
    let r = e.accept(this);
    return v(r)
      ? r
      : r.value instanceof be
      ? r.value
      : new Error(`invalid expression: ${r.value.toString()} is not indexable`);
  }
  isArrayDimensionTooSmall(e, r) {
    return be.dimensionSize(e) < r;
  }
  getIntegerValueFromIndexExpression(e) {
    let r = e.accept(this);
    return v(r)
      ? r
      : r.value instanceof C
      ? r.value.value
      : new Error(`array index access must be an integer, got: ${r.type?.toString()}`);
  }
  visitCallExpression(e) {
    let { callee: r, args: n } = e,
      l = r.accept(this);
    if (v(l)) return l;
    let i = l.value;
    if (!Ur(i))
      return new Error(`invalid operation: cannot call non-function: ${r.toString()}`);
    let u = n.map((f) => f.accept(this));
    for (let f of u) if (v(f)) return f;
    let o = i.call(this, u);
    return v(o), o;
  }
  visitObjectMemberExpression(e) {
    let [r, ...n] = e.getMembers(),
      l = r.accept(this);
    if (v(l)) return l;
    let i = l.value,
      u = n.map((f) => f.name),
      o = i.getFieldIn(u);
    return v(o) ? o : { type: {}, value: o };
  }
  visitGroupExpression(e) {
    let r = e.expression.accept(this);
    return v(r), r;
  }
  visitObjectInitExpression(e) {
    let { name: r, fields: n } = e,
      l = r.accept(this);
    if (v(l)) return l;
    if (!(l.value instanceof Ie)) return new Error(`not a TypeSpec: ${r.toString()}`);
    let i = n.map((G) => G.value.accept(this));
    for (let G of i) if (v(G)) return G;
    let u = l.value,
      o = n.map((G) => G.name.name),
      f = i.map((G) => G.value);
    return u.callWithNamedArgs(this, o, f);
  }
  visitObjectInlineInitExpression(e) {
    let { type: r, fields: n } = e,
      l = n.map((f) => f.value.accept(this));
    for (let f of l) if (v(f)) return f;
    let i = n.map((f) => f.name.name),
      u = l.map((f) => f.value);
    return new Ie('', r.copy()).callWithNamedArgs(this, i, u);
  }
  visitObjectFieldExpression(e) {
    throw new Error('Method not implemented.');
  }
  visitArrayInitExpression(e) {
    let { elements: r, type: n } = e,
      l = r.map((u) => u.accept(this));
    for (let u of l) if (v(u)) return u;
    let i = l.map((u) => u.value);
    return { type: n, value: new be(i, n) };
  }
  visitFunctionExpression(e) {
    let { params: r, body: n, type: l } = e;
    return { type: l?.copy(), value: new Te(r, n, l) };
  }
  visitIdentifier(e) {
    let r = this.env.get(e.token);
    return v(r), r;
  }
  visitIntegerLiteral(e) {
    return { type: e.type, value: new C(e.value) };
  }
  visitFloatLiteral(e) {
    return { type: e.type, value: new X(e.value) };
  }
  visitCharLiteral(e) {
    return { type: e.type, value: new Ve(e.value) };
  }
  visitStringLiteral(e) {
    return { type: e.type, value: new oe(e.value) };
  }
  visitBooleanLiteral(e) {
    return { type: e.type, value: new Q(e.value) };
  }
  visitNilLiteral(e) {
    return { type: e.type, value: new U() };
  }
};
function Hr(t) {
  let e = () => ({
    call(r, n) {
      let l = n.map((i) => i.value.toString()).join('');
      return t?.push(l), { type: new le(), value: new oe(l) };
    },
  });
  return {
    name: 'println',
    value: { type: new Ce([new Ne(new De())], new N()), value: e() },
  };
}
Jt.yy = { Token: Ke, AST: zr, Types: Gr };
function t1(t) {
  try {
    return Jt.parse(t);
  } catch (e) {
    let r = e;
    return console.error(r.message), console.error(r.hash), e;
  }
}
function r1(t, e) {
  for (let { name: r, value: n } of e) t.define(r, n);
}
function s1(t) {
  let e = [],
    r = new ve();
  r1(r, [Hr(e)]);
  let n = new Rt(r),
    l = t1(t);
  if (v(l)) return e.push(l.message), e;
  for (let i of l) {
    let u = i.accept(n);
    if (v(u)) {
      e.push(u.message);
      break;
    }
  }
  return e;
}
export { s1 as default };
