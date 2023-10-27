import * as interpreter from './wesly';

type Interpreter = (input: string) => string[];

export default interpreter.default as Interpreter;
