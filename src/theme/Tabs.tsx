import React, { useState, useEffect } from 'react';
import Tabs from '@theme-original/Tabs';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * 包装 Docusaurus 原始 Tabs 组件
 * 增加逻辑：如果 groupId="os" 且未手动设置 defaultValue，则根据浏览器 UA 自动选择
 */
function TabsWrapper(props: React.ComponentProps<typeof Tabs>) {
  const { groupId, defaultValue, ...rest } = props;
  const [selectedOs, setSelectedOs] = useState(defaultValue);

  useEffect(() => {
    // 仅在 groupId 为 "os" 或 "distro" 且没有初始 defaultValue 时执行自动检测
    if (
      (groupId === 'os' || groupId === 'distro') &&
      !defaultValue &&
      ExecutionEnvironment.canUseDOM
    ) {
      // 1. 检查 localStorage，如果用户已经选过了，就不再自动切换
      const storageKey = `docusaurus.tab.${groupId}`;
      if (localStorage.getItem(storageKey)) {
        return;
      }

      const ua = window.navigator.userAgent.toLowerCase();
      // @ts-expect-error - userAgentData 是现代浏览器新 API，类型定义可能不全
      const userAgentDataPlatform =
        window.navigator.userAgentData?.platform?.toLowerCase();

      let detected = defaultValue;

      if (groupId === 'os') {
        detected = 'windows';
        // 优先级：macOS > Linux (含 ChromeOS) > Windows
        if (userAgentDataPlatform?.includes('mac') || ua.includes('mac')) {
          detected = 'macos';
        } else if (
          userAgentDataPlatform?.includes('linux') ||
          ua.includes('linux') ||
          ua.includes('cros')
        ) {
          detected = 'linux';
        } else if (
          userAgentDataPlatform?.includes('win') ||
          ua.includes('win')
        ) {
          detected = 'windows';
        }
      } else if (groupId === 'distro') {
        detected = 'ubuntu';
        if (ua.includes('arch')) {
          detected = 'arch';
        } else if (ua.includes('fedora')) {
          detected = 'fedora';
        } else if (ua.includes('debian')) {
          detected = 'debian';
        } else if (ua.includes('centos') || ua.includes('rhel')) {
          detected = 'centos';
        }
        // 如果是 Windows 或 macOS，通常默认推荐 ubuntu (WSL/VM)
      }

      // 使用 requestAnimationFrame 将更新推迟到下一帧，避开同步级联渲染警告
      if (detected && detected !== defaultValue) {
        requestAnimationFrame(() => {
          setSelectedOs(detected);
        });
      }
    }
  }, [groupId, defaultValue]);

  // 性能优化：仅在检测值与初始传入的 defaultValue 不同时，且由于是第一次运行才需要 key 强制重绘
  // 这样 90% 的 Windows 用户（或者已经有选择的用户）不会触发组件重挂载
  const key =
    (groupId === 'os' || groupId === 'distro') && selectedOs !== defaultValue
      ? selectedOs
      : undefined;

  return (
    <Tabs key={key} groupId={groupId} defaultValue={selectedOs} {...rest} />
  );
}

export default TabsWrapper;
