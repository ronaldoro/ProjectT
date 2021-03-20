<template>
    <div class="HomebackGround">
        <div class = "subTitle">
            MBTI로 알아보는<br>
        </div>
        <div>
            <h1 class="Title">내가 무한도전 멤버라면 ?</h1>
        </div>

        <div>
            <img class="imageLogo" src="./../../../assets/EnterResource/startLogo.png">
        </div>

        <div>
            <button class="startNonvisual startPen startBrush" type="button" @click="start" @mouseover="over2">테스트 시작</button>
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
            answerString1: "1-1번 답변을 선택합니다.",
        }
    },
    methods: {
        start() {
            this.$router.push({path:'InfiniteChallenge_Question'})
        },
    }
    
}
</script>


<style scoped>
.HomebackGround{
    background-color: #F2F2F2;
}

.qustionVacancy{
    position: relative;
    padding: 10%;
}

.Title{
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 3rem;

    font-size: 20pt;
    font-family:serif
}

.subTitle {
    text-align: center;
    padding-top: 3rem;

    font-size: 16pt;
    font-family: serif;
    opacity: 0.6;
}

.startNonvisual {
    left: 20%;
    position:relative;
    width:60%;
    height:100%;
    padding:1rem;

    margin-top:2rem;
    margin-bottom: 5rem;

    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18pt;
}

.startPen {
    border:thistle;
    outline-width: 2rem;
    border-radius: 1rem;
    
    color: #F2F2F2;
}

.startBrush {
    background-color: #595959;
}

.imageLogo {
    left: 7.5%;
    position:relative;
    width:85%;
    height:65%;

}

.adText {
    text-align: center;
    padding-bottom: 5rem;

    font-size: 12pt;
    font-family: serif;
    opacity: 0.6;
}
</style>