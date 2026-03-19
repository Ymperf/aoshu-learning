import type { TopicContent } from '../../types'

export const grade4Contents: Record<string, TopicContent> = {
  'g4-travel': {
    topicId: 'g4-travel',
    explanation: `## 行程问题

**核心公式：** 路程 = 速度 × 时间

### 三种基本类型

**1. 相遇问题（两人相向而行）**
- 相遇时间 = 总路程 ÷ 速度之和

**2. 追及问题（同向而行）**
- 追及时间 = 路程差 ÷ 速度差

**3. 往返问题**
- 往返平均速度 = 2 × 去速 × 回速 ÷ (去速 + 回速)

### 解题关键

找准"不变量"：相遇问题中路程之和不变；追及问题中路程差不变。`,
    examples: [
      {
        problem: `甲乙两人从相距 120 千米的两地相向而行，甲速 30 千米/时，乙速 10 千米/时，几小时后相遇？

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="50" y1="100" x2="350" y2="100" stroke="#94a3b8" stroke-width="4"/>

  <circle cx="50" cy="100" r="10" fill="#2563eb"/>
  <text x="50" y="80" font-size="14" fill="#2563eb" text-anchor="middle" font-weight="bold">A地</text>

  <circle cx="350" cy="100" r="10" fill="#dc2626"/>
  <text x="350" y="80" font-size="14" fill="#dc2626" text-anchor="middle" font-weight="bold">B地</text>

  <text x="200" y="120" font-size="14" fill="#374151" text-anchor="middle">120千米</text>

  <path d="M 70 100 L 170 100" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue4)"/>
  <text x="120" y="90" font-size="13" fill="#2563eb" text-anchor="middle" font-weight="bold">甲 30km/h</text>
  <text x="120" y="135" font-size="11" fill="#2563eb" text-anchor="middle">3小时走90km</text>

  <path d="M 330 100 L 230 100" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red4)"/>
  <text x="280" y="90" font-size="13" fill="#dc2626" text-anchor="middle" font-weight="bold">乙 10km/h</text>
  <text x="280" y="135" font-size="11" fill="#dc2626" text-anchor="middle">3小时走30km</text>

  <circle cx="200" cy="100" r="8" fill="#fbbf24"/>
  <text x="200" y="160" font-size="13" fill="#fbbf24" text-anchor="middle" font-weight="bold">相遇点</text>

  <defs>
    <marker id="arrow-blue4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#2563eb"/>
    </marker>
    <marker id="arrow-red4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#dc2626"/>
    </marker>
  </defs>

  <text x="200" y="180" font-size="12" fill="#374151" text-anchor="middle">相遇时间 = 120 ÷ (30+10) = 3小时</text>
</svg>`,
        solution: `相遇时间 = 120 ÷ (30+10) = **3 小时**

验证：甲走90千米，乙走30千米，90+30=120 ✓`,
      },
      {
        problem: '小明骑车速度 15 千米/时，小红步行速度 5 千米/时，小红先出发 2 小时，小明追上小红需要几小时？',
        solution: `路程差 = 5×2 = 10 千米

追及时间 = 10 ÷ (15-5) = **1 小时**`,
      },
    ],
  },

  'g4-number_theory': {
    topicId: 'g4-number_theory',
    explanation: `## 整除与余数

### 整除判断规则

| 除数 | 判断方法 |
|------|----------|
| 2 | 末位是 0,2,4,6,8 |
| 3 | 各位数字之和能被3整除 |
| 5 | 末位是 0 或 5 |
| 9 | 各位数字之和能被9整除 |

### 余数的性质

- 余数必须小于除数
- (a+b) mod n = ((a mod n)+(b mod n)) mod n

### 带余除法

a = b × q + r（0 ≤ r < b）`,
    examples: [
      {
        problem: '一个三位数，个位是5，十位是3，百位是a，若能被3整除，a可以是哪些数字？',
        solution: `各位之和 = a+3+5 = a+8，要被3整除。

12能被3整除，所以a也要被3整除：a = 0,3,6,9

但a是百位，a≠0，所以 **a = 3、6、9**`,
      },
      {
        problem: '一堆糖，3个3个数余2，5个5个数余3，这堆糖最少有多少颗？',
        solution: `3个数余2的数：2,5,8,11,14,17,20,23...

5个数余3的数：3,8,13,18,23...

最小公共值 = **23 颗**`,
      },
    ],
  },

  'g4-inclusion': {
    topicId: 'g4-inclusion',
    explanation: `## 容斥原理

### 两个集合

|A ∪ B| = |A| + |B| - |A ∩ B|

### 三个集合

|A ∪ B ∪ C| = |A|+|B|+|C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|

### 应用场景

- 统计"至少满足一个条件"的数量
- 避免重复计数`,
    examples: [
      {
        problem: '全班40人，喜欢语文25人，喜欢数学20人，两科都喜欢10人，两科都不喜欢的有多少人？',
        solution: `至少喜欢一科 = 25+20-10 = 35人

两科都不喜欢 = 40-35 = **5人**`,
      },
      {
        problem: '1到100中，能被3整除或能被5整除的数有多少个？',
        solution: `被3整除：33个，被5整除：20个，被15整除：6个

容斥：33+20-6 = **47个**`,
      },
    ],
  },

  'g4-geometry': {
    topicId: 'g4-geometry',
    explanation: `## 面积计算

### 常用面积公式

| 图形 | 面积公式 |
|------|----------|
| 长方形 | 长 × 宽 |
| 三角形 | 底 × 高 ÷ 2 |
| 平行四边形 | 底 × 高 |
| 梯形 | (上底+下底) × 高 ÷ 2 |

### 割补法

**割：** 分割成简单图形，面积相加。
**补：** 补全成规则图形，总面积减去补充部分。`,
    examples: [
      {
        problem: `一个梯形，上底6cm，下底10cm，高4cm，求面积。

<svg width="350" height="220" viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,50 220,50 260,150 60,150" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>

  <line x1="160" y1="50" x2="160" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="170" y="100" font-size="13" fill="#dc2626" text-anchor="start">高4cm</text>

  <line x1="100" y1="40" x2="220" y2="40" stroke="#374151" stroke-width="1"/>
  <text x="160" y="30" font-size="13" fill="#374151" text-anchor="middle">上底 6cm</text>

  <line x1="60" y1="165" x2="260" y2="165" stroke="#374151" stroke-width="1"/>
  <text x="160" y="185" font-size="13" fill="#374151" text-anchor="middle">下底 10cm</text>

  <text x="175" y="210" font-size="12" fill="#2563eb" text-anchor="middle">面积 = (上底+下底) × 高 ÷ 2</text>
</svg>`,
        solution: `面积 = (6+10)×4÷2 = **32 cm²**`,
      },
      {
        problem: '一个直角三角形，两直角边分别为6cm和8cm，求面积和斜边长。',
        solution: `面积 = 6×8÷2 = **24 cm²**

斜边 = √(36+64) = √100 = **10 cm**`,
      },
    ],
  },

  'g4-sequences': {
    topicId: 'g4-sequences',
    explanation: `## 等比数列

等比数列是相邻两项之比相同的数列，公比为 q。

### 基本公式

**第 n 项：** aₙ = a₁ × q^(n-1)

**求和（q≠1）：** Sₙ = a₁ × (1-qⁿ) ÷ (1-q)

### 常见等比数列

- 2, 4, 8, 16, 32, ...（公比2）
- 1, 3, 9, 27, 81, ...（公比3）`,
    examples: [
      {
        problem: '等比数列 2, 6, 18, 54, ... 的第 6 项是多少？',
        solution: `a₁=2，q=3

a₆ = 2 × 3⁵ = 2 × 243 = **486**`,
      },
      {
        problem: '一张纸厚 0.1mm，对折 10 次后有多厚？',
        solution: `对折10次：0.1 × 2¹⁰ = 0.1 × 1024 = **102.4mm**`,
      },
    ],
  },

  'g4-logic': {
    topicId: 'g4-logic',
    explanation: `## 推理与证明

### 假设法

先假设某种情况成立，推导出结论，再验证是否矛盾。

### 反证法

假设结论的反面成立，推导出矛盾，从而证明原结论正确。

### 枚举验证法

列出所有可能情况，逐一验证，找出满足条件的答案。`,
    examples: [
      {
        problem: 'A、B、C三个盒子，标签：A写"奖品在B"，B写"奖品不在此"，C写"奖品在此"。只有一个标签是真的，奖品在哪？',
        solution: `假设奖品在A盒：A假、B真、C假 → 只有B真 ✓

**答：奖品在A盒。**`,
      },
      {
        problem: '用反证法证明：如果 a+b 是奇数，那么 a 和 b 一奇一偶。',
        solution: `假设 a、b 同为偶数：偶+偶=偶，矛盾 ✗
假设 a、b 同为奇数：奇+奇=偶，矛盾 ✗

所以 a 和 b 必然一奇一偶。 ✓`,
      },
    ],
  },

  'g4-work': {
    topicId: 'g4-work',
    explanation: `## 工程问题

**核心思路：** 把整个工程看作"1"，用完成速度（效率）来计算。

### 基本公式

- 工作效率 = 1 ÷ 完成时间
- 合作时间 = 1 ÷ (效率之和)

### 常见变形

**甲做了一部分，乙接着做：**
甲做的工作量 + 乙做的工作量 = 1`,
    examples: [
      {
        problem: '一项工程，甲单独做需6天，乙单独做需12天，两人合作需几天完成？',
        solution: `甲效率=1/6，乙效率=1/12

合作效率 = 1/6+1/12 = 1/4

合作时间 = **4天**`,
      },
      {
        problem: '一项工程，甲单独做需10天，乙单独做需15天。甲做4天后，剩余由乙完成，乙还需几天？',
        solution: `甲做4天完成：4×(1/10) = 2/5

剩余：1-2/5 = 3/5

乙完成3/5需：(3/5)÷(1/15) = **9天**`,
      },
    ],
  },

  'g4-gcd-lcm': {
    topicId: 'g4-gcd-lcm',
    explanation: `## 最大公因数与最小公倍数

### 最大公因数（GCD）

**短除法：** 同时除以公因数，直到互质。

**辗转相除法：** GCD(a,b) = GCD(b, a mod b)

### 最小公倍数（LCM）

> LCM(a,b) = a × b ÷ GCD(a,b)

### 重要关系

> GCD(a,b) × LCM(a,b) = a × b`,
    examples: [
      {
        problem: '求 48 和 36 的最大公因数和最小公倍数。',
        solution: `48 = 2⁴×3，36 = 2²×3²

GCD = 2²×3 = **12**

LCM = 48×36÷12 = **144**`,
      },
      {
        problem: '甲每隔4天值班一次，乙每隔6天值班一次，今天同时值班，下次同时值班是几天后？',
        solution: `LCM(4,6) = 4×6÷GCD(4,6) = 24÷2 = **12天**`,
      },
    ],
  },

  'g4-concentration': {
    topicId: 'g4-concentration',
    explanation: `## 浓度问题

### 基本概念

- **浓度：** 溶质 ÷ 溶液 × 100%
- **溶液 = 溶质 + 溶剂**

### 混合问题

> 混合浓度 = (溶质₁+溶质₂) ÷ (溶液₁+溶液₂)

### 稀释问题

加水稀释：溶质不变，溶液增加。`,
    examples: [
      {
        problem: '100g 浓度为 20% 的盐水，含盐多少克？加多少克水可变成 10% 的盐水？',
        solution: `含盐 = 100×20% = **20g**

稀释后：20÷(100+x) = 10%，x = **100g**`,
      },
      {
        problem: '200g 浓度30%的糖水和 300g 浓度20%的糖水混合，混合后浓度是多少？',
        solution: `糖₁=60g，糖₂=60g

混合浓度 = 120÷500 = **24%**`,
      },
    ],
  },

  'g4-profit': {
    topicId: 'g4-profit',
    explanation: `## 利润与折扣

### 基本概念

- **利润** = 售价 - 成本价
- **利润率** = 利润 ÷ 成本价 × 100%
- **打八折** = 原价 × 0.8

### 核心公式

> 售价 = 成本价 × (1 + 利润率)`,
    examples: [
      {
        problem: '一件商品成本 80 元，要获得 25% 的利润，应定价多少元？',
        solution: `售价 = 80×(1+25%) = **100元**`,
      },
      {
        problem: '一件衣服定价 200 元，打七折出售，成本 100 元，利润率是多少？',
        solution: `折扣价 = 200×0.7 = 140元

利润率 = (140-100)÷100 = **40%**`,
      },
    ],
  },

  'g4-geometry2': {
    topicId: 'g4-geometry2',
    explanation: `## 三角形与四边形

### 三角形性质

- 内角和 = 180°
- 任意两边之和 > 第三边
- 等腰三角形：两腰相等，两底角相等

### 四边形性质

- 内角和 = 360°
- 平行四边形：对边平行且相等，对角相等`,
    examples: [
      {
        problem: `一个三角形，最大角是最小角的2倍，第三个角比最小角大30°，求三个角的度数。

<svg width="380" height="240" viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg">
  <polygon points="190,40 320,180 60,180" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>

  <text x="190" y="60" font-size="14" fill="#dc2626" text-anchor="middle" font-weight="bold">2x°</text>
  <text x="190" y="75" font-size="11" fill="#dc2626" text-anchor="middle">(最大角)</text>

  <text x="80" y="170" font-size="14" fill="#2563eb" text-anchor="middle" font-weight="bold">x°</text>
  <text x="80" y="185" font-size="11" fill="#2563eb" text-anchor="middle">(最小角)</text>

  <text x="300" y="170" font-size="14" fill="#059669" text-anchor="middle" font-weight="bold">(x+30)°</text>
  <text x="300" y="185" font-size="11" fill="#059669" text-anchor="middle">(第三个角)</text>

  <text x="190" y="220" font-size="13" fill="#374151" text-anchor="middle">x + 2x + (x+30) = 180°</text>
</svg>`,
        solution: `设最小角为x°：x + 2x + (x+30) = 180

4x = 150，x = 37.5°

三个角：**37.5°、75°、67.5°**`,
      },
      {
        problem: '平行四边形的一个角是 60°，求其余三个角的度数。',
        solution: `对角相等，邻角互补。

四个角：**60°、120°、60°、120°**`,
      },
    ],
  },

  'g4-combinatorics': {
    topicId: 'g4-combinatorics',
    explanation: `## 排列数

从 n 个不同元素中取出 m 个，按顺序排列的方法数。

### 排列数公式

> P(n,m) = n × (n-1) × ... × (n-m+1)

### 全排列

> n! = n×(n-1)×...×2×1`,
    examples: [
      {
        problem: '从5名同学中选出正、副班长各一名，有多少种选法？',
        solution: `P(5,2) = 5×4 = **20种**`,
      },
      {
        problem: '用0、1、2、3四个数字组成不重复的三位数，有多少个？',
        solution: `百位不能是0：3种；十位：3种；个位：2种

总数 = 3×3×2 = **18个**`,
      },
    ],
  },

  'g4-number-fill': {
    topicId: 'g4-number-fill',
    explanation: `## 数字填充

在算式中填入数字，使等式或不等式成立。

### 解题方法

- **逆运算法：** 利用运算的逆运算求未知数
- **范围估算法：** 先估计范围，再逐一验证
- **系统枚举法：** 按顺序列出所有可能，筛选满足条件的`,
    examples: [
      {
        problem: '在□中填入合适的数字（0-9），使 3□5 能被 9 整除。',
        solution: `各位之和 = 8+□，要被9整除 → □ = **1**（即315）`,
      },
      {
        problem: '找出所有满足条件的两位数：各位数字之积等于各位数字之和的2倍。',
        solution: `设两位数为 ab：a×b = 2(a+b)，整理得 b = 2a÷(a-2)

验证：a=3→36 ✓，a=4→44 ✓，a=6→63 ✓

**答：36、44、63。**`,
      },
    ],
  },

  'g4-period': {
    topicId: 'g4-period',
    explanation: `## 周期问题

找出循环周期，解决日期、余数等周期性问题。

### 核心方法

1. 找出循环的周期 T
2. 用总数除以周期，求余数
3. 余数对应周期中的第几个（余数为0则对应第T个）`,
    examples: [
      {
        problem: '今天是星期三，100天后是星期几？',
        solution: `100 ÷ 7 = 14 余 2

星期三往后数2天 → **星期五**`,
      },
      {
        problem: '2的幂次个位数字周期为4（2,4,8,6），2的100次方的个位数字是多少？',
        solution: `100 ÷ 4 = 25 余 0，余数为0对应周期第4个 → **6**`,
      },
    ],
  },
}
