import type { TopicContent } from '../../types'

export const grade3Contents: Record<string, TopicContent> = {
  'g3-chickens-rabbits': {
    topicId: 'g3-chickens-rabbits',
    explanation: `## 鸡兔同笼

**问题模型：** 笼子里有鸡和兔，已知头的总数和脚的总数，求鸡和兔各有多少只。

### 方法一：假设法

假设笼子里全是鸡，则脚数 = 头数 × 2。
实际脚数比假设多出的部分，是因为有兔（兔比鸡多 2 只脚）。

> 兔的数量 = (实际脚数 - 头数 × 2) ÷ 2
> 鸡的数量 = 头数 - 兔的数量

### 方法二：方程法

设鸡有 x 只，兔有 y 只：
- 头数方程：x + y = 头数
- 脚数方程：2x + 4y = 脚数

### 解题口诀

> 假设全是鸡，脚数会减少；
> 多出来的脚，两两换成兔。`,
    examples: [
      {
        problem: `笼中有鸡和兔共 10 只，数脚共 28 只，鸡和兔各有几只？

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="40" width="300" height="120" fill="none" stroke="#94a3b8" stroke-width="2" rx="5"/>

  <g transform="translate(70, 80)">
    <circle cx="0" cy="0" r="12" fill="#fbbf24"/>
    <circle cx="30" cy="0" r="12" fill="#fbbf24"/>
    <circle cx="60" cy="0" r="12" fill="#fbbf24"/>
    <circle cx="0" cy="40" r="12" fill="#fbbf24"/>
    <circle cx="30" cy="40" r="12" fill="#fbbf24"/>
    <circle cx="60" cy="40" r="12" fill="#fbbf24"/>
    <text x="30" y="60" font-size="12" fill="#92400e" text-anchor="middle">鸡(6只)</text>
  </g>

  <g transform="translate(220, 80)">
    <ellipse cx="0" cy="0" rx="15" ry="12" fill="#f87171"/>
    <ellipse cx="40" cy="0" rx="15" ry="12" fill="#f87171"/>
    <ellipse cx="0" cy="40" rx="15" ry="12" fill="#f87171"/>
    <ellipse cx="40" cy="40" rx="15" ry="12" fill="#f87171"/>
    <text x="20" y="60" font-size="12" fill="#7f1d1d" text-anchor="middle">兔(4只)</text>
  </g>

  <text x="200" y="25" font-size="14" fill="#374151" text-anchor="middle">共10只，28只脚</text>
  <text x="200" y="180" font-size="12" fill="#2563eb" text-anchor="middle">鸡2只脚 × 6 = 12只脚，兔4只脚 × 4 = 16只脚</text>
</svg>`,
        solution: `**假设法：**

假设全是鸡：脚数 = 10 × 2 = 20 只
实际多：28 - 20 = 8 只
兔有：8 ÷ 2 = 4 只
鸡有：10 - 4 = 6 只

**验证：** 6×2 + 4×4 = 12+16 = 28 ✓

**答：鸡 6 只，兔 4 只。**`,
      },
      {
        problem: '停车场有三轮车和四轮车共 20 辆，轮子共 70 个，各有几辆？',
        solution: `**方程法：**

设三轮车 x 辆：3x + 4(20-x) = 70
80 - x = 70，x = 10

**答：三轮车 10 辆，四轮车 10 辆。**`,
      },
    ],
  },

  'g3-sequences': {
    topicId: 'g3-sequences',
    explanation: `## 等差数列

等差数列是相邻两项之差相同的数列，这个差叫做**公差**（d）。

### 基本公式

**第 n 项：** aₙ = a₁ + (n-1) × d

**求和：** Sₙ = n × (a₁ + aₙ) ÷ 2

**项数：** n = (aₙ - a₁) ÷ d + 1

### 常用结论

- 1+2+3+...+n = n(n+1)/2
- 1+3+5+...+(2n-1) = n²（前n个奇数之和）

### 解题技巧

首尾配对法：把数列首尾两两配对，每对之和相等。`,
    examples: [
      {
        problem: '计算 1 + 2 + 3 + ... + 100 的值。',
        solution: `**首尾配对（高斯求和）：**

(1+100)+(2+99)+...+(50+51) = 101 × 50 = **5050**

公式：S = 100×(1+100)÷2 = 5050 ✓`,
      },
      {
        problem: '等差数列 3, 7, 11, 15, ... 的第 20 项和前 20 项之和各是多少？',
        solution: `**已知：** a₁=3，d=4，n=20

第20项：a₂₀ = 3 + 19×4 = **79**

前20项和：S₂₀ = 20×(3+79)÷2 = **820**`,
      },
    ],
  },

  'g3-counting': {
    topicId: 'g3-counting',
    explanation: `## 排列组合入门

### 加法原理

做一件事有多种互斥方案，各方案的方法数**相加**。

### 乘法原理

做一件事需要多个独立步骤，各步骤的方法数**相乘**。

### 排列与组合的区别

- **排列：** 顺序有关（AB和BA是不同的）
- **组合：** 顺序无关（AB和BA是相同的）

### 列举法

当数量较小时，直接列出所有可能情况再计数。`,
    examples: [
      {
        problem: '用 1、2、3 三个数字，能组成多少个不重复数字的两位数？',
        solution: `**乘法原理：**

十位：3种选择（1、2、3）
个位：2种选择（除十位外）

总数 = 3 × 2 = **6 个**

列举：12,13,21,23,31,32 ✓`,
      },
      {
        problem: '从 5 名同学中选 2 名参加比赛，有多少种选法？',
        solution: `**组合（顺序无关）：**

设5人为A、B、C、D、E，列举：
AB,AC,AD,AE,BC,BD,BE,CD,CE,DE

共 **10 种**

公式：C(5,2) = 5×4÷2 = 10`,
      },
    ],
  },

  'g3-geometry': {
    topicId: 'g3-geometry',
    explanation: `## 周长与面积

### 基本公式

| 图形 | 周长 | 面积 |
|------|------|------|
| 正方形 | 4a | a² |
| 长方形 | 2(a+b) | a×b |
| 三角形 | a+b+c | 底×高÷2 |
| 平行四边形 | 2(a+b) | 底×高 |

### 割补法

将不规则图形**分割**成规则图形，或将缺口**补全**再减去。

### 注意事项

- 周长和面积单位不同
- 周长变化不代表面积变化`,
    examples: [
      {
        problem: `L形图案：大长方形长8cm、宽6cm，挖去右上角长4cm、宽3cm的小长方形，求L形面积。

<svg width="350" height="250" viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
  <path d="M 50 50 L 210 50 L 210 110 L 130 110 L 130 170 L 50 170 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>

  <rect x="130" y="50" width="80" height="60" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,5"/>

  <text x="130" y="40" font-size="14" fill="#374151" text-anchor="middle">8cm</text>
  <line x1="50" y1="45" x2="210" y2="45" stroke="#374151" stroke-width="1" marker-end="url(#arrowhead)"/>

  <text x="30" y="110" font-size="14" fill="#374151" text-anchor="middle">6cm</text>
  <line x1="45" y1="50" x2="45" y2="170" stroke="#374151" stroke-width="1"/>

  <text x="170" y="80" font-size="12" fill="#dc2626" text-anchor="middle">4cm×3cm</text>
  <text x="170" y="95" font-size="12" fill="#dc2626" text-anchor="middle">(挖去)</text>

  <text x="90" y="140" font-size="14" fill="#2563eb" text-anchor="middle" font-weight="bold">L形</text>

  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#374151"/>
    </marker>
  </defs>
</svg>`,
        solution: `**大减小：**

大长方形面积 = 8×6 = 48 cm²
挖去部分面积 = 4×3 = 12 cm²

L形面积 = 48 - 12 = **36 cm²**`,
      },
      {
        problem: '一个正方形的周长是 24cm，它的面积是多少？',
        solution: `边长 = 24 ÷ 4 = 6 cm

面积 = 6 × 6 = **36 cm²**`,
      },
    ],
  },

  'g3-logic': {
    topicId: 'g3-logic',
    explanation: `## 真假判断

**题型特征：** 给出若干条件，其中只有一个为真（或只有一个为假），推断正确结论。

### 解题方法：假设法

1. 假设某个条件为真
2. 检验其他条件是否都为假
3. 如果满足"只有一个为真"，则假设成立
4. 否则换另一个条件假设为真`,
    examples: [
      {
        problem: '甲说"奖品在A盒"；乙说"奖品不在B盒"；丙说"奖品在B盒"。只有一人说对，奖品在哪？',
        solution: `**假设甲说对（在A盒）：**
乙说"不在B盒"→ 真（在A，确实不在B）
此时甲乙都对，矛盾 ✗

**假设乙说对（不在B盒）：**
丙说"在B盒"→ 假 ✓
甲说"在A盒"→ 若在C盒则甲也假 ✓

奖品在C盒：甲假、乙真、丙假，只有一人说对 ✓

**答：奖品在C盒。**`,
      },
      {
        problem: '四人中有一人做了好事。甲说"是乙"，乙说"是丁"，丙说"不是我"，丁说"乙说错了"。只有一人说假话，是谁做了好事？',
        solution: `**分析：** 乙说"是丁"，丁说"不是丁"，两人矛盾，必有一假。

只有一人说假话，这个假话就在乙和丁之间。

所以甲和丙说的都是真话：
- 甲说"是乙" → 真

**答：是乙做了好事。**`,
      },
    ],
  },

  'g3-travel': {
    topicId: 'g3-travel',
    explanation: `## 行程问题初步

**核心公式：** 路程 = 速度 × 时间

### 相遇问题

两人相向而行，相遇时两人路程之和 = 总路程。

> 相遇时间 = 总路程 ÷ (速度甲 + 速度乙)

### 追及问题

同向而行，追及时追者比被追者多走的路程 = 初始距离差。

> 追及时间 = 路程差 ÷ (速度快 - 速度慢)

### 解题关键

画线段图，标出各人的位置和方向，帮助理解题意。`,
    examples: [
      {
        problem: `甲乙两人从相距 60 千米的两地相向而行，甲速 20 千米/时，乙速 10 千米/时，几小时后相遇？

<svg width="400" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <line x1="50" y1="90" x2="350" y2="90" stroke="#94a3b8" stroke-width="3"/>

  <circle cx="50" cy="90" r="8" fill="#2563eb"/>
  <text x="50" y="75" font-size="14" fill="#2563eb" text-anchor="middle" font-weight="bold">A地</text>

  <circle cx="350" cy="90" r="8" fill="#dc2626"/>
  <text x="350" y="75" font-size="14" fill="#dc2626" text-anchor="middle" font-weight="bold">B地</text>

  <text x="200" y="110" font-size="14" fill="#374151" text-anchor="middle">60千米</text>

  <path d="M 70 90 L 180 90" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <text x="125" y="80" font-size="12" fill="#2563eb" text-anchor="middle">甲 20km/h</text>

  <path d="M 330 90 L 220 90" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
  <text x="275" y="80" font-size="12" fill="#dc2626" text-anchor="middle">乙 10km/h</text>

  <circle cx="200" cy="90" r="6" fill="#fbbf24"/>
  <text x="200" y="130" font-size="12" fill="#fbbf24" text-anchor="middle">相遇点</text>

  <defs>
    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#2563eb"/>
    </marker>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#dc2626"/>
    </marker>
  </defs>

  <text x="200" y="160" font-size="12" fill="#374151" text-anchor="middle">相向而行，速度之和 = 30km/h</text>
</svg>`,
        solution: `**相遇时间 = 总路程 ÷ 速度之和**

= 60 ÷ (20+10) = 60 ÷ 30 = **2 小时**

验证：甲走40千米，乙走20千米，40+20=60 ✓`,
      },
      {
        problem: '小明步行速度 4 千米/时，小红骑车速度 12 千米/时，小红比小明晚出发 1 小时，小红几小时后追上小明？',
        solution: `**路程差 = 小明先走的路程 = 4×1 = 4 千米**

追及时间 = 4 ÷ (12-4) = 4 ÷ 8 = **0.5 小时（30分钟）**`,
      },
    ],
  },

  'g3-number-theory': {
    topicId: 'g3-number-theory',
    explanation: `## 因数与倍数

### 基本概念

- **因数：** 若 a÷b=c（整除），则 b 是 a 的因数，a 是 b 的倍数。
- **公因数：** 两个数共同的因数。
- **最大公因数（GCD）：** 公因数中最大的。
- **公倍数：** 两个数共同的倍数。
- **最小公倍数（LCM）：** 公倍数中最小的。

### 求最大公因数

**短除法：** 同时除以公因数，直到互质为止。

### 求最小公倍数

> LCM(a,b) = a × b ÷ GCD(a,b)

### 重要关系

> GCD(a,b) × LCM(a,b) = a × b`,
    examples: [
      {
        problem: '求 12 和 18 的最大公因数和最小公倍数。',
        solution: `**短除法：**

12 = 2² × 3
18 = 2 × 3²

GCD = 2 × 3 = **6**

LCM = 12 × 18 ÷ 6 = **36**

验证：6 × 36 = 216 = 12 × 18 ✓`,
      },
      {
        problem: '两根绳子，一根长 24 米，一根长 36 米，要剪成等长的小段且没有剩余，每段最长多少米？',
        solution: `**分析：** 求 24 和 36 的最大公因数。

24 = 2³ × 3，36 = 2² × 3²

GCD(24,36) = 2² × 3 = **12 米**

**答：每段最长 12 米。**`,
      },
    ],
  },

  'g3-age': {
    topicId: 'g3-age',
    explanation: `## 年龄与倍数

综合运用**年龄差不变**和**倍数关系**解题。

### 核心性质

两人年龄差永远不变：差 = 大年龄 - 小年龄

### 解题步骤

1. 求出两人的年龄差
2. 设未知年份为 n 年后（或前）
3. 根据倍数关系列方程
4. 解方程，验证答案

### 注意事项

- "n年后"：两人年龄都加 n
- "n年前"：两人年龄都减 n
- 年龄必须为正数`,
    examples: [
      {
        problem: '父亲今年 40 岁，儿子今年 10 岁，几年后父亲年龄是儿子的 3 倍？',
        solution: `**年龄差：** 40-10 = 30 岁

设 n 年后：(40+n) = 3×(10+n)
40+n = 30+3n → 2n = 10 → n = **5 年**

验证：45 = 3×15 ✓`,
      },
      {
        problem: '今年爷爷 60 岁，孙子 6 岁，几年前爷爷年龄是孙子的 19 倍？',
        solution: `**年龄差：** 60-6 = 54 岁

设 n 年前：(60-n) = 19×(6-n)
60-n = 114-19n → 18n = 54 → n = **3 年**

验证：57 = 19×3 ✓`,
      },
    ],
  },

  'g3-weight': {
    topicId: 'g3-weight',
    explanation: `## 砝码称重

用有限砝码称出各种重量，找出最优方案。

### 二进制方案（砝码只放一侧）

用 1, 2, 4, 8, 16, ... 克的砝码，可以称出所有整数克重量。

原理：任何正整数都可以用二进制表示。

### 三进制方案（砝码可放两侧）

用 1, 3, 9, 27, ... 克的砝码，可以称出更大范围的重量。

原理：任何正整数都可以用 {-1, 0, 1} 系数的三进制表示。

### 最少砝码问题

要称出 1~n 克的所有重量，最少需要几个砝码？
- 只放一侧：需要 ⌈log₂(n+1)⌉ 个
- 可放两侧：需要 ⌈log₃(n+1)⌉ 个（约少1/3）`,
    examples: [
      {
        problem: '有 1g、2g、4g、8g 四个砝码（只放一侧），能称出哪些重量？最多能称多重？',
        solution: `**二进制原理：**

每个砝码选用（1）或不用（0），共 2⁴=16 种组合。

可称出：1到15克的所有整数重量，以及0（不放砝码）。

最重：1+2+4+8 = **15 克**

例：称 6 克 = 4+2，称 11 克 = 8+2+1`,
      },
      {
        problem: '只有 1g、3g、9g 三个砝码，可以放在天平两侧，能称出 5 克吗？怎么称？',
        solution: `**分析：** 5 = 9 - 3 - 1

将 3g 和 1g 放在物品同侧，9g 放另一侧：

9 = 物品 + 3 + 1
物品 = 9 - 3 - 1 = **5 克** ✓

**操作：** 左盘放物品+3g+1g，右盘放9g，天平平衡时物品为5克。`,
      },
    ],
  },

  'g3-digit': {
    topicId: 'g3-digit',
    explanation: `## 数字与数位

研究各位数字的性质，解决数字排列和数位计算问题。

### 数位知识

- 个位、十位、百位、千位……
- n位数的范围：10^(n-1) 到 10^n - 1
- 各位数字之和称为**数字和**

### 数字排列问题

用给定的数字组成满足条件的数，关键是分析各位的约束。

### 回文数

从左到右和从右到左读都一样的数，如 121、1331。

### 解题技巧

- 从最高位开始分析约束条件
- 注意首位不能为 0
- 利用整除特征快速筛选`,
    examples: [
      {
        problem: '用 1、2、3、4 四个数字组成四位数，要求千位比百位大，百位比十位大，十位比个位大，共有多少个这样的四位数？',
        solution: `**分析：** 四个数字从大到小排列，只有一种排法：4321。

但题目是从 {1,2,3,4} 中选4个排列，且要求递减。

从4个数字中选4个的递减排列只有 **1 种**：4321。

若允许重复选数字，则需另行分析。`,
      },
      {
        problem: '一个三位回文数，各位数字之和为 15，这个三位回文数是多少？',
        solution: `**回文数形式：** aba（百位=个位=a，十位=b）

数字和：a + b + a = 2a + b = 15

a 是 1-9 的数字，b 是 0-9 的数字：

a=3：b=9 → 393 ✓
a=4：b=7 → 474 ✓
a=5：b=5 → 555 ✓
a=6：b=3 → 636 ✓
a=7：b=1 → 717 ✓

**共 5 个：393、474、555、636、717。**`,
      },
    ],
  },

  'g3-geometry2': {
    topicId: 'g3-geometry2',
    explanation: `## 图形计数

系统计数图形中三角形、正方形等图形的个数。

### 计数方法

**分类计数：** 按图形的大小（由几个基本图形组成）分类，逐类计数再相加。

**标记法：** 给每个基本图形编号，用编号组合表示每个图形。

### 常见规律

**n个小三角形排成一排（朝上）：**
- 朝上的三角形：1+2+...+n = n(n+1)/2 个
- 朝下的三角形：0+1+...+(n-1) = n(n-1)/2 个
- 总计：n² 个（n行等边三角形网格）

**n×n 方格中的正方形总数：**
= 1² + 2² + 3² + ... + n² = n(n+1)(2n+1)/6`,
    examples: [
      {
        problem: `一个由 4 行小三角形组成的大三角形（底边有4个小三角形），共有多少个三角形？

<svg width="350" height="280" viewBox="0 0 350 280" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(175, 40)">
    <polygon points="0,0 -20,35 20,35" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="-20,35 -40,70 0,70" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="-20,35 0,70 20,35" fill="#fef3c7" stroke="#2563eb" stroke-width="2"/>
    <polygon points="20,35 0,70 40,70" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="-40,70 -60,105 -20,105" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="-40,70 -20,105 0,70" fill="#fef3c7" stroke="#2563eb" stroke-width="2"/>
    <polygon points="0,70 -20,105 20,105" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="0,70 20,105 40,70" fill="#fef3c7" stroke="#2563eb" stroke-width="2"/>
    <polygon points="40,70 20,105 60,105" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="-60,105 -80,140 -40,140" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="-60,105 -40,140 -20,105" fill="#fef3c7" stroke="#2563eb" stroke-width="2"/>
    <polygon points="-20,105 -40,140 0,140" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="-20,105 0,140 20,105" fill="#fef3c7" stroke="#2563eb" stroke-width="2"/>
    <polygon points="20,105 0,140 40,140" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <polygon points="20,105 40,140 60,105" fill="#fef3c7" stroke="#2563eb" stroke-width="2"/>
    <polygon points="60,105 40,140 80,140" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  </g>
  <text x="175" y="200" font-size="14" fill="#374151" text-anchor="middle">朝上三角形（蓝色）+ 朝下三角形（黄色）</text>
  <text x="175" y="220" font-size="12" fill="#2563eb" text-anchor="middle">数一数：不同大小的三角形都要计入</text>
</svg>`,
        solution: `**分类计数：**

朝上的三角形（边长1,2,3,4）：
- 边长1：10个
- 边长2：6个
- 边长3：3个
- 边长4：1个

朝下的三角形（边长1,2,3）：
- 边长1：6个
- 边长2：3个
- 边长3：1个（若存在）

总计：10+6+3+1+6+3 = **29 个**（标准4行等边三角形）`,
      },
      {
        problem: '一个 3×3 的方格（9个小正方形），共有多少个正方形？',
        solution: `**分类计数：**

1×1 的正方形：9 个
2×2 的正方形：4 个
3×3 的正方形：1 个

总计：9 + 4 + 1 = **14 个**

公式：1²+2²+3² = 1+4+9 = 14 ✓`,
      },
    ],
  },

  'g3-match': {
    topicId: 'g3-match',
    explanation: `## 火柴棒方程

移动或添加火柴棒，使等式成立。

### 解题策略

**移动火柴棒：** 从一处取走，放到另一处，总数不变。

**添加/减少火柴棒：** 改变总数，使等式成立。

### 数字的火柴棒数

| 数字 | 火柴棒数 |
|------|----------|
| 0 | 6 |
| 1 | 2 |
| 2 | 5 |
| 3 | 5 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 3 |
| 8 | 7 |
| 9 | 6 |

### 解题技巧

先列出移动后可能变成的数字，再验证等式是否成立。`,
    examples: [
      {
        problem: '用火柴棒摆出的等式：6 + 4 = 4，移动一根火柴棒使等式成立。',
        solution: `**分析：** 6 + 4 = 4 不成立，需要移动一根。

将"6"中的一根移到"="变成"≠"？不行。

将"6"变成"0"（移走一根）：0 + 4 = 4 ✓

**答：将 6 变成 0，等式变为 0 + 4 = 4。**`,
      },
      {
        problem: '火柴棒等式：5 + 3 = 6，移动一根火柴棒使等式成立。',
        solution: `**尝试：**

将"5"变成"3"（移一根）：3 + 3 = 6 ✓

或将"6"变成"8"（加一根，但题目是移动）

**答：将 5 变成 3，等式变为 3 + 3 = 6。**`,
      },
    ],
  },

  'g3-encrypt': {
    topicId: 'g3-encrypt',
    explanation: `## 算式谜题

根据竖式运算中的条件，推算出未知数字。

### 解题方法

**从个位开始：** 竖式计算从个位开始，逐位分析。

**进位分析：** 判断是否有进位，缩小可能范围。

**枚举验证：** 列出所有可能，逐一验证。

### 解题步骤

1. 从个位入手，找出可能的数字
2. 分析进位情况
3. 逐位推算十位、百位……
4. 验证完整算式`,
    examples: [
      {
        problem: '竖式加法：AB + BA = 121，A和B各是什么数字？',
        solution: `**分析：**

AB + BA = (10A+B) + (10B+A) = 11A + 11B = 11(A+B) = 121

A + B = 121 ÷ 11 = 11

A和B都是一位数（0-9），且A+B=11：
可能：(2,9),(3,8),(4,7),(5,6),(6,5),(7,4),(8,3),(9,2)

AB是两位数，A≠0；BA是两位数，B≠0。

所有满足条件的解：A∈{2,3,4,5,6,7,8,9}，B=11-A

**例如：** 29+92=121 ✓，38+83=121 ✓`,
      },
      {
        problem: '竖式乘法：□□ × 3 = □□□，积是三位数，被乘数是两位数，求所有可能的被乘数。',
        solution: `**分析：** 两位数 × 3 = 三位数

两位数范围：34 到 99（34×3=102，99×3=297）

所有满足条件的两位数：34, 35, 36, ..., 99

共 99 - 34 + 1 = **66 个**`,
      },
    ],
  },
}
