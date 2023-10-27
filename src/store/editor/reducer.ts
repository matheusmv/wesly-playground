import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEMO } from '../../components/CodeEditor/utils';

export type EditorState = {
  sourceCode: string;
};

const editorState: EditorState = {
  sourceCode: DEMO,
};

const slice = createSlice({
  name: 'editor',
  initialState: editorState,
  reducers: {
    sourceCodeChange: (state, action: PayloadAction<EditorState['sourceCode']>) => {
      state.sourceCode = action.payload;
    },
  },
});

export const { sourceCodeChange } = slice.actions;

export default slice.reducer;
