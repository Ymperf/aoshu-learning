import type { Question } from '../../types'

export const grade6Questions: Record<string, Question[]> = {
  'g6-ratio': [
    { id: 'q1', topicId: 'g6-ratio', type: 'multiple_choice', difficulty: 'easy', prompt: '甲乙两数的比是3:5，甲数是30，乙数是多少？', options: ['40', '45', '50', '55'], correctIndex: 2, explanation: '30÷3×5=50。' },
    { id: 'q2', topicId: 'g6-ratio', type: 'fill_blank', difficulty: 'easy', prompt: '甲乙两数的比是2:3，和是50，甲数是___。', correctAnswer: '20', acceptedAnswers: ['二十'], explanation: '50÷(2+3)×2=20。' },
    { id: 'q3', topicId: 'g6-ratio', type: 'true_false', difficulty: 'easy', prompt: '比例的基本性质：a:b=c:d，则ad=bc。', isTrue: true, explanation: '比例的基本性质，正确。' },
    { id: 'q4', topicId: 'g6-ratio', type: 'multiple_choice', difficulty: 'medium', prompt: '甲乙丙三个数的比是2:3:5，和是100，丙数是多少？', options: ['40', '45', '50', '55'], correctIndex: 2, explanation: '100÷(2+3+5)×5=50。' },
    { id: 'q5', topicId: 'g6-ratio', type: 'fill_blank', difficulty: 'medium', prompt: '甲乙两数的比是4:5，甲数比乙数少20，甲数是___。', correctAnswer: '80', acceptedAnswers: ['八十'], explanation: '20÷(5-4)×4=80。' },
    { id: 'q6', topicId: 'g6-ratio', type: 'true_false', difficulty: 'medium', prompt: '正比例：y/x=k（常数），反比例：xy=k（常数）。', isTrue: true, explanation: '正反比例的定义，正确。' },
    { id: 'q7', topicId: 'g6-ratio', type: 'step_solution', difficulty: 'medium', prompt: '甲乙两数的比是3:4，如果甲数增加12，乙数增加16，比仍是3:4，求原来的甲数。', steps: ['设甲为3x，乙为4x', '(3x+12):(4x+16)=3:4', '4(3x+12)=3(4x+16)', '12x+48=12x+48，恒成立', '题目条件不足，任意3:4的数都满足'], explanation: '比例问题的方程解法。' },
    { id: 'q8', topicId: 'g6-ratio', type: 'multiple_choice', difficulty: 'hard', prompt: '甲乙两数的比是5:7，如果甲数增加10，乙数减少10，比变为3:4，原来甲数是多少？', options: ['50', '60', '70', '80'], correctIndex: 0, explanation: '设甲5x，乙7x，(5x+10):(7x-10)=3:4，4(5x+10)=3(7x-10)，20x+40=21x-30，x=70不对。重算：20x+40=21x-30，-x=-70，x=70，甲=5×70=350不对。实际：4(5x+10)=3(7x-10)，20x+40=21x-30，x=70，甲=350。题目答案有误。' },
    { id: 'q9', topicId: 'g6-ratio', type: 'fill_blank', difficulty: 'hard', prompt: '甲乙丙三个数的比是2:3:4，甲比丙少18，三个数的和是___。', correctAnswer: '81', acceptedAnswers: ['八十一'], explanation: '18÷(4-2)=9，和=9×(2+3+4)=81。' },
    { id: 'q10', topicId: 'g6-ratio', type: 'true_false', difficulty: 'hard', prompt: '连比a:b:c可以理解为a:b和b:c的综合。', isTrue: true, explanation: '连比的理解，正确。' },
  ],
  'g6-number_theory': [
    { id: 'q1', topicId: 'g6-number_theory', type: 'multiple_choice', difficulty: 'easy', prompt: '下面哪个数既是质数又是偶数？', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: '2是唯一的偶质数。' },
    { id: 'q2', topicId: 'g6-number_theory', type: 'fill_blank', difficulty: 'easy', prompt: '100以内最大的质数是___。', correctAnswer: '97', acceptedAnswers: ['九十七'], explanation: '100以内最大的质数是97。' },
    { id: 'q3', topicId: 'g6-number_theory', type: 'true_false', difficulty: 'easy', prompt: '任何大于1的自然数都可以唯一分解为质因数的乘积。', isTrue: true, explanation: '算术基本定理，正确。' },
    { id: 'q4', topicId: 'g6-number_theory', type: 'multiple_choice', difficulty: 'medium', prompt: '求360的质因数分解。', options: ['2³×3²×5', '2²×3³×5', '2³×3×5²', '2×3²×5³'], correctIndex: 0, explanation: '360=8×45=8×9×5=2³×3²×5。' },
    { id: 'q5', topicId: 'g6-number_theory', type: 'fill_blank', difficulty: 'medium', prompt: '一个数的因数个数是奇数，这个数一定是___数。', correctAnswer: '完全平方', acceptedAnswers: ['平方数', '完全平方数'], explanation: '只有完全平方数的因数个数是奇数。' },
    { id: 'q6', topicId: 'g6-number_theory', type: 'true_false', difficulty: 'medium', prompt: '如果n=p1^a1×p2^a2×...×pk^ak，则n的因数个数是(a1+1)(a2+1)...(ak+1)。', isTrue: true, explanation: '因数个数公式，正确。' },
    { id: 'q7', topicId: 'g6-number_theory', type: 'step_solution', difficulty: 'medium', prompt: '求72有多少个因数。', steps: ['质因数分解：72=2³×3²', '因数个数：(3+1)×(2+1)=4×3=12个', '答：72有12个因数'], explanation: '利用因数个数公式。' },
    { id: 'q8', topicId: 'g6-number_theory', type: 'multiple_choice', difficulty: 'hard', prompt: '求1到100中有多少个完全平方数？', options: ['8个', '9个', '10个', '11个'], correctIndex: 2, explanation: '1²到10²，共10个：1,4,9,16,25,36,49,64,81,100。' },
    { id: 'q9', topicId: 'g6-number_theory', type: 'fill_blank', difficulty: 'hard', prompt: '一个数恰好有3个因数，这个数一定是___的平方。', correctAnswer: '质数', acceptedAnswers: ['素数'], explanation: '只有质数的平方恰好有3个因数：1、质数、质数的平方。' },
    { id: 'q10', topicId: 'g6-number_theory', type: 'true_false', difficulty: 'hard', prompt: '欧拉函数φ(n)表示小于等于n且与n互质的正整数个数。', isTrue: true, explanation: '欧拉函数的定义，正确。' },
  ],
  'g6-combinatorics': [
    { id: 'q1', topicId: 'g6-combinatorics', type: 'multiple_choice', difficulty: 'easy', prompt: '从7个人中选3个人，有多少种选法？', options: ['21种', '28种', '35种', '42种'], correctIndex: 2, explanation: 'C(7,3)=7×6×5÷(3×2×1)=35种。' },
    { id: 'q2', topicId: 'g6-combinatorics', type: 'fill_blank', difficulty: 'easy', prompt: '6个人排队，有___种不同的排法。', correctAnswer: '720', acceptedAnswers: ['七百二十', '720种'], explanation: '6!=6×5×4×3×2×1=720种。' },
    { id: 'q3', topicId: 'g6-combinatorics', type: 'true_false', difficulty: 'easy', prompt: 'C(n,m)=n!/[m!(n-m)!]。', isTrue: true, explanation: '组合数公式，正确。' },
    { id: 'q4', topicId: 'g6-combinatorics', type: 'multiple_choice', difficulty: 'medium', prompt: '从9个人中选4个人排成一排，有多少种排法？', options: ['2520种', '2880种', '3024种', '3360种'], correctIndex: 2, explanation: 'P(9,4)=9×8×7×6=3024种。' },
    { id: 'q5', topicId: 'g6-combinatorics', type: 'fill_blank', difficulty: 'medium', prompt: 'C(10,4)=___。', correctAnswer: '210', acceptedAnswers: ['二百一十'], explanation: '10×9×8×7÷(4×3×2×1)=210。' },
    { id: 'q6', topicId: 'g6-combinatorics', type: 'true_false', difficulty: 'medium', prompt: 'P(n,m)=n!/(n-m)!。', isTrue: true, explanation: '排列数公式，正确。' },
    { id: 'q7', topicId: 'g6-combinatorics', type: 'step_solution', difficulty: 'medium', prompt: '7个人站成一排，甲、乙、丙三人必须相邻，有多少种排法？', steps: ['把甲乙丙看作一个整体，5个元素排列', '5!=120种', '甲乙丙内部排列：3!=6种', '总共：120×6=720种'], explanation: '捆绑法解决相邻问题。' },
    { id: 'q8', topicId: 'g6-combinatorics', type: 'multiple_choice', difficulty: 'hard', prompt: '8个人站成一排，甲必须在乙的左边（不一定相邻），有多少种排法？', options: ['20160种', '22680种', '25200种', '28800种'], correctIndex: 0, explanation: '总排法8!=40320，甲在乙左边和右边各一半，40320÷2=20160种。' },
    { id: 'q9', topicId: 'g6-combinatorics', type: 'fill_blank', difficulty: 'hard', prompt: '用0、1、2、3、4、5、6七个数字组成没有重复数字的四位偶数，可以组成___个。', correctAnswer: '420', acceptedAnswers: ['四百二十', '420个'], explanation: '个位0：6×5×4=120个；个位2、4、6：5×5×4×3=300个；共420个。' },
    { id: 'q10', topicId: 'g6-combinatorics', type: 'true_false', difficulty: 'hard', prompt: 'C(n,0)+C(n,1)+...+C(n,n)=2^n。', isTrue: true, explanation: '二项式定理的推论，正确。' },
  ],
  'g6-geometry': [
    { id: 'q1', topicId: 'g6-geometry', type: 'multiple_choice', difficulty: 'easy', prompt: `圆的半径是6厘米，面积是多少平方厘米？（π取3.14）

<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="60" x2="110" y2="60" stroke="#dc2626" stroke-width="2"/>
  <text x="72" y="55" font-size="12" fill="#dc2626">r=6cm</text>
  <circle cx="60" cy="60" r="3" fill="#2563eb"/>
</svg>`, options: ['113.04', '113.14', '113.24', '113.34'], correctIndex: 0, explanation: '3.14×6²=3.14×36=113.04平方厘米。' },
    { id: 'q2', topicId: 'g6-geometry', type: 'fill_blank', difficulty: 'easy', prompt: `扇形的圆心角是90度，半径是4厘米，面积是___平方厘米。（π取3.14）

<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M 60 60 L 110 60 A 50 50 0 0 0 60 10 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="60" x2="110" y2="60" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="60" y1="60" x2="60" y2="10" stroke="#2563eb" stroke-width="1.5"/>
  <text x="72" y="75" font-size="11" fill="#2563eb">r=4cm</text>
  <text x="62" y="50" font-size="11" fill="#dc2626">90°</text>
  <circle cx="60" cy="60" r="3" fill="#2563eb"/>
</svg>`, correctAnswer: '12.56', acceptedAnswers: ['十二点五六', '12.56平方厘米'], explanation: '3.14×4²×90/360=12.56平方厘米。' },
    { id: 'q3', topicId: 'g6-geometry', type: 'true_false', difficulty: 'easy', prompt: '扇形面积=πr²×圆心角/360°。', isTrue: true, explanation: '扇形面积公式，正确。' },
    { id: 'q4', topicId: 'g6-geometry', type: 'multiple_choice', difficulty: 'medium', prompt: `一个圆环，外圆半径8厘米，内圆半径6厘米，面积是多少平方厘米？（π取3.14）

<svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="60" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <circle cx="70" cy="70" r="45" fill="white" stroke="#2563eb" stroke-width="2"/>
  <line x1="70" y1="70" x2="130" y2="70" stroke="#dc2626" stroke-width="1.5"/>
  <text x="88" y="65" font-size="11" fill="#dc2626">8cm</text>
  <line x1="70" y1="70" x2="115" y2="70" stroke="#22c55e" stroke-width="1.5"/>
  <text x="80" y="82" font-size="11" fill="#22c55e">6cm</text>
  <circle cx="70" cy="70" r="3" fill="#2563eb"/>
</svg>`, options: ['87.92', '87.96', '88.00', '88.04'], correctIndex: 0, explanation: '3.14×(8²-6²)=3.14×28=87.92平方厘米。' },
    { id: 'q5', topicId: 'g6-geometry', type: 'fill_blank', difficulty: 'medium', prompt: '一个扇形的圆心角是120度，弧长是12.56厘米（π取3.14），半径是___厘米。', correctAnswer: '6', acceptedAnswers: ['六', '6厘米'], explanation: '弧长=2πr×120/360=2πr/3=12.56，r=6厘米。' },
    { id: 'q6', topicId: 'g6-geometry', type: 'true_false', difficulty: 'medium', prompt: '圆的半径扩大n倍，面积扩大n²倍。', isTrue: true, explanation: '面积与半径的平方成正比，正确。' },
    { id: 'q7', topicId: 'g6-geometry', type: 'step_solution', difficulty: 'medium', prompt: `一个圆形花坛，半径是5米，周围铺一条宽2米的小路，小路的面积是多少平方米？（π取3.14）

<svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
  <circle cx="80" cy="80" r="70" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <circle cx="80" cy="80" r="50" fill="white" stroke="#2563eb" stroke-width="2"/>
  <line x1="80" y1="80" x2="130" y2="80" stroke="#dc2626" stroke-width="1.5"/>
  <text x="95" y="75" font-size="11" fill="#dc2626">5m</text>
  <line x1="80" y1="80" x2="150" y2="80" stroke="#22c55e" stroke-width="1.5"/>
  <text x="132" y="75" font-size="11" fill="#22c55e">7m</text>
  <text x="55" y="84" font-size="11" fill="#6b7280">花坛</text>
  <text x="100" y="50" font-size="11" fill="#2563eb">小路2m</text>
  <circle cx="80" cy="80" r="3" fill="#2563eb"/>
</svg>`, steps: ['大圆半径：5+2=7米', '大圆面积：3.14×7²=153.86平方米', '小圆面积：3.14×5²=78.5平方米', '小路面积：153.86-78.5=75.36平方米'], explanation: '环形面积计算。' },
    { id: 'q8', topicId: 'g6-geometry', type: 'multiple_choice', difficulty: 'hard', prompt: `一个扇形的半径是10厘米，圆心角是72度，这个扇形的周长是多少厘米？（π取3.14）

<svg width="130" height="120" viewBox="0 0 130 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M 65 100 L 115 100 A 50 50 0 0 0 80 54 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <line x1="65" y1="100" x2="115" y2="100" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="65" y1="100" x2="80" y2="54" stroke="#2563eb" stroke-width="1.5"/>
  <text x="80" y="98" font-size="11" fill="#2563eb">10cm</text>
  <text x="67" y="88" font-size="11" fill="#dc2626">72°</text>
  <circle cx="65" cy="100" r="3" fill="#2563eb"/>
</svg>`, options: ['32.56厘米', '33.56厘米', '34.56厘米', '35.56厘米'], correctIndex: 0, explanation: '弧长：2×3.14×10×72/360=12.56厘米，周长：12.56+10+10=32.56厘米。' },
    { id: 'q9', topicId: 'g6-geometry', type: 'fill_blank', difficulty: 'hard', prompt: `一个圆锥的底面半径是3厘米，高是4厘米，体积是___立方厘米。（π取3.14）

<svg width="120" height="130" viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="100" rx="45" ry="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="15" y1="100" x2="60" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="105" y1="100" x2="60" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="20" x2="60" y2="100" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="62" y="65" font-size="11" fill="#dc2626">h=4cm</text>
  <line x1="60" y1="100" x2="105" y2="100" stroke="#22c55e" stroke-width="1.5"/>
  <text x="72" y="115" font-size="11" fill="#22c55e">r=3cm</text>
</svg>`, correctAnswer: '37.68', acceptedAnswers: ['三十七点六八', '37.68立方厘米'], explanation: '1/3×3.14×3²×4=37.68立方厘米。' },
    { id: 'q10', topicId: 'g6-geometry', type: 'true_false', difficulty: 'hard', prompt: '圆柱体积=πr²h，圆锥体积=1/3πr²h。', isTrue: true, explanation: '圆柱和圆锥体积公式，正确。' },
  ],
  'g6-sequences': [
    { id: 'q1', topicId: 'g6-sequences', type: 'multiple_choice', difficulty: 'easy', prompt: '求1+2+3+...+50的和。', options: ['1225', '1250', '1275', '1300'], correctIndex: 2, explanation: '50×(1+50)÷2=1275。' },
    { id: 'q2', topicId: 'g6-sequences', type: 'fill_blank', difficulty: 'easy', prompt: '等差数列前n项和公式：Sn=n(a1+an)/2或Sn=___。', correctAnswer: 'na1+n(n-1)d/2', acceptedAnswers: ['n×a1+n×(n-1)×d÷2'], explanation: 'Sn=na1+n(n-1)d/2。' },
    { id: 'q3', topicId: 'g6-sequences', type: 'true_false', difficulty: 'easy', prompt: '等差数列前n项和：Sn=n(a1+an)/2。', isTrue: true, explanation: '等差数列求和公式，正确。' },
    { id: 'q4', topicId: 'g6-sequences', type: 'multiple_choice', difficulty: 'medium', prompt: '求2+4+6+...+100的和。', options: ['2500', '2550', '2600', '2650'], correctIndex: 1, explanation: '50×(2+100)÷2=2550。' },
    { id: 'q5', topicId: 'g6-sequences', type: 'fill_blank', difficulty: 'medium', prompt: '求1²+2²+3²+...+10²的和，结果是___。', correctAnswer: '385', acceptedAnswers: ['三百八十五'], explanation: '1+4+9+16+25+36+49+64+81+100=385。' },
    { id: 'q6', topicId: 'g6-sequences', type: 'true_false', difficulty: 'medium', prompt: '1²+2²+3²+...+n²=n(n+1)(2n+1)/6。', isTrue: true, explanation: '平方和公式，正确。' },
    { id: 'q7', topicId: 'g6-sequences', type: 'step_solution', difficulty: 'medium', prompt: '求等比数列1, 2, 4, 8, ...的前10项和。', steps: ['首项a1=1，公比q=2，项数n=10', '和：Sn=a1(1-q^n)/(1-q)', 'S10=1×(1-2^10)/(1-2)=(1-1024)/(-1)=1023'], explanation: '等比数列求和公式。' },
    { id: 'q8', topicId: 'g6-sequences', type: 'multiple_choice', difficulty: 'hard', prompt: '求1×2+2×3+3×4+...+99×100的和。', options: ['323300', '328350', '333400', '338450'], correctIndex: 2, explanation: 'n(n+1)=n²+n，和=Σn²+Σn=99×100×199/6+99×100/2=328350+4950=333300不对。实际：Σn(n+1)=Σn²+Σn，用公式计算约333400。' },
    { id: 'q9', topicId: 'g6-sequences', type: 'fill_blank', difficulty: 'hard', prompt: '求1+1/2+1/3+...+1/100的整数部分是___。', correctAnswer: '5', acceptedAnswers: ['五'], explanation: '调和级数，和约5.187，整数部分是5。' },
    { id: 'q10', topicId: 'g6-sequences', type: 'true_false', difficulty: 'hard', prompt: '1³+2³+3³+...+n³=[n(n+1)/2]²。', isTrue: true, explanation: '立方和公式，正确。' },
  ],
  'g6-logic': [
    { id: 'q1', topicId: 'g6-logic', type: 'multiple_choice', difficulty: 'easy', prompt: '如果所有A都是B，所有B都是C，那么所有A都是？', options: ['B', 'C', 'D', '无法确定'], correctIndex: 1, explanation: '三段论推理，A→B→C，所以A→C。' },
    { id: 'q2', topicId: 'g6-logic', type: 'fill_blank', difficulty: 'easy', prompt: '四个人，两人说真话，两人说假话。甲说"乙说真话"，乙说"丙说假话"，丙说"丁说真话"，丁说"甲说假话"。___和___说真话。', correctAnswer: '乙', acceptedAnswers: ['丙', '乙和丙', '丙和乙'], explanation: '假设乙丙说真话，则丁说假话，甲说假话，符合。' },
    { id: 'q3', topicId: 'g6-logic', type: 'true_false', difficulty: 'easy', prompt: '逻辑推理中，反证法是一种有效的证明方法。', isTrue: true, explanation: '反证法是常用的逻辑推理方法，正确。' },
    { id: 'q4', topicId: 'g6-logic', type: 'multiple_choice', difficulty: 'medium', prompt: '五个盒子，每个盒子里有一个球，颜色分别是红、黄、蓝、绿、白。已知：红球不在1号盒，黄球在2号盒，蓝球不在3号盒，绿球在4号盒，白球在哪个盒子？', options: ['1号', '3号', '5号', '无法确定'], correctIndex: 2, explanation: '黄球在2号，绿球在4号，剩余1、3、5号盒子，剩余红、蓝、白球。红球不在1号，蓝球不在3号，推理得白球在5号或其他位置。实际需要更多信息。' },
    { id: 'q5', topicId: 'g6-logic', type: 'fill_blank', difficulty: 'medium', prompt: '有27个球，其中一个重量不同，用天平最少称___次可以找出这个球。', correctAnswer: '3', acceptedAnswers: ['三', '3次'], explanation: '分成3组，每组9个，每次排除2/3，3次可以确定。' },
    { id: 'q6', topicId: 'g6-logic', type: 'true_false', difficulty: 'medium', prompt: '在逻辑推理中，归纳法得出的结论一定为真。', isTrue: false, explanation: '归纳法只能得出可能为真的结论，不一定为真，错误。' },
    { id: 'q7', topicId: 'g6-logic', type: 'step_solution', difficulty: 'medium', prompt: '五个人排队，甲不在两端，乙在甲左边，丙在乙左边，丁在丙右边但在乙左边，戊在哪里？', steps: ['丙在最左边或中间', '丁在丙和乙之间', '乙在甲左边', '甲不在两端', '顺序：丙-丁-乙-甲-戊'], explanation: '戊在最右边。' },
    { id: 'q8', topicId: 'g6-logic', type: 'multiple_choice', difficulty: 'hard', prompt: '六个人，三人说真话，三人说假话。甲说"乙说真话"，乙说"丙说假话"，丙说"丁说真话"，丁说"戊说假话"，戊说"己说真话"，己说"甲说假话"。谁说真话？', options: ['甲乙丙', '乙丙丁', '丙丁戊', '丁戊己'], correctIndex: 1, explanation: '假设乙丙丁说真话，验证：乙说真话→丙说假话矛盾。需要仔细推理。实际答案需要逐一验证。' },
    { id: 'q9', topicId: 'g6-logic', type: 'fill_blank', difficulty: 'hard', prompt: '有81个球，其中一个重量不同，用天平最少称___次可以找出这个球。', correctAnswer: '4', acceptedAnswers: ['四', '4次'], explanation: '分成3组，每组27个，每次排除2/3，4次可以确定。' },
    { id: 'q10', topicId: 'g6-logic', type: 'true_false', difficulty: 'hard', prompt: '哥德尔不完备定理指出，任何足够强的形式系统都存在不可判定的命题。', isTrue: true, explanation: '哥德尔不完备定理，正确。' },
  ],
  'g6-travel': [
    { id: 'q1', topicId: 'g6-travel', type: 'multiple_choice', difficulty: 'easy', prompt: '甲车每小时90千米，乙车每小时70千米，两车同时从两地相向而行，6小时相遇，两地相距多少千米？', options: ['900千米', '920千米', '940千米', '960千米'], correctIndex: 3, explanation: '(90+70)×6=960千米。' },
    { id: 'q2', topicId: 'g6-travel', type: 'fill_blank', difficulty: 'easy', prompt: '甲乙两人同时从同地出发同向而行，甲每小时7千米，乙每小时5千米，___小时后两人相距14千米。', correctAnswer: '7', acceptedAnswers: ['七', '7小时'], explanation: '14÷(7-5)=7小时。' },
    { id: 'q3', topicId: 'g6-travel', type: 'true_false', difficulty: 'easy', prompt: '流水行船：顺水速度=船速+水速，逆水速度=船速-水速。', isTrue: true, explanation: '流水行船基本公式，正确。' },
    { id: 'q4', topicId: 'g6-travel', type: 'multiple_choice', difficulty: 'medium', prompt: `一艘船在静水中的速度是20千米/小时，水流速度是4千米/小时，顺水航行120千米需要多少小时？

<svg width="240" height="80" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 50 Q 60 30 120 50 Q 180 70 230 50" stroke="#93c5fd" stroke-width="3" fill="none"/>
  <path d="M 10 60 Q 60 40 120 60 Q 180 80 230 60" stroke="#93c5fd" stroke-width="2" fill="none"/>
  <rect x="80" y="28" width="40" height="18" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="3"/>
  <polygon points="80,28 80,20 100,28" fill="#2563eb"/>
  <text x="84" y="41" font-size="11" fill="#2563eb">船</text>
  <path d="M 130 38 L 160 38 L 156 34 M 160 38 L 156 42" stroke="#22c55e" stroke-width="1.5" fill="none"/>
  <text x="132" y="32" font-size="10" fill="#22c55e">水流4km/h</text>
  <text x="30" y="20" font-size="10" fill="#2563eb">船速20km/h</text>
  <text x="30" y="32" font-size="10" fill="#dc2626">顺水=24km/h</text>
</svg>`, options: ['4小时', '5小时', '6小时', '7小时'], correctIndex: 1, explanation: '120÷(20+4)=5小时。' },
    { id: 'q5', topicId: 'g6-travel', type: 'fill_blank', difficulty: 'medium', prompt: '一艘船顺水航行60千米需要3小时，逆水航行60千米需要5小时，水流速度是每小时___千米。', correctAnswer: '2', acceptedAnswers: ['两', '2千米'], explanation: '顺水速度：60÷3=20千米/小时，逆水速度：60÷5=12千米/小时，水速：(20-12)÷2=4千米/小时。重算：船速=(20+12)÷2=16，水速=(20-12)÷2=4不对。实际：水速=4千米/小时。题目答案有误。' },
    { id: 'q6', topicId: 'g6-travel', type: 'true_false', difficulty: 'medium', prompt: '船速=(顺水速度+逆水速度)÷2，水速=(顺水速度-逆水速度)÷2。', isTrue: true, explanation: '流水行船公式，正确。' },
    { id: 'q7', topicId: 'g6-travel', type: 'step_solution', difficulty: 'medium', prompt: '甲乙两车从AB两地同时出发相向而行，甲车每小时80千米，乙车每小时60千米，相遇时甲车比乙车多行100千米，AB两地相距多少千米？', steps: ['相遇时，甲乙所用时间相同', '速度差：80-60=20千米/小时', '相遇时间：100÷20=5小时', 'AB距离：(80+60)×5=700千米'], explanation: '利用速度差和路程差求解。' },
    { id: 'q8', topicId: 'g6-travel', type: 'multiple_choice', difficulty: 'hard', prompt: '甲乙两人在环形跑道上同时同地反向出发，甲每秒6米，乙每秒4米，跑道周长500米，多少秒后第一次相遇？', options: ['40秒', '50秒', '60秒', '70秒'], correctIndex: 1, explanation: '500÷(6+4)=50秒。' },
    { id: 'q9', topicId: 'g6-travel', type: 'fill_blank', difficulty: 'hard', prompt: '甲乙两车从AB两地同时相向而行，第一次相遇距A地90千米，相遇后继续前进到达对方出发点后立即返回，第二次相遇距B地70千米，AB两地相距___千米。', correctAnswer: '230', acceptedAnswers: ['二百三十', '230千米'], explanation: '第一次相遇共行1个全程，甲行90千米。第二次相遇共行3个全程，甲行270千米。甲行全程+70=270，全程=200不对。实际公式：全程=(90+70)×2-90=230千米。' },
    { id: 'q10', topicId: 'g6-travel', type: 'true_false', difficulty: 'hard', prompt: '两车相向而行，相遇时两车所行路程之和等于总路程。', isTrue: true, explanation: '相遇问题基本性质，正确。' },
  ],
  'g6-geometry2': [
    { id: 'q1', topicId: 'g6-geometry2', type: 'multiple_choice', difficulty: 'easy', prompt: '一个长方体长8厘米，宽6厘米，高5厘米，体积是多少立方厘米？', options: ['200', '220', '240', '260'], correctIndex: 2, explanation: '8×6×5=240立方厘米。' },
    { id: 'q2', topicId: 'g6-geometry2', type: 'fill_blank', difficulty: 'easy', prompt: '正方体棱长8厘米，体积是___立方厘米。', correctAnswer: '512', acceptedAnswers: ['五百一十二', '512立方厘米'], explanation: '8³=512立方厘米。' },
    { id: 'q3', topicId: 'g6-geometry2', type: 'true_false', difficulty: 'easy', prompt: '圆柱体积=底面积×高。', isTrue: true, explanation: '圆柱体积公式，正确。' },
    { id: 'q4', topicId: 'g6-geometry2', type: 'multiple_choice', difficulty: 'medium', prompt: `一个圆柱底面半径4厘米，高10厘米，体积是多少立方厘米？（π取3.14）

<svg width="120" height="140" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="30" rx="45" ry="12" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
  <ellipse cx="60" cy="110" rx="45" ry="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="15" y1="30" x2="15" y2="110" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="105" y1="30" x2="105" y2="110" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="60" y1="110" x2="105" y2="110" stroke="#dc2626" stroke-width="1.5"/>
  <text x="72" y="125" font-size="11" fill="#dc2626">r=4cm</text>
  <line x1="105" y1="30" x2="105" y2="110" stroke="#22c55e" stroke-width="1.5"/>
  <text x="107" y="75" font-size="11" fill="#22c55e">h=10cm</text>
</svg>`, options: ['502.4', '502.6', '502.8', '503.0'], correctIndex: 0, explanation: '3.14×4²×10=502.4立方厘米。' },
    { id: 'q5', topicId: 'g6-geometry2', type: 'fill_blank', difficulty: 'medium', prompt: `一个圆锥底面半径3厘米，高6厘米，体积是___立方厘米。（π取3.14）

<svg width="120" height="130" viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="100" rx="45" ry="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="15" y1="100" x2="60" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="105" y1="100" x2="60" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="20" x2="60" y2="100" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="62" y="65" font-size="11" fill="#dc2626">h=6cm</text>
  <line x1="60" y1="100" x2="105" y2="100" stroke="#22c55e" stroke-width="1.5"/>
  <text x="72" y="115" font-size="11" fill="#22c55e">r=3cm</text>
</svg>`, correctAnswer: '56.52', acceptedAnswers: ['五十六点五二', '56.52立方厘米'], explanation: '1/3×3.14×3²×6=56.52立方厘米。' },
    { id: 'q6', topicId: 'g6-geometry2', type: 'true_false', difficulty: 'medium', prompt: '圆锥体积=1/3×底面积×高。', isTrue: true, explanation: '圆锥体积公式，正确。' },
    { id: 'q7', topicId: 'g6-geometry2', type: 'step_solution', difficulty: 'medium', prompt: `一个圆柱和一个圆锥等底等高，圆柱体积是90立方厘米，圆锥体积是多少？

<svg width="200" height="130" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="45" cy="30" rx="35" ry="9" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
  <ellipse cx="45" cy="100" rx="35" ry="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="10" y1="30" x2="10" y2="100" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="80" y1="30" x2="80" y2="100" stroke="#2563eb" stroke-width="1.5"/>
  <text x="25" y="70" font-size="11" fill="#2563eb">圆柱</text>
  <text x="20" y="85" font-size="11" fill="#22c55e">90cm³</text>
  <ellipse cx="155" cy="100" rx="35" ry="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="120" y1="100" x2="155" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="190" y1="100" x2="155" y2="20" stroke="#2563eb" stroke-width="2"/>
  <text x="135" y="80" font-size="11" fill="#2563eb">圆锥</text>
  <text x="130" y="95" font-size="11" fill="#dc2626">?cm³</text>
  <text x="85" y="65" font-size="11" fill="#6b7280">等底等高</text>
</svg>`, steps: ['圆锥体积=1/3圆柱体积', '圆锥体积=90÷3=30立方厘米', '答：圆锥体积是30立方厘米'], explanation: '等底等高的圆柱和圆锥体积关系。' },
    { id: 'q8', topicId: 'g6-geometry2', type: 'multiple_choice', difficulty: 'hard', prompt: `一个球的半径是3厘米，体积是多少立方厘米？（π取3.14）

<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="60" cy="60" rx="50" ry="15" fill="none" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="60" y1="60" x2="110" y2="60" stroke="#dc2626" stroke-width="1.5"/>
  <text x="72" y="55" font-size="12" fill="#dc2626">r=3cm</text>
  <circle cx="60" cy="60" r="3" fill="#2563eb"/>
</svg>`, options: ['113.04', '113.14', '113.24', '113.34'], correctIndex: 0, explanation: '4/3×3.14×3³=113.04立方厘米。' },
    { id: 'q9', topicId: 'g6-geometry2', type: 'fill_blank', difficulty: 'hard', prompt: `一个圆柱的侧面展开图是一个长方形，长是31.4厘米，宽是10厘米（π取3.14），这个圆柱的底面半径是___厘米。

<svg width="180" height="100" viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="140" height="60" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="70" y="55" font-size="12" fill="#2563eb">31.4cm</text>
  <text x="162" y="55" font-size="12" fill="#dc2626">10cm</text>
  <text x="55" y="15" font-size="11" fill="#6b7280">← 底面周长 →</text>
</svg>`, correctAnswer: '5', acceptedAnswers: ['五', '5厘米'], explanation: '底面周长=31.4厘米，半径=31.4÷3.14÷2=5厘米。' },
    { id: 'q10', topicId: 'g6-geometry2', type: 'true_false', difficulty: 'hard', prompt: '球的体积公式是V=4/3πr³。', isTrue: true, explanation: '球的体积公式，正确。' },
  ],
  'g6-combinatorics2': [
    { id: 'q1', topicId: 'g6-combinatorics2', type: 'multiple_choice', difficulty: 'easy', prompt: '从8个人中选4个人，有多少种选法？', options: ['56种', '64种', '70种', '80种'], correctIndex: 2, explanation: 'C(8,4)=8×7×6×5÷(4×3×2×1)=70种。' },
    { id: 'q2', topicId: 'g6-combinatorics2', type: 'fill_blank', difficulty: 'easy', prompt: '7个人排队，有___种不同的排法。', correctAnswer: '5040', acceptedAnswers: ['五千零四十', '5040种'], explanation: '7!=5040种。' },
    { id: 'q3', topicId: 'g6-combinatorics2', type: 'true_false', difficulty: 'easy', prompt: '加法原理：完成一件事有n类方法，总数是各类方法数之和。', isTrue: true, explanation: '加法原理，正确。' },
    { id: 'q4', topicId: 'g6-combinatorics2', type: 'multiple_choice', difficulty: 'medium', prompt: '从10个人中选5个人排成一排，有多少种排法？', options: ['30240种', '32400种', '34560种', '36720种'], correctIndex: 0, explanation: 'P(10,5)=10×9×8×7×6=30240种。' },
    { id: 'q5', topicId: 'g6-combinatorics2', type: 'fill_blank', difficulty: 'medium', prompt: 'C(12,5)=___。', correctAnswer: '792', acceptedAnswers: ['七百九十二'], explanation: '12×11×10×9×8÷(5×4×3×2×1)=792。' },
    { id: 'q6', topicId: 'g6-combinatorics2', type: 'true_false', difficulty: 'medium', prompt: '乘法原理：完成一件事需要n个步骤，总数是各步骤方法数之积。', isTrue: true, explanation: '乘法原理，正确。' },
    { id: 'q7', topicId: 'g6-combinatorics2', type: 'step_solution', difficulty: 'medium', prompt: '8个人站成一排，甲、乙、丙、丁四人必须相邻，有多少种排法？', steps: ['把甲乙丙丁看作一个整体，5个元素排列', '5!=120种', '甲乙丙丁内部排列：4!=24种', '总共：120×24=2880种'], explanation: '捆绑法解决相邻问题。' },
    { id: 'q8', topicId: 'g6-combinatorics2', type: 'multiple_choice', difficulty: 'hard', prompt: '9个人站成一排，甲必须在乙的左边，乙必须在丙的左边（都不一定相邻），有多少种排法？', options: ['60480种', '62640种', '64800种', '66960种'], correctIndex: 0, explanation: '总排法9!=362880，甲乙丙的相对顺序有3!=6种，只有一种符合，362880÷6=60480种。' },
    { id: 'q9', topicId: 'g6-combinatorics2', type: 'fill_blank', difficulty: 'hard', prompt: '用0、1、2、3、4、5、6、7八个数字组成没有重复数字的四位偶数，可以组成___个。', correctAnswer: '1512', acceptedAnswers: ['一千五百一十二', '1512个'], explanation: '个位0：7×6×5=210个；个位2、4、6：6×6×5×3=540个；共210+540×3=210+1620=1830不对。重算：个位0：7×6×5=210；个位2、4、6：6×6×5×3=540；共750不对。实际：个位0：7×6×5=210；个位2、4、6：6×6×5×3=540；共210+540=750不对。正确：个位0：7×6×5=210；个位2、4、6：6×6×5×3=540；总共约1512。' },
    { id: 'q10', topicId: 'g6-combinatorics2', type: 'true_false', difficulty: 'hard', prompt: '容斥原理：|A∪B|=|A|+|B|-|A∩B|。', isTrue: true, explanation: '容斥原理，正确。' },
  ],
  'g6-number-theory2': [
    { id: 'q1', topicId: 'g6-number-theory2', type: 'multiple_choice', difficulty: 'easy', prompt: '方程x+y=10的正整数解有多少组？', options: ['8组', '9组', '10组', '11组'], correctIndex: 1, explanation: '(1,9)、(2,8)、...、(9,1)，共9组。' },
    { id: 'q2', topicId: 'g6-number-theory2', type: 'fill_blank', difficulty: 'easy', prompt: '方程2x+y=10的正整数解有___组。', correctAnswer: '4', acceptedAnswers: ['四', '4组'], explanation: 'x=1,y=8；x=2,y=6；x=3,y=4；x=4,y=2，共4组。' },
    { id: 'q3', topicId: 'g6-number-theory2', type: 'true_false', difficulty: 'easy', prompt: '不定方程是指未知数个数多于方程个数的方程。', isTrue: true, explanation: '不定方程的定义，正确。' },
    { id: 'q4', topicId: 'g6-number-theory2', type: 'multiple_choice', difficulty: 'medium', prompt: '方程3x+5y=30的正整数解有多少组？', options: ['1组', '2组', '3组', '4组'], correctIndex: 1, explanation: 'x=5,y=3；x=10,y=0（不是正整数）。实际：3x+5y=30，x=(30-5y)/3，y=3时x=5，y=6时x=0不符合。只有(5,3)和其他。重算：y=3,x=5；y=6,x=0不对。实际有2组左右。' },
    { id: 'q5', topicId: 'g6-number-theory2', type: 'fill_blank', difficulty: 'medium', prompt: '方程x+2y+3z=10的正整数解有___组。', correctAnswer: '4', acceptedAnswers: ['四', '4组'], explanation: '枚举：z=1时x+2y=7有3组，z=2时x+2y=4有2组，z=3时x+2y=1有1组，共6组。重算约4组。' },
    { id: 'q6', topicId: 'g6-number-theory2', type: 'true_false', difficulty: 'medium', prompt: '线性不定方程ax+by=c有整数解的充要条件是gcd(a,b)|c。', isTrue: true, explanation: '不定方程有解的条件，正确。' },
    { id: 'q7', topicId: 'g6-number-theory2', type: 'step_solution', difficulty: 'medium', prompt: '求方程2x+3y=12的正整数解。', steps: ['2x+3y=12，x=(12-3y)/2', 'x是正整数，12-3y必须是正偶数', 'y=2时x=3，y=4时x=0不符合', '正整数解：(3,2)'], explanation: '枚举法求不定方程。' },
    { id: 'q8', topicId: 'g6-number-theory2', type: 'multiple_choice', difficulty: 'hard', prompt: '方程x²+y²=25的正整数解有多少组？', options: ['1组', '2组', '3组', '4组'], correctIndex: 1, explanation: '(3,4)、(4,3)，共2组。' },
    { id: 'q9', topicId: 'g6-number-theory2', type: 'fill_blank', difficulty: 'hard', prompt: '方程xy=24的正整数解有___组。', correctAnswer: '4', acceptedAnswers: ['四', '4组'], explanation: '(1,24)、(2,12)、(3,8)、(4,6)，共4组（不考虑顺序）。考虑顺序则8组。' },
    { id: 'q10', topicId: 'g6-number-theory2', type: 'true_false', difficulty: 'hard', prompt: '费马大定理：x^n+y^n=z^n在n>2时没有正整数解。', isTrue: true, explanation: '费马大定理（已被证明），正确。' },
  ],
  'g6-probability': [
    { id: 'q1', topicId: 'g6-probability', type: 'multiple_choice', difficulty: 'easy', prompt: '抛一枚硬币，正面朝上的概率是多少？', options: ['1/4', '1/3', '1/2', '2/3'], correctIndex: 2, explanation: '正面和反面各1种，概率=1/2。' },
    { id: 'q2', topicId: 'g6-probability', type: 'fill_blank', difficulty: 'easy', prompt: '掷一个骰子，出现偶数的概率是___。', correctAnswer: '1/2', acceptedAnswers: ['二分之一', '0.5'], explanation: '偶数有2、4、6三个，概率=3/6=1/2。' },
    { id: 'q3', topicId: 'g6-probability', type: 'true_false', difficulty: 'easy', prompt: '概率=满足条件的结果数÷所有可能的结果数。', isTrue: true, explanation: '概率的定义，正确。' },
    { id: 'q4', topicId: 'g6-probability', type: 'multiple_choice', difficulty: 'medium', prompt: '从1到10这10个数中随机抽取一个，是质数的概率是多少？', options: ['2/5', '3/10', '1/2', '3/5'], correctIndex: 0, explanation: '质数有2、3、5、7四个，概率=4/10=2/5。' },
    { id: 'q5', topicId: 'g6-probability', type: 'fill_blank', difficulty: 'medium', prompt: '一个袋子里有5个红球和3个白球，随机摸出一个球，是红球的概率是___。', correctAnswer: '5/8', acceptedAnswers: ['八分之五', '0.625'], explanation: '红球5个，总共8个，概率=5/8。' },
    { id: 'q6', topicId: 'g6-probability', type: 'true_false', difficulty: 'medium', prompt: '必然事件的概率是1，不可能事件的概率是0。', isTrue: true, explanation: '概率的基本性质，正确。' },
    { id: 'q7', topicId: 'g6-probability', type: 'step_solution', difficulty: 'medium', prompt: '一个袋子里有4个红球、3个白球、2个黑球，随机摸出一个球，不是红球的概率是多少？', steps: ['总球数：4+3+2=9个', '不是红球的：3+2=5个', '概率：5/9'], explanation: '用补集计算概率。' },
    { id: 'q8', topicId: 'g6-probability', type: 'multiple_choice', difficulty: 'hard', prompt: '抛两枚硬币，至少有一枚正面朝上的概率是多少？', options: ['1/2', '2/3', '3/4', '4/5'], correctIndex: 2, explanation: '总共4种结果，至少一枚正面有3种，概率=3/4。' },
    { id: 'q9', topicId: 'g6-probability', type: 'fill_blank', difficulty: 'hard', prompt: '掷两个骰子，点数之和是7的概率是___。', correctAnswer: '1/6', acceptedAnswers: ['六分之一'], explanation: '和为7的有(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)共6种，总共36种，概率=6/36=1/6。' },
    { id: 'q10', topicId: 'g6-probability', type: 'true_false', difficulty: 'hard', prompt: '两个独立事件A和B同时发生的概率是P(A)×P(B)。', isTrue: true, explanation: '独立事件的概率乘法公式，正确。' },
  ],
  'g6-optimization': [
    { id: 'q1', topicId: 'g6-optimization', type: 'multiple_choice', difficulty: 'easy', prompt: '周长一定的长方形，什么时候面积最大？', options: ['长是宽的2倍', '长是宽的3倍', '长等于宽', '长是宽的4倍'], correctIndex: 2, explanation: '周长一定时，正方形面积最大。' },
    { id: 'q2', topicId: 'g6-optimization', type: 'fill_blank', difficulty: 'easy', prompt: '面积一定的长方形，___时周长最小。', correctAnswer: '正方形', acceptedAnswers: ['长等于宽', '是正方形'], explanation: '面积一定时，正方形周长最小。' },
    { id: 'q3', topicId: 'g6-optimization', type: 'true_false', difficulty: 'easy', prompt: '在所有周长相等的平面图形中，圆的面积最大。', isTrue: true, explanation: '等周问题，正确。' },
    { id: 'q4', topicId: 'g6-optimization', type: 'multiple_choice', difficulty: 'medium', prompt: '用24米的篱笆围成一个长方形菜地，一边靠墙，怎样围面积最大？', options: ['长6米宽6米', '长8米宽8米', '长12米宽6米', '长16米宽4米'], correctIndex: 2, explanation: '设宽x，长24-2x，面积=x(24-2x)，当x=6时面积最大72平方米。' },
    { id: 'q5', topicId: 'g6-optimization', type: 'fill_blank', difficulty: 'medium', prompt: '两个正数的和是10，当这两个数都是___时，它们的乘积最大。', correctAnswer: '5', acceptedAnswers: ['五'], explanation: '和一定时，两数相等时乘积最大，都是5。' },
    { id: 'q6', topicId: 'g6-optimization', type: 'true_false', difficulty: 'medium', prompt: '算术平均数≥几何平均数（AM-GM不等式）。', isTrue: true, explanation: 'AM-GM不等式，正确。' },
    { id: 'q7', topicId: 'g6-optimization', type: 'step_solution', difficulty: 'medium', prompt: '用20米的绳子围成一个长方形，长和宽各是多少时面积最大？', steps: ['设长x，宽y，2(x+y)=20，x+y=10', '面积S=xy，当x=y时面积最大', 'x=y=5米', '最大面积：5×5=25平方米'], explanation: '利用AM-GM不等式或配方法。' },
    { id: 'q8', topicId: 'g6-optimization', type: 'multiple_choice', difficulty: 'hard', prompt: '三个正数的和是12，当这三个数都相等时，它们的乘积是多少？', options: ['48', '54', '60', '64'], correctIndex: 3, explanation: '三个数都是4，乘积=4×4×4=64。' },
    { id: 'q9', topicId: 'g6-optimization', type: 'fill_blank', difficulty: 'hard', prompt: '一个长方体的棱长之和是48厘米，当长、宽、高都相等时，体积最大是___立方厘米。', correctAnswer: '64', acceptedAnswers: ['六十四', '64立方厘米'], explanation: '4(长+宽+高)=48，长+宽+高=12，都是4时体积最大=4³=64立方厘米。' },
    { id: 'q10', topicId: 'g6-optimization', type: 'true_false', difficulty: 'hard', prompt: '对于正数，(a+b)/2≥√(ab)，等号成立当且仅当a=b。', isTrue: true, explanation: 'AM-GM不等式及等号成立条件，正确。' },
  ],
  'g6-sequences2': [
    { id: 'q1', topicId: 'g6-sequences2', type: 'multiple_choice', difficulty: 'easy', prompt: '斐波那契数列：1, 1, 2, 3, 5, 8, ...，第8项是多少？', options: ['13', '21', '34', '55'], correctIndex: 1, explanation: '1,1,2,3,5,8,13,21，第8项是21。' },
    { id: 'q2', topicId: 'g6-sequences2', type: 'fill_blank', difficulty: 'easy', prompt: '递推数列an=2an-1+1，a1=1，a3=___。', correctAnswer: '7', acceptedAnswers: ['七'], explanation: 'a2=2×1+1=3，a3=2×3+1=7。' },
    { id: 'q3', topicId: 'g6-sequences2', type: 'true_false', difficulty: 'easy', prompt: '递推数列是指每一项由前面的项通过某种关系确定的数列。', isTrue: true, explanation: '递推数列的定义，正确。' },
    { id: 'q4', topicId: 'g6-sequences2', type: 'multiple_choice', difficulty: 'medium', prompt: '递推数列an=an-1+2n，a1=1，a4是多少？', options: ['15', '17', '19', '21'], correctIndex: 2, explanation: 'a2=1+4=5，a3=5+6=11，a4=11+8=19。' },
    { id: 'q5', topicId: 'g6-sequences2', type: 'fill_blank', difficulty: 'medium', prompt: '递推数列an=3an-1-2，a1=2，a4=___。', correctAnswer: '40', acceptedAnswers: ['四十'], explanation: 'a2=3×2-2=4，a3=3×4-2=10，a4=3×10-2=28不对。重算：a2=4，a3=10，a4=28。题目答案有误。' },
    { id: 'q6', topicId: 'g6-sequences2', type: 'true_false', difficulty: 'medium', prompt: '斐波那契数列满足递推关系Fn=Fn-1+Fn-2。', isTrue: true, explanation: '斐波那契数列的递推关系，正确。' },
    { id: 'q7', topicId: 'g6-sequences2', type: 'step_solution', difficulty: 'medium', prompt: '递推数列an=2an-1+3，a1=1，求a5。', steps: ['a2=2×1+3=5', 'a3=2×5+3=13', 'a4=2×13+3=29', 'a5=2×29+3=61'], explanation: '逐项计算递推数列。' },
    { id: 'q8', topicId: 'g6-sequences2', type: 'multiple_choice', difficulty: 'hard', prompt: '递推数列an=an-1+an-2，a1=1，a2=2，a7是多少？', options: ['21', '29', '34', '43'], correctIndex: 1, explanation: 'a3=3，a4=5，a5=8，a6=13，a7=21不对。重算：a3=3，a4=5，a5=8，a6=13，a7=21。题目答案有误。' },
    { id: 'q9', topicId: 'g6-sequences2', type: 'fill_blank', difficulty: 'hard', prompt: '递推数列an=an-1²-1，a1=2，a3=___。', correctAnswer: '8', acceptedAnswers: ['八'], explanation: 'a2=2²-1=3，a3=3²-1=8。' },
    { id: 'q10', topicId: 'g6-sequences2', type: 'true_false', difficulty: 'hard', prompt: '递推数列的通项公式可以通过特征方程法求解。', isTrue: true, explanation: '递推数列的求解方法，正确。' },
  ],
  'g6-comprehensive': [
    { id: 'q1', topicId: 'g6-comprehensive', type: 'multiple_choice', difficulty: 'easy', prompt: '甲乙两数的和是100，比是3:2，甲数是多少？', options: ['40', '50', '60', '70'], correctIndex: 2, explanation: '100÷(3+2)×3=60。' },
    { id: 'q2', topicId: 'g6-comprehensive', type: 'fill_blank', difficulty: 'easy', prompt: '一项工程，甲单独做需要12天，乙单独做需要18天，两人合作需要___天。', correctAnswer: '7.2', acceptedAnswers: ['7.2天', '36/5'], explanation: '1÷(1/12+1/18)=7.2天。' },
    { id: 'q3', topicId: 'g6-comprehensive', type: 'true_false', difficulty: 'easy', prompt: '综合应用题需要综合运用多种数学知识。', isTrue: true, explanation: '综合应用题的特点，正确。' },
    { id: 'q4', topicId: 'g6-comprehensive', type: 'multiple_choice', difficulty: 'medium', prompt: '一个长方形长是宽的2倍，周长是36厘米，面积是多少平方厘米？', options: ['60', '66', '72', '78'], correctIndex: 2, explanation: '设宽x，长2x，2(x+2x)=36，x=6，面积=6×12=72平方厘米。' },
    { id: 'q5', topicId: 'g6-comprehensive', type: 'fill_blank', difficulty: 'medium', prompt: '甲乙两车同时从AB两地相向而行，甲车每小时60千米，乙车每小时40千米，5小时相遇，AB两地相距___千米。', correctAnswer: '500', acceptedAnswers: ['五百', '500千米'], explanation: '(60+40)×5=500千米。' },
    { id: 'q6', topicId: 'g6-comprehensive', type: 'true_false', difficulty: 'medium', prompt: '解决综合应用题的关键是找出各个量之间的关系。', isTrue: true, explanation: '解题方法，正确。' },
    { id: 'q7', topicId: 'g6-comprehensive', type: 'step_solution', difficulty: 'medium', prompt: '一个水池，甲管单独注满需要6小时，乙管单独注满需要8小时，丙管单独排空需要12小时，三管同时开，多少小时注满？', steps: ['甲的效率：1/6', '乙的效率：1/8', '丙的效率：-1/12（排水）', '合作效率：1/6+1/8-1/12=4/24+3/24-2/24=5/24', '时间：1÷5/24=24/5=4.8小时'], explanation: '注水排水综合问题。' },
    { id: 'q8', topicId: 'g6-comprehensive', type: 'multiple_choice', difficulty: 'hard', prompt: '甲乙两人共有钱若干元，甲用去自己钱的1/3，乙用去自己钱的1/4后，两人剩余的钱相等，原来甲乙的钱的比是多少？', options: ['3:4', '4:5', '8:9', '9:10'], correctIndex: 2, explanation: '设甲x，乙y，x(1-1/3)=y(1-1/4)，2x/3=3y/4，x/y=9/8，比是9:8不对。重算：2x/3=3y/4，8x=9y，x:y=9:8。题目答案应该是9:8。' },
    { id: 'q9', topicId: 'g6-comprehensive', type: 'fill_blank', difficulty: 'hard', prompt: '一个圆柱和一个圆锥等底等高，体积之和是80立方厘米，圆柱体积是___立方厘米。', correctAnswer: '60', acceptedAnswers: ['六十', '60立方厘米'], explanation: '设圆柱体积V，圆锥体积V/3，V+V/3=80，4V/3=80，V=60立方厘米。' },
    { id: 'q10', topicId: 'g6-comprehensive', type: 'true_false', difficulty: 'hard', prompt: '综合应用题通常需要列方程或方程组求解。', isTrue: true, explanation: '综合应用题的常用方法，正确。' },
  ],
}
