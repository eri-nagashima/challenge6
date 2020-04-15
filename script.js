//合計スコア用の変数
let score = 0;

function showScore(){

//スコア表示の処理をここに記述
    if(score === 3) {
        document.getElementById('score-message').innerHTML = `${score}点！すばらしい！`;
    } else if(score === 2) {
        document.getElementById('score-message').innerHTML = `${score}点！おしい！`;
    } else if(score === 1) {
        document.getElementById('score-message').innerHTML = `${score}点！まあまあです！`;
    } else {
        document.getElementById('score-message').innerHTML = `${score}点！残念！もっと頑張りましょう`;
    }
}

/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/

function answerQuiz1(){
//問題1の処理をここに記述
    const quiz_1 = document.getElementById('quiz-1');
    
    if(quiz_1.answer.value === 'b') {
        console.log('正解です！');
        score ++;
        console.log(score);
    } else if(quiz_1.answer.value === 'a' || quiz_1.answer.value === 'c') {
        console.log('はずれです');
    } else {
        alert('1問目の選択肢を選んでください');
    }
}

function answerQuiz2(){
//問題2の処理をここに記述
    const quiz_2 = document.getElementById('quiz-2');

    if(quiz_2.answer.value === 'a') {
        console.log('正解です！');
        score ++;
        console.log(score);
    } else if(quiz_2.answer.value === 'b' || quiz_2.answer.value === 'c') {
        console.log('はずれです');
    } else {
        alert('2問目の選択肢を選んでください');
    }
}

function answerQuiz3(){
//問題3の処理をここに記述
    const quiz_3 = document.getElementById('quiz-3');

    if(quiz_3.answer.value === 'c') {
        console.log('正解です！');
        score ++;
        console.log(score);
    } else if(quiz_3.answer.value === 'a' || quiz_3.answer.value === 'b') {
        console.log('はずれです');
    } else {
        alert('3問目の選択肢を選んでください');
    }
}


// switch() {
    //     case 'a':
    //     console.log("はずれです");
    //     break;

    //     case 'b':
    //     console.log("正解です！");
    //     console.log(score + 1);
    //     break;

    //     case 'c':
    //     console.log("はずれです");
    //     break;
    // }