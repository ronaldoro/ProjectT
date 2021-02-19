<template>
    <div class="HomebackGround">
        <div>
            <h1 class="qustionText">1번 질문입니다.</h1>
        </div>
        <div>
            <button class="answerNonvisual answerPen answerBrush" type="button" @click="answer1">{{answerString1}}</button>  
        </div>
        <div>
            <button class="answerNonvisual answerPen" type="button" @click="answer2">{{answerString2}}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            answerIndex: "1",
            answerString1: "1-1번 답변을 선택합니다.",
            answerString2: "1-2번 답변을 선택합니다.",
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

            this.answerString1 = this.answerIndex + "-1번 답변을 선택합니다."
            this.answerString2 = this.answerIndex + "-2번 답변을 선택합니다."
        },
    }
    
}
</script>


<style scoped>
.HomebackGround{
    background-color: #FFAFE6;
}

.qustionText{
    text-align: center;
}

.answerNonvisual {
    left: 30%;
    position:relative;
    width:40%;
    height:100%;
}

.answerPen {
  border: none;
  border-radius: 2px;
}
.answerBrush {
  background-color: #FFEFD5;
}
</style>