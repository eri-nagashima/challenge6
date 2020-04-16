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

function answerQuiz1(){
    const quiz_1 = document.getElementById('quiz-1');
    
    switch(quiz_1.answer.value) {
        case 'b':
        console.log('正解です！');
        score ++;
        console.log(score);
        break;

        case 'a':
        case 'c':
        console.log('はずれです');
        break;

        default:
        alert('1問目の選択肢を選んでください');
        break;
    }
}

function answerQuiz2(){
    const quiz_2 = document.getElementById('quiz-2');

    switch(quiz_2.answer.value) {
        case 'a':
        console.log('正解です！');
        score ++;
        console.log(score);
        break;
    
        case 'b':
        case 'c':
        console.log('はずれです');
        break;
    
        default:
        alert('2問目の選択肢を選んでください');
        break;
    }
}

function answerQuiz3(){
    const quiz_3 = document.getElementById('quiz-3');
        
    switch(quiz_3.answer.value) {
        case 'c':
        console.log('正解です！');
        score ++;
        console.log(score);
        break;
    
        case 'a':
        case 'b':
        console.log('はずれです');
        break;
    
        default:
        alert('3問目の選択肢を選んでください');
        break;
    }
}