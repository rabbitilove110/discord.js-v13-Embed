const { MessageEmbed } = require('discord.js') //임베드를 사용하기 위하여 선언

module.exports = { //명령어 코드 진입
    name: "임베드테스트", //명령어 이름
    description: "임베드 배우기 전용 명령어", //명령어 설명
    async execute(interaction) { //코드 진입
        const Embed = new MessageEmbed //위 선언한 값으로 임베드를 제작
        .setTitle('타이틀에 나올 말') //타이틀쪽에 나올 말
        .setDescription('설명') //설명쪽에 나올말
        .addFields( //임베드 필드를 사용하기 위하여 필드 제작
            { name: "필드 네임", value: '필드 설명', inline: false }, //인라인 false 로 필드 제작 (인라인은 한 임베드당 필드를 2개 또는 3개 가 한번에 화면에 나오게 모르겠다면 직접 코드를 false 를 true 로 바꿔서 테스트 해보세요!)
        ) //필드 끝
        .setFooter('밑 설명에 나올말') //풋터 밑 설명에 나올 말
        .setColor('GREEN') //임베드 색깔지정

        interaction.reply({ embeds: Embed }) //위에 만든 임베드를 디스코드에 보냄
    } //코드 끝
} //명령어 코드 끝


//부가 설명

//.setAuthor으로 타이틀 위에 말을 또 넣을수 있습니다.
//.setImage 또는 .setThumbnail 으로 임베드에 사진을 첨부할수 있습니다.
//대표적 색깔은 GREEN , RED , YELLOW 등이 있습니다.
//필드 inlie을 true로 한다면 필드가 밑으로 나눠지는게 아닌, 1줄에 2개 이상의 필드가 들어갑니다.
//필드 값은 안넣으면 안됩니다.
//임베드 예제 코드지 꼭 이걸 다 넣고 사용하라는건 아닙니다.
//필드 등의 명령어를 삭제할때는 필드 경우는 필드 끝 부터 필드 제작 부분 예제 코드 기준 3줄을 삭제하시면 됩니다.
//ㄴ 이외 임베드 삭제는 그 부분을 삭제하시면 됩니다.


//임베드 예제 코드 made by 달🌖#1799
