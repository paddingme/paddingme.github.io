window.onload = function() {
    var url = "main.json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        if (request.status == 200) {
            updateTable(request.responseText); //自动加载表格数据函数
        }
    };
    request.send(null);
}

function updateTable(responseText) {
    var undisposed=document.getElementById('undisposed-data');
    var disposed= document.getElementById('disposed-data');
    var columnDatas = JSON.parse(responseText);
    var tbody1 = document.createElement("tbody");
    for (var i = 0; i < columnDatas.length; i++) {
        tbody1.innerHTML+=  '<tr><td>' + columnDatas[i].id + "</td><td>" + columnDatas[i].classifyName + '</td><td>' + columnDatas[i].aa + '</td><td>' + columnDatas[i].bb + '</td></tr>';
        undisposed.appendChild(tbody1);

    }

    //遍历数组，如果数据column.classifyName 一样，则合并 一样的所有列。这里全部当做数字处理，如果有字符串自行处理。
    var tbody2 = document.createElement("tbody");

    for (var i = 0; i < columnDatas.length; i++) {

        var j = i + 1;
        if (j < columnDatas.length) {
            while (columnDatas[i].classifyName === columnDatas[j].classifyName) {
                columnDatas[i].aa = parseInt(columnDatas[i].aa) + parseInt(columnDatas[j].aa);
                columnDatas[i].bb = parseInt(columnDatas[i].bb) + parseInt(columnDatas[j].bb);
                j++;
                if (j >= columnDatas.length) break;
            }
            //打印出来第一个
            tbody2.innerHTML += '<tr><td>' + columnDatas[i].id + "</td><td>" + columnDatas[i].classifyName + '</td><td>' + columnDatas[i].aa + '</td><td>' + columnDatas[i].bb + '</td></tr>';
            disposed.appendChild(tbody2);
            i = j - 1;
        }
    };
    //判断最后一个元素
    if (columnDatas.length >= 2) {
        if (columnDatas[(columnDatas.length - 1)].classifyName !== columnDatas[((columnDatas.length - 2))].classifyName)
            tbody.innerHTML += '<tr><td>' + columnDatas[(columnDatas.length - 1)].id + "</td><td>" + columnDatas[(columnDatas.length - 1)].classifyName + '</td><td>' + columnDatas[(columnDatas.length - 1)].aa + '</td><td>' + columnDatas[(columnDatas.length - 1)].bb + '</td></tr>';
        disposed.appendChild(tbody);
    }

    //打印合并后的数据是否对？！
    // for (var i = 0; i < columnDatas.length; i++) {
    //     console.log(
    //         columnDatas[i].id + "....." +
    //         columnDatas[i].classifyName + "....." +
    //         columnDatas[i].aa + "....." +
    //         columnDatas[i].bb + "....."
    //     )
    // };
}
