import Test0 from "../assets/testImages/Ink Reveal_00000.webp"
import Test1 from "../assets/testImages/Ink Reveal_00001.webp" 
import Test2 from "../assets/testImages/Ink Reveal_00002.webp" 
import Test3 from "../assets/testImages/Ink Reveal_00003.webp" 
import Test4 from "../assets/testImages/Ink Reveal_00004.webp" 
import Test5 from "../assets/testImages/Ink Reveal_00005.webp" 
import Test6 from "../assets/testImages/Ink Reveal_00006.webp" 
import Test7 from "../assets/testImages/Ink Reveal_00007.webp" 
import Test8 from "../assets/testImages/Ink Reveal_00008.webp" 
import Test9 from "../assets/testImages/Ink Reveal_00009.webp" 
import Test10 from "../assets/testImages/Ink Reveal_00010.webp"
import Test11 from "../assets/testImages/Ink Reveal_00011.webp"
import Test12 from "../assets/testImages/Ink Reveal_00012.webp"
import Test13 from "../assets/testImages/Ink Reveal_00013.webp"
import Test14 from "../assets/testImages/Ink Reveal_00014.webp"
import Test15 from "../assets/testImages/Ink Reveal_00015.webp"
import Test16 from "../assets/testImages/Ink Reveal_00016.webp"
import Test17 from "../assets/testImages/Ink Reveal_00017.webp"
import Test18 from "../assets/testImages/Ink Reveal_00018.webp"
import Test19 from "../assets/testImages/Ink Reveal_00019.webp"
import Test20 from "../assets/testImages/Ink Reveal_00020.webp"
import Test21 from "../assets/testImages/Ink Reveal_00021.webp"
import Test22 from "../assets/testImages/Ink Reveal_00022.webp"
import Test23 from "../assets/testImages/Ink Reveal_00023.webp"
import Test24 from "../assets/testImages/Ink Reveal_00024.webp"
import Test25 from "../assets/testImages/Ink Reveal_00025.webp"
import Test26 from "../assets/testImages/Ink Reveal_00026.webp"
import Test27 from "../assets/testImages/Ink Reveal_00027.webp"
import Test28 from "../assets/testImages/Ink Reveal_00028.webp"
import Test29 from "../assets/testImages/Ink Reveal_00029.webp"
import Test30 from "../assets/testImages/Ink Reveal_00030.webp"
import Test31 from "../assets/testImages/Ink Reveal_00031.webp"
import Test32 from "../assets/testImages/Ink Reveal_00032.webp"
import Test33 from "../assets/testImages/Ink Reveal_00033.webp"
import Test34 from "../assets/testImages/Ink Reveal_00034.webp"
import Test35 from "../assets/testImages/Ink Reveal_00035.webp"
import Test36 from "../assets/testImages/Ink Reveal_00036.webp"
import Test37 from "../assets/testImages/Ink Reveal_00037.webp"
import Test38 from "../assets/testImages/Ink Reveal_00038.webp"
import Test39 from "../assets/testImages/Ink Reveal_00039.webp"
import Test40 from "../assets/testImages/Ink Reveal_00040.webp"
import Test41 from "../assets/testImages/Ink Reveal_00041.webp"
import Test42 from "../assets/testImages/Ink Reveal_00042.webp"
import Test43 from "../assets/testImages/Ink Reveal_00043.webp"
import Test44 from "../assets/testImages/Ink Reveal_00044.webp"
import Test45 from "../assets/testImages/Ink Reveal_00045.webp"
import Test46 from "../assets/testImages/Ink Reveal_00046.webp"
import Test47 from "../assets/testImages/Ink Reveal_00047.webp"
import Test48 from "../assets/testImages/Ink Reveal_00048.webp"
import Test49 from "../assets/testImages/Ink Reveal_00049.webp"
import Test50 from "../assets/testImages/Ink Reveal_00050.webp"
import Test51 from "../assets/testImages/Ink Reveal_00051.webp"
import Test52 from "../assets/testImages/Ink Reveal_00052.webp"
import Test53 from "../assets/testImages/Ink Reveal_00053.webp"
import Test54 from "../assets/testImages/Ink Reveal_00054.webp"
import Test55 from "../assets/testImages/Ink Reveal_00055.webp"
import Test56 from "../assets/testImages/Ink Reveal_00056.webp"
import Test57 from "../assets/testImages/Ink Reveal_00057.webp"
import Test58 from "../assets/testImages/Ink Reveal_00058.webp"
import Test59 from "../assets/testImages/Ink Reveal_00059.webp"
import Test60 from "../assets/testImages/Ink Reveal_00060.webp"
import Test61 from "../assets/testImages/Ink Reveal_00061.webp"
import Test62 from "../assets/testImages/Ink Reveal_00062.webp"
import Test63 from "../assets/testImages/Ink Reveal_00063.webp"
import Test64 from "../assets/testImages/Ink Reveal_00064.webp"
import Test65 from "../assets/testImages/Ink Reveal_00065.webp"
import Test66 from "../assets/testImages/Ink Reveal_00066.webp"
import Test67 from "../assets/testImages/Ink Reveal_00067.webp"
import Test68 from "../assets/testImages/Ink Reveal_00068.webp"
import Test69 from "../assets/testImages/Ink Reveal_00069.webp"
import Test70 from "../assets/testImages/Ink Reveal_00070.webp"
import Test71 from "../assets/testImages/Ink Reveal_00071.webp"
import Test72 from "../assets/testImages/Ink Reveal_00072.webp"
import Test73 from "../assets/testImages/Ink Reveal_00073.webp"
import Test74 from "../assets/testImages/Ink Reveal_00074.webp"
import Test75 from "../assets/testImages/Ink Reveal_00075.webp"
import Test76 from "../assets/testImages/Ink Reveal_00076.webp"
import Test77 from "../assets/testImages/Ink Reveal_00077.webp"
import Test78 from "../assets/testImages/Ink Reveal_00078.webp"
import Test79 from "../assets/testImages/Ink Reveal_00079.webp"
import Test80 from "../assets/testImages/Ink Reveal_00080.webp"
import Test81 from "../assets/testImages/Ink Reveal_00081.webp"
import Test82 from "../assets/testImages/Ink Reveal_00082.webp"
import Test83 from "../assets/testImages/Ink Reveal_00083.webp"

const images = [];

function preloadImage(url) {
    const img = new Image();
    img.src = url;
    img.decode();
    images.push(img);
}

class ImageHandler {
    constructor(imgArr, start, stop) {
        this.images = imgArr;
        this.size = imgArr.length;
        this.start = start;
        this.stop = stop;
        this.speed = (stop - start) / this.size;
        this.progress = -1;
        this.getImage = this.getImage.bind(this);
        this.lastUpdate = -1;

        imgArr.forEach(preloadImage);
    }

    getImage(scrollY) {
        // const d = new Date();
        // if (d.getTime() - this.lastUpdate <= 100) return 0;

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
            this.lastUpdate = d.getTime();
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
    Test67,
    Test68,
    Test69,
    Test70,
    Test71,
    Test72,
    Test73,
    Test74,
    Test75,
    Test76,
    Test77,
    Test78,
    Test79,
    Test80,
    Test81,
    Test82,
    Test83
];

const testImageHandler = new ImageHandler(hatsArr, 6800, 10800);

export {
    testImageHandler
}