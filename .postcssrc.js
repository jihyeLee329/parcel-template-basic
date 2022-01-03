//ESM = 에크마 스크립트 모듈 = 에크마스크립트(자바스크립트) 에서 사용하는 모듈이다.
//근데 node.js에서는 ESM이 아닌 CommonJs를 지원함. 
//현재 이 파일은 rc가 붙어있고, 이거는 번들러를 통해 변환하는 파일이므로, 
//브라우저에서 동작하는 개념이 아니고, node.js에서 동작하는 개념임
//그래서 import 대신 require, export 대신 module.exports 
//브라우저에서 파일 가져오는 개념은 import, export 사용

// import 대신
//import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')


// export 대신
// export {
//     plugins :[
//         autoprefixer
//     ]
// }
// module.exports = {
//     plugins :[
//         autoprefixer
//     ]
// }


//윗 내용 간소화
module.exports = {
    plugins :[
        require('autoprefixer')
    ]
}
