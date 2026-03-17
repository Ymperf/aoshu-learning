import type { TopicContent } from '../../types'

export const grade2Contents: Record<string, TopicContent> = {
  'g2-plant': {
    topicId: 'g2-plant',
    explanation: `## 植树问题

植树问题研究**间隔数**和**棵数**之间的关系。

### 三种基本模型

**模型一：两端都种（封闭线段）**
> 棵数 = 间隔数 + 1

**模型二：只种一端**
> 棵数 = 间隔数

**模型三：环形种植（首尾相连）**
> 棵数 = 间隔数

### 类似问题

- 锯木头：锯 n 刀，得到 n+1 段
- 爬楼梯：爬到第 n 层，走了 n-1 段楼梯
- 排队：n 人站一排，有 n-1 个间隔

### 解题口诀

> 两端都种加一棵，两端不种减一棵；
> 环形种植刚刚好，间隔棵数一样多。`,
    examples: [
      {
        problem: `一条路长 100 米，每隔 10 米种一棵树，两端都种，共需种多少棵树？

<svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 路线 -->
  <line x1="50" y1="60" x2="350" y2="60" stroke="#94a3b8" stroke-width="2"/>

  <!-- 树（11棵） -->
  <circle cx="50" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="80" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="110" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="140" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="170" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="200" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="230" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="260" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="290" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="320" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
  <circle cx="350" cy="60" r="8" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>

  <!-- 间隔标注 -->
  <line x1="50" y1="85" x2="80" y2="85" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="50" y1="80" x2="50" y2="90" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="80" y1="80" x2="80" y2="90" stroke="#2563eb" stroke-width="1.5"/>
  <text x="65" y="105" font-size="12" fill="#2563eb" text-anchor="middle">10米</text>

  <!-- 标注 -->
  <text x="50" y="35" font-size="12" fill="#dc2626" text-anchor="middle">1</text>
  <text x="350" y="35" font-size="12" fill="#dc2626" text-anchor="middle">11</text>
  <text x="200" y="20" font-size="14" fill="#374151" text-anchor="middle">100米的路</text>
</svg>`,
        solution: `**分析：** 两端都种，棵数 = 间隔数 + 1

间隔数 = 100 ÷ 10 = 10（个）

棵数 = 10 + 1 = **11 棵**

验证：0m, 10m, 20m, ..., 100m，共 11 个位置 ✓`,
      },
      {
        problem: `一根木料长 8 米，要锯成 2 米一段，需要锯几次？

<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 木料 -->
  <rect x="50" y="30" width="300" height="40" fill="#d97706" stroke="#92400e" stroke-width="2"/>

  <!-- 锯痕（3次） -->
  <line x1="125" y1="25" x2="125" y2="75" stroke="#dc2626" stroke-width="3" stroke-dasharray="5,5"/>
  <line x1="200" y1="25" x2="200" y2="75" stroke="#dc2626" stroke-width="3" stroke-dasharray="5,5"/>
  <line x1="275" y1="25" x2="275" y2="75" stroke="#dc2626" stroke-width="3" stroke-dasharray="5,5"/>

  <!-- 标注 -->
  <text x="87" y="55" font-size="14" fill="#fff" text-anchor="middle">2米</text>
  <text x="162" y="55" font-size="14" fill="#fff" text-anchor="middle">2米</text>
  <text x="237" y="55" font-size="14" fill="#fff" text-anchor="middle">2米</text>
  <text x="312" y="55" font-size="14" fill="#fff" text-anchor="middle">2米</text>

  <text x="125" y="15" font-size="12" fill="#dc2626" text-anchor="middle">第1次</text>
  <text x="200" y="15" font-size="12" fill="#dc2626" text-anchor="middle">第2次</text>
  <text x="275" y="15" font-size="12" fill="#dc2626" text-anchor="middle">第3次</text>
</svg>`,
        solution: `**分析：** 锯成的段数 = 8 ÷ 2 = 4 段

锯的次数 = 段数 - 1 = 4 - 1 = **3 次**

理解：每锯一刀多一段，4段只需锯3刀。`,
      },
    ],
  },

  'g2-sequences': {
    topicId: 'g2-sequences',
    explanation: `## 数列规律

数列是按一定规律排列的一串数。

### 等差数列

相邻两项的**差**相同，这个差叫做**公差**。
> 公式：第 n 项 = 第 1 项 + (n-1) × 公差

### 等比数列

相邻两项的**比**相同，这个比叫做**公比**。
> 公式：第 n 项 = 第 1 项 × 公比^(n-1)

### 其他常见规律

- **平方数列：** 1, 4, 9, 16, 25, ...
- **斐波那契数列：** 1, 1, 2, 3, 5, 8, 13, ...（前两项之和等于后一项）
- **循环数列：** 按固定周期重复`,
    examples: [
      {
        problem: '数列：2, 5, 8, 11, 14, ___，请填写下一项，并说出第 10 项是多少？',
        solution: `**找规律：** 公差为 3，下一项 = 14 + 3 = **17**

**求第 10 项：**
第 n 项 = 2 + (n-1) × 3
第 10 项 = 2 + 9 × 3 = **29**`,
      },
      {
        problem: '数列：1, 1, 2, 3, 5, 8, 13, ___，请填写下一项。',
        solution: `**找规律：** 每一项等于前两项之和（斐波那契数列）

下一项 = 8 + 13 = **21**`,
      },
    ],
  },

  'g2-logic': {
    topicId: 'g2-logic',
    explanation: `## 逻辑推理

逻辑推理是根据已知条件，通过分析推断出未知结论的方法。

### 常用方法

**列表法：** 把所有可能的情况列成表格，逐一排除。

**假设法：** 先假设某种情况成立，看是否与条件矛盾。

**连锁推理：** 由 A 推出 B，由 B 推出 C，形成推理链。

### 解题步骤

1. 读清所有条件，找出最确定的信息
2. 从确定的信息出发，逐步推理
3. 排除矛盾的情况
4. 验证结论是否满足所有条件`,
    examples: [
      {
        problem: '甲、乙、丙三人，职业分别是医生、教师、工程师。已知：甲不是医生，乙不是教师，丙不是工程师，乙不是医生。请判断三人的职业。',
        solution: `**列表推理：**

乙：不是教师，不是医生 → 乙只能是**工程师**

丙：不是工程师（已被乙占），丙是医生或教师

甲：不是医生 → 甲是**教师**

丙只剩**医生**

**答：甲是教师，乙是工程师，丙是医生。**`,
      },
      {
        problem: '小华比小明高，小明比小亮高，小亮比小强高。请从高到低排列四人。',
        solution: `**连锁推理：**

小华 > 小明 > 小亮 > 小强

**答：从高到低：小华、小明、小亮、小强。**`,
      },
    ],
  },

  'g2-multiple': {
    topicId: 'g2-multiple',
    explanation: `## 倍数问题

倍数问题研究两个数量之间的**倍数关系**。

### 核心概念

- **A 是 B 的 n 倍：** A = B × n
- **A 比 B 多 n 倍：** A = B + B×n = B×(n+1)（注意！）
- **A 比 B 少 1/n：** A = B - B/n = B×(n-1)/n

### 常见题型

**已知倍数关系，求某个量：**
> 大数 = 小数 × 倍数

**已知两个量，求倍数关系：**
> 倍数 = 大数 ÷ 小数

### 注意区分

- "A 是 B 的 3 倍" → A = B × 3
- "A 比 B 多 3 倍" → A = B × 3 + B = B × 4`,
    examples: [
      {
        problem: '小明有 6 本书，小红的书是小明的 3 倍，小红有多少本书？',
        solution: `**分析：** 小红的书 = 小明的书 × 3

6 × 3 = **18 本**

**答：小红有 18 本书。**`,
      },
      {
        problem: '爸爸今年 36 岁，是小明年龄的 4 倍，小明今年几岁？',
        solution: `**分析：** 爸爸年龄 = 小明年龄 × 4

小明年龄 = 36 ÷ 4 = **9 岁**

**答：小明今年 9 岁。**`,
      },
    ],
  },

  'g2-odd-even': {
    topicId: 'g2-odd-even',
    explanation: `## 奇偶数

### 基本概念

- **偶数：** 能被 2 整除的整数（0, 2, 4, 6, 8, ...）
- **奇数：** 不能被 2 整除的整数（1, 3, 5, 7, 9, ...）

### 奇偶性运算规律

| 运算 | 结果 |
|------|------|
| 偶 + 偶 | 偶 |
| 奇 + 奇 | 偶 |
| 偶 + 奇 | 奇 |
| 偶 × 任意数 | 偶 |
| 奇 × 奇 | 奇 |

### 应用

判断复杂运算结果的奇偶性，不需要算出具体数值，只需追踪奇偶性的变化。`,
    examples: [
      {
        problem: '1 + 2 + 3 + ... + 100 的结果是奇数还是偶数？',
        solution: `**配对法：**

(1+100), (2+99), ..., (50+51)，每对之和 = 101（奇数），共 50 对

50 个奇数相加，50 为偶数 → 结果为**偶数**

实际结果：101 × 50 = 5050（偶数）✓`,
      },
      {
        problem: '5个奇数相加，结果是奇数还是偶数？',
        solution: `**逐步分析：**

奇+奇=偶，偶+奇=奇，奇+奇=偶，偶+奇=**奇**

规律：n个奇数相加，n为奇数时结果为奇数，n为偶数时结果为偶数。

5个奇数相加 → 结果为**奇数**`,
      },
    ],
  },

  'g2-age': {
    topicId: 'g2-age',
    explanation: `## 年龄问题

年龄问题的核心性质：**两人的年龄差永远不变**。

### 核心公式

设现在甲年龄为 a，乙年龄为 b（a > b），年龄差 d = a - b。

**n年后：** 甲 a+n 岁，乙 b+n 岁，差仍为 d。

**n年前：** 甲 a-n 岁，乙 b-n 岁，差仍为 d。

### 常见题型

**已知现在年龄，求几年后/前的关系：**
利用年龄差不变，列方程求解。

**已知倍数关系，求年龄：**
设未知数，利用差不变列方程。

### 解题技巧

先求年龄差，再根据倍数关系列方程。`,
    examples: [
      {
        problem: '父亲今年 40 岁，儿子今年 10 岁，几年后父亲的年龄是儿子的 3 倍？',
        solution: `**年龄差：** 40 - 10 = 30 岁（永远不变）

设 n 年后父亲是儿子的 3 倍：
(40 + n) = 3 × (10 + n)
40 + n = 30 + 3n
10 = 2n
n = **5 年**

验证：5年后父亲45岁，儿子15岁，45 = 3×15 ✓`,
      },
      {
        problem: '小明今年 8 岁，妈妈今年 34 岁，几年前妈妈的年龄是小明的 5 倍？',
        solution: `**年龄差：** 34 - 8 = 26 岁

设 n 年前妈妈是小明的 5 倍：
(34 - n) = 5 × (8 - n)
34 - n = 40 - 5n
4n = 6
n = **1.5 年（即1年半前）**

验证：1.5年前妈妈32.5岁，小明6.5岁，32.5 = 5×6.5 ✓`,
      },
    ],
  },

  'g2-geometry': {
    topicId: 'g2-geometry',
    explanation: `## 图形拼组

将基本图形拼合或分割，探索图形变化规律。

### 基本方法

**拼合：** 将多个小图形拼成大图形，面积相加。

**分割：** 将大图形分成小图形，分别计算再相加。

**等积变形：** 改变图形形状但保持面积不变。

### 常见变形

- 两个完全相同的三角形可以拼成一个平行四边形
- 平行四边形可以变形为等面积的长方形
- 梯形可以分割为三角形和长方形

### 解题技巧

遇到不规则图形，先找对称轴或辅助线，将其分割为熟悉的图形。`,
    examples: [
      {
        problem: `用4个边长为1cm的小正方形，能拼出哪些不同形状的图形？各自的周长是多少？

<svg width="400" height="280" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
  <!-- 1×4 长条形 -->
  <g transform="translate(50, 20)">
    <rect x="0" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="30" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="60" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="90" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="60" y="50" font-size="12" fill="#374151" text-anchor="middle">1×4 长条 (周长10)</text>
  </g>

  <!-- 2×2 正方形 -->
  <g transform="translate(220, 20)">
    <rect x="0" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="30" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="0" y="30" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="30" y="30" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="30" y="75" font-size="12" fill="#374151" text-anchor="middle">2×2 正方形 (周长8)</text>
  </g>

  <!-- L形 -->
  <g transform="translate(50, 120)">
    <rect x="0" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="30" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="60" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="0" y="30" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="45" y="75" font-size="12" fill="#374151" text-anchor="middle">L形 (周长10)</text>
  </g>

  <!-- T形 -->
  <g transform="translate(220, 120)">
    <rect x="0" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="30" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="60" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="30" y="30" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="45" y="75" font-size="12" fill="#374151" text-anchor="middle">T形 (周长10)</text>
  </g>

  <!-- Z形 -->
  <g transform="translate(50, 220)">
    <rect x="0" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="30" y="0" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="30" y="30" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="60" y="30" width="30" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="45" y="75" font-size="12" fill="#374151" text-anchor="middle">Z形 (周长10)</text>
  </g>
</svg>`,
        solution: `**常见拼法：**

1×4 长条形：周长 = 2×(4+1) = **10 cm**

2×2 正方形：周长 = 4×2 = **8 cm**

L形（3+1）：周长 = **10 cm**

T形：周长 = **10 cm**

Z形：周长 = **10 cm**

**规律：** 面积相同（4cm²），但周长不同；正方形周长最小。`,
      },
      {
        problem: `一个平行四边形，底边长 6cm，高 4cm，将它剪拼成一个长方形，长方形的长和宽各是多少？

<svg width="400" height="150" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- 平行四边形 -->
  <g transform="translate(50, 30)">
    <polygon points="20,0 120,0 100,60 0,60" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <line x1="20" y1="0" x2="20" y2="60" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="60" y="35" font-size="14" fill="#92400e" text-anchor="middle">底6cm</text>
    <text x="10" y="35" font-size="12" fill="#dc2626">高4cm</text>
    <text x="60" y="85" font-size="12" fill="#374151" text-anchor="middle">平行四边形</text>
  </g>

  <!-- 箭头 -->
  <g transform="translate(180, 60)">
    <line x1="0" y1="0" x2="30" y2="0" stroke="#374151" stroke-width="2"/>
    <polygon points="30,0 25,5 25,-5" fill="#374151"/>
  </g>

  <!-- 长方形 -->
  <g transform="translate(240, 30)">
    <rect x="0" y="0" width="100" height="60" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="50" y="35" font-size="14" fill="#92400e" text-anchor="middle">长6cm</text>
    <text x="-10" y="35" font-size="12" fill="#92400e">宽4cm</text>
    <text x="50" y="85" font-size="12" fill="#374151" text-anchor="middle">长方形</text>
  </g>
</svg>`,
        solution: `**等积变形：**

平行四边形面积 = 底 × 高 = 6 × 4 = 24 cm²

拼成长方形后面积不变，仍为 24 cm²

长方形的长 = 底边 = **6 cm**
长方形的宽 = 高 = **4 cm**

验证：6 × 4 = 24 cm² ✓`,
      },
    ],
  },

  'g2-number-theory': {
    topicId: 'g2-number-theory',
    explanation: `## 数的整除

掌握常用的整除特征，快速判断一个数能否被整除。

### 整除特征

| 除数 | 判断方法 | 例子 |
|------|----------|------|
| 2 | 末位是 0,2,4,6,8 | 124 ✓ |
| 3 | 各位数字之和能被3整除 | 123（1+2+3=6）✓ |
| 4 | 末两位能被4整除 | 1236（36÷4=9）✓ |
| 5 | 末位是 0 或 5 | 135 ✓ |
| 6 | 同时满足2和3的特征 | 126 ✓ |
| 9 | 各位数字之和能被9整除 | 189（1+8+9=18）✓ |

### 应用

快速判断整除关系，不需要做除法运算。`,
    examples: [
      {
        problem: '判断 2346 能被哪些数整除（2、3、4、5、6、9）？',
        solution: `**逐一判断：**

被2整除：末位6，是偶数 ✓

被3整除：2+3+4+6=15，15÷3=5 ✓

被4整除：末两位46，46÷4=11余2 ✗

被5整除：末位6，不是0或5 ✗

被6整除：同时满足2和3 ✓

被9整除：各位之和15，15÷9余6 ✗

**答：2346 能被 2、3、6 整除。**`,
      },
      {
        problem: '一个三位数 □75，能被 3 整除，□可以填哪些数字？',
        solution: `**分析：** 各位数字之和能被3整除

□ + 7 + 5 = □ + 12

要使 □+12 能被3整除，□+12 ≡ 0 (mod 3)
因为 12 已能被3整除，所以 □ 也要能被3整除。

□ ∈ {0,1,...,9} 中能被3整除的：0, 3, 6, 9

**答：□ 可以填 0、3、6、9。**`,
      },
    ],
  },

  'g2-encrypt': {
    topicId: 'g2-encrypt',
    explanation: `## 数字谜

根据算式中的条件，推算出被遮住或未知的数字。

### 解题方法

**逆运算法：** 利用加减乘除的互逆关系，从已知推未知。

**进位分析法：** 分析竖式中的进位情况，缩小可能范围。

**枚举验证法：** 列出所有可能的数字，逐一验证。

### 解题步骤

1. 从最确定的位置入手（如个位）
2. 分析进位情况
3. 逐位推算
4. 验证完整算式`,
    examples: [
      {
        problem: '在下面的加法算式中，每个☆代表一个数字，求☆的值：☆3 + 4☆ = 85',
        solution: `**分析个位：** 3 + ☆ = 5 或 3 + ☆ = 15（进位）

若 3 + ☆ = 5，则 ☆ = 2，个位无进位
十位：☆ + 4 = 8，☆ = 4

验证：43 + 42 = 85 ✓

**答：第一个☆=4，第二个☆=2，即 43 + 42 = 85。**`,
      },
      {
        problem: 'A、B各代表一个数字：AB × 9 = BBB，求A和B。',
        solution: `**分析：** BBB = B×111 = B×3×37

AB × 9 = BBB，BBB 是三位数，所以 AB 在 12~99 之间。

BBB ÷ 9 = AB，BBB 必须能被9整除。
BBB = 111B，1+1+1+B = 3+B 能被9整除 → B = 6

BBB = 666，AB = 666 ÷ 9 = 74

验证：74 × 9 = 666 ✓，A=7，B=6 ✓

**答：A=7，B=6。**`,
      },
    ],
  },

  'g2-weight': {
    topicId: 'g2-weight',
    explanation: `## 称重问题

用最少次数的称量找出不同重量的物体。

### 经典问题：找假币

n 枚硬币中有 1 枚假币（比真币轻或重），用天平最少称几次能找出来？

**结论：** 用天平称 k 次，最多能从 3^k 枚硬币中找出假币。

### 砝码问题

用最少的砝码称出 1~n 克的所有重量。

**二进制方案（只能放一侧）：** 1, 2, 4, 8, 16, ... 克
**三进制方案（可放两侧）：** 1, 3, 9, 27, ... 克

### 解题技巧

- 每次称量将硬币分成尽量相等的三组
- 根据天平结果确定假币在哪组`,
    examples: [
      {
        problem: '有9枚硬币，其中1枚是假币（比真币轻），用天平最少称几次能找出假币？',
        solution: `**三分法：**

第一次：将9枚分成3组，每组3枚，称其中两组。
- 若平衡：假币在第三组
- 若不平衡：假币在较轻的那组

第二次：从确定的3枚中取2枚称量。
- 若平衡：假币是第3枚
- 若不平衡：假币是较轻的那枚

**最少称 2 次**即可找出假币。`,
      },
      {
        problem: '有4个砝码，重量分别为1g、3g、9g、27g，可以放在天平两侧，能称出哪些重量？',
        solution: `**三进制原理：**

这4个砝码可以称出 1 到 40 克的所有整数重量。

例如：
- 2g = 3 - 1（3g放左，1g和物品放右）
- 5g = 9 - 3 - 1
- 10g = 9 + 1
- 40g = 27 + 9 + 3 + 1

**规律：** 1, 3, 9, 27 是3的幂次，可以表示所有1到(3^n-1)/2的整数。`,
      },
    ],
  },

  'g2-direction': {
    topicId: 'g2-direction',
    explanation: `## 方向与位置

根据方向描述，判断物体的相对位置关系。

### 八个方向

东、南、西、北（四个基本方向）
东南、东北、西南、西北（四个斜方向）

### 相对方向

- 东 ↔ 西（互为相反方向）
- 南 ↔ 北（互为相反方向）
- 东南 ↔ 西北
- 东北 ↔ 西南

### 旋转方向

- 顺时针旋转90°：北→东→南→西→北
- 逆时针旋转90°：北→西→南→东→北

### 解题技巧

画出方向示意图，标注各物体的位置，再根据图形回答问题。`,
    examples: [
      {
        problem: '小明面朝北方，向右转后面朝哪个方向？再向后转面朝哪个方向？',
        solution: `**分析：**

面朝北，向右转（顺时针90°）→ 面朝**东**

面朝东，向后转（180°）→ 面朝**西**`,
      },
      {
        problem: '学校在小明家的东边，超市在学校的南边，超市在小明家的什么方向？',
        solution: `**画图分析：**

小明家 → 向东 → 学校
学校 → 向南 → 超市

所以超市在小明家的**东南**方向。`,
      },
    ],
  },

  'g2-money': {
    topicId: 'g2-money',
    explanation: `## 购物问题

解决找零、凑整等购物场景中的计算问题。

### 基本概念

- **总价** = 单价 × 数量
- **找零** = 付款金额 - 总价
- **折扣**：打八折 = 原价 × 0.8

### 常见题型

**凑整问题：** 用最少的钱币凑出某个金额。

**找零问题：** 计算应找回多少钱。

**比较问题：** 比较不同购买方案的花费。

### 解题技巧

- 先算总价，再算找零
- 注意单位统一（元、角、分）
- 1元 = 10角 = 100分`,
    examples: [
      {
        problem: '小明买了3本练习册，每本2.5元，付了10元，应找回多少钱？',
        solution: `**总价：** 2.5 × 3 = 7.5 元

**找零：** 10 - 7.5 = **2.5 元**

**答：应找回 2.5 元。**`,
      },
      {
        problem: '一件衣服原价 200 元，打八折出售，实际售价是多少元？',
        solution: `**打八折：** 原价 × 0.8

200 × 0.8 = **160 元**

**答：实际售价是 160 元。**`,
      },
    ],
  },

  'g2-overlap': {
    topicId: 'g2-overlap',
    explanation: `## 容斥初步

用容斥原理解决两个集合的重叠计数问题。

### 核心公式

> |A ∪ B| = |A| + |B| - |A ∩ B|

即：两个集合的并集元素数 = 各自元素数之和 - 交集元素数

### 韦恩图理解

用两个相交的圆表示两个集合：
- 左圆独有部分：只属于A
- 右圆独有部分：只属于B
- 中间交叉部分：既属于A又属于B

### 变形公式

> 只属于A = |A| - |A ∩ B|
> 只属于B = |B| - |A ∩ B|
> 两者都不属于 = 总数 - |A ∪ B|`,
    examples: [
      {
        problem: '全班 40 人，喜欢语文的 25 人，喜欢数学的 20 人，两科都喜欢的 10 人，两科都不喜欢的有多少人？',
        solution: `**容斥公式：**

喜欢语文或数学 = 25 + 20 - 10 = 35 人

两科都不喜欢 = 40 - 35 = **5 人**`,
      },
      {
        problem: '1到100中，能被3整除或能被5整除的数有多少个？',
        solution: `**分析：**

能被3整除：⌊100÷3⌋ = 33 个

能被5整除：⌊100÷5⌋ = 20 个

能被15整除（既被3又被5整除）：⌊100÷15⌋ = 6 个

由容斥原理：33 + 20 - 6 = **47 个**`,
      },
    ],
  },
}
