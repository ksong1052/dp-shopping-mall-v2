const express = require('express');

/* MongoDB Connection */
const dbConnect = require('./database/db');
dbConnect();

/* Express에 미들웨어 설정 및 적용 */
const morgan = require('morgan'); // 로그 관리 
const helmet = require('helmet'); // 웹 사이트의 보안을 강화하기 위해
const cors = require('cors'); // 문제없이 적용이 되려면 app을 정의해 주기 전에 해 줘야 한다.
const bodyParser = require('body-parser');  // Client에서 보내 준 body 값을 조작
const cookieParser = require('cookie-parser');  // 브라우저 cookie값을 조작

// Routes 디렉토리에 있는 index.js는 생략 가능
// 해당 api mapping
const api = require('./routes');
 
/* Middleware 연결 */
const app = express();
app.use(express.json());
app.use(morgan('dev')); // 개발할 때 설정, 배포할 때는 "combined"를 사용하는 것이 좋다.
app.use(helmet());
app.use(cors());

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());;
// Cookies에 있는 정보를 분석해 준다.
app.use(cookieParser());

app.use('/api', api);


module.exports = app;