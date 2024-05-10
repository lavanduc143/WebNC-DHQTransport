$(document).ready(function(){
    // Khi liên kết Tạo đơn lẻ được nhấp
    $('#link1').click(function(){
      $('.content').hide(); // Ẩn tất cả các phần nội dung
      $('#content1').show(); // Hiển thị phần nội dung cho Tạo đơn lẻ
      $('.breadcrumb-item').removeClass('active'); // Loại bỏ lớp active từ tất cả các li
      $(this).addClass('active'); // Thêm lớp active vào li được nhấp
    });
  
    // Khi liên kết Nhập excel được nhấp
    $('#link2').click(function(){
      $('.content').hide(); // Ẩn tất cả các phần nội dung
      $('#content2').show(); // Hiển thị phần nội dung cho Nhập excel
      $('.breadcrumb-item').removeClass('active'); // Loại bỏ lớp active từ tất cả các li
      $(this).addClass('active'); // Thêm lớp active vào li được nhấp
    });
    $("#selectGroupAddress").change(function(){
        var selectedOption = $(this).children("option:selected").text();
        console.log("Đã chọn: " + selectedOption);
      });
  
    // Xử lý sự kiện khi người dùng nhấn nút Submit
    $("#submitBtn").click(function(){
    var selectedOption = $("#selectGroupAddress").val();
    var pickupTime = $("#pickupTime").val();
    
    if(selectedOption === "") {
        // Hiển thị thông báo lỗi nếu người dùng không chọn thông tin người gửi
        $(".invalid-feedback").show();
    } else {
        // Xử lý dữ liệu khi người dùng đã chọn thông tin người gửi và thời gian hẹn lấy
        console.log("Đã chọn: " + selectedOption);
        console.log("Thời gian hẹn lấy: " + pickupTime);
        
        // Để submit dữ liệu hoặc thực hiện các thao tác khác ở đây
    }
    });
    $("#confirmBtn").click(function(event) {
        $("#confirmBtn").click(function() {
            var isValid = true;
    
            // Kiểm tra trường Họ và tên
            if ($("#receiverName").val() === "") {
                $("#errorMessage1").text("Vui lòng nhập Họ và tên");
                isValid = false;
            } else {
                $("#errorMessage1").text("");
            }
    
            // Kiểm tra trường Số điện thoại
            if ($("#receiverPhoneNumber").val() === "") {
                $("#errorMessage2").text("Vui lòng nhập Số điện thoại");
                isValid = false;
            } else {
                $("#errorMessage2").text("");
            }
    
            // Kiểm tra trường Địa chỉ
            if ($("#receiverAddress").val() === "") {
                $("#errorMessage3").text("Vui lòng nhập Địa chỉ");
                isValid = false;
            } else {
                $("#errorMessage3").text("");
            }
    
            // Kiểm tra trường Tỉnh/Thành phố
            if ($("#province").val() === "") {
                $("#errorMessage4").text("Vui lòng chọn Tỉnh/Thành phố");
                isValid = false;
            } else {
                $("#errorMessage4").text("");
            }
    
            // Kiểm tra trường Quận/Huyện
            if ($("#district").val() === "") {
                $("#errorMessage5").text("Vui lòng chọn Quận/Huyện");
                isValid = false;
            } else {
                $("#errorMessage5").text("");
            }
    
            // Kiểm tra trường Xã/Phường
            if ($("#ward").val() === "") {
                $("#errorMessage6").text("Vui lòng chọn Xã/Phường");
                isValid = false;
            } else {
                $("#errorMessage6").text("");
            }
            //kiểm tra tên hàng
            if ($("#Tenhang").val() === "") {
                $("#errorMessage7").text("Vui lòng điền tên hàng");
                isValid = false;
            } else {
                $("#errorMessage7").text("");
            }
            if ($("#soluong").val() === "") {
                $("#errorMessage8").text("Điền số lượng");
                isValid = false;
            } else {
                $("#errorMessage8").text("");
            }
            if ($("#trongluong").val() === "") {
                $("#errorMessage9").text("Điền trọng lượng");
                isValid = false;
            } else {
                $("#errorMessage9").text("");
            }
            if ($("#giatri").val() === "") {
                $("#errorMessage10").text("Điền giá trị");
                isValid = false;
            } else {
                $("#errorMessage10").text("");
            }
            if ($("#kichthuoc").val() === "") {
                $("#errorMessage11").text("Nhập kích thước");
                isValid = false;
            } else {
                $("#errorMessage11").text("");
            }
            
    
            // Nếu dữ liệu hợp lệ, thực hiện hành động mong muốn ở đây
            if (isValid) {
                // Thực hiện hành động sau khi xác nhận
                alert("Dữ liệu hợp lệ, tiến hành xác nhận...");
            }
        });
    });
    // Xử lý sự kiện khi checkbox thay đổi trạng thái
    $('input[type="checkbox"]').change(function(){
        // Lấy tất cả các checkbox
        var checkboxes = $('input[name="checkboxloai"]');
        // Kiểm tra nếu checkbox đang xem xét đã được chọn
        if(this.checked) {
        // Loại bỏ trạng thái chọn của các checkbox khác
        checkboxes.not(this).prop('checked', false);
        }
    });
    $('input[type="radio"]').change(function(){
        // Lấy tất cả các checkbox
        var checkboxes = $('input[name="exampleRadio"]');
        // Kiểm tra nếu checkbox đang xem xét đã được chọn
        if(this.checked) {
        // Loại bỏ trạng thái chọn của các checkbox khác
        checkboxes.not(this).prop('checked', false);
        }
    });
});
  
  