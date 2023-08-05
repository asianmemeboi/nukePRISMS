import Test0 from "../assets/testImages/Ink Reveal_00000.png"
import Test1 from "../assets/testImages/Ink Reveal_00001.png" 
import Test2 from "../assets/testImages/Ink Reveal_00002.png" 
import Test3 from "../assets/testImages/Ink Reveal_00003.png" 
import Test4 from "../assets/testImages/Ink Reveal_00004.png" 
import Test5 from "../assets/testImages/Ink Reveal_00005.png" 
import Test6 from "../assets/testImages/Ink Reveal_00006.png" 
import Test7 from "../assets/testImages/Ink Reveal_00007.png" 
import Test8 from "../assets/testImages/Ink Reveal_00008.png" 
import Test9 from "../assets/testImages/Ink Reveal_00009.png" 
import Test10 from "../assets/testImages/Ink Reveal_00010.png"
import Test11 from "../assets/testImages/Ink Reveal_00011.png"
import Test12 from "../assets/testImages/Ink Reveal_00012.png"
import Test13 from "../assets/testImages/Ink Reveal_00013.png"
import Test14 from "../assets/testImages/Ink Reveal_00014.png"
import Test15 from "../assets/testImages/Ink Reveal_00015.png"
import Test16 from "../assets/testImages/Ink Reveal_00016.png"
import Test17 from "../assets/testImages/Ink Reveal_00017.png"
import Test18 from "../assets/testImages/Ink Reveal_00018.png"
import Test19 from "../assets/testImages/Ink Reveal_00019.png"
import Test20 from "../assets/testImages/Ink Reveal_00020.png"
import Test21 from "../assets/testImages/Ink Reveal_00021.png"
import Test22 from "../assets/testImages/Ink Reveal_00022.png"
import Test23 from "../assets/testImages/Ink Reveal_00023.png"
import Test24 from "../assets/testImages/Ink Reveal_00024.png"
import Test25 from "../assets/testImages/Ink Reveal_00025.png"
import Test26 from "../assets/testImages/Ink Reveal_00026.png"
import Test27 from "../assets/testImages/Ink Reveal_00027.png"
import Test28 from "../assets/testImages/Ink Reveal_00028.png"
import Test29 from "../assets/testImages/Ink Reveal_00029.png"
import Test30 from "../assets/testImages/Ink Reveal_00030.png"
import Test31 from "../assets/testImages/Ink Reveal_00031.png"
import Test32 from "../assets/testImages/Ink Reveal_00032.png"
import Test33 from "../assets/testImages/Ink Reveal_00033.png"
import Test34 from "../assets/testImages/Ink Reveal_00034.png"
import Test35 from "../assets/testImages/Ink Reveal_00035.png"
import Test36 from "../assets/testImages/Ink Reveal_00036.png"
import Test37 from "../assets/testImages/Ink Reveal_00037.png"
import Test38 from "../assets/testImages/Ink Reveal_00038.png"
import Test39 from "../assets/testImages/Ink Reveal_00039.png"
import Test40 from "../assets/testImages/Ink Reveal_00040.png"
import Test41 from "../assets/testImages/Ink Reveal_00041.png"
import Test42 from "../assets/testImages/Ink Reveal_00042.png"
import Test43 from "../assets/testImages/Ink Reveal_00043.png"
import Test44 from "../assets/testImages/Ink Reveal_00044.png"
import Test45 from "../assets/testImages/Ink Reveal_00045.png"
import Test46 from "../assets/testImages/Ink Reveal_00046.png"
import Test47 from "../assets/testImages/Ink Reveal_00047.png"
import Test48 from "../assets/testImages/Ink Reveal_00048.png"
import Test49 from "../assets/testImages/Ink Reveal_00049.png"
import Test50 from "../assets/testImages/Ink Reveal_00050.png"
import Test51 from "../assets/testImages/Ink Reveal_00051.png"
import Test52 from "../assets/testImages/Ink Reveal_00052.png"
import Test53 from "../assets/testImages/Ink Reveal_00053.png"
import Test54 from "../assets/testImages/Ink Reveal_00054.png"
import Test55 from "../assets/testImages/Ink Reveal_00055.png"
import Test56 from "../assets/testImages/Ink Reveal_00056.png"
import Test57 from "../assets/testImages/Ink Reveal_00057.png"
import Test58 from "../assets/testImages/Ink Reveal_00058.png"
import Test59 from "../assets/testImages/Ink Reveal_00059.png"
import Test60 from "../assets/testImages/Ink Reveal_00060.png"
import Test61 from "../assets/testImages/Ink Reveal_00061.png"
import Test62 from "../assets/testImages/Ink Reveal_00062.png"
import Test63 from "../assets/testImages/Ink Reveal_00063.png"
import Test64 from "../assets/testImages/Ink Reveal_00064.png"
import Test65 from "../assets/testImages/Ink Reveal_00065.png"
import Test66 from "../assets/testImages/Ink Reveal_00066.png"
import Test67 from "../assets/testImages/Ink Reveal_00067.png"

function preloadImage(url) {
    (new Image()).src = url;
}

class ImageHandler {
    constructor(imgArr, start, stop) {
        this.images = imgArr;
        this.size = imgArr.length;
        this.start = start;
        this.stop = stop;
        this.speed = (stop - start) / this.size;
        this.progress = 0;
        this.getImage = this.getImage.bind(this);

        imgArr.forEach(preloadImage);
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

        if (progress === this.progress) {
            return 0;
        } else {
            this.progress = progress;
            return this.images[progress];
        }
    }
}

const hatsArr = [
    Test0,
    Test1, 
    Test2, 
    Test3, 
    Test4, 
    Test5, 
    Test6, 
    Test7, 
    Test8, 
    Test9, 
    Test10,
    Test11,
    Test12,
    Test13,
    Test14,
    Test15,
    Test16,
    Test17,
    Test18,
    Test19,
    Test20,
    Test21,
    Test22,
    Test23,
    Test24,
    Test25,
    Test26,
    Test27,
    Test28,
    Test29,
    Test30,
    Test31,
    Test32,
    Test33,
    Test34,
    Test35,
    Test36,
    Test37,
    Test38,
    Test39,
    Test40,
    Test41,
    Test42,
    Test43,
    Test44,
    Test45,
    Test46,
    Test47,
    Test48,
    Test49,
    Test50,
    Test51,
    Test52,
    Test53,
    Test54,
    Test55,
    Test56,
    Test57,
    Test58,
    Test59,
    Test60,
    Test61,
    Test62,
    Test63,
    Test64,
    Test65,
    Test66,
    Test67
];

const testImageHandler = new ImageHandler(hatsArr, 6800, 7300);

export {
    testImageHandler
}