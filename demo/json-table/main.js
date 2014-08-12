window.onload = function() {
    var url = "main.json";
    //url是数据接口；json数据格式注意要用双引号
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
    var template = document.getElementById('template');
    var columnDates = JSON.parse(responseText);
    //遍历数组，如果数据column.classifyName 一样，则合并 一样的所有列。这里全部当做数字处理，如果有字符串自行处理。
    var tbody = document.createElement("tbody");
    for (var i = 0; i < columnDates.length; i++) {
        var j = i + 1;
        if (j < columnDates.length) {
            while (columnDates[i].classifyName === columnDates[j].classifyName) {
                columnDates[i].aa = parseInt(columnDates[i].aa) + parseInt(columnDates[j].aa);
                columnDates[i].bb = parseInt(columnDates[i].bb) + parseInt(columnDates[j].bb);
                j++;
                if (j >= columnDates.length) break;
            }
            //打印出来第一个
            tbody.innerHTML += '<tr><td>' + columnDates[i].id + "</td><td>" + columnDates[i].classifyName + '</td><td>' + columnDates[i].aa + '</td><td>' + columnDates[i].bb + '</td></tr>';
            template.appendChild(tbody);
            i = j - 1;
        }
    };

    //判断最后一个元素
    //
    if (columnDates.length >= 2) {
        if (columnDates[(columnDates.length - 1)].classifyName !== columnDates[((columnDates.length - 2))].classifyName)
            tbody.innerHTML += '<tr><td>' + columnDates[(columnDates.length - 1)].id + "</td><td>" + columnDates[(columnDates.length - 1)].classifyName + '</td><td>' + columnDates[(columnDates.length - 1)].aa + '</td><td>' + columnDates[(columnDates.length - 1)].bb + '</td></tr>';
        template.appendChild(tbody);
    }

    //打印合并后的数据是否对？！
    // for (var i = 0; i < columnDates.length; i++) {
    //     console.log(
    //         columnDates[i].id + "....." +
    //         columnDates[i].classifyName + "....." +
    //         columnDates[i].aa + "....." +
    //         columnDates[i].bb + "....."
    //     )
    // };
}
