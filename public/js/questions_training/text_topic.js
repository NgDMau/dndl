var questions = [
    {
      id: '1',
      quest: 'Bây giờ có đến mấy bộ sách giáo khoa lận, không biết phải mua quyển nào cho con nó học đây',
      answers: [
        { text: 'Sức khỏe', correct: false},
        { text: 'Giáo dục', correct: true},
        { text: 'Công nghệ', correct: false},
        { text: 'Chỗ ở', correct: false},
        { text: 'Thuộc một chủ đề khác', correct: false}
      ]
    },
    {
        id: '2',
        quest: 'Các bác cho em hỏi sao mà làm hồ sơ cho con vào trường công lập chuyên nhỉ',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '3',
        quest: 'Tôi đang muốn tìm gia sư tiếng anh cho con mình, yêu cầu là nữ, điểm tiếng anh thi THPT quốc gia trên 8, mỗi tuần 2 buổi, tiền lương thỏa thuận',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '4',
        quest: 'Giáo dục nơi đó yếu quá, chủ yếu là giáo viên trục tiếp giảng dạy.',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '5',
        quest: 'Nhận xét quá trình giảng dạy của giảng viên chưa bạn',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '6',
        quest: 'Học trong 2-3 tháng, lịch học sau khai giảng sẽ thảo luận sao cho phù hợp nhất với điều kiện thực tế của học viên và giáo viên giảng dạy',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '7',
        quest: 'Giảng viên dứt khoát xịn hơn giáo viên vì giảng viên đại học được trông thi tốt nghiệp còn giáo viên thì được nghỉ dưỡng sức',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '8',
        quest: 'Đúng là giảng viên có khác tiếp thu tiếng việt cũng nhanh ghê khi giảng viên ha vớt được thầy giáo việt nam dạy học',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '9',
        quest: 'Khu mình có trung tâm tiếng trung nào tuyển giáo viên giảng dạy không nhỉ',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '10',
        quest: 'giáo viên khoa công nghệ tự động rất tận tâm giảng dạy nha em, đây là kinh nghiệm của chị',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: true},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '11',
        quest: 'Tôi cần mua một bộ máy tính để bàn phục vụ công việc văn phòng, giá cả dưới 10 triệu ạ',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: false},
          { text: 'Công nghệ', correct: true},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '12',
        quest: 'năm nay, một số loại máy tính mới được ra mắt',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '13',
        quest: 'em cần tìm pc như sau tổng 25tr cả màn hình cả webcam tai nghe',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '14',
        quest: 'hết điện thoại hỏng, đến máy tính hỏng. ai biết máy tính bị sao k chỉ e phát ',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '15',
        quest: 'em có cái máy tính tích hợp màn và cây, muốn lắp cục pin giống như laptop vào thêm được không bác',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '16',
        quest: 'bạn có biết đổ mực máy in và sửa chữa máy tính không ạ',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '17',
        quest: 'vậy sao ko thiết kế như bàn phím máy tính luôn đỡ bấm nhầm',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '18',
        quest: 'chợ mình ai có dàn máy tính không dùng mà bán. nhắn em nhé',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '19',
        quest: 'từ cơ thể con người, các loài động vật cho đến cấu trúc động cơ máy, tất cả đều có thể được phân tích chi tiết sống động bằng chiếc máy tính xách tay áp dụng công nghệ thực tế ảo',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '20',
        quest: 'cần mua ổ cứng máy tính bàn? ai có thanh lý thì comment nhé',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: true},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '21',
        quest: 'Tôi dạo này hay bị ho nóng sốt, nhưng không muốn đi khám, không biết có thuốc nam nào hiệu qủa không',
        answers: [
          { text: 'Sức khỏe', correct: true},
          { text: 'Giáo dục', correct: false},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '22',
        quest: 'Mưa nắng thất thường bạn nào hoặc có người thân hay bị đau đầu,đau mỏi vai gáy nhắn tin cho em nhé, không phải uống thuốc tây nha',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '23',
        quest: 'Đã có ai bị như mình chưa ạ, mình bị trên lưng mấy năm nay rồi, cũng thường xuyên tắm lá chè xanh mà vẫn không bớt giảm gì cả. Mọi người cho mình vài góp ý với ạ.',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '24',
        quest: 'viêm lỗ chân lông và mụn lưng e tắm muối tắm thảo dược là khỏi nha',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '25',
        quest: 'Người mệt mỏi, suy nhược, hay lo lắng thì nặng đầu thôi bạn, với lại nếu mắt đi bụi, cay mắt, hay mắt làm việc với cường độ cao thì có thể đỏ nhé.',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '26',
        quest: 'Anh hạn chế sử dụng thuốc lá và ăn uống đầy đủ để cải thiện sức khỏe',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '27',
        quest: 'Sẹo này làm gì có cái thuốc nào bôi khỏi được em, đi phẫu thuật thôi',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '28',
        quest: 'Dấu hiệu dạ dày bạn đang bị tổn thương đó. Về lâu dài rất nguy hiểm',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '29',
        quest: 'Bổ xung thực phẩm chứ nhiều canxi và magie nhé.',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '30',
        quest: 'Em 17 tuổi cao 1m6 muốn phát triển chiều cao đều đặn em cần phải làm gì ạ',
        answers: [
            { text: 'Sức khỏe', correct: true},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '31',
        quest: 'tìm phòng khách sạn, nhà nghỉ móng cái, anh chị em nào kinh doanh phòng còn phòng cho em xin liên hệ',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: false},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: true},
          { text: 'Thuộc một chủ đề khác', correct: false}
        ]
      },
      {
        id: '32',
        quest: 'nhà nghỉ nó còn kiểm tra phòng trước khi check out nữa là khách sạn 5 sao',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '33',
        quest: 'Mình cần tìm phòng trọ quang khu vực bách khoa, điều hòa nóng lạnh đầy đủ',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '34',
        quest: 'Đúng là ở nhà vinhome thích thật sự, dịch vụ tiện ích đầy đủ, an toàn tiện lợi.',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '35',
        quest: 'phòng đẹp giá hời, phục vụ bạn ghé link để đặt phòng nhé',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '36',
        quest: 'có phòng trong công nghệ thông tin 1tr2 phòng như nhà nghỉ điều hoà nóng lạnh đầy đủ, bác chủ nhà trách nhiệm vui tính',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '37',
        quest: 'bán nhà 4 tầng mặt tiền nguyễn tất thành. viu biển mát mẻ, đang kinh doanh nhà nghỉ tổng 11 phòng wc khép kín',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '38',
        quest: 'Chỗ tôi ở khá là chật, xa trung tâm thành phố',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '39',
        quest: 'mình có 3 phòng khách sạn studio suites tại vinpearl condotel empire nha trang muốn để lại, quá rẻ nên các bạn vui lòng không mặc cả nhé',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '40',
        quest: 'tìm phòng khách sạn, nhà nghỉ móng cái',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: true},
            { text: 'Thuộc một chủ đề khác', correct: false}
          ]
      },
      {
        id: '41',
        quest: 'Tin tức kinh tế, tài chính, doanh nhân và doanh nghiệp, thị trường trong nước và thế giới.',
        answers: [
          { text: 'Sức khỏe', correct: false},
          { text: 'Giáo dục', correct: false},
          { text: 'Công nghệ', correct: false},
          { text: 'Chỗ ở', correct: false},
          { text: 'Thuộc một chủ đề khác', correct: true}
        ]
      },
      {
        id: '42',
        quest: 'Nước đang phát triển là quốc gia có mức sống còn khiêm tốn, có nền tảng công nghiệp chưa phát triển và có chỉ số phát triển con người không cao',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      },
      {
        id: '43',
        quest: 'Đầu tiên, để trở thành một doanh nhân, bạn phải liên tục học hỏi.',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      },
      {
        id: '44',
        quest: 'Sợ cơm, mì, trà sữa, thịt, rồi giờ ăn cái gì đây',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      },
      {
        id: '45',
        quest: 'Ăn khóm nhiều vào bạn, uống cam mỗi ngày vào buổi sáng, bổ sung rau củ quả tươi vào mỗi bữa ăn nhé.',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      },
      {
        id: '46',
        quest: 'mọi người cho xin địa chỉ uống trà sữa với',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      },
      {
        id: '47',
        quest: 'Mình thích nhất là sang đông hưng ăn mì cay và ăn đồ nướng KFC uống bia',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      },
      {
        id: '48',
        quest: 'Anh em bạn è sành ăn cho e hỏi, quanh lục nam mình có nhà hàng nào ăn uống mà có đồ hải sản tươi cua ghẹ các kiểu cho e xin cái',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      },
      {
        id: '49',
        quest: 'Sợ cơm, mì, trà sữa, thịt, rồi giờ ăn cái gì đây',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      },
      {
        id: '50',
        quest: 'Thèm ăn đồ nướng hải sân tôm cua cá ghẹ ghê',
        answers: [
            { text: 'Sức khỏe', correct: false},
            { text: 'Giáo dục', correct: false},
            { text: 'Công nghệ', correct: false},
            { text: 'Chỗ ở', correct: false},
            { text: 'Thuộc một chủ đề khác', correct: true}
          ]
      }
]