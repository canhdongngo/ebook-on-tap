        // Dữ liệu mẫu cho sản phẩm quảng cáo (10 sản phẩm)
        const allProducts = [
            {
                id: 1,
                name: "Nước Rửa Chén Bát Sunlight CHANH, TRÀ XANH VÀ THIÊN NHIÊN LÔ HỘI- Túi 3.1KG-3.3KG",
                price: "27.498đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7ras8-mcqbq65mbezgad",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1138761704%2F26221365906"
            },
            {
                id: 2,
                name: "Quạt Cầm Tay Turbo Tốc Độ Gió Cực Mạnh - Quạt Làm Mát Nhanh,Quạt tích điện mini pin cao 5000 mah",
                price: "32.999đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7ra0g-m9busx8k0e4i4f",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1056329624%2F25344932571"
            },
            {
                id: 3,
                name: "Thùng 10 bịch Khăn Giấy Rút Treo Tường Bông Sen Vàng 1152 Tờ, Tặng Kèm 5 Móc Treo Tường",
                price: "165.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-820l4-mf7txt5sv4egb1",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1361033839%2F28484059377"
            },
            {
                id: 4,
                name: "Cáp Sạc Nhanh 3 Đầu 120W Dài 1.2m. Cáp sạc hợp kim kẽm, có đèn LED, siêu bền, Dây sạc 3 in 1, Dây Sạc 3 Trong 1",
                price: "9.600đ",
                image: "https://cf.shopee.vn/file/sg-11134201-7rdy9-m02xc45o69pvdb",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1084393990%2F29711051963"
            },
            {
                id: 5,
                name: "Nước Làm Sạch Và Tẩy Trang Cho Mọi Loại Da Garnier Micellar Cleansing Water 400ml",
                price: "215.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7r98o-lqxqtn5zflc43d",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1118560772%2F22963742214"
            },
            {
                id: 6,
                name: "Combo 500 túi lọc rác bồn rửa chén [SIÊU TIẾT KIỆM] #340A x 5 GÓI",
                price: "59.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7r98o-ltdhb92d7cn8f2",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F163690952%2F2617954274"
            },
            {
                id: 7,
                name: "Viên Treo Vệ Sinh Bồn Cầu Vim Power 5 | Sạch Thơm Đến 300 Lần Xả (50- 55g/viên)",
                price: "27.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-820l4-mfdexf9feya506",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F26947756%2F6479896522"
            },
            {
                id: 8,
                name: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3in1 Micellar Water 400ml",
                price: "280.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7ras8-m3pf4bpm0p1112",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F819801138%2F18524771908"
            },
            {
                id: 9,
                name: "TẨY MỐC Ecogy, tẩy quần áo, mốc, thâm kim, máu, nhựa chuối,,,,",
                price: "73.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7ras8-md4hnss0an301a",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F438470966%2F41161880825"
            },
            {
                id: 10,
                name: "Lăn nách đá khoáng KLEAR Thái Lan ngăn mùi hiệu quả giảm thâm nách",
                price: "42.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7ra0g-m7eolh8wg30334",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F289081425%2F15567476242"
            },
			{
                id: 11,
                name: "Giấy rút treo tường- giấy ăn - giấy vệ sinh 1280 tờ Babee",
                price: "20.000đ",
                image: "https://cf.shopee.vn/file/sg-11134201-7rdxt-lzzpskptiz5gef",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1345524316%2F28710791883"
            },
			{
                id: 12,
                name: "COMBO 2 Túi Nước Xả Vải Downy Hương Nước Hoa Huyền Bí 1,45L",
                price: "255.900đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7ras8-m1tzov54sl33dc",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1345524316%2F28710791883"
            },
			{
                id: 13,
                name: "Cốc sứ Shiba Inu dễ thương sáng tạo cốc nước cặp đôi gia dụng phong cách instagram giá trị cao có nắp cốc đựng quà tặng",
                price: "88.587đ",
                image: "https://cf.shopee.vn/file/sg-11134201-7rd3y-lu94qjst8mvsb4",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1231397187%2F24374982685"
            },
			{
                id: 14,
                name: "Giấy ăn rút Topgia thùng 40 gói đa sắc cao cấp 240 tờ 4 lớp, dập vân 4D, mềm mịn, thấm hút tốt",
                price: "109.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-820l4-mf0jcx6f2byn46",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1016604648%2F22352022576"
            },
			{
                id: 15,
                name: "Sữa rửa mặt Cerave 236ml dưỡng ẩm sữa rửa mặt cho da dầu mụn ,da khô",
                price: "109.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7ras8-m366j5wxui98df",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F664873206%2F25221286391"
            },
			{
                id: 16,
                name: "Bình nước thủy tinh bọc nhựa giữ nhiệt 450ml có ống hút dây đeo tiện lợi, nắp thú dễ thương BN26",
                price: "39.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7r98o-lnmnn6i0lkh948",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F149480246%2F21594976791"
            },
			{
                id: 17,
                name: "Túi màng bọc thực phẩm chất liệu PE treo tường dạng rút TopGia, tiện lợi, có chun co dãn siêu dai",
                price: "59.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-820l4-mfcnomxfz6rtb9",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F729014007%2F42802509340"
            },
			{
                id: 18,
                name: "Quà Tặng Sinh Nhật Dành Cho Các Bạn Nữ, Bạn Gái Cốc uống nước bằng sứ hình heo dễ thương Món quà rất ý nghĩa ZZB",
                price: "80.000đ",
                image: "https://cf.shopee.vn/file/sg-11134201-7rd3n-lu3njblc7tsc99",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F1231397187%2F24224056005"
            },
			{
                id: 19,
                name: "Quà Tặng Sinh Nhật Dành Cho Các Bạn Nữ, Bạn Gái Cốc uống nước bằng sứ hình heo dễ thương Món quà rất ý nghĩa ZZB",
                price: "80.000đ",
                image: "https://cf.shopee.vn/file/vn-11134207-7ras8-mbtaweaj9klqd2",
                link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100116734&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F837758567%2F28169687116"
            }
        ];

        // Dữ liệu mẫu cho tài liệu
        const documents = [
            {
                id: 1,
                title: "Toán Học Lớp 10",
                grade: "10",
                subject: "toan",
                description: "Hành Trình Chinh Phục Toán 10 - Tập 1 (Thầy Đỗ Văn Đức)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/H%C3%A0nh%20Tr%C3%ACnh%20Chinh%20Ph%E1%BB%A5c%20To%C3%A1n%2010%20-%20T%E1%BA%ADp%201%20%28Th%E1%BA%A7y%20%C4%90%E1%BB%97%20V%C4%83n%20%C4%90%E1%BB%A9c%29.pdf"
            },
            {
                id: 2,
                title: "Hóa Học Lớp 10",
                grade: "10",
                subject: "hoa",
                description: "Làm Chủ Kiến Thức Hóa Học 10 - Tập 1 (Thầy Nguyễn Anh Phong)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/L%C3%A0m%20Ch%E1%BB%A7%20Ki%E1%BA%BFn%20Th%E1%BB%A9c%20H%C3%B3a%20H%E1%BB%8Dc%2010%20-%20T%E1%BA%ADp%201%20%28Th%E1%BA%A7y%20Nguy%E1%BB%85n%20Anh%20Phong%29.pdf"
            },
            {
                id: 3,
                title: "Toán Học Lớp 11",
                grade: "11",
                subject: "toan",
                description: "Explorer - Kiến Thức Vận Dụng, Vận Dụng Cao Toán 11 (Cô Ngọc Huyền LB)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/Explorer%20-%20Ki%E1%BA%BFn%20Th%E1%BB%A9c%20V%E1%BA%ADn%20D%E1%BB%A5ng%2C%20V%E1%BA%ADn%20D%E1%BB%A5ng%20Cao%20To%C3%A1n%2011%20%28C%C3%B4%20Ng%E1%BB%8Dc%20Huy%E1%BB%81n%20LB%29.pdf"
            },
            {
                id: 4,
                title: "Toán Học Lớp 11",
                grade: "11",
                subject: "toan",
                description: "Hành Trình Chinh Phục Toán 11 - Tập 1 (Thầy Đỗ Văn Đức)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/H%C3%A0nh%20Tr%C3%ACnh%20Chinh%20Ph%E1%BB%A5c%20To%C3%A1n%2011%20-%20T%E1%BA%ADp%201%20%28Th%E1%BA%A7y%20%C4%90%E1%BB%97%20V%C4%83n%20%C4%90%E1%BB%A9c%29.pdf"
            },
            {
                id: 5,
                title: "Toán Học Lớp 11",
                grade: "11",
                subject: "toan",
                description: "Hành Trình Chinh Phục Toán 11 - Tập 2 (Thầy Đỗ Văn Đức)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/H%C3%A0nh%20Tr%C3%ACnh%20Chinh%20Ph%E1%BB%A5c%20To%C3%A1n%2011%20-%20T%E1%BA%ADp%202%20%28Th%E1%BA%A7y%20%C4%90%E1%BB%97%20V%C4%83n%20%C4%90%E1%BB%A9c%29.pdf"
            },
            {
                id: 6,
                title: "Toán Học Lớp 11",
                grade: "11",
                subject: "toan",
                description: "Sổ Tay Tổng Hợp Kiến Thức Môn Toán 11 (Thầy Nguyễn Phan Tiến)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/S%E1%BB%95%20Tay%20T%E1%BB%95ng%20H%E1%BB%A3p%20Ki%E1%BA%BFn%20Th%E1%BB%A9c%20M%C3%B4n%20To%C3%A1n%2011%20%28Th%E1%BA%A7y%20Nguy%E1%BB%85n%20Phan%20Ti%E1%BA%BFn%29.pdf"
            },
            {
                id: 7,
                title: "Toán Học Lớp 11",
                grade: "11",
                subject: "toan",
                description: "Start Up - Kiến Thức Nền Tảng Toán 11 (Cô Ngọc Huyền LB)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/Start%20Up%20-%20Ki%E1%BA%BFn%20Th%E1%BB%A9c%20N%E1%BB%81n%20T%E1%BA%A3ng%20To%C3%A1n%2011%20%28C%C3%B4%20Ng%E1%BB%8Dc%20Huy%E1%BB%81n%20LB%29.pdf"
            },
            {
                id: 8,
                title: "Toán Học Lớp 11",
                grade: "11",
                subject: "toan",
                description: "Tổng Ôn Toàn Diện Toán 11 - Chinh Phục 10 Điểm Toán HK2 (Anh Giáo Kid)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/T%E1%BB%95ng%20%C3%94n%20To%C3%A0n%20Di%E1%BB%87n%20To%C3%A1n%2011%20-%20Chinh%20Ph%E1%BB%A5c%2010%20%C4%90i%E1%BB%83m%20To%C3%A1n%20HK2%20%28Anh%20Gi%C3%A1o%20Kid%29.pdf"
            },
			{
                id: 9,
                title: "Vật Lý Lớp 11",
                grade: "11",
                subject: "ly",
                description: "Chuyên Đề Vật Lý 11 - Tập 2 Điện Trường Và Dòng Điện (Thầy Vũ Hoàng Quân)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/L%C3%A0m%20Ch%E1%BB%A7%20V%C3%A0%20N%C3%A2ng%20Cao%20V%E1%BA%ADt%20L%C3%BD%2011%20-%20T%E1%BA%ADp%202%20%C4%90i%E1%BB%87n%20Tr%C6%B0%E1%BB%9Dng%2C%20D%C3%B2ng%20%C4%90i%E1%BB%87n%2C%20M%E1%BA%A1ch%20%C4%90i%E1%BB%87n%20%28Th%E1%BA%A7y%20V%C5%A9%20Tu%E1%BA%A5n%20Anh%29.pdf"
            },
			{
                id: 10,
                title: "Vật Lý Lớp 11",
                grade: "11",
                subject: "ly",
                description: "Làm Chủ Và Nâng Cao Vật Lý 11 - Tập 1 Dao Động Và Sóng (Thầy Vũ Tuấn Anh)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/L%C3%A0m%20Ch%E1%BB%A7%20V%C3%A0%20N%C3%A2ng%20Cao%20V%E1%BA%ADt%20L%C3%BD%2011%20-%20T%E1%BA%ADp%201%20Dao%20%C4%90%E1%BB%99ng%20V%C3%A0%20S%C3%B3ng%20%28Th%E1%BA%A7y%20V%C5%A9%20Tu%E1%BA%A5n%20Anh%29.pdf"
            },
			{
                id: 11,
                title: "Vật Lý Lớp 11",
                grade: "11",
                subject: "ly",
                description: "Làm Chủ Và Nâng Cao Vật Lý 11 - Tập 2 Điện Trường, Dòng Điện, Mạch Điện (Thầy Vũ Tuấn Anh)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/L%C3%A0m%20Ch%E1%BB%A7%20V%C3%A0%20N%C3%A2ng%20Cao%20V%E1%BA%ADt%20L%C3%BD%2011%20-%20T%E1%BA%ADp%202%20%C4%90i%E1%BB%87n%20Tr%C6%B0%E1%BB%9Dng%2C%20D%C3%B2ng%20%C4%90i%E1%BB%87n%2C%20M%E1%BA%A1ch%20%C4%90i%E1%BB%87n%20%28Th%E1%BA%A7y%20V%C5%A9%20Tu%E1%BA%A5n%20Anh%29.pdf"
            },
			{
                id: 12,
                title: "Vật Lý Lớp 11",
                grade: "11",
                subject: "ly",
                description: "Sổ Tay Công Thức Vật Lý 11 (Thầy Vũ Hoàng Quân)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/S%E1%BB%95%20Tay%20C%C3%B4ng%20Th%E1%BB%A9c%20V%E1%BA%ADt%20L%C3%BD%2011%20%28Th%E1%BA%A7y%20V%C5%A9%20Ho%C3%A0ng%20Qu%C3%A2n%29.pdf"
            },
			{
                id: 13,
                title: "Toán Học Lớp 12",
                grade: "12",
                subject: "toan",
                description: "Step 2 - Vận Dụng Toán 12 (Cô Ngọc Huyền LB)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/Step%202%20-%20V%E1%BA%ADn%20D%E1%BB%A5ng%20To%C3%A1n%2012%20%28C%C3%B4%20Ng%E1%BB%8Dc%20Huy%E1%BB%81n%20LB%29.pdf"
            },
			{
                id: 14,
                title: "Hóa Học Lớp 10",
                grade: "10",
                subject: "hoa",
                description: "Làm Chủ Kiến Thức Hóa Học 10 – Tập 2 của Thầy Nguyễn Anh Phong)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/L%C3%A0m%20Ch%E1%BB%A7%20Ki%E1%BA%BFn%20Th%E1%BB%A9c%20H%C3%B3a%20H%E1%BB%8Dc%2010%20-%20T%E1%BA%ADp%202%20%28Th%E1%BA%A7y%20Nguy%E1%BB%85n%20Anh%20Phong%29.pdf"
            },
			{
                id: 15,
                title: "Toán Học Lớp 10",
                grade: "10",
                subject: "toan",
                description: "Start Up- Kiến Thức Nền Tảng Toán 10 (Cô Ngọc Huyền LB)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/Start%20Up-%20Ki%E1%BA%BFn%20Th%E1%BB%A9c%20N%E1%BB%81n%20T%E1%BA%A3ng%20To%C3%A1n%2010%20%28C%C3%B4%20Ng%E1%BB%8Dc%20Huy%E1%BB%81n%20LB%29.pdf"
            },
			{
                id: 16,
                title: "Toán Học Lớp 10",
                grade: "10",
                subject: "toan",
                description: "Explorer – Kiến Thức Vận Dụng, Vận Dụng Cao Toán 10 (Cô Ngọc Huyền LB)",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/Explorer%20-%20Ki%E1%BA%BFn%20Th%E1%BB%A9c%20V%E1%BA%ADn%20D%E1%BB%A5ng%2C%20V%E1%BA%ADn%20D%E1%BB%A5ng%20Cao%20To%C3%A1n%2010%20%28C%C3%B4%20Ng%E1%BB%8Dc%20Huy%E1%BB%81n%20LB%29.pdf"
            },
			{
                id: 17,
                title: "Toán Học Lớp 10",
                grade: "10",
                subject: "toan",
                description: "Phong Tỏa Toán Học 10 – Tập 1",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/Phong%20T%E1%BB%8Fa%20To%C3%A1n%20H%E1%BB%8Dc%2010%20-%20T%E1%BA%ADp%201.pdf"
            },
			{
                id: 18,
                title: "Toán Học Lớp 10",
                grade: "10",
                subject: "toan",
                description: "Phong Tỏa Toán Học 10 – Tập 2",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/Phong%20T%E1%BB%8Fa%20To%C3%A1n%20H%E1%BB%8Dc%2010%20-%20T%E1%BA%ADp%202.pdf"
            },
			{
                id: 19,
                title: "Vật Lý Lớp 11",
                grade: "11",
                subject: "ly",
                description: "Chinh Phục Kiến Thức Vật Lý 11",
                downloadUrl: "https://archive.org/download/tai-lieu-on-tap/Chinh%20Ph%E1%BB%A5c%20Ki%E1%BA%BFn%20Th%E1%BB%A9c%20V%E1%BA%ADt%20L%C3%BD%2011.pdf"
            },
			{
                id: 20,
                title: "Ngữ Văn",
                grade: "10+",
                subject: "van",
                description: "Phần 1 - Rèn Kĩ Năng Xử Lý Và Chuyên Sâu Luyện Đề Chương Trình Mới (Cô Trần Thùy Dương)",
                downloadUrl: "#"
            },
			{
                id: 21,
                title: "Ngữ Văn",
                grade: "10+",
                subject: "van",
                description: "Phần 2 - Rèn Kĩ Năng Xử Lý Và Chuyên Sâu Luyện Đề Chương Trình Mới (Cô Trần Thùy Dương)",
                downloadUrl: "#"
            },
			{
                id: 22,
                title: "Đánh Giá Năng Lực - Định Lượng",
                grade: "10+",
                subject: "tonghop",
                description: "Luyện Thi ĐGNL Chuyên Đề Tư Duy Định Lượng",
                downloadUrl: "https://drive.google.com/file/d/1apU4WIC13d7Ov9ZC8NnMb8VdsfRtMLOK/view?usp=drive_link"
            },
			{
                id: 23,
                title: "Đánh Giá Năng Lực - Định Tính",
                grade: "10+",
                subject: "tonghop",
                description: "Luyện Thi ĐGNL Chuyên Đề Tư Duy Định Tính",
                downloadUrl: "https://drive.google.com/file/d/1Q_sWyE-r3WXl35ehI4MD6xJLSNswBfbN/view?usp=drive_link"
            },
			{
                id: 24,
                title: "Bài Toán Trắc Nghiệm Đúng Sai",
                grade: "10+",
                subject: "toan",
                description: "50 Bài Toán Trắc Nghiệm Đúng Sai - Chọn Lọc(Đỗ Văn Đức)",
                downloadUrl: "https://drive.google.com/file/d/14iCAR8KEqmUPfqJBbqvcGsyopYEG6bfe/view?usp=drive_link"
            },
			{
                id: 25,
                title: "Đánh Giá Năng Lực - Lịch Sử",
                grade: "10+",
                subject: "su",
                description: "Làm Chủ Kiến Thức Trọng Tâm Ôn Thi Tốt Nghiệp và ĐGNL",
                downloadUrl: "#"
            },
			{
                id: 26,
                title: "Đánh Giá Năng Lực - Lịch Sử",
                grade: "10+",
                subject: "su",
                description: "Rèn Luyện Đúng Sai 4 Nguyên Tắc Độc Quyền Chinh Phục Lịch Sử (Cô Lan Hương)",
                downloadUrl: "https://drive.google.com/file/d/1PulQW4YF5vrIKLKnm_TQBSGZCu6beRdC/view?usp=drive_link"
            },
			{
                id: 27,
                title: "Cơ Bản Bản Và Nâng Cao - Lịch Sử",
                grade: "10+",
                subject: "su",
                description: "Hệ Thống Kiến Thức Lịch Sử Cơ Bản Bản Và Nâng Cao Ôn Thi TN Và ĐGNL",
                downloadUrl: "https://drive.google.com/file/d/1SK-exPpRsSEegNcY87R7lIkoNFdYhJk9/view?usp=drive_link"
            },
			{
                id: 28,
                title: "Lý Luận Văn Học",
                grade: "10+",
                subject: "van",
                description: "Lý Luận Văn Học Cùng Rubik Tập 1",
                downloadUrl: "https://drive.google.com/file/d/1A1IBDtT_uC-L-RiHydoyzjJiuHHIZU_K/view?usp=drive_link"
            },
			{
                id: 29,
                title: "Lý Luận Văn Học",
                grade: "10+",
                subject: "van",
                description: "Lý Luận Văn Học Cùng Rubik Tập 1",
                downloadUrl: "https://drive.google.com/file/d/1uhIgsAnDJavkFtdt_LtCOEwYbdBXFWVg/view?usp=drive_link"
            }
        ];

        // DOM Elements
        const productsList = document.getElementById('productsList');
        const documentsList = document.getElementById('documentsList');
        const gradeFilter = document.getElementById('gradeFilter');
        const subjectFilter = document.getElementById('subjectFilter');
        const resetFilter = document.getElementById('resetFilter');

        // Biến toàn cục
        let autoRotateInterval;

        // Sắp xếp tài liệu theo thứ tự A-Z
        documents.sort((a, b) => a.title.localeCompare(b.title));

        // Khởi tạo banner quảng cáo
        initBanner();

        // Hiển thị tất cả tài liệu ban đầu
        displayDocuments(documents);

        // Hàm khởi tạo banner
        function initBanner() {
            // Hiển thị 5 sản phẩm ngẫu nhiên ban đầu
            displayProducts(getRandomProducts(5));
            
            // Thiết lập tự động xoay sản phẩm mỗi 3 giây
            autoRotateInterval = setInterval(rotateBannerProducts, 3000);
        }

        // Hàm xoay sản phẩm trong banner
        function rotateBannerProducts() {
            // Chọn ngẫu nhiên 5 sản phẩm từ danh sách tất cả sản phẩm
            const newProducts = getRandomProducts(5);
            
            // Hiển thị sản phẩm mới với hiệu ứng mượt mà
            displayProducts(newProducts);
        }

        // Hàm lấy sản phẩm ngẫu nhiên
        function getRandomProducts(count) {
            const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }

        // Hàm hiển thị sản phẩm quảng cáo
			function displayProducts(products) {
		// Tạo HTML cho tất cả sản phẩm
			const productsHTML = products.map(product => {
        // Tạo một ID ngẫu nhiên cho sản phẩm để tránh trùng lặp
        const productId = `product-${product.id}-${Date.now()}`;
        
        return `
            <div class="product-card">
                <div class="product-image-container" onclick="window.open('${product.link}', '_blank')">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <button class="product-link" onclick="window.open('${product.link}', '_blank')">Xem chi tiết</button>
                </div>
            </div>
        `;
    }).join('');
    
    // Cập nhật nội dung banner một cách mượt mà
    productsList.innerHTML = productsHTML;
}

        // Hàm hiển thị tài liệu
        function displayDocuments(docs) {
            documentsList.innerHTML = '';
            
            if (docs.length === 0) {
                documentsList.innerHTML = `
                    <div class="no-results">
                        <p>Không tìm thấy tài liệu nào phù hợp với bộ lọc.</p>
                        <button class="reset-btn" id="resetNoResults">Hiển thị tất cả tài liệu</button>
                    </div>
                `;
                
                document.getElementById('resetNoResults').addEventListener('click', () => {
                    gradeFilter.value = 'all';
                    subjectFilter.value = 'all';
                    displayDocuments(documents);
                });
                return;
            }
            
            docs.forEach(doc => {
                const gradeText = `Lớp ${doc.grade}`;
                const subjectText = getSubjectName(doc.subject);
                
                // Kiểm tra xem có URL tải xuống hợp lệ không
                const hasDownload = doc.downloadUrl && doc.downloadUrl !== "#";
                
                const documentElement = document.createElement('div');
                documentElement.className = 'document-card';
                documentElement.innerHTML = `
                    <h3 class="document-title">${doc.title}</h3>
                    <div class="document-info">
                        <span class="document-grade">${gradeText}</span>
                        <span class="document-subject">${subjectText}</span>
                    </div>
                    <p class="document-description">${doc.description}</p>
                    <div class="document-actions">
                        ${hasDownload ? 
                            `<button class="btn btn-download" data-url="${doc.downloadUrl}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                                Tải xuống
                            </button>` : 
                            `<div class="no-download">Tài liệu đang cập nhật</div>`
                        }
                    </div>
                `;
                
                documentsList.appendChild(documentElement);
            });
            
            // Thêm sự kiện click cho tất cả nút tải xuống
            document.querySelectorAll('.btn-download').forEach(button => {
                button.addEventListener('click', function() {
                    const url = this.getAttribute('data-url');
                    window.open(url, '_blank');
                });
            });
        }

        // Hàm lấy tên môn học từ mã môn học
        function getSubjectName(subjectCode) {
            const subjectNames = {
                'toan': 'Toán học',
                'ly': 'Vật lý',
                'hoa': 'Hóa học',
                'van': 'Ngữ văn',
                'anh': 'Tiếng Anh',
                'sinh': 'Sinh học',
				'tonghop': 'Tổng Hợp',
				'su': 'Lịch Sử'
            };
            
            return subjectNames[subjectCode] || subjectCode;
        }

        // Hàm lọc tài liệu
        function filterDocuments() {
            const selectedGrade = gradeFilter.value;
            const selectedSubject = subjectFilter.value;
            
            let filteredDocs = documents;
            
            if (selectedGrade !== 'all') {
                filteredDocs = filteredDocs.filter(doc => doc.grade === selectedGrade);
            }
            
            if (selectedSubject !== 'all') {
                filteredDocs = filteredDocs.filter(doc => doc.subject === selectedSubject);
            }
            
            displayDocuments(filteredDocs);
        }

        // Sự kiện lọc
        gradeFilter.addEventListener('change', filterDocuments);
        subjectFilter.addEventListener('change', filterDocuments);

        // Sự kiện reset bộ lọc
        resetFilter.addEventListener('click', () => {
            gradeFilter.value = 'all';
            subjectFilter.value = 'all';
            displayDocuments(documents);
        });
