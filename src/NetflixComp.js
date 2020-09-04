import React from "react";
import Netflix from "./Netflix";
import netflixData from "./Netflix_data";
import NetflixLover from "./NetflixLover";
import AmazonLover from "./AmazonLover";

// export default function NetflixComp(props) {
//     return (
//         <div>
//             <Netflix imgsrc={netflixData[0].imgsrc}
//                 title={netflixData[0].title}
//                 series__name={netflixData[0].series__name}
//                 link={netflixData[0].link} />

//             <Netflix imgsrc={netflixData[1].imgsrc}
//                 title={netflixData[1].title}
//                 series__name={netflixData[1].series__name}
//                 link={netflixData[1].link} />

//             <Netflix imgsrc={netflixData[2].imgsrc}
//                 title={netflixData[2].title}
//                 series__name={netflixData[2].series__name}
//                 link={netflixData[2].link} />

//             <Netflix imgsrc={netflixData[3].imgsrc}
//                 title={netflixData[3].title}
//                 series__name={netflixData[3].series__name}
//                 link={netflixData[3].link} />

//             <Netflix imgsrc={netflixData[4].imgsrc}
//                 title={netflixData[4].title}
//                 series__name={netflixData[4].series__name}
//                 link={netflixData[4].link} />
//         </div>
//     )
// }

// function with map
// export default function NetflixComp() {
//     return (
//         <div>
//             {netflixData.map(function (value) {
//                 return (
//                     <Netflix imgsrc={value.imgsrc}
//                         title={value.title}
//                         series__name={value.series__name}
//                         link={value.link} />
//                 )

//             })}
//         </div>
//     )
// }

// calback function with map
// export default function NetflixComp() {
//     const val = (value) => {
//         return (
//             <Netflix
//                 imgsrc={value.imgsrc}
//                 title={value.title}
//                 series__name={value.series__name}
//                 link={value.link} />
//         )
//     }
//     return (
//         <div>
//             {netflixData.map(val)}
//         </div>
//     )
// }

// calback function
export default function NetflixComp() {
    return (
        <div>
            {netflixData.map((value) => {
        return (
            <Netflix
                imgsrc={value.imgsrc}
                title={value.title}
                series__name={value.series__name}
                link={value.link} />
        )
    })}
        </div>
    )
}

// const Fav = "amazon";
// //if else conditions
// export default function NetflixComp() {
//   if (Fav === "netflix") {
//     return <AmazonLover />;
//   } else {
//     return <NetflixLover />;
//   }
// }


// Inline If-Else with Conditional Operator

// const Fav = "amazon";
// const NetflixComp = ()=>(
//     <>
//   {Fav === "amazon" ? <AmazonLover />:<NetflixLover />}
//   </>
// )
// export default NetflixComp;
