var questions = [
    {
      id: '1',
      quest: 'Shop làm ăn quá tắc trách',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '2',
      quest: 'Thời tiết này ra ngoài chơi thì thích lắm',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '3',
      quest: 'Hôm nay tôi đi làm ca sáng',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '4',
      quest: 'Cô giáo cầm sách đi lên bục giảng',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '5',
      quest: 'Em làm chưa được tốt',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '6',
      quest: 'Hai nước đã bình thường hóa quan hệ ngoại giao từ năm 2007',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '7',
      quest: 'Việc làm thiếu trách nhiệm đã để lại nhiều hậu quả',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '8',
      quest: 'Món này ngon tuyệt cú mèo',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '9',
      quest: 'Tôi thấy anh vừa đúng vừa sai' ,
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '10',
      quest: 'Phương án này sẽ thất bại sớm thôi',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '11',
      quest: 'Đã nhận đc hàng rất nhanh mới đặt buổi tối mà trưa mai là có rồi. Đóng gói sản phẩm rất đẹp và chắc chắn Shop phục vụ rất tốt',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '12',
      quest: ' Chất lượng sản phẩm tuyệt vời . Son mịn nhưng khi đánh lên không như màu trên ảnh',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '13',
      quest: 'Đẹp lắm ạ bé nhà mình rất thích',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '14',
      quest: 'Giao hàng nhanh, mặc đẹp Cám ơn shop',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '15',
      quest: 'Đóng gói cẩn thận và tư vấn nhiệt tình. Hạt điều thấm vị và giòn.',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '16',
      quest: 'So với giá thì chất lượng tuyệt vời. capo khá chắc chắn và đẹp',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '17',
      quest: 'Sản phẩm rất đẹp. Y hình và chất lượng',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '18',
      quest: 'áo nhìn khác hẳn với hình, thô quá và vải hay xùng',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '19',
      quest: 'Đóng gói sản phẩm rất chắc chắn. Sản phẩm rất dày dặn. Thời gian giao hàng rất nhanh.',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '20',
      quest: 'Khăn dày đẹp.',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '21',
      quest: 'Sản phẩm tốt. Xài rất ưng ý',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '22',
      quest: 'Giày đẹp quá thể. Ưng lắm lắm. Sẽ ủng hộ shop dài dài. Chất đẹp còn hơn cả ảnh nữa.',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '23',
      quest: ' Đóng gói sản phẩm rất đẹp và chắc chắn. Chúc shop đắt khách nha',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '24',
      quest: 'Son rất đẹp thơm mùi trái cây ',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '25',
      quest: 'Áo đẹp. Lông mịn.  Nói chung là rất ưng ý và Rất đáng tiền',
      answers: [
        { text: 'Tích cực', correct: true},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '26',
      quest: 'Giày giống hình nhưng đặt mua màu xám lại giao màu đỏ. Không hài lòng',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '27',
      quest: 'Kêu tặng 7 bịch bánh tráng nhưng chỉ đưa 4 cục kẹo milo. Thật không thể chấp nhận.',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '28',
      quest: 'Không hài lòng đã nhắn shop là gửi đồng hồ mặt nhỏ rồi lại gửi mặt lớn to đeo không đẹp mà mua 3 cái rồi đó',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '29',
      quest: 'Bộ khung khó sài lên hình méo mó không đẹp',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '30',
      quest: ' Chất lượng sản phẩm rất kém mùi nhựa rất hôi độc hại nên không dám cho con ngồi. Mua phí tiền. ',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '31',
      quest: 'Giày làm bằng chất liệu gì mà hôi quá',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '32',
      quest: 'Khác so với hình mẫu. Không được đẹp như trong ảnh',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '33',
      quest: 'Rất yếu. Không dùng được',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '34',
      quest: 'Giao sai hàng cho khách ',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '35',
      quest: 'Nhìn cái bản mặt đã thấy ghét',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '36',
      quest: 'dây xài quá dở không có độ đàn hồi. phí tiền mua bực vào người. ',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '37',
      quest: 'Hàng giao không đúng như hình ảnh nhãn mác đè lên nhau',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '38',
      quest: ' Chất lượng sản phẩm rất kém. quá yếu chỉ sôi ụt ụt. trứng còn ko chín. quá sai lầm',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '39',
      quest: ' Chất lượng sản phẩm rất kém. Hàng rất tệ tôi rất muốn trả hàng.',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '40',
      quest: 'áo nhìn khác hẳn với hình, thô quá và vải hay xù',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: true},
        { text: 'Trung tính', correct: false},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '41',
      quest: 'Hai chú hãy mua rau cần',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '42',
      quest: 'Mình hãy ra ga đón mọi người',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '43',
      quest: 'Em mời anh hãy về thăm mẹ chồng em và cháu trước',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '44',
      quest: 'Tôi đi trước nhé',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '45',
      quest: 'Em nghỉ tý cho ráo mồ hôi đã',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '46',
      quest: 'Ngày mai đã chủ nhật rồi',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '47',
      quest: 'Hai cụ đều 90 tuổi cả rồi',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '48',
      quest: 'Hay các bác về nhà chúng tôi? Nhà chỉ có mỗi hai vợ chồng son, cũng rộng rãi.',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '49',
      quest: 'Vợ nhặt là một tác phẩm văn học của nhà văn Kim Lân',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    },
    {
      id: '50',
      quest: 'Ông Vỹ đông con, nhà nghèo, về mang theo mỗi chục quả tai chua với chai rượu trắng làm quà.',
      answers: [
        { text: 'Tích cực', correct: false},
        { text: 'Tiêu cực', correct: false},
        { text: 'Trung tính', correct: true},
        { text: 'Không biết', correct: false}
      ]
    }
  ]
 