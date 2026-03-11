// 简单的平滑滚动效果处理，以及后续可能添加的交互逻辑
document.addEventListener('DOMContentLoaded', () => {
    console.log("欢迎访问我的个人主页！");

    // 获取所有导航链接
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // 提取目标 id
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 考虑到固定导航栏的高度，进行偏移计算
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });
});