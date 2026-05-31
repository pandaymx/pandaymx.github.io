import React, { ComponentProps } from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import clsx from 'clsx';

export default function CodeBlockWrapper(
  props: ComponentProps<typeof CodeBlock>,
) {
  const { children, showLineNumbers, className } = props;

  // 1. 获取代码内容字符串（处理 children 可能不是字符串的情况）
  const codeString = typeof children === 'string' ? children.trim() : '';

  // 2. 计算行数：根据换行符判断
  const lineCount = codeString.split('\n').length;

  // 3. 决定是否显示行号：
  // 如果用户手动传入了 showLineNumbers（true 或 false），以用户为准
  // 否则，只有当行数 > 1 时才默认为 true
  const shouldShowLineNumbers = showLineNumbers ?? lineCount > 1;

  // 提取语言名称 (例如 from "language-ts" to "ts")
  const language = className
    ?.split(' ')
    .find((cls: string) => cls.startsWith('language-'));

  return (
    <div className={clsx('custom-code-block', language)}>
      <CodeBlock {...props} showLineNumbers={shouldShowLineNumbers} />
    </div>
  );
}
