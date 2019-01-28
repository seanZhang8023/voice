const baoma = ["X5", 2, 3, 4, 5]
const benz = ["E", 2, 3, 4, 5, 6]
const audi = ["A6L", "A3","A4","A4L","A5","A6","A6L_energy","A7","A8L","Q2L","Q3","Q5","Q5_import","Q5L","Q7","R8","RS3","S3","S4","S5","TT","TT_RS"]
const volvo = ["XC60", 2, 3, 4]

export const car_Brand = ["Oddey", "Benz", "BMW", "Volvo", "JAGUAR", "LINCOLN", "LAND-ROVER", "porsche"]


export const car_Type = {
  "Oddey": audi,
  "BMW": baoma,
  "Benz": benz,
  "Volvo": volvo,
}

export const car_Color = {
  "Oddey": {
    "A6L":["black","silver"],
    "A3":["white"],
    "A4":["white"],
    "A4L":["white"],
    "A5":["white"],
    "A6":["black"],
    "A6L_energy":["white"],
    "A7":["silver"],
    "A8L":["dull_red"],
    "Q2L":["blue"],
    "Q3":["orange"],
    "Q5":["white"],
    "Q5_import":["white"],
    "Q5L":["red"],
    "Q7":["white"],
    "R8":["blue"],
    "RS3":["blue"],
    "S3":["white"],
    "S4":["white"],
    "S5":["red"],
    "TT_RS":["blue"],
    "TT":["yellow"]
  },
  "BMW": ["white", "blue"],
  "Benz": ["red"],
  "Volvo": ["white"]

}


export const defaultValue = {
  "Oddey": {
    "carType": "A6L",
    "carColor": "black"
  },
  "BMW": {
    "carType": "X5",
    "carColor": "white"
  },
  "Benz": {
    "carType": "E",
    "carColor": "red"
  },
  "Volvo": {
    "carType": "XC60",
    "carColor": "white"
  }
}


export const carLogo = {
  "Oddey": "carBrand/Oddey.png",
  "BMW": "carBrand/BMW.png",
  "Benz": "carBrand/Benz.png",
  "Volvo": "carBrand/Volvo.png",
  "LAND-ROVER": "carBrand/LAND-ROVER.png",
  "JAGUAR": "carBrand/JAGUAR.png",
  "LINCOLN": "carBrand/LINCOLN.png",
  "porsche": "carBrand/porsche.png"
}


export const plicyCompany = {
  "1": {
    "image": "images/plicy/company-1.png",
    "name": "大地保险"
  },
  "2": {
    "image": "images/plicy/company-2.png",
    "name": "太平洋产险"
  },
  "3": {
    "image": "images/plicy/company-3.png",
    "name": "人保财险"
  },
  "4": {
    "image": "images/plicy/company-4.png",
    "name": "阳光财险"
  },
  "5": {
    "image": "images/plicy/company-5.png",
    "name": "拓狐车险"
  },
  "6": {
    "image": "images/plicy/company-6.png",
    "name": "智保车险"
  }

}

export let getCarTypeImg = (carBrand, carType) => {
  let image = `carType/${carBrand}/${carBrand}-${carType}.png`
  return image
}

export let getCarInsidePics = (car_Brand,car_Type) => {
  let pic = `carInside/${car_Type}/index.html`
  if (car_Brand == "Oddey") {
    pic = `carInside/${car_Brand}/${car_Type}/front/index.html`
  }
  return pic
}

export let getCarOutSidePics = (car_Brand,car_Type, car_Color) => {
  let pic = `outSideCar/${car_Type}-${car_Color}/index.html`
  if(car_Brand=="Oddey") pic = `outSideCar/${car_Brand}/${car_Type}-${car_Color}/index.html`
  return pic
}


export let getCarShopInfo = (carBrand, index) => {
  let pic = `images/VR/rightErea/${carBrand}-${index}.png`
  return pic
}

export let dataArray = [
  {
    pic: "images/plicy/plicy-info-left.png",
    background: "images/plicy/plicy-info-left-bg.png",
  },
  {
    pic: "images/plicy/plicy-plan-left.png",
    background: "images/plicy/plicy-plan-left-bg.png"
  },
  {
    pic: "images/plicy/plicy-final-left.png",
    background: "images/plicy/plicy-final-left-bg.png",
  },
]

export let car_type_Oddey_old = {
  "A6L":"-2515px 0px",//1965
  "A3":"-2795px 0px",//2185
  "A4": "-275px 0px",  //205
  "A4L":"-2655px 0px",//2075
  "A5":"-1395px 0px",//1085
  "A6":"-975px 0px",//755
  "A6L_energy": "-2940 0px",
  "A7":"-835px 0px",//645
  "A8L":"-695px 0px",//535
  "Q2L":"-2375px 0px",//1855
  "Q3":"-2095px 0px",//1635
  "Q5":"-415px 0px", //315
  "Q5_import":"5px 0px",
  "Q5L":"-2235px 0px",//1745
  "Q7":"-135px 0px",
  "R8":"-1815px 0px",//1415
  "RS3":"-1955px 0px",//1525
  "S3":"-1535px 0px",//1195
  "S4":"-1255px 0px",//975
  "S5":"-1115px 0px",////865
  "TT":"-555px 0px", //425
  "TT_RS":"-1675px 0px"//1305
}

export let car_type_Oddey = {
  "A6L":"-1975px 0px",//1965
  "A3":"-2195px 0px",//2185
  "A4": "-215px 0px",  //205
  "A4L":"-2085px 0px",//2075
  "A5":"-1095px 0px",//1085
  "A6":"-765px 0px",//755
  "A6L_energy": "-2310px 0px",
  "A7":"-655px 0px",//645
  "A8L":"-545px 0px",//535
  "Q2L":"-1865px 0px",//1855
  "Q3":"-1645px 0px",//1635
  "Q5":"-325px 0px", //315
  "Q5_import":"5px 0px",
  "Q5L":"-1755px 0px",//1745
  "Q7":"-105px 0px",
  "R8":"-1425px 0px",//1415
  "RS3":"-1535px 0px",//1525
  "S3":"-1205px 0px",//1195
  "S4":"-985px 0px",//975
  "S5":"-875px 0px",////865
  "TT":"-435px 0px", //425
  "TT_RS":"-1315px 0px"//1305
}
