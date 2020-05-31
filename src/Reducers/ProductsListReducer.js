import id975845img1 from '../photos/notebook-inspiron-17-img1.jpg';
import id975845img2 from '../photos/notebook-inspiron-17-img2.jpg';
import id364782img1 from '../photos/aurora-r8-computer-img1.jpg';
import id364782img2 from '../photos/dell_alienware_aurora_r8-img2.jpg';
import id854658img1 from '../photos/microsoft-surface-egronomic-keboard-img2.jpg';
import id854658img2 from '../photos/microsoft-surface-egronomic-keboard-img1.jpg';
import id254856img1 from '../photos/apple_airpods_pro_img1.jpg';
import id254856img2 from '../photos/apple_airpods_pro_img2.jpg';
import id125484img1 from '../photos/Razer-Basilisk-Ultimate-Mouse-img1.jpg';
import id125484img2 from '../photos/Razer-Basilisk-Ultimate-Mouse-img2.jpg';
import id582654img1 from '../photos/Razer-Wolverine-Tournament-Edition-Cotroller-img2.jpg';
import id582654img2 from '../photos/Razer-Wolverine-Tournament-Edition-Cotroller-img1.jpg';
import id365254img1 from '../photos/LG-V-Series-Sprint-Smartphone-V40-thinQ-img2.jpg';
import id365254img2 from '../photos/LG-V-Series-Sprint-Smartphone-V40-thinQ-img1.jpg';
import id425853img1 from '../photos/Apple-iMac-Compute-img1.jpg';
import id425853img2 from '../photos/Apple-iMac-Computer-img2.jpg';
import id695241img1 from '../photos/Apple-Series-5 Silver-Aluminum-Case-Smartwatch-img1.jpg';
import id695241img2 from '../photos/Apple-Series-5 Silver-Aluminum-Case-Smartwatch-img2.jpg';


const ProductsListReducer = (state = [
    [{id:975845, type:"Laptop", category:"Computers", subCategory:"Laptops", brand:"Dell", series:"Inspiron 17", model:"3000-Series", size:"15' Screen"},{inStock:10},{price:290,deal:false,dealDiscount:10,dealPrice:261},{img1:id975845img1,alt1:"inspiron 17 img",img2:id975845img2,alt2:"inspiron 17 img"}],
    [{id:364782, type:"Computer", category:"Computers", subCategory:"Desktops", brand:"Dell", series:"Alienware", model:"Aurora R8", size:"9th Gen Intel® Core™ i5 9400"},{inStock:10},{price:785,deal:true,dealDiscount:20,dealPrice:628},{img1:id364782img1,alt1:"alienware img",img2:id364782img2,alt2:"alienware img"}],
    [{id:854658, type:"Keyboard", category:"Computers", subCategory:"Keyboards", brand:"Microsoft", series:"Surface", model:"Ergonomic", size:"18' Wide"},{inStock:15},{price:125,deal:false,dealDiscount:10,dealPrice:112.5},{img1:id854658img1,alt1:"keyboard img",img2:id854658img2,alt2:"keyboard img"}],
    [{id:254856, type:"Earphones", category:"Accessories", subCategory:"Earphones", brand:"Apple", series:"Airpods", model:"Pro", size:"5.4 grams each"},{inStock:20},{price:250,deal:false,dealDiscount:10,dealPrice:225},{img1:id254856img1,alt1:"airpods img",img2:id254856img2,alt2:"airpods img"}],
    [{id:125484, type:"Mouse", category:"Accessories", subCategory:"Mouses", brand:"Razer", series:"Basilisk", model:"Ultimate", size:"Razer Focus+ Optical Sensor"},{inStock:10},{price:170,deal:true,dealDiscount:10,dealPrice:153},{img1:id125484img1,alt1:"Basilisk mouse img",img2:id125484img2,alt2:"Basilisk mouse img"}],
    [{id:582654, type:"Cotroller", category:"Xbox", subCategory:"Controllers", brand:"Razer", series:"Wolverine", model:"Tournament Edition", size:"Quick-release cable"},{inStock:7},{price:120,deal:false,dealDiscount:10,dealPrice:108},{img1:id582654img1,alt1:"xbox controller img",img2:id582654img2,alt2:"xbox controller img"}],
    [{id:365254, type:"Smartphone", category:"Mobile", subCategory:"Smartphones", brand:"LG", series:"V-Series", model:"Sprint", size:"V40 ThinQ™"},{inStock:10},{price:390,deal:false,dealDiscount:15,dealPrice:331.5},{img1:id365254img1,alt1:"v40 thinQ img",img2:id365254img2,alt2:"v40 thinQ img"}],
    [{id:425853, type:"Computer", category:"Computers", subCategory:"Desktops", brand:"Apple", series:"Mac", model:"iMac", size:"27' Screen"},{inStock:5},{price:1800,deal:false,dealDiscount:10,dealPrice:1620},{img1:id425853img1,alt1:"Imac img",img2:id425853img2,alt2:"Imac img"}],
    [{id:695241, type:"Smartwatch", category:"Accessories", subCategory:"Watches", brand:"Apple", series:"Series 5", model:"Silver Aluminum Case", size:"Sport Brand"},{inStock:10},{price:400,deal:false,dealDiscount:10,dealPrice:360},{img1:id695241img1,alt1:"apple watch5 img",img2:id695241img2,alt2:"apple watch5 img"}]
    ], action)=> {
    switch (action.type) {
            case 'decreaseInStock':
                state[action.productIndexData][1].inStock--
                return state=[...state]
            case 'increaseInStock':
                state[action.productIndexData][1].inStock++
                return state=[...state]
        default:
            return state
    }
}

export default ProductsListReducer;