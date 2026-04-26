import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import styles from './styles.module.css';

interface EnhancedTableProps {
  children: React.ReactNode;
  title?: string;
}

export default function EnhancedTable({ children, title }: EnhancedTableProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFullscreen(false);
    };
    if (isFullscreen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  // 基础渲染：普通的表格容器
  const tableContent = (
    <div
      className={clsx(
        styles.tableContainer,
        isFullscreen && styles.isFullscreenActive,
      )}
    >
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            style={{ marginRight: '8px', opacity: 0.7 }}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
          {title && <span className={styles.title}>{title}</span>}
        </div>
        <button
          className={styles.fullscreenBtn}
          onClick={toggleFullscreen}
          title={isFullscreen ? '退出全屏' : '全屏查看'}
        >
          {isFullscreen ? (
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          )}
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );

  // 如果是全屏状态，使用 Portal 渲染到 body 顶层，避免层级干扰
  if (isFullscreen && typeof document !== 'undefined') {
    return createPortal(
      <div className={styles.portalWrapper}>
        <div
          className={styles.overlay}
          onClick={() => setIsFullscreen(false)}
        />
        <div className={styles.modalContent}>{tableContent}</div>
      </div>,
      document.body,
    );
  }

  return tableContent;
}
