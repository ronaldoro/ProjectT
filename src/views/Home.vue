<template>
    <div class="HomebackGround">
        <div>
            <h1 class="qustionText">{{questionString}}</h1>
        </div>
        <div>
            <button class="answerNonvisual answerPen answerBrush" type="button" @click="answer1">{{answerString1}}</button>  
        </div>
        <div>
            <button class="answer2Nonvisual answerPen" type="button" @click="answer2" @mouseover="over2">{{answerString2}}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            answerIndex: "1",
            questionString: "1번 질문입니다.",
            answerString1: "1-1번 답변을 선택합니다.",
            answerString2: "1-2번 답변을 선택합니다.",
            answerClass: "answerNonvisual answerPen"
        }
    },
    methods: {
        answer1() {
            let integerAnswer = parseInt(this.answerIndex, 10);
            integerAnswer += 1;
            if(integerAnswer > 10) {
                this.$router.push({path:'about'})
            }

            this.answerIndex = integerAnswer;
            this.questionString = this.answerIndex + "번 질문입니다."
            this.answerString1 = this.answerIndex + "-1번 답변을 선택합니다."
            this.answerString2 = this.answerIndex + "-2번 답변을 선택합니다."
        },
        answer2() {
            let integerAnswer = parseInt(this.answerIndex, 10);
            integerAnswer += 1;
            if(integerAnswer > 10) {
                this.$router.push({path:'about'})
            }

            this.answerIndex = integerAnswer;
            this.questionString = this.answerIndex + "번 질문입니다."
            this.answerString1 = this.answerIndex + "-1번 답변을 선택합니다."
            this.answerString2 = this.answerIndex + "-2번 답변을 선택합니다."
        },

        over2() {
            
        },
    }
    
}
</script>


<style scoped>
.HomebackGround{
    background-color: #FFAFE6;
}

.qustionVacancy{
    position: relative;
    padding: 10%;
}

.qustionText{
    text-align: center;
    padding-top: 10%;
    padding-bottom: 3rem;
    font-family:cursive
}

.answerNonvisual {
    left: 30%;
    position:relative;
    width:40%;
    height:100%;
    padding:1rem;

    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16pt;
}

.answer2Nonvisual {
    left: 30%;
    position:relative;
    width:40%;
    height:100%;
    padding:1rem;

    margin-top:2rem;
    margin-bottom: 20rem;

    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16pt;
}

.answerPen {
  border:thistle;
  outline-style: dotted;
  outline-width: 2px;
  border-radius: 5px;
}

.answerOverPen {
  border:black;
  outline-style: dotted;
  outline-width: 200px;
  border-radius: 5px;
}
.answerBrush {
  background-color: #FFEFD5;
}
.answer2Brush {
  background-color: #FFD1B7;
}
</style>