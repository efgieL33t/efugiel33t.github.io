// HTMLから必要な要素を取得します
const partyChat = document.getElementById("partyChat");
const echoChat = document.getElementById("echoChat");
const ptoeButton = document.getElementById("ptoeButton");
const etopButton = document.getElementById("etopButton");

/* partyチャット(/p)をechoチャット(/e)に変換する関数 */
const convertPtoE = () => {
  // 右側のテキストエリアから入力されたテキストを取得
  const inputText = partyChat.value;

  // テキストを改行で分割
  const lines = inputText.split("\n");

  // 各行を処理し、新しい配列を作成
  const convertedLines = lines.map((line) => {
    // 行の先頭が'/p'で始まっているか確認（前後の空白は無視）
    if (line.trim().startsWith("/p")) {
      // '/p'を'/e'に置換
      return line.replace("/p", "/e");
    } else {
      // '/p'で始まらない行は無視
      return line;
    }
  });

  // 処理後の配列を、再び改行で連結して1つのテキストに戻す
  const outputText = convertedLines.join("\n");

  // 右側のテキストエリアに、変換後のテキストを表示
  echoChat.value = outputText;
};

/* echoチャット(/e)をpartyチャット(/p)に変換する関数 */
const convertEtoP = () => {
  // 右側のテキストエリアから入力されたテキストを取得
  const inputText = echoChat.value;

  // テキストを改行で分割
  const lines = inputText.split("\n");

  // 各行を処理し、新しい配列を作成
  const convertedLines = lines.map((line) => {
    // 行の先頭が'/p'で始まっているか確認（前後の空白は無視）
    if (line.trim().startsWith("/e")) {
      // '/p'を'/e'に置換
      return line.replace("/e", "/p");
    } else {
      // '/p'で始まらない行は無視
      return line;
    }
  });

  // 処理後の配列を、再び改行で連結して1つのテキストに戻す
  const outputText = convertedLines.join("\n");

  // 左側のテキストエリアに、変換後のテキストを表示
  partyChat.value = outputText;
};

// 「/p から /e に変換」ボタンがクリックされたら、convertPtoE関数を実行する
ptoeButton.addEventListener("click", convertPtoE);

// 「/e から /p に変換」ボタンがクリックされたら、convertEtoP関数を実行する
etopButton.addEventListener("click", convertEtoP);
