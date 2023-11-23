<template>
  <div>




  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      description: '项目信息'
    }
  },
  mounted() {
    this.editor = monaco.editor.create(this.$refs.editor, {
      acceptSuggestionOnCommitCharacter: true, // 接受关于提交字符的建议
      acceptSuggestionOnEnter: 'on', // 接受输入建议 "on" | "off" | "smart" 
      accessibilityPageSize: 10, // 辅助功能页面大小 Number 说明：控制编辑器中可由屏幕阅读器读出的行数。警告：这对大于默认值的数字具有性能含义。
      accessibilitySupport: 'on', // 辅助功能支持 控制编辑器是否应在为屏幕阅读器优化的模式下运行。
      autoClosingBrackets: 'always', // 是否自动添加结束括号(包括中括号) "always" | "languageDefined" | "beforeWhitespace" | "never"
      autoClosingDelete: 'always', // 是否自动删除结束括号(包括中括号) "always" | "never" | "auto"
      autoClosingOvertype: 'always', // 是否关闭改写 即使用insert模式时是覆盖后面的文字还是不覆盖后面的文字 "always" | "never" | "auto"
      autoClosingQuotes: 'always', // 是否自动添加结束的单引号 双引号 "always" | "languageDefined" | "beforeWhitespace" | "never"
      autoIndent: 'None', // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
      automaticLayout: true, // 自动布局
      codeLens: false, // 是否显示codeLens 通过 CodeLens，你可以在专注于工作的同时了解代码所发生的情况 – 而无需离开编辑器。 可以查找代码引用、代码更改、关联的 Bug、工作项、代码评审和单元测试。
      codeLensFontFamily: '', // codeLens的字体样式
      codeLensFontSize: 14, // codeLens的字体大小
      colorDecorators: false, // 呈现内联色彩装饰器和颜色选择器
      comments: {
        ignoreEmptyLines: true, // 插入行注释时忽略空行。默认为真。
        insertSpace: true // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
      }, // 注释配置
      contextmenu: true, // 启用上下文菜单
      columnSelection: false, // 启用列编辑 按下shift键位然后按↑↓键位可以实现列选择 然后实现列编辑
      autoSurround: 'never', // 是否应自动环绕选择
      copyWithSyntaxHighlighting: true, // 是否应将语法突出显示复制到剪贴板中 即 当你复制到word中是否保持文字高亮颜色
      cursorBlinking: 'Solid', // 光标动画样式
      cursorSmoothCaretAnimation: true, // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
      cursorStyle: 'UnderlineThin', // "Block"|"BlockOutline"|"Line"|"LineThin"|"Underline"|"UnderlineThin" 光标样式
      cursorSurroundingLines: 0, // 光标环绕行数 当文字输入超过屏幕时 可以看见右侧滚动条中光标所处位置是在滚动条中间还是顶部还是底部 即光标环绕行数 环绕行数越大 光标在滚动条中位置越居中
      cursorSurroundingLinesStyle: 'all', // "default" | "all" 光标环绕样式
      cursorWidth: 2, // <=25 光标宽度
      minimap: {
        enabled: false // 是否启用预览图
      }, // 预览图设置
      folding: true, // 是否启用代码折叠
      links: true, // 是否点击链接
      overviewRulerBorder: false, // 是否应围绕概览标尺绘制边框
      renderLineHighlight: 'gutter', // 当前行突出显示方式
      roundedSelection: false, // 选区是否有圆角
      scrollBeyondLastLine: false, // 设置编辑器是否可以滚动到最后一行之后
      readOnly: false, // 是否为只读模式
      theme: 'vs'// vs, hc-black, or vs-dark
    })

    this.editor1 = monaco.editor.create(this.$refs.editor1, {
      acceptSuggestionOnCommitCharacter: IEditorOption < acceptSuggestionOnCommitCharacter, boolean>;
    acceptSuggestionOnEnter: IEditorOption < acceptSuggestionOnEnter, "on" | "off" | "smart" >;
    accessibilityPageSize: IEditorOption < accessibilityPageSize, number >;
    accessibilitySupport: IEditorOption < accessibilitySupport, AccessibilitySupport >;
    ariaLabel: IEditorOption < ariaLabel, string >;
    autoClosingBrackets: IEditorOption < autoClosingBrackets, "always" | "languageDefined" | "beforeWhitespace" | "never" >;
    autoClosingDelete: IEditorOption < autoClosingDelete, "always" | "never" | "auto" >;
    autoClosingOvertype: IEditorOption < autoClosingOvertype, "always" | "never" | "auto" >;
    autoClosingQuotes: IEditorOption < autoClosingQuotes, "always" | "languageDefined" | "beforeWhitespace" | "never" >;
    autoIndent: IEditorOption < autoIndent, EditorAutoIndentStrategy >;
    autoSurround: IEditorOption < autoSurround, "languageDefined" | "never" | "quotes" | "brackets" >;
    automaticLayout: IEditorOption < automaticLayout, boolean >;
    codeLens: IEditorOption < codeLens, boolean >;
    codeLensFontFamily: IEditorOption < codeLensFontFamily, string >;
    codeLensFontSize: IEditorOption < codeLensFontSize, number >;
    colorDecorators: IEditorOption < colorDecorators, boolean >;
    columnSelection: IEditorOption < columnSelection, boolean >;
    comments: IEditorOption < comments, EditorCommentsOptions >;
    contextmenu: IEditorOption < contextmenu, boolean >;
    copyWithSyntaxHighlighting: IEditorOption < copyWithSyntaxHighlighting, boolean >;
    cursorBlinking: IEditorOption < cursorBlinking, TextEditorCursorBlinkingStyle >;
    cursorSmoothCaretAnimation: IEditorOption < cursorSmoothCaretAnimation, boolean >;
    cursorStyle: IEditorOption < cursorStyle, TextEditorCursorStyle >;
    cursorSurroundingLines: IEditorOption < cursorSurroundingLines, number >;
    cursorSurroundingLinesStyle: IEditorOption < cursorSurroundingLinesStyle, "default" | "all" >;
    cursorWidth: IEditorOption < cursorWidth, number >;
    definitionLinkOpensInPeek: IEditorOption < definitionLinkOpensInPeek, boolean >;
    disableLayerHinting: IEditorOption < disableLayerHinting, boolean >;
    disableMonospaceOptimizations: IEditorOption < disableMonospaceOptimizations, boolean >;
    domReadOnly: IEditorOption < domReadOnly, boolean >;
    dragAndDrop: IEditorOption < dragAndDrop, boolean >;
    editorClassName: IEditorOption < editorClassName, string >;
    emptySelectionClipboard: IEditorOption < emptySelectionClipboard, boolean >;
    extraEditorClassName: IEditorOption < extraEditorClassName, string >;
    fastScrollSensitivity: IEditorOption < fastScrollSensitivity, number >;
    find: IEditorOption < find, EditorFindOptions >;
    fixedOverflowWidgets: IEditorOption < fixedOverflowWidgets, boolean >;
    folding: IEditorOption < folding, boolean >;
    foldingHighlight: IEditorOption < foldingHighlight, boolean >;
    foldingImportsByDefault: IEditorOption < foldingImportsByDefault, boolean >;
    foldingStrategy: IEditorOption < foldingStrategy, "auto" | "indentation" >;
    fontFamily: IEditorOption < fontFamily, string >;
    fontInfo: IEditorOption < fontInfo, FontInfo >;
    fontLigatures2: IEditorOption < fontLigatures, string >;
    fontSize: IEditorOption < fontSize, number >;
    fontWeight: IEditorOption < fontWeight, string >;
    formatOnPaste: IEditorOption < formatOnPaste, boolean >;
    formatOnType: IEditorOption < formatOnType, boolean >;
    glyphMargin: IEditorOption < glyphMargin, boolean >;
    gotoLocation: IEditorOption < gotoLocation, GoToLocationOptions >;
    hideCursorInOverviewRuler: IEditorOption < hideCursorInOverviewRuler, boolean >;
    highlightActiveIndentGuide: IEditorOption < highlightActiveIndentGuide, boolean >;
    hover: IEditorOption < hover, EditorHoverOptions >;
    inDiffEditor: IEditorOption < inDiffEditor, boolean >;
    inlayHints: IEditorOption < inlayHints, any >;
    inlineSuggest: IEditorOption < inlineSuggest, any >;
    layoutInfo: IEditorOption < layoutInfo, EditorLayoutInfo >;
    letterSpacing: IEditorOption < letterSpacing, number >;
    lightbulb: IEditorOption < lightbulb, EditorLightbulbOptions >;
    lineDecorationsWidth: IEditorOption < lineDecorationsWidth, string | number >;
    lineHeight: IEditorOption < lineHeight, number >;
    lineNumbers: IEditorOption < lineNumbers, InternalEditorRenderLineNumbersOptions >;
    lineNumbersMinChars: IEditorOption < lineNumbersMinChars, number >;
    linkedEditing: IEditorOption < linkedEditing, boolean >;
    links: IEditorOption < links, boolean >;
    matchBrackets: IEditorOption < matchBrackets, "always" | "never" | "near" >;
    minimap: IEditorOption < minimap, EditorMinimapOptions >;
    mouseStyle: IEditorOption < mouseStyle, "default" | "text" | "copy" >;
    mouseWheelScrollSensitivity: IEditorOption < mouseWheelScrollSensitivity, number >;
    mouseWheelZoom: IEditorOption < mouseWheelZoom, boolean >;
    multiCursorMergeOverlapping: IEditorOption < multiCursorMergeOverlapping, boolean >;
    multiCursorModifier: IEditorOption < multiCursorModifier, "altKey" | "metaKey" | "ctrlKey" >;
    multiCursorPaste: IEditorOption < multiCursorPaste, "spread" | "full" >;
    occurrencesHighlight: IEditorOption < occurrencesHighlight, boolean >;
    overviewRulerBorder: IEditorOption < overviewRulerBorder, boolean >;
    overviewRulerLanes: IEditorOption < overviewRulerLanes, number >;
    padding: IEditorOption < padding, InternalEditorPaddingOptions >;
    parameterHints: IEditorOption < parameterHints, InternalParameterHintOptions >;
    peekWidgetDefaultFocus: IEditorOption < peekWidgetDefaultFocus, "tree" | "editor" >;
    pixelRatio: IEditorOption < pixelRatio, number >;
    quickSuggestions: IEditorOption < quickSuggestions, ValidQuickSuggestionsOptions >;
    quickSuggestionsDelay: IEditorOption < quickSuggestionsDelay, number >;
    readOnly: IEditorOption < readOnly, boolean >;
    renameOnType: IEditorOption < renameOnType, boolean >;
    renderControlCharacters: IEditorOption < renderControlCharacters, boolean >;
    renderFinalNewline: IEditorOption < renderFinalNewline, boolean >;
    renderIndentGuides: IEditorOption < renderIndentGuides, boolean >;
    renderLineHighlight: IEditorOption < renderLineHighlight, "all" | "line" | "none" | "gutter" >;
    renderLineHighlightOnlyWhenFocus: IEditorOption < renderLineHighlightOnlyWhenFocus, boolean >;
    renderValidationDecorations: IEditorOption < renderValidationDecorations, "on" | "off" | "editable" >;
    renderWhitespace: IEditorOption < renderWhitespace, "all" | "none" | "boundary" | "selection" | "trailing" >;
    revealHorizontalRightPadding: IEditorOption < revealHorizontalRightPadding, number >;
    roundedSelection: IEditorOption < roundedSelection, boolean >;
    rulers: IEditorOption < rulers, {} >;
    scrollBeyondLastColumn: IEditorOption < scrollBeyondLastColumn, number >;
    scrollBeyondLastLine: IEditorOption < scrollBeyondLastLine, boolean >;
    scrollPredominantAxis: IEditorOption < scrollPredominantAxis, boolean >;
    scrollbar: IEditorOption < scrollbar, InternalEditorScrollbarOptions >;
    selectOnLineNumbers: IEditorOption < selectOnLineNumbers, boolean >;
    selectionClipboard: IEditorOption < selectionClipboard, boolean >;
    selectionHighlight: IEditorOption < selectionHighlight, boolean >;
    showDeprecated: IEditorOption < showDeprecated, boolean >;
    showFoldingControls: IEditorOption < showFoldingControls, "always" | "mouseover" >;
    showUnused: IEditorOption < showUnused, boolean >;
    smartSelect: IEditorOption < smartSelect, any >;
    smoothScrolling: IEditorOption < smoothScrolling, boolean >;
    snippetSuggestions: IEditorOption < snippetSuggestions, "none" | "top" | "bottom" | "inline" >;
    stickyTabStops: IEditorOption < stickyTabStops, boolean >;
    stopRenderingLineAfter: IEditorOption < stopRenderingLineAfter, number >;
    suggest: IEditorOption < suggest, InternalSuggestOptions >;
    suggestFontSize: IEditorOption < suggestFontSize, number >;
    suggestLineHeight: IEditorOption < suggestLineHeight, number >;
    suggestOnTriggerCharacters: IEditorOption < suggestOnTriggerCharacters, boolean >;
    suggestSelection: IEditorOption < suggestSelection, "first" | "recentlyUsed" | "recentlyUsedByPrefix" >;
    tabCompletion: IEditorOption < tabCompletion, "on" | "off" | "onlySnippets" >;
    tabFocusMode: IEditorOption < tabFocusMode, boolean >;
    tabIndex: IEditorOption < tabIndex, number >;
    unfoldOnClickAfterEndOfLine: IEditorOption < unfoldOnClickAfterEndOfLine, boolean >;
    unusualLineTerminators: IEditorOption < unusualLineTerminators, "auto" | "off" | "prompt" >;
    useShadowDOM: IEditorOption < useShadowDOM, boolean >;
    useTabStops: IEditorOption < useTabStops, boolean >;
    wordSeparators: IEditorOption < wordSeparators, string >;
    wordWrap: IEditorOption < wordWrap, "on" | "off" | "wordWrapColumn" | "bounded" >;
    wordWrapBreakAfterCharacters: IEditorOption < wordWrapBreakAfterCharacters, string >;
    wordWrapBreakBeforeCharacters: IEditorOption < wordWrapBreakBeforeCharacters, string >;
    wordWrapColumn: IEditorOption < wordWrapColumn, number >;
    wordWrapOverride1: IEditorOption < wordWrapOverride1, "on" | "off" | "inherit" >;
    wordWrapOverride2: IEditorOption < wordWrapOverride2, "on" | "off" | "inherit" >;
    wrappingIndent: IEditorOption < wrappingIndent, WrappingIndent >;
    wrappingInfo: IEditorOption < wrappingInfo, EditorWrappingInfo >;
    wrappingStrategy: IEditorOption < wrappingStrategy, "simple" | "advanced" > 
}
)

}
}
</script>
<style lang="" scoped>
  
  
  
  
</style>