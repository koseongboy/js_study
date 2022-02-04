
function Song (title, writer, singer, released) {
    this.title = title;
    this.writer = writer;
    this.singer = singer;
    this.released = new Date(released);

    this.getSongInfo = function() {
        return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`;
    }
}

//콘솔 맨 아래 Prototype에 메소드 집어넣기
Song.prototype.getReleasedDay = function() {
    return this.released.getDay();

}


const song1 = new Song("love yourself", "eminem", "eminem", "1998-07-11");
const song2 = new Song("hater", "joe", "joe", "2015-11-22");

console.log(song1, song2);

//일요일부터 토요일까지 0~6
console.log(song1.released.getDay());
console.log(song2.getReleasedDay());

console.log(song2.getSongInfo());



class ClassSong {
    constructor(title, writer, singer, released) {
        this.title = title;
        this.writer = writer;
        this.singer = singer;
        this.released = new Date(released);
    }

    getReleasedDay() {
        return this.released.getDay();
    }
}

ClassSong.prototype.getSongInfo = function() {
    return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`;
}

const song3 = new ClassSong("Whiskey and Morphine", "Alexander Jean", "Alexander Jean", "2022-02-04");
console.log(song3);
console.log(song3.getSongInfo());