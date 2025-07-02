// ------------------------
// ユーティリティ関数
// ------------------------

// ランダムな数字を返す
function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}


// ------------------------
// データ定義
// ------------------------

// おみくじの運勢を返す
const omikujiResult = [
  {
    result: "超大吉",
    comment: "神様が全力で応援してる日！迷わずGO！",
  },
  {
    result: "大吉",
    comment: "あなたの一歩が、奇跡を呼ぶ。信じて進め！",
  },
  {
    result: "中吉",
    comment: "一見普通な一日が、実は運命を変えるきっかけに。",
  },
  {
    result: "小吉",
    comment: "小さな幸せに気づけるあなたは幸運体質。",
  },
  {
    result: "微吉",
    comment: "何もない日こそ、未来の種まき。",
  },
  {
    result: "平吉",
    comment: "変化はないが、それもまた良し。",
  },
  {
    result: "凶",
    comment: "無理せず慎重に。今日は立ち止まってOK。",
  },
  {
    result: "激凶",
    comment: "トラブルの香り…でも冷静なら回避可能。",
  },
  {
    result: "絶望凶",
    comment: "…これはもはやネタ。逆にラッキーかも？",
  },
  {
    result: "ネタバレ凶",
    comment: "今日の展開、もう読めてる。油断注意。",
  },
];

// ラッキーな音楽を返す
const luckyMusic = [
  "プログレッシブ・演歌",
  "高速店長呼び出し系BGM", 
  "意識高い系カフェで流れてるボサノバ", 
  "サビで必ず大爆発が起きるヒーロー戦隊モノ主題歌", 
  "実家の押し入れから出てきたカセットテープ演歌", 
  "やたらと転調するアニソン", 
  "聞いているだけで足が速くなりそうなユーロビート", 
  "絶対音感を狂わせるタイプの現代音楽", 
  "卒業式で先生が泣き始める合唱曲", 
  "ドゥーム・メタル（子守唄アレンジ）"
];

// ラッキーなゲームを返す
const luckyGame = [
  "超高速餅つきシミュレーター", 
  "延々と畑を耕すだけのスローライフRPG", 
  "コマンド選択式・社内根回しアドベンチャー", 
  "物理演算がバグってるお料理シミュレーター", 
  "最終ボスより強いチュートリアルの鬼教官", 
  "理不尽な判定の格闘ゲーム", 
  "NPCが全員棒読みのオープンワールドRPG", 
  "ひたすらガチャを回すだけの虚無系パズル", 
  "エンディングが50パターンあるノベルゲーム", 
  "鬼の追いかけっこ付き脱出ゲーム（物理）"
];

// ラッキーなひとことを返す
const luckyWord = [
  "「いける気がする」", 
  "「ありがとう」", 
  "「やってみよう」", 
  "「まぁいっか」", 
  "「焦らない焦らない」", 
  "「静かがいちばん」", 
  "「一歩ずつ」", 
  "「落ち着いて」",
  "「笑っとけ」", 
  "「フラグ回避」"
];

// ------------------------
// メイン処理
// ------------------------

function drawOmikuji() {
  // 大吉、中吉とかの結果を表示する定数
  const fortune = getRandomElement(omikujiResult);
  // 各ラッキー〇〇を表示するための定数
  const music = getRandomElement(luckyMusic);
  const game = getRandomElement(luckyGame);
  const word = getRandomElement(luckyWord);

  // HTMLのClassを指定して内容を代入(配列の[0]を使う)
  document.getElementsByClassName("omikuji-luck")[0].textContent = fortune.result;
  document.getElementsByClassName("omikuji-message")[0].textContent = fortune.comment;
  document.getElementsByClassName("omikuji-lucky-music")[0].textContent = music;
  document.getElementsByClassName("omikuji-lucky-game")[0].textContent = game;
  document.getElementsByClassName("omikuji-lucky-word")[0].textContent = word;

  // 表示切り替え
  document.getElementsByClassName("omikuji-page")[0].classList.remove("d-none");
}

// ------------------------
// イベント登録
// ------------------------

window.addEventListener("DOMContentLoaded" , function(){
  const drawBtn = document.getElementsByClassName("draw-omikuji")[0];
  if (drawBtn) {
    drawBtn.addEventListener("click" , drawOmikuji);
  }
});
