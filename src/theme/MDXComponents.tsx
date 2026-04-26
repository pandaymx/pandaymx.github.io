// 导入原始组件
import MDXComponents from '@theme-original/MDXComponents';
import ExpandableTable from '@site/src/components/ExpandableTable';

export default {
  // 复用默认的映射
  ...MDXComponents,
  // 添加我们的自定义组件
  EnhancedTable: ExpandableTable,
};
