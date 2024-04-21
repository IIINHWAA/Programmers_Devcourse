const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'utf-8');
const orderlist_view = fs.readFileSync('./orderlist.html', 'utf-8');
const mariadb = require('./database/connect/mariadb');

//main function
function main(response){ //response가 '/'인 경우의 처리 함수
    console.log('main');
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write(main_view);
    response.end();
}

//icon function
function favicon(response) { 
    console.log("favicon");
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
}

//image function
function pizza(response) { 
    fs.readFile('./img/pizza.jpg', function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}

function chicken(response) { 
    fs.readFile('./img/chicken.jpg', function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}
   
function hamburger(response) { 
    fs.readFile('./img/hamburger.jpg', function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}

// 주문 버튼 클릭 시 데이터베이스 추가
function order(response, name, p_num, menu){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    let date=new Date().toLocaleDateString();

    console.log(name);
    console.log(p_num);
    console.log(date);
    console.log(menu);

    /*
    mariadb.query("INSERT INTO orderlist VALUES('인화','인화','인화','인화');" , function(err, rows){
        console.log(rows);
    });*/

    
    mariadb.query("INSERT INTO orderlist VALUES('"+name+"','"+p_num+"','"+p_num+"','"+menu+"');" , function(err, rows){
        console.log(rows);
    });


    response.write("Your order is complete.")
    response.end();
}

// 주문 내역 확인
function order_view(response){
    response.writeHead(200,{'Content-Type' : 'text/html'});

    mariadb.query("SELECT * FROM orderlist", function(err, rows){
        response.write(orderlist_view);

        response.write("<table>");
        response.write("<th>NAME</th>");
        response.write("<th>PHONE NUM</th>");
        response.write("<th>DATE</th>");
        response.write("<th>MENU</th>");
    
        rows.forEach(element => {
            response.write("<tr>"
                +"<td>"+element.name+"</td>"
                +"<td>"+element.phone+"</td>"
                +"<td>"+element.date+"</td>"
                +"<td>"+element.menu+"</td>"
                +"</tr>"
            );
        });

        response.write("</table>");
        response.end();
    });
}

let handle = {}; //key : value 로 이루어진 map
handle['/']=main; //pathname이 '/'안 경우 main 호출
handle["/favicon.ico"] = favicon; 
handle['/main.html'] = main;
handle['/order'] = order;
handle['/orderlist.html'] = order_view;


//이미지 경로
handle['/img/pizza.jpg'] = pizza;
handle['/img/chicken.jpg'] = chicken;
handle['/img/hamburger.jpg'] = hamburger;

exports.handle = handle;