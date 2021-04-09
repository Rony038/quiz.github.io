
const correctAnswers=['B', 'B', 'A', 'A', 'B', 'B', 'A', 'B', 'A', 'B'];
const form=document.querySelector('.quiz-form');
const showScore= document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value,
         form.q4.value, form.q5.value, form.q6.value, form.q7.value,
          form.q8.value, form.q9.value, form.q10.value];
    userAnswers.forEach((answer, index)=>{
        if(answer===correctAnswers[index]){
            score+=10;
        }
    });
    showScore.classList.remove('d-none');
    scrollTo(0, 0);

    let output=0;
    const timer=setInterval(()=>{
        showScore.querySelector('span').textContent=`${output} %`;
        if(output===score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 10);
});










