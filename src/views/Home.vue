<template>
    <div class="HomebackGround">
        <div>
            <h1 class="qustionText">{{questionString}}</h1>
        </div>
        <div>
            <button class="answerNonvisual answerPen answerBrush" type="button" @click="answer1">{{answerString1}}</button>  
        </div>
        <div>
            <button class="answer2Nonvisual answerPen answer2Brush" type="button" @click="answer2" @mouseover="over2">{{answerString2}}</button>
        </div>

        <div class = "adText">
            광고 문의<br>
            wnsh3131@naver.com<br>
            All Right Reserved. 2021. Junho<br>
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
            if(integerAnswer > 5) {
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
            if(integerAnswer > 5) {
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
.HeaderSection{
    background-color: #7728f5;
}

.FooterSection{
    background-color: #7728f5;
}

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
    font-family:serif
}

.answerNonvisual {
    left: 15%;
    position:relative;
    width:70%;
    height:100%;
    padding:1rem;

    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 12pt;
}

.answer2Nonvisual {
    left: 15%;
    position:relative;
    width:70%;
    height:100%;
    padding:1rem;

    margin-top:2rem;
    margin-bottom: 10rem;

    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 12pt;
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

.adText {
    text-align: center;
    padding-bottom: 10rem;

    font-size: 12pt;
    font-family: serif;
    opacity: 0.6;
}
</style>
