
// Điều hướng khi người dùng nhấn nút btn sang trang cảnh báo

const buttons = document.querySelectorAll('.btn');

        // Gán sự kiện click để điều hướng sang trang mới
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Điều hướng sang trang mới
                window.location.href = 'form đăng kí.html';
            });
        });


// Điều hướng trang
        const menua = document.querySelectorAll('a');

        // Gán sự kiện click để điều hướng sang trang mới
        menua.forEach(menua => {
            menua.addEventListener('click', function() {
                // Điều hướng sang trang mới
                window.location.href = 'warning.html';
            });
        });




// Hiệu ứng cuộn chuột tăng giảm kích thước cho header_1

    window.onscroll = function() {shrinkHeader()};

    function shrinkHeader() {
        const header = document.querySelector(".header_1");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    }





// Hiệu ứng animation, cho các phần tử trong trang
        ScrollReveal().reveal('.main .row', {
            duration: 500, // Thời gian hiệu ứng (milliseconds)
            origin: 'bottom', // Điểm bắt đầu của hiệu ứng
            distance: '100px', // Khoảng cách di chuyển
            reset: true // Cho phép hiệu ứng lặp lại khi cuộn trang
        });

        ScrollReveal().reveal('.header_2 img', {
            duration: 1000, // Thời gian hiệu ứng (milliseconds)
            origin: 'left', // Điểm bắt đầu của hiệu ứng
            distance: '50px', // Khoảng cách di chuyển
            reset: true // Cho phép hiệu ứng lặp lại khi cuộn trang
        });

        ScrollReveal().reveal('.main img', {
            duration: 1000, // Thời gian hiệu ứng (milliseconds)
            origin: 'left', // Điểm bắt đầu của hiệu ứng
            distance: '50px', // Khoảng cách di chuyển
            reset: true // Cho phép hiệu ứng lặp lại khi cuộn trang
        });

        ScrollReveal().reveal(".header h1 ",{
            duration: 500,
            origin: "bottom",
            distance: "120px",
            reset: true
        });


     