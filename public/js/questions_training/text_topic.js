var questions = [
  {
    id: '1',
    quest: 'Bây giờ có đến mấy bộ sách giáo khoa lận, không biết phải mua quyển nào cho con nó học đây',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '2',
    quest: 'Các bác cho em hỏi sao mà làm hồ sơ cho con vào trường công lập chuyên nhỉ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '3',
    quest: 'Tôi đang muốn tìm gia sư tiếng anh cho con mình, yêu cầu là nữ, điểm tiếng anh thi THPT quốc gia trên 8, mỗi tuần 2 buổi, tiền lương thỏa thuận',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '4',
    quest: 'Giáo dục nơi đó yếu quá, chủ yếu là giáo viên trục tiếp giảng dạy.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '5',
    quest: 'Nhận xét quá trình giảng dạy của giảng viên chưa bạn',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '6',
    quest: 'Học trong 2-3 tháng, lịch học sau khai giảng sẽ thảo luận sao cho phù hợp nhất với điều kiện thực tế của học viên và giáo viên giảng dạy',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '7',
    quest: 'Giảng viên dứt khoát xịn hơn giáo viên vì giảng viên đại học được trông thi tốt nghiệp còn giáo viên thì được nghỉ dưỡng sức',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '8',
    quest: 'Đúng là giảng viên có khác tiếp thu tiếng việt cũng nhanh ghê khi giảng viên ha vớt được thầy giáo việt nam dạy học',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '9',
    quest: 'Khu mình có trung tâm tiếng trung nào tuyển giáo viên giảng dạy không nhỉ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '10',
    quest: 'giáo viên khoa công nghệ tự động rất tận tâm giảng dạy nha em, đây là kinh nghiệm của chị',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '11',
    quest: 'Tôi cần mua một bộ máy tính để bàn phục vụ công việc văn phòng, giá cả dưới 10 triệu ạ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '12',
    quest: 'năm nay, một số loại máy tính mới được ra mắt',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '13',
    quest: 'em cần tìm pc như sau tổng 25tr cả màn hình cả webcam tai nghe',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '14',
    quest: 'hết điện thoại hỏng, đến máy tính hỏng. ai biết máy tính bị sao k chỉ e phát ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '15',
    quest: 'em có cái máy tính tích hợp màn và cây, muốn lắp cục pin giống như laptop vào thêm được không bác',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '16',
    quest: 'bạn có biết đổ mực máy in và sửa chữa máy tính không ạ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '17',
    quest: 'vậy sao ko thiết kế như bàn phím máy tính luôn đỡ bấm nhầm',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '18',
    quest: 'chợ mình ai có dàn máy tính không dùng mà bán. nhắn em nhé',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '19',
    quest: 'từ cơ thể con người, các loài động vật cho đến cấu trúc động cơ máy, tất cả đều có thể được phân tích chi tiết sống động bằng chiếc máy tính xách tay áp dụng công nghệ thực tế ảo',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '20',
    quest: 'cần mua ổ cứng máy tính bàn? ai có thanh lý thì comment nhé',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '21',
    quest: 'Tôi dạo này hay bị ho nóng sốt, nhưng không muốn đi khám, không biết có thuốc nam nào hiệu qủa không',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '22',
    quest: 'Mưa nắng thất thường bạn nào hoặc có người thân hay bị đau đầu,đau mỏi vai gáy nhắn tin cho em nhé, không phải uống thuốc tây nha',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '23',
    quest: 'Đã có ai bị như mình chưa ạ, mình bị trên lưng mấy năm nay rồi, cũng thường xuyên tắm lá chè xanh mà vẫn không bớt giảm gì cả. Mọi người cho mình vài góp ý với ạ.',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '24',
    quest: 'viêm lỗ chân lông và mụn lưng e tắm muối tắm thảo dược là khỏi nha',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '25',
    quest: 'Người mệt mỏi, suy nhược, hay lo lắng thì nặng đầu thôi bạn, với lại nếu mắt đi bụi, cay mắt, hay mắt làm việc với cường độ cao thì có thể đỏ nhé.',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '26',
    quest: 'Anh hạn chế sử dụng thuốc lá và ăn uống đầy đủ để cải thiện sức khỏe',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '27',
    quest: 'Sẹo này làm gì có cái thuốc nào bôi khỏi được em, đi phẫu thuật thôi',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '28',
    quest: 'Dấu hiệu dạ dày bạn đang bị tổn thương đó. Về lâu dài rất nguy hiểm',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '29',
    quest: 'Bổ xung thực phẩm chứ nhiều canxi và magie nhé.',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '30',
    quest: 'Em 17 tuổi cao 1m6 muốn phát triển chiều cao đều đặn em cần phải làm gì ạ',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '31',
    quest: 'tìm phòng khách sạn, nhà nghỉ móng cái, anh chị em nào kinh doanh phòng còn phòng cho em xin liên hệ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '32',
    quest: 'nhà nghỉ nó còn kiểm tra phòng trước khi check out nữa là khách sạn 5 sao',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '33',
    quest: 'Mình cần tìm phòng trọ quang khu vực bách khoa, điều hòa nóng lạnh đầy đủ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '34',
    quest: 'Đúng là ở nhà vinhome thích thật sự, dịch vụ tiện ích đầy đủ, an toàn tiện lợi.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '35',
    quest: 'phòng đẹp giá hời, phục vụ bạn ghé link để đặt phòng nhé',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '36',
    quest: 'có phòng trong công nghệ thông tin 1tr2 phòng như nhà nghỉ điều hoà nóng lạnh đầy đủ, bác chủ nhà trách nhiệm vui tính',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '37',
    quest: 'bán nhà 4 tầng mặt tiền nguyễn tất thành. viu biển mát mẻ, đang kinh doanh nhà nghỉ tổng 11 phòng wc khép kín',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '38',
    quest: 'Chỗ tôi ở khá là chật, xa trung tâm thành phố',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '39',
    quest: 'mình có 3 phòng khách sạn studio suites tại vinpearl condotel empire nha trang muốn để lại, quá rẻ nên các bạn vui lòng không mặc cả nhé',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '40',
    quest: 'tìm phòng khách sạn, nhà nghỉ móng cái',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '41',
    quest: 'Tin tức kinh tế, tài chính, doanh nhân và doanh nghiệp, thị trường trong nước và thế giới.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '42',
    quest: 'Nước đang phát triển là quốc gia có mức sống còn khiêm tốn, có nền tảng công nghiệp chưa phát triển và có chỉ số phát triển con người không cao',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '43',
    quest: 'Đầu tiên, để trở thành một doanh nhân, bạn phải liên tục học hỏi.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '44',
    quest: 'Sợ cơm, mì, trà sữa, thịt, rồi giờ ăn cái gì đây',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '45',
    quest: 'Ăn khóm nhiều vào bạn, uống cam mỗi ngày vào buổi sáng, bổ sung rau củ quả tươi vào mỗi bữa ăn nhé.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '46',
    quest: 'mọi người cho xin địa chỉ uống trà sữa với',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '47',
    quest: 'Mình thích nhất là sang đông hưng ăn mì cay và ăn đồ nướng KFC uống bia',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '48',
    quest: 'Anh em bạn è sành ăn cho e hỏi, quanh lục nam mình có nhà hàng nào ăn uống mà có đồ hải sản tươi cua ghẹ các kiểu cho e xin cái',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '49',
    quest: 'Sợ cơm, mì, trà sữa, thịt, rồi giờ ăn cái gì đây',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '50',
    quest: 'Thèm ăn đồ nướng hải sân tôm cua cá ghẹ ghê',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '51',
    quest: 'Hôm nay chơi game không thắng được trận nào',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '52',
    quest: 'dạo này đi ngủ muộn cơ thể không được khỏe',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '53',
    quest: 'Mỗi ngày gập bụng một trăm cái, sức khỏe tăng lên nhanh chóng',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '54',
    quest: 'tôi sáng nào cũng tập thể dục, cảm thấy người khỏe lắm mọi người ạ',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '55',
    quest: 'Tôi ngày nào cũng ăn uống đủ dinh dưỡng, cơ thể phát triển toàn diện, khỏe mạnh lắm',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '56',
    quest: 'có làm thì mới có ăn',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '57',
    quest: 'tôi ở Hồ Tùng Mậu',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '58',
    quest: 'tôi ở gần hồ hoàn kiếm',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '59',
    quest: 'làm sao mua được nhà ở Hà Nội',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '60',
    quest: 'Em ở gần vinhome , anh tới chỗ đó em qua đón',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '61',
    quest: 'tôi ở gần hồ hoàn kiếm',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '62',
    quest: 'Bộ giáo dục sắp ban hành bộ sách giáo khoa cấp một mới',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '63',
    quest: 'Hôm nay Flash thắng với tỷ số ba hai',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '64',
    quest: 'Bà kể cho tôi nghe về câu chuyện tình yêu của bà , đẹp lắm',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '65',
    quest: 'Không có ai trên đời muốn thể mua một cây đàn mà nó không có dây cả, họ không thể làm gì với nó ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '66',
    quest: 'Hành vi tàn bạo, lộng quyền của Đổng Trác khiến quan lại vô cùng phẫn nộ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '67',
    quest: 'Trong thời kì Đổng Trác nắm quyền, vẫn còn nhiều trung thần như Vương Doãn đang tìm cách diệt trừ Trác',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '68',
    quest: 'Cuộc chiến kéo dài nhiều năm giữa Ngụy và Thục thì phía Ngụy liên tục đổi ngôi',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '69',
    quest: 'Ngu mà tỏ ra nguy hiểm thì không có gì phải sợ, đáng sợ là người nguy hiểm mà tỏ ra ngu',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '70',
    quest: 'tôi nhớ thỉnh thoảng mẹ tôi vẫn nướng bánh mì cháy khét',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '71',
    quest: 'Em biết phải nấu nướng thế nào mà',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '72',
    quest: 'Hôm nay đi học thầy Huấn dạy môn đạo đức',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '73',
    quest: 'Thầy Huấn dạy thì chí phải, thầy không chỉ dạy đạo đức mà còn dạy cả văn học',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '74',
    quest: 'Em muốn tìm học khóa học văn trực tuyến thì tìm ở đâu ạ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '75',
    quest: 'Nay thầy giáo nhắc học phần tín hiệu và hệ thống',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '76',
    quest: 'Nếu mà đánh giá năng lực ko tổ chức thi, thì con quan vẫn làm quan',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '77',
    quest: 'Thôi đừng học các em ạ. Sv năm 4 mà vẫn cảm thấy hối tiếc vì theo đh đây',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '78',
    quest: 'Ngày nay học trên trường không là chưa đủ, cần phải tự học, tìm tòi khám phá',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '79',
    quest: 'Trường Minh Khai tổ chức khóa dạy học tiếng anh miễn phí',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '80',
    quest: 'Ngày nào thầy giáo cũng dạy mộn đạo đức',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '81',
    quest: 'Giáo dục thời nay chậm tiến quá',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '82',
    quest: 'Học trực tuyến nhiều vấn đề phát sinh quá, học sinh không được tiếp cận với bạn bè và giáo viên',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '83',
    quest: 'Học hết khóa học tiếng anh này là đủ để nói chuyện chứ ạ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '84',
    quest: 'Mình thấy đọc sách giáo khoa không là chưa đủ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '85',
    quest: 'Năm nay không thấy thi môn lịch sử ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '86',
    quest: 'Khổ, các loại hình vận tải không hoạt động mà dân có nhu cầu đi lại thì phải làm sao? Cấm cái này nó mọc cái kia, nhất là dân mình có kiểu khôn lỏi. Vì vậy khó quản lắm.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '87',
    quest: 'Những người này họ không hề biết sợ là gì, không thể hiểu nổi ý thức quá kém cỏi',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '88',
    quest: 'Chở phải 1 ông Covid về tỉnh xong lây cho cả cộng đồng à. Nghĩ mà sợ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '89',
    quest: 'Phải giam xe tới khi nào chính phủ công bố hết dịch chúng nó mới biết Ngu là gì.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '90',
    quest: 'Xem video thấy thật thư giãn, diễn viên quá đạt',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '91',
    quest: 'Phải sử thật nặng để làm gương cho người khác',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '92',
    quest: 'Giống như rải nắm lúa cho gà ăn vậy.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '93',
    quest: 'đang cách ly còn đi đâu nữa, giá cả thì cắt cổ.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '94',
    quest: 'Có ai mới nhìn hình chưa đọc bài cứ tưởng đó là cỏ, cấn sa và ma túy đá không',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '95',
    quest: 'Mấy con bán hàng chắc khóc thét',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '96',
    quest: 'Chưa bao giờ thích xem thời sự như thế này',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '97',
    quest: 'cầu nguyện cho cả thế giới mau chóng vượt qua ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '98',
    quest: 'ra thử ban công xem có đc xem nhạc sống như này k',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '99',
    quest: 'Việt nam vô địch. Nên nhớ k kẻ thù nào mà ta k đánh dc',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '100',
    quest: 'Tuyệt vời Việt Nam ơi ! Cả thế giới hãy ko chúc nhau vạn sự như Ý mà hãy chúc nhau vạn sự như Việt Nam !',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '101',
    quest: 'Thật hy vọng ngày nào cũng nhận được tin như vậy',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '102',
    quest: 'Giàu thôi nghèo quên đi',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '103',
    quest: 'IPhone 10 bao giờ ra mắt thế',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '104',
    quest: 'Về thông số kỹ thuật, iPhone SE 2020 mạnh mẽ ngang ngửa iPhone 11',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '105',
    quest: 'Một trong những robot hút bụi, lau nhà đang được ưa chuộng nhất hiện nay phải nhắc đến Ecovacs T5 Hero',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '106',
    quest: 'Mới đây, thông tin hơn 500.000 tài khoản Zoom đã bị đánh cắp và rao bán thông tin cá nhân trên các trang web đen gây hoang mang cho người dùng.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '107',
    quest: 'Máy hút bụi nước công nghiệp được biết tới là dòng sản phẩm được sử dụng trong các khu công nghiệp, đơn vị, doanh nghiệp,... có diện tích lớn',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '108',
    quest: 'Trên thị trường có không ít các thương hiệu tháp làm mát khác nhau.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '109',
    quest: 'Nhiều mẫu TV mang thương hiệu Xiaomi được giảm giá hàng triệu đồng trong tháng này.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '110',
    quest: 'Xiaomi vừa bổ sung thêm dòng sản phẩm mới vào nền tảng gây quỹ Youpin của mình mẫu quạt di động ZMI với thời lượng pin khủng 12h cùng mức giá không thể rẻ hơn chỉ 165.000VNĐ.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '111',
    quest: 'Hàng loạt các cửa hàng, siêu thị điện máy giảm nửa giá các loại TV trên website bán hàng. Chớp cơ hội, sắm ngay kẻo lỡ.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '112',
    quest: 'Bạn đang muốn tìm kiếm một thiết bị máy nén khí không dầu nhưng không biết mua máy nào vì trên thị trường có rất nhiều sản phẩm đến từ các hãng sản xuất khác nhau?',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '113',
    quest: 'Với thiết kế hiện đại, phong cách, tích hợp nhiều công nghệ mới trong làm lạnh, máy lạnh Sharp đang là một sản phẩm được ưa chuộng trên thị trường hiện nay',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '114',
    quest: ' Tuyến cáp quang biển xảy ra sự cố, Công ty HTC Viễn Thông Quốc Tế (HTC-ITC) tuyên bố không bị ảnh hưởng.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '115',
    quest: 'Khi vận động, cơ thể sẽ tiết ra một loại hormon giúp bạn có giấc ngủ ngon hơn vào ban đêm.',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '116',
    quest: 'Ảnh hưởng sức khỏe là một trong những tác động nguy hại nhất khi bạn quá lười biếng',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '117',
    quest: 'Tim là một cơ bắp giống như bất kỳ cơ bắp khác trong cơ thể, nếu không được luyện tập thường xuyên, nó cũng bị suy yếu',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '118',
    quest: 'Bình thường, bạn không tập thể dục nên tim không có cơ hội luyện tập',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '119',
    quest: 'Stress là kẻ giết người âm thầm và gây ra nhiều ảnh hưởng tiêu cực lên cơ thể dù bạn có lười biếng hay không',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '120',
    quest: ' Lười vận động là một trong những nguyên nhân hàng đầu gây tăng cân do lượng calo dư thừa trong cơ thể không được đốt cháy và ngày càng tích tụ nhiều hơn',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '121',
    quest: 'Một loạt các nghiên cứu được đăng trên Tạp chí khoa học The Lancet cho biết, cứ 10 người chết sớm thì có 1 người chết do không tập thể dục',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '122',
    quest: 'Chính việc này khiến cho cơ thể cảm thấy uể oải và lười vận động. Hãy ngừng sử dụng mạng xã hội, bạn sẽ thấy hứng khởi tập luyện',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '123',
    quest: 'Dù chỉ bằng những động tác đơn giản cũng có ích cho cơ thể, tránh tình tạng trì trệ',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '124',
    quest: 'Việc tạo thói quen rèn luyện thể chất cũng chính là tác động hữu hiệu nhất để chống lại bệnh tật và phòng dịch hiệu quả.',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '125',
    quest: 'Tình trạng mất ngủ không chỉ khiến cơ thể mệt mọi vào ngày hôm sau, mà còn khiến cơ thể không kiểm soát được hóc môn căng thẳng, khiến huyết áp tăng.',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '126',
    quest: 'Bình thường, bộ ruột con người chứa cả chục nghìn tỷ vi khuẩn trong cả ngàn loài khác nhau.',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '127',
    quest: 'Đây là những vi sinh vật, vi khuẩn và nấm men, có lợi cho cơ thể sống chủ yếu ở ruột già giúp cân bằng tự nhiên hệ vi sinh đường ruột.',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '128',
    quest: 'Tuy chưa có đồng thuận rộng rãi, các nhà dinh dưỡng cho rằng lượng chất xơ prebiotic trung bình hàng ngày được khuyến nghị từ 4 đến 8 gram để cho hỗ trợ hệ tiêu hóa chung',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '129',
    quest: 'Hệ vi sinh đường ruột với hàng nghìn tỷ vi khuẩn và các vi sinh vật khác có liên quan đến sức khỏe con người',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '130',
    quest: 'tiêu chảy, táo bón. Probiotics cũng được chứng minh là hữu ích trong điều trị béo phì, đái tháo đường, gan nhiễm mỡ không do rượu',
    answers: [
      { text: 'Sức khỏe', correct: true },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '131',
    quest: 'Được đối thủ của mình và những tay to công nhận là thành công rồi! Cố lên em!',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '132',
    quest: 'Clid trong 1 buổi pv cũng khen Sofm có lối đi rừng rất sáng tạo và kỹ năng cũng rất khá.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '133',
    quest: 'Letme không chịu nổi áp lực dư luận nên mới về stream chứ ngày xưa đi top đc phết',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '134',
    quest: 'Sofm mà vô đc team đè ép lane thì nói thật. Rừng bạn k có quái để fam.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '135',
    quest: 'Chú Huấn khuyên hộ cháu thằng bạn Trịnh Hùng nó nhà nghèo hay đua đòi chơi đồ phá bố mẹ nó bán cả đất rồi ạ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '136',
    quest: 'Xã hội vẫn còn rất nhiều người tốt. Lúc hoạ nạn khó khăn như thế này đọc mà cũng cảm thấy ấm lòng hơn.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '137',
    quest: 'Ko ngủ đc với em này sếp ạ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '138',
    quest: 'Tôi 19 còn trẻ trâu phết chứ ở đấy cấm dưới 18',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '139',
    quest: 'Chú Huấn ơi cháu có con em gái tên Trang nói đang xem live của chú , chú bảo nó ra học bài cho cháu với ạ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '140',
    quest: 'Bài này mang tính chất an ủi người phải hằng ngày khổ sở kẻ lông mày thôi',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '141',
    quest: ' Tâm sinh tướng nhé tướng mạo này chỉ là 1 phần nhỏ thôi',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '142',
    quest: 'em cũng có cảm giác, nhanh thôi sắp được gặp hà Nội rồi',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '143',
    quest: 'Tự nhiên nay nắng lên trong lòng lại có niềm tin tuần nữa thôi là dịch qua',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '144',
    quest: 'Lâu lắm ko thấy Hà Nội xuất hiện trên tường của mình',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '145',
    quest: 'Mẹ mình năm nay 64 tuổi vẫn tập chơi đàn bình thường tập vui mà',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '146',
    quest: 'Cô hay đàn hát lắm, cũng đánh vui vui thành giai điệu để hát thôi nhưng kiểu vô tư yêu đời lắm',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '147',
    quest: 'Hơi bị vui đấy nhé, cơ mà mọi người cần tiếp tục cố gắng để dịch bệnh hoàn toàn biến mất trên lãnh thổ Việt Nam nhé, chúc cả nhà mạnh khoẻ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '148',
    quest: 'cuối tuần mây không chịu cách ly ở nhà lại lang thang bên ngoài thế kia',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '149',
    quest: 'Tìm nơi đăng tin cho thuê nhà trọ, phòng trọ, tìm người ở ghép miễn phí.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '150',
    quest: 'Cho thuê chung cư trên địa bàn Hà Nội nhé',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '151',
    quest: 'Old Quarter View Hanoi Hostel cung cấp chỗ nghỉ chỉ dành cho người lớn với nhà hàng, quầy bar và sảnh khách chung',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '152',
    quest: 'Nằm ở 40 phố Nhà Chung, phường Hàng Trống, Nhà thờ lớn là một trong những điểm đến thú vị ở Hà Nội',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '153',
    quest: 'Khi ở đủ lâu bạn sẽ thấy vinhome là nơi tuyệt vời nhất',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '154',
    quest: 'Ở trên những căn nhà phố cổ bạn sẽ thấy không đâu tuyệt bằng ở đây',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '155',
    quest: 'Vua Lý Công Uẩn nhấn manh rằng Thăn Long là nơi ở của bậc đế vương muôn đời',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '156',
    quest: 'Tìm một căn nhà đẹp, giá rẻ ở trung tâm thành phố Hà Nội thật khó',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '157',
    quest: 'Tôi muốn tìm một căn nhà ở ven quân Bắc Từ Liêm',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '158',
    quest: 'Nhà nghỉ mới tại sapa có giá rẻ và rất hợp lý',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '159',
    quest: 'Thành phố Hồ Chí minh cũng là nơi rất tuyệt vời để sống',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '160',
    quest: 'Dự án nhà ở xã hội Ecohome 3 tọa lạc tại vị trí cửa ngõ phía Bắc thủ đô, nằm trong vùng quy hoạch khu đô thị quận Bắc Từ Liêm',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '161',
    quest: 'Bán nhà Quận 11 , nhà xây kiên cố, vào ở ngay , hẻm xe hơi thông thoáng',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '162',
    quest: 'Các khu nhà ở xã hội thường được xây dựng trên nhu cầu thuê, mua của các đối tượng đang sinh sống tại các địa bàn',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '163',
    quest: 'những người có nhu cầu nhà ở thực cân nhắc, bởi nhiều sản phẩm có giá tốt, chính sách ưu đãi lớn ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '164',
    quest: 'Ngôi nhà ở Đà Nẵng gây ấn tượng bởi thiết kế độc đáo theo mô hình nhà trong nhà',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: true },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '165',
    quest: 'Đã có rất nhiều lời hô hào về chuyển đổi online trong ngành giáo dục khi đại dịch Covid-19 lan đến Việt Nam',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '166',
    quest: 'Bộ Giáo dục và Đào tạo dự kiến các phương án thi THPT Quốc gia năm 2020',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '167',
    quest: 'Nhiều trường đại học phải đối mặt với nguy cơ hàng loạt sinh viên quốc tế dừng các công việc nghiên cứu, học tập để trở về nước vì dịch',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '168',
    quest: 'Bộ Giáo Dục Và Đào Tạo sẽ đưa môn Công nghệ thông tin vào chương trình học bắt buộc từ cấp 3 để tạo nên một thế hệ công dân toàn cầu',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '169',
    quest: 'Khoảng 1600 trường tiểu học và trung học ở khu vực Hokkaido vừa có thông báo chính thức cho học sinh nghỉ học đến sau ngày 27/2.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '170',
    quest: 'Theo bà Nguyễn Thị Kim Phụng, Vụ trưởng Vụ Giáo dục ĐH (Bộ Giáo Dục Và Đào Tạo), vì lịch thi THPT quốc gia 2020 lùi vào cuối tháng 7 nên lịch tuyển sinh đợt 1 của các trường ĐH cũng phải lùi 1 tháng so với kế hoạch.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '171',
    quest: 'Chiều ngày 22/2 trong cuộc họp Ban Chỉ đạo quốc gia phòng, chống dịch viêm đường hô hấp cấp do Covid-19 gây ra, Phó Thủ tướng Vũ Đức Đam nhấn mạnh về việc xem xét thời gian cho học sinh, sinh viên đi học lại.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '172',
    quest: 'Theo Phó Giám đốc Sở Giáo Dục Và Đào Tạo TP.HCM, việc đề xuất học thêm không quá 18 tiết một tuần để đảm bảo giáo viên, học sinh giảm áp lực và làm việc không quá 8 tiết một ngày.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '173',
    quest: 'Đã gần 3 tuần nay, đều đặn mỗi tuần 3 buổi sáng, cô Camille Q., người Pháp, lại lọ mọ ôm máy tính ra chuẩn bị lên lớp dạy online',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '174',
    quest: 'không biết năm nay thi theo hình thức nào',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '175',
    quest: 'Nghe nói năm nay học sinh trung học cơ sở chỉ thi ba môn toán văn anh',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '176',
    quest: 'Một trường đại học bên mỹ đưa thể thao điện tử vào giảng dạy như một môn học',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '177',
    quest: 'Học oline là một hình thức tốt trong kì dịch bệnh này',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '178',
    quest: 'Làm sao để dạy tiếng anh cho trẻ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: true },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '179',
    quest: 'Muốn mua một bô loa để chơi nhack',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '180',
    quest: 'Tôi sẽ đánh giá chuyên sâu về Youtuber',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '181',
    quest: 'Review điện thoại thông minh, các SIÊU máy tính, máy móc hiện đại mới nhất ở Việt Nam và Thế Giới',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '182',
    quest: 'Thủ tướng dự khai trương 2 sản phẩm công nghệ Việt Nam giúp phòng chống COVID-19',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '183',
    quest: 'đánh giá tư vấn mua điện thoại, máy tính bảng và hướng dẫn sử dụng Android, iOS',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '184',
    quest: 'Iphone 11 chuẩn bị được ra mắt , mọi người rất hào hứng ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '185',
    quest: 'Xiaomi vừa công bố thêm một biến thể mới của Mi 9 mà người dùng đã có thể đặt mua ngay từ bây giờ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '186',
    quest: 'Apple vừa mới chính thức ra mắt chiếc iPhone SE thông qua hình thức thông cáo báo chí, cách làm mới nhất từ trước tới nay.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '187',
    quest: 'Vừa mới đây, ngay tại trang chủ chính thức của nhà sản xuất Apple đã xuất hiện và đăng tải phụ kiện dành cho thiết bị iPhone 4.7inch mới',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '188',
    quest: 'Samsung đã công bố một bảng điều khiển màn hình OLED không thể phá vỡ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '189',
    quest: ' Galaxy S11 mới được trình làng, giá bao nhiêu thế',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '190',
    quest: ' điện thoại, máy tính bảng luôn cập nhật hằng ngày tại Đức Huy Mobile',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '191',
    quest: 'Rạng sáng 11/6, Apple đã chính thức tung ra bản cập nhật iOS 12.3.2 điều đặc biệt là bản cập nhật này không phải dành cho tất cả các thiết bị của Táo',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: true },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: false }
    ]
  },
  {
    id: '192',
    quest: 'Nếu đã đi du lịch thì chắc rằng bạn sẽ luôn muốn thưởng thức những món ăn ngon, đặc sản của nơi mà mình đến',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '193',
    quest: 'Cùng iVIVU khám phá thế giới ẩm thực phong phú, từ món phở Việt Nam đến món pizza nước Ý, và cả những món ăn độc lạ mà bạn chưa từng biết đến.',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '194',
    quest: 'món ăn ngon nhất thế giới cần thưởng thức khi đi du lịch, trong đó Việt Nam có hai món là phở và gỏi cuốn',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '195',
    quest: 'đi du lịch đến các nước sau, nhất định phải thử những món ăn mang tính biểu tượng của mỗi quốc gia đó',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '196',
    quest: 'Đùa phải đúng nơi đúng lúc, nhìn qua ngó lại chứ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '197',
    quest: 'Tết này có gì mới so với mọi năm',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '198',
    quest: 'Hôm qua đem một chai rượu ra uống mà ngủ đến sáng mai',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '199',
    quest: 'không phải ai cũng nát như cụ Chí nhà ta đâu, phải biết chừng mực chứ ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  },
  {
    id: '200',
    quest: 'Đánh con nhà người ta to cả bụng, không chịu trách nhiệm đi xin lõi làm gì ',
    answers: [
      { text: 'Sức khỏe', correct: false },
      { text: 'Giáo dục', correct: false },
      { text: 'Công nghệ', correct: false },
      { text: 'Chỗ ở', correct: false },
      { text: 'Thuộc một chủ đề khác', correct: true }
    ]
  }
];

module.exports = { questions }