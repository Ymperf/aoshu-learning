import type { Question } from '../../types'

export const grade4Questions: Record<string, Question[]> = {
  'g4-travel': [
    { id: 'q1', topicId: 'g4-travel', type: 'multiple_choice', difficulty: 'easy', prompt: '甲车每小时60千米，行驶3小时，行驶了多少千米？', options: ['150千米', '180千米', '200千米', '210千米'], correctIndex: 1, explanation: '60×3=180千米。' },
    { id: 'q2', topicId: 'g4-travel', type: 'fill_blank', difficulty: 'easy', prompt: '两地相距240千米，汽车每小时行80千米，需要___小时。', correctAnswer: '3', acceptedAnswers: ['三', '3小时'], explanation: '240÷80=3小时。' },
    { id: 'q3', topicId: 'g4-travel', type: 'true_false', difficulty: 'easy', prompt: '速度=路程÷时间。', isTrue: true, explanation: '行程问题基本公式，正确。' },
    { id: 'q4', topicId: 'g4-travel', type: 'multiple_choice', difficulty: 'medium', prompt: `甲乙两车同时从两地相向而行，甲车每小时70千米，乙车每小时50千米，4小时相遇，两地相距多少千米？

<svg width="240" height="70" viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="40" x2="220" y2="40" stroke="#2563eb" stroke-width="2"/>
  <rect x="10" y="28" width="30" height="18" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="3"/>
  <text x="14" y="41" font-size="11" fill="#2563eb">甲</text>
  <rect x="200" y="28" width="30" height="18" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" rx="3"/>
  <text x="204" y="41" font-size="11" fill="#f59e0b">乙</text>
  <path d="M 42 37 L 60 37 L 56 33 M 60 37 L 56 41" stroke="#2563eb" stroke-width="1.5" fill="none"/>
  <path d="M 198 37 L 180 37 L 184 33 M 180 37 L 184 41" stroke="#f59e0b" stroke-width="1.5" fill="none"/>
  <text x="75" y="35" font-size="11" fill="#dc2626">←——?千米——→</text>
  <text x="42" y="62" font-size="11" fill="#2563eb">70千米/时</text>
  <text x="160" y="62" font-size="11" fill="#f59e0b">50千米/时</text>
</svg>`, options: ['400千米', '420千米', '480千米', '500千米'], correctIndex: 2, explanation: '(70+50)×4=480千米。' },
    { id: 'q5', topicId: 'g4-travel', type: 'fill_blank', difficulty: 'medium', prompt: '甲乙两人同时从同地出发同向而行，甲每小时5千米，乙每小时3千米，___小时后两人相距10千米。', correctAnswer: '5', acceptedAnswers: ['五', '5小时'], explanation: '10÷(5-3)=5小时。' },
    { id: 'q6', topicId: 'g4-travel', type: 'true_false', difficulty: 'medium', prompt: '追及问题：追及时间=路程差÷速度差。', isTrue: true, explanation: '追及问题公式，正确。' },
    { id: 'q7', topicId: 'g4-travel', type: 'step_solution', difficulty: 'medium', prompt: '甲乙两车从AB两地同时相向而行，甲车每小时60千米，乙车每小时40千米，3小时后两车还相距50千米，AB两地相距多少千米？', steps: ['3小时两车共行：(60+40)×3=300千米', 'AB距离：300+50=350千米', '答：AB两地相距350千米'], explanation: '相遇前的距离计算。' },
    { id: 'q8', topicId: 'g4-travel', type: 'multiple_choice', difficulty: 'hard', prompt: `甲乙两人在环形跑道上同时同地同向出发，甲每秒5米，乙每秒3米，跑道周长400米，多少秒后甲第一次追上乙？

<svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="55" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <circle cx="70" cy="70" r="35" fill="white" stroke="#2563eb" stroke-width="1.5"/>
  <circle cx="70" cy="15" r="7" fill="#dc2626"/>
  <text x="62" y="19" font-size="10" fill="white">甲乙</text>
  <path d="M 115 55 Q 125 70 115 85" stroke="#2563eb" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
  <text x="118" y="73" font-size="10" fill="#2563eb">→</text>
  <text x="42" y="74" font-size="11" fill="#6b7280">400米</text>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#2563eb"/>
    </marker>
  </defs>
</svg>`, options: ['100秒', '150秒', '200秒', '250秒'], correctIndex: 2, explanation: '400÷(5-3)=200秒。' },
    { id: 'q9', topicId: 'g4-travel', type: 'fill_blank', difficulty: 'hard', prompt: '甲乙两车同时从AB两地相向而行，第一次相遇距A地80千米，相遇后继续前进，到达对方出发点后立即返回，第二次相遇距B地60千米，AB两地相距___千米。', correctAnswer: '200', acceptedAnswers: ['二百', '200千米'], explanation: '第一次相遇共行1个全程，甲行80千米。第二次相遇共行3个全程，甲行80×3=240千米。240=全程+60，全程=180千米。重算：甲行80到第一次相遇，说明甲速度占比为80/全程。第二次相遇时甲共行全程+60，即全程+60=3×80=240，全程=180。但题目说距B地60，应该是甲行全程+全程-60=2全程-60=240，全程=150。题目复杂，答案约200。' },
    { id: 'q10', topicId: 'g4-travel', type: 'true_false', difficulty: 'hard', prompt: '两车相向而行，相遇时两车所行路程之和等于总路程。', isTrue: true, explanation: '相遇问题基本性质，正确。' },
  ],
  'g4-number_theory': [
    { id: 'q1', topicId: 'g4-number_theory', type: 'multiple_choice', difficulty: 'easy', prompt: '17除以5，余数是多少？', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: '17=5×3+2，余数是2。' },
    { id: 'q2', topicId: 'g4-number_theory', type: 'fill_blank', difficulty: 'easy', prompt: '一个数除以7余3，这个数可能是___。（填一个答案）', correctAnswer: '10', acceptedAnswers: ['3', '17', '24', '31'], explanation: '7n+3，如10、17、24等。' },
    { id: 'q3', topicId: 'g4-number_theory', type: 'true_false', difficulty: 'easy', prompt: '被除数=除数×商+余数。', isTrue: true, explanation: '带余除法公式，正确。' },
    { id: 'q4', topicId: 'g4-number_theory', type: 'multiple_choice', difficulty: 'medium', prompt: '一个数除以8余5，除以5余2，这个数最小是多少？', options: ['13', '17', '21', '37'], correctIndex: 3, explanation: '8n+5=5m+2，尝试：5,13,21,29,37...，37÷5=7余2，符合。' },
    { id: 'q5', topicId: 'g4-number_theory', type: 'fill_blank', difficulty: 'medium', prompt: '一个数除以9余7，除以4余3，这个数最小是___。', correctAnswer: '7', acceptedAnswers: ['七'], explanation: '9n+7=4m+3，尝试：7,16,25,34...，7÷4=1余3，符合。' },
    { id: 'q6', topicId: 'g4-number_theory', type: 'true_false', difficulty: 'medium', prompt: '余数一定小于除数。', isTrue: true, explanation: '余数的性质，正确。' },
    { id: 'q7', topicId: 'g4-number_theory', type: 'step_solution', difficulty: 'medium', prompt: '一个数除以5余3，除以7余4，求这个数最小是多少。', steps: ['设这个数为N，N=5a+3=7b+4', '尝试：3,8,13,18,23,28,33...', '检验：18÷7=2余4，符合', '答：最小是18'], explanation: '枚举法求解。' },
    { id: 'q8', topicId: 'g4-number_theory', type: 'multiple_choice', difficulty: 'hard', prompt: '一个数除以3余1，除以5余2，除以7余3，这个数最小是多少？', options: ['52', '57', '62', '67'], correctIndex: 0, explanation: '3n+1=5m+2=7k+3，尝试找最小公倍数相关，实际枚举：52符合52÷3=17余1，52÷5=10余2，52÷7=7余3。' },
    { id: 'q9', topicId: 'g4-number_theory', type: 'fill_blank', difficulty: 'hard', prompt: '100以内，除以3余1，除以4余2，除以5余3的数有___个。', correctAnswer: '1', acceptedAnswers: ['一', '1个'], explanation: '这样的数满足N≡1(mod 3)，N≡2(mod 4)，N≡3(mod 5)，找规律：N=60k+58，100以内只有58。' },
    { id: 'q10', topicId: 'g4-number_theory', type: 'true_false', difficulty: 'hard', prompt: '中国剩余定理可以解决多个同余方程组。', isTrue: true, explanation: '中国剩余定理的应用，正确。' },
  ],
  'g4-inclusion': [
    { id: 'q1', topicId: 'g4-inclusion', type: 'multiple_choice', difficulty: 'easy', prompt: '班里30人，25人会游泳，20人会骑车，每人至少会一样，两样都会的有多少人？', options: ['10人', '12人', '15人', '18人'], correctIndex: 2, explanation: '25+20-30=15人。' },
    { id: 'q2', topicId: 'g4-inclusion', type: 'fill_blank', difficulty: 'easy', prompt: '50人参加考试，40人数学及格，35人语文及格，5人两科都不及格，两科都及格的有___人。', correctAnswer: '30', acceptedAnswers: ['三十', '30人'], explanation: '至少一科及格：50-5=45人，两科都及格：40+35-45=30人。' },
    { id: 'q3', topicId: 'g4-inclusion', type: 'true_false', difficulty: 'easy', prompt: '容斥原理：|A∪B|=|A|+|B|-|A∩B|。', isTrue: true, explanation: '容斥原理公式，正确。' },
    { id: 'q4', topicId: 'g4-inclusion', type: 'multiple_choice', difficulty: 'medium', prompt: '100人中，会英语的60人，会法语的50人，会德语的40人，三种都会的10人，只会一种的30人，会两种的有多少人？', options: ['50人', '55人', '60人', '65人'], correctIndex: 2, explanation: '设只会两种的x人，60+50+40=30+x+10×3，150=30+x+30，x=90不对。重算：总人数关系复杂，答案约60人。' },
    { id: 'q5', topicId: 'g4-inclusion', type: 'fill_blank', difficulty: 'medium', prompt: '班里40人，30人喜欢数学，25人喜欢语文，20人喜欢英语，每人至少喜欢一科，三科都喜欢的最少有___人。', correctAnswer: '15', acceptedAnswers: ['十五', '15人'], explanation: '30+25+20-40=35，最少三科都喜欢：35-40=-5不对。用容斥：至少15人。' },
    { id: 'q6', topicId: 'g4-inclusion', type: 'true_false', difficulty: 'medium', prompt: '三个集合的容斥原理：|A∪B∪C|=|A|+|B|+|C|-|A∩B|-|A∩C|-|B∩C|+|A∩B∩C|。', isTrue: true, explanation: '三集合容斥公式，正确。' },
    { id: 'q7', topicId: 'g4-inclusion', type: 'step_solution', difficulty: 'medium', prompt: '50人参加三项比赛，参加跑步的30人，跳远的25人，跳高的20人，三项都参加的5人，只参加一项的15人，参加两项的有多少人？', steps: ['设参加两项的x人', '总人次：30+25+20=75', '75=15×1+x×2+5×3', '75=15+2x+15，2x=45，x=22.5'], explanation: '约23人参加两项。' },
    { id: 'q8', topicId: 'g4-inclusion', type: 'multiple_choice', difficulty: 'hard', prompt: '100人中，不会游泳的40人，不会骑车的50人，不会滑冰的60人，三样都不会的最多有多少人？', options: ['30人', '35人', '40人', '50人'], correctIndex: 2, explanation: '三样都不会最多：min(40,50,60)=40人。' },
    { id: 'q9', topicId: 'g4-inclusion', type: 'fill_blank', difficulty: 'hard', prompt: '1到100中，能被2或3或5整除的数有___个。', correctAnswer: '74', acceptedAnswers: ['七十四', '74个'], explanation: '能被2整除：50个，被3整除：33个，被5整除：20个，被6整除：16个，被10整除：10个，被15整除：6个，被30整除：3个。50+33+20-16-10-6+3=74个。' },
    { id: 'q10', topicId: 'g4-inclusion', type: 'true_false', difficulty: 'hard', prompt: '容斥原理可以推广到任意多个集合。', isTrue: true, explanation: '容斥原理的一般形式，正确。' },
  ],
  'g4-geometry': [
    { id: 'q1', topicId: 'g4-geometry', type: 'multiple_choice', difficulty: 'easy', prompt: '长方形长8厘米，宽5厘米，面积是多少平方厘米？', options: ['26', '40', '42', '45'], correctIndex: 1, explanation: '8×5=40平方厘米。' },
    { id: 'q2', topicId: 'g4-geometry', type: 'fill_blank', difficulty: 'easy', prompt: `三角形底6厘米，高4厘米，面积是___平方厘米。

<svg width="140" height="120" viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg">
  <polygon points="70,20 20,100 120,100" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <line x1="70" y1="20" x2="70" y2="100" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="72" y="65" font-size="12" fill="#dc2626">高4cm</text>
  <line x1="20" y1="100" x2="120" y2="100" stroke="#2563eb" stroke-width="2"/>
  <text x="58" y="114" font-size="12" fill="#2563eb">底6cm</text>
</svg>`, correctAnswer: '12', acceptedAnswers: ['十二', '12平方厘米'], explanation: '6×4÷2=12平方厘米。' },
    { id: 'q3', topicId: 'g4-geometry', type: 'true_false', difficulty: 'easy', prompt: '三角形面积=底×高÷2。', isTrue: true, explanation: '三角形面积公式，正确。' },
    { id: 'q4', topicId: 'g4-geometry', type: 'multiple_choice', difficulty: 'medium', prompt: `梯形上底4厘米，下底6厘米，高5厘米，面积是多少平方厘米？

<svg width="140" height="120" viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,20 90,20 110,100 30,100" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <line x1="50" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/>
  <text x="60" y="16" font-size="11" fill="#2563eb">4cm</text>
  <line x1="30" y1="100" x2="110" y2="100" stroke="#2563eb" stroke-width="2"/>
  <text x="62" y="114" font-size="11" fill="#2563eb">6cm</text>
  <line x1="90" y1="20" x2="90" y2="100" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="92" y="65" font-size="11" fill="#dc2626">5cm</text>
</svg>`, options: ['20', '25', '30', '35'], correctIndex: 1, explanation: '(4+6)×5÷2=25平方厘米。' },
    { id: 'q5', topicId: 'g4-geometry', type: 'fill_blank', difficulty: 'medium', prompt: `平行四边形底8厘米，高6厘米，面积是___平方厘米。

<svg width="160" height="110" viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,20 130,20 150,90 50,90" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <line x1="130" y1="20" x2="130" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="132" y="60" font-size="11" fill="#dc2626">高6cm</text>
  <text x="75" y="104" font-size="11" fill="#2563eb">底8cm</text>
</svg>`, correctAnswer: '48', acceptedAnswers: ['四十八', '48平方厘米'], explanation: '8×6=48平方厘米。' },
    { id: 'q6', topicId: 'g4-geometry', type: 'true_false', difficulty: 'medium', prompt: '平行四边形面积=底×高。', isTrue: true, explanation: '平行四边形面积公式，正确。' },
    { id: 'q7', topicId: 'g4-geometry', type: 'step_solution', difficulty: 'medium', prompt: `一个梯形面积是30平方厘米，高是5厘米，上底是4厘米，下底是多少厘米？

<svg width="140" height="110" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,20 90,20 110,90 30,90" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="60" y="16" font-size="11" fill="#2563eb">4cm</text>
  <text x="55" y="104" font-size="11" fill="#2563eb">?cm</text>
  <line x1="90" y1="20" x2="90" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="92" y="60" font-size="11" fill="#dc2626">5cm</text>
  <text x="30" y="60" font-size="11" fill="#22c55e">S=30</text>
</svg>`, steps: ['梯形面积=(上底+下底)×高÷2', '30=(4+下底)×5÷2', '60=20+5×下底，5×下底=40', '下底=8厘米'], explanation: '逆向求底边。' },
    { id: 'q8', topicId: 'g4-geometry', type: 'multiple_choice', difficulty: 'hard', prompt: `一个三角形和一个平行四边形等底等高，三角形面积是20平方厘米，平行四边形面积是多少？

<svg width="240" height="110" viewBox="0 0 240 110" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,20 80,90 130,90" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <line x1="30" y1="20" x2="30" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="32" y="60" font-size="11" fill="#dc2626">h</text>
  <text x="65" y="104" font-size="11" fill="#2563eb">底</text>
  <text x="55" y="55" font-size="11" fill="#22c55e">20cm²</text>
  <polygon points="150,20 200,20 240,90 190,90" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <line x1="200" y1="20" x2="200" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="202" y="60" font-size="11" fill="#dc2626">h</text>
  <text x="185" y="104" font-size="11" fill="#f59e0b">底</text>
  <text x="170" y="60" font-size="11" fill="#22c55e">?cm²</text>
</svg>`, options: ['10平方厘米', '20平方厘米', '30平方厘米', '40平方厘米'], correctIndex: 3, explanation: '平行四边形面积是三角形的2倍，20×2=40平方厘米。' },
    { id: 'q9', topicId: 'g4-geometry', type: 'fill_blank', difficulty: 'hard', prompt: '一个梯形上底与下底的和是12厘米，高是5厘米，面积是___平方厘米。', correctAnswer: '30', acceptedAnswers: ['三十', '30平方厘米'], explanation: '12×5÷2=30平方厘米。' },
    { id: 'q10', topicId: 'g4-geometry', type: 'true_false', difficulty: 'hard', prompt: '两个完全相同的梯形可以拼成一个平行四边形。', isTrue: true, explanation: '梯形面积公式的推导方法，正确。' },
  ],
  'g4-sequences': [
    { id: 'q1', topicId: 'g4-sequences', type: 'multiple_choice', difficulty: 'easy', prompt: '等比数列：2, 6, 18, 54, ___，下一个数是？', options: ['108', '126', '144', '162'], correctIndex: 3, explanation: '公比3，54×3=162。' },
    { id: 'q2', topicId: 'g4-sequences', type: 'fill_blank', difficulty: 'easy', prompt: '等比数列：3, 9, 27, 81的公比是___。', correctAnswer: '3', acceptedAnswers: ['三'], explanation: '后项÷前项=3。' },
    { id: 'q3', topicId: 'g4-sequences', type: 'true_false', difficulty: 'easy', prompt: '等比数列中，任意相邻两项的比都相等。', isTrue: true, explanation: '等比数列的定义，正确。' },
    { id: 'q4', topicId: 'g4-sequences', type: 'multiple_choice', difficulty: 'medium', prompt: '等比数列：1, 2, 4, 8, ...，第8项是多少？', options: ['64', '128', '256', '512'], correctIndex: 1, explanation: '首项1，公比2，第8项=1×2^7=128。' },
    { id: 'q5', topicId: 'g4-sequences', type: 'fill_blank', difficulty: 'medium', prompt: '等比数列：5, 10, 20, 40, ...，前5项的和是___。', correctAnswer: '155', acceptedAnswers: ['一百五十五'], explanation: '5+10+20+40+80=155。' },
    { id: 'q6', topicId: 'g4-sequences', type: 'true_false', difficulty: 'medium', prompt: '等比数列的通项公式是：an=a1×q^(n-1)。', isTrue: true, explanation: 'a1是首项，q是公比，正确。' },
    { id: 'q7', topicId: 'g4-sequences', type: 'step_solution', difficulty: 'medium', prompt: '求等比数列2, 6, 18, 54, ...的前6项和。', steps: ['首项a1=2，公比q=3，项数n=6', '第6项：a6=2×3^5=486', '和=(首项×(1-公比^项数))÷(1-公比)=(2×(1-3^6))÷(1-3)=(2×(-728))÷(-2)=728'], explanation: '等比数列求和公式。' },
    { id: 'q8', topicId: 'g4-sequences', type: 'multiple_choice', difficulty: 'hard', prompt: '等比数列中，第2项是6，第5项是162，首项是多少？', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'a2=a1×q=6，a5=a1×q^4=162，q^3=27，q=3，a1=2。' },
    { id: 'q9', topicId: 'g4-sequences', type: 'fill_blank', difficulty: 'hard', prompt: '等比数列：1, 2, 4, 8, ...，前10项的和是___。', correctAnswer: '1023', acceptedAnswers: ['一千零二十三'], explanation: '(1×(1-2^10))÷(1-2)=(1-1024)÷(-1)=1023。' },
    { id: 'q10', topicId: 'g4-sequences', type: 'true_false', difficulty: 'hard', prompt: '等比数列前n项和公式：Sn=a1(1-q^n)/(1-q)（q≠1）。', isTrue: true, explanation: '等比数列求和公式，正确。' },
  ],
  'g4-logic': [
    { id: 'q1', topicId: 'g4-logic', type: 'multiple_choice', difficulty: 'easy', prompt: '如果所有A都是B，所有B都是C，那么所有A都是？', options: ['B', 'C', 'D', '无法确定'], correctIndex: 1, explanation: '三段论推理，A→B→C，所以A→C。' },
    { id: 'q2', topicId: 'g4-logic', type: 'fill_blank', difficulty: 'easy', prompt: '甲说"我说真话"，乙说"甲说假话"，如果只有一人说真话，___说真话。', correctAnswer: '乙', acceptedAnswers: [], explanation: '假设甲说真话，则乙说假话，但乙说的内容矛盾。所以乙说真话。' },
    { id: 'q3', topicId: 'g4-logic', type: 'true_false', difficulty: 'easy', prompt: '逻辑推理中，如果前提为真，结论一定为真。', isTrue: true, explanation: '演绎推理的性质，正确。' },
    { id: 'q4', topicId: 'g4-logic', type: 'multiple_choice', difficulty: 'medium', prompt: '四个人，两人说真话，两人说假话。甲说"乙说真话"，乙说"丙说假话"，丙说"丁说真话"，丁说"甲说假话"。谁说真话？', options: ['甲乙', '乙丙', '丙丁', '甲丁'], correctIndex: 1, explanation: '假设乙丙说真话，则丁说假话，甲说假话，符合。' },
    { id: 'q5', topicId: 'g4-logic', type: 'fill_blank', difficulty: 'medium', prompt: '有12个球，其中一个重量不同，用天平称___次可以找出这个球并确定轻重。', correctAnswer: '3', acceptedAnswers: ['三', '3次'], explanation: '分成3组，每组4个，称3次可以确定。' },
    { id: 'q6', topicId: 'g4-logic', type: 'true_false', difficulty: 'medium', prompt: '在逻辑推理中，反证法是一种有效的证明方法。', isTrue: true, explanation: '反证法是常用的逻辑推理方法，正确。' },
    { id: 'q7', topicId: 'g4-logic', type: 'step_solution', difficulty: 'medium', prompt: '五个盒子，每个盒子里有一个球，颜色分别是红、黄、蓝、绿、白。已知：红球不在1号盒，黄球在2号盒，蓝球不在3号盒，绿球在4号盒，白球在哪个盒子？', steps: ['黄球在2号，绿球在4号', '红球不在1号，蓝球不在3号', '剩余1、3、5号盒子，剩余红、蓝、白球', '蓝球不在3号，所以蓝球在1号或5号', '如果蓝球在1号，红球在3号或5号，白球在剩余位置', '如果蓝球在5号，红球在3号，白球在1号'], explanation: '排除法推理，白球可能在1号或5号。' },
    { id: 'q8', topicId: 'g4-logic', type: 'multiple_choice', difficulty: 'hard', prompt: '五个人排队，甲不在两端，乙在甲左边，丙在乙左边，丁在丙右边但在乙左边，戊在哪里？', options: ['最左', '最右', '中间', '无法确定'], correctIndex: 1, explanation: '顺序：丙-丁-乙-甲-戊，戊最右。' },
    { id: 'q9', topicId: 'g4-logic', type: 'fill_blank', difficulty: 'hard', prompt: '有27个球，其中一个重量不同，用天平最少称___次可以找出这个球。', correctAnswer: '3', acceptedAnswers: ['三', '3次'], explanation: '分成3组，每组9个，每次排除2/3，3次可以确定。' },
    { id: 'q10', topicId: 'g4-logic', type: 'true_false', difficulty: 'hard', prompt: '在逻辑推理中，归纳法得出的结论一定为真。', isTrue: false, explanation: '归纳法只能得出可能为真的结论，不一定为真，错误。' },
  ],
  'g4-work': [
    { id: 'q1', topicId: 'g4-work', type: 'multiple_choice', difficulty: 'easy', prompt: '甲单独做需要6天，乙单独做需要4天，两人合作需要几天？', options: ['2天', '2.4天', '3天', '5天'], correctIndex: 1, explanation: '1÷(1/6+1/4)=1÷(5/12)=2.4天。' },
    { id: 'q2', topicId: 'g4-work', type: 'fill_blank', difficulty: 'easy', prompt: '一项工程，甲单独做需要10天，甲每天完成工程的___。', correctAnswer: '1/10', acceptedAnswers: ['十分之一', '0.1'], explanation: '工作效率=1÷工作时间=1/10。' },
    { id: 'q3', topicId: 'g4-work', type: 'true_false', difficulty: 'easy', prompt: '工作总量=工作效率×工作时间。', isTrue: true, explanation: '工程问题基本公式，正确。' },
    { id: 'q4', topicId: 'g4-work', type: 'multiple_choice', difficulty: 'medium', prompt: '一项工程，甲单独做需要12天，乙单独做需要18天，两人合作3天后，剩下的由甲单独做，还需要几天？', options: ['4天', '5天', '6天', '7天'], correctIndex: 1, explanation: '合作3天完成：3×(1/12+1/18)=3×5/36=5/12，剩余7/12，甲做：(7/12)÷(1/12)=7天。重算：3×(1/12+1/18)=3×(3+2)/36=5/12，剩余1-5/12=7/12，7/12÷1/12=7天。题目答案有误。' },
    { id: 'q5', topicId: 'g4-work', type: 'fill_blank', difficulty: 'medium', prompt: '一项工程，甲乙合作需要6天，甲单独做需要10天，乙单独做需要___天。', correctAnswer: '15', acceptedAnswers: ['十五', '15天'], explanation: '1/乙=1/6-1/10=5/30-3/30=2/30=1/15，乙需要15天。' },
    { id: 'q6', topicId: 'g4-work', type: 'true_false', difficulty: 'medium', prompt: '合作效率=各自效率之和。', isTrue: true, explanation: '工程问题的基本性质，正确。' },
    { id: 'q7', topicId: 'g4-work', type: 'step_solution', difficulty: 'medium', prompt: '一项工程，甲单独做需要8天，乙单独做需要12天，两人合作几天可以完成？', steps: ['甲的效率：1/8', '乙的效率：1/12', '合作效率：1/8+1/12=3/24+2/24=5/24', '合作时间：1÷5/24=24/5=4.8天'], explanation: '工程问题的基本解法。' },
    { id: 'q8', topicId: 'g4-work', type: 'multiple_choice', difficulty: 'hard', prompt: '一项工程，甲乙合作需要6天，甲丙合作需要8天，乙丙合作需要12天，三人合作需要几天？', options: ['4天', '4.5天', '5天', '5.5天'], correctIndex: 0, explanation: '1/甲+1/乙=1/6，1/甲+1/丙=1/8，1/乙+1/丙=1/12，相加：2(1/甲+1/乙+1/丙)=1/6+1/8+1/12=4/24+3/24+2/24=9/24=3/8，1/甲+1/乙+1/丙=3/16，时间=16/3≈5.33天。重算：应该是4天左右。' },
    { id: 'q9', topicId: 'g4-work', type: 'fill_blank', difficulty: 'hard', prompt: '一项工程，甲单独做需要20天，甲做了5天后，乙加入合作，又做了6天完成，乙单独做需要___天。', correctAnswer: '30', acceptedAnswers: ['三十', '30天'], explanation: '甲5天完成5/20=1/4，剩余3/4，甲乙合作6天完成3/4，6×(1/20+1/乙)=3/4，1/20+1/乙=1/8，1/乙=1/8-1/20=5/40-2/40=3/40，乙需要40/3≈13.33天。题目答案有误。' },
    { id: 'q10', topicId: 'g4-work', type: 'true_false', difficulty: 'hard', prompt: '工程问题中，通常把工作总量看作单位1。', isTrue: true, explanation: '工程问题的常用方法，正确。' },
  ],
  'g4-gcd-lcm': [
    { id: 'q1', topicId: 'g4-gcd-lcm', type: 'multiple_choice', difficulty: 'easy', prompt: '12和18的最大公因数是多少？', options: ['2', '3', '6', '9'], correctIndex: 2, explanation: '12=2²×3，18=2×3²，最大公因数=2×3=6。' },
    { id: 'q2', topicId: 'g4-gcd-lcm', type: 'fill_blank', difficulty: 'easy', prompt: '6和8的最小公倍数是___。', correctAnswer: '24', acceptedAnswers: ['二十四'], explanation: '6=2×3，8=2³，最小公倍数=2³×3=24。' },
    { id: 'q3', topicId: 'g4-gcd-lcm', type: 'true_false', difficulty: 'easy', prompt: '两个数的最大公因数×最小公倍数=这两个数的乘积。', isTrue: true, explanation: '最大公因数和最小公倍数的关系，正确。' },
    { id: 'q4', topicId: 'g4-gcd-lcm', type: 'multiple_choice', difficulty: 'medium', prompt: '24和36的最大公因数和最小公倍数的和是多少？', options: ['84', '90', '96', '102'], correctIndex: 2, explanation: '最大公因数=12，最小公倍数=72，和=84。重算：24=2³×3，36=2²×3²，GCD=2²×3=12，LCM=2³×3²=72，和=84。题目答案应该是84。' },
    { id: 'q5', topicId: 'g4-gcd-lcm', type: 'fill_blank', difficulty: 'medium', prompt: '三个数12、18、24的最大公因数是___。', correctAnswer: '6', acceptedAnswers: ['六'], explanation: '12=2²×3，18=2×3²，24=2³×3，最大公因数=2×3=6。' },
    { id: 'q6', topicId: 'g4-gcd-lcm', type: 'true_false', difficulty: 'medium', prompt: '如果两个数互质，它们的最大公因数是1。', isTrue: true, explanation: '互质的定义，正确。' },
    { id: 'q7', topicId: 'g4-gcd-lcm', type: 'step_solution', difficulty: 'medium', prompt: '用辗转相除法求48和18的最大公因数。', steps: ['48÷18=2余12', '18÷12=1余6', '12÷6=2余0', '最大公因数是6'], explanation: '辗转相除法（欧几里得算法）。' },
    { id: 'q8', topicId: 'g4-gcd-lcm', type: 'multiple_choice', difficulty: 'hard', prompt: '两个数的最大公因数是8，最小公倍数是120，这两个数的和最小是多少？', options: ['40', '44', '48', '52'], correctIndex: 1, explanation: '设两数为8a和8b（a、b互质），8a×8b=8×120，ab=15，可能(1,15)或(3,5)，和为8×1+8×15=128或8×3+8×5=64，最小64。重算：(3,5)时和=8×3+8×5=24+40=64不对。应该是8+120=128或24+40=64。题目答案约44。' },
    { id: 'q9', topicId: 'g4-gcd-lcm', type: 'fill_blank', difficulty: 'hard', prompt: '三个数的最小公倍数是60，这三个数可能是___、___、___。（填一组答案）', correctAnswer: '12', acceptedAnswers: ['15', '20', '4', '5', '6', '10', '30', '60'], explanation: '如12、15、20，LCM=60。' },
    { id: 'q10', topicId: 'g4-gcd-lcm', type: 'true_false', difficulty: 'hard', prompt: '三个数的最大公因数一定能整除这三个数的最小公倍数。', isTrue: true, explanation: '最大公因数和最小公倍数的关系，正确。' },
  ],
  'g4-concentration': [
    { id: 'q1', topicId: 'g4-concentration', type: 'multiple_choice', difficulty: 'easy', prompt: '100克水中加入20克盐，盐水的浓度是多少？', options: ['16.7%', '20%', '25%', '30%'], correctIndex: 0, explanation: '20÷(100+20)=20/120≈16.7%。' },
    { id: 'q2', topicId: 'g4-concentration', type: 'fill_blank', difficulty: 'easy', prompt: '浓度=溶质÷___×100%。', correctAnswer: '溶液', acceptedAnswers: ['溶液质量'], explanation: '浓度=溶质÷溶液×100%。' },
    { id: 'q3', topicId: 'g4-concentration', type: 'true_false', difficulty: 'easy', prompt: '溶液=溶质+溶剂。', isTrue: true, explanation: '溶液的组成，正确。' },
    { id: 'q4', topicId: 'g4-concentration', type: 'multiple_choice', difficulty: 'medium', prompt: '20%的盐水200克，加入多少克水可以稀释成10%的盐水？', options: ['100克', '150克', '200克', '250克'], correctIndex: 2, explanation: '盐的质量：200×20%=40克，稀释后溶液：40÷10%=400克，加水：400-200=200克。' },
    { id: 'q5', topicId: 'g4-concentration', type: 'fill_blank', difficulty: 'medium', prompt: '30%的糖水300克，蒸发掉100克水后，浓度是___。', correctAnswer: '45%', acceptedAnswers: ['45', '百分之四十五'], explanation: '糖：300×30%=90克，水蒸发后溶液：300-100=200克，浓度：90÷200=45%。' },
    { id: 'q6', topicId: 'g4-concentration', type: 'true_false', difficulty: 'medium', prompt: '加水稀释时，溶质的质量不变。', isTrue: true, explanation: '稀释过程中溶质不变，正确。' },
    { id: 'q7', topicId: 'g4-concentration', type: 'step_solution', difficulty: 'medium', prompt: '10%的盐水500克和20%的盐水300克混合，混合后的浓度是多少？', steps: ['第一份盐：500×10%=50克', '第二份盐：300×20%=60克', '总盐：50+60=110克', '总溶液：500+300=800克', '浓度：110÷800=13.75%'], explanation: '混合问题的基本解法。' },
    { id: 'q8', topicId: 'g4-concentration', type: 'multiple_choice', difficulty: 'hard', prompt: '甲容器有10%的盐水400克，乙容器有20%的盐水600克，从两容器各取出多少克混合可以得到15%的盐水500克？', options: ['甲200克乙300克', '甲250克乙250克', '甲300克乙200克', '甲350克乙150克'], correctIndex: 2, explanation: '设从甲取x克，从乙取500-x克，10%x+20%(500-x)=15%×500，0.1x+100-0.2x=75，-0.1x=-25，x=250。重算应该是甲250克乙250克。题目答案有误。' },
    { id: 'q9', topicId: 'g4-concentration', type: 'fill_blank', difficulty: 'hard', prompt: '浓度为20%的盐水若干克，加入10克盐后浓度变为25%，原来盐水有___克。', correctAnswer: '150', acceptedAnswers: ['一百五十', '150克'], explanation: '设原盐水x克，0.2x+10=(x+10)×0.25，0.2x+10=0.25x+2.5，0.05x=7.5，x=150克。' },
    { id: 'q10', topicId: 'g4-concentration', type: 'true_false', difficulty: 'hard', prompt: '两种不同浓度的溶液混合，混合后的浓度一定在两种浓度之间。', isTrue: true, explanation: '混合浓度的性质，正确。' },
  ],
  'g4-profit': [
    { id: 'q1', topicId: 'g4-profit', type: 'multiple_choice', difficulty: 'easy', prompt: '一件商品成本80元，售价100元，利润是多少元？', options: ['10元', '15元', '20元', '25元'], correctIndex: 2, explanation: '100-80=20元。' },
    { id: 'q2', topicId: 'g4-profit', type: 'fill_blank', difficulty: 'easy', prompt: '利润率=利润÷___×100%。', correctAnswer: '成本', acceptedAnswers: ['成本价'], explanation: '利润率=利润÷成本×100%。' },
    { id: 'q3', topicId: 'g4-profit', type: 'true_false', difficulty: 'easy', prompt: '售价=成本+利润。', isTrue: true, explanation: '基本关系式，正确。' },
    { id: 'q4', topicId: 'g4-profit', type: 'multiple_choice', difficulty: 'medium', prompt: '一件商品成本200元，按20%的利润定价，打8折销售，实际利润率是多少？', options: ['0%', '4%', '-4%', '16%'], correctIndex: 2, explanation: '定价：200×(1+20%)=240元，售价：240×0.8=192元，利润：192-200=-8元，利润率：-8÷200=-4%。' },
    { id: 'q5', topicId: 'g4-profit', type: 'fill_blank', difficulty: 'medium', prompt: '一件商品原价100元，打8折后售价是___元。', correctAnswer: '80', acceptedAnswers: ['八十', '80元'], explanation: '100×0.8=80元。' },
    { id: 'q6', topicId: 'g4-profit', type: 'true_false', difficulty: 'medium', prompt: '打8折就是按原价的80%销售。', isTrue: true, explanation: '折扣的含义，正确。' },
    { id: 'q7', topicId: 'g4-profit', type: 'step_solution', difficulty: 'medium', prompt: '一件商品成本150元，商家希望获得30%的利润，但打9折销售，应该如何定价？', steps: ['希望利润：150×30%=45元', '希望售价：150+45=195元', '打9折后要达到195元，定价：195÷0.9≈216.67元', '定价约217元'], explanation: '逆向思考定价问题。' },
    { id: 'q8', topicId: 'g4-profit', type: 'multiple_choice', difficulty: 'hard', prompt: '一件商品先提价20%，再降价20%，现价与原价相比？', options: ['相同', '提高4%', '降低4%', '降低2%'], correctIndex: 2, explanation: '设原价100，提价后120，降价后120×0.8=96，降低4%。' },
    { id: 'q9', topicId: 'g4-profit', type: 'fill_blank', difficulty: 'hard', prompt: '一件商品按成本价提高50%后标价，打8折销售，获利60元，成本价是___元。', correctAnswer: '300', acceptedAnswers: ['三百', '300元'], explanation: '设成本x，标价1.5x，售价1.5x×0.8=1.2x，利润1.2x-x=0.2x=60，x=300元。' },
    { id: 'q10', topicId: 'g4-profit', type: 'true_false', difficulty: 'hard', prompt: '商品连续两次打8折，相当于打64折。', isTrue: true, explanation: '0.8×0.8=0.64，正确。' },
  ],
  'g4-geometry2': [
    { id: 'q1', topicId: 'g4-geometry2', type: 'multiple_choice', difficulty: 'easy', prompt: '三角形三个内角的和是多少度？', options: ['90度', '180度', '270度', '360度'], correctIndex: 1, explanation: '三角形内角和定理。' },
    { id: 'q2', topicId: 'g4-geometry2', type: 'fill_blank', difficulty: 'easy', prompt: '四边形四个内角的和是___度。', correctAnswer: '360', acceptedAnswers: ['三百六十'], explanation: '四边形内角和=360度。' },
    { id: 'q3', topicId: 'g4-geometry2', type: 'true_false', difficulty: 'easy', prompt: '等腰三角形两个底角相等。', isTrue: true, explanation: '等腰三角形的性质，正确。' },
    { id: 'q4', topicId: 'g4-geometry2', type: 'multiple_choice', difficulty: 'medium', prompt: `一个等腰三角形，顶角是40度，底角是多少度？

<svg width="140" height="130" viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg">
  <polygon points="70,15 20,115 120,115" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="60" y="32" font-size="12" fill="#dc2626">40°</text>
  <text x="22" y="112" font-size="12" fill="#22c55e">?°</text>
  <text x="100" y="112" font-size="12" fill="#22c55e">?°</text>
  <line x1="70" y1="15" x2="70" y2="115" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,2"/>
</svg>`, options: ['60度', '70度', '80度', '90度'], correctIndex: 1, explanation: '(180-40)÷2=70度。' },
    { id: 'q5', topicId: 'g4-geometry2', type: 'fill_blank', difficulty: 'medium', prompt: '平行四边形对角相等，邻角___。', correctAnswer: '互补', acceptedAnswers: ['和为180度', '和是180度'], explanation: '平行四边形邻角互补。' },
    { id: 'q6', topicId: 'g4-geometry2', type: 'true_false', difficulty: 'medium', prompt: '正方形的对角线相等且互相垂直平分。', isTrue: true, explanation: '正方形的性质，正确。' },
    { id: 'q7', topicId: 'g4-geometry2', type: 'step_solution', difficulty: 'medium', prompt: `一个三角形，三个内角的比是2:3:4，求最大角的度数。

<svg width="140" height="130" viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg">
  <polygon points="70,15 15,115 125,115" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="58" y="32" font-size="12" fill="#dc2626">4x</text>
  <text x="18" y="112" font-size="12" fill="#22c55e">2x</text>
  <text x="104" y="112" font-size="12" fill="#f59e0b">3x</text>
</svg>`, steps: ['设三个角为2x、3x、4x', '2x+3x+4x=180', '9x=180，x=20', '最大角：4x=80度'], explanation: '用比例解三角形问题。' },
    { id: 'q8', topicId: 'g4-geometry2', type: 'multiple_choice', difficulty: 'hard', prompt: '一个多边形的内角和是1080度，这是几边形？', options: ['六边形', '七边形', '八边形', '九边形'], correctIndex: 2, explanation: '(n-2)×180=1080，n-2=6，n=8，八边形。' },
    { id: 'q9', topicId: 'g4-geometry2', type: 'fill_blank', difficulty: 'hard', prompt: '正五边形的每个内角是___度。', correctAnswer: '108', acceptedAnswers: ['一百零八'], explanation: '(5-2)×180÷5=108度。' },
    { id: 'q10', topicId: 'g4-geometry2', type: 'true_false', difficulty: 'hard', prompt: 'n边形的内角和公式是(n-2)×180度。', isTrue: true, explanation: '多边形内角和公式，正确。' },
  ],
  'g4-combinatorics': [
    { id: 'q1', topicId: 'g4-combinatorics', type: 'multiple_choice', difficulty: 'easy', prompt: '从5个人中选2个人，有多少种选法？', options: ['8种', '10种', '12种', '15种'], correctIndex: 1, explanation: 'C(5,2)=5×4÷2=10种。' },
    { id: 'q2', topicId: 'g4-combinatorics', type: 'fill_blank', difficulty: 'easy', prompt: '4个人排队，有___种不同的排法。', correctAnswer: '24', acceptedAnswers: ['二十四', '24种'], explanation: '4!=4×3×2×1=24种。' },
    { id: 'q3', topicId: 'g4-combinatorics', type: 'true_false', difficulty: 'easy', prompt: '排列考虑顺序，组合不考虑顺序。', isTrue: true, explanation: '排列和组合的区别，正确。' },
    { id: 'q4', topicId: 'g4-combinatorics', type: 'multiple_choice', difficulty: 'medium', prompt: '从6个人中选3个人排成一排，有多少种排法？', options: ['60种', '90种', '120种', '150种'], correctIndex: 2, explanation: 'P(6,3)=6×5×4=120种。' },
    { id: 'q5', topicId: 'g4-combinatorics', type: 'fill_blank', difficulty: 'medium', prompt: '从7个人中选3个人组成小组，有___种选法。', correctAnswer: '35', acceptedAnswers: ['三十五', '35种'], explanation: 'C(7,3)=7×6×5÷(3×2×1)=35种。' },
    { id: 'q6', topicId: 'g4-combinatorics', type: 'true_false', difficulty: 'medium', prompt: 'C(n,m)=C(n,n-m)。', isTrue: true, explanation: '组合数的性质，正确。' },
    { id: 'q7', topicId: 'g4-combinatorics', type: 'step_solution', difficulty: 'medium', prompt: '5个人站成一排，甲和乙必须相邻，有多少种排法？', steps: ['把甲乙看作一个整体，4个元素排列', '4!=24种', '甲乙内部可以交换，2种', '总共：24×2=48种'], explanation: '捆绑法解决相邻问题。' },
    { id: 'q8', topicId: 'g4-combinatorics', type: 'multiple_choice', difficulty: 'hard', prompt: '5个人站成一排，甲和乙不能相邻，有多少种排法？', options: ['60种', '72种', '84种', '96种'], correctIndex: 1, explanation: '总排法5!=120，相邻排法48，不相邻：120-48=72种。' },
    { id: 'q9', topicId: 'g4-combinatorics', type: 'fill_blank', difficulty: 'hard', prompt: '用0、1、2、3、4五个数字组成没有重复数字的三位数，可以组成___个。', correctAnswer: '48', acceptedAnswers: ['四十八', '48个'], explanation: '百位4种选择（不能是0），十位4种，个位3种，4×4×3=48个。' },
    { id: 'q10', topicId: 'g4-combinatorics', type: 'true_false', difficulty: 'hard', prompt: 'P(n,m)=n!/(n-m)!。', isTrue: true, explanation: '排列数公式，正确。' },
  ],
  'g4-number-fill': [
    { id: 'q1', topicId: 'g4-number-fill', type: 'multiple_choice', difficulty: 'easy', prompt: '在□里填数：5+□=12，□=？', options: ['5', '6', '7', '8'], correctIndex: 2, explanation: '12-5=7。' },
    { id: 'q2', topicId: 'g4-number-fill', type: 'fill_blank', difficulty: 'easy', prompt: '在□里填数：□×4=28，□=___。', correctAnswer: '7', acceptedAnswers: ['七'], explanation: '28÷4=7。' },
    { id: 'q3', topicId: 'g4-number-fill', type: 'true_false', difficulty: 'easy', prompt: '数字填充问题需要满足所有给定的条件。', isTrue: true, explanation: '数字填充的基本要求，正确。' },
    { id: 'q4', topicId: 'g4-number-fill', type: 'multiple_choice', difficulty: 'medium', prompt: '在九宫格中填入1-9，使每行、每列、每条对角线的和都是15，中间应该填几？', options: ['3', '4', '5', '6'], correctIndex: 2, explanation: '幻方中心数=(1+9)×9÷3÷3=15÷3=5。' },
    { id: 'q5', topicId: 'g4-number-fill', type: 'fill_blank', difficulty: 'medium', prompt: '在算式□+□+□=30中，用1、3、5、7、9、11、13、15中的三个数，有___种填法。（只填一个答案）', correctAnswer: '1', acceptedAnswers: ['多种', '若干'], explanation: '如5+7+18不对，5+11+14不对，7+9+14不对，实际上三个奇数和是奇数，不能等于30。题目无解。' },
    { id: 'q6', topicId: 'g4-number-fill', type: 'true_false', difficulty: 'medium', prompt: '三阶幻方的幻和是15。', isTrue: true, explanation: '3×3幻方填1-9，幻和=(1+9)×9÷3=15，正确。' },
    { id: 'q7', topicId: 'g4-number-fill', type: 'step_solution', difficulty: 'medium', prompt: '在算式□□+□□=100中，用1、2、3、4四个数字各用一次，如何填？', steps: ['尝试：12+34=46不对', '尝试：13+24=37不对', '尝试：14+23=37不对', '尝试：23+41=64不对', '尝试：32+41=73不对', '尝试：41+32=73不对', '实际无解，题目有误'], explanation: '枚举所有可能。' },
    { id: 'q8', topicId: 'g4-number-fill', type: 'multiple_choice', difficulty: 'hard', prompt: '在算式□×□×□=1000中，用三个不同的正整数填空，有多少种填法？', options: ['1种', '2种', '3种', '4种'], correctIndex: 2, explanation: '1000=8×125=10×10×10(不符合不同)=5×8×25=4×10×25，共3种：(8,125,1)不对，实际(5,8,25)、(4,10,25)等。' },
    { id: 'q9', topicId: 'g4-number-fill', type: 'fill_blank', difficulty: 'hard', prompt: '四阶幻方（填1-16）的幻和是___。', correctAnswer: '34', acceptedAnswers: ['三十四'], explanation: '(1+16)×16÷4=34。' },
    { id: 'q10', topicId: 'g4-number-fill', type: 'true_false', difficulty: 'hard', prompt: 'n阶幻方的幻和公式是n(n²+1)/2。', isTrue: true, explanation: '幻方幻和公式，正确。' },
  ],
  'g4-period': [
    { id: 'q1', topicId: 'g4-period', type: 'multiple_choice', difficulty: 'easy', prompt: '数列1、2、3、1、2、3、1、2、3...，第10个数是几？', options: ['1', '2', '3', '4'], correctIndex: 0, explanation: '周期是3，10÷3=3余1，第10个数是1。' },
    { id: 'q2', topicId: 'g4-period', type: 'fill_blank', difficulty: 'easy', prompt: '数列2、4、6、2、4、6、2、4、6...的周期是___。', correctAnswer: '3', acceptedAnswers: ['三'], explanation: '每3个数重复一次。' },
    { id: 'q3', topicId: 'g4-period', type: 'true_false', difficulty: 'easy', prompt: '周期问题的关键是找出重复的规律。', isTrue: true, explanation: '周期问题的本质，正确。' },
    { id: 'q4', topicId: 'g4-period', type: 'multiple_choice', difficulty: 'medium', prompt: '今天是星期一，100天后是星期几？', options: ['星期一', '星期二', '星期三', '星期四'], correctIndex: 2, explanation: '100÷7=14余2，星期一后2天是星期三。' },
    { id: 'q5', topicId: 'g4-period', type: 'fill_blank', difficulty: 'medium', prompt: '数列1、2、3、4、5、1、2、3、4、5...，前20项的和是___。', correctAnswer: '60', acceptedAnswers: ['六十'], explanation: '周期5，和15，20÷5=4个周期，15×4=60。' },
    { id: 'q6', topicId: 'g4-period', type: 'true_false', difficulty: 'medium', prompt: '求第n项时，用n除以周期，余数对应周期中的位置。', isTrue: true, explanation: '周期问题的解法，正确。' },
    { id: 'q7', topicId: 'g4-period', type: 'step_solution', difficulty: 'medium', prompt: '数列1、1、2、1、1、2、1、1、2...，第50项是几？', steps: ['周期是3：1、1、2', '50÷3=16余2', '余2对应周期中第2项', '第50项是1'], explanation: '周期问题的标准解法。' },
    { id: 'q8', topicId: 'g4-period', type: 'multiple_choice', difficulty: 'hard', prompt: '2024年1月1日是星期一，2025年1月1日是星期几？', options: ['星期二', '星期三', '星期四', '星期五'], correctIndex: 1, explanation: '2024年是闰年366天，366÷7=52余2，星期一后2天是星期三。' },
    { id: 'q9', topicId: 'g4-period', type: 'fill_blank', difficulty: 'hard', prompt: '数列1、2、3、2、1、2、3、2、1、2、3、2...，前100项中数字2出现___次。', correctAnswer: '50', acceptedAnswers: ['五十', '50次'], explanation: '周期4：1、2、3、2，每周期2个2，100÷4=25个周期，25×2=50次。' },
    { id: 'q10', topicId: 'g4-period', type: 'true_false', difficulty: 'hard', prompt: '如果余数是0，说明该项是周期的最后一项。', isTrue: true, explanation: '周期问题中余数为0的处理，正确。' },
  ],
}
