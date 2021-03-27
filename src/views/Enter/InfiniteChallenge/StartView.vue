<template>
    <div class="HomebackGround">
        <div v-bind:style="{opacity:subOpacity}" class = "subTitle">
            MBTI로 알아보는
            <br>
        </div>
        <div>
            <h1 v-bind:style="{opacity:opacity}" class="Title">내가 무한도전 멤버라면 ?</h1>
        </div>

        <div>
            <img v-bind:style="{opacity:opacity}" class="imageLogo" src="./../../../assets/EnterResource/startLogo.png">
        </div>

        <div>
            <button v-bind:style="{opacity:opacity}" class="startNonvisual startPen startBrush" type="button" @click="start">테스트 시작</button>
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
            subOpacity: "0",
            opacity: "0",
        }
    },

    created() {

    },

    mounted: function () {
        window.addEventListener('load', this.startTransParency())
    },

    methods: {
        start() {
            this.$router.push({path:'InfiniteChallenge_Question'})
        },

        startTransParency: function() {
            setTimeout(() => {
                var opacity = parseFloat(this.opacity);
                opacity += 0.045
                this.opacity = String(opacity)    

                var subOpacity = parseFloat(this.subOpacity);
                subOpacity += 0.04
                if(subOpacity > 0.6) {
                    subOpacity = 0.6
                }

                this.subOpacity = String(subOpacity)    

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

.qustionVacancy{
    position: relative;
    padding: 10%;
}

.Title{
    text-align: center;
    padding-top: 1rem;

    font-size: 20pt;
    font-weight: bold;
    font-family:serif
}

.subTitle {
    text-align: center;
    padding-top: 3rem;

    font-size: 16pt;
    font-family: serif;
}

.startNonvisual {
    left: 27.5%;
    position:relative;
    width:45%;
    height:100%;
    padding:1rem;

    margin-top:2rem;
    margin-bottom: 1rem;

    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18pt;
}

.startPen {
    border:thistle;
    outline-width: 2rem;
    border-radius: 1rem;
    font-weight:700;
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
    opacity: 0.1;

}

.adText {
    text-align: center;
    padding-bottom: 1rem;

    font-size: 12pt;
    font-family: serif;
    opacity: 0.6;
}
</style>