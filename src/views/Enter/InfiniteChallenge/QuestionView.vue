<template>
    <div class="HomebackGround">
        <div>
            <img class="QLogoImage" :src="QLogoImagePaths[answerIndex]">
        </div>
        <div class="qustionText">
            오늘은 녹화날! 나는 프로그램에서<br>
            어떤 역할을 하게 될까?
        </div>

        <div>
            <img class="qustionImage" :src="questionImagePaths[answerIndex]">
        </div>

        <div>
            <button class="answerNonvisual answerPen answerBrush" type="button" 
                @mousedown="downQuestionBtn">{{answerList[answerIndex][0]}}</button>  
        </div>
        <div>
            <button class="answer2Nonvisual answerPen answer2Brush" type="button"
                @mousedown="downQuestionBtn">{{answerList[answerIndex][1]}}</button>
        </div>

        <div class = "adText">
            wnsh3131@naver.com<br>
            All Right Reserved. 2021. Junho.<br>
        </div>
    </div>
</template>

<script>
//import QuestionAPI from './QuestionAPI/QuestionAPI.vue'

export default {
    data() {
        return {
            answerIndex: "0",
            answerClass: "answerNonvisual answerPen",
            opacity: "1",

            answerList: 
            [["프로그램을 이끌어 가는 리더", "재밌는 리액션으로 감초 역할"], // Qustion 1
            ["댄스 신고식으로 존재를 확실하게 어필", "토크쇼와 문제풀이로 분량 확보"], // Qustion 2
            ["대화하는데 어려움 없지~", "처음 보는 사람과 왜 말을 하는거죠..?"], // Qustion 3
            ["내가 중심이 되어-4", "재밌는 리액션으로-4"], // Qustion 4
            ["내가 중심이 되어-5", "재밌는 리액션으로-5"], // Qustion 5
            ["내가 중심이 되어-6", "재밌는 리액션으로-6"], // Qustion 6
            ["내가 중심이 되어", "재밌는 리액션으로"], // Qustion 7
            ["내가 중심이 되어", "재밌는 리액션으로"], // Qustion 8
            ["내가 중심이 되어", "재밌는 리액션으로"], // Qustion 9
            ["내가 중심이 되어", "재밌는 리액션으로"], // Qustion 10
            ["내가 중심이 되어-11", "재밌는 리액션으로-11"], // Qustion 11
            ["내가 중심이 되어-12", "재밌는 리액션으로-12"]], // Qustion 12

            QLogoImagePaths:
            [require("./../../../assets/EnterResource/Infinite/Q1.png"),
            require("./../../../assets/EnterResource/Infinite/Q2.png"),
            require("./../../../assets/EnterResource/Infinite/Q3.png"),],

            questionImagePaths:
            [require("./../../../assets/EnterResource/Infinite/QuestionImage1.png"),
            require("./../../../assets/EnterResource/Infinite/QuestionImage2.png"),
            require("./../../../assets/EnterResource/Infinite/QuestionImage3.png"),],
        }
    },

    methods: {
        downQuestionBtn: function() {
            let integerAnswer = parseInt(this.answerIndex, 10);
            integerAnswer += 1;

            if(integerAnswer > 11) {
                this.$router.push({path:'about'})
            }
            this.answerIndex = integerAnswer
        },

        upQuestionBtn: function() {
            this.answerString2 = "upQuestionBtn Debug Test"
        },
    }
    
}
</script>


<style scoped>
.HomebackGround{
    background-color: #F2F2F2;
}

.Title{
    padding-left: 10%;
    padding-top: 1rem;

    font-size: 20pt;
    font-weight: bold;
    font-family:serif
}

.qustionText{
    padding-left: 10%;

    font-size: 16pt;
    font-weight: bold;
    font-family:serif
}

.qustionImage {
    left: 10%;
    padding-top: 1rem;
    position:relative;
    width:80%;
    height:65%;
}

.QLogoImage {
    padding-top: 0.5rem;
    padding-left: 3rem;
    width:20%;
    height:20%;
}

.answerNonvisual {
    left: 10%;
    position:relative;
    width:80%;
    height:100%;

    margin-top:2rem;

    padding:1rem;

    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 11pt;
}

.answer2Nonvisual {
    left: 10%;
    position:relative;
    width:80%;
    height:100%;
    padding:1rem;

    margin-top:2rem;
    margin-bottom: 1rem;

    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 11pt;
}

.answerPen {
  border:thistle;

  outline-width: 2px;
  border-radius: 2rem;
  
  font-weight:700;
  color: #F2F2F2;
}

.answerOverPen {
  border:black;
  outline-style: dotted;
  outline-width: 200px;
  border-radius: 5px;
}
.answerBrush {
  background-color: #595959;
}
.answer2Brush {
  background-color: #595959;
}

.adText {
    text-align: center;
    padding-top:1rem;
    padding-bottom: 1rem;

    font-size: 12pt;
    font-family: serif;
    opacity: 0.6;
}
</style>
