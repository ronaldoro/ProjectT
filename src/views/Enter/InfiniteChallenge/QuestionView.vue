<template>
    <div class="HomebackGround">
        <div>
            <h1 v-bind:style="{opacity:opacity}" class="Title">Q1.</h1>
        </div>
        <div v-bind:style="{opacity:opacity}" class="qustionText">
            오늘은 녹화날!<br>
            나는 프로그램에서 어떤 역할을 하게 될까?
        </div>

        <div>
            <img v-bind:style="{opacity:opacity}" class="qustionImage" src="./../../../assets/EnterResource/Infinite_Question1.jpg">
        </div>

        <div>
            <button v-bind:style="{opacity:opacity}" class="answerNonvisual answerPen answerBrush" type="button" @click="answer1">{{answerString1}}</button>  
        </div>
        <div>
            <button v-bind:style="{opacity:opacity}" class="answer2Nonvisual answerPen answer2Brush" type="button" @click="answer2" @mouseover="over2">{{answerString2}}</button>
        </div>





        <div class = "adText">
            광고 문의<br>
            wnsh3131@naver.com<br>
            All Right Reserved. 2021. J&S.<br>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            answerIndex: "1",
            questionString: "1번 질문입니다.",
            answerString1: "내가 중심이 되어 프로그램을 이끌어 가야지!",
            answerString2: "재밌는 리액션으로 감초 역할을 하고싶어!",
            answerClass: "answerNonvisual answerPen",
            opacity: "1",
        }
    },

    created: function () {
        this.startTransParency()
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

        startTransParency: function() {
            setTimeout(() => {
                var opacity = parseFloat(this.opacity);
                opacity += 0.045
                this.opacity = String(opacity)    

                if(opacity < 1.1) {
                    this.startTransParency()
                }

            }, 50);
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

.answerNonvisual {
    left: 15%;
    position:relative;
    width:70%;
    height:100%;

    margin-top:2rem;

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
    margin-bottom: 1rem;

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
    padding-bottom: 5rem;

    font-size: 12pt;
    font-family: serif;
    opacity: 0.6;
}
</style>