
// //show-hide pass
// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector(".password");

// togglePassword.addEventListener("click", function () {

//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);

//      if (togglePassword.classList.contains("fa-eye")) {
//         togglePassword.classList.remove("fa-eye");
//         togglePassword.classList.add("fa-eye-slash");
//     } else {
//         togglePassword.classList.remove("fa-eye-slash");
//         togglePassword.classList.add("fa-eye");
//     }
// });   


// //validation
// (function () {
//     'use strict'

//     var forms = document.querySelectorAll('.needs-validation')

//     Array.prototype.slice.call(forms)
//         .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 } else {
//                     event.preventDefault(); 

//                     // Hiển thị thông báo đăng ký thành công
//                     var successMessage = document.createElement('div');
//                     successMessage.classList.add('alert', 'alert-success');
//                     successMessage.textContent = 'Đăng ký thành công!';
//                     form.parentNode.insertBefore(successMessage, form.nextSibling);

//                     // Chuyển hướng sang trang login.html sau 3 giây
//                     setTimeout(function () {
//                         window.location.href = 'login.html';
//                     }, 2000);

//                 }

//                 form.classList.add('was-validated')
//             }, false)
//         })

// })();

$(document).ready(function () {
    // Show-hide pass
    $("#togglePassword").click(function () {
        var password = $("#password");
        var type = password.attr("type") === "password" ? "text" : "password";
        password.attr("type", type);

        if ($("#togglePassword").hasClass("fa-eye")) {
            $("#togglePassword").removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
            $("#togglePassword").removeClass("fa-eye-slash").addClass("fa-eye");
        }
    });

    $("#togglePassword2").click(function () {
        var password = $("#password2");
        var type = password.attr("type") === "password" ? "text" : "password";
        password.attr("type", type);

        if ($("#togglePassword2").hasClass("fa-eye")) {
            $("#togglePassword2").removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
            $("#togglePassword2").removeClass("fa-eye-slash").addClass("fa-eye");
        }
    });

    // Validation
    $(".needs-validation").submit(function (event) {
        var form = $(this)[0];

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            // Hiển thị thông báo đăng ký thành công
            var successMessage = $('<div class="alert alert-success">Đăng ký thành công!</div>');
            $(form).parent().find('form').after(successMessage);

            // Chuyển hướng sang trang login.html sau 3 giây
            setTimeout(function () {
                window.location.href = 'login.html';
            }, 2000);
        }

        form.classList.add('was-validated');
    });
    // Hàm lựa chọn dễ dàng
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return $(el);
        } else {
            return $(el).first();
        }
    };

    // Hàm bắt sự kiện dễ dàng
    const on = (type, el, listener, all = false) => {
        if (all) {
            $(el).each(function() {
                $(this).on(type, listener);
            });
        } else {
            $(el).on(type, listener);
        }
    };

    // Hàm bắt sự kiện cuộn trang dễ dàng
    const onscroll = (el, listener) => {
        $(el).scroll(listener);
    };

    /**
     * Sidebar toggle
     */
    $('.toggle-sidebar-btn').on('click', function(e) {
        $('body').toggleClass('toggle-sidebar');
    });

    /**
     * Search bar toggle
     */
    $('.search-bar-toggle').on('click', function(e) {
        $('.search-bar').toggleClass('search-bar-show');
    });
    // Trạng thái kích hoạt của liên kết thanh điều hướng khi cuộn trang
    const navbarlinksActive = () => {
        let position = $(window).scrollTop() + 200;
        $('#navbar .scrollto').each(function() {
            let hash = $(this).attr('href');
            if (!hash) return;
            let section = $(hash);
            if (!section.length) return;
            if (position >= section.offset().top && position <= (section.offset().top + section.outerHeight())) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    };

    $(window).on('load', navbarlinksActive);
    onscroll(window, navbarlinksActive);

    // Toggle class .header-scrolled cho #header khi trang được cuộn
    const headerScrolled = () => {
        if ($(window).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    };

    $(window).on('load', headerScrolled);
    onscroll(window, headerScrolled);

    // Nút "Lên đầu trang"
    let backtotop = select('.back-to-top');
    if (backtotop.length) {
        const toggleBacktotop = () => {
            if ($(window).scrollTop() > 100) {
                backtotop.addClass('active');
            } else {
                backtotop.removeClass('active');
            }
        };

        $(window).on('load', toggleBacktotop);
        onscroll(window, toggleBacktotop);
    }

    // Khởi tạo tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Khởi tạo trình soạn thảo Quill
    if (select('.quill-editor-default').length) {
        new Quill('.quill-editor-default', {
            theme: 'snow'
        });
    }

    if (select('.quill-editor-bubble').length) {
        new Quill('.quill-editor-bubble', {
            theme: 'bubble'
        });
    }

    if (select('.quill-editor-full').length) {
        new Quill(".quill-editor-full", {
            modules: {
                toolbar: [
                    [{ font: [] }, { size: [] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ color: [] }, { background: [] }],
                    [{ script: "super" }, { script: "sub" }],
                    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                    ["direction", { align: [] }],
                    ["link", "image", "video"],
                    ["clean"]
                ]
            },
            theme: "snow"
        });
    }

    // Khởi tạo trình soạn thảo TinyMCE
    tinymce.init({
        selector: 'textarea.tinymce-editor',
        // Các cài đặt khác ở đây...
    });

    // Khởi tạo Bootstrap validation check
    $('.needs-validation').on('submit', function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        $(this).addClass('was-validated');
    });

    // Khởi tạo Datatables
    $('.datatable').each(function() {
        new simpleDatatables.DataTable($(this)[0], {
            perPageSelect: [5, 10, 15, ["All", -1]],
            columns: [
                { select: 2, sortSequence: ["desc", "asc"] },
                { select: 3, sortSequence: ["desc"] },
                { select: 4, cellClass: "green", headerClass: "red" }
            ]
        });
    });

    // Tự động điều chỉnh kích thước biểu đồ echart
    const mainContainer = select('#main');
    if (mainContainer.length) {
        setTimeout(() => {
            new ResizeObserver(function() {
                $('.echart').each(function() {
                    echarts.getInstanceByDom($(this)[0]).resize();
                });
            }).observe(mainContainer[0]);
        }, 200);
    }
});


