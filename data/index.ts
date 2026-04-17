import { links } from "@/config";

export const navItems = [
  { name: "Giới thiệu", link: "#about" },
  { name: "Dự án", link: "#projects" },
  { name: "Liên hệ", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Giới thiệu",
description: "Em là Đào Lê Quang Vinh, một sinh viên ngành Thương mại điện tử là một người quan sát tỉ mỉ các tệp hành vi người dùng. Với con mắt sắc sảo chú ý đến từng chi tiết và một tư duy kỷ luật, em luôn duy trì tính trật tự trong cả các dự án thực tế lẫn các dòng code cá nhân của mình. Em đề cao sự chuẩn xác, khả năng kiểm soát và tính cấu trúc hệ thống, luôn nỗ lực để giữ cho mọi thứ vận hành một cách sắc bén, tối ưu và cân bằng.",
    title2: "Học vấn",
    description2: "2023 - Hiện tại \u00A0\u00A0 Đại học văn lang",
    description3: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Thương mại điện tử",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
  },
  
  {
    id: 4,
    title: "Công cụ sử dụng",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

 
] as const;

export const projects = [
  {
    id: 1,
    title: "Fishto - Game Blockchain",
    des: "Game câu cá cho phép người dùng mua bán và trao đổi vật phẩm kỹ thuật số..",
    img: "/tanyaai.png",
    iconLists: ["/java.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 2,
    title: "CocoonVietnam",
    des: "Một website dành cho cocoon phục vụ cho dự án học tập kết nối trực tiếp với nền tảng instagram",
    img: "/CocoonVietnamWeb.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "https://vinhneee.github.io/CocoonVietnamWeb/",
    sourceCode: "https://github.com/vinhneee/CocoonVietnamWeb",
  },
  {
    id: 3,
    title: "Phân tích hoạt động bán hàng hỗ trợ GearVn",
    des: "Đây là một bài báo cáo bằng PowerBi dựa trên các dữ liệu khách hàng của GearVn",
    img: "/Báo cáo.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "https://docs.google.com/presentation/d/1KyURHHaR3_AR0tO8fSYPHxLez0CPFH5o/edit?usp=drive_link&ouid=101865716563151178207&rtpof=true&sd=true",
    sourceCode: "https://docs.google.com/presentation/d/1KyURHHaR3_AR0tO8fSYPHxLez0CPFH5o/edit?usp=drive_link&ouid=101865716563151178207&rtpof=true&sd=true",
  },
  {
    id: 4,
    title: "Frago - nền tảng kết nối các doanh nghiệp",
    des: "Frago là một nền tảng kết nối các doanh nghiệp nhượng quyền với nhau thông qua hình thức quẹt để kết nối như tinder.",
    img: "/Frago.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "https://vinhneee.github.io/Fragoapp/",
    sourceCode: "https://github.com/vinhneee/Fragoapp",
  },
] as const;

export const testimonials = [
  {
    quote: `Làm việc cùng ${links.ownerName} là một trải nghiệm tuyệt vời. Sự chuyên nghiệp, nhiệt huyết và tinh thần trách nhiệm cao trong từng dự án luôn được thể hiện rõ ràng. ${links.ownerName} luôn mang đến những giải pháp sáng tạo và hiệu quả.`,
    name: "Nguyễn Văn An",
    title: "Giảng viên hướng dẫn - Đại học Văn Lang",
  },
  {
    quote: `${links.ownerName} là một người đồng đội đáng tin cậy. Khả năng phân tích dữ liệu và tư duy logic giúp nhóm chúng tôi hoàn thành dự án đúng tiến độ với chất lượng cao.`,
    name: "Trần Minh Khoa",
    title: "Trưởng nhóm dự án Frago",
  },
  {
    quote: `Tôi ấn tượng với khả năng học hỏi nhanh và sự tỉ mỉ của ${links.ownerName}. Từ thiết kế giao diện đến phân tích dữ liệu, mọi thứ đều được thực hiện một cách chỉn chu và chuyên nghiệp.`,
    name: "Lê Thị Hồng Nhung",
    title: "Đồng nghiệp dự án CocoonVietnam",
  },
  {
    quote: `${links.ownerName} có khả năng sử dụng nhiều công cụ như PowerBI, SQL, và các framework web một cách thành thạo. Đây là một nhân tố quan trọng trong bất kỳ đội ngũ phát triển nào.`,
    name: "Phạm Quốc Huy",
    title: "Mentor - Chương trình thực tập",
  },
  {
    quote: `Sự kiên trì và đam mê công nghệ của ${links.ownerName} thực sự truyền cảm hứng. Luôn sẵn sàng hỗ trợ đồng đội và không ngại thử thách mới.`,
    name: "Võ Thanh Tùng",
    title: "Bạn học - Đại học Văn Lang",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Photoshop",
    img: "/photoshop.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "PowerBI",
    img: "/powerbi.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "SQL",
    img: "/mysql.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "NextJS",
    img: "/nextjs.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 6,
    name: "PHP",
    img: "/php.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 7,
    name: "Excel",
    img: "/excel.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "PPT",
    img: "/ppt.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "Claude",
    img: "/claude.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "Unity",
    img: "/unity.svg",
    nameImg: "/dockerName.svg",
  },
] as const;


export const socialMedia = [
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.instagram.com/qng.znh_/",
  },
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/vinhneee",
  },
  
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
