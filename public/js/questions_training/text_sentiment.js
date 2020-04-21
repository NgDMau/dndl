var questions = [
  {
    id: '1',
    quest: 'Shop làm ăn quá tắc trách',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '2',
    quest: 'Thời tiết này ra ngoài chơi thì thích lắm',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '3',
    quest: 'Hôm nay tôi đi làm ca sáng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '4',
    quest: 'Cô giáo cầm sách đi lên bục giảng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '5',
    quest: 'Em làm chưa được tốt',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '6',
    quest: 'Hai nước đã bình thường hóa quan hệ ngoại giao từ năm 2007',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '7',
    quest: 'Việc làm thiếu trách nhiệm đã để lại nhiều hậu quả',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '8',
    quest: 'Món này ngon tuyệt cú mèo',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '9',
    quest: 'Tôi thấy anh vừa đúng vừa sai',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '10',
    quest: 'Phương án này sẽ thất bại sớm thôi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '11',
    quest: 'Đã nhận đc hàng rất nhanh mới đặt buổi tối mà trưa mai là có rồi. Đóng gói sản phẩm rất đẹp và chắc chắn Shop phục vụ rất tốt',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '12',
    quest: ' Chất lượng sản phẩm tuyệt vời . Son mịn nhưng khi đánh lên không như màu trên ảnh',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '13',
    quest: 'Đẹp lắm ạ bé nhà mình rất thích',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '14',
    quest: 'Giao hàng nhanh, mặc đẹp Cám ơn shop',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '15',
    quest: 'Đóng gói cẩn thận và tư vấn nhiệt tình. Hạt điều thấm vị và giòn.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '16',
    quest: 'So với giá thì chất lượng tuyệt vời. capo khá chắc chắn và đẹp',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '17',
    quest: 'Sản phẩm rất đẹp. Y hình và chất lượng',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '18',
    quest: 'áo nhìn khác hẳn với hình, thô quá và vải hay xùng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '19',
    quest: 'Đóng gói sản phẩm rất chắc chắn. Sản phẩm rất dày dặn. Thời gian giao hàng rất nhanh.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '20',
    quest: 'Khăn dày đẹp.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '21',
    quest: 'Sản phẩm tốt. Xài rất ưng ý',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '22',
    quest: 'Giày đẹp quá thể. Ưng lắm lắm. Sẽ ủng hộ shop dài dài. Chất đẹp còn hơn cả ảnh nữa.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '23',
    quest: ' Đóng gói sản phẩm rất đẹp và chắc chắn. Chúc shop đắt khách nha',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '24',
    quest: 'Son rất đẹp thơm mùi trái cây ',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '25',
    quest: 'Áo đẹp. Lông mịn.  Nói chung là rất ưng ý và Rất đáng tiền',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '26',
    quest: 'Giày giống hình nhưng đặt mua màu xám lại giao màu đỏ. Không hài lòng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '27',
    quest: 'Kêu tặng 7 bịch bánh tráng nhưng chỉ đưa 4 cục kẹo milo. Thật không thể chấp nhận.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '28',
    quest: 'Không hài lòng đã nhắn shop là gửi đồng hồ mặt nhỏ rồi lại gửi mặt lớn to đeo không đẹp mà mua 3 cái rồi đó',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '29',
    quest: 'Bộ khung khó sài lên hình méo mó không đẹp',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '30',
    quest: ' Chất lượng sản phẩm rất kém mùi nhựa rất hôi độc hại nên không dám cho con ngồi. Mua phí tiền. ',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '31',
    quest: 'Giày làm bằng chất liệu gì mà hôi quá',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '32',
    quest: 'Khác so với hình mẫu. Không được đẹp như trong ảnh',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '33',
    quest: 'Rất yếu. Không dùng được',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '34',
    quest: 'Giao sai hàng cho khách ',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '35',
    quest: 'Nhìn cái bản mặt đã thấy ghét',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '36',
    quest: 'dây xài quá dở không có độ đàn hồi. phí tiền mua bực vào người. ',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '37',
    quest: 'Hàng giao không đúng như hình ảnh nhãn mác đè lên nhau',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '38',
    quest: ' Chất lượng sản phẩm rất kém. quá yếu chỉ sôi ụt ụt. trứng còn ko chín. quá sai lầm',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '39',
    quest: ' Chất lượng sản phẩm rất kém. Hàng rất tệ tôi rất muốn trả hàng.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '40',
    quest: 'áo nhìn khác hẳn với hình, thô quá và vải hay xù',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '41',
    quest: 'Hai chú hãy mua rau cần',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '42',
    quest: 'Mình hãy ra ga đón mọi người',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '43',
    quest: 'Em mời anh hãy về thăm mẹ chồng em và cháu trước',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '44',
    quest: 'Tôi đi trước nhé',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '45',
    quest: 'Em nghỉ tý cho ráo mồ hôi đã',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '46',
    quest: 'Ngày mai đã chủ nhật rồi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '47',
    quest: 'Hai cụ đều 90 tuổi cả rồi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '48',
    quest: 'Hay các bác về nhà chúng tôi? Nhà chỉ có mỗi hai vợ chồng son, cũng rộng rãi.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '49',
    quest: 'Vợ nhặt là một tác phẩm văn học của nhà văn Kim Lân',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '50',
    quest: 'Ông Vỹ đông con, về mang theo mỗi chục quả tai chua với chai rượu trắng làm quà.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '51',
    quest: 'Vắng bóng chưa được bao lâu, Hot Girl Trâm Aɴʜ đã phải nhận những lời nhận xét khiếm nhã từ phía cộng đồng mạng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '52',
    quest: 'Tôi rất xấu hổ nhưng không biết phải làm gì',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '53',
    quest: 'Bị truy nã về tội liên quan đến ma túy, Tú bỏ trốn sang Trung Quốc',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '54',
    quest: 'Thanh xuân có bạn 2 bị tố cắt ghép bôi nhọ danh dự người khác',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '55',
    quest: 'tôi vẫn rất căm ghét bản thân và những người có tính cách giống mình',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '56',
    quest: 'Hồi đó nhận nhiệm vụ tui hoang mang và hoảng sợ lắm',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '57',
    quest: 'Hắn tưng sai người hãm hại cô ấy',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '58',
    quest: 'Nhà bên làm gì không biết. Thật là ồn ào khó chịu',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '59',
    quest: 'Anh là đồ dối trá, tôi đã tin anh như vậy mà.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '60',
    quest: 'Vì túng quấn quá, nên hắn ta làm liều đi ăn trộm',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '61',
    quest: 'Ý thức tham gia giao thông kém ảnh hưởng tới nhưng người tham gia giao thông xung quanh',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '62',
    quest: 'chặt phá rừng bừa bãi gây ảnh hưởng tới môi truòng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '63',
    quest: 'Việc xây dựng trái phép, lấn át vỉa hè gây mất cảnh quan đô thị',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '64',
    quest: 'Hiệu ứng nhà kính là mất trong số nhưng lý do gây  nên sự nóng nên toàn cầu',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '65',
    quest: 'Đoạn đường xuống cấp trầm trọng do các xe có tải trọng vượt quá quy định cố tình đi qua',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '66',
    quest: 'Tai nạn đã cướp đi của anh ấy đứa con gái dua nhất',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '67',
    quest: 'Anh ấy với người yêu chia tay rồi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '68',
    quest: 'Vì ngoại hình nhỏ bé hơn các bạn, nên khi đi học an thường hay bị bạn bè bắt nạt',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '69',
    quest: 'Lợi dụng lòng tin của khách hàng, một số cửa hàng sử dụng hóa chất độc hại gây hai cho sức khỏe người dùng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '70',
    quest: 'Bọn mối này khó chịu quá, chúng nó ăn hết cửa rồi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '71',
    quest: 'Tai nạn sau cơn mưa, hai thanh niên tử vong',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '72',
    quest: 'Do tầm nhìn bị hạn chế nên tại đây hay xảy ra tai nạn.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '73',
    quest: 'Đoạn đường ùn tắc, khiển ảnh hưởng đến nhiều người',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '74',
    quest: 'Khu tập thể xuống cấp trầm trọng có thể gây nguy hiểm cho những hộ gia đình đang sinh hoạt tại đó',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '75',
    quest: 'Cái này là đồ giả sao mà dùng được',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '76',
    quest: 'Mày bị sao thế, có vấn đề về thần kinh à',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '77',
    quest: 'Đi đứng không có mắt à, thích chết không',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '78',
    quest: 'Đồ con gái mất nết',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '79',
    quest: 'Bộ phim là một thất bại lớn đối với đạo diễn và nhà sản xuất',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '80',
    quest: 'Công việc thật vô lý, tôi không làm nữa',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '81',
    quest: 'Thiên tai đã gây ra không biết bao nhiêu thiệt hai về người và của',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '82',
    quest: 'Phun thuốc trừ sâu, vô ý làm thiệt hại hoa màu của người khác',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '83',
    quest: 'Lợi dụng sự kém hiểu biết của người dân, anh Hà đã thực hiện trót lọt thành công các vụ lừa đảo chiếm đoạt tài sản',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '84',
    quest: 'Đây là khu sinh hoạt chung mà để bày bừa ra thế này à',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '85',
    quest: 'Ai mà để xe vô ý thế không biết',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '86',
    quest: 'Nhìn cái tướng là biết. Đúng là cái đồ ăn cắp mà',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '87',
    quest: 'Mới để đồ ở đây mà đã có ai ăn trộm mất rồi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '88',
    quest: 'Nhìn nó xấu quá thể, không thể chịu đựng được',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '89',
    quest: 'Vì là con ghẻ nên cô ấy phải chịu khổ sở nhiều',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '90',
    quest: 'Trông có đến nỗi nào đâu mà lại đi ăn cướp thế này',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '91',
    quest: 'Sản phẩm chất lượng không được tốt mà giá cả lại không hợp lý',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '92',
    quest: 'Mới đầu quen thì tưởng là người tốt, chơi lâu mới lộ ra bộ mặt thật',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '93',
    quest: 'Cái máy này hỏng rồi không chạy được nữa đâu',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '94',
    quest: 'Để kiếm khách sửa xe, mà một số người đã rải đinh ra đường mặc kệ sự an toàn của người tham gia giao thông',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '95',
    quest: 'Khu này nhiều nghiện lắm, không an toàn đâu',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '96',
    quest: 'Món gì mà kinh vậy. Ăn được không đó ?',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '97',
    quest: 'Đi đứng ẩu thế! Có ngày gây tai nạn không chừng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '98',
    quest: 'Quân ăn cướp trả lại đồ đây',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '99',
    quest: 'Xây nhà thì cũng để ý một tý chứ để gạch vữa lung tung bừa bãi thế này à',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '100',
    quest: 'Công việc nguy hiểm mà không có đồ bảo hộ lỡ xảy ra chuyện gì thì sao',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '101',
    quest: 'Áo chị mua đâu mà đẹp thế',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '102',
    quest: 'Mày sướng thật đó. Bộ đó mới ra mà đã được mua cho rồi',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '103',
    quest: 'Đấy nhất chú nhé. Đúng là số hưởng mà',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '104',
    quest: 'Vâng! Ông giáo dạy phải! Đối với chúng mình thì thế là sung sướng.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '105',
    quest: 'Vườn rau ai chăm mà tốt thế không biết',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '106',
    quest: 'Vợ chồng nhà anh chị trông thật hạnh phúc',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '107',
    quest: 'Sản phẩm tốt lắm dùng rất thoải mái',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '108',
    quest: 'game có đồ họa ổn, lỗi chơi cũng đa dạng. Cảm ơn nhà phát hành',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '109',
    quest: 'Ứng dụng tốt, tin tức khá tin cậy',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '110',
    quest: 'Có tính cập nhật, đa dạng, phong phú...về các v, đề k, tế-chính trị, văn hóa xã hội của cuộc sống ...',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '111',
    quest: 'Công việc này thật tuyệt vời thật phù hợp với tôi',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '112',
    quest: '5 sao cho ứng dụng này. Cập nhật tin tức kịp thời và nhanh chóng.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '113',
    quest: 'Tin tức rất ý nghĩa và tương đối đầy đủ, hình ảnh thì rõ nét sống động ',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '114',
    quest: 'Cảm ơn anh vì những gì anh đã đóng góp trong thời gian vừa qua',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '115',
    quest: 'Mặc dù đã gần 40 tuổi nhưng cô ấy vẫn trẻ đẹp như mới 20 tuổi',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '116',
    quest: 'Xe buýt thật tuyệt vời. Nó vừa giúp giảm ùn tắc giao thông mà lại an toàn',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '117',
    quest: 'Hoa quả ở đây ngon lắm không những thế lại còn đảm bảo vệ sinh an toàn thực phẩm nữa chứ',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '118',
    quest: 'Mình thấy ăn dưa muối ở đây là ngon nhất. Dưa trắng và giòn',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '119',
    quest: 'Đồ ăn ở đây khá là ổn. Thích nhất lẩu cháo cá',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '120',
    quest: 'Quán trang trí nhìn khá là đẹp',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '121',
    quest: 'Một anh Phúc, sống nhân đức, tôn thờ triết lí',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '122',
    quest: ' Phở Bát Đàn thu hút thực khách với vị nước lèo vừa thơm vừa ngọt, thịt bò tươi hồng, mềm mỏng, sợi phở cũng rất dai nữa.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '123',
    quest: 'Bún ốc ở đây ngon từ bún, ốc cũng rất ngon, đến cả nước lèo cũng là cực phẩm.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '124',
    quest: 'Quán ăn gây nghiện cho bao thực khách bởi bánh phở mềm dai, thịt gà dai ngọt.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '125',
    quest: 'quán là một quán ăn ngon hà Nội không thể tuyệt vời hơn',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '126',
    quest: 'Tất cả tạo nên một “mâm” bánh cuốn ăn một lần là không thể nào quên.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '127',
    quest: 'Cô ấy không những đẹp về ngoại hình mà còn cả về tâm hồn',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '128',
    quest: 'Giới trẻ rất yêu thích nơi này vì phong cảnh đẹp',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '129',
    quest: 'Khung cảnh khu này thật đẹp và yên tĩnh',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '130',
    quest: 'Sản phẩm là một bước đi đột phá về công nghệ',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '131',
    quest: 'Trong không gian ấy, chắc chắn những muộn phiền sẽ bỏ lại phía sau, chỉ còn lại cảm giác yên bình mà thôi.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '132',
    quest: 'Bài văn thật là hay để lại trong lòng người đọc rất nhiều cảm xúc',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '133',
    quest: 'Bộ bàn ghế được chạm khắc tinh xảo hoa văn độc đáo. Rất đẹp',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '134',
    quest: 'Không chỉ có cảnh đẹp, ở khu du lịch này còn có nhiều điều thú vị để bạn khám phá.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '135',
    quest: 'vài âm thanh lãng đãng réo rắt của rừng thông càng khiến trải nghiệm thêm thú vị.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '136',
    quest: 'Với một không gian trong lành yên tĩnh cùng vẻ đẹp độc đáo, chắc chắn đây sẽ là địa điểm nghỉ dưỡng vui chơi hợp lý cho mọi người.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '137',
    quest: 'Phong cảnh thiên nhiên ở đây cực kỳ đẹp và cuốn hút ',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '138',
    quest: 'Xôi mềm, dẻo, k bị nát. Ăn khá ngon',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '139',
    quest: ' Bánh mỳ số 1 hệ mặt trời mà mình ăn cả thời sinh viên.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '140',
    quest: 'Nhà hàng có không gian siêu đẹp bên hồ tây thơ mộng',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '141',
    quest: 'cơm tấm ba chỉ chả trứng rất ngon, cơm tấm dẻo mềm, thịt cháy vừa vặn',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '142',
    quest: 'hàng cháo ở đây siu ngon ạ. Ăn một bát là ấm bụng luôn vì bát siêu to',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '143',
    quest: 'Bình thường mình đến ăn trực tiếp tại đây thì rất ngon',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '144',
    quest: 'Bạn đã hoàn thành một việc rất tuyệt.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '145',
    quest: 'Cậu là thiên tài đó.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '146',
    quest: 'Bạn là một bác sĩ tuyệt vời.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '147',
    quest: 'Đó là một ý tưởng thông minh',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '148',
    quest: 'Hôm nay bạn trông rất tuyệt',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '149',
    quest: 'Kiểu tóc mới của bạn thật đẹp',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '150',
    quest: 'Bạn trông rất tuyệt với màu đó.',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '151',
    quest: 'Khu tái định cư Lộc An - Bình Sơn rộng 280 ha được khởi công sáng 20/4, dự kiến bàn giao đất cho người dân vào tháng 8 tới.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '152',
    quest: 'Mỗi ngày, anh thả hàng chục tấm lưới xuống lòng hồ thủy lợi bắt cá bống, bán 100.000 đồng một kg.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '153',
    quest: 'Thủy triều rút, lộ ra những con ốc ruốc nằm lẫn trong cát. Người dân nhau ra cào ốc bán hoặc nấu ăn.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '154',
    quest: 'Thầy giáo về hưu vẽ tranh đem bán để kiếm tiền',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '155',
    quest: 'Miền Bắc và Trung đầu tuần nắng nóng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '156',
    quest: 'Người dân miền núi đổi rác lấy quà',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '157',
    quest: 'Nông dân thu hoạch lúa sớm',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '158',
    quest: 'Lim cổ thụ bị đốt gốc ngã rạp',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '159',
    quest: 'Trồng lúa, thanh long trên vùng mặn',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '160',
    quest: 'Đi từ đây đến đó hết 50 nghìn',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '161',
    quest: 'Qua đây đón tồi rồi mình cùng đi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '162',
    quest: 'Mai là phải qua đấy lấy đồ rồi ',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '163',
    quest: 'Tý qua chỗ chị. Chị cho cái này mà cầm về',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '164',
    quest: 'Thứ 4 nhớ nộp bài tập đó',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '165',
    quest: 'Tối nay ăn canh cua với đậu rán nhé',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '166',
    quest: 'Di chuyển dần đi không tý nữa tắc đường',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '167',
    quest: 'Dự báo ngày mai, một vài nơi có mưa gió giật mạnh',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '168',
    quest: 'Thời tiết nắng nóng kéo dài oi bức',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '169',
    quest: 'Dự án bắt đầu khởi công vào đầu tháng tư',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '170',
    quest: 'Tý nhớ gọi lại cho tôi đấy',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '171',
    quest: 'Đàn voọc quý xuất hiện trong khu rừng ven biển',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '172',
    quest: 'Khỉ mặt đỏ xuống nhà dân tìm thức ăn',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '173',
    quest: 'Đốc thúc giải phóng mặt bằng cao tốc Bắc Nam',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '174',
    quest: 'Hơn 10.000 ha lúa gãy đổ sau mưa lớn',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '175',
    quest: 'Loài gấu có thể ăn 45 kg cá hồi một ngày',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '176',
    quest: 'Báo hoa mai săn khỉ bị điện giật chết',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '177',
    quest: 'Vỏ sò, ốc phủ kín bãi biển vắng khách',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '178',
    quest: 'Hoa cỏ phúc thọ bung nở trên nền tuyết trắng',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '179',
    quest: 'Mưa sao băng Lyrid đạt cực đại trong tuần này',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '180',
    quest: 'Cồn cát cao nhất châu Âu lấn chiếm đất liền',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '181',
    quest: 'Tiến sĩ lai tạo vật liệu thay thế bạch kim',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '182',
    quest: 'Vận hành kính viễn vọng nghiên cứu ngoại hành tinh',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '183',
    quest: 'Bến container tự động lớn nhất thế giới',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '184',
    quest: 'Trang trại nổi có thể nuôi 10.000 tấn cá hồi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '185',
    quest: 'Sư tử kéo ra đường ngủ trưa vì công viên đóng cửa',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '186',
    quest: 'Loài chim chợp mắt vài giây trong lúc bay',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '187',
    quest: 'Cầu đá tự nhiên 200 triệu năm tuổi',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '188',
    quest: 'Kẻ săn mồi mang tên thiên thần biển',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '189',
    quest: 'Loài cá vuông được gọi tên là cá hòm',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '190',
    quest: 'Đại bàng làm tổ trên cây xương rồng khổng lồ',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '191',
    quest: 'Phát hiện loài cự đà mới',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '192',
    quest: 'Đàn voi 50 con băng qua đường cao tốc',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '193',
    quest: 'Lấy hộ tôi ly nước',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '194',
    quest: 'Đoạn đường khúc khuỷu quanh co',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '195',
    quest: 'Miền Bắc có nơi nắng nóng trước ngày đón không khí lạnh gây mưa dông',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '196',
    quest: 'Miền Bắc thời tiết chủ đạo có nắng, riêng phía Tây Bắc Bộ có nắng nóng với nhiệt độ khoảng 37 độ C.',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '197',
    quest: 'Vẽ chai thủy tinh trong suốt như thật',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '198',
    quest: 'Sáu câu đố tìm điểm khác biệt',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '199',
    quest: 'Cách tạo cầu vồng bằng cốc nước và giấy',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '200',
    quest: 'Giảm mỡ bụng cùng Hana Giang Anh',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  }
]