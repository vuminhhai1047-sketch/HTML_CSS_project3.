let welCom = 0;
let isAuthentication = false;

while (welCom < 3 ) {

    let logIn = prompt("Mời bạn nhập tài khoản: ");
    let passWord = prompt("Mời bạn nhập mật khẩu: ");

    if (logIn === "admin" && passWord === "12345" ) {
        alert("Đăng nhập thành công");
        isAuthentication = true;
        break;
    } else {
        welCom++;
        let maximum = 3 - welCom;

        if (logIn !== "admin" && passWord !== "12345") {
            alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${maximum} lần thử`);
        } else if (logIn !== "admin") {
            alert(`Sai tài khoản! Bạn còn ${maximum} lần thử.`);
        } else {
            alert(`Sai mật khẩu! Bạn còn ${maximum} lần thử`);
        }
    }
}

    if (!isAuthentication) {
            alert(`Tài khoản đã bị khóa do nhập sai quá 3 lần!`);
        }

    let libraries = ["Toán","Văn","Anh"];
    let choice;
    do {

        choice =+ prompt(`
            --- HỆ THỐNG QUẢN TRỊ THƯ VIỆN 4.0 ---
            1. Nhập thêm lô sách mới
            2. Hiển thị danh sách sách
            3. Tìm kiếm sách
            4. Cập nhật tên sách
            5. Đảo ngược thứ tự kệ sách
            6. Nhập kho từ nguồn khác
            7.Thoát chương trình
            Vui lòng chọn (1-7):
            `);

        switch(choice) {
            case 1:
                newBookAdd();
                break;
            case 2:
                displayBook();
                break;
            case 3:
                searchBook();
                break;
            case 4:
                updateBook();
                break;
            case 5:
                reserverBook();
                break;
            case 6:
                diferentBook();
                break;
            case 7:
                alert("Hệ thống đang đăng xuất...Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ,vui lòng thử lại");
        }


    } while(choice != 7 );

function newBookAdd() {

    let bookList = prompt("Nhập danh sách tên sách(cách nhau bởi dấu phẩy):");

    let newBooks = bookList.split(",");
    let count = 0;
    for (let i = 0 ; i < newBooks.length ; i++ ) {
        let name = newBooks[i].trim();
        if (name !== "" ) {
            libraries.push(name);
            count++;
        }
    }
    alert(`Đã thêm thành công ${count} cuốn sách mới.`);
}

function displayBook() {

    console.log("--- DANH SÁCH SÁCH HIỆN CÓ --- ");

    for (let j = 0 ; j < libraries.length ; j++ ) {
        console.log(`${j + 1 }. ${libraries[j]}`);
    }
    alert("Danh sách đã được in ra console (F12).");
}

function searchBook() {
    let searchBooks = prompt("Nhập tên cuốn sách cần tìm: ");

    if (libraries.includes(searchBooks)) {
        let indexx = libraries.indexOf(searchBooks);
        alert(`Sách ${searchBooks} đã được tìm thấy ở vị trí ${indexx}`);
    } else {
        alert(`Hiện tại vẫn chưa tìm thấy sách ${searchBooks}`)
    }
}

function updateBook() {

    let update = prompt("Nhập tên sách cần sửa: ");
    let foundName = libraries.indexOf(update);

    if ( foundName !== -1 ) {
        let newName = prompt(`Tìm thấy sách ${update}. Nhập tên mới:`);
        if (newName) {
            libraries[foundName] = newName;
            alert("Cập nhật sách thành công.");
        } else {
            alert("Không tìm thấy sách. Không cập nhật thành công.");
        }
    }
}

function reserverBook() {
    console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC --- ");
    libraries.reverse();
    for (let i = 0 ; i < libraries.length ; i++ ) {
        console.log(`Vị trí index [${i}]: ${libraries[i]}`);
    }
    alert("Thứ tự trên kệ đã thay đổi. Kiểm tra console.");
}

function diferentBook() {
    let extraLibrary = ["Sách Kỹ Năng" , "Truyện Tranh"];
    libraries = libraries.concat(extraLibrary);
    alert("Đã gộp kho sách từ chi nhánh khác thành công.");
}

