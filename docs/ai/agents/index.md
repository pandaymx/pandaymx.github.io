---
title: AI 代理
sidebar_position: 3
---

# AI 代理 (Agents)

AI 代理 (Agents) 代表了从简单的“问答”系统向“自主行动”系统的演进。本模块将深入探讨如何构建具有感知、规划、记忆和行动能力的智能体系统。

## 1. AI 代理架构基础

- 什么是 AI Agent？与单纯的 LLM 有何区别？
- 经典 Agent 架构剖析 (如 ReAct, Plan-and-Solve)
- 单 Agent 与多 Agent 系统对比

## 2. 工具调用 (Tool Calling/Function Calling)

- 让 LLM 拥有“手和脚”：工具调用的原理
- 自定义工具的定义与参数 Schema 设计
- API 接口与外部系统集成实战

## 3. 记忆系统 (Memory Systems) 设计

- 短期记忆 (Short-term Memory)：对话历史管理
- 长期记忆 (Long-term Memory)：基于向量数据库的经验存储与检索
- 混合记忆架构与上下文窗口管理

## 4. 主流 Agent 开发框架

- LangChain 核心概念与应用开发
- LlamaIndex 数据连接框架与 Agent 构建
- AutoGen：多 Agent 对话系统构建
- 其它新兴框架对比 (如 CrewAI)

## 5. 规划与反思 (Planning & Reflection)

- 任务分解 (Task Decomposition) 策略
- 自我纠错 (Self-Correction) 机制
- 反思与评估循环 (Reflection & Evaluation Loops)

## 6. 企业级 Agent 应用落地挑战

- Agent 系统的可靠性与确定性保障
- 生产环境的监控与评估指标
- 复杂工作流的构建与人在回路 (Human-in-the-Loop) 设计
