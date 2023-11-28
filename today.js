// 現在の日付を取得
const now = new Date();

// 年、月、日を取得
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // 0-indexed, +1 して 2桁表示
const day = String(now.getDate()).padStart(2, '0');

// 年-月-日の形式で表示
console.log(`日付: ${year}-${month}-${day}`);
