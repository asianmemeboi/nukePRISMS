import Hat1 from '../assets/testImages/hat1.png';
import Hat2 from '../assets/testImages/hat2.png';
import Hat3 from '../assets/testImages/hat3.png';
import Hat4 from '../assets/testImages/hat4.png';

class ImageHandler {
    constructor(imgArr, start, stop) {
        this.images = imgArr;
        this.size = imgArr.length;
        this.start = start;
        this.stop = stop;
        this.speed = (stop - start) / this.size;
        this.progress = 0;
        this.getImage = this.getImage.bind(this);
    }

    getImage(scrollY) {
        let progress = 0;
        if (scrollY <= this.start) {
            progress = 0;
        } else if (scrollY >= this.end) {
            progress = this.size - 1;
        } else {
            progress = Math.floor((scrollY - this.start) / this.speed);
        }

        if (progress == this.progress) {
            return 0;
        } else {
            return this.images[progress];
        }
    }
}

const hatsArr = [
    Hat1,
    Hat2,
    Hat3,
    Hat4
];

const testImageHandler = ImageHandler(hatsArr, 7000, 7500);

export {
    testImageHandler
}