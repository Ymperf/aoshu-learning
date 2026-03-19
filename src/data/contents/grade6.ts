import type { TopicContent } from '../../types'

export const grade6Contents: Record<string, TopicContent> = {
  'g6-ratio': {
    topicId: 'g6-ratio',
    explanation: `## 比例问题

### 基本概念

- **比：** a:b = a/b
- **正比例：** y/x = k（常数），x增大y也增大
- **反比例：** x×y = k（常数），x增大y减小

### 按比例分配

总量按 a:b:c 分配：
> 各部分 = 总量 × (各自份数 ÷ 总份数)`,
    examples: [
      {
        problem: '学校将 360 本图书按 3:2:1 分配给三个年级，每个年级各得多少本？',
        solution: `总份数 = 3+2+1 = 6份，每份 = 360÷6 = 60本

一年级：60×3 = **180本**
二年级：60×2 = **120本**
三年级：60×1 = **60本**`,
      },
      {
        problem: '汽车以 60千米/时需 4 小时到达，若速度提高到 80千米/时，需要几小时？',
        solution: `路程 = 60×4 = 240千米

新时间 = 240÷80 = **3小时**`,
      },
    ],
  },

  'g6-number_theory': {
    topicId: 'g6-number_theory',
    explanation: `## 数论综合

综合运用整除、余数、质因数等知识解题。

### 核心知识点

- **质因数分解：** 任何合数 = 质数的乘积
- **GCD 和 LCM：** GCD×LCM = a×b
- **同余：** a≡b (mod n) 表示余数相同
- **整除特征：** 2,3,4,5,6,9的整除判断

### 综合应用

将多个数论知识点结合，解决复杂问题。`,
    examples: [
      {
        problem: '求最小的正整数 n，使得 n 除以 3 余 1，除以 4 余 2，除以 5 余 3。',
        solution: `注意：n-1能被3整除，n-2能被4整除，n-3能被5整除。

即 n+2 能被 3、4、5 整除（因为 n≡1(mod 3) → n+2≡0(mod 3)）

LCM(3,4,5) = 60

n+2 = 60，n = **58**

验证：58÷3=19余1 ✓，58÷4=14余2 ✓，58÷5=11余3 ✓`,
      },
      {
        problem: '两个数的最大公因数是 12，最小公倍数是 180，其中一个数是 36，另一个数是多少？',
        solution: `GCD×LCM = a×b

12×180 = 36×b

b = 12×180÷36 = **60**

验证：GCD(36,60)=12 ✓，LCM(36,60)=180 ✓`,
      },
    ],
  },

  'g6-combinatorics': {
    topicId: 'g6-combinatorics',
    explanation: `## 计数原理

### 加法原理

完成一件事有多种互斥方案，各方案的方法数**相加**。

### 乘法原理

完成一件事需要多个独立步骤，各步骤的方法数**相乘**。

### 综合应用

复杂问题往往需要先分类（加法），再分步（乘法）。

### 常见陷阱

- 注意是否有重复计数
- 有限制条件时，先处理限制条件`,
    examples: [
      {
        problem: '从 A 城到 C 城，经过 B 城，A到B有3条路，B到C有2条路，共有多少种走法？',
        solution: `分两步（乘法原理）：3×2 = **6种**`,
      },
      {
        problem: '用 0、1、2、3、4 五个数字组成没有重复数字的三位数，共有多少个？',
        solution: `百位不能为0：4种（1,2,3,4）
十位：4种（剩余4个数字中选）
个位：3种

总数 = 4×4×3 = **48个**`,
      },
    ],
  },

  'g6-geometry': {
    topicId: 'g6-geometry',
    explanation: `## 圆与扇形

### 圆的基本公式

- **周长：** C = 2πr
- **面积：** S = πr²

### 扇形

- **弧长：** l = 2πr × (n/360)
- **扇形面积：** S = πr² × (n/360) = l×r÷2

### 组合图形

将圆与其他图形组合，用加减法计算面积。`,
    examples: [
      {
        problem: '一个圆形花坛，半径为 5m，求周长和面积。（π取3.14）',
        solution: `周长 = 2×3.14×5 = **31.4m**

面积 = 3.14×25 = **78.5m²**`,
      },
      {
        problem: `一个扇形，半径6cm，圆心角60°，求扇形面积和弧长。（π取3.14）

<svg width="320" height="280" viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg">
  <path d="M 160 140 L 212 70 A 80 80 0 0 1 240 140 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>

  <line x1="160" y1="140" x2="212" y2="70" stroke="#dc2626" stroke-width="2"/>
  <line x1="160" y1="140" x2="240" y2="140" stroke="#dc2626" stroke-width="2"/>

  <circle cx="160" cy="140" r="4" fill="#dc2626"/>
  <text x="150" y="155" font-size="12" fill="#374151" text-anchor="end">O</text>

  <text x="186" y="100" font-size="13" fill="#dc2626" text-anchor="middle">r=6cm</text>

  <path d="M 180 140 A 20 20 0 0 0 172 125" fill="none" stroke="#059669" stroke-width="2"/>
  <text x="190" y="130" font-size="13" fill="#059669" text-anchor="start" font-weight="bold">60°</text>

  <text x="226" y="100" font-size="12" fill="#2563eb" text-anchor="middle">弧长</text>

  <text x="160" y="230" font-size="12" fill="#2563eb" text-anchor="middle">扇形面积 = πr² × (n/360)</text>
  <text x="160" y="250" font-size="12" fill="#2563eb" text-anchor="middle">弧长 = 2πr × (n/360)</text>
</svg>`,
        solution: `扇形面积 = 3.14×36×(60÷360) = **18.84cm²**

弧长 = 2×3.14×6×(60÷360) = **6.28cm**`,
      },
    ],
  },

  'g6-sequences': {
    topicId: 'g6-sequences',
    explanation: `## 数列求和

### 等差数列求和（复习）

> Sₙ = n×(a₁+aₙ)÷2

### 裂项求和法

将每一项拆成两项之差，相邻项消去，只剩首尾。

> 例：1/(n×(n+1)) = 1/n - 1/(n+1)

### 错位相减法

适用于形如 n×qⁿ 的数列求和（等差×等比）。

**步骤：**
1. 设 S = 原式
2. 将 S 乘以公比 q，得 qS
3. S - qS，消去大部分项`,
    examples: [
      {
        problem: '求 1/1×2 + 1/2×3 + 1/3×4 + ... + 1/99×100 的值。',
        solution: `裂项：1/(k×(k+1)) = 1/k - 1/(k+1)

原式 = (1-1/2)+(1/2-1/3)+...+(1/99-1/100)

= 1 - 1/100 = **99/100**`,
      },
      {
        problem: '求数列 1×2 + 2×3 + 3×4 + ... + n×(n+1) 的前 n 项和。',
        solution: `k(k+1) = k²+k

Sₙ = Σk² + Σk = n(n+1)(2n+1)/6 + n(n+1)/2

= n(n+1)/6 × (2n+1+3) = **n(n+1)(n+2)/3**

验证 n=3：2+6+12=20，3×4×5/3=20 ✓`,
      },
    ],
  },

  'g6-logic': {
    topicId: 'g6-logic',
    explanation: `## 综合推理

综合推理题需要灵活运用多种推理方法，综合分析复杂条件。

### 常用方法汇总

1. **列表法：** 整理多个对象和多个属性的对应关系
2. **假设法：** 假设某种情况，验证是否与所有条件一致
3. **反证法：** 假设结论不成立，推出矛盾
4. **枚举法：** 列出所有可能情况，逐一筛选

### 解题策略

先找确定性最强的条件，利用确定的信息推导其他信息。`,
    examples: [
      {
        problem: '五人赛跑：甲说"我第一"，乙说"我第二"，丙说"我不是最后"，丁说"我第三"，戊说"我最后"。恰好两人说对了，且甲没有得第一，请推断各人名次。',
        solution: `甲说错 → 甲不是第一。

尝试乙第二+戊第五（两人说对）：
剩余甲、丙、丁排第一、三、四
甲不是第一 → 丁第一，甲第三或四，丙第四或三
丁说"我第三"→ 若丁第一则丁说错 ✓（只有乙、戊说对）

**答：丁第一，乙第二，甲第三，丙第四，戊第五。**`,
      },
      {
        problem: '有红、黄、蓝、白四种颜色的球各一个，分别放入四个盒子。红球不在1号，黄球不在2号，蓝球在3号或4号，白球不在4号。确定每个盒子里的球。',
        solution: `蓝球在3或4号。

假设蓝球在4号：
白球不在4号（已满足），白球在1、2、3号。
红球不在1号，黄球不在2号。
若白球在1号：红球在2或3，黄球在3或4（4被蓝占）→ 黄球在3，红球在2 ✓

**答：1号白球，2号红球，3号黄球，4号蓝球。**`,
      },
    ],
  },

  'g6-travel': {
    topicId: 'g6-travel',
    explanation: `## 行程综合

### 流水行船

- 顺水速度 = 船速 + 水速
- 逆水速度 = 船速 - 水速

### 环形跑道

两人同向跑：追及时间 = 跑道周长 ÷ 速度差
两人反向跑：相遇时间 = 跑道周长 ÷ 速度和

### 多次相遇

A、B两地间来回，第n次相遇时两人共走 (2n-1) 个全程。`,
    examples: [
      {
        problem: `船顺流从A到B需2小时，逆流从B到A需3小时，AB距离60千米，求船速和水速。

<svg width="400" height="240" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="80" width="300" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>

  <path d="M 80 120 L 140 120" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow-water)"/>
  <path d="M 160 120 L 220 120" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow-water)"/>
  <path d="M 240 120 L 300 120" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow-water)"/>
  <text x="200" y="110" font-size="12" fill="#60a5fa" text-anchor="middle">水流方向</text>

  <circle cx="70" cy="120" r="8" fill="#2563eb"/>
  <text x="70" y="65" font-size="14" fill="#2563eb" text-anchor="middle" font-weight="bold">A地</text>

  <circle cx="330" cy="120" r="8" fill="#dc2626"/>
  <text x="330" y="65" font-size="14" fill="#dc2626" text-anchor="middle" font-weight="bold">B地</text>

  <path d="M 90 100 L 310 100" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
  <text x="200" y="95" font-size="12" fill="#059669" text-anchor="middle">顺流 2小时</text>

  <path d="M 310 140 L 90 140" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red6)"/>
  <text x="200" y="155" font-size="12" fill="#dc2626" text-anchor="middle">逆流 3小时</text>

  <text x="200" y="50" font-size="13" fill="#374151" text-anchor="middle">AB距离 60千米</text>

  <text x="200" y="190" font-size="12" fill="#374151" text-anchor="middle">顺流速度 = 船速 + 水速</text>
  <text x="200" y="210" font-size="12" fill="#374151" text-anchor="middle">逆流速度 = 船速 - 水速</text>

  <defs>
    <marker id="arrow-water" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
      <polygon points="0 0, 8 2.5, 0 5" fill="#60a5fa"/>
    </marker>
    <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#059669"/>
    </marker>
    <marker id="arrow-red6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#dc2626"/>
    </marker>
  </defs>
</svg>`,
        solution: `顺流速度 = 60÷2 = 30千米/时
逆流速度 = 60÷3 = 20千米/时

船速 = (30+20)÷2 = **25千米/时**
水速 = (30-20)÷2 = **5千米/时**`,
      },
      {
        problem: '环形跑道周长400m，甲速8m/s，乙速6m/s，同时同地出发，同向跑，多少秒后甲第一次追上乙？',
        solution: `追及时间 = 400÷(8-6) = 400÷2 = **200秒**`,
      },
    ],
  },

  'g6-geometry2': {
    topicId: 'g6-geometry2',
    explanation: `## 几何综合

综合运用面积、体积公式解决复杂几何问题。

### 等积变形

面积不变，改变图形形状，简化计算。

### 相似图形

相似图形的面积比 = 相似比的平方。

### 截面问题

立体图形被平面截断，分析截面的形状和面积。

### 解题技巧

- 添加辅助线，将复杂图形分解
- 利用对称性简化计算
- 注意单位换算`,
    examples: [
      {
        problem: `一个圆柱形水桶，底面半径10cm，高20cm，装满水后倒入一个长方体容器（长25cm，宽20cm），水深多少cm？（π取3.14）

<svg width="400" height="240" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="80" rx="40" ry="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <rect x="60" y="80" width="80" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="100" cy="160" rx="40" ry="12" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>

  <text x="100" y="120" font-size="12" fill="#2563eb" text-anchor="middle">r=10cm</text>
  <text x="45" y="120" font-size="12" fill="#2563eb" text-anchor="end">h=20cm</text>

  <path d="M 150 120 L 210 120" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-transfer)"/>
  <text x="180" y="110" font-size="11" fill="#fbbf24" text-anchor="middle">倒入</text>

  <g transform="translate(220, 60)">
    <rect x="0" y="60" width="100" height="80" fill="none" stroke="#059669" stroke-width="2"/>
    <rect x="0" y="97" width="100" height="43" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/>

    <polygon points="0,60 20,50 120,50 100,60" fill="none" stroke="#059669" stroke-width="2"/>
    <polygon points="100,60 120,50 120,130 100,140" fill="none" stroke="#059669" stroke-width="2"/>

    <text x="50" y="55" font-size="11" fill="#059669" text-anchor="middle">25cm×20cm</text>
    <text x="110" y="120" font-size="11" fill="#dc2626" text-anchor="start">h=?</text>
  </g>

  <text x="200" y="220" font-size="12" fill="#374151" text-anchor="middle">体积相等：πr²h圆柱 = 长×宽×h长方体</text>

  <defs>
    <marker id="arrow-transfer" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#fbbf24"/>
    </marker>
  </defs>
</svg>`,
        solution: `圆柱体积 = 3.14×10²×20 = 6280cm³

长方体水深 = 6280÷(25×20) = 6280÷500 = **12.56cm**`,
      },
      {
        problem: '两个相似三角形，相似比为 2:3，小三角形面积为 8cm²，大三角形面积是多少？',
        solution: `面积比 = 相似比的平方 = 2²:3² = 4:9

大三角形面积 = 8×(9÷4) = **18cm²**`,
      },
    ],
  },

  'g6-combinatorics2': {
    topicId: 'g6-combinatorics2',
    explanation: `## 组合数学

解决涂色、握手、连线等组合计数问题。

### 握手问题

n 个人互相握手，握手总次数 = C(n,2) = n(n-1)/2

### 连线问题

n 个点，任意两点连一条线，共有 C(n,2) 条线。

### 涂色问题

用 k 种颜色给图形涂色，相邻区域颜色不同，计算涂色方案数。

### 分组问题

将 n 个人分成若干组，注意区分"有序分组"和"无序分组"。`,
    examples: [
      {
        problem: '10个人参加聚会，每两人握一次手，共握手多少次？',
        solution: `C(10,2) = 10×9÷2 = **45次**`,
      },
      {
        problem: '圆上有6个点，任意两点连一条弦，共有多少条弦？其中有多少条是直径？（假设没有三点共线）',
        solution: `弦的总数 = C(6,2) = 6×5÷2 = **15条**

直径需要两点关于圆心对称，6个点可形成 **3条**直径。`,
      },
    ],
  },

  'g6-number-theory2': {
    topicId: 'g6-number-theory2',
    explanation: `## 不定方程

求满足条件的整数解，解决鸡兔同笼的推广问题。

### 二元一次不定方程

ax + by = c 的整数解（a,b,c为整数）。

**求解步骤：**
1. 找一个特殊解 (x₀, y₀)
2. 通解为：x = x₀ + bt，y = y₀ - at（t为任意整数）
3. 根据实际约束（如非负整数）确定 t 的范围

### 正整数解的个数

根据约束条件，枚举所有满足条件的解。`,
    examples: [
      {
        problem: '用 1 元、2 元、5 元的硬币凑成 10 元，共有多少种方法？（每种面值至少用一枚）',
        solution: `设1元用a枚，2元用b枚，5元用c枚：
a + 2b + 5c = 10，a,b,c ≥ 1

c=1：a+2b=5，b=1→a=3 ✓，b=2→a=1 ✓（2种）
c=2：a+2b=0，无正整数解

加上"至少用一枚"的约束，共 **2种**`,
      },
      {
        problem: '鸡兔同笼，头共20个，脚共56只，鸡和兔各有多少只？',
        solution: `设鸡x只，兔y只：
x + y = 20
2x + 4y = 56

由第二式减第一式×2：2y = 16，y = 8

x = 20-8 = **12只鸡，8只兔**`,
      },
    ],
  },

  'g6-probability': {
    topicId: 'g6-probability',
    explanation: `## 可能性初步

### 基本概念

- **确定事件：** 必然发生或不可能发生的事件
- **随机事件：** 可能发生也可能不发生的事件
- **概率：** 随机事件发生的可能性大小，用 0~1 之间的数表示

### 等可能事件的概率

> P(A) = A发生的情况数 ÷ 所有可能的情况数

### 互斥事件

两个事件不能同时发生：P(A或B) = P(A) + P(B)

### 对立事件

P(A) + P(非A) = 1`,
    examples: [
      {
        problem: '一个袋子里有3个红球和2个白球，随机摸出一个球，摸到红球的概率是多少？',
        solution: `总球数 = 3+2 = 5个

P(红球) = 3÷5 = **3/5 = 60%**`,
      },
      {
        problem: '掷一个骰子，出现偶数点的概率是多少？出现大于4的点的概率是多少？',
        solution: `偶数点：2,4,6，共3种

P(偶数) = 3÷6 = **1/2**

大于4的点：5,6，共2种

P(大于4) = 2÷6 = **1/3**`,
      },
    ],
  },

  'g6-optimization': {
    topicId: 'g6-optimization',
    explanation: `## 最优化问题

在约束条件下求最大值或最小值。

### 常见类型

**最短路径：** 利用"两点之间线段最短"原理。

**最大面积：** 在周长固定时，正方形面积最大。

**最小费用：** 在满足条件的前提下，找最省钱的方案。

### 解题方法

- **图形法：** 画出示意图，利用几何性质
- **代数法：** 设未知数，建立函数，求极值
- **枚举法：** 列出所有可能方案，比较大小`,
    examples: [
      {
        problem: '用 40m 的篱笆围一个靠墙的长方形菜园（一边靠墙不需要篱笆），面积最大是多少？',
        solution: `设垂直于墙的边长为 x，平行于墙的边长为 40-2x

面积 = x×(40-2x) = 40x-2x²

当 x = 10 时，面积最大：
面积 = 10×(40-20) = 10×20 = **200m²**`,
      },
      {
        problem: '一个正方形和一个长方形，周长都是 24cm，正方形面积比长方形面积大多少？（长方形长8cm）',
        solution: `正方形边长 = 24÷4 = 6cm，面积 = 36cm²

长方形宽 = (24-8×2)÷2 = 4cm，面积 = 8×4 = 32cm²

差 = 36-32 = **4cm²**`,
      },
    ],
  },

  'g6-sequences2': {
    topicId: 'g6-sequences2',
    explanation: `## 递推数列

根据递推关系求数列的通项和求和。

### 递推关系

用前面的项表示后面的项：
- aₙ₊₁ = aₙ + d（等差）
- aₙ₊₁ = aₙ × q（等比）
- aₙ₊₁ = aₙ + aₙ₋₁（斐波那契型）

### 求通项公式

**特征根法（二阶线性递推）：**
aₙ₊₁ = p×aₙ + q×aₙ₋₁

求特征方程 x² = px + q 的根，得到通项公式。

### 迭代法

从初始值出发，逐步代入递推关系，找出规律。`,
    examples: [
      {
        problem: '数列满足：a₁=1，aₙ₊₁ = 2aₙ + 1，求 a₅。',
        solution: `a₁=1
a₂=2×1+1=3
a₃=2×3+1=7
a₄=2×7+1=15
a₅=2×15+1=**31**

规律：aₙ = 2ⁿ - 1`,
      },
      {
        problem: '数列满足：a₁=1，a₂=1，aₙ₊₂ = aₙ₊₁ + aₙ，求前8项之和。',
        solution: `这是斐波那契数列：1,1,2,3,5,8,13,21

前8项之和 = 1+1+2+3+5+8+13+21 = **54**

规律：前n项之和 = a(n+2) - 1 = 34-1... 验证：a₁₀=55，55-1=54 ✓`,
      },
    ],
  },

  'g6-comprehensive': {
    topicId: 'g6-comprehensive',
    explanation: `## 综合应用题

综合运用多种方法解决复杂的实际应用问题。

### 解题策略

1. **读题分析：** 找出已知量、未知量和条件
2. **建立模型：** 选择合适的数学模型（方程、比例、图形等）
3. **分步求解：** 将复杂问题分解为简单子问题
4. **验证答案：** 代回原题检验是否满足所有条件

### 常见综合题型

- 行程+工程综合
- 比例+几何综合
- 数论+计数综合
- 逻辑+代数综合`,
    examples: [
      {
        problem: '甲乙两人同时从A地出发去B地，甲步行速度4千米/时，乙骑车速度12千米/时。乙到达B地后立即返回，与甲相遇时距B地9千米，求AB两地的距离。',
        solution: `设AB距离为d千米，相遇时甲走了t小时。

乙走了：d + (d-9) = 2d-9 千米
甲走了：d-9 千米（距B地9千米，即走了d-9千米）

时间相同：(d-9)÷4 = (2d-9)÷12

12(d-9) = 4(2d-9)
12d-108 = 8d-36
4d = 72
d = **18千米**

验证：甲走9千米用9/4小时，乙走27千米用27/12=9/4小时 ✓`,
      },
      {
        problem: '一次数学竞赛共20题，答对一题得5分，答错一题扣2分，不答得0分。小明得了67分，他答对了多少题？',
        solution: `设答对x题，答错y题，不答(20-x-y)题。

5x - 2y = 67

若全部回答（不答=0）：5x-2(20-x)=67
7x = 107，x不是整数，说明有不答的题。

设答对x题，答错y题：
5x-2y=67，x+y≤20

尝试：x=15：75-2y=67，y=4，x+y=19≤20 ✓

**答：答对15题，答错4题，不答1题。**`,
      },
    ],
  },
}
